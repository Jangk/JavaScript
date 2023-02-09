// const promise1 = new Promise((resolve, reject) => {
//     // 비동기 성공시 resolve 호출
//     // 비동기 실패시 reject 호출
//     // resolve와 reject는 한개만 실행되기 때문에 밑의 reject는 무시됨.
//     resolve();        
//     reject();
//   });
//   promise1
//     .then(() => {
//     // resolve 호출 시 실행
//       console.log("then!");
//     })
//     //reject 호출 시 실행
//     .catch(() => {
//       console.log("catch!");
//     })
//     // Promise 실행 후 무조건 실행됨.
//     .finally(console.log("Finally"));



// // async를 이용한 비동기 처리
// const iFlag = true;
// // async 함수는 promise를 리턴함
// // promise객체가 아닌값을 리턴할땐 promise 객체로 변환해서 반환함.
// // resolvoe, reject를 쓰지않음.
// async function asyncFunc()
// {
//   if(iFlag)
//     return "성공";
//   else
//     return console.error("실패");
// }

// const promise2 = asyncFunc();
// promise2.then((value)=>{
//   console.log(value)
// })
// .catch((error)=>{
//   console.log(error)
// })
// .finally(
//   console.log("Finally")
// )


// await를 이용한 대기 ?
function mySetTimeOut(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function f() {
  // 그냥 SetTimeOut을 사용하면 비동기 처리로 작동하는 함수라
  // 함수를 실행하고 바로 작동하기 떄문에 
  // 위처럼 비동기 처리가 끝나길 기다렷다하기 위해선 Promise로 만들어서 써야댐.
  await mySetTimeOut(5000);
}

const promise3 = f();
promise3.then((returnValue)=>{
  alert("성공");
})
.catch((error)=>{
  alert("실패");
})
.finally(
  console.log("실행은 했음")
)
