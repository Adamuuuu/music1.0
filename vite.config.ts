import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: [
   { find: '@', replacement: resolve(__dirname, 'src') },
   { find: '_c', replacement: resolve(__dirname, 'src/components') },
   { find: '_v', replacement: resolve(__dirname, 'src/views') },
    ]
 },

})
