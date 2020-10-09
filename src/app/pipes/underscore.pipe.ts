import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscore'
})
@Injectable({
 providedIn :"root"
})

export class UnderscorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let result = "";
    for(let i =1; i<=value; i++){
      result = result + " _ "; 
    }
    console.log(result);
    
    result = value +" " +result
    return result;
  }

}
