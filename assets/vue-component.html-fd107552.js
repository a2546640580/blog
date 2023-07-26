import{_ as e,o as t,c as p,e as a,a as n,b as s}from"./app-9f26182c.js";const o={},l=a(`<h2 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h2><h3 id="组件名" tabindex="-1"><a class="header-anchor" href="#组件名" aria-hidden="true">#</a> 组件名</h3><ul><li>命名规范：字母全小写且必须包含一个连字符</li><li>使用 <code>kebab-case</code> 定义组件时引用时也必须使用 <code>kebab-case</code></li><li>使用 <code>PascalCase</code> 定义组件时引用时两种命名法都可以使用。</li></ul><h3 id="全局注册" tabindex="-1"><a class="header-anchor" href="#全局注册" aria-hidden="true">#</a> 全局注册</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component-name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 选项 ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部注册" tabindex="-1"><a class="header-anchor" href="#局部注册" aria-hidden="true">#</a> 局部注册</h3><ol><li>定义组件</li><li>在components选项中引入组件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> ComponentA <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;component-a&#39;</span><span class="token operator">:</span> ComponentA
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块系统" tabindex="-1"><a class="header-anchor" href="#模块系统" aria-hidden="true">#</a> 模块系统</h3><h4 id="在模块系统中局部注册" tabindex="-1"><a class="header-anchor" href="#在模块系统中局部注册" aria-hidden="true">#</a> 在模块系统中局部注册</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ComponentA <span class="token keyword">from</span> <span class="token string">&#39;./ComponentA&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ComponentA
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基础组件的自动化全局注册" tabindex="-1"><a class="header-anchor" href="#基础组件的自动化全局注册" aria-hidden="true">#</a> 基础组件的自动化全局注册</h4><ol><li>使用<code>require.context()</code>获取文件基础组件</li><li>遍历注册获得的基础组件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> upperFirst <span class="token keyword">from</span> <span class="token string">&#39;lodash/upperFirst&#39;</span>
<span class="token keyword">import</span> camelCase <span class="token keyword">from</span> <span class="token string">&#39;lodash/camelCase&#39;</span>

<span class="token keyword">const</span> requireComponent <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span>
  <span class="token comment">// 其组件目录的相对路径</span>
  <span class="token string">&#39;./components&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否查询其子目录</span>
  <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 匹配基础组件文件名的正则表达式</span>
  <span class="token operator">/</span>Base<span class="token punctuation">[</span><span class="token constant">A</span><span class="token operator">-</span><span class="token constant">Z</span><span class="token punctuation">]</span>\\w<span class="token operator">+</span>\\<span class="token punctuation">.</span><span class="token punctuation">(</span>vue<span class="token operator">|</span>js<span class="token punctuation">)</span>$<span class="token operator">/</span>
<span class="token punctuation">)</span>

requireComponent<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fileName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取组件配置</span>
  <span class="token keyword">const</span> componentConfig <span class="token operator">=</span> <span class="token function">requireComponent</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>

  <span class="token comment">// 获取组件的 PascalCase 命名</span>
  <span class="token keyword">const</span> componentName <span class="token operator">=</span> <span class="token function">upperFirst</span><span class="token punctuation">(</span>
    <span class="token function">camelCase</span><span class="token punctuation">(</span>
      <span class="token comment">// 获取和目录深度无关的文件名</span>
      fileName
        <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token comment">// 全局注册组件</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>
    componentName<span class="token punctuation">,</span>
    <span class="token comment">// 如果这个组件选项是通过 \`export default\` 导出的，</span>
    <span class="token comment">// 那么就会优先使用 \`.default\`，</span>
    <span class="token comment">// 否则回退到使用模块的根。</span>
    componentConfig<span class="token punctuation">.</span>default <span class="token operator">||</span> componentConfig
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prop" tabindex="-1"><a class="header-anchor" href="#prop" aria-hidden="true">#</a> Prop</h2>`,15),c=n("ul",null,[n("li",null,[s("Prop的大小写: 使用DOM中的模板时"),n("code",null,"camelCase"),s("的 prop 名需要使用其等价的"),n("code",null,"kebab-case"),s("命名")]),n("li",null,[s("Prop的类型: props属性可以是字符串数组，也可以以对象的形式来指定prop的类型"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 字符串数组"),s(`
`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'likes'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'isPublished'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'commentIds'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'author'"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token comment"},"// 对象"),s(`
`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"likes"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"isPublished"),n("span",{class:"token operator"},":"),s(" Boolean"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"commentIds"),n("span",{class:"token operator"},":"),s(" Array"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"author"),n("span",{class:"token operator"},":"),s(" Object"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"callback"),n("span",{class:"token operator"},":"),s(" Function"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"contactsPromise"),n("span",{class:"token operator"},":"),s(" Promise "),n("span",{class:"token comment"},"// or any other constructor"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,"单向数据流: 父组件更新时子组件中的prop也会随之更新, 但在子组件中无法直接更新prop的值"),n("li",null,[s("Prop验证: "),n("code",null,"props"),s("属性可以接受一个带有验证需求的对象"),n("br"),s(" type支持"),n("code",null,"String、Number、Boolean、Array、Object、Date、Function、Symbol"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)"),s(`
  `),n("span",{class:"token literal-property property"},"propA"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 多个可能的类型"),s(`
  `),n("span",{class:"token literal-property property"},"propB"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("String"),n("span",{class:"token punctuation"},","),s(" Number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 必填的字符串"),s(`
  `),n("span",{class:"token literal-property property"},"propC"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 带有默认值的数字"),s(`
  `),n("span",{class:"token literal-property property"},"propD"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 带有默认值的对象"),s(`
  `),n("span",{class:"token literal-property property"},"propE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Object"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 对象或数组默认值必须从一个工厂函数获取"),s(`
    `),n("span",{class:"token function-variable function"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hello'"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 自定义验证函数"),s(`
  `),n("span",{class:"token literal-property property"},"propF"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 这个值必须匹配下列字符串中的一个"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"prop 会在一个组件实例创建之前进行验证，所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。")])])],-1),i=a(`<h2 id="非prop的attribute" tabindex="-1"><a class="header-anchor" href="#非prop的attribute" aria-hidden="true">#</a> 非Prop的Attribute</h2><ul><li>介绍：一个非 <code>prop</code> 的 <code>attribute</code> 是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute。</li><li>替换：对于绝大多数 attribute 来说，从外部提供给组件的值会替换掉组件内部设置好的值。</li><li>合并：对于 <code>class</code> 和 <code>style</code> 来说，外部的值会和组件内部的值合并</li><li>禁用：在组件的选项中设置 <code>inheritAttrs: false</code>来禁止组件的根元素继承 attribute 配合实例的 $attrs 属性使用, 可以手动决定这些 attribute 会被赋予哪个元素<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;base-input&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;label&gt;
      {{ label }}
      &lt;input
        v-bind=&quot;$attrs&quot;
        v-bind:value=&quot;value&quot;
        v-on:input=&quot;$emit(&#39;input&#39;, $event.target.value)&quot;
      &gt;
    &lt;/label&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),r=[l,c,i];function u(d,k){return t(),p("div",null,r)}const v=e(o,[["render",u],["__file","vue-component.html.vue"]]);export{v as default};
