import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = '';
  serverCreated = false;
  servers = ['server 1', 'server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created. Server Name is " + this.serverName;
  }

  onUpdateServerName(event: any){
    console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
