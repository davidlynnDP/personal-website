import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent {

  private audio: HTMLAudioElement;
  private audioPlaying: boolean = false;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/audio/still-dre.mp3';
  }

  toggleAudio() {

    if ( this.audioPlaying ) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.audioPlaying = !this.audioPlaying;
  }

}
