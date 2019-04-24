import {Injectable} from '@angular/core';
import {Server} from './servers.modal';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
   public serverTypes = new BehaviorSubject(null);
   public servers: Server[] = [
    new Server(1,
      'WEB SERVER',
              'Active',
              './assets/images/10.png',
      'WEB',
      'Dissconnected',
      [65, 59, 80, 56, 56, 55, 40, 45, 34, 66, 123, 56 ],
      15
             ),
    new Server(2,
      'FTP SERVER',
              'offline',
              './assets/images/4.png',
      'FTP',
      'Connected',
      [65, 24, 80, 56, 56, 55, 40, 45, 24, 66, 123, 56 ],
      45
              ),
     new Server(3,
       'HTTP SERVER',
       'offline',
       './assets/images/1.png',
       'HTTP',
       'DisConnected',
       [65, 12, 80, 56, 56, 70, 40, 45, 24, 66, 123, 56 ],
       65
     ),
     new Server(4,
       'SSH SERVER',
       'active',
       './assets/images/16.jpg',
       'SSH',
       'Connected',
       // [50, 60, 120, 130, 120, 60, 60, 120, 130, 120, 60, 50 ],
       [12, 3, 8, 17, 23, 18, 16, 35, 50 , 43, 12,  21],
       48
     ),
     new Server(5,
       'NTP SERVER',
       'acitve',
       './assets/images/7.png',
       'NTP',
       'DisConnected',
       [0, 59, 80, 56, 56, 55, 40, 45, 12, 66, 123, 56 ],
       86
     ),
     new Server(6,
       'POP3 SERVER',
       'acitve',
       './assets/images/7.png',
       'POP3',
       'DisConnected',
       [75, 86, 34, 85, 23, 2, 96, 45, 45, 66, 123, 56 ],
       78
     ),
     new Server(7,
       'SMTP SERVER',
       'acitve',
       './assets/images/7.png',
       'SMTP',
       'DisConnected',
       [10, 98, 56, 78, 16, 6, 13, 57, 61, 86, 17, 52 ],
       19
     ),
              ];

  getServers() {
    return this.servers.slice();
  }


  getServer(index: number) {
    return this.servers[index];
  }

}
