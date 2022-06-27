import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UnitBoardComponent } from './unit-board/unit-board.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'unitBoard',
    pathMatch: 'full',
  },
  {
    path: 'unitBoard',
    component: UnitBoardComponent,
  },
  {
    path: 'unitDetail',
    component: UnitDetailComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
