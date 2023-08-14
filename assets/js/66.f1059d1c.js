(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{522:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("本文讨论两个问题：")]),a._v(" "),s("ol",[s("li",[a._v("如何在Android 源码环境下使用Android.mk 的方式把aar 导入apk（apk 引用aar 的内容）；")]),a._v(" "),s("li",[a._v("含有so 文件的aar 在源码环境下编译后so 文件不会被打包进apk，如何解决app 运行时找不到so 的问题。")])]),a._v(" "),s("p",[a._v("现在新的源码中很多app 已经切换到了Android.bp，不过目前Android.mk 还是兼容的。下面介绍在Android.mk 中导入aar 包")]),a._v(" "),s("h2",{attrs:{id:"在android-mk-中导入aar-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在android-mk-中导入aar-包"}},[a._v("#")]),a._v(" 在Android.mk 中导入aar 包")]),a._v(" "),s("p",[a._v("第一步：先声明 aar 包的位置")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CLEAR_VARS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nLOCAL_PREBUILT_STATIC_JAVA_LIBRARIES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" aar_alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("libs/aar-release_1.0.aar\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("BUILD_MULTI_PREBUILT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("注意上面的代码整段都需要，而不只是中间那一行。")]),a._v(" "),s("p",[a._v("第二步：引用我们声明的 aar 变量")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[a._v("LOCAL_STATIC_JAVA_AAR_LIBRARIES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" aar_alias\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("第三步：添加引用的 aar 包里面的资源")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[a._v("LOCAL_AAPT_FLAGS "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" \\\n         --auto-add-overlay \\\n         --extra-packages com.example.aar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("com.example.aar 为aar 的包名。")]),a._v(" "),s("p",[a._v("第二步和第三步是添加到apk 的 include $(CLEAR_VARS) 和include $(CLEAR_VARS) 中间。")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"运行时找不到so-aar-里的so"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行时找不到so-aar-里的so"}},[a._v("#")]),a._v(" 运行时找不到so（aar 里的so）")]),a._v(" "),s("p",[a._v("如果aar 中含有so 文件的话，通常使用Android Studio 构建apk 的话，so 会打包到apk的lib 目录下（解压后可以查看到），而在源码下使用Android.mk 的方式编译的话，编译出的apk 是不含so 文件的，也就意味着如果你adb install 编译出来的apk，它是不能按预期运行的。")]),a._v(" "),s("p",[a._v("两种方法解决这个问题")]),a._v(" "),s("h3",{attrs:{id:"方案一-预置apk-预置aar-里的so-到-system-lib64-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案一-预置apk-预置aar-里的so-到-system-lib64-目录"}},[a._v("#")]),a._v(" 方案一 预置apk + 预置aar 里的so 到/system/lib64/ 目录")]),a._v(" "),s("p",[a._v("使用Android.mk 的方式在源码下编译，大概率也是要预置这个apk 了，可以在编译apk 的mk 文件中增加预置so 文件的代码。当然，首先要把aar 里的so 文件解压出来（集成交付可能不太友好，除了更新aar 还要再一次把aar 里的so 解压出来）。")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  jni so")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CLEAR_VARS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nLOCAL_MODULE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" libGet_Point-jni\nLOCAL_MODULE_TAGS "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" optional\nLOCAL_SRC_FILES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" libs/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("LOCAL_MODULE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(".so\nLOCAL_MODULE_STEM "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("LOCAL_MODULE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nLOCAL_MODULE_SUFFIX "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("suffix")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("LOCAL_SRC_FILES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nLOCAL_SHARED_LIBRARIES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" liblog libxt_get_point\nLOCAL_MODULE_CLASS "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" SHARED_LIBRARIES\nLOCAL_MULTILIB "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" 64\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("BUILD_PREBUILT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("不要忘了app 依赖的代码")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# jni so")]),a._v("\nLOCAL_JNI_SHARED_LIBRARIES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" libGet_Point-jni\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("so 文件将会被编译预置到/system/lib64/ 目录下，将apk push 到/system/app/AarTest/ 目录下验证可以运行。")]),a._v(" "),s("p",[a._v("注意，so 放到 /vendor/lib64/ 下面访问不到（估计需要app 编译声明为VENDOR app），如果app 是install 安装的，那也没有权限访问/system/lib64/ 下面的so")]),a._v(" "),s("h3",{attrs:{id:"方案二-将aar-中的so-打包进apk-未成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案二-将aar-中的so-打包进apk-未成功"}},[a._v("#")]),a._v(" 方案二 将aar 中的so 打包进apk？(未成功)")]),a._v(" "),s("p",[a._v("按照网上文章说的，添加 LOCAL_JNI_SHARED_LIBRARIES := libGet_Point-jni 后so 会自动打包进so，然而实测并没有；")]),a._v(" "),s("p",[a._v("预置so 文件的make 代码写法出了上面列出的一种以外，还搜到一个")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[a._v("LOCAL_PREBUILT_LIBS "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" libGet_Point-jni"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("libs/libGet_Point-jni.so\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("但是假如这个so 还依赖其他so 的话就会编译不过（回头看上面第一种，LOCAL_SHARED_LIBRARIES := liblog 还依赖了liblog）。同样的，假如上面的代码不会导致编译错误，也还需要")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# jni so")]),a._v("\nLOCAL_JNI_SHARED_LIBRARIES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" libGet_Point-jni\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("不写这一行也能push apk 成功运行，但是编译出来apk 目录下没有 lib 软链"),s("br"),a._v("\n添加了 LOCAL_JNI_SHARED_LIBRARIES 之后编译出出的apk 目录下有lib 软链，apk 本身是不含so 文件的")]),a._v(" "),s("p",[s("strong",[a._v("so 打包进apk 失败")])]),a._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/alexchen840131/article/details/84928154",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android 程序开发 总结一： 源码编译引用包含so文件的AAR文件_alexchen840131的博客-CSDN博客"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_27788177/article/details/103719570",target:"_blank",rel:"noopener noreferrer"}},[a._v("【安卓开发系列 – 系统开发】AOSP 源码环境开发系统 APP 预置带有 SO 的 AAR 包_奋斗企鹅CopperSun的博客-CSDN博客_libpl_droidsonroids_gif.so"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/wd229047557/article/details/96141623",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android源码 app预制带so和assets文件的aar包(sdk)_wd623894174的博客-CSDN博客"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/tkwxty/article/details/17039145",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android打包so文件到apk_IT先森的博客-CSDN博客"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/petib_wangwei/article/details/72844515",target:"_blank",rel:"noopener noreferrer"}},[a._v("在Android源码中如何吧so库打包编译进入apk， 集成第三方库（jar和so库）_WangMark的博客-CSDN博客"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/u012932409/article/details/108119443",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android.bp 文件中引入aar、jar、so库正确编译方法(值得收藏)_cczhengv的博客-CSDN博客_android.bp 编译jar"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("本文转自 "),s("a",{attrs:{href:"https://blog.csdn.net/aaa111/article/details/125328879",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/aaa111/article/details/125328879"),s("OutboundLink")],1),a._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);s.default=r.exports}}]);