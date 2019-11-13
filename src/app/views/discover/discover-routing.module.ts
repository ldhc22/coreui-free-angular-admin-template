import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DiscoverComponent} from './discover.component';

const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
    data: {
      title: 'Discover'
    }
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule {
}
