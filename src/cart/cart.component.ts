import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { QuantityStepperComponent } from '../quantity-stepper/quantity-stepper.component';
import { Field, form, min, required } from '@angular/forms/signals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [ QuantityStepperComponent, Field ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  protected model = signal({ quantity: 1 });

  protected cartForm = form(this.model, schema => {
    required(schema.quantity);
    min(schema.quantity, 1);
  });
}
