import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../http.service";
import {Users} from "../../model/users";
import {Friends} from "../../model/friends";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit ,OnDestroy{

  userData:Users[] = [];
  Frends:Friends[]  = [];
  userId!:number  ;
  percentage: number = 0;


  page = 1;
  loading = false;
  private subscription?: Subscription;

  constructor(private _userService:HttpService, private route:ActivatedRoute) {

  }
  ngOnInit() {


    this.route.params.subscribe(res=>{


      this.userId  = parseInt(res['id'])

      this._userService.getUser(this.userId).subscribe((res:any)=>{
        this.userData.push(res)




      })
    })
    this. loadMoreData()
  }

  loadMoreData(): void {
    // Replace this with your loading logic
    if (this.loading) {
      return;
    }


      setTimeout(() => {


        this.loading = true;
        this._userService.getUser(this.userId).subscribe((res: any) => {

          this.Frends  =  this.Frends.concat(res['frendlist'])



          this.percentage = 100;
          if (this.percentage >= 100) {
            this.loading = false;
          }
          this.page++


        })

      }, 1000)



  }


  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
