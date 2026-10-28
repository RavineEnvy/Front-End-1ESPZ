import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Habilita JSX automático e atualização de componentes React no navegador.
export default defineConfig({
  plugins: [react()],
});
