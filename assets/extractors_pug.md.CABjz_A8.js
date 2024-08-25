import{_ as s,c as i,o as a,ac as t}from"./chunks/framework.CXa1SYzb.js";const u=JSON.parse('{"title":"Pug 提取器","description":"UnoCSS 的 Pug 提取器 (@unocss/extractor-pug)","frontmatter":{"title":"Pug 提取器","description":"UnoCSS 的 Pug 提取器 (@unocss/extractor-pug)"},"headers":[],"relativePath":"extractors/pug.md","filePath":"extractors/pug.md","lastUpdated":1724550119000}'),e={name:"extractors/pug.md"},n=t(`<h1 id="pug-提取器" tabindex="-1">Pug 提取器 <a class="header-anchor" href="#pug-提取器" aria-label="Permalink to &quot;Pug 提取器&quot;">​</a></h1><p>支持从 Pug 模板中提取类。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-KtWFL" id="tab-xpkZeam" checked><label for="tab-xpkZeam">pnpm</label><input type="radio" name="group-KtWFL" id="tab-hs0l5dr"><label for="tab-hs0l5dr">yarn</label><input type="radio" name="group-KtWFL" id="tab-lJmAs2v"><label for="tab-lJmAs2v">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-pug</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-pug</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-pug</span></span></code></pre></div></div></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> extractorPug</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/extractor-pug</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  extractors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    extractorPug</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div>`,5),p=[n];function l(h,k,d,r,o,c){return a(),i("div",null,p)}const y=s(e,[["render",l]]);export{u as __pageData,y as default};
