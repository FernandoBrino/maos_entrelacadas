import { JsonBodyMiddleware } from './json-body.middleware';

describe('JsonBodyMiddleware', () => {
  it('should be defined', () => {
    expect(new JsonBodyMiddleware()).toBeDefined();
  });
});
