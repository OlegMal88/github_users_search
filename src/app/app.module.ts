import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {SearchComponent} from './components/search/search.component';
import {StoreModule} from '@ngrx/store';
import {reducerRef} from './app.state';
import {EffectsModule} from '@ngrx/effects';
import {SearchPageComponent} from './components/pages/searchPage/searchPage.component';
import {SearchPageEffects} from './components/pages/searchPage/searchPage.effects';
import {SearchPageService} from './components/pages/searchPage/searchPage.service';
import {UserBasicInfoComponent} from './components/user/userBasicInfo/userBasicInfo.component';
import {UserInfoComponent} from './components/user/userInfo/userInfo.component';
import {UserListComponent} from './components/user/userList/userList.component';
import {UserListEffects} from './components/user/userList/userList.effects';
import {UserListService} from './components/user/userList/userList.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import {RepositoriesModule} from './repositories/repositories.module';
import {SharedModule} from "./shared/shared.module";

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
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducerRef),
    EffectsModule.forRoot([SearchPageEffects, UserListEffects]),
    RepositoriesModule,
    SharedModule
  ],
  providers: [
    SearchPageService,
    UserListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
