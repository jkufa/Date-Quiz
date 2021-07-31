import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Answer, Question } from '../models/question-answer.type';
import data from '../questions.json';
import { DataService } from '../services/data.service';

@Component({  
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.less']
})
export class QuestionCardComponent implements OnInit {
  @Input() questionSet: Question[] = data;
  form: FormGroup;
  index: number = 0;
  lastQuestion: boolean = false;
  showCard: boolean = true;

  constructor(private fb: FormBuilder, public dataService : DataService) {
    // this.showCard = this.dataService.submittedValidPassword;
    console.log(this.questionSet);
    this.form = this.fb.group({
      ansValue1: 1,
      ansValue2: 2,
      ansValue3: 3,
      ansValue4: 4
    });
   }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.log);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.displayResult();
    // this.showCard = this.dataService.submittedValidPassword;
    console.log('showCard set to ', this.showCard);
  }

  displayResult(): void {
    if (this.index === this.questionSet.length) {
      this.lastQuestion = true;
    }
  }

  sendAnswer(answer: Answer): void {
    if (answer) {
      switch(answer.id) {
        case 1:
          console.log("Answer 1 clicked");
          break;
        case 2:
          console.log("Answer 2 clicked");
          break;
        case 3:
          console.log("Answer 3 clicked");
          break;
        case 4:
          console.log("Answer 4 clicked");
          break;
      }
      if (this.index < this.questionSet.length) {
        this.index++;
      }
      this.displayResult();
    }
  }
}
