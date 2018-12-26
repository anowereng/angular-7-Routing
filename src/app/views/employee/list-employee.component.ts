import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from 'src/app/models/product';
import { HttpClient } from "@angular/common/http";
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'customers',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./create-employee.component.css']
     })
export class ListEmployeeComponent implements OnInit {
  customersObservable: Observable<Product[]>;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.customersObservable = this.httpClient
      .get<Product[]>("http://localhost:3000/products");
  }
}


