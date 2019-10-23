import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
    
    usuario:string;
    
    ngOnInit(): void {
        this.usuario = localStorage.getItem("userName");
    }


   

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    public menu = [
        {name : 'index', link: '/app/dashboard', icon: 'dashboard'},
        {name : 'god', link: '/app/god', icon: 'brightness_7'},
    ]

  constructor(private breakpointObserver: BreakpointObserver) {}

}
