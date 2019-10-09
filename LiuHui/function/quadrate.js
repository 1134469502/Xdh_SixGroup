'use strict'
/*
*正方形
*/
var str="";
function quadrate(string,width,bool){
    if(bool){
    //i是长         j是宽
    for(var j=0;j<width;j++){
        for(var i=0;i<width;i++){
            if(i== 0   ||      i==(width-1)      ||     j==0    ||   j==(width-1) ){
                str+=string+" ";
            }else{
                str+="  ";
            }
        } 
str+="\n";
    }
}else{
    for(var i=0;i<width;i++){
        for(var j=0;j<width;j++){
            str+=string+"  ";
        }
        str+="\n";
    }
}
    return str;
}
//console.log(quadrate("-",5,true));
/*
**回字  
*/
function hui(string,width){
    for(var i=0;i<width;i++){
        for(var j=0;j<width;j++){
            if( i== 0   ||      i==(width-1)      || j==0||j==(width-1)|| i==1  &&j>=1/*这个大于等于2的时候，第二行第二列的星星会消失，8*/&&j<=(width-2)  ||    j==1  &&i>=2&&i<(width-2)  ||   i==(width-2) &&j>=1&&j<=(width-2)     ||j==(width-2)&&i>=2&&i<=(width-2)        ){
                str+=string+"  ";
            }else{
                str+="   ";
            }
        }
        str+="\n";
    }
    return str;
}
//console.log(hui("*",7));


 // Triangle("*",4,true);
/*
*梯形  假设是一个三角形，去掉头，从中间开始打印\
    n=wid+2height;
*/
function Trapezoid(string,width,height,bool){
    var n=width+2*(height);
    if(bool){
        for(var i=1;i<=height;i++){
            for(var a=height;a>i;a--){
                str+="";
            }
            for(var k=1;k<=n;k++){
                if(k==n-width-i-1||k==n-(width-i)||i==1&&k>=n-width-i&&k<n-(width-i)||i==height&&k>=n-width-i&&k<n-(width-i)){
                    str+=string+" ";
                }else{
                    str+="  ";
                }
            }
            str+="\n";
        }
        return str;
    }else{
        for(var i=1;i<=height;i++){
            for(var k=1;k<=n;k++){
                if(k>n-width-i-1&&k<=n-(width-i)){
                    str+=string+" ";
                }else{
                    str+="  ";
                }
            }
            str+="\n";
        }
        return str;
    }
}
//console.log(Trapezoid("*",8,7,false));

/*
*三角形
*/
function Triangle(string,height,bool){
    if(bool){
    for(var i=1;i<height;i++){
        for(var k=height;k>i;k--){
            str+=" ";
        }
        for(var j=1;j<=2*i-1;j++){
            if(j==1&&i==1){
                    str+= string+" ";
            }else if(j==1&&i!=1||j==2*i-1&&i!=1){
                str+=string+"";
            }else{
                str+=" ";
            }
        }
        str+="\n";
     }
     for(var c=0;c<2*i-1;c++){
            str+=string;
    }
    }
    if(!bool){
        for(var  i=0;i<=height;i++){
                    for(var c=0;c<=height*2-1;c++){
                        if(c>=height-i+1&&c<=height+i-1){
                            str+=string;
                        }else{
                            str+=" ";
                        }
                    }
                    str+="\n";
                }
    }
    return str;;
}
//console.log(Triangle("#",7,false));
//console.log(Triangle("*",8,false));


/*
*   菱形 ，到达最大值后递归处理函数，去掉三角中间线
*   能做出来真是个奇迹.....先打空格，再打符号
        由少往多打：假设i等于零，每行打 ix2+1个，i++就是一个正三角,
        由多往少打：假设i等于高；每行打ix2=1个，i-- 就是一个倒三角;
*/
str+="\n";
function diamond(string,height,bool){
    if(bool){
    for(var  i=0;i<height;i++){
        for(var j=height;j>i;j--){
            str+="  ";
        }
        for(var k=0;k<=2*height+1;k++){
            if(k==0||k==2*i-1){
                str+=string+"   ";
            }else{
                str+="  ";
            }
        }
        str+="\n";
    }
    for(var  i=0;i<=height;i++){
        // for(var a=i;a>0;a--){
        //     str+=" ";
        // }
        for(var k=0;k<2*height+1;k++){
            if(k==2*height-i||k==i){
                str+=string+" ";
            }else{
                str+="  ";
            }
        }
        str+="\n";
    }
}

if(!bool){
    for(var i=0;i<height-1;i++){
        for(var j=1;j<=height-i;j++){
            str+="  ";
        }
    for(var k=0;k<2*i+1;k++){
        str+=string+" ";
    }
        str+="\n";
    }
    for(i=1;i<=height;i++){
        for(j=1;j<=i;j++){
            str+="  ";
        }
        for( k=1;k<=2*(height-i)+1;k++){
            str+=string+" ";
        }
            str+="\n";
    }
}
return str;;
}

//console.log(diamond("*",7,true));
//console.log(diamond("&",4,true));
















