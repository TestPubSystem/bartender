import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdInputModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { AuthorizationService } from './dashboard/shared/authorization.service';
import { GuestGuard } from './login/shared/guest.guard';
import { AuthorizationGuard } from './dashboard/shared/authorization.guard';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdInputModule
  ],
  providers: [AuthorizationService, GuestGuard, AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
