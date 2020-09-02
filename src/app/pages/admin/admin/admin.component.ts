import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  productForm: FormGroup;

  productSubs: Subscription

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

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
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log('Error de conexion');
    });
  }

  ngOnDestroy(): void {
    this.productSubs.unsubscribe();
  }

  //nameControl = new FormControl();

  /*
  onEnviar() {
    console.log('VALOR: ', this.nameControl);
    console.log('VALOR: ', this.nameControl.value);
  }
  */

}
