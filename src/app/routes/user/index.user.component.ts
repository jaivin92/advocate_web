import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { PageHeader } from '@shared/components';
import { BaseComponent } from 'src/app/components/base.component';

@Component({
  selector: 'app-index-user',
  templateUrl: 'index.user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [PageHeader],
})
export class UserComponent extends BaseComponent {
  
}
