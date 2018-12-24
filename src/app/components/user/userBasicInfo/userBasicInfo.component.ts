import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './userBasicInfo.template.html',
  styleUrls: ['./userBasicInfo.styles.css']
})
class UserBasicInfoComponent {
  @Input()
  users: SearchUserBasic[];

  @Output()
  userViewMore: EventEmitter<void> = new EventEmitter();

  public onUserViewMore(): void {

  }

  public trackByFn(index, item: SearchUserBasic) {
    return item.login; // or item.id
  }
}

export {UserBasicInfoComponent};
