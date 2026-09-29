/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'my-input',
    templateUrl: 'input.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [],
    viewProviders: [
        { provide: ControlContainer, useExisting: FormGroupDirective },
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        TranslateModule,
    ]
})
export class InputComponent {
    @Input() Id: string = '';
    @Input() Type: string = 'text';
    @Input() Label: string = '';
    @Input() PlaceHolder: string = '';
    @Input() isRequired: boolean = false;
    @Input() multiLine: boolean = false;
    @Input() TabIndex: number = 1;
    @Input() isDisable: boolean = false;

    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onChange = new EventEmitter();
}
