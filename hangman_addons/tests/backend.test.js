const request = require('supertest');
const express = require('express');

describe('API Routes', () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use(express.json());
    server.get('/api/word', (req, res) => res.json({ word: 'test' }));
  });

  it('should return a word', async () => {
    const res = await request(server).get('/api/word');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('word');
  });
});
