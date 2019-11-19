import {Component, OnInit} from '@angular/core';
import {TeamMemberModel} from '../../model/teamMember.model';
import {ProjectModel} from '../../model/project.model';
import {RestrictionsModel} from '../../model/restrictions.model';

@Component({
  templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {

  public project: ProjectModel = new ProjectModel();
  public enableEdit: boolean = false;

  ngOnInit(): void {
    this.initProjects();
  }

  toggleEdit() {
    this.enableEdit = !this.enableEdit;
  }

  initProjects() {
    this.project.id = '12345678';
    this.project.name = 'Sistema de enfriamiento sólido';
    this.project.description = 'Desarrollo de sistema de enfriamiento que utiliza una pieza sólida en lugar de fluidos';
    this.project.client = 'Big Company S.A de C.V.';
    this.project.objective = 'Obtener un sistema que reduzca el consumo de energía en un 20%';
    this.project.restrictions = new RestrictionsModel();
    this.project.restrictions.time = '60 semanas';
    this.project.restrictions.cost = '$1,000,000';
    this.project.restrictions.quality = '';
    this.project.completion = 60;
    this.project.stakeholders = [];
    this.project.startDate = new Date();
    this.initStakeholders(this.project.stakeholders);
    this.project.challenges = 'Viabilidad técnica del producto';
    this.project.teamMembers = [];
    this.initTeamMembers(this.project.teamMembers);
  }

  initStakeholders(stakeholders: TeamMemberModel[]) {
    const stake = new TeamMemberModel();
    stake.name = 'Juan Lopez';
    stake.email = 'j.lopez@bigcompany.com';
    stake.role = 'stakeholder';
    const stake2 = new TeamMemberModel();
    stake2.name = 'Pedro Páramo';
    stake2.email = 'p.paramo@bigcompany.com';
    stake2.role = 'stakeholder';
    stakeholders.push(stake);
    stakeholders.push(stake2);
  }

  initTeamMembers(teamMembers: TeamMemberModel[]) {
    const team = new TeamMemberModel();
    team.name = 'Ismael García';
    team.email = 'i.garcia@ourcompany.com';
    team.role = 'Diseñador';
    const team2 = new TeamMemberModel();
    team2.name = 'Luis Hernández';
    team2.email = 'l.hernandez@ourcompany.com';
    team2.role = 'Ingeniero';
    teamMembers.push(team);
    teamMembers.push(team2);
  }

  addStakeholder() {
    this.project.stakeholders.push(new TeamMemberModel());
  }

  removeStakeholder(index) {
    this.project.stakeholders.splice(index, 1);
  }

  addTeamMember() {
    this.project.teamMembers.push(new TeamMemberModel());
  }

  removeTeamMember(index) {
    this.project.teamMembers.splice(index, 1);
  }
}
