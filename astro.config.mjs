// Arquivo: astro.config.mjs (VERSÃO CORRETA)
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  site: 'https://statuesque-khapse-6a57a2.netlify.app/',
  integrations: [icon()] // Apenas a integração de ícones
});