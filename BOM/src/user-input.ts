function greetUser() {
    const username = window.prompt("enter your username");

    if (!username) {
        throw new Error ("No username entered");
    }
    return username;
}

try {
    const name = greetUser();
    console.log(`Hello, ${name}! Welcome`)
} catch (error) {
    console.log("Hello guest! Welcome")
}