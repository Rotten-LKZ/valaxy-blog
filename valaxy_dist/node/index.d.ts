import * as vite from 'vite';
import { InlineConfig } from 'vite';
import { V as ValaxyConfig } from '../config-cec39758.js';
import 'type-fest';
import 'unocss/vite';
import 'markdown-it';
import 'shiki';
import 'markdown-it-anchor';
import 'katex';

interface ResolvedValaxyOptions {
    mode: 'dev' | 'build';
    /**
     * Client root path
     * @default 'valaxy/src/client'
     */
    clientRoot: string;
    /**
     * User root path
     * @default process.cwd()
     */
    userRoot: string;
    /**
     * Theme root path
     */
    themeRoot: string;
    /**
     * Theme name
     */
    theme: string;
    /**
     * Valaxy Config
     */
    config: ValaxyConfig;
    /**
     * config file path
     */
    configFile: string;
    pages: string[];
}
interface ValaxyServerOptions {
    onConfigReload?: (newConfig: ValaxyConfig, config: ValaxyConfig) => void;
}

declare function createServer(options: ResolvedValaxyOptions, viteConfig?: InlineConfig, serverOptions?: ValaxyServerOptions): Promise<vite.ViteDevServer>;

export { createServer };
