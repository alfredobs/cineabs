import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy  {

  data = 10;
  employees: any[] = [
    { id: '100', name: 'alfredo', employeeId : '100' },
    { id: '200', name: 'alfredo', employeeId : '100' },
    { id: '300', name: 'alfredo', employeeId : '100' },
    { id: '400', name: 'alfredo', employeeId : '200' },
    {

    }
  ]
  constructor() {
    console.log(`new - data is ${this.data}`);
  }
  ngOnChanges(SimpleChanges: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.data} ${SimpleChanges}`);
  }

  getEmployees(employees, id){
    let result = []
    let eId: any;
    employees.forEach(employee => {
      console.log(eId);
        if(id == employee.id){
          result.push(employee.employeeId)
          eId = employee.id;
          console.log(id);
          console.log(employee.id);
         }
         if(eId == employee.id){
          result.push(employee.employeeId)
        }


        return console.log(result);


    })



  }

  ngOnInit(): void {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    this.getEmployees(this.employees, 400);
  }

  ngDoCheck() {
    // console.log(`'ngDoCheck'${this.data}`);

  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    // console.log('ngOnDestroy');
  }
  addNumber(): void {
    this.data += 10;
  }
  deleteNumber(): void {
    this.data -= 10;
  }




}
