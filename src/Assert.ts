const colors = require('colors');

import Message from './Message';

export default class Assert extends Message {
  constructor(fileName: string, line: number, column: number) {
    super(fileName, line, column);
  }
  public output(msg: string): string {
    try {
      if (eval(msg)) {
        msg = `Assertion passed: ${msg}`;
        return super.output(colors.green(msg));
      } else {
        msg = `Assertion failed: ${msg}`;
        return super.output(colors.red(msg));
      }
    } catch (error) {
      throw new Error(error.toString());
    }
  }
}
