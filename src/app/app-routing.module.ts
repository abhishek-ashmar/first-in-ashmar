import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
     path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
    },
  {
     path: 'orders', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
