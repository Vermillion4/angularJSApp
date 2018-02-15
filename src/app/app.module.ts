import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { Collegue } from './shared/domain/collegue';
import { ListeComponent } from './collegues/liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ListeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	  NgbModule.forRoot()
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
