import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { ProductsService } from 'src/shared/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit{
  productsList:any;
  selectedProduct :any;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private productsService:ProductsService,
    ){}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if(userId){
      this.productsService.getProductsList().subscribe((response) => {
        const { drinks } = response;
        this.productsList = drinks;
        this.selectedProduct = this.productsList.filter((item:any) => item.idDrink === userId)[0]
      })
    }
    
  }

  backToList(){
    this.router.navigate(['/products-list'])
  }
}
