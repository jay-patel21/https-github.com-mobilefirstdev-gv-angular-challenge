import { Component } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Message } from '../../models/message';
import { TextMessage } from '../../models/text-message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent {
  messages$ = this.messagingService.messages$;

  constructor(private messagingService: MessagingService) {}

  isTextMessage(message: Message): boolean {
    return message instanceof TextMessage;
  }
}
