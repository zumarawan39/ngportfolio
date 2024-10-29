import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProofDialogComponentComponent } from 'src/app/components/proof-dialog-component/proof-dialog-component.component';
interface Experience {
  type: 'onsite' | 'remote';
  image: string;
  altText: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  proofImage:string
  
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  isWorkOpen: boolean = false;
  isVolunteerOpen: boolean = false;

  experiences: Experience[] = [
    {
      type: 'onsite',
      image: 'assets/seebiz.svg',
      altText: 'seebiz',
      title: 'Software Engineer Trainee',
      company: 'SeeBiz Pvt Ltd',
      duration: 'June 2023 - July 2024',
      location: 'Lahore, Pakistan',
      description: [
        'Engaged in a comprehensive 1-year MEAN Stack training program, working closely with seasoned professionals to understand best practices in software development.',
        'Designed and implemented dynamic web applications using Angular for front-end development and Node.js for backend services, ensuring robust and scalable solutions.',
        'Gained expertise in integrating RESTful APIs, enhancing application interoperability and user experience.',
        'Optimized performance through code reviews and refactoring, leading to improved application speed and maintainability.'
      ],
      proofImage:'assets/seebiz.jpeg'
    },
    {
      type: 'onsite',
      image: 'assets/logo-boltech.png',
      altText: 'boltech',
      title: 'Fresh Graduates BootCamp',
      company: 'BolTech Solutions',
      duration: 'July 2024 - September 2024',
      location: 'Lahore, Pakistan',
      description: [
        'Participated in a focused 2-month bootcamp aimed at mastering Angular, where hands-on learning was emphasized through practical projects.',
        'Collaborated with a team of peers and mentors on real-world projects, honing teamwork and communication skills while applying Angular features effectively.',
        'Enhanced understanding of front-end development principles, focusing on creating responsive and user-friendly web applications.',
        'Conducted user testing sessions to gather feedback, iterating on designs to better meet user needs and improve overall functionality.'
      ],
      proofImage:'assets/Boltech_Solution_Certificate.jpg'
    },
    {
      type: 'remote',
      image: 'assets/tierslimited.jpg',
      altText: 'tierslimited',
      title: 'MERN Stack Internship',
      company: 'Tiers Limited',
      duration: 'June 2024 - August 2024',
      location: 'Remote',
      description: [
        'Completed a 2-month remote internship specializing in the MERN stack, gaining practical experience in full-stack development.',
        'Worked collaboratively to build a full-stack web application, focusing on user authentication and data management using MongoDB.',
        'Enhanced skills in React.js for dynamic front-end interfaces, ensuring a seamless user experience through responsive design and effective state management.',
        'Learned to use Git for version control, participating in code reviews to improve coding standards and practices within the team.'
      ],
          proofImage:'assets/Tiers_limted_Certificate.png'
    },
    {
      type: 'remote',
      image: 'assets/codeoft.avif',
      altText: 'codesoft',
      title: 'Fresh Graduates BootCamp',
      company: 'BolTech Solutions',
      duration: 'July 2024 - September 2024',
      location: 'Remote',
      description: [
        'Engaged in a remote bootcamp focused on Angular development, emphasizing collaborative project work and real-time problem-solving.',
        'Developed proficiency in Angular and TypeScript, building single-page applications that adhere to modern web standards.',
        'Worked under industry supervision on collaborative projects, simulating real-world development environments to enhance practical skills.',
        'Learned about software development methodologies, contributing to agile processes and understanding the importance of iterative development.'
      ],
          proofImage:'assets/codesoft_certificate1.png'
    }
]


 
  constructor(private el: ElementRef, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.checkCardsInView(); // Check visibility on load
  }

  toggleWork() {
    this.isWorkOpen = !this.isWorkOpen;
  }

  toggleVolunteer() {
    this.isVolunteerOpen = !this.isVolunteerOpen;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkCardsInView(); // Trigger visibility check on scroll
  }

  checkCardsInView() {
    const cards = this.el.nativeElement.querySelectorAll('.expcard');
    const windowHeight = window.innerHeight;

    cards.forEach((card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < windowHeight - 100; // 100px offset for earlier visibility

      if (isVisible) {
        card.classList.add('visible');
      }
    });
  }

  openProofDialog(imageUrl: string, description: string) {
    this.dialog.open(ProofDialogComponentComponent, {
      data: { imageUrl, description },
      width: '100%',
    });
  }
}
