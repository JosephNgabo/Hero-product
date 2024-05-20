import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';
import { BsNavbarComponent } from './bs-navbar.component';

describe('BsNavbarComponent', () => {
  let component: BsNavbarComponent;
  let fixture: ComponentFixture<BsNavbarComponent>;
  let mockAngularFireAuth: any;

  beforeEach(async () => {
    mockAngularFireAuth = {
      authState: of({ uid: '123' }),
      signOut: jasmine.createSpy('signOut')
    };

    await TestBed.configureTestingModule({
      declarations: [ BsNavbarComponent ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user$', (done) => {
    component.user$.subscribe(user => {
      expect(user).toBeTruthy();
      expect(user!.uid).toBe('123');
      done();
    });
  });

  it('should call signOut when logout is called', () => {
    component.logout();
    expect(mockAngularFireAuth.signOut).toHaveBeenCalled();
  });
});