import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteCompression from "vite-plugin-compression";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(), // gzip压缩 生产环境生成 .gz 文件
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: "gzip",
			ext: ".gz",
		}),
		styleImport({
			libs: [
				{
					libraryName: "vant",
					esModule: true,
					resolveStyle: (name) => `vant/es/${name}/style/index`,
				},
			],
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/style/main.scss";',
			},
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
		open: true,
		https: false,
		proxy: {},
	},
	// 生产环境打包配置
	// 去除 console debugger
	build: {
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
});
