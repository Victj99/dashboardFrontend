import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiechartComponent } from './piechart/piechart.component';
import { PrincipalComponent } from './principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcharComponent } from './barchar/barchar.component';
import { DatatableComponent } from './datatable/datatable.component';

// Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CalloutComponent } from './callout/callout.component';
import { MapahabilitadosComponent } from './mapahabilitados/mapahabilitados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        PiechartComponent,
        PrincipalComponent,
        BarcharComponent,
        DatatableComponent,
        CalloutComponent,
        MapahabilitadosComponent
    ],
    imports: [
        BrowserModule, HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule, MatToolbarModule,
        MatButtonModule, MatIconModule,
        MatDividerModule, MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
