import { AsyncValidatorFn } from '@angular/forms'
import { UserService } from './user.service';
import { AbstractControl } from '@angular/forms/src/model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/map';

export function alreadyExistsNameValidator(service: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
        return service.getUsernameExists(control.value).map( result =>{ return result ? {'alreadyExists' : {value: result}} : null } );
    };
}