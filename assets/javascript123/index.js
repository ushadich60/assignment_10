//console.log("main");

let  score =75 ;

/*
if(score>100 || score<0){

    console.log(undefined);
    alert("you can't do this");

}
*/

let has_submitted_assignments =Boolean;

has_submitted_assignments=true;

//console.log(has_submitted_assignments);

var grade  =undefined;
var status1 =undefined;

if(score>100 ){
      //  console.log(undefined);
    //alert("you can't do this");
    status1="worng Number !";
     grade='A';

}
else if(score>=90 && score<100){

 grade='A';
     if(has_submitted_assignments){
        status1 ="Passed with all homework submitted.";
    }
    else{status1="Passed, but missing homework penalty applies.";}

}
else if (score>=80 && score<90){

 grade='B';
     if(has_submitted_assignments){
        status1 ="Passed with all homework submitted.";
    }
    else{status1="Passed, but missing homework penalty applies.";}

}
else if (score>=70 && score<80){

 grade='C';
     if(has_submitted_assignments){
        status1 ="Passed with all homework submitted.";
    }
    else{status1="Passed, but missing homework penalty applies.";}

}
else if (score>=60 && score<70){

 grade='D';

    if(has_submitted_assignments){
        status1 ="Passed with all homework submitted.";
    }
    else{status1="Passed, but missing homework penalty applies.";}

}
else if(score>=50){
     grade ='F';
    status1="Failed, but eligible for a re-test.";
}
else if(score<50 && score>0){
   grade ='F';
    status1="Failed completely. Must retake the course.";

}
else{/*
        console.log(undefined);
    alert("you can't do this");
    score=undefined;
    grade=undefined;
    status1=undefined;
 */
  status1="worng Number !";
     grade='F';
}


console.log("Score  :" +Number(score));
console.log("Grade  :"+grade)
console.log("Status  :"+  String(status1));

//console.log(typeof status1);