import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprtyListComponent } from './proprty-list.component';

describe('ProprtyListComponent', () => {
  let component: ProprtyListComponent;
  let fixture: ComponentFixture<ProprtyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProprtyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProprtyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
