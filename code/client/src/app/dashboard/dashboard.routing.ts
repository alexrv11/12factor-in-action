import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component"; 
import { FrequenciesComponent } from './frequencies/frequencies.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { OrdersComponent } from './orders/orders.component';
import { PayesComponent } from './payes/payes.component';

const dashboardRoutes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full'},
      { path: 'orders', component: OrdersComponent },
      { path: 'payes', component: PayesComponent },
      { path: 'frequencies', component: FrequenciesComponent },
      { path: 'motorcycles', component: MotorcyclesComponent }
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule { }
