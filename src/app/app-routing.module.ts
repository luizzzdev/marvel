import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CharactersComponent } from './characters/characters.component';
import { CommicsComponent } from './commics/commics.component';
import { CommicDetailComponent } from './commics/commic-detail/commic-detail.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:characterId',
    component: CharacterDetailComponent,
  },
  {
    path: 'commics',
    component: CommicsComponent,
  },
  {
    path: 'commics/:commicId',
    component: CommicDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
