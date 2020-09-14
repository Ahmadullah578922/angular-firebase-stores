import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interface/good.interface';
import { GoodsService } from 'src/app/services/goods.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  goods: Good[] = []
  goodsObservable: Subscription
  @ViewChild('image') image: ElementRef
  constructor( private gs: GoodsService) { }

  ngOnInit() {
    this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
       return {
         id: element.payload.doc.id,
         ...element.payload.doc.data() as Good

       }
     })

   })
  }

  addNewGood(form: NgForm) {
    let name = (<Good>form.value).name,
      price = (<Good>form.value).price,
      image = (<HTMLInputElement>this.image.nativeElement).files[0];
    this.gs.addNewGood(name, price, image).then(msg => console.log(msg))
  }

}
