import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MtxButtonModule } from '@ng-matero/extensions/button';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from '../components/input/input.component';
import { DateTimeComponent } from '../components/datetime/datetime.component';
import { FooterButtonComponent } from '../components/form-footer-button/form-footer-button.component';
import { SelectComponent } from '../components/select/select.component';
import { DisableNumberInputDirective } from './directives/DisableNumberInputDirective';

@NgModule({
  imports: [
    InputComponent,
    SelectComponent,
    DateTimeComponent,
    FooterButtonComponent,
    DisableNumberInputDirective
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    MtxButtonModule,
    MatCardModule,
    InputComponent,
    SelectComponent,
    DateTimeComponent,
    FooterButtonComponent,
    DisableNumberInputDirective
  ]
})
export class FormModule {}
