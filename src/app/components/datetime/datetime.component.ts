import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    ControlContainer,
    FormGroupDirective,
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'my-datetime',
    templateUrl: 'datetime.component.html',
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
        MatDatepickerModule
    ]
})
export class DateTimeComponent {
    @Input() Id = '';
    @Input() Label = '';
    @Input() PlaceHolder = '';
    @Input() isRequired = false;
    @Input() MinDate: Date | undefined;
    @Input() MaxDate: Date | undefined;

    @Output() ValueChanged = new EventEmitter<string>();

    constructor(private parentForm: FormGroupDirective) {}

    onDateChange(event: MatDatepickerInputEvent<Date>) {
        const selectedDate = event.value;

        if (!selectedDate) {
            this.parentForm.form.get(this.Id)?.setValue(null);
            this.ValueChanged.emit('');
            return;
        }

        // Convert to local date only (yyyy-MM-dd)
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        // Save safe date string into form
        this.parentForm.form.get(this.Id)?.setValue(formattedDate);

        this.ValueChanged.emit(formattedDate);
    }
}
