import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      transition(':increment', [
        style({ position: 'relative', left: 0 }),
        animate(
          '500ms ease-in-out',
          style({ position: 'relative', left: '-100%' })
        ),
      ]),
      transition(':decrement', [
        style({ position: 'relative', left: 0 }),
        animate(
          '500ms ease-in-out',
          style({ position: 'relative', left: '100%' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  newsList = [
    {
      id: 1,
      topic: 'Dental implants solve tooth loss problems',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/328826896_971407020562041_1061909101623740239_n.jpg',
      sub: 'Dental implants are screw-like titanium or ceramic implants placed into the jaw. by using dental implants as the basis for fixing crowns and bridges Dental implants are screw-like titanium or ceramic implants placed into the jaw. by using dental implants as the basis for fixing crowns and bridges',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 2,
      topic: 'The importance of regular dental check-ups',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/333378091_702341454972631_2235135710218911810_n.jpg',
      sub: 'Regular dental check-ups can help detect dental problems early and prevent more serious issues from developing. During a check-up, a dentist will examine your teeth and gums, check for signs of cavities, gum disease, and oral cancer.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 3,
      topic: 'The benefits of teeth whitening',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/333850256_1376115003210566_6169689804045578564_n.jpg',
      sub: 'Teeth whitening is a cosmetic dental procedure that can improve the appearance of your smile. It involves using a bleaching agent to remove stains and discoloration from the teeth, leaving them whiter and brighter.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 4,
      topic: 'The importance of good oral hygiene',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/335158455_537778948344332_5717943067385041327_n.jpg',
      sub: 'Good oral hygiene is important for maintaining healthy teeth and gums. This includes brushing twice a day, flossing daily, and using mouthwash to kill bacteria and freshen breath.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 5,
      topic: 'The different types of dental fillings',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/335158455_537778948344332_5717943067385041327_n.jpg',
      sub: 'Dental fillings are used to repair cavities caused by tooth decay. There are several different types of dental fillings, including amalgam, composite, ceramic, and gold fillings.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 6,
      topic: 'The benefits of fluoride for dental health',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/333850256_1376115003210566_6169689804045578564_n.jpg',
      sub: 'Fluoride is a mineral that can help prevent tooth decay by strengthening tooth enamel. It is found in toothpaste, mouthwash, and in some public water supplies.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 7,
      topic: 'Common dental problems and how to prevent them',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/333850256_1376115003210566_6169689804045578564_n.jpg',
      sub: 'Common dental problems include cavities, gum disease, and tooth sensitivity. These problems can be prevented by practicing good oral hygiene, eating a healthy diet, and visiting the dentist regularly.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 8,
      topic: 'Common dental problems and how to prevent them',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/333850256_1376115003210566_6169689804045578564_n.jpg',
      sub: 'Common dental problems include cavities, gum disease, and tooth sensitivity. These problems can be prevented by practicing good oral hygiene, eating a healthy diet, and visiting the dentist regularly.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 9,
      topic: 'The different types of dental fillings',
      img: 'https://project-47.sgp1.digitaloceanspaces.com/blog/335158455_537778948344332_5717943067385041327_n.jpg',
      sub: 'Dental fillings are used to repair cavities caused by tooth decay. There are several different types of dental fillings, including amalgam, composite, ceramic, and gold fillings.',
      create_at: '2023-04-17 12:00:00',
    },
  ]; // array to store news data
  startIndex = 0; // starting index for news display

  ngOnInit(): void {
    // load news data here
    // this.loadNewsData();

    // set interval to change news after every 10 seconds
    setInterval(() => {
      this.startIndex += 3; // increment start index by 3 to show next 3 news
      if (this.startIndex >= this.newsList.length) {
        this.startIndex = 0; // if all news have been displayed, start from the first news again
      }
    }, 4000);
  }

  // loadNewsData(): void {
  //   // load news data from server or API and store in newsList array
  //   this.newsList = [
  //     // news data here
  //   ];
  // }
}
