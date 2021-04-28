import { Injectable } from '@angular/core';
import { Persons } from '../models/persons.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: Persons[] = [{
    id: 1,
    name: "",
    surname: "",
    patronymic: "",
    phone: 0,
    email: "",
    birthday: "",
    department: 0
  },
  {
    id: 2,
    name: "",
    surname: "",
    patronymic: "",
    phone: 0,
    email: "",
    birthday: "",
    department: 1
  },
  {
    id: 3,
    name: "",
    surname: "",
    patronymic: "",
    phone: 0,
    email: "",
    birthday: "",
    department: 2
  }
  ];
  constructor(private http: HttpClient) {
  }
}
