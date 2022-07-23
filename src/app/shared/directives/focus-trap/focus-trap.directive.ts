import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  private firstElementFocus: HTMLElement = null;
  private lastElementFocus: HTMLElement = null;

  constructor(private elementRef: ElementRef<any>) {}

  ngAfterViewInit(): void {
    const focusableElements = this.elementRef.nativeElement.querySelectorAll(`
    [tabindex]:not([tabindex="-1"]),
    a[href]:not([disabled]),
    button:not([disabled]),
    textarea:not([disabled]),
    input:not([disabled]),
    select:not([disabled])`
  ) as Array<HTMLElement>;

  this.firstElementFocus = focusableElements[0];
  this.lastElementFocus = focusableElements[focusableElements.length -1];
  this.firstElementFocus.focus();
  }

  @HostListener('keydown', ['$event'])
  public manageTap(event: KeyboardEvent): void {
    if(event.key !== 'Tab') {
      return;
    }

    if(event.shiftKey && document.activeElement === this.firstElementFocus) {
      this.lastElementFocus.focus();
      event.preventDefault();
    } else if(document.activeElement === this.lastElementFocus) {
      this.firstElementFocus.focus();
      event.preventDefault();
    }
  }
}
