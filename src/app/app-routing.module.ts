import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ProductsDetailsComponent } from 'src/components/products-details/products-details.component';
import { ProductsListComponent } from 'src/components/products-list/products-list.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent, pathMatch:'full'},
  {path:'products-list', component:ProductsListComponent, pathMatch:'full'},
  {path:'product/:id', component:ProductsDetailsComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 