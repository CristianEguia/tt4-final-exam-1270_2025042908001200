import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'edit/:id', component: BookEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
