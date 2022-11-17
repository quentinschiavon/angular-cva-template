import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-children-cva',
  templateUrl: './children-cva.component.html',
  styleUrls: ['./children-cva.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildrenCvaComponent {}
