import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  @Input() data: boolean = false;

  previousInit: number = 1;

  ngOnInit() {
    console.log("Ao iniciar: ", this.previousInit)
  }

  ngOnChange(change: SimpleChange) {
    console.log("ngOnchange");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }

  ngAfterViewChecked() {
    console.log("ngAfterContentInit")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    console.log("Depois de iniciar: ", this.previousInit + 1)
  }

  ngOnDestroy() {
    "filho disse adeus"
  }
}

