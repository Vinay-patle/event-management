import reactPlugin from '@vitejs/plugin-react';

export default {
  plugins: [reactPlugin()],
  build: {
    rollupOptions: {
      external: ['react-icons']
    }
  }
}