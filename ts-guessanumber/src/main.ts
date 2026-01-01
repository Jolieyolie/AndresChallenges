import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="text-3xl font-bold underline text-blue-500">
      Hello from TypeScript!
    </h1>
    <p class="mt-4 text-gray-600">
      Tailwind CSS is working!
    </p>
  </div>
`
