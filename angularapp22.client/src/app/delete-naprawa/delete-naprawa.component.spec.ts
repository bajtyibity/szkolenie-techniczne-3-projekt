import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNaprawaComponent } from './delete-naprawa.component';

describe('DeleteNaprawaComponent', () => {
  let component: DeleteNaprawaComponent;
  let fixture: ComponentFixture<DeleteNaprawaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteNaprawaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteNaprawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
