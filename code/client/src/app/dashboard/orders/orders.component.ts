import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

import { Order } from './order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  user: Observable<firebase.User>;
  orders: FirebaseListObservable<any[]>;
  public newOrder: Order;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.orders = af.list('/orders', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
    this.newOrder = new Order();
  }

  ngOnInit() {
    this.afAuth.auth.signInAnonymously();
  }

  SaveOrder() {
    this.newOrder.state='Registered';
    this.orders.push(this.newOrder);
  }
}
