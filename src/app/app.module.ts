import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

/* Components */
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

/* Services */
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    InterviewsComponent,
    FaqComponent,
    ContactComponent,
    ParallaxComponent,
    AboutComponent,
    FooterComponent,
    CarouselComponent,
    ContactFormComponent,
    TicketPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AppRoutingModule,
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
