import assert from 'node:assert';
import { mock } from 'node:test';

import { request } from './fetch.js';

const mockingFetch: typeof fetch = async (url) => {
  return new Response('mock response')
}

const { mock: fetchMock } = mock.method(globalThis, 'fetch', mockingFetch);

assert.strictEqual(fetchMock.callCount(), 0);
const res = await request('https://example.com');
assert.strictEqual(res, 'mock response');
assert.strictEqual(fetchMock.callCount(), 1);

const call = fetchMock.calls[0];

assert.deepStrictEqual(call.arguments, ['https://example.com']);
assert.strictEqual(call.this, undefined);
