import assert from 'node:assert';
import { mock } from 'node:test';

import main from './index.js';

const mockingConsoleLog: typeof console.log = () => {};

const { mock: logMock } = mock.method(console, 'log', mockingConsoleLog);

assert.strictEqual(logMock.callCount(), 0);
main();
assert.strictEqual(logMock.callCount(), 1);

const call = logMock.calls[0];

assert.deepStrictEqual(call.arguments, ['olive branch']);
assert.strictEqual(call.result, undefined);
assert.strictEqual(call.this, console);
