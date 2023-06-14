import { RawBodyMiddleware } from './raw-body.middleware';

describe('RawBodyMiddleware', () => {
  it('should be defined', () => {
    expect(new RawBodyMiddleware()).toBeDefined();
  });
});
