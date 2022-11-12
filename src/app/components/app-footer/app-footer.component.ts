import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fab, faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
    library.addIcons(faFacebook,faTwitter,faInstagram,faLinkedin,faYoutube, faGithub, faWhatsapp);
  }

  ngOnInit(): void {
  }

}
