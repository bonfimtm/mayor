import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { environment } from '../environments/environment';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ParallaxComponent } from './parallax/parallax.component';

/* Services */
import { ContactService } from './contact.service';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InterviewsComponent,
    FaqComponent,
    ContactComponent,
    ParallaxComponent,
    AboutComponent,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
