const test = require('node:test');
const assert = require('node:assert/strict');
const { requestHandler } = require('../src/app');

test('returns Hello Jenkins', () => {
  let responseData = '';
  const req = {};
  const res = {
    writeHead(status, headers) {
      this.statusCode = status;
      this.headers = headers;
    },
    end(data) {
      responseData = data;
    }
  };

  requestHandler(req, res);

  assert.equal(res.statusCode, 200);
  assert.equal(responseData, 'Hello Jenkins');
});

