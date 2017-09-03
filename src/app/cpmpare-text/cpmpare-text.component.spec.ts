import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmpareTextComponent } from './cpmpare-text.component';

describe('CpmpareTextComponent', () => {
  let component: CpmpareTextComponent;
  let fixture: ComponentFixture<CpmpareTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmpareTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmpareTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
