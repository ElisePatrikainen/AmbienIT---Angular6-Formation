import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective implements OnInit {

  constructor( private renderer : Renderer2, private elementRef: ElementRef ) { }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'preTest')
  }

  timeo: any;
  seen: boolean = false;

  // @Inputs parameters 

  @HostListener("window:scroll", [])
  test1() {
    if (!this.seen) {
    if(this.timeo) {
      clearTimeout(this.timeo);
    }
    this.timeo = setTimeout(
      () => {
          let elementPositionY = this.elementRef.nativeElement.getBoundingClientRect().y
          console.log(elementPositionY)
          if (elementPositionY < screen.height - 50) {
            this.renderer.addClass(this.elementRef.nativeElement, 'test')
          }
      }, 100
    )
  }
  }

  @HostListener('mouseover')
  applyHover() {
    // Attention mauvaise pratique
    let blah = {
      foo: 'bar',
      foo2: 'bar2'
    };
    let blah2 = {
      color: 'red',
      transition: 'all 1s ease-in'
    }
    
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'color', 'red'
    )
  }

}
