import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/Rx';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) {}

  getAll() {
    return this.http.get('http://localhost:8090/api/employees')
      .map((response: Response) => {
        return response.json();
    });
  }
}
