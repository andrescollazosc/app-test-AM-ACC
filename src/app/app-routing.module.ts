import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { LoadFilePageComponent } from './pages/load-file-page/load-file-page.component';
import { MainDashboardPageComponent } from './pages/main-dashboard-page/main-dashboard-page.component';
import { RouterConstants } from './constants/router.constants';

const routes: Routes = [
  { path: '', component: MainDashboardPageComponent },
  { path: RouterConstants.ROUTES.PROJECTS, component: ProjectPageComponent },
  { path: RouterConstants.ROUTES.LOAD_FILE, component: LoadFilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
