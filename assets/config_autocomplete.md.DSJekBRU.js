import{_ as s,c as i,o as a,ac as n}from"./chunks/framework.CXa1SYzb.js";const c=JSON.parse('{"title":"自动补全","description":"","frontmatter":{},"headers":[],"relativePath":"config/autocomplete.md","filePath":"config/autocomplete.md","lastUpdated":1724550119000}'),h={name:"config/autocomplete.md"},l=n(`<h1 id="自动补全" tabindex="-1">自动补全 <a class="header-anchor" href="#自动补全" aria-label="Permalink to &quot;自动补全&quot;">​</a></h1><p>可以在<a href="/play" target="_blank" rel="noreferrer">娱乐场</a>和<a href="/integrations/vscode">VS Code 扩展</a>中为UnoCSS的智能建议自定义自动补全功能。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">autocomplete</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  templates</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 主题推断</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bg-$color/&lt;opacity&gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 简写</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">text-&lt;font-size&gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 逻辑或组</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">(b|border)-(solid|dashed|dotted|double|hidden|none)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 常量</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">w-half</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  shorthands</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 等同于 \`opacity: &quot;(0|10|20|30|40|50|60|70|90|100)&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">opacity</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">from</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({ </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">11</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">font-size</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 覆盖内置简写</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">num</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">(0|1|2|3|4|5|6|7|8|9)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  extractors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // ...提取器</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><ul><li><p><code>templates</code> 使用简单的DSL来指定自动补全建议。</p></li><li><p><code>shorthands</code> 是一个简写名称到其模板的映射。如果是<code>Array</code>，它将是一个逻辑或组。</p></li><li><p><code>extractors</code> 用于提取可能的类并将类名样式建议转换为正确的格式。例如，你可以查看我们如何实现<a href="https://github.com/unocss/unocss/blob/main/packages/preset-attributify/src/autocomplete.ts" target="_blank" rel="noreferrer">属性化自动补全提取器</a>。</p></li><li><p>有关更多帮助，请参考<a href="/tools/autocomplete">这里</a>。</p></li></ul>`,4),t=[l];function k(p,e,r,d,g,o){return a(),i("div",null,t)}const A=s(h,[["render",k]]);export{c as __pageData,A as default};
