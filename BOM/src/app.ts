type Result = "success" | "error" | "pending";
let currentResult: Result = "success"
function handleResult(result: Result) : void {
    if (result === "success") {
        console.log("Operation completed successfully.")
    } else if (result === "error") {
        console.log("Something went wrong")
    } else if (result === "pending") {
        console.log("The operation is still in progress")
    }
    
}

handleResult("pending")
handleResult(currentResult)