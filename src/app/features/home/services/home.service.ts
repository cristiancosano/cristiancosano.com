import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Home } from '../interfaces/home';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private home: Observable<Home | null>;

  constructor(private db: AngularFireDatabase) {
    this.home = this.db.object<Home>('home').valueChanges();
  }
  getHome(){
    return this.home;
  }
}
