
let result = []
function fetchUserData(cb) {
    setTimeout(() => {
        result = [{ name: 'b', age: 18 }, { name: 'a', age: 18 }]
        cb(result)
    }, 1000)
}
function fetchCompanyData(cb) {
    setTimeout(() => {
        result = [{ companyName: 'google', address: "sdfs" }, { companyName: 'meta', address: "dsfsdf" }]
        cb(result)
    }, 2000)
}

// fetchUserData((userData) => {
//     console.log("userData", userData)
//     fetchCompanyData((companyData) => { console.log('companyData', companyData); alert('hello') }) // console.log
// });

// function foo() {
//     console.log(this)
// }

// console.dir(foo)

// const fooBind = foo.bind({ name: 'patrick' })
// console.log("this", fooBind)
// fooBind()


class MyPromise {
    constructor(excutionFn) {
        this.PromiseState = "PENDING"
        this.PromiseResult = undefined;
        const resolveFn = (result) => {
            if (this.PromiseState === "PENDING") {
                this.PromiseState = "FulFill"
                this.PromiseResult = result;
                if (this.onFulFillFn) {
                    this.onFulFillFn(this.PromiseResult)
                }
            }
        }
        const rejectFn = (result) => {
            if (this.PromiseState === "PENDING") {
                this.PromiseState = "Reject";
                this.PromiseResult = result;
                if (this.onRejectFn) {
                    this.onRejectFn(this.PromiseResult)
                }
            }

        }
        excutionFn(resolveFn, rejectFn)
    }

    then(onFulFill, onReject) {
        return new MyPromise((res, rej) => {
            this.onFulFillFn = (promiseResult) => {
                let nextResolveData = onFulFill(promiseResult)
                if (nextResolveData instanceof MyPromise) {
                    nextResolveData.then((data) => {
                        res(data)
                    })
                } else {
                    res(nextResolveData)
                }

            }
            this.onRejectFn = (promiseResult) => {
                let nextRejectData = onReject(promiseResult)
                if (nextRejectData instanceof MyPromise) {
                    nextRejectData.then((data) => {
                        res(data)
                    })
                } else {
                    rej(nextRejectData)
                }
            }
        })
    }
}

// const myPromise = new MyPromise((resolve, reject) => {
//     console.log('create Promise')
//     setTimeout(() => {
//         console.log('resolve Promise')
//         resolve(5);
//         console.log(myPromise)
//     }, 3000);
// });
// console.log(myPromise)


// myPromise
//     .then(
//         (resolveData) => {
//             console.log("resolveData", resolveData);
//             return new MyPromise((res, rej) => {
//                 setTimeout(() => {
//                     res("APICALL data")
//                 }, 2000)
//             })
//         },
//         (rejectData) => { console.log("rejectData", rejectData) }
//     )
//     .then((resolveData2) => { console.log("resolveData2", resolveData2) },
//         (rejectData2) => { console.log("rejectData2", rejectData2) })

// myPromise
//     .then(handleResolvedA, handleRejectedA)
//     .then(handleResolvedB, handleRejectedB)
//     .then(handleResolvedC, handleRejectedC);


// let result2 = []
// function fetchUserDataWithPromise() {
//     return new MyPromise((res, rej) => {
//         setTimeout(() => {
//             const result = [{ name: 'b', age: 18 }, { name: 'a', age: 18 }]
//             res(result)
//         }, 1000)
//     })
// }
// function fetchCompanyDataWithPromise() {
//     return new MyPromise((res, rej) => {
//         setTimeout(() => {
//             result = [{ companyName: 'google', address: "sdfs" }, { companyName: 'meta', address: "dsfsdf" }]
//             res(result)
//         }, 2000)
//     })
// }

// fetchUserDataWithPromise()
//     .then((userData) => {
//         console.log("user", userData);
//         return fetchCompanyDataWithPromise()
//     })
//     .then(companyData => {
//         console.log("companyData", companyData);
//         return fetchUserDataWithPromise()
//     })
//     .then((userData) => {
//         console.log("user", userData);
//         return fetchCompanyDataWithPromise()
//     })
//     .then((companyData) => {
//         console.log("companyData", companyData);
//         return fetchCompanyDataWithPromise()
//     });

// const result1 = fetch('https://jsonplaceholder.typicode.com/todos/1');

// result1
//     .then(response => {
//         let jsonData = response.json()
//         console.log(jsonData)
//         return jsonData
//     })
//     .then(json => console.log(json))

// XHRHttpRequest