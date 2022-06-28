import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnitBoardComponent } from './unit-board/unit-board.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { SigningViewComponent } from './signing-view/signing-view.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { StudentListItemComponent } from './unit-detail/student-list-item/student-list-item.component';

import { StoreModule } from '@ngrx/store';
import { authReducer } from '../shared/store/reducers/auth.reducer';

@NgModule({
  declarations: [AppComponent, LoginComponent, UnitBoardComponent, UnitDetailComponent, SigningViewComponent, StudentListItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    StoreModule.forRoot({ isLog: authReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
