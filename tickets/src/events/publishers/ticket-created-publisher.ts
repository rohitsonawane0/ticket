import { Publisher, Subjects, TicketCreatedEvent } from "@rscom/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
