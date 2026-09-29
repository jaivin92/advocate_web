import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'my-select',
  templateUrl: 'select.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, TranslateModule, MtxSelectModule],
})
export class SelectComponent implements OnChanges {
  @Input() Id = '';
  @Input() Label = '';
  @Input() PlaceHolder = '';
  @Input() isRequired = false;
  @Input() isMultiple = false;
  @Input() bindLabel = 'Name';
  @Input() bindValue = 'Id';
  @Input() data: any[] = [];
  @Input() AddTag: boolean  = false;
  @Input() TabIndex = 1;
  @Input() IsAddNewOption = false;
  @Input() WithoutForm = false;

  @Output() ValueChanged = new EventEmitter();

  _addTag = false;

  ngOnChanges(changes: SimpleChanges): void {
    this._addTag = typeof this.AddTag == 'function';
    if (this.IsAddNewOption) this.data = [{ Name: 'Add New', Id: -1 }, ...this.data];
  }

  onEnter(event: any) {
    event.preventDefault();

    const form = event.target as HTMLElement;
    const focusable = Array.from(
      document.querySelectorAll<HTMLElement>('form input, form mat-select, form textarea, form button, form [tabindex]:not([tabindex="-1"]), form [tabindex]:not([tabindex="0"])')
    ).filter(el => !el.hasAttribute('disabled') && el.getAttribute('tabindex') != '0' && el.getAttribute('tabindex') != '-1');
    //filter(el => {!el.hasAttribute('disabled'); console.log(el, el.getAttribute('tabindex') != '0');});

    const index = focusable.indexOf(form);
    if (index > -1 && focusable[index + 1]) {
      focusable[index + 1].focus();
    }
  }
}
