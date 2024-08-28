import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: '', component: StartScreenComponent },
    { path: '', component: MatButtonModule },
    { path: '', component: MatIconModule },
    { path: '', component: MatDialogModule },
    { path: '', component: DialogAddPlayerComponent },
    { path: '', component: FormsModule },
    { path: 'game', component: GameComponent },
];
