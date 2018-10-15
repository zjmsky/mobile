import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativescriptBottomNavigationModule} from "nativescript-bottom-navigation/angular";

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs.component';

import { HomeComponent } from './accounts/home.component';
import { LoginComponent } from './accounts/login.component';
import { RegisterComponent } from './accounts/register.component';

import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';

import { CiphersComponent } from './vault/ciphers.component';
import { GroupingsComponent } from './vault/groupings.component';
import { VaultComponent } from './vault/vault.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptFormsModule,
        NativeScriptModule,
        NativescriptBottomNavigationModule,
        AppRoutingModule,
        ServicesModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        GroupingsComponent,
        CiphersComponent,
        VaultComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }