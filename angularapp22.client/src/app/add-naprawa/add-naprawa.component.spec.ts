import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNaprawaComponent } from './add-naprawa.component';

describe('AddNaprawaComponent', () => {
  let component: AddNaprawaComponent;
  let fixture: ComponentFixture<AddNaprawaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNaprawaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNaprawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
