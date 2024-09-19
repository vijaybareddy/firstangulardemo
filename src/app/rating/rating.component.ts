import { Component, Input } from '@angular/core';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
userDetails: any;
register(_t4: any) {
throw new Error('Method not implemented.');
}
  comments = '';

  @Input()
  rating:Rating=new Rating(4,'')

  submitFeedback():void{

  }

}
