import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  success = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }

    this.success = true
  }

}
