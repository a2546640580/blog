(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{530:function(a,t,s){"use strict";s.r(t);var e=s(0),l=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"一、简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、简述"}},[a._v("#")]),a._v(" 一、简述")]),a._v(" "),t("p",[a._v("从软件模块之间的调用方式看，分为三类：同步调用、异步调用和"),t("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E5%9B%9E%E8%B0%83&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[a._v("回调"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("p",[a._v("同步调用是最基本并且最简单的一种调用方式，类 A 的 a() 调用类 B 的 b()，一直等待 b() 执行完毕，a() 继续往下走。"),t("code",[a._v("该调用方式适用于 b() 执行时间不长的情况")]),a._v("，因为 b() 执行时间过长或者直接阻塞的话，a() 的余下代码是无法执行下去的，这样会造成整个流程的阻塞。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/46888eca58ecad83ae4fdc68d9f46a6e.png",alt:"img"}})]),a._v(" "),t("p",[a._v("2️⃣异步调用")]),a._v(" "),t("p",[a._v("异步调用是为了解决同步调用可能出现阻塞，导致整个流程卡住而产生的一种调用方式。"),t("code",[a._v("类 A 的 a() 通过新起线程的方式调用类 B 的 b()，代码接着直接往下执行")]),a._v("，这样无论 b() 执行时间多久，都不会阻塞住 a() 的执行。但是，由于 a() 不等待 b() 的执行完成，在 a() 需要 b() 执行结果的情况下(视具体业务而定，有些业务比如启异步线程发个微信通知、刷新缓存这种就没必要)，必须通过一定的方式对 b() 的执行结果进行监听。Java 中，可以使用 Future+Callable 的方式做到这一点。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/2790886614107480f8700d8b8571b3dc.png",alt:"img"}})]),a._v(" "),t("p",[a._v("3️⃣回调")]),a._v(" "),t("p",[a._v("在面向对象的语言中，回调则是通过接口或抽象类来实现的，实现这种接口的类为回调类，回调类的对象为回调对象。回调的思想是：")]),a._v(" "),t("ol",[t("li",[a._v("class A 实现接口 CallBack——背景 1")]),a._v(" "),t("li",[a._v("class A 中包含一个 class B 的引用 b——背景 2")]),a._v(" "),t("li",[a._v("class B 有一个参数为 callback 的方法 b(CallBack callback)——背景 3")]),a._v(" "),t("li",[a._v("A 的对象 a 在自己的 a() 里调用 B 的方法 b(CallBack callback)——A 类调用 B 类的某个方法")]),a._v(" "),t("li",[a._v("然后 b 就可以在 b(CallBack callback) 中调用 A 的方法——B 类调用 A 类的某个方法")])]),a._v(" "),t("p",[a._v("综上：")]),a._v(" "),t("ul",[t("li",[a._v("类 A 的 a() 调用类 B 的 b()。")]),a._v(" "),t("li",[a._v("类 B 的 b() 执行完毕主动调用类 A 的 callback()。")])]),a._v(" "),t("p",[a._v("该调用方式如图，也就是一种"),t("strong",[a._v("双向")]),a._v("的调用方式。回调函数是一个函数或过程，不过它是一个由调用方自己实现，供被调用方使用的特殊函数。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/c62c0d2da5de404d1c53be10200d7039.png",alt:"img"}})]),a._v(" "),t("p",[t("strong",[a._v("总结起来，回调的核心就是回调方将本身即this传递给调用方，这样调用方就可以在调用完毕之后告诉回调方它想要知道的信息。")])]),a._v(" "),t("h2",{attrs:{id:"二、下载文件的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、下载文件的例子"}},[a._v("#")]),a._v(" 二、下载文件的例子")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/Amosstan/article/details/114963704",target:"_blank",rel:"noopener noreferrer"}},[a._v("(25条消息) Java回调方法(CallBack)_Amosstan的博客-CSDN博客_java 回调"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=l.exports}}]);