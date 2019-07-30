import { ModalModule } from './modal.module';

describe('ActionbarModule', () => {
  let actionbarModule: ModalModule;

  beforeEach(() => {
    actionbarModule = new ModalModule();
  });

  it('should create an instance', () => {
    expect(actionbarModule).toBeTruthy();
  });
});
