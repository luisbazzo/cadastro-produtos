import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastroprod',
  templateUrl: './cadastroprod.component.html',
  styleUrls: ['./cadastroprod.component.css']
})
export class CadastroprodComponent implements OnInit{

  product : Product[] = [];
  formGroupProduct : FormGroup;

  constructor(private ProductsService : ProductsService,
              private formBuilder : FormBuilder
              ){
      this.formGroupProduct = formBuilder.group({
        id : [''],
        name : [''],
        color : [''],
        amount : [''],
        productor : ['']
      });
    }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.ProductsService.getProducts().subscribe(
      {
        next : data => this.product = data,
        error : () => console.log("Erro ao carregar os produtos")
      }
    );
  }
}
