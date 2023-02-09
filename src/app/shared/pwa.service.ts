import { Injectable } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  constructor(private updates: SwUpdate) { 
    if(!this.updates.isEnabled) {
      return;
    }
    this.handleUpdates();
  }

  handleUpdates(): void {
    this.updates.versionUpdates.subscribe((event: VersionEvent) => {
      if(event.type === 'VERSION_READY' && confirm(
        `New version ${event.latestVersion.hash} would you like to load the new version OMG peut-être ?`
      )) {
        window.location.reload();
      }
    })
  }
}
