import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    //Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class AppModule {}
