import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HelpSideComponent } from './help-side/help-side.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Material 
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddContactComponent } from './dialog-add-contact/dialog-add-contact.component';
import { DialogModule } from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    HeaderComponent,
    MenuComponent,
    HelpSideComponent,
    LegalnoticeComponent,
    DialogAddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Angular Material
    MatIconModule,
    MatDialogModule,
    DialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