// hui("*",8);
// Trapezoid("*",5,4,true);
// Trapezoid("*",5,4,false);
// Triangle("*",10,true);
// Triangle("*",10,false);
// diamond("*",5,true);
// diamond("*",5,false);




// function Trapezoid(string,width,bool){
//     var str="";
// var j=width*2;
// if(bool){
// for(var i=width/2;i<=width;i++){

//     for(var k=0;k<=j;k++){
//         if(k==width+i&&i!=width/2||k==width-i){
//             str+=string+" ";
//         }else{
//             str+=" ";
//         }
//         if(k==width-i&&i==width){
//             for(var a=0;a<width;a++){
//             str+=string;
//             }
//         }
//         if(i==(width/2)&&k==(j-width)/2){
//             for(var c=0;c<width/2;c++){

//                 str+=string+" ";
//             }
//         }
//     }
//     str+="\n";
// }
// }else{
//     for(var i=width/2;i<=width;i++){
//         for(var k=0;k<j;k++){
//             if(k>j/i-1&&k<i+width||i==width){
//                 str+=string+" ";
//             }else{
//                 str+="  ";
//             }
//         }
//         str+="\n";
//     }
// }    //k==height-i||k==height*2+i
// return str;;
// }


/*

function diamond(string,width,bool){
    var str="";
var j=width*2-1;
if(bool){
for(var i=0;i<=width;i++){
    for(var k=1;k<=j;k++){
        if(k==width+i||k==width-i){
            str+=string+" ";
        }else{
            str+="  ";
        }
        // if(i==1&&k==width/2){
        //     str+=string;
        // }
    }
   str+="\n";
    if(i==(width-1)){
        for(var a=i;a>=0;a--){
            for(var b=j;b>=0;b--){
             //   if(b!=0){
                if(b==width+a||b==width-a){
                    str+=string+" ";
                }else{
                    str+="  ";
            }
        }//}
        str+="\n";
    }
}
}
}else{
    for(var i=1;i<=width;i++){
        for(var k=1;k<=j;k++){
            if(k<width+i&&k>width-i ){
                str+=string+" ";
        }else{
            str+="  ";
        }
    }
    str+="\n";
    if(i==(width)){
        for(var a=i;a>=0;a--){
            for(var b=j;b>=0;b--){
             //   if(b!=0){
                if(b<=width+a&&b>=width-a){
                    str+=string+" ";
                }else{
                    str+="  ";
            }
}
str+="\n";
}
    }
}
}
return str;;
}


*/


/*

/*
// *三角形        根据设置 的值，j=width*2-1=7 
*/
// function  Triangle2(string,width,bool){
//     var str="";
// var j=width*2-1;
// if(bool){
// for(var i=0;i<=width;i++){
//     for(var k=0;k<=j;k++){
//         if(k==width+i||k==width-i ){
//             str+=string+" ";
//         }else{
//             str+="  ";
//         } 
//         if(k==width-i&&i==width){
//             for(var a=Math.floor(i/2);a<j;a++){
//             str+=string+" ";
//             }
//         }
//     }
//     str+="\n";
// }
// }if(!bool){
//     for(var  i=0;i<=width;i++){
//         for(var c=0;c<=j;c++){
//             if(c>=width-i+1&&c<=width+i-1){
//                 str+=string;
//             }else{
//                 str+="  ";
//             }
//         }
//         str+="\n";
//     }
// }
// return str;;
// }


// Triangle2("*",16,true);



// for(var i=0;i<5;i++){
//     for(var j=5;j>i;j--){
//        document.writeln("&nbsp");
//     }
//     for(var k=0;k<2*i+1;k++){
//        document.writeln("*");
//     }
//     document.writeln("</br>")
//  }



//i=

// for(var i=0;i<6;i++){
//     for(var j=6;j>i;j--){
//        document.writeln(" ");
//     }
//     for(var k=1;k<=(2*i-1);k++){
//     if(k==1 || k==(2*i-1)){
//        document.writeln("*");
//     }else{
//        document.writeln(" ");
//     }
//     }
//     document.writeln("</br>");
//  }
// i=高；
// j=首先打印的空;
// k=其次打印的*

//  for(var i=4;i>0;i--){
//     for(var j=5;j>=i;j--){
//        document.writeln("&nbsp");
//     }
//     for(var k=1;k<=(2*i-1);k++){
//     if(k==1 || k==(2*i-1)){
//        document.writeln("*");
//     }else{
//        document.writeln("&nbsp");
//     }
//     }
//     document.writeln("</br>")
//  }






/*
*实心菱形
*/
/*
for(var i=0;i<height;i++){
    for(var j=1;j<=height-i;j++){
        str+="   ";
    }
for(var k=0;k<2*i+1;k++){
    str+=string+" ";
}
    str+="\n";
}
for(i=1;i<=height;i++){
    for(j=1;j<=i;j++){
        str+="   ";
    }
    for( k=1;k<=2*(height-i)+1;k++){
        str+=string+" ";
    }
        str+="\n";
}
*/








