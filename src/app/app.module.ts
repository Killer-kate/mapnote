import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { PlaceEditDialogModule } from "./ui/place-edit-dialog/place-edit-dialog.module"
import { ShellModule } from "./ui/shell/shell.module";
import { MdEditorComponent } from './ui/shared/components/md-editor/md-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    MdEditorComponent
  ],
  imports: [
    BrowserModule,
    ShellModule,
    PlaceEditDialogModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
