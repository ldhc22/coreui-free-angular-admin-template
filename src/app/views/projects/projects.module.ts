import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, ButtonsModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {ProjectsComponent} from './projects.component';
import {ProjectsRoutingModule} from './projects-routing.module';
import {ProgressComponent} from '../base/progress.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ProjectsRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
