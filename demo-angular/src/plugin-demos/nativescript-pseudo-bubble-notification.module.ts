import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPseudoBubbleNotificationComponent } from './nativescript-pseudo-bubble-notification.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPseudoBubbleNotificationComponent }])],
  declarations: [NativescriptPseudoBubbleNotificationComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptPseudoBubbleNotificationModule {}
