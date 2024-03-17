import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { Profile } from '../profile/profile.model';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  profiles: Profile[];
  searchText: string = " ";

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

  search(): void {
    if (this.searchText) {
      this.profiles = this.profiles.filter(profile =>
        profile.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
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
}
