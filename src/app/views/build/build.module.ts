import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConnectRoutingModule} from '../connect/connect-routing.module';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {BuildComponent} from './build.component';
import {LowFidelityComponent} from './low-fidelity.component';
import {MidFidelityComponent} from './mid-fidelity.component';
import {HighFidelityComponent} from './high-fidelity.component';
import {BuildRoutingModule} from './build-routing.module';

@NgModule({
  imports: [
    FormsModule,
    BuildRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    BuildComponent,
    LowFidelityComponent,
    MidFidelityComponent,
    HighFidelityComponent
  ]
})
export class BuildModule {

}
