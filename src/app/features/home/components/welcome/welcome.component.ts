import { Component, OnInit } from '@angular/core';
import { Home } from '@features/home/interfaces/home';
import { HomeService } from '@features/home/services/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public home: Observable<Home | null>;
  public data: (Home["welcome"] | undefined) = undefined;

  constructor(private homeService: HomeService) {
    this.home = homeService.getHome();

    this.home.subscribe(data => this.data = data?.welcome)
  }

  ngOnInit(): void {
  }

}
