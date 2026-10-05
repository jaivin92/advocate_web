import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { PageHeader } from '@shared/components';
import { BaseComponent } from 'app/components/base.component';


@Component({
  selector: 'app-index-customer',
  templateUrl: 'index.customer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [PageHeader],
})
export class CustomerComponent extends BaseComponent {

}
