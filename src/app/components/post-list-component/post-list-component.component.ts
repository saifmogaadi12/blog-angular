import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  
  @Input() posts : Array<any>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
