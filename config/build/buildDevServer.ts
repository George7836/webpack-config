import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

const BACKEND_URL = process.env.BACKEND_URL ?? 'https://api.github.com'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: BACKEND_URL,
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}, 
      }
    }
  }
}