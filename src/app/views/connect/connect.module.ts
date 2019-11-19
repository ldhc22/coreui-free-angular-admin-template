import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {ConnectRoutingModule} from './connect-routing.module';
import {ConnectComponent} from './connect.component';
import {InsightsComponent} from './insights.component';
import {AffinityDiagramComponent} from './affinity-diagram.component';

@NgModule({
  imports: [
    FormsModule,
    ConnectRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    ConnectComponent,
    InsightsComponent,
    AffinityDiagramComponent
  ]
})
export class ConnectModule {

}
