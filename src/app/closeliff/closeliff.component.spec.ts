import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseliffComponent } from './closeliff.component';

describe('CloseliffComponent', () => {
  let component: CloseliffComponent;
  let fixture: ComponentFixture<CloseliffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseliffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseliffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
