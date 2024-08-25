import{_ as s,c as i,o as a,ac as n}from"./chunks/framework.CXa1SYzb.js";const y=JSON.parse('{"title":"预设样式","description":"你可以从配置中注入原始的 CSS 作为预设样式。解析后的主题可用于自定义 CSS。","frontmatter":{"title":"预设样式","description":"你可以从配置中注入原始的 CSS 作为预设样式。解析后的主题可用于自定义 CSS。"},"headers":[],"relativePath":"config/preflights.md","filePath":"config/preflights.md","lastUpdated":1724550119000}'),t={name:"config/preflights.md"},h=n(`<h1 id="预设样式" tabindex="-1">预设样式 <a class="header-anchor" href="#预设样式" aria-label="Permalink to &quot;预设样式&quot;">​</a></h1><p>你可以从配置中注入原始的 CSS 作为预设样式。解析后的 <code>theme</code> 可用于自定义 CSS。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">preflights</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        getCSS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: ({ </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }) =&gt; </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      * {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        color: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">colors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">gray</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">?.[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">700</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ??</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#333</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        padding: 0;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        margin: 0;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      }</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    \`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre></div>`,3),l=[h];function e(p,k,r,d,g,c){return a(),i("div",null,l)}const C=s(t,[["render",e]]);export{y as __pageData,C as default};
