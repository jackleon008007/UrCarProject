import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {  Input } from "@angular/core";

const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="702" height="582" viewBox="0 0 702 582" fill="none">
<ellipse rx="214.593" ry="271.225" transform="matrix(0.999887 0.0149978 -0.113811 0.993502 484.563 312.319)" fill="#0082FF"/>
<path d="M0.185181 0L426.867 39.6385L361.623 76.7996L182.492 61.0829L42.9016 49.6003L0.185181 0Z" fill="black"/>
<path d="M60.7041 71.8446L343.234 94.8062L306.727 137.89L247.516 133.019L102.026 121.051L60.7041 71.8446Z" fill="black"/>
<path d="M122.683 146.167L292.385 158.554L269.75 203.147L212.495 199.431L162.335 195.515L122.683 146.167Z" fill="black"/>
<path d="M181.269 220.489L261.761 227.921L249.777 269.832L232.468 269.832L220.858 269.832L181.269 220.489Z" fill="black"/>
<path d="M567.533 313.627C558.984 388.298 514.194 448.266 467.491 447.568C420.788 446.871 389.857 385.772 398.406 311.1C406.955 236.429 451.745 176.461 498.449 177.159C545.152 177.857 576.082 238.956 567.533 313.627Z" fill="white"/>
</svg>
`;
const THUMBUP_ICON2 = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
<g><path d="M0,0h24v24H0V0z" fill="none"/>
<path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
</g>
</svg>

`;


@Component({
  selector: 'app-arrendatarios',
  templateUrl: './arrendatarios.component.html',
  styleUrls: ['./arrendatarios.component.css']
})
export class ArrendatariosComponent implements OnInit {


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    iconRegistry.addSvgIconLiteral('thumbs-up1', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON2));
  }

  ngOnInit(): void {
  }


}

