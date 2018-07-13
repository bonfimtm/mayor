import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { IgBioComponent } from './ig-bio/ig-bio.component';
import { IgFeedComponent } from './ig-feed/ig-feed.component';

/* Services */
import { IgService } from './ig.service';
import { MailService } from './mail.service';
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
    IgBioComponent,
    IgFeedComponent,
    AboutComponent,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    IgService,
    MailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
