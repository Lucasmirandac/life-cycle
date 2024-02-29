import { Component } from '@angular/core';
import { ChildrenComponent } from "../children/children.component";

@Component({
  selector: 'app-father',
  standalone: true,
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss',
  imports: [ChildrenComponent]
})
export class FatherComponent {

  view = false;

  ngOnInit() {
    console.log("ngOnInit")
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

}
