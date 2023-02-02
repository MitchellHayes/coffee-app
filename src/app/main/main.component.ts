import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  username: string;
  brewStyle: string;
  date: string;
  // other methods
f: any;
  onSubmit(formData) {
    console.log(formData);
  }
}
export class MainComponent {
  username: string;
  coffeeType: string;
  date: string;

  // other methods
}

