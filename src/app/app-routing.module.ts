import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletePage } from './complete/complete.page';
import { ExercisePage } from './exercise/exercise.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exercise'
  },
  {
    path: 'exercise',
    component: ExercisePage
  },
  {
    path: 'complete',
    component: CompletePage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
