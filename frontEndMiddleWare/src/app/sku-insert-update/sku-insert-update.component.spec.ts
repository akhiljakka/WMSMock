import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuInsertUpdateComponent } from './sku-insert-update.component';

describe('SkuInsertUpdateComponent', () => {
  let component: SkuInsertUpdateComponent;
  let fixture: ComponentFixture<SkuInsertUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkuInsertUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkuInsertUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
