import { Subjects, Publisher, OrderCancelledEvent } from "@rscom/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
