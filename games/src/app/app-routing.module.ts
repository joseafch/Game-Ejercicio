import { WhoIsITComponent } from './pages/who-is-it/who-is-it.component';
import { MoleComponent } from './pages/mole/mole.component';
import { BuscaTesoroComponent } from './pages/busca-tesoro/busca-tesoro.component';
import { HomeComponent } from './pages/home/home.component';
import { MemoriComponent } from './pages/memori/memori.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "memori", component: MemoriComponent  },
  {path: "", component: HomeComponent  },
  {path: "treasure", component: BuscaTesoroComponent  },
  {path: "mole", component: MoleComponent  },
  {path: "whoIsIt", component: WhoIsITComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
