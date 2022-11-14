(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{530:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"android初探开机引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android初探开机引导"}},[t._v("#")]),t._v(" Android初探开机引导")]),t._v(" "),a("p",[t._v("做开机引导，主要要做到的效果就是"),a("strong",[t._v("只有第一次使用的时候会打开，只打开一次，当执行完开机引导的流程之后，之后开机都不会再展示")])]),t._v(" "),a("p",[t._v("要实现开机引导，那么就一定是系统应用，按照原理来说，需要两个步骤，第一，需要引导页的优先级比LAUNCHER高。第二，需要流程完毕之后执行某些操作让应用下次不会启动。")]),t._v(" "),a("blockquote",[a("p",[t._v("LAUNCHER")]),t._v(" "),a("p",[t._v("使用这个种类来让一个 Activity 作为应用程序的启动项")])]),t._v(" "),a("h3",{attrs:{id:"_1-设置应用的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置应用的优先级"}},[t._v("#")]),t._v(" 1. 设置应用的优先级")]),t._v(" "),a("p",[t._v("可以设置android:priority属性，系统会判断启动priority优先级高的。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activity")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".MainActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@string/app_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("launchMode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("singleTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--设置priority属性让自己的优先级比默认Launcher高--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("intent-filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("priority")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("action")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.intent.action.MAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("category")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.intent.category.DEFAULT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--设置android.intent.category.HOME属性让自己成为一个Launcher--\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("category")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.intent.category.HOME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("category")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.intent.category.SETUP_WIZARD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("intent-filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("这样配置之后，其它应用的优先级如果没有设置的话默认就是0，这样就会优先打开引导页。")]),t._v(" "),a("blockquote",[a("p",[t._v("android.intent.category.HOME")]),t._v(" "),a("p",[t._v("HOME Activity 是设备启动（登陆屏幕）时显示的第一个 Activity 。通过指定 Intent Filter 为 HOME 种类而不指定动作的话，你正在将其设为本地 home 画面的替代。")])]),t._v(" "),a("blockquote",[a("p",[t._v("android.intent.category.SETUP_WIZARD")]),t._v(" "),a("p",[t._v("谷歌的开机向导的应用是com.google.android.setupwizard`应用，可以运行在launcher之前的apk")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/f31ad1b86f42",target:"_blank",rel:"noopener noreferrer"}},[t._v("packages\\apps\\Provision\\DefaultActivity,这部分内容见超链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("需将"),a("code",[t._v("Provision")]),t._v("内置到"),a("code",[t._v("/system/product/priv-app/")]),t._v("目录下，这是因为不在这个目录下的应用设置"),a("code",[t._v("android:priority")]),t._v("属性会被重置为0")])]),t._v(" "),a("h3",{attrs:{id:"_2-禁用home键及锁屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-禁用home键及锁屏"}},[t._v("#")]),t._v(" 2. 禁用HOME键及锁屏")]),t._v(" "),a("p",[t._v("自己可以在引导页中写自己想要做的逻辑。当执行完所有逻辑之后，需要配置")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("USER_SETUP_COMPLETE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PackageManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMPONENT_ENABLED_STATE_DISABLED_USER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setApplicationEnabledSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.android.mc.rtk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SYNCHRONOUS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("1.使HOME失效")])]),t._v(" "),a("p",[a("code",[t._v("Settings.Secure.USER_SETUP_COMPLETE")]),t._v("：当导航app未设置完成时HOME键是不起作用的，原因就是状态控制了")]),t._v(" "),a("p",[a("strong",[t._v("2.禁用app")])]),t._v(" "),a("p",[a("code",[t._v("PackageManager.COMPONENT_ENABLED_STATE_DISABLED_USER")]),t._v("：由用户禁用app，所以是可以重新启用的，只能setApplicationEnabledSetting()方法使用")]),t._v(" "),a("p",[a("code",[t._v('setApplicationEnabledSetting("com.android.mc.rtk", state, SYNCHRONOUS')]),t._v(")方法：是PackageManager提供的禁用app的方法，一般只能用来禁用自己，不能禁用其他app，否则会报错误，因为系统会判断禁用的应用uid和当前应用的uid是否一致，如果不一致，就会报错。")]),t._v(" "),a("h3",{attrs:{id:"_3-开机引导完成后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-开机引导完成后"}},[t._v("#")]),t._v(" 3.开机引导完成后")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finishSetup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加持久设置以允许其他应用程序知道设备已配置。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEVICE_PROVISIONED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个标记位标识当前用户已经走完引导流程，如果不设置这个值，Home键、锁屏等将不可用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("USER_SETUP_COMPLETE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从PackageManager中禁用该Activity。")]),t._v("\n    pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setComponentEnabledSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PackageManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMPONENT_ENABLED_STATE_DISABLED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PackageManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DONT_KILL_APP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("启用或者禁用四大组件()")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setComponentEnabledSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DONT_KILL_APP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SYNCHRONOUS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("componentName：组件名称")]),t._v(" "),a("p",[t._v("newState：组件新的状态，可以设置三个值，分别是如下：")]),t._v(" "),a("p",[t._v("不可用状态：COMPONENT_ENABLED_STATE_DISABLED")]),t._v(" "),a("p",[t._v("可用状态：COMPONENT_ENABLED_STATE_ENABLED")]),t._v(" "),a("p",[t._v("默认状态：COMPONENT_ENABLED_STATE_DEFAULT")]),t._v(" "),a("p",[t._v("flags:行为标签,值可以是DONT_KILL_APP或者0. 0说明杀死包含该组件的app")])]),t._v(" "),a("h2",{attrs:{id:"调试启动开机精灵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试启动开机精灵"}},[t._v("#")]),t._v(" 调试启动开机精灵")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("通过如下命令使能进入开机向导\nadb shell\nsettings put global device_provisioned "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nsettings put secure user_setup_complete "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启Provision应用的DefaultActivity")]),t._v("\npm enable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("DefaultActivity")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启Demo的MainActivity")]),t._v("\npm enable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toptech"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setupwizard"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MainActivity\nsync\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重启")]),t._v("\nreboot\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("查询settings的值\nsettings get global device_provisioned\nsettings get secure user_setup_complete\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("通过代码实现\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEVICE_PROVISIONED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("USER_SETUP_COMPLETE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentName")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.android.provision"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.android.provision.DefaultActivity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPackageManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setComponentEnabledSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PackageManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMPONENT_ENABLED_STATE_ENABLED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PackageManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DONT_KILL_APP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/6f8e62911d3c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android初探开机引导"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/f31ad1b86f42",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android自定义开机引导最强篇"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/StudyOfAndroid/article/details/109678471",target:"_blank",rel:"noopener noreferrer"}},[t._v("setComponentEnabledSetting和setApplicationEnabledSetting"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);