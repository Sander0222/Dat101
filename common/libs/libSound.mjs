"use strict";
/**
 * @module libSound
 * @description This module provides classes to play sound files.
 */

//--------------- Objects and Variables ----------------------------------//
const EAudioStateType = {Stopped: 1, Playing: 2, Paused: 3};

//--------------- Classes ------------------------------------------------//
class TSoundFile {
  #audio;
  #audioState;
  constructor(aSoundFile) {
    this.#audio = new Audio(aSoundFile);
    this.#audioState = EAudioStateType.Stopped;
  }

  play() {
    if (!this.#audioState === EAudioStateType.Stopped) {
      this.#audio.currentTime = 0;
    } 
    if(this.#audioState !== EAudioStateType.Playing) {
      this.#audio.play();
      this.#audioState = EAudioStateType.Playing;
    }
  }

  stop() {
    this.#audio.pause();
    this.#audio.currentTime = 0; // Reset the audio to the beginning
    this.#audioState = EAudioStateType.Stopped; // Set the audio state to stopped
  }

  pause() {
    this.#audio.pause();
    this.#audioState = EAudioStateType.Paused;
  }

  get audioState() {
    return this.#audioState;
  }
}


//--------------- Exports -----------------------------------------------//
export default {
  /**
   * @enum {EAudioStateType}
   * @description This enumeration defines the audio state types.
   */
  EAudioStateType: EAudioStateType,

  /**
   * @class TSoundFile
   * @description This class plays a sound
   * @param {string} aSoundFile - The sound file to play
   * @method play - Play the sound
   * @method stop - Stop the sound
   * @method pause - Pause the sound
   */
  TSoundFile: TSoundFile
}