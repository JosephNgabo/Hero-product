import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAngularFireAuth: any;
  let mockGoogleAuthProvider: any;

  beforeEach(async () => {
    mockGoogleAuthProvider = jasmine.createSpyObj('GoogleAuthProvider', ['setCustomParameters']);
    spyOn(firebase.auth, 'GoogleAuthProvider').and.returnValue(mockGoogleAuthProvider);

    mockAngularFireAuth = {
      signInWithRedirect: jasmine.createSpy('signInWithRedirect')
    };

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signInWithRedirect when login is called', () => {
    component.login();
    expect(mockAngularFireAuth.signInWithRedirect).toHaveBeenCalledWith(mockGoogleAuthProvider);
  });
});