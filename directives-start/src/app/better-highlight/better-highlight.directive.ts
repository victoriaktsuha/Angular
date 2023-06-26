import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  // camelCase is important here because in the DOM, these properties doesn't have dashes -

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'lightblue'
    // );
  }

  // React to an event on the element
  @HostListener('mouseenter', ['$event']) onmouseover(evenData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'lightblue'
    // );
    this.backgroundColor = this.highlightColor;
    // This property of @HostBinding inside here, the @HostListener, can replace the 'renderer'
  }

  @HostListener('mouseleave', ['$event']) onmouseleave(evenData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}
