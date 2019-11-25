import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule, TabsModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {DiscoverComponent} from './discover.component';
import {DiscoverRoutingModule} from './discover-routing.module';
import {FiveWhysComponent} from './five-whys.component';
import {QuestionLadderComponent} from './question-ladder.component';
import {VoiceCustomerComponent} from './voice-customer.component';
import {InvestigationComponent} from './investigation.component';
import {NgxDocViewerModule} from 'ngx-doc-viewer';

@NgModule({
  imports: [
    NgxDocViewerModule,
    FormsModule,
    DiscoverRoutingModule,
    TabsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    DiscoverComponent,
    FiveWhysComponent,
    QuestionLadderComponent,
    VoiceCustomerComponent,
    InvestigationComponent
  ]
})
export class DiscoverModule {
}
