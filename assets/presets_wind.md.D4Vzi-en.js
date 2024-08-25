import{_ as s,c as i,o as a,ac as t}from"./chunks/framework.CXa1SYzb.js";const y=JSON.parse('{"title":"Wind 预设","description":"UnoCSS 的 Tailwind CSS / Windi CSS 紧凑预设 (@unocss/preset-wind)。","frontmatter":{"title":"Wind 预设","description":"UnoCSS 的 Tailwind CSS / Windi CSS 紧凑预设 (@unocss/preset-wind)。","outline":"deep"},"headers":[],"relativePath":"presets/wind.md","filePath":"presets/wind.md","lastUpdated":1724550119000}'),e={name:"presets/wind.md"},n=t(`<h1 id="wind-预设" tabindex="-1">Wind 预设 <a class="header-anchor" href="#wind-预设" aria-label="Permalink to &quot;Wind 预设&quot;">​</a></h1><p>UnoCSS 的 Tailwind CSS / Windi CSS 紧凑预设。</p><p><a href="https://github.com/unocss/unocss/tree/main/packages/preset-wind" target="_blank" rel="noreferrer">源代码</a></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该预设继承自 <a href="/presets/mini"><code>@unocss/preset-mini</code></a>。</p></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-dAHWU" id="tab-ElKtB6-" checked><label for="tab-ElKtB6-">pnpm</label><input type="radio" name="group-dAHWU" id="tab-D9yhEo_"><label for="tab-D9yhEo_">yarn</label><input type="radio" name="group-dAHWU" id="tab-wvw3uKR"><label for="tab-wvw3uKR">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/preset-wind</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/preset-wind</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/preset-wind</span></span></code></pre></div></div></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> presetWind</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/preset-wind</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  presets</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    presetWind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>该预设已包含在 <code>unocss</code> 包中，您也可以从那里导入：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> presetWind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span></code></pre></div></div><h2 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h2><p>该预设的主要目标是与 <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a> 和 <a href="https://windicss.org/" target="_blank" rel="noreferrer">Windi CSS</a> 兼容。请注意，无法保证完全兼容性。有关详细用法，请参阅它们的 <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">文档</a>。</p><p>有关此预设中包含的所有规则和预设，请参阅我们的 <a href="/interactive/" target="_blank">交互式文档</a> 或直接转到 <a href="https://github.com/unocss/unocss/tree/main/packages/preset-wind" target="_blank" rel="noreferrer">源代码</a>。</p><h2 id="与-tailwind-css-的差异" tabindex="-1">与 Tailwind CSS 的差异 <a class="header-anchor" href="#与-tailwind-css-的差异" aria-label="Permalink to &quot;与 Tailwind CSS 的差异&quot;">​</a></h2><h3 id="引号" tabindex="-1">引号 <a class="header-anchor" href="#引号" aria-label="Permalink to &quot;引号&quot;">​</a></h3><p>在模板（用于处理的文件）中使用引号是不被支持的，因为这会影响提取器的工作。例如，你不能写 <code>before:content-[&#39;&#39;]</code>。对于这些情况，你可能更倾向于引入一个新的工具类类，比如 <code>class=&quot;before:content-empty&quot;</code>，以便明确设置。</p><h3 id="使用任意值设置背景位置" tabindex="-1">使用任意值设置背景位置 <a class="header-anchor" href="#使用任意值设置背景位置" aria-label="Permalink to &quot;使用任意值设置背景位置&quot;">​</a></h3><p>Tailwind <a href="https://tailwindcss.com/docs/background-position#using-custom-values" target="_blank" rel="noreferrer">允许</a>使用自定义值来设置 <code>background-position</code>，使用裸语法：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bg-[center_top_1rem]</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p>但是，Wind 预设会将 <code>center_top_1rem</code> 解释为一种颜色。要实现相同的效果，请使用 <code>position:</code> 前缀：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bg-[position:center_top_1rem]</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="与-windi-css-的差异" tabindex="-1">与 Windi CSS 的差异 <a class="header-anchor" href="#与-windi-css-的差异" aria-label="Permalink to &quot;与 Windi CSS 的差异&quot;">​</a></h2><h3 id="断点" tabindex="-1">断点 <a class="header-anchor" href="#断点" aria-label="Permalink to &quot;断点&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Windi CSS</th><th style="text-align:left;">UnoCSS</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&lt;sm:p-1</code></td><td style="text-align:left;"><code>lt-sm:p-1</code></td></tr><tr><td style="text-align:left;"><code>@lg:p-1</code></td><td style="text-align:left;"><code>at-lg:p-1</code></td></tr><tr><td style="text-align:left;"><code>&gt;xl:p-1</code></td><td style="text-align:left;"><code>xl:p-1</code></td></tr></tbody></table><h3 id="方括号语法中的空格" tabindex="-1">方括号语法中的空格 <a class="header-anchor" href="#方括号语法中的空格" aria-label="Permalink to &quot;方括号语法中的空格&quot;">​</a></h3><p>该预设使用 <code>_</code> 替换 <code>,</code> 以保留方括号语法中的空格。</p><table tabindex="0"><thead><tr><th style="text-align:left;">Windi CSS</th><th style="text-align:left;">UnoCSS</th></tr></thead><tbody><tr><td style="text-align:left;"><code>grid-cols-[1fr,10px,max-content]</code></td><td style="text-align:left;"><code>grid-cols-[1fr_10px_max-content]</code></td></tr></tbody></table><p>由于某些 CSS 规则需要 <code>,</code> 作为值的一部分，例如 <code>grid-cols-[repeat(3,auto)]</code></p><h2 id="实验性功能" tabindex="-1">实验性功能 <a class="header-anchor" href="#实验性功能" aria-label="Permalink to &quot;实验性功能&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>该预设包含实验性功能，可能随时以破坏性方式更改。</p></div><h3 id="媒体悬停" tabindex="-1">媒体悬停 <a class="header-anchor" href="#媒体悬停" aria-label="Permalink to &quot;媒体悬停&quot;">​</a></h3><p>媒体悬停解决了<a href="https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/" target="_blank" rel="noreferrer">粘滞悬停</a>问题，即在移动设备上点击包含悬停样式的目标后，该悬停样式会持续存在，直到点击其他地方。</p><p>由于常规的 <code>:hover</code> 样式可能被广泛使用，此变体使用 <code>@hover</code> 语法来区分它与常规的 <code>hover</code> 伪类。</p><p>变体 <code>@hover-text-red</code> 将输出：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">media</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> and</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pointer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> fine</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\@</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover-text-red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    --un-text-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">248</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 113</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 113</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> / </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">var</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">--un-text-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该预设选项继承自 <a href="/presets/mini#选项"><code>@unocss/preset-mini</code></a>。</p></div><h3 id="important" tabindex="-1">important <a class="header-anchor" href="#important" aria-label="Permalink to &quot;important&quot;">​</a></h3><ul><li><strong>类型：</strong> <code>boolean | string</code></li><li><strong>默认值：</strong> <code>false</code></li></ul><p><code>important</code> 选项允许您控制是否应该将 UnoCSS 生成的工具标记为 <code>!important</code>。当与具有高特异性选择器的现有 CSS 一起使用 UnoCSS 时，这可能非常有用。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用此选项将使 UnoCSS 生成的所有工具都标记为 <code>!important</code>。如果您只想将其应用于特定的工具，请改用 <code>important:</code> 变体。</p></div><p>但是，将 <code>important</code> 设置为 <code>true</code> 可能会在将第三方 JS 库合并到您的元素中时引入一些问题，这些库会向元素添加内联样式。在这些情况下，UnoCSS 的 <code>!important</code> 工具会覆盖内联样式，这可能会破坏您的预期设计。</p><p>为了解决这个问题，您可以将 important 设置为 ID 选择器，例如 <code>#app</code>：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">  &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> presetWind</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/preset-wind</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  presets</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    presetWind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#app</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>此配置将为所有工具添加给定选择器的前缀，从而有效地增加其特异性，而不会实际使它们变为 <code>!important</code>。</p><p><code>dark:bg-blue</code> 工具将生成以下 CSS：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> :</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">is</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dark</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bg-blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    --un-bg-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">96</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 165</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 250</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> / </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">var</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">--un-bg-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div>`,45),h=[n];function l(p,k,d,r,o,c){return a(),i("div",null,h)}const b=s(e,[["render",l]]);export{y as __pageData,b as default};
