import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})

export class EmailValidatorDirective implements Validator {
  @Input('appEmailValidator') emailValidator!: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) return null;
    const emailRegex = new RegExp(
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    );
    const isValid = emailRegex.test(control.value);
    return isValid ? null : { email: true };
  }
}
