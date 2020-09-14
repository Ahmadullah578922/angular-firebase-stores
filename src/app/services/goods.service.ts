import { Injectable } from '@angular/core';
import { Good } from 'src/app/interface/good.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
goods:Observable<Good[]>;
goodsCollection: AngularFirestoreCollection<Good>

  constructor(public fs: AngularFirestore, public storage: AngularFireStorage) {
    // this.goods = this.afs.collection('goods').valueChanges();
   }
    
  getAllGoods(){
    return this.fs.collection('goods').snapshotChanges();
  } 
  
  addNewGood(name: string, price: Number, image: File) {
     return new Promise((resolve) => {
       let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goods').add({
             name,
           price,
           photoUrl
          }).then(() => resolve('hello'))
        })
       })
     })
   }

  

}

