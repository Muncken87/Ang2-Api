import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) return items;
    // return updated items array
    return items.filter(function(item){
      return item.name.first.toLowerCase().includes(term.toLowerCase());
    })
}
}
