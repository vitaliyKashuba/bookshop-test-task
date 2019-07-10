import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {log} from 'util';

@Directive({
  selector: '[appCharacterInput]'
})
export class CharacterInputDirective {

  @Input() ngModel: string;

  regex = new RegExp('[a-zA-Z]');

  constructor(private elementRef: ElementRef) {
    // (elementRef.nativeElement as HTMLInputElement).value = '';
  }

  @HostListener('input')
  onChange($event) {
    const input = this.elementRef.nativeElement.value;
    let output = '';
    for (const char of input) {
      if (this.regex.test(char)) {
        output += char;
      }
    }
    this.elementRef.nativeElement.value = output;
  }
}
