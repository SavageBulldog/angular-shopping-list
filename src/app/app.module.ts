import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// add formsmodule import to be able to use [(NGMODEL)] in shop-form.component
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopFormComponent } from './components/shop-form/shop-form.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopFormComponent,
    ShopItemComponent,
    ShopListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
