import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile/profile.service';
import { Profile } from './profile/profile.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  profiles: Profile[];

  constructor(private profileService: ProfileService) {
    this.profiles = [];
  }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(
      (profiles: Profile[]) => {
        this.profiles = profiles;
      },
      (error: any) => {
        console.error('Error fetching profiles:', error);
      }
    );
  }

  addProfile(profile: Profile): void {
    this.profileService.addProfile(profile);
    this.updateProfiles();
  }

  editProfile(profile: Profile): void {
    this.profileService.editProfile(profile);
    this.updateProfiles();
  }

  deleteProfile(profileId: number): void {
    this.profileService.deleteProfile(profileId);
    this.updateProfiles();
  }

  private updateProfiles(): void {
    this.profileService.getProfiles().subscribe(
      (profiles: Profile[]) => {
        this.profiles = profiles;
      },
      (error: any) => {
        console.error('Error fetching profiles:', error);
      }
    );
  }
}
