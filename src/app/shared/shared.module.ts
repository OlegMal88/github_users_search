import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbAccordionConfig, NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {GitHubDataService} from './services/GitHubData.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgbAccordionModule.forRoot()
  ],
  providers: [
    GitHubDataService,
    NgbAccordionConfig
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    NgbAccordionModule
  ]
})
class SharedModule {

}

export {SharedModule};
