import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from "src/app/shared/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  openReplier = false;
  sToChild = "";

  displayedColumns: string[] = ['id', 'content', 'ownerID'];
  MyDataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public productService: ProductService) {
  }

  ngOnInit() {
    this.MyDataSource = new MatTableDataSource();
    this.getProducts();
    this.MyDataSource.paginator = this.paginator;
    this.MyDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
    if (this.MyDataSource.paginator) {
      this.MyDataSource.paginator.firstPage();
    }
  }

  // Get Products
  public getProducts() {
    this.productService.getProducts()
    .subscribe(data => this.MyDataSource.data = data);
  }

  getRecord(row){

    this.sToChild = row.id;
    this.openReplier = true;

    // alert(row.id);
    // console.log(row);
  }


}
