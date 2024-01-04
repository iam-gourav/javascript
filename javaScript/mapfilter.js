//*****************filter*********************/

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

//  let compData = companies.filter((comp)=> comp.category==="Retail" && comp.start>=1985)
 // multiple filteration
 // inner function console comp value true false
//  console.log(compData);
//  [
//     { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//     { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 }
//   ]


//*************map****************/

// let arr = [10 , 20 , 30 , 40 , 50]

// let arrData = arr
//                 .map((elem)=>{
//                     return elem+2
//                 }).map((elem)=>{
//                     return elem*10
//                     // return elem>30
//                 })
//       console.log(arrData);          
// map chaining
    //   [ 120, 220, 320, 420, 520 ]
    // elem>30 gives boolean array
    // [ false, false, true, true, true ]

    const books = [
        {
            bookName:"js",
            price:699
        },
        {
            bookName:"py",
            price:599
        },
        {
            bookName:"ts",
            price:499
        },
        {
            bookName:"ruby",
            price:399
        },
        {
            bookName:"php",
            price:299
        },
    ]
    let initialValue = 0
    // let total = books.reduce((item , curruntValue)=>{
       
    //              return item + curruntValue.price
    // },initialValue)

    // console.log(total);
    //2495
    // short code 
    
    let total = books.reduce((acc , cur)=> acc + cur.price , 0)
    console.log(total);

  