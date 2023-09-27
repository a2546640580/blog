(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{597:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("有时候，我们开发的apk需要用到系统权限，需要在AndroidManifest.xml中添加共享系统进程属性：")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v('android:sharedUserId="android.uid.system"\nandroid:sharedUserId="android.uid.shared"\nandroid:sharedUserId="android.media"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这时候apk的签名就需要是系统签名(platform、shared或media)才能正常使用。")]),s._v(" "),a("h2",{attrs:{id:"一、android源码环境下签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、android源码环境下签名"}},[s._v("#")]),s._v(" "),a("strong",[s._v("一、Android源码环境下签名")])]),s._v(" "),a("h3",{attrs:{id:"_1-直接编译apk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接编译apk"}},[s._v("#")]),s._v(" 1.直接编译apk")]),s._v(" "),a("p",[s._v("这种方式比较麻烦，你需要有编译过的源码环境，并按如下步骤：")]),s._v(" "),a("p",[s._v("1、拷贝App源码到Android源码的"),a("code",[s._v("packages/apps/")]),s._v("目录下，且App源码是普通(Eclipse)格式的"),a("br"),s._v("\n2、配置Android.mk，在其中添加")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("LOCAL_CERTIFICATE := platform 或 shared 或 media\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、使用"),a("code",[s._v("mm")]),s._v("编译App，生成的apk即系统签名")]),s._v(" "),a("h3",{attrs:{id:"_2-源码编译生成签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-源码编译生成签名"}},[s._v("#")]),s._v(" 2.源码编译生成签名")]),s._v(" "),a("p",[s._v("1.进入系统目录")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("build/target/product/security\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.执行命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openssl pkcs8 -inform DER -nocrypt -in platform.pk8 -out platform.pem\n&& openssl pkcs12 -export -in platform.x509.pem -out platform.p12 -inkey platform.pem -password pass:android -name androiddebugkey\n&& keytool -importkeystore -deststorepass android -destkeystore platform.jks -srckeystore platform.p12 -srcstoretype PKCS12 -srcstorepass android\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("生成的platform.jks就是需要的系统签名文件")]),s._v(" "),a("h2",{attrs:{id:"二、对apk手动重新签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、对apk手动重新签名"}},[s._v("#")]),s._v(" 二、"),a("strong",[s._v("对apk手动重新签名")])]),s._v(" "),a("p",[s._v("这种方式比在源码环境下签名简单，App可以在Eclipse或Android Studio下编译，然后给apk重新签名即可。"),a("br"),s._v("\n但这种方式在频繁调试的时候比较痛苦，即使写成脚本，也需要重复一样的操作。")]),s._v(" "),a("h3",{attrs:{id:"相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("相关文件")])]),s._v(" "),a("p",[s._v("platform.x509.pem、platform.pk8、signapk.jar")]),s._v(" "),a("h3",{attrs:{id:"文件位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件位置"}},[s._v("#")]),s._v(" "),a("strong",[s._v("文件位置")])]),s._v(" "),a("p",[s._v("platform.x509.pem、platform.pk8:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("../build/target/product/security\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("signapk.jar:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("../out/host/linux-x86/framework\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("signapk源码路径:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("../build/tools/signapk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"签名命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签名命令"}},[s._v("#")]),s._v(" "),a("strong",[s._v("签名命令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("java -jar signapk.jar platform.x509.pem platform.pk8 old.apk new.apk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" "),a("strong",[s._v("步骤")])]),s._v(" "),a("p",[s._v("1、将相关文件及源apk文件置于同一路径下")]),s._v(" "),a("p",[s._v("2、检查源apk包，去掉"),a("code",[s._v("META-INF/CERT.SF")]),s._v(" 和 "),a("code",[s._v("META-INF/CERT.RSA")]),s._v(" 文件")]),s._v(" "),a("p",[s._v("3、执行签名命令即可")]),s._v(" "),a("h2",{attrs:{id:"三、android-studio生成系统签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、android-studio生成系统签名"}},[s._v("#")]),s._v(" "),a("strong",[s._v("三、Android Studio生成系统签名")])]),s._v(" "),a("p",[s._v("让Android Studio集成系统签名，需要用到一个工具"),a("code",[s._v("keytool-importkeypair")]),s._v("，详见下文。")]),s._v(" "),a("h4",{attrs:{id:"keytool-importkeypair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keytool-importkeypair"}},[s._v("#")]),s._v(" "),a("strong",[s._v("keytool-importkeypair")])]),s._v(" "),a("blockquote",[a("p",[s._v("keytool-importkeypair – A shell script to import key/certificate pairs into an existing Java keystore")])]),s._v(" "),a("p",[s._v("这个工具的作用是将系统签名的相关信息导入到已有的签名文件里。可从"),a("a",{attrs:{href:"https://github.com/getfatday/keytool-importkeypair",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v("下载。")]),s._v(" "),a("p",[s._v("工具的使用方法可以通过–help或README.textile来寻求帮助，或参考"),a("a",{attrs:{href:"http://czj4451.iteye.com/blog/1487684",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用keytool工具"),a("OutboundLink")],1),s._v(" 这篇文章。")]),s._v(" "),a("h4",{attrs:{id:"相关文件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文件-2"}},[s._v("#")]),s._v(" "),a("strong",[s._v("相关文件")])]),s._v(" "),a("p",[s._v("platform.x509.pem、platform.pk8、keytool-importkeypair、demo.jks、signature.sh")]),s._v(" "),a("p",[s._v("我的做法是在App根目录新建Signature文件夹专门存放签名相关文件。")]),s._v(" "),a("h4",{attrs:{id:"步骤-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2"}},[s._v("#")]),s._v(" "),a("strong",[s._v("步骤")])]),s._v(" "),a("p",[s._v("1、生成demo.jks签名文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20230629142000050.png",alt:"image-20230629142000050"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20230629142039888.png",alt:"image-20230629142039888"}})]),s._v(" "),a("p",[s._v("2、编写签名脚本signature.sh，内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 转换系统签名命令")]),s._v("\n./keytool-importkeypair -k platform.jks -p android -pk8 platform.pk8 -cert platform.x509.pem -alias androiddebugkey\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# platform.jks : 签名文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# android : 签名文件密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# platform.pk8、platform.x509.pem : 系统签名文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# androiddebugkey : 签名文件别名")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("为脚本文件添加可执行权限：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x signature.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行脚本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ./signature.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、配置builde.gradle")]),s._v(" "),a("p",[s._v("在android区域下(与defaultConfig同级)添加配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("signingConfigs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    release "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        keyAlias "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'androiddebugkey'")]),s._v("\n        keyPassword "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'android'")]),s._v("\n        storePassword "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'android'")]),s._v("\n\n\t\tstoreFile file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${rootDir}")]),s._v("/.android/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${product_name}")]),s._v('/platform.jks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    debug "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        keyAlias "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'androiddebugkey'")]),s._v("\n        keyPassword "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'android'")]),s._v("\n        storePassword "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'android'")]),s._v("\n\n\t\tstoreFile file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${rootDir}")]),s._v("/.android/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${product_name}")]),s._v('/platform.jks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("这样debug或release apk就带有系统签名了。")]),s._v(" "),a("p",[s._v("如果想直接"),a("code",[s._v("Run app")]),s._v("就是release版且带系统签名的apk，还需修改Build Variants为debug/release：")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("修改"),a("code",[s._v("buildTypes")]),s._v("：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("buildTypes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    release "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        minifyEnabled "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        proguardFiles getDefaultProguardFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'proguard-android.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'proguard-rules.txt'")]),s._v("\n        signingConfig signingConfigs.release\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这样直接"),a("code",[s._v("Run app")]),s._v("就是带系统签名的release版apk了。")]),s._v(" "),a("h2",{attrs:{id:"参考网址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考网址"}},[s._v("#")]),s._v(" 参考网址")]),s._v(" "),a("p",[s._v("https://blog.csdn.net/Donald_Zhuang/article/details/127472471在Android Studio中开发系统应用的环境配置")]),s._v(" "),a("p",[s._v("https://www.jianshu.com/p/10889088840e ：一次调用android.jar的internal与hideApi的解决方案\nhttps://www.jianshu.com/p/10889088840e：开源带hide api的android.jar项目\nhttps://hardiannicko.medium.com/create-your-own-android-hidden-apis-fa3cca02d345 ：自行创建 android.jar教程\nhttps://blog.csdn.net/DKBDKBDKB/article/details/122347440 : Android11 全编译后无法生成framework.jar的解决方案\nhttps://stackoverflow.com/questions/39657812/how-to-import-x509-pem-pk8-file-into-jks-keystore ：How to import x509.pem pk8 file")]),s._v(" "),a("p",[s._v("本文转自 "),a("a",{attrs:{href:"https://blog.csdn.net/zhixuan322145/article/details/51277921",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/zhixuan322145/article/details/51277921"),a("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);a.default=r.exports}}]);