(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{519:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("adb install 报[INSTALL_FAILED_INVALID_APK],apk是一个持久性应用程序,持久性应用程序是不可更新的。")]),s._v(" "),a("h2",{attrs:{id:"电视开机时按住esc进入bootcode模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电视开机时按住esc进入bootcode模式"}},[s._v("#")]),s._v(" 电视开机时按住esc进入bootcode模式")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" OEMLock off  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭OEM锁")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" save "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启TV")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"将system挂载后即可进行替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将system挂载后即可进行替换"}},[s._v("#")]),s._v(" 将System挂载后即可进行替换")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$adb")]),s._v(" root  $获取root权限\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$adb")]),s._v(" disable-verity  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭分区检测功能")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$adb")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行adb disable-verity后需要重启设备")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$adb")]),s._v(" root   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设备重启后再次获取root权限")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$adb")]),s._v(" remount  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使system分区为可读可写模式，mount -o rw,remount /system")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$adb")]),s._v(" push TopTechTvService.apk /system/app/TopTechTvService "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#替换原来的文件")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$adb")]),s._v(" shell \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#然后进入/system/app/TopTechTvService目录")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sync")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新缓冲区")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$reboot")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"adb-shell-sync-命令和adb-sync命令的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adb-shell-sync-命令和adb-sync命令的区别"}},[s._v("#")]),s._v(" adb shell sync 命令和adb sync命令的区别")]),s._v(" "),a("p",[s._v("adb shell sync 命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1，在shell中执行\n2，将内存缓冲区中的数据 写入到磁盘\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("adb sync 命令：\n命令意思：同步更新/data/或/system/下的数据")]),s._v(" "),a("p",[s._v("命令用法：adb sync [directory]")]),s._v(" "),a("p",[s._v("如果不指定目录，将同步更新/data/和/system/")]),s._v(" "),a("h2",{attrs:{id:"adb-shell打开开发者选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adb-shell打开开发者选项"}},[s._v("#")]),s._v(" adb shell打开开发者选项")]),s._v(" "),a("p",[s._v("1.如果是正常的手机或者平板的Settings版本可以使用：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$am")]),s._v(" start -n com.android.settings/com.android.settings.DevelopmentSettings\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.如果是电视的TVSettings版本可以使用：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$am")]),s._v(" start -n com.android.tv.settings/com.android.tv.settings.system.development.DevelopmentActivity\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上都是RK平台的")]),s._v(" "),a("h2",{attrs:{id:"安卓手机解锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安卓手机解锁"}},[s._v("#")]),s._v(" 安卓手机解锁")]),s._v(" "),a("p",[s._v("提示：Device is locked. Please unlock the device first")]),s._v(" "),a("p",[s._v("1.首先需要打开开发者模式中的OEM unlocking开关")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/20190413180428685.png",alt:"img"}})]),s._v(" "),a("p",[s._v("2.adb reboot bootloader")]),s._v(" "),a("p",[s._v("3.fastboot flashing unlock")]),s._v(" "),a("p",[s._v("4.fastboot getvar unlocked")]),s._v(" "),a("p",[s._v("等待结果 一般会出现unlocked：yes")])])}),[],!1,null,null,null);a.default=n.exports}}]);