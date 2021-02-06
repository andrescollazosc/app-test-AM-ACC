import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { LoadFilePageComponent } from './pages/load-file-page/load-file-page.component';

const routes: Routes = [
  { path: '', component: ProjectPageComponent },
  { path: 'load-file', component: LoadFilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
