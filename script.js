const promise1 = new Promise((resolve, reject) => {
    // 비동기 성공시 resolve 호출
    // 비동기 실패시 reject 호출
    resolve();
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
//async function myCallBack()
//{
//    return setTimeout(function (){}, 5000);
//}
//myCallBack().then
//(
//    (result)=>
//    {
//        alert("result");
//    }
//)
//.catch
//(
//
//)




    