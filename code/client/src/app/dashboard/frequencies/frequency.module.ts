import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrequencyComponent } from './frequency.component';

@NgModule({
    imports: [RouterModule],
    declarations: [FrequencyComponent],
    exports: [FrequencyComponent]
})

export class FrequencyModule { }
