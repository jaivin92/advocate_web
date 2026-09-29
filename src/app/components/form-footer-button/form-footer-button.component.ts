/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, TemplateRef } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MtxButtonModule } from '@ng-matero/extensions/button';

@Component({
  selector: 'my-footer-button',
  templateUrl: 'form-footer-button.component.html',
  styleUrl: './form-footer-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  imports: [MatButtonModule, MatInputModule, MtxButtonModule, CommonModule],
})
export class FooterButtonComponent {
  @Input() isProceedToSaved = false;
  @Input() SaveBtnText: string = 'Save';
  @Input() CancelBtnText: string = 'Cancel';
  @Output() saveClick = new EventEmitter();
  @Output() cancelClick = new EventEmitter();
  @Input() noteTemplate!: TemplateRef<any> | null;
  @Input() actionsFormTemplate!: TemplateRef<any>;

  constructor(@Optional() private formGroupDir: FormGroupDirective) {}

  get form() {
    return this.formGroupDir?.form;
  }

  onCancel() {
    if (this.form?.dirty) {
      const confirmLeave = confirm('Unsaved changes detected. If you leave this page, your changes will be lost. Do you want to continue?');
      if (!confirmLeave) return;
    }
    this.cancelClick.emit();
  }
}
