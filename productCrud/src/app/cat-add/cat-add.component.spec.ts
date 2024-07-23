import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAddComponent } from './cat-add.component';

describe('CatAddComponent', () => {
  let component: CatAddComponent;
  let fixture: ComponentFixture<CatAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
