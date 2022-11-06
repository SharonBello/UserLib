import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-svg-icon',
  templateUrl: './app-svg-icon.component.html',
  styleUrls: ['./app-svg-icon.component.scss']
})
export class SvgIconComponent {
  title = 'userly-logo';

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'userly-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/userly-logo.svg')
    )
  }
}
