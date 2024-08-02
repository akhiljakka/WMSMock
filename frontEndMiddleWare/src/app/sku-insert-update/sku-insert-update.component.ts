import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AvailableQuantityUnit, AvailableQuantityUnits, Sku } from '../common/sku';
import { SkuService } from '../services/sku.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sku-insert-update',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sku-insert-update.component.html',
  styleUrl: './sku-insert-update.component.css'
})
export class SkuInsertUpdateComponent {

  skuForm: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private skuService: SkuService) {
    this.skuForm = this.fb.group({
      clientId: new FormControl('IMMERGAS', Validators.required),
      skuId: new FormControl('', Validators.required),
      productCode: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cycleCountingThreshold: new FormControl(10, Validators.required),
      baseQuantityUnitId: new FormControl('ITEM', Validators.required),
      batchMandatoryForHost: new FormControl(false, Validators.required),
      availableQuantityUnits: this.fb.group({
        availableQuantityUnit: this.fb.array([
          this.fb.group({
            quantityUnitId: new FormControl('ITEM', Validators.required),
            totalWeight: new FormControl(1.0, Validators.required),
            netWeight: new FormControl(0.1, Validators.required),
            length: new FormControl(5.0, Validators.required),
            width: new FormControl(5.0, Validators.required),
            height: new FormControl(5.0, Validators.required),
            totalVolume: new FormControl(125, Validators.required),
            hostWeightUnitId: new FormControl('KG', Validators.required),
            hostVolumeUnitId: new FormControl('CCM', Validators.required),
            hostLengthUnitId: new FormControl('CM', Validators.required),
            defaultPickQuantityUnit: new FormControl(true, Validators.required),
            factorToBaseQU: new FormControl(1, Validators.required)
          })
        ])
      })
    });
  }

  get availableQuantityUnits() {
    return this.skuForm.get('availableQuantityUnits.availableQuantityUnit') as FormArray;
  }

  addAvailableQuantityUnit() {
    this.availableQuantityUnits.push(this.fb.group({
      quantityUnitId: new FormControl('ITEM', Validators.required),
      totalWeight: new FormControl(1.0, Validators.required),
      netWeight: new FormControl(0.1, Validators.required),
      length: new FormControl(5.0, Validators.required),
      width: new FormControl(5.0, Validators.required),
      height: new FormControl(5.0, Validators.required),
      totalVolume: new FormControl(125, Validators.required),
      hostWeightUnitId: new FormControl('KG', Validators.required),
      hostVolumeUnitId: new FormControl('CCM', Validators.required),
      hostLengthUnitId: new FormControl('CM', Validators.required),
      defaultPickQuantityUnit: new FormControl(true, Validators.required),
      factorToBaseQU: new FormControl(1, Validators.required)
    }));
  }

  onSubmit() {
    const formValue = this.skuForm.value;
    console.log(JSON.stringify(formValue));
    const sku = new Sku(
      formValue.clientId,
      formValue.skuId,
      formValue.productCode,
      formValue.description,
      formValue.cycleCountingThreshold,
      formValue.baseQuantityUnitId,
      formValue.batchMandatoryForHost,
      new AvailableQuantityUnits(
        formValue.availableQuantityUnits.availableQuantityUnit.map((unit: any) => new AvailableQuantityUnit(
          unit.quantityUnitId,
          unit.totalWeight,
          unit.netWeight,
          unit.length,
          unit.width,
          unit.height,
          unit.totalVolume,
          unit.hostWeightUnitId,
          unit.hostVolumeUnitId,
          unit.hostLengthUnitId,
          unit.defaultPickQuantityUnit,
          unit.factorToBaseQU
        ))
      )
    );
    this.subscription.add(
      this.skuService.insertUpdateOrder(sku).subscribe({
        next: (response) => {
          console.log('Sku successfully submitted', response);
        },
        error: (error) => {
          console.error('Error submitting sku', error);
        },
        complete: () => {
          console.log('Sku submission complete');
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

