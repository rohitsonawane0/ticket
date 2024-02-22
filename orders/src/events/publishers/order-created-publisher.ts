import { Publisher, OrderCreatedEvent, Subjects } from "@rscom/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
