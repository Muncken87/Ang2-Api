import { Pipe, PipeTransform } from '@angular/core';

// Add searcg function to the displayed users on the main page, finds the user that === the employee.name.first

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) return employees;
    // return updated items array
    return employees.filter(function(employee){
      return employee.name.first.toLowerCase().includes(term.toLowerCase());
    })
}
}
