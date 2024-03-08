import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iron man';
  public age: number = 45;
  public nameHasChanged: boolean = true;
  public ageHasChanged: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = "Spider Man"
    this.nameHasChanged = false
  }

  changeAge(): void {
    this.ageHasChanged = false
    this.age = 22
  }

  resetForm(): void {
    this.name = "ironman";
    this.age = 45;
    this.ageHasChanged = true;
    this.nameHasChanged = true;
  }

}
