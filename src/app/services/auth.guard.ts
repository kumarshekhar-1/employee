import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, first, map, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.user.pipe(take(1),map(user=>{
        const isauth= !!user
        if(isauth)
        {  
         
            return  true
        }
       return this.router.createUrlTree(['/login'])
       
    }))
  }
  //  let islogged=this.auth.isloggedin
  //   if(islogged)
  //   {
  //     return true
  //   }
  //   else{
  //     this.router.navigate(['/login'])
  //     return false
  //   }
  // }
  
}
