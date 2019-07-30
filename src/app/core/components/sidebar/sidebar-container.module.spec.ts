import { SidebarContainerModule } from './sidebar-container.module';

describe('ActionbarModule', () => {
  let actionbarModule: SidebarContainerModule;

  beforeEach(() => {
    actionbarModule = new SidebarContainerModule();
  });

  it('should create an instance', () => {
    expect(actionbarModule).toBeTruthy();
  });
});
