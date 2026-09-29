import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { PageHeader } from '@shared/components';
import { BaseComponent } from 'src/app/components/base.component';
import { WorkFormComponent } from './form/form.work.component';
import { WorkListComponent } from './list/list.work.component';

@Component({
  selector: 'app-index-work',
  templateUrl: 'index.work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [PageHeader, WorkFormComponent, WorkListComponent],
})
export class WorkComponent extends BaseComponent {
  @ViewChild('list') _list: WorkListComponent | undefined;
  @ViewChild('form') _form: WorkFormComponent | undefined;


  success() {
    this._list?.loadData();
  }

  edit(data: any) {
    if (data.Id)
      this._form?.bindEdit(data);
  }
}
