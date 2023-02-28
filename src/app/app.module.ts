import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { FormsComponent } from './forms/forms.component';
import { LogginService } from './logginService.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
