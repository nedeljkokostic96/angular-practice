import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: boolean = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5;
  }

  onClickButtonStartStop() {
    if (this.serverStatus) {
      this.serverStatus = false;
    } else {
      this.serverStatus = Math.random() > 0.5;
    }
  }

  getStartStopButtonStyle() {
    return {
      marginLeft: '1em',
      padding: '1em',
      borderRadius: '10px',
      width: '10em',
      marginBottom: '10px',
      backgroundColor: this.serverStatus ? 'rgb(250, 183, 183)' : 'palegreen',
    };
  }

  getStyle() {
    return {
      backgroundColor: this.serverStatus ? 'palegreen' : 'rgb(250, 183, 183)',
      boxShadow: this.serverStatus ? 'none' : '1px 1px 5px 5px red',
      border: this.serverStatus ? 'none' : '1px solid red',
    };
  }

  getServerStatus() {
    return this.serverStatus ? 'RUNNING' : 'DOWN';
  }
}
