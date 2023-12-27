import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>("https://monacodelisa-node-express.onrender.com/dummy-rest-api/products").subscribe(data => {
      this.products = data;
    })
  }
}
