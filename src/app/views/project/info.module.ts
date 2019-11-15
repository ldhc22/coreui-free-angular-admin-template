import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {InfoRoutingModule} from './info-routing.module';
import {InfoComponent} from './info.component';

@NgModule({
  imports: [
    FormsModule,
    InfoRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    InfoComponent
  ]
})
export class InfoModule {
}
