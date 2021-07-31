import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.less']
})
export class PasswordViewComponent implements OnInit {
  @Output() submitted: boolean = false;
  form: FormGroup;
  formControl = new FormControl('', [
    Validators.required,
  ])

  constructor(private fb: FormBuilder, private _router:Router, public dataService : DataService) { 
    this.form = this.fb.group({
      password: 1,
    });
  }

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log("submitted");
    this.submitted = true; 
    this.dataService.submittedValidPassword = this.submitted;
    this._router.navigate(['question-card']);
  }

}
