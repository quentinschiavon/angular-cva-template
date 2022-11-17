import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentFormComponent {

}
