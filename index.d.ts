import { PseudoBubbleNotificationCommon, OptionsNotification, ETYPE_PRIORITY, OptionsBubble, ETYPE_INIT_POSITION } from './common';

export { OptionsNotification, ETYPE_PRIORITY, OptionsBubble, ETYPE_INIT_POSITION };

export declare class PseudoBubbleNotification extends PseudoBubbleNotificationCommon {
  static showNotification(optionsNotifications: OptionsNotification, contextApp?:any);

  static showBubbleFloating(optionsBubble: OptionsBubble, contextApp?:any);
}
