import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-california-housing-price',
  imports: [NgFor],
  templateUrl: './california-housing-price.html',
  styleUrl: './california-housing-price.css',
})
export class CaliforniaHousingPrice implements AfterViewInit {

  features = [
    {
      icon: 'fas fa-brain',
      title: 'Advanced Machine Learning',
      description: 'Utilizes a Gradient Boosting model for accurate house price predictions.'
    },
    {
      icon: 'fas fa-desktop',
      title: 'Interactive GUI',
      description: 'An intuitive graphical interface built with Tkinter for ease of use.'
    },
    {
      icon: 'fas fa-database',
      title: 'Comprehensive Dataset',
      description: 'Trained on the extensive California Housing dataset for robust performance.'
    }
  ];

  courseTopics = [
    {
      title: 'Data Handling',
      items: ['Loading and exploring data with Pandas', 'Handling missing values and outliers', 'Feature engineering and selection']
    },
    {
      title: 'Model Training',
      items: ['Implementing Gradient Boosting', 'Hyperparameter tuning with GridSearchCV', 'Evaluating model performance']
    }
  ];

  ngAfterViewInit() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLElement).getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          element?.scrollIntoView({
          behavior: 'smooth'
          });
        }
      });
    });
  }

}
