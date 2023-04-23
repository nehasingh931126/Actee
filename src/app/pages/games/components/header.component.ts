import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'actee-games-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class GamesHeaderComponent {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
//   title = 'Actee';

  onSearchHandler($event) {
    console.log($event.target.value, "Tagrt value");
    this.onSearch.emit($event.target.value || '');
  }
}
