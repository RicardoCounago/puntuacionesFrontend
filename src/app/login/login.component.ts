import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['example@example.com', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(formValue) {
    alert('Se ha enviado el formulario correctamente: ' + formValue.password + ' ' + formValue.email);
  }

}
