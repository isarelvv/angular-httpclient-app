import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
// User interface
export class User {
  name: any;
  email: any;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  UserProfile!: User;
  
  constructor(
    public authService: AuthService,
    public authState: AuthStateService,
    public router: Router,
    public token: TokenService
    ) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
  }
  ngOnInit() {}

  signOut(){
    this.authState.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  };
}