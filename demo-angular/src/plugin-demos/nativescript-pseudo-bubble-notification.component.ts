import { Component, NgZone } from '@angular/core';
import { PseudoBubbleNotification, ETYPE_INIT_POSITION, OptionsNotification } from '@erichlz/nativescript-pseudo-bubble-notification';

@Component({
  selector: 'demo-nativescript-pseudo-bubble-notification',
  templateUrl: 'nativescript-pseudo-bubble-notification.component.html'
})
export class NativescriptPseudoBubbleNotificationComponent {
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {}

  baseShowBubble(position, posName) {
    PseudoBubbleNotification.showBubbleFloating({
      image: '~/plugin-demos/hause.png',
      onTap: () => {
        console.log('on Tap Bubble: ', posName);
        console.log('test pseudo-bubble-notification!');
      },
      position: position
    });
  }

  TOP_CENTER() {
    this.baseShowBubble(ETYPE_INIT_POSITION.TOP_CENTER, 'TOP_CENTER');
  }

  TOP_LEFT() {
    this.baseShowBubble(ETYPE_INIT_POSITION.TOP_LEFT, 'TOP_LEFT');
  }

  TOP_RIGTH() {
    this.baseShowBubble(ETYPE_INIT_POSITION.TOP_RIGTH, 'TOP_RIGTH');
  }

  MIDDLE_CENTER() {
    this.baseShowBubble(ETYPE_INIT_POSITION.MIDDLE_CENTER, 'MIDDLE_CENTER');
  }

  MIDDLE_LEFT() {
    this.baseShowBubble(ETYPE_INIT_POSITION.MIDDLE_LEFT, 'MIDDLE_LEFT');
  }

  MIDDLE_RIGTH() {
    this.baseShowBubble(ETYPE_INIT_POSITION.MIDDLE_RIGTH, 'MIDDLE_RIGTH');
  }

  BOTTOM_CENTER() {
    this.baseShowBubble(ETYPE_INIT_POSITION.BOTTOM_CENTER, 'BOTTOM_CENTER');
  }

  BOTTOM_LEFT() {
    this.baseShowBubble(ETYPE_INIT_POSITION.BOTTOM_LEFT, 'BOTTOM_LEFT');
  }

  BOTTOM_RIGTH() {
    this.baseShowBubble(ETYPE_INIT_POSITION.BOTTOM_RIGTH, 'BOTTOM_RIGTH');
  }

  BubbleWhitSpecificPosition(){
    PseudoBubbleNotification.showBubbleFloating({
      image: '~/plugin-demos/hause.png',
      onTap: () => {
        console.log('on Tap Bubble: Specific Position');
        console.log('test pseudo-bubble-notification!');
      },
      positionX: 100,
      positionY: 140
    });
  }

  BubbleWhitNotification(){
    const options:OptionsNotification = {
      channelId: 'Chanel01',
		  contentText: 'Body Content Notification',
		  titleNotification: 'Title',
      notifyId: 111,
      optionBubble: {
        image: '~/plugin-demos/hause.png',
        onTap: () => {
          console.log('on Tap Bubble ');
          console.log('test pseudo-bubble-notification!');
        },
      },    
    } 

    PseudoBubbleNotification.showNotification(options)
  }
}
