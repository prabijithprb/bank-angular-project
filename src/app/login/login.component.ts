import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  acno = ""  
  // or acno:any
  psw = ""
  data = "your perfect banking partner"
  inputplaceholder = "account Number"
  userDetails: any = {
    1000: { accno: 1000, username: "anu", password: "abc123", balance: 0 },
    1001: { accno: 1001, username: "amal", password: "abc123", balance: 0 },
    1003: { accno: 1003, username: "arun", password: "abc123", balance: 0 },
    1004: { accno: 1004, username: "akil", password: "abc123", balance: 0 }
  }


  constructor() { }

  login() {
    alert("login clicked")

  }
  acnoChange(event :any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
    pswrdChange(event:any){
      this.psw=event.target.value
      console.log(this.psw);
      

    }

  }














  
    // var acnum = this.acno
    // var psw = this.psw
    // var userDetails = this.userDetails
    //   if(acnum in  userDetails){
    //   if (psw == userDetails[acnum]["password"]) {
    //     alert("login success")
    //   }
    //   else {
    //     ("incorrect password")
    //   }
    // }
    // else{
    //   ("acno is incorrect or nit registerd")
    // }



    // alert('login clicked')
  

//   acnoChange(event: any) {
//     this.acno = event.target.value
//     // console.log(this.acno);

//   }
//   pswrdchange(event: any) {
//     this.psw = event.target.value
//     // console.log(this.psw);

//   }


// }





// login() {
//   var acnum = this.acno
//   var psw = this.psw
//   var userDetails = this.userDetails
//     if(acnum in  userDetails){
//     if (psw == userDetails[acnum]["password"]) {
//       alert("login success")
//     }
//     else {
//       ("incorrect password")
//     }
//   }
//   else{
//     ("acno is incorrect or nit registerd")
//   }



//   // alert('login clicked')

