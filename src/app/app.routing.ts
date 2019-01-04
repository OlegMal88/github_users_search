import {Routes} from '@angular/router';
import {UserListComponent} from './components/user/userList/userList.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/usersList',
    pathMatch: 'full'
  },
  {
    path: 'usersList',
    component: UserListComponent
  }
];

export {appRoutes};
