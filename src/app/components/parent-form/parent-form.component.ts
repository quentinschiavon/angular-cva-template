import { ChildrenCvaComponent } from './../children-cva/children-cva.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss'],
  standalone: true,
  imports: [ChildrenCvaComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentFormComponent {}
