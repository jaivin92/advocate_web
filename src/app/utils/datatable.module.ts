import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { cDataTableComponent } from '../components/datatable/data-table.component';

@NgModule({
  imports: [
     NgxDatatableModule,
     cDataTableComponent
  ],
  exports:[
     NgxDatatableModule,
     cDataTableComponent
  ]
})
export class DataTableModule{

}
