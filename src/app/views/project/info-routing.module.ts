import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from '../projects/projects.component';
import {NgModule} from '@angular/core';
import {InfoComponent} from './info.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    data: {
      title: 'Información'
    }
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule {
}
