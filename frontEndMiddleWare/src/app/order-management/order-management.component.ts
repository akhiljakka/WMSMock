import { Component, OnInit } from '@angular/core';
import { OrderConfirm, OrderLineConfirm } from '../common/entity-confirm';
import { CommonModule } from '@angular/common';
import { OrderManagementService } from '../services/order-management.service';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.css'
})
export class OrderManagementComponent implements OnInit {

  orders: OrderConfirm[] = [];
  selectedOrderLines: OrderLineConfirm[] | null = null;

  constructor(private orderService: OrderManagementService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.orders = data;
    });
  }

  selectOrder(order: OrderConfirm): void {
    this.selectedOrderLines = order.orderLinesConfirm.orderLineConfirm;
  }
}