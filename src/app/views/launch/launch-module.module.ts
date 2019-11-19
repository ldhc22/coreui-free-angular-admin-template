import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchComponent} from './launch.component';
import {MarketingMixComponent} from './marketing-mix.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Launch'
    },
    children: [
      {
        path: '',
        component: LaunchComponent,
        data: {
          title: 'Información'
        }
      },
      {
        path: 'marketing-mix',
        component: MarketingMixComponent,
        data: {
          title: 'Marketing Mix'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchRoutingModule {

}
