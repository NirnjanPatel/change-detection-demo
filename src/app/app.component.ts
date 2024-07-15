import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

export interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public person: Person = {
    name: 'test name',
    age: 20
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.userService.setUserName(this.person.name);
    // this.router.navigate(['child']);
  }

  reassign() {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }
}
