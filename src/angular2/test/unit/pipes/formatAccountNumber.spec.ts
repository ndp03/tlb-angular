import { Pipe } from '@angular/core';

import { FormatAccountNumber } from '../../../app/pipes/formatAccountNumber';

describe('formatAccountNumber Pipe', () => { 
  let pipe: FormatAccountNumber;

  beforeEach(() => {
    pipe = new FormatAccountNumber();
  });

  it('should transform "12345678" to "1234 5678"', () => {
    expect(pipe.transform('12345678')).toEqual('1234 5678');
  });

  
  it('should transform "1234567890" to "1234 567890', () => {
      expect(pipe.transform('1234567890')).toEqual('1234 567890');
  });

  it('should return null', () => {
      expect(pipe.transform(null)).toEqual(null);
  });

  it('should return undefined', () => {
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

});