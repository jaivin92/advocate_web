import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, inject, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { LocalStorageService } from '@shared';
import { DataTableRequest } from 'app/models/datatable.model';
import { DataTableFilterModel } from 'app/models/datatableFilter.model';
import { TableIds } from 'app/models/tableid.enum';
import { ReadColumnDataTypeEnums, RoleAction } from 'app/utils/enums';
import { ColumnMode, DatatableComponent, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { FormModule } from 'app/utils/form.module';
import { DefaultNumberPipe } from 'app/utils/pipes/defaultnumber.pipe';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  imports: [CommonModule, NgxDatatableModule, FormsModule, MatIconModule, MatButtonModule, FormModule, MatMenuModule, NgTemplateOutlet, DefaultNumberPipe],
})
export class cDataTableComponent implements OnInit {
  public readonly localStorageService = inject(LocalStorageService);

  @ViewChild('tableData', { static: false }) table!: DatatableComponent;

  @Input() TableId: TableIds = TableIds.TableId;
  @Input() dataTableRequest = new DataTableRequest();
  @Input() loading = false;
  @Input() columns: any[] = [];
  @Input() headerHeight = 50;
  @Input() footerHeight = 50;
  @Input() selectionType = SelectionType.multi;

  @Output() filterClick = new EventEmitter<any>();

  ColumnMode = ColumnMode;
  public fg: FormGroup = {} as any;
  showFilterForm = false;
  ReadColumnDataTypeEnums = ReadColumnDataTypeEnums;

  constructor() {
    this.fg = new FormBuilder().group({
      Name: [''],
    });
  }

  ngOnInit(): void {}

  filterData(reset = false) {
    const _filter = this.fg.getRawValue() as DataTableFilterModel;
    _filter.IsActive = true;
    _filter.FreeTextSearch = _filter.Name;
    if (reset) {
      this.showFilterForm = false;
      if (_filter.Name) {
        this.fg.reset();
        this.filterClick.emit(new DataTableFilterModel());
      }
    } else {
      this.localStorageService.setObj(TableIds[this.TableId] + '_grid', JSON.stringify(_filter));
      this.filterClick.emit(_filter);
    }
  }
}
