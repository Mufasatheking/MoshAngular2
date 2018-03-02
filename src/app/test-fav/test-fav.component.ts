import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-fav',
  templateUrl: './test-fav.component.html',
  styleUrls: ['./test-fav.component.css']
})
export class TestFavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isFavourite: boolean;

    onClick(){
        this.isFavourite = !this.isFavourite;
    }
}
