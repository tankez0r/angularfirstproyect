import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public titulo: string = "Dbz Personajes"

  public dbzCharacterList: Character[] = [{ name: "Krillin", power: 500 }, { name: "Goku", power: 1000 }]


  onNewCharacter(event: Character): void {

    this.dbzCharacterList.push(event)
  }

  onDeleteCharacter(index: number): void {
    this.dbzCharacterList.splice(index)
  }

}
