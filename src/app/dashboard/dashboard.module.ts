  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { DashboardRoutingModule } from './dashboard-routing.module';
  import { DashboardComponent } from './dashboard.component';
  import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsModule } from './modules/projects/projects.module';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MatDialogModule } from '@angular/material/dialog';

  @NgModule({
    declarations: [
      DashboardComponent,
      HomeComponent,
      ExperienceComponent,
      EducationComponent,
      ContactMeComponent,
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      ProjectsModule,
      MatDialogModule,
    ]
  })
  export class DashboardModule { }
