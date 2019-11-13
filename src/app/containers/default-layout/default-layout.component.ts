import {Component} from '@angular/core';
import {navItems} from '../../constants/_nav';
import {Router} from '@angular/router';
import {NotificationModel} from '../../model/notification.model';
import {navItemsShort} from '../../constants/_navShort';
import {constants} from '../../constants/_const';
import {navPhases} from '../../constants/_navPhases';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  // public navItems = navItems;
  public navItemsShort = navItemsShort;
  public userName: string = 'Luis Daniel Hernández Carrera';
  public notifications: NotificationModel[] = [];
  public messages: NotificationModel[] = [];

  public constructor(public router: Router) {
    this.initMessages();
    this.initNotifications();
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
}
