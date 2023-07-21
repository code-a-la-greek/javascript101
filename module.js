export function greeting(name) {
  console.log(`Hello ${name}`);
  document.querySelector("p").innerText = `Hello ${name}`;
}
