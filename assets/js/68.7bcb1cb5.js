(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{523:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-通过context获取代理对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过context获取代理对象"}},[a._v("#")]),a._v(" 1.通过Context获取代理对象")]),a._v(" "),t("p",[a._v("获取DreamManager对象的这两种方式有以下区别:1. 通过Context获取的是DreamManager的代理对象")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DreamManager")]),a._v(" dreamManager "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mApplication"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getSystemService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DreamManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这种方式是通过Context的getSystemService()获取DreamManager。由于DreamManager本身是一个接口,Context返回的是其代理对象StubDreamManager,用于跨进程调用真正的DreamManager服务。")]),a._v(" "),t("h2",{attrs:{id:"_2-通过servicemanager获取的是aidl接口对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过servicemanager获取的是aidl接口对象"}},[a._v("#")]),a._v(" 2. 通过ServiceManager获取的是AIDL接口对象")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IDreamManager")]),a._v(" iDreamManager "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IDreamManager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Stub")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("asInterface")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DreamService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DREAM_SERVICE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这种方式是通过ServiceManager直接获取DreamService的Binder接口对象。IDreamManager.Stub是DreamService的AIDL接口,asInterface()可以将Binder对象转成接口对象。")]),a._v(" "),t("h2",{attrs:{id:"_3-两种方式的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-两种方式的区别"}},[a._v("#")]),a._v(" 3.两种方式的区别")]),a._v(" "),t("p",[a._v("第一种方式获取的是本地代理,可以直接调用接口方法。第二种方式获取的是远程接口,需要跨进程调用。")]),a._v(" "),t("p",[a._v("第一种方式依赖Context,需要先获取Context。第二种方式直接通过ServiceManager获取Binder接口。")]),a._v(" "),t("p",[a._v("一般来说,在客户端通过Context获取DreamManager较为常见。在服务端获取DreamService接口则更灵活。所以这两种方式获取的对象不同,适合的使用场景也不同,一般取决于是否需要跨进程和是否有Context。")])])}),[],!1,null,null,null);t.default=n.exports}}]);