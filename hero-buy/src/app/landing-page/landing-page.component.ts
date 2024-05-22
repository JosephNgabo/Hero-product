import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  products = [
    {
      name: 'Product 1',
      description: 'This is a great product.',
      price: 29.99,
      image: 'assets/Logo.png'
    },
    {
      name: 'Product 2',
      description: 'This is another great product.',
      price: 49.99,
      image: 'assets/Logo.png'
    },
    {
      name: 'Product 3',
      description: 'This product is also great.',
      price: 19.99,
      image: 'assets/Logo.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
