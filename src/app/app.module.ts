import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CardCampaingComponent } from './components/card-campaing/card-campaing.component';
import { LoadFilePageComponent } from './pages/load-file-page/load-file-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectPageComponent,
    CardCampaingComponent,
    LoadFilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
