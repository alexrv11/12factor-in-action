import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MaterialModule } from "@angular/material";
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [ MaterialModule, RouterModule ],
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent,
  ]
})

export class SharedModule { }