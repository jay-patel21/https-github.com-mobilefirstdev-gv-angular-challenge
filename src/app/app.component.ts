import {Component} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor(
    private router: Router
  ) {
  }

  navigateToFruitTable(): void {
    this.router.navigate(['/fruit-table'])
  }

  navigateToMessaging(): void {
    this.router.navigate(['/messaging'])
  }

}
