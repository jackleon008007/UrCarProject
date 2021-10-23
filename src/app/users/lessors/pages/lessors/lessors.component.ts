import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

const UCAR_ICON_A = `
  <svg xmlns="http://www.w3.org/2000/svg" width="702" height="582" viewBox="0 0 702 582" fill="none">
<ellipse rx="214.593" ry="271.225" transform="matrix(0.999887 0.0149978 -0.113811 0.993502 484.563 312.319)" fill="#0082FF"/>
<path d="M0.185181 0L426.867 39.6385L361.623 76.7996L182.492 61.0829L42.9016 49.6003L0.185181 0Z" fill="black"/>
<path d="M60.7041 71.8446L343.234 94.8062L306.727 137.89L247.516 133.019L102.026 121.051L60.7041 71.8446Z" fill="black"/>
<path d="M122.683 146.167L292.385 158.554L269.75 203.147L212.495 199.431L162.335 195.515L122.683 146.167Z" fill="black"/>
<path d="M181.269 220.489L261.761 227.921L249.777 269.832L232.468 269.832L220.858 269.832L181.269 220.489Z" fill="black"/>
<path d="M567.533 313.627C558.984 388.298 514.194 448.266 467.491 447.568C420.788 446.871 389.857 385.772 398.406 311.1C406.955 236.429 451.745 176.461 498.449 177.159C545.152 177.857 576.082 238.956 567.533 313.627Z" fill="white"/>
</svg>
`;
@Component({
  selector: 'app-arrendadores',
  templateUrl: './lessors.component.html',
  styleUrls: ['./lessors.component.css']
})
export class LessorsComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,) {
  iconRegistry.addSvgIconLiteral('Urcarlogo', sanitizer.bypassSecurityTrustHtml(UCAR_ICON_A));
}
ngOnInit(): void {
}


}
