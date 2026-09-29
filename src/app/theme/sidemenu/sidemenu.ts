import { animate, state, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, NgTemplateOutlet, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';

import { MenuService } from '@core';
import { NavAccordionDirective } from './nav-accordion.directive';
import { NavAccordionItemDirective } from './nav-accordion-item.directive';
import { NavAccordionToggleDirective } from './nav-accordion-toggle.directive';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    SlicePipe,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgxPermissionsModule,
    MatIconModule,
    MatRippleModule,
    TranslateModule,
    NavAccordionDirective,
    NavAccordionItemDirective,
    NavAccordionToggleDirective,
  ],
  animations: [
    trigger('expansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: '' })),
      transition(
        'expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4,0,0.2,1)')
      ),
    ]),
  ],
})
export class Sidemenu {

  @Input() ripple = false;

  private readonly menu = inject(MenuService);

  menu$ = this.menu.getAll();

  buildRoute = this.menu.buildRoute;
}


