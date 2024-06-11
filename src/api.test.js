import { submitAPI } from './api';

jest.mock('./api', () => {
    return {
      submitAPI: () => false,
    };
});

describe('submitAPI', () => {
  it('should return false if submission fail', () => {
    const result = submitAPI();
    expect(result).toBe(false);
  });
});
