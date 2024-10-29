import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsModule } from './modules/projects/projects.module';
import { ContactMeComponent } from './components/contact-me/contact-me.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"education",component:EducationComponent},
  {path:"projects",loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)},
  {path:"experience",component:ExperienceComponent},
  {path:"contact",component:ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
