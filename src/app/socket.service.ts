import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_allDatta ="/api/alldata"

  constructor(private httpClient: HttpClient) {

   }
   getAllData(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_allDatta);
   }

}
