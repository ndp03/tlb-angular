import { Pipe } from '@angular/core';

import { PascalCasePipe } from '../../../app/pipes/pascalCase';

describe('PascalCasePipe Pipe', () => { // <----------------
  let pipe: PascalCasePipe;

  beforeEach(() => {
    pipe = new PascalCasePipe();
  });


  // it('should transform "1234567890" to "1234 567 890"', () => {
  //   expect(pipe.transform('1234567890')).toEqual('1234 567 890');
  // });

  // it('should transform "123456789" to "123456789"', () => {
  //   expect(pipe.transform('123456789')).toEqual('123456789');
  // });

  // it('should transform "12345" to "12345"', () => {
  //   expect(pipe.transform('12345')).toEqual('12345');
  // });

  // it('should transform "12345678901234" to "1234 567 8901234"', () => {
  //   expect(pipe.transform('12345678901234')).toEqual('1234 567 8901234');
  // });

  it('should transform "IFW AUTO MATION" to "Ifw Auto Mation"', () => {
    expect(pipe.transform('IFW AUTO MATION')).toEqual('Ifw Auto Mation');
  });

  it('should transform "Ifw Auto Mation" to "Ifw Auto Mation"', () => {
    expect(pipe.transform('Ifw Auto Mation')).toEqual('Ifw Auto Mation');
  });

   it('should transform "CHEQUE" to "Cheque"', () => {
    expect(pipe.transform('CHEQUE')).toEqual('Cheque');
  });

  it('should return null', () => {
    expect(pipe.transform(null)).toEqual(null);
  });

  it('should return undefined', () => {
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

}); // <----------------