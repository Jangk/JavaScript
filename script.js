const promise1 = new Promise((resolve, reject) => {
    // 비동기 성공시 resolve 호출
    // 비동기 실패시 reject 호출
    // resolve와 reject는 한개만 실행되기 때문에 밑의 reject는 무시됨.
    resolve();        
    reject();
  });
  promise1
    .then(() => {
    // resolve 호출 시 실행
      console.log("then!");
    })
    //reject 호출 시 실행
    .catch(() => {
      console.log("catch!");
    })
    // Promise 실행 후 무조건 실행됨.
    .finally(console.log("Finally"));



// async를 이용한 비동기 처리
const iFlag = true;
// async 함수는 promise를 리턴함
// promise객체가 아닌값을 리턴할땐 promise 객체로 변환해서 반환함.
async function asyncFunc()
{
  if(iFlag)
    return "성공";
  else
    return console.error("실패");
}

const promise2 = asyncFunc();
promise2.then((value)=>{
  console.log(value)
})
.catch((error)=>{
  console.log(error)
})
.finally(
  console.log("Finally")
)