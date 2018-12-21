import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
})
class AppComponent {

  onSearchChange(searchQuery: string): void {
    console.log(searchQuery);
  }

}

export {AppComponent};
