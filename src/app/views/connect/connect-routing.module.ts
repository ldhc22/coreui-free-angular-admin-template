import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ConnectComponent} from './connect.component';
import {InsightsComponent} from './insights.component';
import {AffinityDiagramComponent} from './affinity-diagram.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Connect'
    },
    children: [
      {
        path: '',
        component: ConnectComponent,
        data: {
          title: 'Información'
        }
      },
      {
        path: 'insights',
        component: InsightsComponent,
        data: {
          title: 'Insights'
        }
      },
      {
        path: 'affinity-diagram',
        component: AffinityDiagramComponent,
        data: {
          title: 'Affinity diagram'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule {

}
