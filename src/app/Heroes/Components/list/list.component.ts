import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', "Ironman", "Hulk", "Thor", "She Hulk", "Cazador"]
  public lastHeroErased?: string = ""

  popLastHeroe(): void {
    this.lastHeroErased = this.heroNames.pop()

  }


}
