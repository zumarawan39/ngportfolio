import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    "Software Engineer",
    "MEAN Stack Developer",
    "MERN Stack Developer",
    "Front End Developer",
    "Back End Developer",
  ];

  currentServiceIndex = 0;

  constructor(private elementRef: ElementRef) {
    setInterval(() => {
      this.currentServiceIndex = (this.currentServiceIndex + 1) % this.services.length;
    }, 2000); 

  }

  onButtonClick() {
    // const pdfUrl = "https://docs.google.com/document/d/1NYelQ-RggxX_Hm1TOOSGGRDe3uMVWckxi5lUwA_qFCY/";
    const pdfUrl = "https://flowcv.com/resume/m5oj0uuuot";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assests/M.Zumar Awan(Associate Software Engineer).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  @ViewChild('card') cardElement!: ElementRef;

  // Listen for scroll event on the window
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const card = this.cardElement.nativeElement;
    const cardPosition = card.getBoundingClientRect().top; // Get the position of the card
    const windowHeight = window.innerHeight;

    // Check if the card is in the viewport
    if (cardPosition < windowHeight && cardPosition > 0) {
      card.classList.add('slide-in'); // Add the animation class
    }
  }
}
