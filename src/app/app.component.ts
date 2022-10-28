import { Component } from '@angular/core';
import { PrimeTableService } from './prime-table.service';
import { LazyLoadEvent } from 'primeng/api';
// import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeNg';
  products: any;
  virtualProducts:any;
  first = 0;
  selectedProducts3 : any;
  rows = 5;
  totalRecords!: number;
  cols!:any[];
  booleanValue: any = false;
  loading!: boolean;
  items:[] =[];

  constructor(private tabService: PrimeTableService){}

  ngOnInit():void{
    this.getProducts();

    this.cols = [
      {  header: 'Code' },
      {  header: 'Name' },
      {  header: 'Category' },
      {  header: 'Quantity' }
  ];
  }

  getProducts(){
    this.tabService.getDetails().subscribe(
      (res:any)=>{
        console.log(res['data'])
        this.virtualProducts = res['data']
        console.log(this.products);
        
        this.totalRecords = res['data'].length;
      }
    )
  }

  loadProduct(event:LazyLoadEvent)
  {
     this.loading = true;
     console.log(event.rows);
     
    // in real world scenario when the loadProduct will be called we will make a call to the real database
    //to fetch the required records
    //event.first = offset of the first row. For example in our case it will be 1 for the first page, 6 for the second page and so on.
    //event.rows = Rows to be displayed per page in the datatable. In our case it will be 5.

    setTimeout(() => {
        if (this.virtualProducts) {
          this.products = this.virtualProducts.slice(event.first, (event.first!+(event.rows!)));
          this.loading = false;
        }
    }, 1000);
  }

  // sort functionality
  sortFunction(colName:any, boolean:any) {
    console.log("hwelo",boolean,colName);
    
    if (boolean === true){
        console.log('ok');
       
        this.items = this.products;    
        this.items.sort((a:any, b:any) => a.code < b.code ? 1 : a.code > b.code ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
    else{
        this.products.sort((a:any, b:any) => a.code > b.code ? 1 : a.code < b.code ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
}
}
