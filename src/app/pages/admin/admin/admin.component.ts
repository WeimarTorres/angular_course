import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      description: ['description', [Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });

  }

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);
  }

  //nameControl = new FormControl();

  /*
  onEnviar() {
    console.log('VALOR: ', this.nameControl);
    console.log('VALOR: ', this.nameControl.value);
  }
  */

}