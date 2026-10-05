import { Component, ChangeDetectionStrategy, inject, OnInit, EventEmitter, Output, AfterViewInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'app/components/base.component';
import { DataTableModule } from 'app/utils/datatable.module';

@Component({
  selector: 'app-list-work',
  templateUrl: 'list.work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [DataTableModule],
})
export class WorkListComponent extends BaseComponent implements OnInit, AfterViewInit {
  public columns = [{ name: 'Name', prop: 'Name', sortable: true }];
  ngAfterViewInit(): void {}
  ngOnInit(): void {}

  loadData() {
    // this.getData(this.dataTableComp.getTableInstance(), this.dataTableRequest);
  }
}
