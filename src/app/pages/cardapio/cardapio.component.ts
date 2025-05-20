import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cardapio',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss',
})
export class CardapioComponent {
  public headerButtons = [
    {
      name: 'Offers',
      link: '/offers',
    },
    {
      name: 'Burgers',
      link: '/burgers',
    },
    {
      name: 'Fries',
      link: '/fries',
    },
    {
      name: 'Snacks Salads',
      link: '/snacks-salads',
    },
    {
      name: 'Cold Drinks',
      link: '/cold-drinks',
    },
    {
      name: 'Happy Meal',
      link: '/happy-meal',
    },
    {
      name: 'Desserts',
      link: '/desserts',
    },
    {
      name: 'Hot Drinks',
      link: '/hot-drinks',
    },
    {
      name: 'Sauces',
      link: '/sauces',
    },
    {
      name: 'Orbit',
      link: '/orbit',
    },
  ];
}
