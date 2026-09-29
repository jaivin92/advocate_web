import { EventEmitter, inject, Injectable, Output } from '@angular/core';
import { BaseDatatableComponent } from './datatable.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class BaseComponent extends BaseDatatableComponent {

  public readonly fb = inject(FormBuilder);


  formRequestGUID: Guid | null | undefined;
  public fg: FormGroup = {} as any;
  public fgIniValue: any;


  @Output() public saveSuccess = new EventEmitter();

  Validation = {
    Required: Validators.required,
    Zero: Validators.min(1),
    // eslint-disable-next-line max-len
    UrlValidate: Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/)
  };
}
