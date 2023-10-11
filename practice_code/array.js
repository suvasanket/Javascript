var myarr = [ 1, 2, 3, [ 4, 5, 6 ], [ [ 7, 8, 9 ], [ 10, 11, 12 ] ] ];

//1D        [0  1  2   3          4]
//2D                  [0  1  2]
//3D                              [0           1     ]
//4D                                [0  1  2]    [0  1  2]
console.log(myarr[0]); //1
console.log(myarr[3][0]); //4
console.log(myarr[4][0][0]); //7
//suppose to access 11
console.log(myarr[4][1][1]);

var yourarr = ["rocky", "suva", `rout`];
console.log("1 " + yourarr);

var ar = ["te", "i", "al"];
console.log(ar);

yourarr[3] = "sanket";
console.log("2 " + yourarr); //add more elements

yourarr.push("god"); //add more elements
console.log("3 " + yourarr);

yourarr.pop("god"); //remove the end element
console.log("4 " + yourarr);

yourarr.shift(); //remove the first element
console.log("5 " + yourarr);

yourarr.unshift("rocky bhai"); //add element to biggining
console.log("6 " + yourarr);
