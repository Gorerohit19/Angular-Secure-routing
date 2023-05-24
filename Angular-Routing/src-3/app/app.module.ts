import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomerModule } from './customer/customer.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RoutingComponent } from './routing/routing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes:Routes=[
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'routing', 
    component : RoutingComponent,
    children: [
      {path: '', redirectTo: 'routing', pathMatch: 'full'},
      {path: 'customer', component: CustomerlistComponent},
      {path: 'product', component: ProductComponent},
      {path : 'aboutus', component: AboutUsComponent},
      {path: 'home', component: HomeComponent}
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    RoutingComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
