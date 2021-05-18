import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTestComponent } from './application/pages/first-test/first-test.component';
import { SecondTestComponent } from './application/pages/second-test/second-test.component';

const routes: Routes = [
  { path: 'first', component: FirstTestComponent },
  { path: 'second', component: SecondTestComponent },
  { path: '', redirectTo: 'first', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
