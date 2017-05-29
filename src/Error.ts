const colors = require('colors');

import Message from './Message';

export default class Error extends Message {
  constructor(fileName: string, line: number, column: number) {
    super(fileName, line, column);
  }
  public output(msg: string): string {
    return super.output(colors.red(msg));
  }
}
