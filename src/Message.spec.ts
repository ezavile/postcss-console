import test, { TestContext } from 'ava';
import Message from './Message';

const message = new Message('./fakeStyle.css', 1, 2);

test('check the structure of the output message', t => {
  const msg = message.output('testing message');
  t.true(msg.includes('[postcss-console]'));
  t.true(msg.includes('(1,2)'));
});
