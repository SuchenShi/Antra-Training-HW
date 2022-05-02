import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Info!: FormGroup;
  formError = false;

  constructor(private fb: FormBuilder, 
              private userservice: UserService,
              ) {}
              
  
  ngOnInit() {
    this.Info = this.fb.group({
      dob: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  get zip() {
    return this.Info.get('zip');
  }

  onSubmit() {
    if (this.Info.valid) {
      this.userservice.findUser(this.Info.value);
      // this.formError = true;
      alert("Successfully login!")
    } else {
      alert("User does not exist!")
    } 
  }
}
