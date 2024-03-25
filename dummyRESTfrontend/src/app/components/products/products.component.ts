import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';
import { CopyEndpointUrlService } from '../../services/copy-endpoint-url.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  private apiService = inject(ApiService);
  private copyService = inject(CopyEndpointUrlService);

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  copyUrl(): void {
    this.copyService.copyText();
  }
}
