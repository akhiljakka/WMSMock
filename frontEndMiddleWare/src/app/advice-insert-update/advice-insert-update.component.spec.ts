import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceInsertUpdateComponent } from './advice-insert-update.component';

describe('AdviceInsertUpdateComponent', () => {
  let component: AdviceInsertUpdateComponent;
  let fixture: ComponentFixture<AdviceInsertUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceInsertUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdviceInsertUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
