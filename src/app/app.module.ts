import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';
import { ComputerModeComponent } from './modules/computer-mode/computer-mode.component';
import { NavMenuComponent } from './modules/nav-menu/nav-menu.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { PlayAgainstComputerDialogComponent } from './modules/play-against-computer-dialog/play-against-computer-dialog.component';
import { MoveListComponent } from './modules/move-list/move-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    ComputerModeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavMenuComponent,
    PlayAgainstComputerDialogComponent,
    MoveListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
