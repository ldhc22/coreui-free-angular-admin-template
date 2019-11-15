import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from '../projects/projects.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: {
      title: 'Proyectos'
    }
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule {
}
