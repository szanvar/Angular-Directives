import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { MaleCompComponent } from './male-comp/male-comp.component';
import { FemaleCompComponent } from './female-comp/female-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDemoComponent,
    MaleCompComponent,
    FemaleCompComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
