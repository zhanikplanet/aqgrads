import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToCloudpaymentComponent } from './link-to-cloudpayment.component';

describe('LinkToCloudpaymentComponent', () => {
  let component: LinkToCloudpaymentComponent;
  let fixture: ComponentFixture<LinkToCloudpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkToCloudpaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkToCloudpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
