import { Component } from "@angular/core";
import { Form } from "@angular/forms";

type BrewData = {
  brand: string;
  blend: string;
  roastDate: Date;
  brewDate: Date;
  brewStyle: string;
  coffeeDose: number;
  bloomWater: number;
  bloomTime: number;
  brewWater: number;
  brewTime: number;
  totalOutput: number;
  notes: string;
  sheetName: string;
};

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  brewData: Partial<BrewData> = {};

  doSubmit(event: MouseEvent, formData: HTMLFormElement) {
    // event.preventDefault();
    console.log(formData);
  }
}
