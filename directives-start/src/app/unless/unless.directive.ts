import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //will display something
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //will display nothing
      this.vcRef.clear();
    }
  }
  //'set' tranform the 'unless' property into a set of a property, which is a method in this case and will be triggered whenever the property changes outside this directive
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  // this directive will be set on a ng-template component, because that's tranform by Angular if we use a *. We need to get access to this template and also to get to the place in the document where we want to render it, and both can be injected ('create' by Angular as soon as it is build): TemplateRef will be refering to the template ('what'), like the elementRef, and the ViewContainerRef will be refering to the place where it should be rendered ('where'); Both need to be imported
}
