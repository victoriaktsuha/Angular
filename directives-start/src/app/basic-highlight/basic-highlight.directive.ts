import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appBasicHighlight]',
  // The [ ] square brackets here means that this directive will be recognized wherever we add 'appBasicHighlight' without the brackets to an element
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  //Inside the ( ), we list arguments that we want to get whenever an instance of this class is created by the Angular. So when Angular try to 'create' the argument that we're asking inside the () to return to us, this call injection

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }
}
