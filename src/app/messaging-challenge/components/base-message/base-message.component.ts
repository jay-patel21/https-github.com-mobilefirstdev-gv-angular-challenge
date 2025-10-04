import {Component, Input} from '@angular/core';
import {Message} from '../../models/message';

@Component({ template: '' })
export abstract class BaseMessageComponent {

  @Input() message: Message;

}
