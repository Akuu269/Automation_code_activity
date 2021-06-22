// if some vlue  in arr within object form with  some properties , console.table convert into a table 
// i.e.
let arr = [
    {name : "rohit" , run : "100"},
    {name : "rahul" , run : "100"},
    {name : "sachin" , run : "150"},
    {name : "virat" , run : "80"}
]
console.table(arr);

// o/p like this 
/*
┌─────────┬──────────┬───────┐
│ (index) │   name   │  run  │
├─────────┼──────────┼───────┤
│    0    │ 'rohit'  │ '100' │
│    1    │ 'rahul'  │ '100' │
│    2    │ 'sachin' │ '150' │
│    3    │ 'virat'  │ '80'  │
└─────────┴──────────┴───────┘
*/