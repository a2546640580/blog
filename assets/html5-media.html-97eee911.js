import{_ as a,o as n,c as s,e as t}from"./app-a8bec4e8.js";const e={},p=t(`<h2 id="audio标签" tabindex="-1"><a class="header-anchor" href="#audio标签" aria-hidden="true">#</a> audio标签</h2><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><ul><li>src : 音频的地址</li><li>controls : 显示控制栏</li><li>autoplay : 自动播放</li><li>loop : 设置循环播放</li><li>preload : (auto/metadata/none) 规定当网页加载时，音频是否默认被加载以及如何被加载。</li></ul><h3 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h3><p><strong>source:</strong> 指定多个音频,如果找到了当前浏览器支持的,那么会直接使用,如果所有的source标签格式都不支持,会显示最后的文本内容</p><p><code>&lt;audio&gt;</code> 元素支持三种音频格式文件: MP3, Wav, 和 Ogg</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trailer.mp3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/mpeg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trailer.ogg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/ogg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trailer.wav<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/wav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  你的浏览器不支持audio标签
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="video标签" tabindex="-1"><a class="header-anchor" href="#video标签" aria-hidden="true">#</a> video标签</h2><h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3><ul><li>controls : 显示控制栏</li><li>autoplay : 自动播放</li><li>loop : 设置循环播放</li><li>width : 宽度</li><li>height : 高度</li><li>poster : 指定视频不播放时显示的封面</li><li>preload : (auto/metadata/none) 在页面加载时预加载视频如果使用autoplay请忽略该属性</li><li>muted : 静音视频</li></ul><h3 id="兼容-1" tabindex="-1"><a class="header-anchor" href="#兼容-1" aria-hidden="true">#</a> 兼容</h3><p><strong>source:</strong> 指定多个视频,如果找到了当前浏览器支持的,那么会直接使用,如果所有的source标签格式都不支持,会显示最后的文本内容</p><p><code>&lt;video&gt;</code> 元素支持三种视频格式文件: MP4, WebM, 和 Ogg</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trailer.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trailer.ogg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/ogg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trailer.WebM<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/WebM<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  你的浏览器不支持video标签
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function l(c,u){return n(),s("div",null,o)}const r=a(e,[["render",l],["__file","html5-media.html.vue"]]);export{r as default};