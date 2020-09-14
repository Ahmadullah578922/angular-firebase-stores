import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interface/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [

  	
  ]
  constructor() { }

  ngOnInit() {
    
  }
  addToCart(index){
    console.log('added', this.goods[index])
  }

}
