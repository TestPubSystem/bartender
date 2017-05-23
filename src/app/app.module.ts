import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { AppRoutingModule } from './app.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
