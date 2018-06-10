import { Directive, AfterViewChecked, OnInit, ElementRef, HostListener } 
  from '@angular/core';

@Directive({
  selector: '[appOnScrollFadeIn]'
})
export class OnScrollFadeInDirective implements OnInit {

  // Nb: pas de type pour le éléments natifs du DOM
  // cf https://github.com/angular/angular/issues/13139
  element: any;
  alreadySeen: boolean = false;
  timeout: number;

  constructor(private elementRef: ElementRef) 
    { this.element = this.elementRef.nativeElement;
      this.element.classList.add('unvisible') }

  ngOnInit() {
      setTimeout(
        () => this.checkElementPosition(), 500
      ) 
  }

  fadeInElement() {
    this.elementRef.nativeElement.classList.add('fadeIn');
    this.alreadySeen = true;
  }

  checkElementPosition() {
    console.log(this.element.getBoundingClientRect().y);
    console.log( screen.height );

    if (this.alreadySeen) { return } else {
      if (this.element.getBoundingClientRect().y < screen.height - 50)
      { this.fadeInElement() }
    }
  }

  debounceFadeIn() {
    if (this.timeout) { clearTimeout(this.timeout) };
    this.timeout = window.setTimeout(() => this.checkElementPosition(), 100)
  } 


  @HostListener("window:scroll", []) 
  setFadeIn() {
    this.debounceFadeIn()
  }

}
