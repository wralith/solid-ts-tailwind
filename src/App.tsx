import { type Component, createSignal } from "solid-js"

import logo from "./logo.svg"

const App: Component = () => {
  const [dark, setDark] = createSignal(true)

  return (
    <div class={`text-center ${dark() && "dark"}`}>
      <header class="flex min-h-screen items-center justify-center bg-blue-100 text-black transition-all dark:bg-slate-900 dark:text-white">
        <div class="group flex flex-col items-center gap-2 p-8">
          <img src={logo} class="h-[30vmin] animate-bounce group-hover:animate-bounce-faster " alt="logo" />
          <p>
            Edit <code class="text-sm text-[#364090] dark:text-[#8bbee9]">src/App.tsx</code> and save to reload.
          </p>
          <a
            class="text-[#364090] underline dark:text-[#8bbee9]"
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
          <button class="items-center rounded-lg bg-[#8bbee9] p-4 text-sm dark:bg-[#364090]" onClick={() => setDark(!dark())}>
            {dark() ? "☀️" : "🌕"}
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
