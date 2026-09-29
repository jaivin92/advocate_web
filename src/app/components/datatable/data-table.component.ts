import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, inject, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { LocalStorageService } from '@shared';
import { FormModule } from 'src/app/utils/form.module';
import { DataTableRequest } from 'src/app/models/datatable.model';
import { DataTableFilterModel } from 'src/app/models/datatableFilter.model';
import { TableIds } from 'src/app/models/tableid.enum';
import { RoleAction } from 'src/app/utils/enums';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, FormModule, MatMenuModule,],
})
export class cDataTableComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
