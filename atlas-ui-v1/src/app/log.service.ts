import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logLevelRoot = 'debug';

  constructor() { }

  log(logLevel: string, message: string, arg: any) {
    if (this.logLevelRoot === logLevel) {
      console.log(message, arg);
    } else if ('error' === logLevel) {
      console.error(message, arg);
    }
  }
}
