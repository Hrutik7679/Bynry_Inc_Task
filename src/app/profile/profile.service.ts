import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    { id: 1, name: "Hrutik", photoUrl: 'nnn', description: "I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas.", address: 'Pune' },
  ];

  private idCounter: number = 1;

  addProfile(profile: Profile): void {
    profile.id = ++this.idCounter;
    this.profiles.push(profile);
  }

  editProfile(editedProfile: Profile): void {
    const index = this.profiles.findIndex(profile => profile.id === editedProfile.id);
    if (index !== -1) {
      this.profiles[index] = editedProfile;
    } else {
      console.error(`Profile with id ${editedProfile.id} not found.`);
    }
  }

  getProfiles(): Observable<Profile[]> {
    return of(this.profiles);
  }

  deleteProfile(profileId: number): void {
    this.profiles = this.profiles.filter(profile => profile.id !== profileId);
  }
}
