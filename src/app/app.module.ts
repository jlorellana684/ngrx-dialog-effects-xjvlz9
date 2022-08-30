import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dialog } from './components/dialog.component';
import { UserEffects } from './effects/user.effects';

import { environment } from '../environments/environment';

const MATERIAL_COMPONENTS = [MatDialogModule, MatButtonModule, MatInputModule];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ...MATERIAL_COMPONENTS,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers: metaReducers,
      initialState: {
        user: {
          name: 'Bob'
        }
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Seed',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  declarations: [
    AppComponent,
    Dialog,
  ],
  entryComponents: [
    Dialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
