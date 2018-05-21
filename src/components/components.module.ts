import { NgModule } from '@angular/core';
import { PageComponent } from './page/page';
import { PagesComponent } from './pages/pages';
@NgModule({
	declarations: [PageComponent,
    PagesComponent],
	imports: [],
	exports: [PageComponent,
    PagesComponent]
})
export class ComponentsModule {}
