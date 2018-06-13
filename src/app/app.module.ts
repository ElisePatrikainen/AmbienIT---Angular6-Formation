import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as localForage from 'localforage';

//import { WineItem } from './assets/wineItem.model';
//import { mockWineItemsList } from './assets/wineItems.mockApi';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layout/footer/footer.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { ItemListComponent } from './item-list/item-list/item-list.component';
import { ItemSelectionComponent } from './item-list/item-selection/item-selection.component';
import { ItemDetailsComponent } from './item-list/item-details/item-details.component';
import { ItemDetailPageComponent } from './item-detail-page/item-detail-page.component';
import { HoverEffectDirective } from './directives/hover-effect.directive';
import { OnScrollFadeInDirective } from './directives/on-scroll-fade-in.directive';
import { MultiLinesEllipsisPipe } from './multi-lines-ellipsis.pipe';
import { TestObservableComponent } from './test-observable/test-observable.component';

const routes: Routes = [
  { path: 'detail/:name', component: ItemDetailPageComponent },
  { path: '', component: ItemListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    FooterComponent,
    ItemDetailPageComponent,
    ItemListComponent,
    ItemSelectionComponent,
    ItemDetailsComponent,
    HoverEffectDirective,
    OnScrollFadeInDirective,
    MultiLinesEllipsisPipe,
    TestObservableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      { enableTracing: true }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule

    // WineItem,
    // mockWineItemsList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
