import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {Shopping} from 'src/app/interface/shopping.interface'

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  
  cart: Shopping[] = []
  
  constructor(public cs: CartService) { }

  ngOnInit(){
    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data() as Shopping
        }
      })
    })
  }
  delete(index) {
    this.cs.delete(this.cart[index].id)
  }

  save(index) {
    this.cs.save(this.cart[index].id, this.cart[index].amount)
  }

}
