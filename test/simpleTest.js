import test from 'ava'
import {log} from '../src/log'

test('a function is defined', t => {
  // .true(value)
  // assert that `value` is `true`
  t.true(typeof log === 'function')

  // print a message contextually alongside the test
  // more useful than console.log
  t.log('yay, we a have function!')
})

test('returns hello world', t => {
  // .is(value, expected)
  // assert that 'value' === 'expected'
  t.is(log('hello world'), 'hello world')
})
// test that arg is not a number
