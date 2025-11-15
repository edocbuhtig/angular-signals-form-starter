import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-quantity-stepper',
  templateUrl: './quantity-stepper.component.html',
  styleUrl: './quantitiy-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityStepperComponent implements FormValueControl<number> {
  value = model(1);
  isDisabled = input(false);

  protected increment() { 
    this.value.update(v => v + 1);
  }

  protected decrement() {
    // this.value.update(v => Math.max(1, v - 1));
    this.value.update(v => v - 1);
  }
}
