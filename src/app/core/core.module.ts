import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavModule } from './nav/nav.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    SearchModule
  ],
  exports: [NavModule, SearchModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
