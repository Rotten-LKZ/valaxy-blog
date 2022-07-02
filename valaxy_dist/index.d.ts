import * as vue from 'vue';
import { InjectionKey, ComputedRef, Ref, StyleValue } from 'vue';
import { V as ValaxyConfig, a as ValaxyThemeConfig, U as UserConfig } from './config-cec39758.js';
export { A as AlgoliaSearchOptions, S as SocialLink, U as UserConfig, V as ValaxyConfig, a as ValaxyThemeConfig } from './config-cec39758.js';
import * as valaxy_theme_yun from 'valaxy-theme-yun';
import { ThemeConfig, YunTheme } from 'valaxy-theme-yun';
import * as type_fest_source_partial_deep from 'type-fest/source/partial-deep';
import 'type-fest';
import 'unocss/vite';
import 'markdown-it';
import 'shiki';
import 'markdown-it-anchor';
import 'katex';

interface Post extends Record<string, any> {
    /**
     * Path of post
     * route.path
     * @description 路径
     */
    path?: string;
    /**
     * Title
     * @description 文章标题
     */
    title?: string;
    date?: string | number | Date;
    /**
     * Updated Time
     */
    updated?: string | number | Date;
    lang?: string;
    /**
     * TODO
     * Read Time
     * @description 阅读时长
     */
    duration?: string;
    /**
     * post card type, can be bilibili/yuque/...
     */
    type?: string;
    /**
     * override url, and jump directly
     */
    url?: string;
    /**
     * @description 摘要
     */
    excerpt?: string;
    /**
     * Display sponsor info
     * @description 是否开启赞助
     */
    sponsor?: boolean;
    /**
     * Copyright
     * @description 是否显示文章底部版权信息
     */
    copyright?: boolean;
    /**
     * Category
     * @description 分类，若为数组，则按顺序代表多层文件夹
     */
    categories?: string | string[];
    /**
     * Tags
     * @description 标签，可以有多个
     */
    tags?: string[];
    /**
     * display prev next
     * @description 是否显示前一篇、后一篇导航
     */
    nav?: boolean;
    /**
     * icon before title
     */
    icon?: string;
    /**
     * title color
     */
    color?: string;
    /**
     * display comment
     */
    comment?: boolean;
    /**
     * post is end
     * @description 是否完结，将在末尾添加衬线字体 Q.E.D.
     */
    end?: boolean;
    /**
     * use aplayer
     */
    aplayer?: boolean;
    /**
     * use katex
     */
    katex?: boolean;
    /**
     * use codepen
     */
    codepen?: boolean;
    /**
     * 置顶
     */
    top?: number;
    /**
     * display toc
     * @description 是否显示目录
     */
    toc?: boolean;
    /**
     * is draft
     * @description 是否为草稿
     */
    draft?: boolean;
    /**
     * cover
     * @description 封面图片
     */
    cover?: string;
    /**
     * enable markdown-body class
     * @description 是否启用默认的 markdown 样式
     */
    markdown?: boolean;
}

interface Header {
    level: number;
    title: string;
    slug: string;
    /**
     * i18n
     */
    lang?: string;
}
interface PageData {
    path: string;
    relativePath: string;
    title: string;
    titleTemplate?: string;
    description: string;
    headers: Header[];
    frontmatter: Post;
    lastUpdated?: number;
}
interface PageDataPayload {
    path: string;
    pageData: PageData;
}
declare type HeadConfig = [string, Record<string, string>] | [string, Record<string, string>, string];

interface ValaxyContext {
    userRoot: string;
}
declare const valaxyConfigSymbol: InjectionKey<ComputedRef<ValaxyConfig<ThemeConfig>>>;
declare const valaxyConfigRef: vue.ShallowRef<ValaxyConfig<ValaxyThemeConfig>>;
declare const valaxyContextRef: vue.ShallowRef<ValaxyContext>;
declare function initConfig(): ComputedRef<ValaxyConfig<ValaxyThemeConfig>>;
declare function initContext(): ComputedRef<ValaxyContext>;
declare function useConfig(): ComputedRef<ValaxyConfig<ThemeConfig>>;
/**
 * getThemeConfig
 * @returns
 */
declare function useThemeConfig(): ComputedRef<ThemeConfig & {
    pkg: {
        [key: string]: any;
        name: string;
        version: string;
        homepage?: string | undefined;
    };
}>;
interface ValaxyData<T = any> {
    page: Ref<PageData>;
    theme: Ref<T>;
}

interface BaseCategory {
    total: number;
}
interface ParentCategory extends BaseCategory {
    children: Categories;
}
interface PostCategory extends BaseCategory {
    posts: Post[];
}
declare type Category = ParentCategory | PostCategory;
declare type Categories = Map<string, Category>;
declare const isParentCategory: (category: any) => category is ParentCategory;
/**
 * get categories from posts
 * @returns
 */
