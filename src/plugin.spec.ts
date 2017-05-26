import test from 'ava';
import hi from './plugin';

test('should return hi', t => {
  t.is(hi(), 'hi');
});
