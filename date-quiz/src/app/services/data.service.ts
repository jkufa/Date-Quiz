import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  submittedValidPassword: boolean = false;

  constructor() { }
}
