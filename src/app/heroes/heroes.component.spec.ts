import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
	let component: HeroesComponent;
	let fixture: ComponentFixture<HeroesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeroesComponent],
		});
		fixture = TestBed.createComponent(HeroesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
