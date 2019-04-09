import {Component} from '@angular/core';
import {Router} from '@angular/router';

const firstArticleIndex = 0;

@Component({
  selector: 'dqq-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.scss']
})


export class PageIndicatorComponent {

  activatedUrlIndex: number;
  articleLength: number;
  activatedUrl: string;
  config: any;

  constructor(private router: Router) {}

  findIndexOfActivatedUrl() {
    // TODO: this.config here is a hack, need to be changed.
    // Remove 3 Routes from the whole route: login, main-page-area, page-not-found.
    this.config = this.router.config.slice(0, this.router.config.length - 4);
    this.activatedUrl = this.router.url.substring(1);
    this.articleLength = this.config.length;
    this.activatedUrlIndex = this.config.findIndex(ele => this.activatedUrl === ele.path);
    return this.activatedUrlIndex !== -1;
  }

  goToNextArticle() {
    if (this.activatedUrlIndex === this.articleLength - 1) { // last article of the whole app
      this.router.navigate([this.config[firstArticleIndex].path]);
    } else {
      this.router.navigate([this.config[this.activatedUrlIndex + 1].path]);
    }
  }


  goToPreArticle() {
    if (this.activatedUrlIndex === firstArticleIndex) { // first article of the whole app
      this.router.navigate([this.config[this.articleLength - 1].path]);
    } else {
      this.router.navigate([this.config[this.activatedUrlIndex - 1].path]);
    }
  }
}
