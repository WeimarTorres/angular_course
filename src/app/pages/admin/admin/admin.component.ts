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

  products = [];

  productSubs: Subscription;
  productGetSubs: Subscription;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productGetSubs = this.productService.getProducts().subscribe(res => {

      // [1,2,3,4,5,6];
      // {{key:1 },{key: 2},{key: 1},{key: 1},{key: 1},{key: 1},{key: 1}}
      // Object.entries(res) [ [key, 1], [key, 2] , .......              ];

      console.log('RESPUESTA: ', res);
      console.log('RESPUESTA: ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));

    });
  }

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
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
  }

  //nameControl = new FormControl();

  /*
  onEnviar() {
    console.log('VALOR: ', this.nameControl);
    console.log('VALOR: ', this.nameControl.value);
  }
  */

}
