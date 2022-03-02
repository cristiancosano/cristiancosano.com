import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingService } from '@core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loading: boolean = false;
  title = 'cristiancosano';

  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, private loadingService: LoadingService, private db: AngularFireDatabase){
    iconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
    this.loadingService.getStatus$().subscribe(status => this.loading = status);
    this.db.list('home').valueChanges().subscribe(data => console.log('olipi',data))
  }
}
