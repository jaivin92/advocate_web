
import { Component, ChangeDetectionStrategy, inject, OnInit, EventEmitter, Output, AfterViewInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { DataTableModule } from 'src/app/utils/datatable.module';

@Component({
  selector: 'app-list-work',
  templateUrl: 'list.work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [DataTableModule],
})

export class WorkListComponent extends BaseComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }

  loadData() {
    // this.getData(this.dataTableComp.getTableInstance(), this.dataTableRequest);
  }

}
