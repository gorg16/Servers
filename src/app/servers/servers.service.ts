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
      'Server 1',
              'Active',
              './assets/images/10.png',
      'WEB',
      'Dissconnected',
      [65, 59, 80, 56, 56, 55, 40, 45, 34, 66, 123, 56 ],
      15
             ),
    new Server(2,
      'Server 2',
              'offline',
              './assets/images/4.png',
      'EMAIL',
      'Connected',
      [65, 24, 80, 56, 56, 55, 40, 45, 24, 66, 123, 56 ],
      45
              ),
     new Server(3,
       'Server 3',
       'offline',
       './assets/images/1.png',
       'HTTP',
       'DisConnected',
       [65, 12, 80, 56, 56, 70, 40, 45, 24, 66, 123, 56 ],
       65
     ),
     new Server(4,
       'Server 4',
       'active',
       './assets/images/16.jpg',
       'SSH',
       'Connected',
       // [50, 60, 120, 130, 120, 60, 60, 120, 130, 120, 60, 50 ],
       [12, 3, 8, 17, 23, 18, 16, 35, 50 , 43, 12,  21],
       48
     ),
     new Server(5,
       'Server 5',
       'acitve',
       './assets/images/7.png',
       'SSH',
       'DisConnected',
       [0, 59, 80, 56, 56, 55, 40, 45, 12, 66, 123, 56 ],
       86
     ),
              ];

  getServers() {
    return this.servers.slice();
  }


  getServer(index: number) {
    return this.servers[index];
  }

}
