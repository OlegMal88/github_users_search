import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.styles.scss']
})
class AppComponent {
  onSearchChange(searchQuery: string): void {
    console.log(searchQuery);
  }
}

export {AppComponent};
