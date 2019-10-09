/*
*   统计字符串长度 
*   @param string 输入字符串
*   return int
*/
function long(string){
    for(var i=0;i<string.length;i++){
}  
if(i==0){
    console.log("重新输入");
    return false;
}
console.log(i);         
}
//long("abc");
/*
*   截取字符串  
*   @param string  截取的字符串
*   @param  start     开始截取的位置
*   @param  long    截取的长度
*   returns    string 
*/
function substr(string,start,long){
    var str="";
    if(start!=0){
    start--;
    }
    for (var i=0;i<long;i++){
        str+=string[start];
        start++;
    }
    if(!str){
        return false;
    }
    return str;
}
//console.log(substr("accdefg",3,3));
/*
*   搜索字符串，返回首先出现的下标
*/
function search(string,string2){
    var str="";
    for (var i=0;i<string.length;i++){
            if(string[i]==string2[0]){
               var strr= substr(string,i+1,string2.length);
               if(strr==string2){
                   return i;
               }
            }
    }
    return -1;
    }


//console.log(search("abcdefgabcacc","bc"));
/*
*数组合并字符串
*@ param 要合并的数组
*/
function arrays(array,strs){
    var str="";
    var con=array.length;
    for(var i=0;i<array.length;i++){
        str+=array[i];
        if(i==con-1){
            console.log(str);
            return false;
        }
            str+=strs;
    }
    return str;
}
//arrays( ["a"],"@");


/*
*   分割字符串
*   @param string 被分割的字符串
*   @  param  string2  分割的字符串
*       returns array;
*/

function split(string,string2){
//     var arr=new Array();
//     var str="";
//     var b=0;
//     arr[b]="";
//      sec="";
//      var str2;
//      sec=search(string,string2);
//      console.log(sec);
//     if(sec!=-1){
//      //   if(substr(string,0,sec) !=false){
//     str=substr(string,sec,string.length);
//     console.log(str);
//     //kong
//     arr[b]=substr(string,0,sec);
//     if(arr[b]!=false){
//     b++
//     }
//      //   }
//     for(var a=0;a<5;a++){
//     for(var i=sec;i<str.length;i++){
//         if(str[i]!="undefined"&&str[i]!=undefined){
//          str2+= str[i];
//         }
//     }
//      console.log("-------------"+str2+"****");//abeeeababcababc
//          sec=search(str2,string2);
//          if(sec!=-1&&substr(str2,0,sec)){
//             arr[b]=substr(str2,0,sec);
//             if(arr[b]!="undefined"&&arr[b]!=false){
//             b++
//             }
//          }
//          console.log("str2:::"+str2+"sec:::"+sec+"str2.lengh::::"+str2.length);
//          str=substr(str2,sec,str2.length);
//          if(sec==0){
//          sec++;}
//     str2='';
//     }
// }

// console.log( arr);
}
split("abeeeababcababc","ab");




// function splits(string,string2){
//     var str="";
//     var arr=Array();
//     var b=0;
//     for(var i=0;i<string.length;i++){
//         if(string[i]==string2[0]){
//         if(substr(string,i,string2.length)){
//             if(str){
//             arr[b]=str;
//             b++;
//             str="";
//             }
//         // }else{
//         //     i++;
//         // }
//         }else{
//             i=i+string2.length;
//         }
//     }else{
//     str+=string[i];
//     }
// }
//     if(str){
//         arr[b]=str;
//     }

// return arr;
// }

// console.log(splits("abcdabc","ab"));





    // //     // if(string[i]!=string2){
    // //     //     console.log("不存在");
    // //     //     return false;
    // //     // }else{
    //     var bol=search(string,string2)
    //     if(bol){
            
    //         }

    //     }else{
    //         return -1;
    //     }
        



/*
*   分割字符串
*   @param string 被分割的字符串
*   @  param  string2  分割的字符串
*       returns array;
*/

// function split(string,string2){
//     var arr=new Array();
//     var str="";
//     var b=0;
//     arr[b]="";
//     for(var i=0;i<string.length;i++){
//         for(var a=0;a<string2.length;a++){
//         if(string[i]==string2[a]){
//             if(str!=""){
//             arr[b]=str;
//             b++;
//             str="";
//             }
//             i++;

//         }

//     }
//     if(string[i]){
//         str+=string[i];
//     }
//     }
//     if(str){
//     arr[b]=str;
//     }
//     console.log( arr);
// }
//  split("ababcabcabc","ab");
// var str="ababcabcabc";
// console.log(str.split("ab"));





//     if(string[i]==string2&&i==0){
//         i++;
//         str='';
// //     }

//     if(string[i]==string2){
//         arr[b]=str;
//         b++;
//         i++;
//         str='';
//     }
//     str+=string[i];

// }
// arr[b]=str;
// console.log( arr);

















