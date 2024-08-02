import { Routes } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';
import { AdviceInsertUpdateComponent } from './advice-insert-update/advice-insert-update.component';
import { SkuInsertUpdateComponent } from './sku-insert-update/sku-insert-update.component';

export const routes: Routes = [{ path: 'orderInsertUpdate', component: OrderFormComponent },
{ path: 'adviceInsertUpdate', component: AdviceInsertUpdateComponent },
{ path: 'skuInsertUpdate', component: SkuInsertUpdateComponent },
{ path: '**', redirectTo: '/orderInsertUpdate', pathMatch: 'full' }
];

