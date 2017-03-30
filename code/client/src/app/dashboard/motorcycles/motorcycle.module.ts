import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MotorcycleComponent } from './motorcycle.component';

@NgModule({
    imports: [RouterModule],
    declarations: [MotorcycleComponent],
    exports: [MotorcycleComponent]
})

export class MotorcycleModule { }
