import { Pipe } from '@angular/core';

import { FormatBsbNumber } from '../../../app/pipes/formatBsbNumber';

describe('formatAccountNumber Pipe', () => { // <----------------
  let pipe: FormatBsbNumber;

  beforeEach(() => {
    pipe = new FormatBsbNumber();
  });

  it('should transform "123456" to "123 456"', () => {
    expect(pipe.transform('123456',[])).toEqual('123-456');
  });

  it('should return "1ab2c3"', () => {
    expect(pipe.transform('1ab2c3', [])).toEqual('1ab2c3');
  });

  it('should return 234313"$&+,:;=?@#|\'<>.^*()%!-', () => {
    expect(pipe.transform('234313"$&+,:;=?@#|\'<>.^*()%!-', [])).toEqual('234313"$&+,:;=?@#|\'<>.^*()%!-');
  });

  it('should return null', () => {
    expect(pipe.transform(null, [])).toEqual(null);
  });

  it('should return undefined', () => {
    expect(pipe.transform(undefined, [])).toEqual(undefined);
  });

  it('should return empty string', () => {
    expect(pipe.transform('', [])).toEqual('');
  });


  // it('should transform "12345" to "1 2 3 4 5"', () => {
  //   expect(pipe.transform('12345')).toEqual('1 2 3 4 5');
  // });

  //  it('should return null', () => {
  //   expect(pipe.transform(null)).toEqual(null);
  // });

  // it('should return undefined', () => {
  //   expect(pipe.transform(undefined)).toEqual(undefined);
  // });

}); // <----------------