import { ChangeDetectionStrategy, Component, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  template: '<app-cart />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ CartComponent ]
})
export class App {
}

bootstrapApplication(App, {
  providers: [ provideZonelessChangeDetection() ]
});
