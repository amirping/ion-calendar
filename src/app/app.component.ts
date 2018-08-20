import { Component } from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  dateIn = {
    monthes: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ],
    days: ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"]
  };
  now = moment();
  f = moment()
    .month(7)
    .format("MMMM");
  monthes() {}
}