declare function useCategory(category?: string, posts?: Post[]): ParentCategory;

declare const usePostTitle: (post: Ref<Post>) => vue.ComputedRef<any>;
/**
 * get post list
 * todo: use vue provide/inject to global
 * @param params
 * @returns
 */
declare function usePostList(params?: {
    type?: string;
}): vue.ComputedRef<Post[]>;
/**
 * get all page
 * @returns
 */
declare function usePageList(): vue.ComputedRef<({
    path: string;
    excerpt: unknown;
} & Post)[]>;
/**
 * get prev and next post
 * @param path
 * @returns
 */
declare function usePrevNext(path?: string): vue.ComputedRef<Post | null>[];
/**
 * get type card property
 * todo: test reactive
 */
declare function usePostProperty(type?: string): {
    color: string;
    icon: string;
    styles: {};
} | {
    color: string;
    icon: string;
    styles: vue.ComputedRef<StyleValue>;
};

declare type Tags = Map<string, {
    count: number;
}>;
/**
 * get utils about tags
 */
declare function useTags(options?: {
    /**
     * Primary Color
     */
    primary: string;
}): {
    tags: Tags;
    getTagStyle: (count: number) => {
        '--yun-tag-color': string;
        fontSize: string;
    };
};
/**
 * get tag map
 * @returns
 */
declare function useTag(): Tags;

declare function useFrontmatter(): vue.ComputedRef<Post>;
/**
 * get full url
 */
declare function useFullUrl(): vue.ComputedRef<string>;

/**
 * trigger show invisible element
 * @param target
 * @returns
 */
declare function useInvisibleElement(target: Ref<HTMLElement>): {
    show: () => void;
};

declare const isDark: vue.WritableComputedRef<boolean>;
declare const toggleDark: (value?: boolean | undefined) => boolean;

declare function useLayout(layout: string): vue.ComputedRef<boolean>;

/**
 * use MetingJS and Aplayer
 * https://github.com/MoePlayer/APlayer
 * https://github.com/metowolf/MetingJS
 */
declare function useAplayer(): void;

/**
 * You can use href="#" to back to top
 * @description 你可以使用它来编写自己的 backToTop
 */
declare function useBackToTop(options?: {
    /**
     * show backToTop button, when height > offset
     */
    offset: number;
}): {
    percentage: vue.Ref<number>;
    show: vue.Ref<boolean>;
} | {
    percentage: vue.ComputedRef<number>;
    show: vue.ComputedRef<boolean>;
};

declare function useCodePen(): void;

declare function useSidebar(): {
    isOpen: Ref<boolean>;
    sidebar: vue.ComputedRef<any>;
    hasSidebar: vue.ComputedRef<boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
declare function useActiveSidebarLinks(container: Ref<HTMLElement>, marker: Ref<HTMLElement>): void;

declare function useTwikoo(options?: {}): void;

declare function useWaline(options?: {}): any;

/**
 * 生成介于 min 与 max 之间的随机数
 * @returns
 */
declare function random(min: number, max: number): number;
/**
 * wrap node
 * @param className
 */
declare function wrap(el: HTMLElement, className: string): void;
/**
 * 包裹表格，添加 class 以控制 table 样式
 */
declare const wrapTable: (container?: HTMLElement | Document) => void;
declare function throttleAndDebounce(fn: () => void, delay: number): () => void;

/**
 * use dayjs format date
 * @param date
 * @param template
 * @returns
 */
declare function formatDate(date: string | number | Date, template?: string): string;
/**
 * sort posts by date
 * @param posts
 * @param desc
 */
declare function sortByDate(posts: Post[], desc?: boolean): Post[];

/**
 * Type config helper
 */
declare function defineConfig(config: UserConfig<YunTheme.Config>): type_fest_source_partial_deep.PartialObjectDeep<ValaxyConfig<valaxy_theme_yun.ThemeConfig>>;
/**
 * Type config helper for custom theme config
 */
declare function defineConfigWithTheme<ThemeConfig>(config: UserConfig<ThemeConfig>): type_fest_source_partial_deep.PartialObjectDeep<ValaxyConfig<ThemeConfig>>;

export { BaseCategory, Categories, Category, HeadConfig, Header, PageData, PageDataPayload, ParentCategory, Post, PostCategory, Tags, ValaxyData, defineConfig, defineConfigWithTheme, formatDate, initConfig, initContext, isDark, isParentCategory, random, sortByDate, throttleAndDebounce, toggleDark, useActiveSidebarLinks, useAplayer, useBackToTop, useCategory, useCodePen, useConfig, useFrontmatter, useFullUrl, useInvisibleElement, useLayout, usePageList, usePostList, usePostProperty, usePostTitle, usePrevNext, useSidebar, useTag, useTags, useThemeConfig, useTwikoo, useWaline, valaxyConfigRef, valaxyConfigSymbol, valaxyContextRef, wrap, wrapTable };
