import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './Components/hero/hero.component';
import { ListComponent } from './Components/list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],
  exports: [HeroComponent, ListComponent],
  providers: [],
})
export class HeroesModule { }
