(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{526:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("最近在Android 12上写添加新的.c接口时遇到编译报错的问题，具体报错如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20230518210501743.png",alt:"image-20230518210501743"}})]),s._v(" "),e("h2",{attrs:{id:"一、尝试解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、尝试解决"}},[s._v("#")]),s._v(" 一、尝试解决")]),s._v(" "),e("p",[s._v("开始没认真分析报错的原因，直接在网上找答案了。看了网上的答案，基本上都是下面的答案：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("在Android.mk中添加 LOCAL_LDFLAGS :"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -Wl,--unresolved-symbols"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ignore-all\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然而，加上这句之后，依然还是报同样的错误，似乎他们的解决方法对这个问题不起作用。")]),s._v(" "),e("p",[s._v("这个方法意思是告诉编译器 绕过这些检查，因此如果您尝试使用库中确实不存在的函数，"),e("code",[s._v("ld")]),s._v("就没有机会警告您，一般是不能随便用的。")]),s._v(" "),e("p",[s._v("然后来分析这个报错，它提示 "),e("code",[s._v("undefined symbol")]),s._v("。因此尝试去解决这个报错，通过引用"),e("code",[s._v("system/core/libutils/include")]),s._v("来解决，具体修改如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("LOCAL_C_INCLUDES += \\\n    system/core/libnetutils/include \\\n    system/core/libutils/include \\\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后编译之后，依然报一样的错。")]),s._v(" "),e("p",[e("strong",[s._v("后来，将 "),e("code",[s._v("include $(BUILD_EXECUTABLE)")]),s._v(" 改成 "),e("code",[s._v("include $(BUILD_STATIC_LIBRARY)")]),s._v(" 之后，竟然编译过了。因此，怀疑是 build系统不让通过"),e("code",[s._v("LOCAL_C_INCLUDES")]),s._v("的形式引用。")])]),s._v(" "),e("p",[s._v("虽然已经包含了头文件，但由于编译器找不到要链接的库。不过，由于他们是共享库，因此在构建的时候，并不是严格要求需要拥有这些库。")]),s._v(" "),e("p",[s._v("从Android高版本开始，Android ndk规定了第三方可以使用的稳定的api（可以查看google官方的介绍https://developer.android.google.cn/ndk/guides/stable_apis.html）。一般可以通过在"),e("code",[s._v("Android.mk")]),s._v("中添加以下行来包括：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("LOCAL_LDLIBS :"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --lfoo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("由于使用的库不是稳定api的一部分。这本质上意味着，即使你的代码在某个特定版本的android上工作，它也可能在任何更高版本上中断，因为api可能已经更改了。")]),s._v(" "),e("p",[s._v("由于这些库是共享的，ld所做的只是检查它们是否提供了您正在使用的函数。因此一种方法是提供存根库。")]),s._v(" "),e("p",[s._v("存根库本质上是一个虚拟库，它定义了与“真实”事物相同的符号（函数等），但没有实现（函数只是不做任何事情就返回）。这足以让链接器感到高兴，但这些库并没有提供，它们的“真正”对应项在运行时使用。您需要获取这个库"),e("code",[s._v("libutils")]),s._v("的源代码，它们位于以下目录中：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("system/core/libutils\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("因此修改成如下的形式：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("LOCAL_SHARED_LIBRARIES :"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        libutils "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("还有一种方法是：将"),e("code",[s._v("system/core/libutils")]),s._v(" 目录复制到项目目录下，然后去掉代码：")]),s._v(" "),e("p",[s._v("然后编辑"),e("code",[s._v("Android.mk")]),s._v("，删除"),e("code",[s._v("BUILD_SHARED_LIBRARY")]),s._v("以外的所有生成目标，再编辑源代码文件，用一个简单的"),e("code",[s._v("return")]),s._v(" 替换所有函数体。返回什么并不重要，只是为了能编译代码。"),e("br"),s._v("\n另外，可能需要防止存根库包含在编译出来的bin中。")]),s._v(" "),e("h2",{attrs:{id:"二、最终解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、最终解决"}},[s._v("#")]),s._v(" 二、最终解决")]),s._v(" "),e("p",[s._v("在android.mk文件中添加"),e("code",[s._v("LOCAL_CFLAGS += -DDVB_STANDARD")]),s._v("这个语句,用于为当前模块添加预处理宏定义。")]),s._v(" "),e("p",[s._v("-D选项用来定义预处理宏格式为-Dname或-Dname=definition。所以这个语句定义了一个名为DVB_STANDARD的预处理宏。在C/C++源代码中,可以使用#ifdef来条件编译基于这个宏:")]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("DVB_STANDARD")])]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译这段代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如果源代码编译时DVB_STANDARD这个宏被定义,那么#ifdef中的代码块会被编译。否则会被跳过。这通常用于:")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("编译平台相关的代码:比如基于不同标准或协议的代码可以用预处理宏进行条件编译。")])]),s._v(" "),e("li",[e("p",[s._v("编译调试用的代码:通过定义DEBUG宏可以编译额外的调试日志和断言。3.")])]),s._v(" "),e("li",[e("p",[s._v("打开/关闭某些功能:通过定义/不定义 Feature_X 宏可以编译对应的功能代码。所以,这个语句的作用是为当前模块定义DVB_STANDARD预处理宏,用于条件编译与DVB标准相关的源代码。在编译这个模块的源代码时,所有#ifdef DVB_STANDARD条件编译的代码块都会被编译。如果希望禁用这部分代码,只需要去掉这行语句,那么编译时DVB_STANDARD宏不会被定义,对应的条件编译代码块会被跳过")])])]),s._v(" "),e("p",[s._v("本文转自 "),e("a",{attrs:{href:"https://blog.csdn.net/k663514387/article/details/107107350/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/k663514387/article/details/107107350/"),e("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);e.default=n.exports}}]);