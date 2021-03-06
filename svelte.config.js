import { mdsvex } from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { resolve } from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: true
    }),
    mdsvex({
      extensions: ['.svx', '.md'],
      smartypants: {
        dashes: 'oldschool'
      }
    })
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      resolve: {
         alias: {
           $data: resolve('./src/data'),
         }
      }
    }
  }
}

export default config
