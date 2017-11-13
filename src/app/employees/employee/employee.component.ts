import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../employee.service';
import {Employee} from '../../employee.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const idParam = Number(params['id']);
      this.employeeService.getOne(idParam).subscribe(value => this.selectedEmployee = value);
    });
  }
}
