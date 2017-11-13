import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log('test')
    this.employeeService.getAll()
      .subscribe(value => {this.employees = value});
  }

  getOne(index: number) {
    console.log('index: ' + index);
    this.employeeService.getOne(index)
      .subscribe(value => {this.selectedEmployee = value});
  }
}
