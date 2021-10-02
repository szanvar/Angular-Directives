import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirDirective } from './my-dir.directive';
import { DemoDirective } from './demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    DemoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
