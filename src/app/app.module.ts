import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CharactersComponent } from './characters/characters.component';
import { CommicsComponent } from './commics/commics.component';
import { CommicDetailComponent } from './commics/commic-detail/commic-detail.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CharactersComponent,
    CommicsComponent,
    CommicDetailComponent,
    CharacterDetailComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
