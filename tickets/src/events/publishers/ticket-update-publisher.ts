import { Publisher, Subjects, TicketUpdatedEvent } from "@rscom/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
