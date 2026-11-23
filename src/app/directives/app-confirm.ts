import {Directive, output, signal} from '@angular/core';

@Directive({
  selector: '[appAppConfirm]',
  host: {},
})
export class AppConfirm {
  input = signal<string>();
  confirmed = output<number>();
}
