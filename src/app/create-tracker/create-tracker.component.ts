import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tracker',
  templateUrl: './create-tracker.component.html',
  styleUrls: ['./create-tracker.component.css']
})
export class CreateTrackerComponent implements OnInit {

  value:String[]=["#123456","#3489560"];
  lat: number = 12.972442;
  lng: number = 77.580643;
  display:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form:NgForm){
    console.log(form.controls.Consignment.value);
    this.value.push(String(form.controls.Consignment.value));
    form.reset();

  }

  log(value:any){
    console.log(value);
    this.display=true;
  }

}
