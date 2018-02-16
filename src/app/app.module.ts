import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

/**
 * Composant principal :
 */
import { AppComponent } from './app.component';

/**
 * Elements metiers et son composant.
 */
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { Collegue } from './shared/domain/collegue';

/**
 * Elements d'affichage dynamiques
 */
import { ListeComponent } from './collegues/liste/liste.component';
import { TableauComponent } from './collegues/tableau/tableau.component';
import { CarrouselComponent } from './collegues/carrousel/carrousel.component';
import { DetailComponent } from './collegues/detail/detail.component';

/**
 * Elements d'affichage statique.
 */
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { NavComponent } from './navigation/nav/nav.component';
import { NavDetailComponent } from './navigation/nav-detail/nav-detail.component';
import { ButtonsCollegueComponent } from './static/buttons-collegue/buttons-collegue.component';
import { DefaultComponent } from './pages/default/default.component';
import { CollegueService } from './shared/service/collegue.service';

const appRoutes: Routes = [  
    { path: 'classique', component: DefaultComponent,data: { vue:  ListeComponent } }, 
    { path: 'tableau', component: DefaultComponent,data: { vue:  TableauComponent }  },
    { path: 'carrousel', component: DefaultComponent,data: { vue:  CarrouselComponent }  },
    { path: 'detail/:pseudo', component: DetailComponent },
    { path: '**', redirectTo: 'classique'} // redirige vers la route par défaut
  ];

  const defaultRoutes: Routes = [  
    { path: 'classique', component:  ListeComponent}, 
    { path: 'tableau', component: TableauComponent},
    { path: 'carrousel', component: CarrouselComponent},
    { path: 'detail/:pseudo', component: DetailComponent },
    { path: '**', redirectTo: 'classique'} // redirige vers la route par défaut
  ];
@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ListeComponent,
    TableauComponent,
    CarrouselComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NavDetailComponent,
    ButtonsCollegueComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    //RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(defaultRoutes)
  ],
    providers: [CollegueService],
    bootstrap: [AppComponent]
})
export class AppModule { }
