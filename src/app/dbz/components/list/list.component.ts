import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = []


  CharacterToDelete(index: number): void {
    this.onDeleteCharacter.emit(index)
  }


}
