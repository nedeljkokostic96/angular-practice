import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  serverList: string[] = [];
  allowNewServer = true;
  newServerName = '';
  serverCreated = false;

  constructor() {
    setInterval(() => {
      console.log(this.serverList);
    }, 10000);
  }

  onCreateServer() {
    if (this.newServerName !== '') {
      this.serverList.push(this.newServerName);
      this.serverCreated = true;
      this.newServerName = '';
      setTimeout(() => {
        this.serverCreated = false;
      }, 3000);
    }
  }

  onUpdateServerName(event: any) {
    this.newServerName = event.target.value;
  }
}
