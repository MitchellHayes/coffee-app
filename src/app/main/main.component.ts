import { Component } from '@angular/core';

interface FormData {
  brewStyle: string;
  date: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  brewStyle: string = '';
  date: string = '';

  onSubmit(formData) {
    console.log(formData);
  }
}
