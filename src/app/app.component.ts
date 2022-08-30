import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromRoot from './reducers/';
import { OpenDialog } from './actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  animal: Observable<string>;

  constructor(private store: Store<fromRoot.State>) { 
    this.animal = this.store.pipe(select(fromRoot.getAnimalName))
  }

  openDialog() {
    this.store.dispatch(new OpenDialog());   
  }
}
