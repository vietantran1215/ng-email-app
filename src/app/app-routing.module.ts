import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './components/pages/messages/messages.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { PreferencesComponent } from './components/pages/preferences/preferences.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  {
    path: 'messages',
    component: MessagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inbox' },
      { path: ':folder', component: EmailPreviewComponent }
    ]
  },
  { path: 'contacts', component: ContactsComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
