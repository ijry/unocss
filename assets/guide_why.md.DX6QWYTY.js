import{_ as a,c as e,o as i,ac as t}from"./chunks/framework.CXa1SYzb.js";const C=JSON.parse('{"title":"为什么选择 UnoCSS？","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/why.md","filePath":"guide/why.md","lastUpdated":1724550119000}'),r={name:"guide/why.md"},n=t('<h1 id="为什么选择-unocss" tabindex="-1">为什么选择 UnoCSS？ <a class="header-anchor" href="#为什么选择-unocss" aria-label="Permalink to &quot;为什么选择 UnoCSS？&quot;">​</a></h1><h2 id="动机" tabindex="-1">动机 <a class="header-anchor" href="#动机" aria-label="Permalink to &quot;动机&quot;">​</a></h2><p>我们建议你阅读由 UnoCSS 创建者 <a href="https://antfu.me/" target="_blank" rel="noreferrer">Anthony Fu</a> 撰写的博客文章 <a href="https://antfu.me/posts/reimagine-atomic-css" target="_blank" rel="noreferrer">重新想象原子 CSS</a>，以更好地理解 UnoCSS 背后的动机。</p><h2 id="unocss-与其他工具的不同之处是什么" tabindex="-1">UnoCSS 与其他工具的不同之处是什么？ <a class="header-anchor" href="#unocss-与其他工具的不同之处是什么" aria-label="Permalink to &quot;UnoCSS 与其他工具的不同之处是什么？&quot;">​</a></h2><h3 id="windi-css" tabindex="-1">Windi CSS <a class="header-anchor" href="#windi-css" aria-label="Permalink to &quot;Windi CSS&quot;">​</a></h3><p>UnoCSS 是由 <a href="https://windicss.org/" target="_blank" rel="noreferrer">Windi CSS</a> 团队的一员发起的，从我们在 Windi CSS 中的工作获得了很多灵感。虽然 Windi CSS 自 2023 年 3 月起不再积极维护，但你可以将 UnoCSS 视为 Windi CSS 的 <em>&quot;精神继承者&quot;</em>。</p><p>UnoCSS 继承了 Windi CSS 的按需特性、<a href="/presets/attributify">属性化模式</a>、<a href="/config/shortcuts">快捷方式</a>、<a href="/transformers/variant-group">变体组</a>、<a href="/transformers/compile-class">编译模式</a>等多种特性。此外，UnoCSS 从一开始就以最大的可扩展性和性能为目标构建，使我们能够引入如 <a href="/presets/icons">纯 CSS 图标</a>、<a href="/presets/attributify#valueless-attributify">无值属性化</a>、<a href="/presets/tagify">标签化</a>、<a href="/presets/web-fonts">网络字体</a> 等新功能。</p><p>最重要的是，UnoCSS 被提取为一个原子 CSS 引擎，所有功能都是可选的，这使得创建自己的规范、自己的设计系统和自己的预设变得容易——通过你想要的功能组合实现。</p><h3 id="tailwind-css" tabindex="-1">Tailwind CSS <a class="header-anchor" href="#tailwind-css" aria-label="Permalink to &quot;Tailwind CSS&quot;">​</a></h3><p>Windi CSS 和 UnoCSS 都从 <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a> 获得了很多灵感。由于 UnoCSS 是从零开始构建的，我们能够很好地概览原子 CSS 的设计，并将其抽象成一个优雅而强大的 API。虽然与 Tailwind CSS 的设计目标不同，这并不是一种简单的比较。但我们将尝试列出一些差异。</p><p>Tailwind CSS 是一个 PostCSS 插件，而 UnoCSS 是一个同构引擎，配有与构建工具的一流集成（包括一个 <a href="/integrations/postcss">PostCSS 插件</a>）。这意味着 UnoCSS 可以更灵活地用于不同的场景（例如，<a href="/integrations/runtime">CDN 运行时</a>，可以即时生成 CSS），并且与构建工具有深度集成，以提供更好的 HMR、性能和开发者体验（例如，<a href="/tools/inspector">检查器</a>）。</p><p>技术折衷考虑外，UnoCSS 也被设计为完全可扩展和可定制的，而 Tailwind CSS 则更具有固定意见。在 Tailwind CSS 上构建自定义设计系统（或设计令牌）可能很困难，你不能真正摆脱 Tailwind CSS 的约定。而使用 UnoCSS，你几乎可以完全控制构建你想要的任何东西。例如，我们在<a href="/presets/wind">一个单独的预设</a>中实现了完全兼容 Tailwind CSS 的实用程序，并且有很多<a href="/presets/community">出色的社区预设</a>实现了其他有趣的理念。</p><p>由于 UnoCSS 提供的灵活性，我们能够在其基础上试验许多创新功能，例如：</p><ul><li><a href="/presets/icons">纯 CSS 图标</a></li><li><a href="/presets/attributify">属性化模式</a></li><li><a href="/transformers/variant-group">变体组</a></li><li><a href="/config/shortcuts">快捷方式</a></li><li><a href="/presets/tagify">标签化</a></li><li><a href="/presets/web-fonts">网络字体</a></li><li><a href="/integrations/runtime">CDN 运行时</a></li><li><a href="/tools/inspector">检查器</a></li></ul><p>由于与 Tailwind CSS 的设计目标不同，UnoCSS 不支持 Tailwind CSS 的插件系统或配置，这可能使从高度定制的 Tailwind CSS 项目迁移变得更加困难。这是为了使 UnoCSS 高性能和可扩展而做出的有意决策，我们认为这种折衷是值得的。</p>',15),s=[n];function o(S,l,h,d,f,c){return i(),e("div",null,s)}const u=a(r,[["render",o]]);export{C as __pageData,u as default};
