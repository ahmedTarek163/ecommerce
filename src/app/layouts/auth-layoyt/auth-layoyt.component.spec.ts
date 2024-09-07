import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayoytComponent } from './auth-layoyt.component';

describe('AuthLayoytComponent', () => {
  let component: AuthLayoytComponent;
  let fixture: ComponentFixture<AuthLayoytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayoytComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthLayoytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
