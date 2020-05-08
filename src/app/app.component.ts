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

  buttonClicked() {
    this.display = !this.display;
    this.clicks.push("clicked: " + Date.now());
  }

  getColor() {
    return this.clicks.length > 4 ? "blue" : "none";
  }
}
