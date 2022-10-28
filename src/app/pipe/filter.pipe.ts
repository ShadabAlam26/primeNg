import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items,searchText)
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    // searchText = searchText.toLocaleLowerCase();

    return items.filter(x => {
      return x.name.toLocaleLowerCase().includes(searchText);
    })
  }

}
