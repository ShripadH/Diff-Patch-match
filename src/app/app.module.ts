import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './Components/new-component/new-component.component';
import { CpmpareTextComponent } from './cpmpare-text/cpmpare-text.component';
import { CompareTextComponent } from './compare-text/compare-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    CpmpareTextComponent,
    CompareTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
