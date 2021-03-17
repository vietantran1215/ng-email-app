import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/pages/messages/messages.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { PreferencesComponent } from './components/pages/preferences/preferences.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconsModule } from './icons/icons.module';
import { EmailBoxComponent } from './components/email-box/email-box.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmailContentComponent } from './components/email-content/email-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ContactsComponent,
    PreferencesComponent,
    NavbarComponent,
    EmailBoxComponent,
    EmailDetailComponent,
    EmailPreviewComponent,
    PageNotFoundComponent,
    EmailContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IconsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
