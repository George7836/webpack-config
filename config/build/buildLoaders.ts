import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isProd = options.mode === "production";
  const isDev = options.mode === 'development';

  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        isProd ? MiniCssExtractPlugin.loader : "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName:  isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
          },
        },
        "sass-loader",
      ],
    },
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ]
}