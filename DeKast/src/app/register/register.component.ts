import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn   } from '@angular/forms'
import { ToastService } from '../toast.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    repeatPassword: new FormControl('')
  });

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  callingFunction() {
    if (this.registrationForm.valid) {
      
      // Add logic to create an account here
  
      // Assuming the account creation failed (for example, due to a database error)
      this.toastService.show('Oeps, er is iets misgegaan. Probeer het later nog eens');
    } else {
      alert('Form is not valid. Please check the fields.');
    }
  }

}
