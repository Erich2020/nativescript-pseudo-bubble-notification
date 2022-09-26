# @erichlz/nativescript-pseudo-bubble-notification

```javascript
ns plugin add @erichlz/nativescript-pseudo-bubble-notification
```

## Usage

this plugin is using only with angular

import { PseudoBubbleNotification, ETYPE_INIT_POSITION, OptionsNotification } from '@erichlz/nativescript-pseudo-bubble-notification';


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

  the priorities you can use are as follows:

  * DEFAULT
  * LOW 
  * MIN 
  * HIGH 
  * MAX 
Which are in the enum ETYPE_PRIORITY

The Position initial you can use are as follows
  TOP_CENTER,
  TOP_LEFT,
  TOP_RIGTH,
  MIDDLE_CENTER,
  MIDDLE_LEFT,
  MIDDLE_RIGTH,
  BOTTOM_CENTER,
  BOTTOM_LEFT,
  BOTTOM_RIGTH
Which are in the enum ETYPE_INIT_POSITION

interface OptionsBubble {
  image: string;
  onTap: Function;
  colorClear?: string;
  position?: ETYPE_INIT_POSITION;
  positionY?: number;
  positionX?: number;
}

interface OptionsNotification {
  channelId: string;
  contentText: string;
  titleNotification: string;
  notifyId: number;
  priority?: ETYPE_PRIORITY;
  autoCancel?: boolean;
  colorSmallIcon?: number;
  optionBubble: OptionsBubble;
}


## License

Apache License Version 2.0
