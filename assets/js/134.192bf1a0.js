(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{589:function(s,t,a){"use strict";a.r(t);var i=a(0),e=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"第一种方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种方法"}},[s._v("#")]),s._v(" 第一种方法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1. 将需要调用的libSpiDevice.so放到/system/lib下\n2. 运行程序发现报错,百度一查说是要把改so库的名字写到/system/etc/public.libraries.txt,这个文件里\n3. adb pull出来,修改,adb push进去,重启;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("重点来了:将libSpiDevice.so加到public.libraries.txt这个文件时,注意要换行,换行,换行!!!,否则push到系统中是识别不到的,cat public.libraries.txt,会发现根本没有刚添加的字段…这就是没有换行.所以,记得换行,换行,换行.\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/20200314142212389.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"第二种方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种方法"}},[s._v("#")]),s._v(" 第二种方法")]),s._v(" "),t("p",[s._v("使用Android studio的话，你直接把libxxxx.so放入jniLibs/armxxxxx/下就可以了，编译后就会自动帮你打包在apk里面，另外我看你app下有jni这个目录，应该是你自己创建的，这样在jni里执行了ndk-build后，会在app目录下产生两个临时文件夹libs和obj，这两个文件夹在Android Studio里面没用，因为Android studio不像eclipse那样把libs里的so打包到apk，而是默认使用了jniLibs目录。如果你非要让Android studio把app/libs的库打包到apk里，也是可以做到的，要自己编辑build.gradle文件来完成")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220907211547624.png",alt:"image-20220907211547624"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);