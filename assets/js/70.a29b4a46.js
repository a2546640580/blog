(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{521:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("在android 系统中，为统一管理系统的属性，设计了一个统一的属性系统。"),t("strong",[s._v("每个属性都有一个名称和值")]),s._v("，他们都是字符串格式。属性被大量使用在Android系统中，用来记录"),t("strong",[s._v("系统设置或进程之间的信息交换")]),s._v("。"),t("strong",[s._v("属性是在整个系统中全局可见的。每个进程可以get/set属性")]),s._v("。在编译的过程中会将各种系统参数汇总到build.prop 以及system.prop 这两个文件中，主要属性集中在build.prop中。系统在开机后将读取配置信息并构建共享缓冲区，加快查询速度。")])]),s._v(" "),t("p",[s._v("系统属性简单来说是用来存储系统中某些键值对数据，具有全局性、存取灵活方便的特点。")]),s._v(" "),t("h2",{attrs:{id:"一-终端prop命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-终端prop命令"}},[s._v("#")]),s._v(" 一 终端prop命令")]),s._v(" "),t("p",[s._v("在终端设备中，可以通过以下命令进行prop调试。")]),s._v(" "),t("h3",{attrs:{id:"_1-1-查看prop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-查看prop"}},[s._v("#")]),s._v(" 1.1 查看prop")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统所有props")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$getprop")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("persist.sys.timezone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Asia/Shanghai"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   //时区\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ro.system.build.type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userdebug"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       //系统编译类型\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("vendor.display.lcd_density"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("320")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       //屏幕密度\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取时区属性persist.sys.timezone的值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$getprop")]),s._v(" persist.sys.timezone\nAsia/Shanghai\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#过滤属性名或属性值含有关键字"timezone"的属性')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$getprop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" timezone\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("persist.sys.timezone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Asia/Shanghai"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取不存在的属性时结果为空")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$getprop")]),s._v(" hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h3",{attrs:{id:"_1-2-设置prop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-设置prop"}},[s._v("#")]),s._v(" 1.2 设置prop")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$getprop")]),s._v(" my.prop.test    //属性my.prop.test为空\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$setprop")]),s._v(" my.prop.test "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("    //设置属性my.prop.test为123\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$getprop")]),s._v(" my.prop.test    //获取属性my.prop.test为123\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("setprop 可以给属性设置int、bool、string等基本类型")]),s._v(" "),t("h3",{attrs:{id:"_1-3-监听prop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-监听prop"}},[s._v("#")]),s._v(" 1.3 监听prop")]),s._v(" "),t("p",[s._v("显示属性值发生变化的值")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$watchprops")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("my.prop.test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"二-get和set-prop代码流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-get和set-prop代码流程"}},[s._v("#")]),s._v(" 二 get和set prop代码流程")]),s._v(" "),t("h3",{attrs:{id:"_2-1-get和set-prop代码流程图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-get和set-prop代码流程图"}},[s._v("#")]),s._v(" 2.1 get和set prop代码流程图")]),s._v(" "),t("p",[s._v("涉及的代码路径汇总如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("frameworks\\base\\core\\java\\android\\os\\SystemProperties.java\nframeworks\\base\\core\\jni\\android_os_SystemProperties.cpp\nsystem\\core\\base\\properties.cpp\nsystem\\core\\init\\main.cpp\nsystem\\core\\init\\init.cpp\nsystem\\core\\init\\property_service.cpp\nsystem\\core\\property_service\\libpropertyinfoparser\\property_info_parser.cpp\nbionic\\libc\\include\\sys\\_system_properties.h\nbionic\\libc\\include\\sys\\system_properties.h\nbionic\\libc\\bionic\\system_property_set.cpp\nbionic\\libc\\bionic\\system_property_api.cpp\nbionic\\libc\\system_properties\\contexts_serialized.cpp\nbionic\\libc\\system_properties\\system_properties.cpp\nbionic\\libc\\system_properties\\prop_area.cpp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("代码流程整体时序图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/a3159d07668b4678965a9ede49b5ef3c.jpeg",alt:"img"}})]),s._v(" "),t("p",[s._v("系统属性架构设计如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/7eb0bbd2d4694a09bf43c66c81f33b67.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"_2-2-代码流程介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码流程介绍"}},[s._v("#")]),s._v(" 2.2 代码流程介绍")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/supernova_TOP/article/details/125971945?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"}},[s._v("见博客Android 系统属性（SystemProperties）介绍"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"三-代码中使用属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-代码中使用属性"}},[s._v("#")]),s._v(" 三 代码中使用属性")]),s._v(" "),t("h3",{attrs:{id:"_3-1-java代码中使用prop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-java代码中使用prop"}},[s._v("#")]),s._v(" 3.1 java代码中使用prop")]),s._v(" "),t("p",[s._v("在java代码中使用prop需满足以下两点：")]),s._v(" "),t("ul",[t("li",[s._v("import android.os.Systemproperties;")]),s._v(" "),t("li",[s._v("具有system权限：\n"),t("ol",[t("li",[s._v("在AndroidManifest.xml中，配置android:sharedUserId=“android.uid.system”")]),s._v(" "),t("li",[s._v("在Android.mk中，配置LOCAL_CERTIFICATE :=platform")])])])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/Jason_Lee155/article/details/118498580",target:"_blank",rel:"noopener noreferrer"}},[s._v("见博客android:sharedUserId作用"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("Systemproperties部分源码如下：\nframeworks\\base\\core\\java\\android\\os\\SystemProperties.java")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SystemProperties")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取属性key的值，如果没有该属性则返回默认值def")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@NonNull")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Nullable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" def"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TRACK_KEY_ACCESS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onKeyAccess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("native_get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" def"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置属性key的值为val")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@NonNull")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Nullable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("startsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ro."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" PROP_VALUE_MAX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IllegalArgumentException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value of system property \'"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" key\n                   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\' is longer than "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" PROP_VALUE_MAX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" characters: "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TRACK_KEY_ACCESS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onKeyAccess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("native_set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("get和set pro以ActivityManagerService.java代码为例：\nframeworks\\base\\services\\core\\java\\com\\android\\server\\am\\ActivityManagerService.java")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("finishBooting")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置开机完成标志属性sys.boot_completed")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SystemProperties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sys.boot_completed"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("maybePruneOldTraces")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),s._v(" tracesDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取tombstoned.max_anr_count属性值")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SystemProperties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tombstoned.max_anr_count"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("获取属性值可以根据值的类型使用合适返回值类型的方法如getInt()、getBoolean()、getLong()，SystemProperties.get()获取的值为String。")]),s._v(" "),t("h3",{attrs:{id:"_3-3-特殊属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-特殊属性"}},[s._v("#")]),s._v(" 3.3 特殊属性")]),s._v(" "),t("h4",{attrs:{id:"_3-3-1-ro只读属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-ro只读属性"}},[s._v("#")]),s._v(" 3.3.1 ro只读属性")]),s._v(" "),t("p",[s._v("ro即read only这类属性通常是系统默认属性，在系统编译或初始化时设置的。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ getprop ro.vendor.build.version.release\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n$ setprop ro.vendor.build.version.release "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\nsetprop: failed to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" property "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ro.vendor.build.version.release'")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_3-3-2-persist持久属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-persist持久属性"}},[s._v("#")]),s._v(" 3.3.2 persist持久属性")]),s._v(" "),t("p",[s._v("设置persist开头的属性，断电后仍能保存，值写入data/property/persistent_properties。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ getprop persist.hello.test  //属性为空\n$ setprop persist.hello.test abc //设置属性persist.hello.test值为abc\n$ getprop persist.hello.test abc //属性get正常\nabc\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$reboot")]),s._v(" //重启设备\n$ getprop persist.hello.test //属性为abc\nabc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"_3-3-3-ctl-控制属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-ctl-控制属性"}},[s._v("#")]),s._v(" 3.3.3 ctl 控制属性")]),s._v(" "),t("p",[s._v("属性名称以”ctl.”开头，用来启动和停止服务。每一项服务必须在 init.rc 中定义。init 一旦收到设置 ctl.start 属性的请求，属性服务将使用该属性值作为服务名找到该服务，启动该服务。这项服务的启动结果将会放入 init.svc.<服务名> 属性中。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$setprop")]),s._v(" ctl.start xxx //启动某服务\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$setprop")]),s._v(" ctl.stop xxx  //关闭某服务\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$setprop")]),s._v(" ctl.restart xxx  //重启某服务\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"_3-3-4-sys-powerctl属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-sys-powerctl属性"}},[s._v("#")]),s._v(" 3.3.4 sys.powerctl属性")]),s._v(" "),t("p",[s._v("sys.powerctl属性可控制设备重启关机")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$setprop")]),s._v(" sys.powerctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" //设备关机\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$setprop")]),s._v(" sys.powerctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v(" //设备重启\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_3-3-5-普通属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-5-普通属性"}},[s._v("#")]),s._v(" 3.3.5 普通属性")]),s._v(" "),t("p",[s._v("设置其他格式开头的属性，断电后不能保存")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ getprop hello.test  //属性为空\n$ setprop hello.test "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("//设置属性persist.hello.test值为abc\n$ getprop hello.test "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("//属性get正常\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$reboot")]),s._v(" //重启设备\n$ getprop hello.test //属性为空\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_3-4-添加系统默认属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-添加系统默认属性"}},[s._v("#")]),s._v(" 3.4 添加系统默认属性")]),s._v(" "),t("p",[s._v("从前面的介绍中我们知道系统开机时会load *.prop属性配置文件中的属性，因此开机后就有了默认属性。")]),s._v(" "),t("p",[s._v("在customer/default/tt_build.prop 中定义具体的系统属性 (另外，如果是添加以toptech_开头的 系统属性，则还需要去tt_config.mk中去添加一下要配置的系统属性)")]),s._v(" "),t("blockquote",[t("p",[s._v("在tt_build.prop中添加完成之后，必须要提交(git add tt_build.prop), 否则会被脚本中执行的 git checkout 给清除掉")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加自己的系统默认属性")]),s._v("\npersist.hello.world"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：这里添加的属性前缀必须是在system/sepolicy/private/property_contexts中被定义过的，否则无效；定制化前缀属性再后续定制prop属性配置中会介绍。")]),s._v(" "),t("p",[s._v("make android后在out/target/product/xxx/system/build.prop 或out/target/product/xxx/vendor/build.prop可找到添加的属性persist.hello.world，则说明基本添加成功，烧录img验证即可。")])]),s._v(" "),t("p",[s._v("然后再去 customer/scripts/init.sh 添加变量")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("config_world=hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-5-添加属性前缀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-添加属性前缀"}},[s._v("#")]),s._v(" 3.5 添加属性前缀")]),s._v(" "),t("p",[s._v("在R/system/sepolicy/private/property_contexts文件中定义系统属性的前缀，第二列也就相当于赋给这个前缀可使用的权限，当然也不止这一个文件，sepolicy目录下面的基本上都是用来做te规则的，也就是设置权限的")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20220824114131243.png",alt:"image-20220824114131243"}})]),s._v(" "),t("p",[s._v("如果android编译时提示")]),s._v(" "),t("ol",[t("li",[s._v("Z:\\RTD2853R\\kernel\\android\\R\\system\\sepolicy\\private\\property_contexts")]),s._v(" "),t("li",[s._v("Z:\\RTD2853R\\kernel\\android\\R\\system\\sepolicy\\prebuilts\\api\\30.0\\private\\property_contexts")])]),s._v(" "),t("p",[s._v("这两个property_contexts不一致则还需要在第2个property_contexts中定义相同的系统属性")]),s._v(" "),t("h2",{attrs:{id:"四、prop打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、prop打包"}},[s._v("#")]),s._v(" 四、prop打包")]),s._v(" "),t("p",[s._v("我们已经知道如何添加系统默认属性，但项目中有许多*.prop配置文件,")]),s._v(" "),t("ul",[t("li",[s._v("这些文件是如何最终打包至out/tartget/product/…/build.prop的呢？")]),s._v(" "),t("li",[s._v("为了便于客制化属性管控，如何添加自己的prop配置文件呢？")])]),s._v(" "),t("p",[s._v("本章将围绕上面两个问题进行介绍")])])}),[],!1,null,null,null);t.default=e.exports}}]);