import {CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService,
                private route:Router) { }

    canActivate() {
           return this.authService.isAuthenticated()
                .then((authenticated:Boolean)=>{
                    if(authenticated){
                        return true;
                    }
                    else{
                        window.alert('No permission');
                        this.route.navigate(['/login']);
                        return false;
                    }
                }) 
    }
}