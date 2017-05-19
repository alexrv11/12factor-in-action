import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { FrequenciesComponent } from './frequencies/frequencies.component';
import { PayesComponent } from './payes/payes.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    OrdersComponent,
    FrequenciesComponent,
    PayesComponent,
    MotorcyclesComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
