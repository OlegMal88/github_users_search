import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {SearchComponent} from './components/search/search.component';
import {StoreModule} from "@ngrx/store";
import {reducerRef} from "./app.state";
import {EffectsModule} from "@ngrx/effects";
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StoreModule.forRoot(reducerRef),
    EffectsModule.forRoot([])
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
