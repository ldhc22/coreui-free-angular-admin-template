import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildComponent} from './build.component';
import {LowFidelityComponent} from './low-fidelity.component';
import {MidFidelityComponent} from './mid-fidelity.component';
import {HighFidelityComponent} from './high-fidelity.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Build'
    },
    children: [
      {
        path: '',
        component: BuildComponent,
        data: {
          title: 'Información'
        }
      },
      {
        path: 'low-fidelity',
        component: LowFidelityComponent,
        data: {
          title: 'Low fidelity prototyping'
        }
      },
      {
        path: 'mid-fidelity',
        component: MidFidelityComponent,
        data: {
          title: 'Mid fidelity prototyping'
        }
      },
      {
        path: 'high-fidelity',
        component: HighFidelityComponent,
        data: {
          title: 'High fidelity prototyping'
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildRoutingModule {

}
