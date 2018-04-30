import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produt'
})
export class ProdutPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value.filter((items) => {
      if(items.productName.indexOf(args)!=-1) {
        return items;
      }
    }) : value;
  }

}
