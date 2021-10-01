import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsongComponent } from './postsong.component';

describe('PostsongComponent', () => {
  let component: PostsongComponent;
  let fixture: ComponentFixture<PostsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
