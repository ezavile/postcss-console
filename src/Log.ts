const colors = require('colors');

import Message from './Message';

export default class Log extends Message {
  constructor(fileName: string, line: number, column: number) {
    super(fileName, line, column);
  }
  public output(msg: string): string {
    return super.output(colors.white(msg));
  }
}
