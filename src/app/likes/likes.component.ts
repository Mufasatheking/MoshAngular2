import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() isLiked: boolean;
  @Input() likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(!this.isLiked){
      this.likesCount++;
    }
    else{
      this.likesCount--;
    }
    this.isLiked = !this.isLiked;
  }
}
