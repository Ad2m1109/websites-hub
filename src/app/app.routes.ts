import { Routes } from '@angular/router';
import { CaliforniaHousingPrice } from './california-housing-price/california-housing-price';
import { HarmoniaComponent } from './harmonia/harmonia';
import { Mp3Mp4Converter } from './mp3-mp4-converter/mp3-mp4-converter';
import { MrGrammer } from './mr-grammer/mr-grammer';
import { Spendora } from './spendora/spendora';
import { Pages } from './pages/pages';

export const routes: Routes = [
    { path: '', component: Pages },
    { path: 'california-housing-price', component: CaliforniaHousingPrice },
    { path: 'harmonia', component: HarmoniaComponent },
    { path: 'mp3-mp4-converter', component: Mp3Mp4Converter },
    { path: 'mr-grammer', component: MrGrammer },
    { path: 'spendora', component: Spendora },
];