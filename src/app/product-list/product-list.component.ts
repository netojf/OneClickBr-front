import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [OfertasService]
})
export class ProductListComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    console.log(this.ofertasService.getOfertas())
  }

}
