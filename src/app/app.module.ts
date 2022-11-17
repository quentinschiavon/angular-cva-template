import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ParentFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
