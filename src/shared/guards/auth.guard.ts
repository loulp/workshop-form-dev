import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO Get this boolean from store or cookies
    // Changer en false pour acceder au login
    const isSignedIn: boolean = true;

    const isAuth = (paths: Array<any>) => paths.some((path) => path === route.routeConfig?.path);

    if (!isSignedIn && !isAuth(['login'])) {
      this.router.navigateByUrl('login');
    }

    if (isSignedIn && isAuth(['login'])) {
      this.router.navigateByUrl('unitBoard');
    }

    return true;
  }
}
