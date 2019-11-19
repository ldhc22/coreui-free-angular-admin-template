import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConnectRoutingModule} from '../connect/connect-routing.module';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {LaunchComponent} from './launch.component';
import {MarketingMixComponent} from './marketing-mix.component';
import {LaunchRoutingModule} from './launch-module.module';

@NgModule(
  {
    imports: [
      FormsModule,
      LaunchRoutingModule,
      BsDropdownModule,
      ButtonsModule.forRoot(),
      ProgressbarModule.forRoot(),
      CommonModule,
      ModalModule.forRoot(),
    ],
    declarations: [
      LaunchComponent,
      MarketingMixComponent
    ]
  }
)
export class LaunchModule {

}
