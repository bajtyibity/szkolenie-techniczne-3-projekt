import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaprawaComponent } from './naprawa/naprawa.component';
import { AddNaprawaComponent } from './add-naprawa/add-naprawa.component';
import { DeleteNaprawaComponent } from './delete-naprawa/delete-naprawa.component';

const routes: Routes =
 [
    { path: 'repair-list', component: NaprawaComponent },
    { path: '', redirectTo: '/repair-list', pathMatch: 'full' },
    { path: 'add-naprawa', component: AddNaprawaComponent },
    { path: 'delete-naprawa', component: DeleteNaprawaComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
