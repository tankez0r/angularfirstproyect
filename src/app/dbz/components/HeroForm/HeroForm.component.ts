import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-hero-form',
  templateUrl: './HeroForm.component.html',
  styleUrl: './HeroForm.component.css',
})
export class HeroFormComponent {



  @Output("newCharacter")
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = { name: "", power: 0 }

  emitCharacter(): void {
    if (this.character.name.length === 0 || this.character.power < 0) return

    this.onNewCharacter.emit(this.character)

    this.character = { name: "", power: 0 }
  }
}
