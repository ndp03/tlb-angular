import { Pipe } from '@angular/core';

import { FormatMobileNumber } from '../../../app/pipes/formatMobileNumber';

describe('spaceInNumber Pipe', () => { // <----------------
  let pipe: FormatMobileNumber;

  beforeEach(() => {
    pipe = new FormatMobileNumber();
  });


  it('should transform "1234567890" to "1234 567 890"', () => {
    expect(pipe.transform('1234567890')).toEqual('1234 567 890');
  });

  it('should transform "123456789" to "123456789"', () => {
    expect(pipe.transform('123456789')).toEqual('123456789');
  });

  it('should transform "12345" to "12345"', () => {
    expect(pipe.transform('12345')).toEqual('12345');
  });

  it('should transform "12345678901234" to "1234 567 8901234"', () => {
    expect(pipe.transform('12345678901234')).toEqual('1234 567 8901234');
  });

  it('should return null', () => {
    expect(pipe.transform(null)).toEqual(null);
  });

  it('should return undefined', () => {
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

}); // <----------------