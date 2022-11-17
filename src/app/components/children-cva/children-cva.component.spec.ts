import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCvaComponent } from './children-cva.component';

describe('ChildrenCvaComponent', () => {
  let component: ChildrenCvaComponent;
  let fixture: ComponentFixture<ChildrenCvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenCvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
