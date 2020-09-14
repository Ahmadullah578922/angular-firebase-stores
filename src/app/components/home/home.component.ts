import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interface/good.interface';
import { GoodsService } from 'src/app/services/goods.service';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = []
  goodsObservable: Subscription
  add: number = -1
  constructor(public GoodService: GoodsService, public cs: CartService, public as: AuthService, public router: Router) { }

  ngOnInit() {
    this.goodsObservable = this.GoodService.getAllGoods().subscribe(data => {
       this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as Good

        }
      })

    })

    
  }

  ngOnDestroy(){
    this.goodsObservable.unsubscribe()
  }

  addToCart(index: number) {
    if(this.as.userId) this.add = +index;
    else this.router.navigate(['/login']);
  }

  buy(amount: number) {
    let selectedGood = this.goods[this.add]
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
  }


}
