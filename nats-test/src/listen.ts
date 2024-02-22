import nats, { Message, Stan } from "node-nats-streaming";

const stan = nats.connect("ticketing", "123", {
  url: "http://localhost:4222",
});
console.clear();
stan.on("connect", () => {
  console.log("listner");

  new TicketCreatedListner(stan).listen();
});

abstract class listner {
  abstract subject: string;
  abstract queueGroupName: string;
  abstract onMessage(data: any, msg: any): void;
  private client: Stan;
  protected ackWait = 5 * 1000;
  constructor(client: Stan) {
    this.client = client;
  }
  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }
  listen() {
    const subsciption = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );
    subsciption.on("message", (msg: Message) => {
      console.log(`msg recie: ${this.subject} /${this.queueGroupName}`);
      console.log(msg.getData());
      const parsedData = this.parseMessage(msg);
      msg.ack();
    });
  }

  parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf-8"));
  }
}

class TicketCreatedListner extends listner {
  subject: string = "ticket:created";
  queueGroupName: string = "payment-service";
  onMessage(data: any, msg: any): void {
    console.log("evenrt data");
    console.log(data.name);
  }
}
