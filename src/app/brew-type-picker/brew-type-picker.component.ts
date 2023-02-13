import { Component, Input } from "@angular/core";

@Component({
  selector: "brew-type-picker",
  templateUrl: "brew-type-picker.component.html",
  styleUrls: ["brew-type-picker.scss"],
})
export class BrewTypePickerComponent {
  // Mapping of brew types to their asset icons.
  type2icon = {
    aeropress: "aeropress-icon.svg",
    "aeropress-inverted": "aeropress-inverted-icon.svg",
    chemex: "chemex-icon.svg",
    espresso: "espresso-icon.svg",
    frenchpress: "frenchpress-icon.svg",
    "hario-switch": "hario-switch-icon.svg",
    v60: "v60-icon.svg",
  };

  @Input()
  public inputName: string = "brewStyle";

  constructor() {}
}
