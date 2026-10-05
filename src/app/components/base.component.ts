import { EventEmitter, inject, Injectable, Output } from '@angular/core';
import { BaseDatatableComponent } from './datatable.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { CommonFunction } from '../utils/common.functions';
import { LocalStorageService } from '@shared';
import { TableIds } from 'app/models/tableid.enum';

@Injectable({
  providedIn: 'root',
})
export class BaseComponent extends BaseDatatableComponent {
  public readonly fb = inject(FormBuilder);

  formRequestGUID: Guid | null | undefined;
  public fg: FormGroup = {} as any;
  public fgIniValue: any;
  TableId = TableIds;

  @Output() public saveSuccess = new EventEmitter();

  Validation = {
    Required: Validators.required,
    Zero: Validators.min(1),

    UrlValidate: Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/),
  };

  get isProceedToSaved() {
    const ids = CommonFunction.GetLocalVal('formRequestGUIDs');
    if (ids) {
      const ds = ids.split(',');
      if (ds.find(itm => itm == this.formRequestGUID?.toString())) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  fgReset() {
    this.fg.reset(this.fgIniValue, { emitEvent: false });
  }

  onCheckValidation(mainform: FormGroup = this.fg) {
    const controls = mainform.controls; //this.mainForm.controls;
    /** check form */
    if (mainform.invalid) {
      Object.keys(controls).forEach(controlName => {
        controls[controlName].markAsTouched();
        // if (controls[controlName].invalid) {
        //     console.log(controlName, controls[controlName].invalid);
        // }
      });
    }
    return mainform.invalid;
  }

  formSubmitStart() {
    this.formRequestGUID = CommonFunction.getGuid();
    let ids = CommonFunction.GetLocalVal('formRequestGUIDs');
    if (ids) {
      const ds = ids.split(',');
      ds.push(this.formRequestGUID.toString());
      ids = ds.toString();
    } else {
      ids = this.formRequestGUID.toString();
    }
    this.localStorageService.setObj('formRequestGUIDs', ids.split(','));
    this.localStorageService.setObj('setCRformRequestGUID', this.formRequestGUID);
  }
}
