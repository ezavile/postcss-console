import * as postcss from 'postcss';
import MessageFactory from './MessageFactory';

const postcssConsole = postcss.plugin('postcss-console', (opts) => {
    return (css) => {
      css.walkAtRules(/console\w*/, atRule => {
        const message = MessageFactory.getMessage(atRule);
        console.log(message.getFileName());
        try {
          console.log(message.output(atRule.params));
          atRule.remove();
        } catch (error) {
          throw atRule.error(error);
        }
      });
    };
});

export = postcssConsole;
