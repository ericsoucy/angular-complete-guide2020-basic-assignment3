import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  display = false;
  clicks = [];
  count = 0;

  buttonClicked() {
    this.display = !this.display;
    this.clicks.push(this.count++);
  }

  getColor(click) {
    return click > 4 ? "blue" : "none";
  }
}
