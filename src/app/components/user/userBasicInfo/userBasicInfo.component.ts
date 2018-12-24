import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchUserBasic} from "../../pages/searchPage/searchPage.dictionary";

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './userBasicInfo.template.html',
})
class UserBasicInfoComponent {
  @Input()
  user: SearchUserBasic;

  @Output()
  userViewMore: EventEmitter<void> = new EventEmitter();

  public onUserViewMore(): void {

  }
}

export {UserBasicInfoComponent};
