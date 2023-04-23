import { Component, OnInit } from '@angular/core';

interface Review {
  id: number;
  first_name: string;
  last_name: string;
  img: string;
  score: number;
  content: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [
    {
      id: 1,
      first_name: 'Jo**',
      last_name: 'Do**',
      img: '',
      score: 4.2,
      content: 'Great product!',
    },
    {
      id: 2,
      first_name: 'Ja**',
      last_name: 'Sm**',
      img: '',
      score: 3.5,
      content: 'Good but needs improvement',
    },
    {
      id: 3,
      first_name: 'Bo*',
      last_name: 'Jo******',
      img: '',
      score: 2.8,
      content: 'Not satisfied with the product',
    },
    {
      id: 4,
      first_name: 'Em***',
      last_name: 'Da**',
      img: '',
      score: 4.9,
      content: 'Absolutely amazing!',
    },
    {
      id: 5,
      first_name: 'Ma**',
      last_name: 'Wi****',
      img: '',
      score: 3.7,
      content: 'Decent product for the price',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.reviews = reviewsData;
  }

  getStars(score: number): number[] {
    const fullStars = Math.floor(score);
    const halfStars = Math.round(score - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    return [
      ...Array(fullStars).fill(1),
      ...Array(halfStars).fill(0.5),
      ...Array(emptyStars).fill(0),
    ];
  }
}
