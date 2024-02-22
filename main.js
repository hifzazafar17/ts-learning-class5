"use strict";
// // exampel 1
// for ( let i = 0; i < 10; i++){
//     console.log("hello world");
// }
// // example 2 ( true condition)
// for ( let i = 0; 1 < 3; i++){
//     console.log("hello world");
// }
// // example 2 ( true condition)
// for ( let i = 0; i < 6; i++){
//     console.log("hello world");
// }
// for ( let i = 0; i < 11; i++){
//     console.log("hello world");
// }
// for ( let i = 0; i < 10; i++){
//     console.log(i , 2);
// }
// example
const std = ["hifza", "haniya", "hiba"];
for (let i = 0; i < 3; i++) {
    console.log(`${std[i]} clap👏`);
}
//  example
let a = 1;
a < 5;
a++;
for (let a = 1; a < 11; a++) {
    let ans = a * 2;
    console.log("2", "x", a, "=", ans);
}
for (let a = 1; a < 11; a++) {
    let ans = a * 3;
    console.log("3", "x", a, "=", ans);
}
for (let a = 1; a < 11; a++) {
    let ans = a * 4;
    console.log("4", "x", a, "=", ans);
}
for (let a = 1; a < 11; a++) {
    let ans = a * 5;
    console.log("5", "x", a, "=", ans);
}
for (let a = 1; a < 11; a++) {
    let ans = a * 6;
    console.log("6", "x", a, "=", ans);
}
for (let a = 1; a < 11; a++) {
    let ans = a * 7;
    console.log("7", "x", a, "=", ans);
}
let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(arr[0]);
for (let index = 0; index <= 10; index++) {
    console.log(index);
    console.log(arr[index]);
}
// nested loop
for (let i = 0; i < 3; i++) {
    console.log("parent loop", i);
    break;
    for (let j = 0; j < 4; j++)
        console.log("child loop", j);
}
let videos = ["video1", "video2", "video3"];
// console.log(videos.length)
for (let i = 0; i < videos.length; i++) {
    console.log(videos[i]);
}
// // 
// let video1title= "video1"
// let video1Description= "video1"
// let video1image="https://image.com"
let video1 = {
    title: "video1",
    description: "video 1 desctiption",
    image: "https://image.com"
};
const video = [
    {
        title: "video1",
        description: "video 1 desctiption",
        image: "https://image.com"
    },
    {
        title: "video2",
        description: "video 2 desctiption",
        image: "https://image.com"
    },
    {
        title: "video3",
        description: "video 3 desctiption",
        image: "https://image.com"
    },
    log, () => { console.log("hello"); }
];
console.log(video1.description);
console.log(video1.title);
console.log(video1.image);
console.log(video[1].description);
// task
for (let i = 0; i < 3; i++) {
    console.log(video[i].title);
}
// task
for (let i = 0; i < videos.length; i++) {
    console.log(video[i].title);
}
// json (JS Oject Nation)
//  data transfer json learn all languages
console.log();
