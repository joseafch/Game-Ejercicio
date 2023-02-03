import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoriComponent } from './pages/memori/memori.component';
import { BuscaTesoroComponent } from './pages/busca-tesoro/busca-tesoro.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { TGalleryComponent } from './shared/components/gallery/g-tesoro/t-gallery/t-gallery.component';
import { GMoleComponent } from './shared/components/gallery/g-mole/g-mole.component';
import { MoleComponent } from './pages/mole/mole.component';
import { WhoIsITComponent } from './pages/who-is-it/who-is-it.component';
import { GWhosIsItComponent } from './shared/components/gallery/g-whos-is-it/g-whos-is-it.component';



@NgModule({
  declarations: [
    AppComponent,
    MemoriComponent,
    BuscaTesoroComponent,
    HomeComponent,
    GalleryComponent,
    HeaderComponent,
    TGalleryComponent,
    GMoleComponent,
    MoleComponent,
    WhoIsITComponent,
    GWhosIsItComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
