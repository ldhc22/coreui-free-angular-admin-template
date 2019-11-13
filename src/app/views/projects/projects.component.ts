import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectModel} from '../../model/project.model';
import {TeamMemberModel} from '../../model/teamMember.model';
import {RestrictionsModel} from '../../model/restrictions.model';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  templateUrl: 'projects.component.html'
})
export class ProjectsComponent implements OnInit {
  @ViewChild('newProjectModal') public newProjectModal: ModalDirective;
  public projects: ProjectModel[] = [];
  public projectToAdd: ProjectModel = new ProjectModel();

  ngOnInit(): void {
    this.initProjects();
    this.projectToAdd.teamMembers = [new TeamMemberModel()];
    this.projectToAdd.stakeholders = [new TeamMemberModel()];
  }

  initProjects() {
    const proj = new ProjectModel();
    proj.name = 'Sistema de enfriamiento sólido';
    proj.description = 'Desarrollo de sistema de enfriamiento que utiliza una pieza sólida en lugar de fluidos';
    proj.client = 'Big Company S.A de C.V.';
    proj.objective = 'Obtener un sistema que reduzca el consumo de energía en un 20%';
    proj.restrictions = new RestrictionsModel();
    proj.restrictions.time = '60 semanas';
    proj.restrictions.cost = '$1,000,000';
    proj.restrictions.quality = '';
    proj.completion = 60;
    proj.stakeholders = [];
    this.initStakeholders(proj.stakeholders);
    proj.challenges = 'Viabilidad técnica del producto';
    proj.teamMembers = [];
    this.initTeamMembers(proj.teamMembers);
    this.projects.push(proj);
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
    this.projectToAdd.stakeholders.push(new TeamMemberModel());
  }
  removeStakeholder(index) {
    this.projectToAdd.stakeholders.splice(index, 1);
  }
  addTeamMember() {
    this.projectToAdd.teamMembers.push(new TeamMemberModel());
  }
  removeTeamMember(index) {
    this.projectToAdd.teamMembers.splice(index, 1);
  }
  addProject() {
    this.projectToAdd.completion = 0;
    this.projects.push(Object.assign({}, this.projectToAdd));
    this.resetProject(this.projectToAdd);
    this.newProjectModal.hide();
  }
  resetProject(project: ProjectModel) {
    project = new ProjectModel();
    project.teamMembers = [new TeamMemberModel()];
    project.stakeholders = [new TeamMemberModel()];
  }
}
