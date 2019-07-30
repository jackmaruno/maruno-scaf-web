import { MoreModule } from './more.module';

describe('MoreModule', () => {
  let moreModule: MoreModule;

  beforeEach(() => {
    moreModule = new MoreModule();
  });

  it('should create an instance', () => {
    expect(moreModule).toBeTruthy();
  });
});
