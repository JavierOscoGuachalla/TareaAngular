import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {path: 'body', component:BodyComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'menu', component:MenuComponent}
];
