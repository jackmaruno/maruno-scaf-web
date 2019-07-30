import { ActionbarModule } from './actionbar.module';

describe('ActionbarModule', () => {
  let actionbarModule: ActionbarModule;

  beforeEach(() => {
    actionbarModule = new ActionbarModule();
  });

  it('should create an instance', () => {
    expect(actionbarModule).toBeTruthy();
  });
});
