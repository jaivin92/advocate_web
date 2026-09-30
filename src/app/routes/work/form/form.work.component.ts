import { Component, ChangeDetectionStrategy, inject, EventEmitter, Output, Optional } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { FormModule } from 'src/app/utils/form.module';

@Component({
  selector: 'app-form-work',
  templateUrl: 'form.work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [FormModule],
})
export class WorkFormComponent extends BaseComponent {


   constructor() {
    super();

    this.fg = this.fb.group({
      Id: [0],
      Name: ['', this.Validation.Required],
    });
    this.fgIniValue = this.fg.value;
  }


  bindEdit(data: any) {
    this.fg.reset();
    this.fg.patchValue(data);
  }

   onCancel() {
    this.fgReset();
  }

  onSave() {
    if (this.onCheckValidation()) {
      return;
    }
    this.formSubmitStart();
  }
}
