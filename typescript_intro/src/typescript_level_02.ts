// let price: number;
// let quantity: number;
// let tax: number;
// let name: string;
// let greeting: string | undefined;
// let age: number | undefined;
// let email: string;
function calculateTotal(price: number, quantity: number, tax: number): number {
  return price * quantity * (1 + tax);
}

function greetUser(name: string, greeting?: string | null): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

function createUser(name: string, age: number, email: string) {
  return {
    name: name,
    age: age || 18,
    email: email,
  };
}

console.log(calculateTotal(10, 3, 0.1));
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Good morning"));
console.log(createUser("Charlie", 25, "charlie@example.com"));
