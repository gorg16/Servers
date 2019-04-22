import {Injectable} from '@angular/core';
import {Server} from './servers.modal';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }

   public servers: Server[] = [
    new Server('Server 1',
              'Active',
              './assets/images/10.png',
      'unKnown',
      'Dissconnected',
      [65, 59, 80, 56, 56, 55, 40, 45, 34, 66, 123, 56 ],
      15
             ),
    new Server('Server 2',
              'offline',
              './assets/images/4.png',
      'Known',
      'Connected',
      [65, 24, 80, 56, 56, 55, 40, 45, 24, 66, 123, 56 ],
      45
              ),
     new Server('Server 3',
       'offline',
       './assets/images/1.png',
       'Known',
       'DisConnected',
       [65, 12, 80, 56, 56, 70, 40, 45, 24, 66, 123, 56 ],
       65
     ),
     new Server('Server 4',
       'offline',
       './assets/images/16.jpg',
       'Known',
       'Connected',
       // [50, 60, 120, 130, 120, 60, 60, 120, 130, 120, 60, 50 ],
       [12, 3, 8, 17, 23, 18, 16, 35, 50 , 43, 12,  21],
       48
     ),
     new Server('Server 5',
       'offline',
       './assets/images/7.png',
       'Known',
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
