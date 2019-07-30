import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfComponent } from './cpf.component';

describe('CpfComponent', () => {
  let component: CpfComponent;
  let fixture: ComponentFixture<CpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
