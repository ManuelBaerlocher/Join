import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSideComponent } from './help-side.component';

describe('HelpSideComponent', () => {
  let component: HelpSideComponent;
  let fixture: ComponentFixture<HelpSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
