import { Pipe } from '@angular/core';

import { SpaceInNumber } from '../../../app/pipes/spaceInNumber';

describe('spaceInNumber Pipe', () => { // <----------------
  let pipe: SpaceInNumber;

  beforeEach(() => {
    pipe = new SpaceInNumber();
  });

  it('should transform "abc" to "a b c"', () => {
    expect(pipe.transform('abc')).toEqual('a b c');
  });

  it('should transform "12345" to "1 2 3 4 5"', () => {
    expect(pipe.transform('12345')).toEqual('1 2 3 4 5');
  });

   it('should return null', () => {
    expect(pipe.transform(null)).toEqual(null);
  });

  it('should return undefined', () => {
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

}); // <----------------