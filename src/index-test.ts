import assert from 'node:assert';
import { mock } from 'node:test';

import main from './index.js';

const log = mock.method(console, 'log', () => {});

assert.strictEqual(log.mock.callCount(), 0);
main();
assert.strictEqual(log.mock.callCount(), 1);

const call = log.mock.calls[0];

assert.deepStrictEqual(call.arguments, ['olive branch']);
assert.strictEqual(call.result, undefined);
assert.strictEqual(call.this, console);
