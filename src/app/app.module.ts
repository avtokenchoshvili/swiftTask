import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPgComponent } from './components/main-pg/main-pg.component';
import { UsersCardComponent } from './components/users-card/users-card.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import  { HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPgComponent,
    UsersCardComponent,
    InfiniteScrollComponent,
    ProgressBarComponent,
    UserProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
