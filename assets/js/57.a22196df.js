(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{508:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("生系统签名的apk用的最多的有两种方法，这里将一一介绍一下：")]),s._v(" "),a("h2",{attrs:{id:"第一种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种方法"}},[s._v("#")]),s._v(" "),a("strong",[s._v("第一种方法")])]),s._v(" "),a("p",[s._v("执行比较简单，但是不利于后期的调试，每调试一次就要重新执行签名的步奏生成系统签名：")]),s._v(" "),a("p",[s._v('1、开发具有系统权限的apk，这里就需要在AndroidManifest中配置ShareUserId,这个文件在该项目下app/src/main/AndroidManifest.xml。在这里文件里添加 android:sharedUserId="android.uid.system"就可以，当然只添加这一项是肯定不行的，当你添加这一行代码之后，就会发现该项目运行不了了，因为这里只是声明了系统权限并没有对他进行系统签名。')]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/971cb1379e2cf0b35574df09ccb0b5c5.png",alt:"img"}})]),s._v(" "),a("p",[s._v("2、直接Build出来的apk是不能安装的，这时候还要对Build出来的apk进行系统签名，在cmd中执行如下命令，（为了方便，把这些文件都放在同一个文件夹下）签名的命令如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("java jar signapk.jar platform.x509.pem platform.pk8 oldapp.apk newapp.apk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中oldapp.apk表示我们刚才直接Build生成的apk，newapp.apk表示我们需要生成的带系统签名的apk。signapk.jar,platform.x509,platform.pk8都是在源码文件中，当然如果你不会编译Android 源码你也可以直接在网上下载对应版本的源码。网上有许多教你如何去编译Android源码（https://www.jianshu.com/p/e0e992b51f31），编译完成之后，这些文件都可以在源码中找到一般都在../build/target/product/security中。生成的newapp.apk就是我们需要的系统apk了。")]),s._v(" "),a("h2",{attrs:{id:"第二种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种方法"}},[s._v("#")]),s._v(" 第二种方法")]),s._v(" "),a("p",[s._v("1、需要的文件")]),s._v(" "),a("ol",[a("li",[s._v("可用的Android Studio和Linux系统环境。")]),s._v(" "),a("li",[s._v("Android源码环境，并且已经编译过了")]),s._v(" "),a("li",[s._v("下载keytool-importkeypair https://github.com/getfatday/keytool-importkeypair")])]),s._v(" "),a("p",[s._v("2、具体的操作")]),s._v(" "),a("ol",[a("li",[s._v("在Android Studio中build->Generate Signed APK，之后输入密码别名等，生成一个你自己的新的jks文件。")]),s._v(" "),a("li",[s._v("在Android 源码环境中，进入build/target/product/security将platform.pk8，platform.x509.pem和第一步生成的jks放在一个目录中。")]),s._v(" "),a("li",[s._v("在linux环境中，将keytool-importkeypair下载后，你可以将keytool-importkeypair这个可执行文件和jks等放到一个目录中。执行./keytool-importkeypair -k jks的文件名 -p jks的密码 -pk8 platform.pk8 -cert platform.x509.pem -alias jks的别名，这样的话可以将系统签名引入到jks中。接下来只需要在Android Studio Run的时候对app签名时使用这个签名就可以了")])]),s._v(" "),a("p",[s._v("3.在Android工程中，将如下内容添加到app的build.gradle中便可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("　　signingConfigs{\n        release {\n            storeFile file(“../app/SignApk/SignDemo1.jks\")\n            storePassword 'jks的密码'\n            keyAlias \"jks的别名\"\n            keyPassword 'jks的密码'\n        }\n \n        debug {\n            storeFile file(\"../app/SignApk/SignDemo1.jks\")\n            storePassword 'jks的密码'\n            keyAlias \"jks的别名\"\n            keyPassword 'jks的密码'\n        }\n　　}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("需要注意的就是，上面提到的jks密码就是在生成SignDemo.jks时你设置的密码。storeFile file就是你的SignDemo1.jks存放的位置，我这里就是把它存放在当前项目下的APP文件中（在app文件中新建SignAPK文件，再把SignDemo1.jks放入该文件中）")]),s._v(" "),a("p",[s._v("​    \t配置完之后，就可以直接Build ->Build APK 生成的apk就可以直接安装了。")]),s._v(" "),a("p",[s._v("4、将生成的具有系统权限的apk推入到Android手机的系统目录中，也就是/system/app，应为这个目录中都是存放系统apk安装的地址。我们就需要将系统apk推入到/system/app，因为用户apk和系统apk安装后，他们的存放目录是不一样的。执行如下步奏：")]),s._v(" "),a("p",[s._v("1.首先连接手机，进入命令行，输入:"),a("strong",[s._v("adb root")]),s._v(",使得adb获取root权限。")]),s._v(" "),a("p",[s._v("2.输入:"),a("strong",[s._v("adb shell")]),s._v("，进入安卓shell")]),s._v(" "),a("p",[s._v("3.输入:"),a("strong",[s._v("mount -o remount /system")]),s._v("，将system路径挂载为可读可执行，否则后边会报Read-only权限问题，或者直接输入adb shell remount。")]),s._v(" "),a("p",[s._v("4.输入:"),a("strong",[s._v("chmod 777 system/")]),s._v(",修改system及子目录为可读写执行权限。")]),s._v(" "),a("p",[s._v("5.输入:"),a("strong",[s._v("adb push 本地路径+apk文件名 目的路径（/system/app）")])]),s._v(" "),a("p",[s._v("6.输入 "),a("strong",[s._v(":adb reboot")]),s._v("，重启机器，如果程序安装成功则大功告成，如果没有安装，则需要我们手动安装了，首先进入/system/app路径，使用:"),a("strong",[s._v("pm install apk包名")]),s._v("，安装apk包。")])])}),[],!1,null,null,null);a.default=n.exports}}]);