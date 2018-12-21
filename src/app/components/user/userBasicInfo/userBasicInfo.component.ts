import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserBasic} from '../user.dictionary';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './userBasicInfo.template.html',
})
class UserBasicInfoComponent {
  @Input()
  user: UserBasic;

  @Output()
  userViewMore: EventEmitter<void> = new EventEmitter();

  public userViewMore(): void {

  }
}

export {UserBasicInfoComponent};
