import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchUserBasic} from '../../pages/searchPage/searchPage.dictionary';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './userBasicInfo.template.html',
  styleUrls: ['./userBasicInfo.styles.css']
})
class UserBasicInfoComponent {

  private _users: SearchUserBasic[];

  @Input() set users(users: SearchUserBasic[]) {
    this._users = users;
  };

  get users(): SearchUserBasic[] {
    return this._users;
  };

  @Output()
  panelChange: EventEmitter<void> = new EventEmitter();

  public onPanelChange(event: NgbPanelChangeEvent): void {
    this.panelChange.emit(this.users[event.panelId]);
  }

  public trackByFn(index, item: SearchUserBasic) {
    return item.login; // or item.id
  }
}

export {UserBasicInfoComponent};
