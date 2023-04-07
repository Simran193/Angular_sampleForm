import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { FilterBtnComponent } from './component/filter-btn/filter-btn.component';
import { FooterComponent } from './component/footer/footer.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    NavigationBarComponent,
    HeaderComponent,
    FilterBtnComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
