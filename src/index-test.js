import assert from 'node:assert';
import { mock } from 'node:test';

import main from './index.js';

mock.method(console, 'log', () => {});

assert.strictEqual(console.log.mock.callCount(), 0);
main();
assert.strictEqual(console.log.mock.callCount(), 1);

const call = console.log.mock.calls[0];

assert.deepStrictEqual(call.arguments, ['olive branch']);
assert.strictEqual(call.result, undefined);
assert.strictEqual(call.this, console);
