import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {DiscoverComponent} from './discover.component';
import {DiscoverRoutingModule} from './discover-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DiscoverRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    DiscoverComponent
  ]
})
export class DiscoverModule {
}
