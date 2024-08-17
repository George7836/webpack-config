import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
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
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    },
    {
      test: /\.svg$/i,
      resourceQuery: { not: [/url/] },
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }, 
    {
      test: /\.(ts|tsx)?$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        target: 'es2015',
        sourcemap: isProd ? false : 'inline',
      },
      exclude: /node_modules/,
    }
  ]
}