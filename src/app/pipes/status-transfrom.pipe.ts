import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTransfrom'
})
export class StatusTransfromPipe implements PipeTransform {

  constructor(
    private titlecasePipe: TitleCasePipe,
    ) {
    
  }
  transform(value: string, ...args: unknown[]): string {
    return this.titlecasePipe.transform((value ? value.replace(/_/g, ' ') : ''));
  }

}
