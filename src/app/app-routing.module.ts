import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { BoardComponent } from './board/board.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HelpSideComponent } from './help-side/help-side.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { LoginComponent } from './login/login.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'board', component: BoardComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'help', component: HelpSideComponent},
  { path: 'legalnotice', component: LegalnoticeComponent},
  { path: 'login', component: LoginComponent, outlet: 'loginSide'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
