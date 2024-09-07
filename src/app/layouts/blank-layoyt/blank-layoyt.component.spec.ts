import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankLayoytComponent } from './blank-layoyt.component';

describe('BlankLayoytComponent', () => {
  let component: BlankLayoytComponent;
  let fixture: ComponentFixture<BlankLayoytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankLayoytComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlankLayoytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
