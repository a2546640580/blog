(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{521:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"android初探开机引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android初探开机引导"}},[t._v("#")]),t._v(" Android初探开机引导")]),t._v(" "),a("p",[t._v("做开机引导，主要要做到的效果就是"),a("strong",[t._v("只有第一次使用的时候会打开，只打开一次，当执行完开机引导的流程之后，之后开机都不会再展示")])]),t._v(" "),a("p",[t._v("要实现开机引导，那么就一定是系统应用，按照原理来说，需要两个步骤，第一，需要引导页的优先级比LAUNCHER高。第二，需要流程完毕之后执行某些操作让应用下次不会启动。")]),t._v(" "),a("blockquote",[a("p",[t._v("LAUNCHER")]),t._v(" "),a("p",[t._v("使用这个种类来让一个 Activity 作为应用程序的启动项")])]),t._v(" "),a("h2",{attrs:{id:"_1-设置应用的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置应用的优先级"}},[t._v("#")]),t._v(" 1. 设置应用的优先级")]),t._v(" "),a("p",[t._v("可以设置android:priority属性，系统会判断启动priority优先级高的。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<activity\n    android:name=".MainActivity"\n    android:label="@string/app_name"\n    android:launchMode="singleTask" >\n    \x3c!--设置priority属性让自己的优先级比默认Launcher高--\x3e\n    <intent-filter android:priority="2">\n        <action android:name="android.intent.action.MAIN" />\n\n        <category android:name="android.intent.category.DEFAULT" />\n        \x3c!--设置android.intent.category.HOME属性让自己成为一个Launcher--\x3e\n        <category android:name="android.intent.category.HOME" />\n        <category android:name="android.intent.category.SETUP_WIZARD" />\n    </intent-filter>\n</activity>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("这样配置之后，其它应用的优先级如果没有设置的话默认就是0，这样就会优先打开引导页。")]),t._v(" "),a("blockquote",[a("p",[t._v("android.intent.category.HOME")]),t._v(" "),a("p",[t._v("HOME Activity 是设备启动（登陆屏幕）时显示的第一个 Activity 。通过指定 Intent Filter 为 HOME 种类而不指定动作的话，你正在将其设为本地 home 画面的替代。")])]),t._v(" "),a("blockquote",[a("p",[t._v("android.intent.category.SETUP_WIZARD")]),t._v(" "),a("p",[t._v("谷歌的开机向导的应用是com.google.android.setupwizard`应用，可以运行在launcher之前的apk")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/f31ad1b86f42",target:"_blank",rel:"noopener noreferrer"}},[t._v("packages\\apps\\Provision\\DefaultActivity,这部分内容见超链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("需将"),a("code",[t._v("Provision")]),t._v("内置到"),a("code",[t._v("/system/product/priv-app/")]),t._v("目录下，这是因为不在这个目录下的应用设置"),a("code",[t._v("android:priority")]),t._v("属性会被重置为0")])]),t._v(" "),a("h2",{attrs:{id:"_2-引导页只开启一次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引导页只开启一次"}},[t._v("#")]),t._v(" 2. 引导页只开启一次")]),t._v(" "),a("p",[t._v("自己可以在引导页中写自己想要做的逻辑。当执行完所有逻辑之后，需要配置")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_setup_complete"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PackageManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMPONENT_ENABLED_STATE_DISABLED_USER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setApplicationEnabledSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.android.mc.rtk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SYNCHRONOUS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("1.使HOME失效")])]),t._v(" "),a("p",[t._v("Settings.Secure.USER_SETUP_COMPLETE：当导航app未设置完成时HOME键是不起作用的，原因就是状态控制了")]),t._v(" "),a("p",[a("strong",[t._v("2.将Activity自己禁用")])]),t._v(" "),a("p",[t._v("COMPONENT_ENABLED_STATE_DISABLED_USER：由用户禁用app，所以是可以重新启用的，只能setApplicationEnabledSetting()方法使用")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/StudyOfAndroid/article/details/109678471",target:"_blank",rel:"noopener noreferrer"}},[t._v("setApplicationEnabledSetting()方法"),a("OutboundLink")],1),t._v("：是PackageManager提供的禁用app的方法，一般只能用来禁用自己，不能禁用其他app，否则会报错误，因为系统会判断禁用的应用uid和当前应用的uid是否一致，如果不一致，就会报错。")]),t._v(" "),a("p",[t._v("将该Activity禁用可以让下次开机时我们的应用不会再起来而直接启动桌面，finish就不用做解释，开机引导走完了就该销毁自己了。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.WRITE_SETTINGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.WRITE_SECURE_SETTINGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("做完这些之后将需要展示的开机精灵的界面fragment添加到一个list中，同时做判断是否添加，并不是需要显示所有的fragment。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setComponentEnabledSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DONT_KILL_APP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SYNCHRONOUS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("componentName：组件名称")]),t._v(" "),a("p",[t._v("newState：组件新的状态，可以设置三个值，分别是如下：")]),t._v(" "),a("p",[t._v("不可用状态：COMPONENT_ENABLED_STATE_DISABLED")]),t._v(" "),a("p",[t._v("可用状态：COMPONENT_ENABLED_STATE_ENABLED")]),t._v(" "),a("p",[t._v("默认状态：COMPONENT_ENABLED_STATE_DEFAULT")]),t._v(" "),a("p",[t._v("flags:行为标签,值可以是DONT_KILL_APP或者0. 0说明杀死包含该组件的app")])]),t._v(" "),a("p",[t._v("然后调用showFragment显示第一个界面，next和Previous就是position++和--")])])}),[],!1,null,null,null);a.default=e.exports}}]);