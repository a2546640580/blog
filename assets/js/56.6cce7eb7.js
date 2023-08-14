(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{512:function(s,a,r){"use strict";r.r(a);var e=r(0),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-编译framework资源文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-编译framework资源文件"}},[s._v("#")]),s._v(" 一 : 编译framework资源文件")]),s._v(" "),a("p",[s._v("如果修改android framework资源文件，需要先编译资源文件，然后再编译framework才可以正常引用，")]),s._v(" "),a("p",[s._v("进入项目目录 cd xxx工程目录**"),a("code",[s._v("/frameworks/base/core/res/")]),s._v("** 执行mm 编译 framework-res.apk（原生或高通，如果只是修改了core目录下的res资源代码，到这一步就可以了！）")]),s._v(" "),a("h3",{attrs:{id:"_1、生成资源的引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、生成资源的引用"}},[s._v("#")]),s._v(" 1、生成资源的引用")]),s._v(" "),a("p",[s._v("编译完后**"),a("code",[s._v("com.android.internal.R")]),s._v("**中会生成资源的引用")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/d2dda8c0f9844c08979c3b31f22264e3.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("原因解析：")]),s._v(" "),a("p",[s._v("**"),a("code",[s._v("frameworks\\\\base\\\\core\\\\res\\\\Android.bp")]),s._v("**文件有以下代码，Android.bp文件描述了模块代码编译的规则，有兴趣可以去深入了解，以前是用Android.mk文件的，现在源码基本都是bp文件了")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("android_app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" //表示编译成一个apk\n    name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"framework-res"')]),s._v(",  //表示将这个apk命名为framework-res.apk\n    sdk_version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core_platform"')]),s._v(",\n    certificate: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"platform"')]),s._v(", \n    resource_dirs: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  //指定apk所需要的资源文件路径\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"res"')]),s._v(",  //当前res目录\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("所以说，如果我们修改了res目录下的资源文件，只要编译出framework-res.apk文件，然后push进去手机就可以了，其他jar包、so库什么的原因大致一样")]),s._v(" "),a("p",[s._v("如果是修改了**"),a("code",[s._v("/frameworks/base")]),s._v("**目录下的其他文件，则还需要下面的操作")]),s._v(" "),a("h3",{attrs:{id:"_2、编译-framework-jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、编译-framework-jar"}},[s._v("#")]),s._v(" 2、编译 framework.jar")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("在目录 frameworks/base/ 下执行mm 编译 framework.jar  \n或者 使用\nmake framework-minus-apex（进行部分编译）\n")])])]),a("p",[s._v("根据**"),a("code",[s._v("framework/base/")]),s._v("**目录下Android.bp中的提示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/dda77758d575415e989f74fdcb56ea24.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/f2914084287d4f8199879098e1157e67.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("3、如果 "),a("strong",[a("code",[s._v("frameworks/base/services")])]),s._v(" 下有修改，则也要编译，在目录 "),a("strong",[a("code",[s._v("/frameworks/base/services/java/")])]),s._v(" 执行mm 编译services.jar")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/e10183647845435e8d833611f0793a19.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("编译生成的文件都位于你的**"),a("code",[s._v("out/target/product/xxx/system/frameworks/")]),s._v("**目录下")]),s._v(" "),a("p",[s._v("注：若不生成新的apk、jar包文件，请将旧的.apk、.jar包删除")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/45f720a2718e4826878f3ff025678c3b.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"二-验证修改后的效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-验证修改后的效果"}},[s._v("#")]),s._v(" 二 : 验证修改后的效果")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("adb root  \n\nadb remount  \n\nadb push framework-res.apk /system/framework/  \n\nadb push framework.jar /system/framework/  \n\nadb push secondary\\_framework.jar /system/framework/ (如果存在secondary\\_framework.jar,需要push)  \n\nadb push services.jar /system/framework/ （如果service有修改，需要push，还有一些类似service模块带有单独Android.bp的模块等，这里就不一一举例） \n\nadb reboot 重启设备。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("替换**"),a("code",[s._v("framework.jar")]),a("strong",[s._v("同时还要")]),s._v("删除"),a("strong",[s._v("这个目录下面的")]),a("code",[s._v("oat，arm，arm64")]),s._v("**三个目录(不删除会一直卡在开机动画)，最后再运行下面的命令重启zygote，这样新替换的framework.jar就生效了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("adb shell stop\nadb shell start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"三-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-总结"}},[s._v("#")]),s._v(" 三 : 总结")]),s._v(" "),a("p",[s._v("在开发过程中,尤其是framework相关开发时,有时候需要重新编译资源文件.编译顺序和注意事项如下(均在源码根目录):")]),s._v(" "),a("p",[s._v("资源文件位置: "),a("strong",[a("code",[s._v("frameworks/base/core/res")])]),s._v("，编译后生成的文件:"),a("strong",[a("code",[s._v("framework-res.apk")])]),s._v(" 另外**"),a("code",[s._v("com.android.internal.R")]),a("strong",[s._v("会更新这个R.java所在目录")]),a("code",[s._v("/out/target/common/R/com/android/internal.")]),s._v("**")]),s._v(" "),a("p",[s._v("编译资源后,必须重新编译framework.jar.")]),s._v(" "),a("p",[s._v("如果在**"),a("code",[s._v("frameworks/base/core/res")]),s._v("**执行mm时并不重新编译,请使用mm -B")]),s._v(" "),a("p",[s._v("资源文件要小写")]),s._v(" "),a("h2",{attrs:{id:"四-其他模块单编介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-其他模块单编介绍"}},[s._v("#")]),s._v(" 四：其他模块单编介绍")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("mmm system/core/init")])]),s._v(" 等同于 "),a("strong",[a("code",[s._v("cd system/core/init")])]),s._v(" 进入目录后再执行mm。")]),s._v(" "),a("p",[s._v("编译系统采用的是增量编译，只会编译发生变化的目标文件。当需要重新编译所有的相关模块，则需要编译命令后增加参数-B，比如make -B [module_name]，或者 mm -B [module_path]。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/59d0dfef3c4242c8822689a731530e47.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("本文转自 "),a("a",{attrs:{href:"https://blog.csdn.net/z1804362542/article/details/125977277?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168128706916800192216921%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168128706916800192216921&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-125977277-null-null.142%5Ev82%5Einsert_down38,201%5Ev4%5Eadd_ask,239%5Ev2%5Einsert_chatgpt&utm_term=framework%20%E5%8D%95%E7%BC%96&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/z1804362542/article/details/125977277?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168128706916800192216921%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168128706916800192216921&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-125977277-null-null.142^v82^insert_down38,201^v4^add_ask,239^v2^insert_chatgpt&utm_term=framework%20%E5%8D%95%E7%BC%96&spm=1018.2226.3001.4187"),a("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);a.default=t.exports}}]);