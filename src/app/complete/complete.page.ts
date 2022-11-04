import { ForwardRefHandling } from "@angular/compiler";
import { Component } from "@angular/core";
import { SupermarketApi } from "./api/supermarket-api.service";
import { Category, Product } from "./models/supermarket.interfaces";

@Component({
  styleUrls: ['./complete.page.scss'],
  templateUrl: './complete.page.html'
})
export class CompletePage {
  public categories: Array<Category>;
  public products: Array<Product>;
  public productPage: number;
  public isNextPage: boolean;
  public isPrevPage: boolean;

  constructor(private supermarketApi: SupermarketApi) {
    this.productPage = 0;
    this.isNextPage = false;
    this.isPrevPage = false;
    this.categories = []
    this.products = [];
  }

  async getCategories() {
    const response = await this.supermarketApi.getAllCategories()
    if (!response) return this.categories = [];
    return this.categories = response;
  }

  async getProducts() {
    const response = await this.supermarketApi.getAllProducts(1);
    if (!response) {
      this.productPage = 0;
      this.isNextPage = false;
      this.isPrevPage = false;
      this.products = [];
      return;
    }
    this.productPage = parseInt(response.page);
    this.isNextPage = response.nextPage ? true : false;
    this.products = response.products;
    return
  }

  async getProductsPrev() {
    if(this.productPage === 1) return;
    const newPage = this.productPage - 1
    const response = await this.supermarketApi.getAllProducts(newPage);
    if (!response) return;
    this.productPage = parseInt(response.page);
    this.isNextPage = response.nextPage ? true : false;
    this.isPrevPage = response.prevPage ? true : false;
    this.products = response.products;
    return

  }
  async getProductsNext() {
    const newPage = this.productPage + 1
    const response = await this.supermarketApi.getAllProducts(newPage);
    if (!response) return;
    this.productPage = parseInt(response.page);
    this.isNextPage = response.nextPage ? true : false;
    this.isPrevPage = response.prevPage ? true : false;
    this.products = response.products;
    return

  }
}