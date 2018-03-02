import { Component } from '@angular/core';

@Component({
    selector: 'favourite',
    templateUrl: './favourite.component.html'
})

export class FavouriteComponent{
    isFavourite: boolean;

    onClick(){
        this.isFavourite = !this.isFavourite;
    }
}