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

  onSubmit(formData) {
    console.log(formData);
  }
}
