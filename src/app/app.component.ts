import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Employee} from './employee.model';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAll()
      .subscribe(value => {this.employees = value});
  }
}
