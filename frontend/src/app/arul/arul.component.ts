import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
import {Router} from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-arul',
  templateUrl: './arul.component.html',
  styleUrls: ['./arul.component.css']
})
export class ArulComponent implements OnInit {

data:any=[]
  constructor(private service :ServiceService,private router:Router) { }
  // let details=[];

 
//  click(){
//    document.getElementById("custsignup").style.display="none";
//    document.getElementById("login").style.display="block";

//  }

clickk(a,b,c,d){
  console.log();

  this.service.usersignup(a,b,c,d).subscribe(result=>{//subscribe(result means taking resulting data from backend which is given data from me)
    console.log(result)
  });
}

userlogin(name,pwd)
{
  if((name=='tezos')&&(pwd=='123'))
  {
    this.service.style();

  }
  else{
    this.router.navigate(['/test'])
  }
  this.service.userlog(name,pwd).subscribe();
}

show(a,d){
  console.log("First"+a,d)
  
  document.getElementById('loginid').style.display='block';

document.getElementById('custsignup').style.display='none';
 
  // else if((name!='')&&(pwd!='')){
  //       this.router.navigate(['/test'])
  // }
  //  else if((name=='')&&(pwd=='')){
  //   alert("plz fill valid details only")
  //  }
}
// }
//name.value,empid.value,mail.value,pwd.value

  ngOnInit() {
    
  }



}



// import { Component, OnInit } from '@angular/core';
// import {ServiceService} from '../service.service';
// import {Router} from '@angular/router';
// import { ValueTransformer } from '@angular/compiler/src/util';

// @Component({
//   selector: 'app-admincontent',
//   templateUrl: './admincontent.component.html',
//   styleUrls: ['./admincontent.component.css']
// })
// export class AdmincontentComponent implements OnInit {

//   constructor(private tcs:ServiceService,private router:Router) { }

// open(){
// }
// submitt(e,f){
// document.getElementById('loginid').style.display='none';
//   if((e=='tezos')&&(f=='&#MNW123'))
//   {
//     this.tcs.style();

//   }
//   else if((e!='')&&(f!='')){
//         this.router.navigate(['/arul'])
//   }
//   else{
//     alert("plz fill valid details only")
//   }

// }

//   ngOnInit() {
   
//   }

// }




