import * as postcss from 'postcss';

import Message from './Message';
import Log from './Log';
import Warn from './Warn';
import Error from './Error';
import Assert from './Assert';

export default class MessageFactory {
  static getMessage(atRule: postcss.AtRule): Message {
    const file = atRule.source.input.file;
    const { line, column } = atRule.source.start;

    switch (atRule.name) {
      case 'console.log':
        return new Log(file, line, column);
      case 'console.warn':
        return new Warn(file, line, column);
      case 'console.error':
        return new Error(file, line, column);
      case 'console.assert':
        return new Assert(file, line, column);
      default:
        throw atRule.error(`Don't exist this method "${atRule.name}"`);
    }
  }
}
