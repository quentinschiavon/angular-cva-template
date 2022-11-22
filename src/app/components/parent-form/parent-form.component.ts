import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChildrenCvaComponent } from './../children-cva/children-cva.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss'],
  standalone: true,
  imports: [ChildrenCvaComponent, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentFormComponent implements OnInit {
  parentFormControl = new FormControl(undefined);

  parentFormGroup = new FormGroup({
    parentFormControl: this.parentFormControl,
  });

  ngOnInit(): void {
    this.parentFormGroup.valueChanges.subscribe({
      next: (value) =>
        console.log('parentFormGroup', value, this.parentFormControl.errors),
    });
  }
}
