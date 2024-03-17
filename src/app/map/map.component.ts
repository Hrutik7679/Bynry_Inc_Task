import { Component, Input } from '@angular/core';
import { MapService } from './map.service';
import { Profile } from '../profile/profile.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() profile: Profile={
    id:1,
    name:'Hrutik',
    photoUrl:'C:\Users\Admin\my-angular-app\src\assets\manImages.jpeg',
    description:'I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas.',
    address:'pune'

  };

  constructor(private mapService: MapService) {
    
   }

  showOnMap(profile: Profile): void {
    this.mapService.showLocation(profile.address);
  }
}