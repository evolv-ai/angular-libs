import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ExecutionPlanService } from '@evolv/angular-execution-plan';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  private runtime: any;

  constructor(private heroService: HeroService, evolv: ExecutionPlanService) {
    this.runtime = evolv.getRuntime();
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(async (heroes) =>  {
        this.heroes = heroes.slice(1, 5);
        (await this.runtime).rerun();
      });
  }
}
