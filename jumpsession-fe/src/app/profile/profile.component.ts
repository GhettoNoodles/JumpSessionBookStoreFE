import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { ProfileService } from 'src/app/Services/profile.service';
import { NavService } from 'src/app/Shared-Services/nav.service';
import { Profile } from 'src/app/Models/profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(private profileService : ProfileService, public navService: NavService,
    private router: Router
  ) {}
  assignClick(): void {
    this.navService.showNav = false;
  
    this.router.navigateByUrl('/assign-to-user');
  }
  cancelClick(): void {
    this.navService.showNav = false;
    this.router.navigateByUrl('/users');
  };
}
