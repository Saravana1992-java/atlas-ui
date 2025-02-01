import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RightPaneComponent } from './right-pane/right-pane.component';

const routes: Routes = [
    { path: '', component: RightPaneComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
