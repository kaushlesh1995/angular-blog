import { StatusTransfromPipe } from './status-transfrom.pipe';

describe('StatusTransfromPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusTransfromPipe();
    expect(pipe).toBeTruthy();
  });
});
