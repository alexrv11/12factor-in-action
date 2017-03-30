import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FineComponent } from './fine.component';

@NgModule({
    imports: [RouterModule],
    declarations: [FineComponent],
    exports: [FineComponent]
})

export class FineModule { }
