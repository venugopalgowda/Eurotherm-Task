import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/shared/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productsList:any;

  constructor(
    private productsService:ProductsService,
    private router:Router,
    ){}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(){
    this.productsService.getProductsList().subscribe((response) => {
      const { drinks } = response;
      this.productsList = drinks;
    })
  }

  getProduct(productId:string){
    if(productId){
      this.router.navigate(['/product', productId]);
    }
  }

  filterByType(type:string){
    this.productsService.getProductsList().subscribe((response) => {
      const { drinks } = response;
      this.productsList = drinks;
      let data = [];
      let products = [...this.productsList]
      if(type === 'Alcoholic'){
        data = products.filter((item:any) => item.strAlcoholic === 'Alcoholic')
      } else {
        data = products.filter((item:any) => item.strAlcoholic !== 'Alcoholic')
      }
      this.productsList = [...data];
    })
    
  }
}
