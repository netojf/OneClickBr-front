import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//TODO:
/* 
import {RouterModule} from '@angular/router'
import {ROUTES} from 'app.routes caminho' 
*/

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductListComponent,
    CarouselComponent,
    CategoryBarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule
    //TODO:
    //RouterModule.forRoot(ROUTES) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
