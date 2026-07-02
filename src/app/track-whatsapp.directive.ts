import { Directive, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type GtagFn = (command: 'event', action: string, params?: Record<string, unknown>) => void;

/**
 * Sends a Google Analytics (gtag.js) 'whatsapp_contact' event whenever the host
 * element is clicked. Applied to WhatsApp call-to-action links so we can measure
 * how many visitors reach out via WhatsApp.
 */
@Directive({
  selector: '[trackWhatsapp]',
})
export class TrackWhatsappDirective {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  @HostListener('click')
  onClick(): void {
    if (!this.isBrowser) {
      return;
    }

    const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
    gtag?.('event', 'whatsapp_contact');
  }
}
