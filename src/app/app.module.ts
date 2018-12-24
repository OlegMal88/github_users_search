import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {SearchComponent} from './components/search/search.component';
import {StoreModule} from '@ngrx/store';
import {reducerRef} from './app.state';
import {EffectsModule} from '@ngrx/effects';
import {FormsModule} from '@angular/forms';
import {SearchPageComponent} from './components/pages/searchPage/searchPage.component';
import {SearchPageEffects} from './components/pages/searchPage/searchPage.effects';
import {SearchPageService} from './components/pages/searchPage/searchPage.service';
import {HttpClientModule} from '@angular/common/http';
import {UserBasicInfoComponent} from './components/user/userBasicInfo/userBasicInfo.component';
import {UserInfoComponent} from './components/user/userInfo/userInfo.component';
import {SearchPageDataService} from './components/pages/searchPage/searchPageData.service';
import {NgbAccordionConfig, NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchComponent,
    UserBasicInfoComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducerRef),
    EffectsModule.forRoot([SearchPageEffects]),
    NgbModule.forRoot(),
    NgbAccordionModule.forRoot()
  ],
  providers: [
    SearchPageService,
    SearchPageDataService,
    NgbAccordionConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
