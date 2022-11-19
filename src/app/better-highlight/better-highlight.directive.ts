import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  // attribute binding
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // host binding ref element property
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngOnInit(): void {
    // render to something other than DOM
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue',
    // RendererStyleFlags2.Important,
    // );
    this.backgroundColor = this.defaultColor;
  }

  // listen to events mouse or user events
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue',
    //   RendererStyleFlags2.Important
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent',
    //   RendererStyleFlags2.Important
    // );
    this.backgroundColor = this.defaultColor;
  }
}
