import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { TimelineComponent, ChatComponent, NotificationComponent } from './order.component';

@NgModule({
    imports: [CommonModule, CarouselModule, DropdownModule, AlertModule],
    declarations: [OrderComponent, TimelineComponent, ChatComponent, NotificationComponent],
    exports: [OrderComponent, TimelineComponent, ChatComponent, NotificationComponent]
})

export class OrderModule { }
