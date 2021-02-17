import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test-AM-ACC';

  public onActivate(value: any):void {
    window.scroll(0,0);
  }
}