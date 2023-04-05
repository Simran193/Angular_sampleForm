import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms'
import { ProductCardComponent } from './component/product-card/product-card.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { FilterBtnComponent } from './component/filter-btn/filter-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    NavigationBarComponent,
    HeaderComponent,
    FilterBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
