import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

// import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginsComponent } from './plugins/plugins/plugins.component';
import { DividerComponent } from './common/divider/divider.component';
import { AudioPlayerComponent } from './common/audio-player/audio-player.component';
import { SamplesComponent } from './samples/samples.component';
import { DeferLoadingDirective } from './directives/defer-loading.directive';
import { EndSectionComponent } from './common/end-section/end-section.component';
import { AboutComponent } from './about/about.component';
import { AudioctxService } from './services/audioctx.service';
import { TechComponent } from './tech/tech.component';
import { HttpClientModule } from '@angular/common/http';
import { RombhRevealComponent } from './common/rombh-reveal/rombh-reveal.component';
import { WorksComponent } from './works/works.component';


@NgModule({
  declarations: [
    AppComponent,
    PluginsComponent,
    DividerComponent,
    AudioPlayerComponent,
    SamplesComponent,
    DeferLoadingDirective,
    EndSectionComponent,
    AboutComponent,
    TechComponent,
    RombhRevealComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
