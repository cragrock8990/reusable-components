import { Directive, HostListener, ElementRef, Input, Optional, Self, Renderer2, AfterViewInit } from '@angular/core';
import { FormControlDirective, FormGroupDirective, NgControl } from '@angular/forms';
import { KeyMaskRegexType, NavigationKeys } from './key-mask-regex';

@Directive({
  selector: '[KeyMaskType]',
})
export class KeyMaskTypeDirective {
  @Input() KeyMaskType: RegExp;
  inputElementRef: HTMLInputElement;

  constructor(private el: ElementRef, public ngControl: NgControl, private renderer: Renderer2) {}

  @HostListener('keydown', ['$event'])
  onKeyDown($event) {
    this.handleKeyDown($event);
  }

  @HostListener('input', ['$event'])
  onInput($event) {
    this.handleInputEvent($event);
  }

  public handleKeyDown(e: KeyboardEvent) {
    if (e.key && !this.areNavigationKeys(e) && e.key.match(this.KeyMaskType)) {
      e.preventDefault();
    }
  }

  public handleInputEvent(e: InputEvent) {
    const inputEventTarget = e.target as any;
    const value: string = (inputEventTarget as any).value;
    const replacedValue = value.replace(this.KeyMaskType, '');

    if (value !== replacedValue) {
      this.ngControl?.control?.patchValue(replacedValue);
    }
  }

  private areNavigationKeys(e: KeyboardEvent) {
    return e.altKey || e.ctrlKey || e.metaKey || NavigationKeys.includes(e.code);
  }
}
