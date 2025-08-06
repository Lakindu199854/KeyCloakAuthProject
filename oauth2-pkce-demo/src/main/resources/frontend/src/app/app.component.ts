import {Component, OnDestroy} from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import {AppService} from "./app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'frontend';
  text ='';
  helloSubscription:Subscription

  constructor(private oauthService: OAuthService,private appService:AppService) {
    this.configure();
    this.helloSubscription=this.appService.hello().subscribe(response=>{
      this.text=response
    })
  }

  //This will make sure that there will be no active subscriptions lying around which can cause memory leaks
  ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
