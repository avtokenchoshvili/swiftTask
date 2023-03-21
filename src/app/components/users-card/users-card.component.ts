import {Component, Input} from '@angular/core';
import {HttpService} from "../../http.service";
import {Router} from "@angular/router";
import {Users} from "../../model/users";

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent {




  data:Users[] = [];
  percentage: number = 0;
  page = 1;

  loading = false;

  constructor(private _userService:HttpService, private _route:Router) {
    this.loadMoreData();


  }

  loadMoreData(): void {
    // Replace this with your loading logic
    if (this.loading) {
      return;
    }
    setTimeout(() => {


      this.loading = true;
      this._userService.getUserData().subscribe((res:Users) => {

        this.data = this.data.concat(res);



        this.percentage = 100;
        if (this.percentage >= 100) {
          this.loading = false;
        }
        this.page++


      })

    },1000)



  }



}
