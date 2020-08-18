import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color: string;
  @Input() secondColor: string;
//  @Input() appNgColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('MOUSE ENTER');
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('MOUSE LEAVE');
    this.changeColor(this.secondColor);
  }

  constructor(private el: ElementRef) {
    //console.log('ELEMENT REF: ', el)

    //this.changeColor('yellow');
  }

  changeColor(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}