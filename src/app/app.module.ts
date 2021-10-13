import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CivilizationListComponent } from './components/civilization-list/civilization-list.component';
import { CivilizationItemComponent } from './components/civilization-item/civilization-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CivilizationListComponent,
    CivilizationItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
