import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";
import { EsbuildPlugin } from "esbuild-loader";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";

  return {
    mode: options.mode ?? "production",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev && "inline-source-map",
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: {
      minimizer: [
        new EsbuildPlugin({
          target: "es2015",
        }),
      ],
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module: any) {
              const packageName =
                module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) ??
                "package";
              return `npm.${packageName[1].replace("@", "")}`;
            },
          },
        },
      },
      moduleIds: "deterministic",
    },
  };
}
