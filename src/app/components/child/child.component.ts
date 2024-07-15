// import { ChangeDetectionStrategy, Component, Input, ChangeDetectorRef } from '@angular/core';
// import { Person } from '../../app.component';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   changeDetection: ChangeDetectionStrategy.OnPush // adding OnPush to limit scope of change detection
// })
// export class ChildComponent {
//   @Input() person!: Person; // Input property to receive data from parent component

//   constructor(
//     private cdr: ChangeDetectorRef,
//     private userService: UserService // injecting user service for setting userName
//   ) { } // Inject ChangeDetectorRef to manually control change detection

//   ngOnChanges() {
//     // If using OnPush strategy, we need to mark the component for check manually
//     // this.cdr.markForCheck();

//     // If we are not using ChangeDetectionStrategy.OnPush, we can manually trigger change detection when inputs change
//     this.cdr.detectChanges(); // Manually trigger change detection for the component
//   }

//   // ----------------------------------------------------------------
//   // hierarchical Injection demo (injecting class and setting the userName)

//   userName !: string;

//   ngOnInit(): void {
//     this.userName = this.userService.getUserName();
//     this.getUserName();
//   }

//   getUserName() {
//     this.userName = this.userService.getUserName();
//   }

// }






import { ChangeDetectionStrategy, Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { Person } from '../../app.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // Adding OnPush to limit scope of change detection
})
export class ChildComponent implements OnInit {
  @Input() person!: Person; // Input property to receive data from parent component
  public userName: string = "initial name"; // Property to hold the username

  constructor(
    private cdr: ChangeDetectorRef,
    private userService: UserService // Injecting UserService for setting and getting userName
  ) { }

  ngOnInit(): void {
    this.userName = this.userService.getUserName(); // Get initial username
  }

  ngOnChanges() {
    // If using OnPush strategy, we need to manually trigger change detection for the component
    this.cdr.detectChanges(); // Manually trigger change detection for the component
  }

  // Method to get the username from the service
  getUserName() {
    this.userName = this.userService.getUserName();
    this.cdr.detectChanges(); // Manually trigger change detection to update the view
  }
}
