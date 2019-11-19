import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConnectRoutingModule} from '../connect/connect-routing.module';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create.component';
import {ImprovementTriggersComponent} from './improvement-triggers.component';
import {MatrizMvpComponent} from './matriz-mvp.component';
import {CreateRoutingModule} from './create-routing.module';

@NgModule(
  {
    imports: [
      FormsModule,
      CreateRoutingModule,
      BsDropdownModule,
      ButtonsModule.forRoot(),
      ProgressbarModule.forRoot(),
      CommonModule,
      ModalModule.forRoot(),
    ],
    declarations: [
      CreateComponent,
      ImprovementTriggersComponent,
      MatrizMvpComponent
    ]
  }
)
export class CreateModule {

}
