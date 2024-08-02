import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdviceService } from '../services/advice.service';
import { Advice, AdviceLine, AdviceLines } from '../common/advice';

@Component({
  selector: 'app-advice-insert-update',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './advice-insert-update.component.html',
  styleUrl: './advice-insert-update.component.css'
})
export class AdviceInsertUpdateComponent {
  adviceForm: FormGroup;
  private subscription: Subscription = new Subscription();
  constructor(private fb: FormBuilder, private adviceService: AdviceService) {
    this.adviceForm = this.fb.group({
      clientId: new FormControl('IMMERGAS', Validators.required),
      adviceId: new FormControl('', Validators.required),
      adviceType: new FormControl('SUPPLIER', Validators.required),
      referenceBarcode: new FormControl('', Validators.required),
      supplierId: new FormControl('', Validators.required),
      additionalHostData: new FormControl('', Validators.required),
      adviceLines: this.fb.group({
        adviceLine: this.fb.array([
          this.fb.group({
            adviceLineId: new FormControl('', Validators.required),
            skuId: new FormControl('', Validators.required),
            quantityTarget: new FormControl(0, Validators.required),
            batch: new FormControl('', Validators.required),
            additionalHostData: new FormControl('', Validators.required),
            bestBeforeDate: new FormControl('', Validators.required)
          })
        ])
      })
    });
  }

  get adviceLines() {
    return this.adviceForm.get('adviceLines.adviceLine') as FormArray;
  }

  addAdviceLine() {
    this.adviceLines.push(this.fb.group({
      adviceLineId: new FormControl('', Validators.required),
      skuId: new FormControl('', Validators.required),
      quantityTarget: new FormControl(0, Validators.required),
      batch: new FormControl('', Validators.required),
      additionalHostData: new FormControl('', Validators.required),
      bestBeforeDate: new FormControl('', Validators.required)
    }));
  }

  onSubmit() {
    const formValue = this.adviceForm.value;
    console.log(JSON.stringify(formValue));
    const advice = new Advice(
      formValue.clientId,
      formValue.adviceId,
      formValue.adviceType,
      formValue.referenceBarcode,
      formValue.supplierId,
      formValue.additionalHostData,
      new AdviceLines(
        formValue.adviceLines.adviceLine.map((line: any) => new AdviceLine(
          line.adviceLineId,
          line.skuId,
          line.quantityTarget,
          line.batch,
          line.additionalHostData,
          line.bestBeforeDate
        ))
      )
    );
    this.adviceService.insertUpdateOrder(advice).subscribe({
      next: (response) => {
        console.log('Advice successfully submitted', response);
      },
      error: (error) => {
        console.error('Error submitting advice', error);
      },
      complete: () => {
        console.log('Advice submission complete');
      }
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
