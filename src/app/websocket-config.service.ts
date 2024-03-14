import { Injectable } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class WebsocketConfigService {
  private stompClient: Stomp.Client;

  constructor() {

    this.stompClient = new Stomp.Client();
   }

  connect(): void {
    const socket = new SockJS('http://localhost:8080/stompt');
    this.stompClient.activate();
    this.stompClient.onConnect = (frame: Stomp.Frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/data-updates', (message) => {
        console.log('Received: ' + message.body);
      
      });
    };
  }
  
  disconnect(): void {
    if (this.stompClient.connected) {
      this.stompClient.deactivate({ force: true });
      console.log('Disconnected');
    }
  }
  
}
