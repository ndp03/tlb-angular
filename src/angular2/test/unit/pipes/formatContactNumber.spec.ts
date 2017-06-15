import { Pipe } from '@angular/core';

import { FormatContactNumber } from '../../../app/pipes/formatContactNumber';

describe('FormatContactNumber Pipe', () => { 
  let pipe: FormatContactNumber;

  beforeEach(() => {
    pipe = new FormatContactNumber();
  });

  it('should transform "0411222333" to "0411 222 333"', () => {
       expect(pipe.transform('0411222333')).toEqual('0411 222 333');
  });

  it('should transform "0255559999" to "02 5555 9999"', () => {
       expect(pipe.transform('0255559999')).toEqual('02 5555 9999');
  });

  it('should transform "0366661111" to "03 6666 1111"', () => {
       expect(pipe.transform('0366661111')).toEqual('03 6666 1111');
  });

  it('should transform "+61288880000" to "+61 2 8888 0000"', () => {
       expect(pipe.transform('+61288880000')).toEqual('+61 2 8888 0000');
  });

  it('should transform "+61422333444" to "+61 4 2233 3444"', () => {
       expect(pipe.transform('+61422333444')).toEqual('+61 4 2233 3444');
  });

  it('should transform "+1 888 452 1505" to "+1 888 452 1505"', () => {
       expect(pipe.transform('+1 888 452 1505')).toEqual('+1 888 452 1505');
  });

  it('should transform "+18884521505" to "+18884521505"', () => {
       expect(pipe.transform('+18884521505')).toEqual('+18884521505');
  });

});