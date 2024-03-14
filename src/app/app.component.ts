import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { OnInit } from '@angular/core';
import { WebsocketConfigService } from './websocket-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService]
})
export class AppComponent implements OnInit{
  title = 'angular_test';
  datamodel: any[] = [];
  //datamodel: Object | undefined

  constructor(private socketService: SocketService, private websocketconfigservice: WebsocketConfigService){

  }

  ngOnInit(){
    this.socketService.getAllData().subscribe((data: any) => {
      this.datamodel = data;
    });
    this.websocketconfigservice.connect();
    

    
      
  }
}
