import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  review_API = 'http://localhost:3000/reviews'

  constructor( private reviews:HttpClient) { }

  getAllReviews(){
    return this.reviews.get(this.review_API);
  }
}
