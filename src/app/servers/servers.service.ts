import {Injectable} from '@angular/core';
import {Server} from './servers.modal';
import {BehaviorSubject} from 'rxjs';
import {LogsModel} from './logs.model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  index: number;

  constructor() { }
   public serverTypes = new BehaviorSubject(null);
   public servers: Server[] = [
     new Server(1,
      'WEB SERVER',
      'Active',
      '12h 30m',
      'WEB',
      'Active',
      [65, 59, 80, 56, 56, 55, 40, 45, 34, 66, 123, 56 ],
      15,
      'Oct 2019',
      15,
      'October',
      'November',
       [
         new LogsModel('Success', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Success', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Success', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Success', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
       ]
             ),
     new Server(2,
       'FTP SERVER',
       'offline',
       '25h 12m',
       'FTP',
       'Stoped',
       [65, 24, 80, 56, 56, 55, 40, 45, 24, 66, 123, 56 ],
       45,
       'Nov 2017',
       23,
       'May',
       'April',
       // 'Failure',
       // 'Success',
       // new Date( '2018-07-13'),
       // new Date('2018-09-13')
       [
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
       ]
     ),
     new Server(3,
       'HTTP SERVER',
       'offline',
       '15h 45m',
       'HTTP',
       'Active',
       [65, 12, 80, 56, 56, 70, 40, 45, 24, 66, 123, 56 ],
       65,
       'Sep 2018',
       7,
       'January',
       'February',
       // 'Success',
       // 'Failure',
       // new Date( '2018-07-14'),
       // new Date('2018-08-13')
       [
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'Ando'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'Gor'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'Vahan'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'Narek'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'Artyom'),
       ]

     ),
     new Server(4,
       'SSH SERVER',
       'active',
       '18h 34m',
       'SSH',
       'Stoped',
       // [50, 60, 120, 130, 120, 60, 60, 120, 130, 120, 60, 50 ],
       [12, 3, 8, 17, 23, 18, 16, 35, 50 , 43, 12,  21],
       48,
       'Mar 2017',
       12,
       'August',
       'September',
       [
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
       ]

     ),
     new Server(5,
       'NTP SERVER',
       'acitve',
       '9h 17m',
       'NTP',
       'Active',
       [0, 59, 80, 56, 56, 55, 40, 45, 12, 66, 123, 56 ],
       86,
       'Dec 2018',
       15,
       'June',
       'July',
       [
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
       ]

     ),
     new Server(6,
       'POP3 SERVER',
       'acitve',
       '10h 25m',
       'POP3',
       'DisConnected',
       [75, 86, 34, 85, 23, 2, 96, 45, 45, 66, 123, 56 ],
       78,
       'Apr 2018',
       4,
       'November',
       'December',
       [
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'slfkansdl'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'dcaslnad'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'dcaslnad'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'dcaslnad'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'dcaslnad'),
       ]

     ),
     new Server(7,
       'SMTP SERVER',
       'acitve',
       '16h 54m',
       'SMTP',
       'Stoped',
       [10, 98, 56, 78, 16, 6, 13, 57, 61, 86, 17, 52 ],
       19,
       'Dec 2019',
       8,
       'December',
       'January',
       [
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
         new LogsModel('Failure', new Date( '2018-07-12'), 'akusgdahs;oldmaouash;odnxmkasdhkhgaudon;aezhyewigapnzodqowe'),
       ]

     ),
              ];

  getServers() {
    return this.servers.slice();
  }


  getServer(index: number) {
    this.setCurrentIndex(this.servers[index]);
    return this.servers[index];
  }

  setCurrentIndex(index) {
      this.index = index;
    // console.log(this.index, 'index');
  }

  getIndex(): number {
    return this.index;
  }

  getServerData() {
    console.log(this.index, 'indexxxxxx');
    return this.index;
  }

}
