import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  constructor() {
    this.messages.push('111111111');
    this.messages.push('111111111');
    this.messages.push('111111111');
    this.messages.push('111111111');
  }
  add(meesage: string) {
    this.messages.push(meesage);
  }
  clear() {
    this.messages = [];
  }
}
