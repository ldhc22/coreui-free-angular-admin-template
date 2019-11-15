import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DiscoverComponent} from './discover.component';
import {FiveWhysComponent} from './five-whys.component';
import {QuestionLadderComponent} from './question-ladder.component';
import {VoiceCustomerComponent} from './voice-customer.component';
import {InvestigationComponent} from './investigation.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Discover'
    },
    children: [
      {
        path: '',
        component: DiscoverComponent,
        data: {
          title: 'Info'
        }
      },
      {
        path: 'investigation',
        component: InvestigationComponent,
        data: {
          title: 'Investigación'
        }
      },
      {
        path: 'five-whys',
        component: FiveWhysComponent,
        data: {
          title: 'Five whys'
        }
      },
      {
        path: 'question-ladder',
        component: QuestionLadderComponent,
        data: {
          title: 'Question ladder'
        }
      },
      {
        path: 'voice-customer',
        component: VoiceCustomerComponent,
        data: {
          title: 'Voice of the customer'
        }
      }
    ]
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule {
}
