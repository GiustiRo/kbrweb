import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginsComponent } from './plugins/plugins/plugins.component';
import { DividerComponent } from './common/divider/divider.component';
import { AudioPlayerComponent } from './common/audio-player/audio-player.component';
import { SamplesComponent } from './samples/samples.component';
import { DeferLoadingDirective } from './directives/defer-loading.directive';
import { EndSectionComponent } from './common/end-section/end-section.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PluginsComponent,
    DividerComponent,
    AudioPlayerComponent,
    SamplesComponent,
    DeferLoadingDirective,
    EndSectionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
