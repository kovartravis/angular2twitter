import { ValidatorFn } from '@angular/forms'
import { UserService } from './user.service';
import { AbstractControl } from '@angular/forms/src/model';

export function alreadyExistsNameValidator(service: UserService): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const alreadyExists = service.getUsernameExists(control.value);
        return alreadyExists ? {'alreadyExists': {value: control.value}} : null;
    };
}