import { AfterViewInit, Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { scrollToElementId } from '../../util';

@Component({
  selector: 'looky-layout-header',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.scss']
})
export class MainNavComponent implements OnInit, AfterViewInit {
  @ViewChild('mainNavBarCollapse') mainNavBarCollapse;

  currentPath: string;
  collapsed: boolean;
  collapsing: boolean;
  menuHeight: number;
  initialized: boolean;

  private route: ActivatedRoute;
  private router: Router;
  private platformId: Object;

  constructor(route: ActivatedRoute, router: Router, @Inject(PLATFORM_ID) platformId: Object) {
    this.route = route;
    this.router = router;
    this.currentPath = '';
    this.collapsed = true;
    this.collapsing = false;
    this.menuHeight = 0;
    this.initialized = false;
    this.platformId = platformId;
  }

  ngOnInit() {
    this.router.events.subscribe((data: any) => {
      this.currentPath = data.url;
    });
  }

  ngAfterViewInit() {
    // get menu height
    setTimeout(() => {
      this.menuHeight = this.mainNavBarCollapse.nativeElement.clientHeight;
      this.initialized = true;
    }, 0);
  }

  goToPageAndScrollToSection(section: string, path: string) {
    if (this.currentPath === path && isPlatformBrowser(this.platformId)) {
      scrollToElementId(section);
    } else {
      if (isPlatformBrowser(this.platformId)) {
        this.router.navigate([path]).then(() => {
          scrollToElementId(section);
        });
      }
    }

    if (!this.collapsed) {
      this.toggleMainMenu();
    }
  }

  toggleMainMenu() {
    this.collapsing = true;

    setTimeout(() => {
      if (this.collapsed) {
        this.mainNavBarCollapse.nativeElement.style.height = this.menuHeight + 'px';
      } else {
        this.mainNavBarCollapse.nativeElement.style.height = '0px';
      }
    }, 0);

    // TODO: Animation not playing on close
    setTimeout(() => {
      this.collapsing = false;
      this.collapsed = !this.collapsed;

      this.mainNavBarCollapse.nativeElement.removeAttribute('style');
    }, 350);
  }
}
