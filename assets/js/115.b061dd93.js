(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{570:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"user版本打开uart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user版本打开uart"}},[s._v("#")]),s._v(" user版本打开uart")]),s._v(" "),t("h3",{attrs:{id:"_1-开启使用串口-uart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启使用串口-uart"}},[s._v("#")]),s._v(" 1.开启使用串口(uart)")]),s._v(" "),t("p",[s._v("bootable/bootloader/lk/app/mt_boot/mt_boot.c")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ifdef USER_BUILD                ")]),s._v("\n        sprintf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cmdline,"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%s%s"')]),s._v(",cmdline,"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" printk.disable_uart=1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#else")]),s._v("\n        sprintf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cmdline,"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%s%s"')]),s._v(",cmdline,"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" printk.disable_uart=0 ddebug_query='),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("file *mediatek* +p ; file *gpu* =_"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#endif")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("将上面的printk.disable_uart=1改成printk.disable_uart=0，然后重新编译lk, download lk 即可；或者直接download eng版本的lk。")]),s._v(" "),t("h3",{attrs:{id:"_2-开启uart-的控制台-console-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-开启uart-的控制台-console-sh"}},[s._v("#")]),s._v(" 2.开启Uart 的控制台(console/sh)")]),s._v(" "),t("p",[s._v("system/core/rootdir/init.rc")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" console /system/bin/sh\n    class core\n    console\n    disabled\n    user shell\n    seclabel u:r:shell:s0\n\non property:ro.debuggable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    start console\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("注释掉on property:ro.debuggable=1，然后重新编译bootimage 即可。")]),s._v(" "),t("p",[s._v("如何在Uart 上抓取上层LOG")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Uart 上进行输入，实际就是开启了一个sh 对接起来，所以绝对不能在uart 上输入一个长命令(不可中断)，否则uart 将被卡住，不能再输入。")])]),s._v(" "),t("li",[t("p",[s._v("抓取上层log, 我们通常需要使用logcat, 但logcat 是不可中断的，将导致uart 不能再输入。")])]),s._v(" "),t("li",[t("p",[s._v("处理的方法即将logcat 转入后台执行，如下操作即可:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Main log: logcat -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\nRadio log: logcat -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" -b radio "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\nEvent log: logcat -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" -b events "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("如果想关闭上层log, 直接ps 查阅前面开启的logcat process pid, 然后kill -9 pid 杀掉即可。"),t("br"),s._v(" "),t("strong",[s._v("注意一定要带“&”，否则将block 住uart输入")])])])]),s._v(" "),t("h2",{attrs:{id:"让android-log从串口kernel-log输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#让android-log从串口kernel-log输出"}},[s._v("#")]),s._v(" 让android log从串口kernel log输出")]),s._v(" "),t("p",[s._v("分析无法开机问题，如串口RX/TX连接正常，可正常输入，请参考上面第3点。")]),s._v(" "),t("p",[s._v("如确认RX/TX连接正常，但不能输入，则可能是下面原因导致：")]),s._v(" "),t("p",[s._v("数据流控制是否正确，一般需关闭，下面为RS232的三种流控制模式介绍：")]),s._v(" "),t("ol",[t("li",[s._v("DTR/DSR：硬件上要有对应接口，软件上实现对应协议，才能实现此流控制。具体实现起来，一般好像是和RTS/CTS一直搭配使用。")]),s._v(" "),t("li",[s._v("RTS/CTS：硬件上要有对应接口，软件上实现对应协议，才能实现此流控制。一般常见的也就是这种。但是很多开发板用secureCRT连接开发板的时候，往往都是在Uboot阶段，那时候还没有实现对应的RTS/CTS的流控制，所以此处需要取消此选择，否则，secureCRT就会去一直检测对应的RTS（Request To Send）pin脚，发现一直是无效，所以就一直没有接受到数据，就“卡”在那了。同样，你要输入数据，就是secureCRT要发送数据，所以其先发了个RTS给开发板，然后就一直检测自己的CTS是否有效，直到自己的CTS有效后，才能发送数据，而此处由于开发板上的驱动没有实现RTS/CTS，所以secureCRT就一直检测CTS，就“卡”死了，即你无法输入数据。")]),s._v(" "),t("li",[s._v("XON/XOFF：软件上实现的流控制，硬件上无需像上面的RTS/CTS或DTR/DSR那样要增加对应的引脚。但是由于XON/XOFF分别对应的两个二进制的值，所以如果本身传输数据中包括该值，那么此软件的流控制就失效了。现在好像也很少用此种流控制了。")]),s._v(" "),t("li",[s._v("是否打开回显")])]),s._v(" "),t("p",[s._v("串口分析kernel log正常但adb连不上时，并且串口只能输出时，希望让android log也从串口输出，可以尝试此方法，以下是一个验证过的示例。")]),s._v(" "),t("p",[s._v("原理上就是根据kernel log能够从串口输出，只要将logcat重定向到kmsg即可实现，因此各个平台的原理是一样的应该通用。（但须注意这样打印虽然能够有android log从串口输出，但串口输出量过大可能会出现丢log的情况）")]),s._v(" "),t("p",[s._v("system/core/rootdir/init.rc中添加：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 0660 /proc/kmsg\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###############################################################")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect logs(LOGE, LOGI...) to linux console")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###############################################################")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" logcat /system/bin/logcat -f /dev/kmsg *:D\n    class main\n    user root\n    group log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("本文转自 "),t("a",{attrs:{href:"https://blog.csdn.net/y_lang/article/details/46989801?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-46989801-blog-54287930.235%5Ev38%5Epc_relevant_anti_vip_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-46989801-blog-54287930.235%5Ev38%5Epc_relevant_anti_vip_base&utm_relevant_index=5",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/y_lang/article/details/46989801?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-46989801-blog-54287930.235%5Ev38%5Epc_relevant_anti_vip_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-46989801-blog-54287930.235%5Ev38%5Epc_relevant_anti_vip_base&utm_relevant_index=5"),t("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=n.exports}}]);