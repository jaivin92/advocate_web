import { HostListener, inject, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core';
import { TableIds } from '../models/tableid.enum';
import { RoleAction } from '../utils/enums';
import { LocalStorageService } from '@shared';
import { DataTableRequest } from '../models/datatable.model';

@Injectable({
  providedIn: 'root',
})
export class BaseDatatableComponent {
  public readonly router = inject(Router);
  public readonly authService = inject(AuthService);
  public readonly localStorageService = inject(LocalStorageService);


}
