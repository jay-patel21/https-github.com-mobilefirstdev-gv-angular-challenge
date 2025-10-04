import { Component } from '@angular/core';
import { BaseMessageComponent } from '../base-message/base-message.component';

@Component({
  selector: 'app-text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.scss']
})
export class TextMessageComponent extends BaseMessageComponent {}
