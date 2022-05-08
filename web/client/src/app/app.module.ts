import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { FilmsComponent } from './films/films.component';
import { SerieComponent } from './serie/serie.component';
import { CommentWidgetComponent } from './comment-widget/comment-widget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PreviewCardComponent,
    FilmsComponent,
    SerieComponent,
    CommentWidgetComponent,
    FilmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'films', component: FilmsComponent },
      { path: 'serie/:serieId', component: SerieComponent },
      { path: 'film/:filmId', component: FilmComponent },
    ]),
    BrowserAnimationsModule,
    TabsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
