import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateComponent} from './create.component';
import {ImprovementTriggersComponent} from './improvement-triggers.component';
import {MatrizMvpComponent} from './matriz-mvp.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Create'
    },
    children: [
      {
        path: '',
        component: CreateComponent,
        data: {
          title: 'Información'
        }
      },
      {
        path: 'improvement-triggers',
        component: ImprovementTriggersComponent,
        data: {
          title: 'Improvement Triggers'
        }
      },
      {
        path: 'matriz-mvp',
        component: MatrizMvpComponent,
        data: {
          title: 'Matriz definición MVP'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {

}
