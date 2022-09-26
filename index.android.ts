import { PseudoBubbleNotificationCommon, OptionsNotification, ETYPE_PRIORITY, OptionsBubble, INIT_POSITION, ETYPE_INIT_POSITION } from './common';
import { AbsoluteLayout, Application, Utils, Image, GestureEventData, TouchGestureEventData, Label, Color, GridLayout, StackLayout } from '@nativescript/core';
import { from } from 'rxjs';
import { screen } from '@nativescript/core/platform';

export { OptionsNotification, ETYPE_PRIORITY, OptionsBubble, ETYPE_INIT_POSITION };

export class PseudoBubbleNotification extends PseudoBubbleNotificationCommon {
  static showNotification(optionsNotifications: OptionsNotification, contextApps?:any) {
    const contextApp = Utils.android.getApplicationContext();
    this.createNotificationChanel(optionsNotifications.titleNotification, optionsNotifications.contentText, optionsNotifications.channelId);
    const target2 = new android.content.Intent(contextApp, Application.android.nativeApp.getClass());
    const scIntent = android.app.PendingIntent.getActivity(contextApp, 0, target2, 0);

    const builder = new androidx.core.app.NotificationCompat.Builder(contextApp, optionsNotifications.channelId)
      .setSmallIcon(android.R.drawable.sym_action_chat)
      .setColor(optionsNotifications.colorSmallIcon || 0)
      .setBadgeIconType(1)
      .setContentTitle(optionsNotifications.titleNotification)
      .setContentText(optionsNotifications.contentText)
      .setCategory(android.app.Notification.CATEGORY_MESSAGE)
      .setPriority(optionsNotifications.priority || ETYPE_PRIORITY.DEFAULT)
      .setAutoCancel(optionsNotifications.autoCancel || true)
      .setContentIntent(scIntent);
    const notificationManage = androidx.core.app.NotificationManagerCompat.from(contextApp);
    notificationManage.notify(optionsNotifications.notifyId, builder.build());
    this.showBubbleFloating(optionsNotifications.optionBubble);
  }

  private static createNotificationChanel(name: string, description: string, channelId: string) {
    const contextApp = Utils.android.getApplicationContext();
    const importance = androidx.core.app.NotificationManagerCompat.IMPORTANCE_DEFAULT;
    const notificationChanel = new android.app.NotificationChannel(channelId, name, importance);
    notificationChanel.setDescription(description);
    notificationChanel.setAllowBubbles(true);
    const notificationManager = <android.app.NotificationManager>contextApp.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
    notificationManager.createNotificationChannel(notificationChanel);
  }

  static showBubbleFloating(optionsBubble: OptionsBubble, contextApps?:any) {
    const contextApp = Utils.android.getApplicationContext();

    const stack = new AbsoluteLayout();
    if (optionsBubble.positionX !== undefined && optionsBubble.positionY !== undefined) {
      stack.translateX = optionsBubble.positionX;
      stack.translateY = optionsBubble.positionY;
    } else if (optionsBubble.position) {
      stack.translateX = INIT_POSITION[optionsBubble.position].posx;
      stack.translateY = INIT_POSITION[optionsBubble.position].posy;
    } else {
      stack.translateX = 0;
      stack.translateY = 0;
    }
    stack.width = 80;
    stack.height = 80;
    stack.borderRadius = 100;
    stack.boxShadow = '2 gray';
    stack.alignSelf = 'center';
    stack.verticalAlignment = 'middle';
    stack.horizontalAlignment = 'center';
    const label = new Image();
    label.src = optionsBubble.image;
    label.borderRadius = 100;
    stack.addChild(label);
    const closed = this.createCloseBubble(optionsBubble.colorClear);
    stack.on(
      'tap',
      (args: GestureEventData) => {
        optionsBubble.onTap();
      },
      contextApp
    );
    stack.on(
      'touch',
      (args: TouchGestureEventData) => {
        const isClosed = from(
          new Promise<boolean>((resolve, reject) => {
            resolve(!(300 >= stack.translateY));
          })
        );
        if (args.action == 'move') {
          const windowManager = Utils.android.getApplicationContext().getSystemService(android.content.Context.WINDOW_SERVICE);
          const d = windowManager.getDefaultDisplay();
          const realDisplayMetrics = new android.util.DisplayMetrics();
          d.getRealMetrics(realDisplayMetrics);
          const offset = 20 * realDisplayMetrics.density;
          stack.translateX = stack.translateX + (args.getX() - offset);
          stack.translateY = stack.translateY + (args.getY() - offset);
        }

        if (args.action == 'down') {
          Application.getRootView()._addView(closed);
        }

        if (args.action == 'up') {
          Application.getRootView()._removeView(closed);
          isClosed.subscribe((val) => {
            if (val) {
              Application.getRootView()._removeView(stack);
            }
          });
        }
      },
      contextApp
    );
    Application.getRootView()._addView(stack);
  }

  private static createCloseBubble(color: string) {
    const s = screen as any;
    const absolute = new StackLayout();
    absolute.height = 80;
    absolute.borderRadius = 100;
    absolute.alignSelf = 'center';
    absolute.verticalAlignment = 'bottom';
    absolute.horizontalAlignment = 'center';
    absolute.width = s.mainScreen.widthDIPs;
    absolute.borderTopColor = new Color(color || 'gray');
    absolute.borderTopWidth = 2;
    const label = new Label();
    label.text = 'X';
    label.borderColor = color || 'black';
    label.color = new Color(color || 'black');
    label.borderWidth = 2;
    label.fontSize = 30;
    label.textAlignment = 'center';
    label.alignSelf = 'center';
    label.marginBottom = 20;
    label.horizontalAlignment = 'center';
    label.width = 50;
    label.height = 50;
    label.borderRadius = 25;
    absolute.addChild(label);
    return absolute;
  }
}
