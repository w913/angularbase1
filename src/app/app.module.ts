import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalNavigatorComponent } from './flame/global-navigator/global-navigator.component';
import { HeaderComponent } from './flame/header/header.component';
import { Content1Component } from './contents/content1/content1.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavigatorComponent,
    HeaderComponent,
    Content1Component
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
