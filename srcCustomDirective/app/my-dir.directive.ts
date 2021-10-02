import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective 
{
  // Use dependency injection to access DOM element
  constructor(private ele:ElementRef) 
  {
    //ele.nativeElement.style.background='yellow'
  }

  @HostListener('') keyup()
  {

  }

  setText()
  {
     this.ele.nativeElement.$event
  }
  
  // @HostListener('mouseenter') onmouseenter()
  // {
  //   this.setcolor('blue');
  // }

  // @HostListener('mouseleave') onmouseleave()
  // {
  //   this.setcolor('yellow');
  //   this.setfont('orange');
  // }

  // setcolor(color:string)
  // {
  //   this.ele.nativeElement.style.background=color;
  // }
  // setfont(fonts:string)
  // {
  //   this.ele.nativeElement.style.color=fonts;
  // }
}
