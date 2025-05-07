import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    birthDate: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Form inviato con successo!');
      this.form.reset();
    }
  }
}
