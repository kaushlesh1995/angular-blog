import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDeatilsComponent } from './blog-deatils.component';

describe('BlogDeatilsComponent', () => {
  let component: BlogDeatilsComponent;
  let fixture: ComponentFixture<BlogDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
