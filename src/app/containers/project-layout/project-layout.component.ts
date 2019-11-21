import {navPhases} from '../../constants/_navPhases';
import {Component, OnInit} from '@angular/core';
import {NotificationModel} from '../../model/notification.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProjectModel} from '../../model/project.model';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './project-layout.component.html',
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':leave',
          [
            style({ opacity: 1, overflow: '*' }),
            animate('1s ease-in',
              style({ width: 0, opacity: 0, overflow: 'hidden', whiteSpace: 'nowrap'}))
          ]
        )
      ]
    )
  ]
})
export class ProjectLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navPhases;
  public userName: string = 'Luis Daniel Hernández Carrera';
  public notifications: NotificationModel[] = [];
  public messages: NotificationModel[] = [];
  public project: ProjectModel;
  public id: string;
  public dismissMsg: boolean = false;
  public extendChatBot: boolean = false;

  public constructor(public router: Router,
                     private route: ActivatedRoute) {
    this.initMessages();
    this.initNotifications();
    this.getProject();
  }

  ngOnInit(): void {
    // this.id =  this.route.snapshot.paramMap.get('id');
    this.id = sessionStorage.getItem('projectId');
    setTimeout(() => {
      this.dismissMsg = true;
    }, 10000 );
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  initNotifications() {
    const not1 = new NotificationModel();
    not1.type = 'INFO';
    not1.header = 'Nuevo Comentario';
    not1.body = 'Hay un nuevo comentario en fase 1';
    this.notifications.push(not1);
  }

  initMessages() {
    const message = new NotificationModel();
    message.type = 'MESSAGE';
    message.header = 'Marcelo dice:';
    message.body = 'Hay una actualización en fase 1';
    this.messages.push(message);
  }

  getProject() {
    this.project = new ProjectModel();
    this.project.name = 'i4.0 Fast Response';
    this.project.completion = 60;
  }
}
