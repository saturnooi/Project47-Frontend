import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blogPosts = [
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
      img: '',
      sub: 'Regular dental check-ups can help detect dental problems early and prevent more serious issues from developing. During a check-up, a dentist will examine your teeth and gums, check for signs of cavities, gum disease, and oral cancer.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 3,
      topic: 'The benefits of teeth whitening',
      img: '',
      sub: 'Teeth whitening is a cosmetic dental procedure that can improve the appearance of your smile. It involves using a bleaching agent to remove stains and discoloration from the teeth, leaving them whiter and brighter.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 4,
      topic: 'The importance of good oral hygiene',
      img: '',
      sub: 'Good oral hygiene is important for maintaining healthy teeth and gums. This includes brushing twice a day, flossing daily, and using mouthwash to kill bacteria and freshen breath.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 5,
      topic: 'The different types of dental fillings',
      img: '',
      sub: 'Dental fillings are used to repair cavities caused by tooth decay. There are several different types of dental fillings, including amalgam, composite, ceramic, and gold fillings.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 6,
      topic: 'The benefits of fluoride for dental health',
      img: '',
      sub: 'Fluoride is a mineral that can help prevent tooth decay by strengthening tooth enamel. It is found in toothpaste, mouthwash, and in some public water supplies.',
      create_at: '2023-04-17 12:00:00',
    },
    {
      id: 7,
      topic: 'Common dental problems and how to prevent them',
      img: '',
      sub: 'Common dental problems include cavities, gum disease, and tooth sensitivity. These problems can be prevented by practicing good oral hygiene, eating a healthy diet, and visiting the dentist regularly.',
      create_at: '2023-04-17 12:00:00',
    },
  ];
}
