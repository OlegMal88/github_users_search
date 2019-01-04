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
import {GitHubDataService} from './services/GitHubData.service';
import {NgbAccordionConfig, NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserListComponent} from './components/user/userList/userList.component';
import {UserListEffects} from './components/user/userList/userList.effects';
import {UserListService} from './components/user/userList/userList.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchComponent,
    UserBasicInfoComponent,
    UserInfoComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducerRef),
    EffectsModule.forRoot([SearchPageEffects, UserListEffects]),
    NgbModule.forRoot(),
    NgbAccordionModule.forRoot(),
  ],
  providers: [
    SearchPageService,
    UserListService,
    GitHubDataService,
    NgbAccordionConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
