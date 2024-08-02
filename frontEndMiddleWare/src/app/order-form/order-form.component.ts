import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { Order } from '../common/order';
import { InventoryCriteria, OrderLine } from '../common/order-line';
@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {


  orderForm: FormGroup;
  private subscription: Subscription = new Subscription();
  response: any;

  constructor(private fb: FormBuilder, private orderService: OrderService) {
    this.orderForm = this.fb.group({
      clientId: new FormControl('IMMERGAS'),
      orderId: new FormControl('', Validators.required),
      priority: new FormControl(''),
      latestStaggingTime: ['2024-06-07T15:24:44.4532676+02:00'],
      deliveryTime: ['2024-09-07T15:24:44.4532676+02:00'],
      orderLines: this.fb.group({
        orderLine: this.fb.array([
          this.fb.group({
            orderLineId: new FormControl('', Validators.required),
            criteriaUsed: ['INVENTORY_CRITERIA'],
            inventoryCriteria: this.fb.group({
              skuId: new FormControl('', Validators.required),
              quantityBaseTargetHost: new FormControl('', Validators.required),
              unlimitedOverdeliveryAllowed: [false],
              clientId: ['IMMERGAS']
            })
          })
        ])
      })
    });
  }

  get orderLines() {
    return this.orderForm.get('orderLines.orderLine') as FormArray;
  }

  addOrderLine() {
    this.orderLines.push(this.fb.group({
      orderLineId: new FormControl('', Validators.required),
      criteriaUsed: ['INVENTORY_CRITERIA'],
      inventoryCriteria: this.fb.group({
        skuId: new FormControl('', Validators.required),
        quantityBaseTargetHost: new FormControl('', Validators.required),
        unlimitedOverdeliveryAllowed: [false],
        clientId: ['IMMERGAS']
      })
    }));
  }

  onSubmit() {
    const formValue = this.orderForm.value;
    const order = new Order(
      formValue.clientId,
      formValue.orderId,
      formValue.priority,
      formValue.latestStaggingTime,
      formValue.deliveryTime,
      {
        orderLine: formValue.orderLines.orderLine.map((line: any) => new OrderLine(
          line.orderLineId,
          line.criteriaUsed,
          new InventoryCriteria(
            line.inventoryCriteria.skuId,
            line.inventoryCriteria.quantityBaseTargetHost,
            line.inventoryCriteria.unlimitedOverdeliveryAllowed,
            line.inventoryCriteria.clientId
          )
        ))
      }
    );
    console.log(JSON.stringify(order));
    this.subscription.add(
      this.orderService.insertUpdateOrder(order).subscribe({
        next: (response) => {
          response = this.response;
          console.log('Order successfully submitted', response);
        },
        error: (error) => {
          console.error('Error submitting order', error);
        },
        complete: () => {
          console.log('Order submission complete');
        }
      })
    );




  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}