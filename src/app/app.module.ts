import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { LoadFilePageComponent } from './pages/load-file-page/load-file-page.component';
import { MainDashboardPageComponent } from './pages/main-dashboard-page/main-dashboard-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectPageComponent,
    CardMainComponent,
    LoadFilePageComponent,
    MainDashboardPageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
