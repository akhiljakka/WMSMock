import { Routes } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';
import { AdviceInsertUpdateComponent } from './advice-insert-update/advice-insert-update.component';
import { SkuInsertUpdateComponent } from './sku-insert-update/sku-insert-update.component';
import { OrderManagementComponent } from './order-management/order-management.component';

export const routes: Routes = [{ path: 'orderInsertUpdate', component: OrderFormComponent },
{ path: 'adviceInsertUpdate', component: AdviceInsertUpdateComponent },
{ path: 'skuInsertUpdate', component: SkuInsertUpdateComponent },
{ path: 'orderManagement', component: OrderManagementComponent },
{ path: '**', redirectTo: '/orderInsertUpdate', pathMatch: 'full' }
];

