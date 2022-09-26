import { Observable } from '@nativescript/core';

export class PseudoBubbleNotificationCommon extends Observable {}

export interface OptionsBubble {
  image: string;
  onTap: Function;
  colorClear?: string;
  position?: ETYPE_INIT_POSITION;
  positionY?: number;
  positionX?: number;
}

export interface OptionsNotification {
  channelId: string;
  contentText: string;
  titleNotification: string;
  notifyId: number;
  priority?: ETYPE_PRIORITY;
  autoCancel?: boolean;
  colorSmallIcon?: number;
  optionBubble: OptionsBubble;
}

export enum ETYPE_PRIORITY {
  DEFAULT = androidx.core.app.NotificationCompat.PRIORITY_DEFAULT,
  LOW = androidx.core.app.NotificationCompat.PRIORITY_LOW,
  MIN = androidx.core.app.NotificationCompat.PRIORITY_MIN,
  HIGH = androidx.core.app.NotificationCompat.PRIORITY_HIGH,
  MAX = androidx.core.app.NotificationCompat.PRIORITY_MAX
}

export const INIT_POSITION = [
  {
    posx: 0,
    posy: -330
  },
  {
    posx: -145,
    posy: -330
  },
  {
    posx: 145,
    posy: -330
  },
  {
    posx: 0,
    posy: 0
  },
  {
    posx: -145,
    posy: 0
  },
  {
    posx: 145,
    posy: 0
  },
  {
    posx: 0,
    posy: 330
  },
  {
    posx: -145,
    posy: 330
  },
  {
    posx: 145,
    posy: 330
  }
];

export enum ETYPE_INIT_POSITION {
  TOP_CENTER,
  TOP_LEFT,
  TOP_RIGTH,
  MIDDLE_CENTER,
  MIDDLE_LEFT,
  MIDDLE_RIGTH,
  BOTTOM_CENTER,
  BOTTOM_LEFT,
  BOTTOM_RIGTH
}
