import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: Profile[];
  loading: boolean = true;
  error: string | null = null;

  constructor(private profileService: ProfileService) {
    this.profiles = [];
   }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(
      (profiles: Profile[]) => {
        this.profiles = profiles;
        this.loading = false;
      },
      (error: any) => {
        this.error = "Error fetching profiles. Please try again later.";
        this.loading = false;
      }
    );
  }
}
