import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksDialogComponent } from './marks-dialog.component';

describe('MarksDialogComponent', () => {
  let component: MarksDialogComponent;
  let fixture: ComponentFixture<MarksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
