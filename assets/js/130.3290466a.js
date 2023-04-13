(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{586:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("a",{attrs:{"data-fancybox":"",title:"img",href:"https://raw.githubusercontent.com/shug666/image/main/images/20200724170459543.png"}},[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/20200724170459543.png",alt:"img"}})])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_43405104/article/details/107548539",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考链接"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"kl文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kl文件"}},[s._v("#")]),s._v(" kl文件")]),s._v(" "),t("p",[t("strong",[s._v("kl")]),s._v("（"),t("strong",[s._v("key layout")]),s._v("）文件是一个映射文件，是"),t("strong",[s._v("标准linux")]),s._v("与"),t("strong",[s._v("anroid键值")]),s._v("之间的映射文件。作用是将Linux scancode转换为Android keycode。scancode就是硬件直接扫描到的数字，而这些数字会通过这个kl文件对应到字符串，也就是keycode。设备可以拥有自己专属的kl文件。另外系统提供了一个特殊的内置常规按键布局文件，名为 Generic.kl。当找不到专属的kl时候就会用Generic.kl")]),s._v(" "),t("p",[s._v("Generic.kl文件在代码中的位置为")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("./framewprk/base/data/keyboards/Generic.kl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("kl文件")]),s._v("可以有很多个，但是它有一个使用优先级：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/system/usr/keylayout/Vendor_XXXX_Product_XXXX_Version_XXXX.kl  \n/system/usr/keylayout/Vendor_XXXX_Product_XXXX.kl  \n/system/usr/keylayout/DEVICE_NAME.kl  \n/data/system/devices/keylayout/Vendor_XXXX_Product_XXXX_Version_XXXX.kl  \n/data/system/devices/keylayout/Vendor_XXXX_Product_XXXX.kl  \n/data/system/devices/keylayout/DEVICE_NAME.kl  \n/system/usr/keylayout/Generic.kl  \n/data/system/devices/keylayout/Generic.kl \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("strong",[s._v("vendor id")]),s._v("和"),t("strong",[s._v("product id")]),s._v("。根据这两个"),t("strong",[s._v("id")]),s._v("创建对应名称的"),t("strong",[s._v("kl")]),s._v("文件，然后传入设备的对应目录，重启即可看到效果。")]),s._v(" "),t("h3",{attrs:{id:"kl文件命名含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kl文件命名含义"}},[s._v("#")]),s._v(" kl文件命名含义")]),s._v(" "),t("p",[s._v("kl文件在源码内的目录："),t("strong",[s._v("\\RTD2853R\\kernel\\android\\R\\frameworks\\base\\data\\keyboards")])]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"img",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/4273129-2d321ecfed4b958d.png"}},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/4273129-2d321ecfed4b958d.png",alt:"img"}})])]),s._v(" "),t("p",[s._v("目录下的"),t("strong",[s._v("kl文件")]),s._v("非常多，这里以"),t("strong",[s._v("Vendor_0b05_Product_4500.kl")]),s._v("为例：")]),s._v(" "),t("p",[t("strong",[s._v("Vendor_0b05")]),s._v(" ：表示生产商代码是"),t("strong",[s._v("0b05")])]),s._v(" "),t("p",[t("strong",[s._v("Product_4500")]),s._v(" ：表示产品型号为"),t("strong",[s._v("4500")])]),s._v(" "),t("p",[s._v("之后再跟输入设备的对应"),t("strong",[s._v("id")]),s._v("进行匹配，就可以知道该"),t("strong",[s._v("kl文件")]),s._v("所对应的设备。")]),s._v(" "),t("h3",{attrs:{id:"获得输入设备和按键信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获得输入设备和按键信息"}},[s._v("#")]),s._v(" 获得输入设备和按键信息")]),s._v(" "),t("p",[s._v("实际开发中我们可以通过"),t("strong",[s._v("getevent")]),s._v("获取到输入设备的"),t("strong",[s._v("vendor id")]),s._v("，"),t("strong",[s._v("product id")]),s._v("和"),t("strong",[s._v("按键事件值")]),s._v("\n通过串口连接后输入"),t("strong",[s._v("getevent")])]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20220820113829296",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220820113829296.png"}},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220820113829296.png",alt:"image-20220820113829296"}})])]),s._v(" "),t("p",[s._v("以上的输出分为两个部分，上半部分代表当前设备上的输入设备，下面是点击按键后产生的输出。")]),s._v(" "),t("p",[s._v("可以看到遥控器按键对应的输入设备节点为 "),t("strong",[s._v("/dev/input/event0")]),s._v(" 。")]),s._v(" "),t("p",[s._v("之后通过"),t("strong",[s._v("getevent -i /dev/input/event0")]),s._v("查看该设备的"),t("strong",[s._v("vendor id")]),s._v("和"),t("strong",[s._v("product id")]),s._v("。输出结果如下：")]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"img",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/4273129-ce87a37852c5c5d6.png"}},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/4273129-ce87a37852c5c5d6.png",alt:"img"}})])]),s._v(" "),t("p",[s._v("此时我们就可以根据对应的"),t("strong",[s._v("vendor id")]),s._v("和"),t("strong",[s._v("product id")]),s._v("创建自己的"),t("strong",[s._v("kl文件")]),s._v("，然后传入设备中验证，首先去源码对应的目录中找到对应的"),t("strong",[s._v("kl文件")]),s._v("来增加按键映射，即"),t("strong",[s._v("Vendor_0416_Product_038f.kl")]),s._v("文件，如果没有该文件，那么证明系统针对该设备的按键做特殊处理，之后就会根据上述所说的使用优先级去加载其他的"),t("strong",[s._v("kl文件")]),s._v("。这里我们新建一个"),t("strong",[s._v("Vendor_0416_Product_038f.kl")]),s._v("文件。然后根据分析的按键信息来往里面添加内容。")]),s._v(" "),t("h3",{attrs:{id:"按键信息分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按键信息分析"}},[s._v("#")]),s._v(" 按键信息分析")]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20220820133509389",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220820133509389.png"}},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220820133509389.png",alt:"image-20220820133509389"}})])]),s._v(" "),t("p",[s._v("我们每次按键会有四个输出，前两行为"),t("strong",[s._v("按下")]),s._v("，后两行为"),t("strong",[s._v("抬起")]),s._v("，"),t("strong",[s._v("0001")]),s._v("指按键（也存在其他设备类型，这里我们不关心）")]),s._v(" "),t("p",[t("strong",[s._v("0066")]),s._v("是对应的"),t("strong",[s._v("十六进制按键值")]),s._v("，这里就是"),t("strong",[s._v("驱动")]),s._v("所设置的"),t("strong",[s._v("按键值")]),s._v("，可以去找驱动提供头文件查看该值所对应的"),t("strong",[s._v("按键名称")]),s._v("。")]),s._v(" "),t("p",[s._v("末尾的部分，"),t("strong",[s._v("00000001")]),s._v("为按下，"),t("strong",[s._v("00000000")]),s._v("为抬起。")]),s._v(" "),t("p",[s._v("在驱动提供的按键值input-event-codes.h头文件中，在文件内对应按键如下:")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("KEY_TESTCODE")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x360")])])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后在我们默认的"),t("strong",[s._v("kl文件")]),s._v("，即"),t("strong",[s._v("venus_IR_input.kl")]),s._v("中找到"),t("strong",[s._v("0x360对应的10进制")]),s._v("对应"),t("strong",[s._v("Android")]),s._v("中的按键值如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("key 864     TESTCODE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里即将"),t("strong",[s._v("驱动")]),s._v("上报的"),t("strong",[s._v("KEY_TESTCODE")]),s._v("转成了"),t("strong",[s._v("Android")]),s._v("的"),t("strong",[s._v("TESTCODE")]),s._v("按键，"),t("strong",[s._v("Android")]),s._v("对应的"),t("strong",[s._v("按键值列表头文件")]),s._v("目录为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/frameworks/native/include/android/keycodes.h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果我们要修改"),t("strong",[s._v("驱动层")]),s._v("上报的按键在"),t("strong",[s._v("Android")]),s._v("所对应的按键值，那么就可以在该头文件查找对应的按键，然后在"),t("strong",[s._v("kl文件")]),s._v("进行配置。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/1b0ae800b5bf",target:"_blank",rel:"noopener noreferrer"}},[s._v("可参考Android 按键映射kl文件编写简析"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("shugan6766@gmail.com")]),s._v(" "),t("h2",{attrs:{id:"android调试常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android调试常用命令"}},[s._v("#")]),s._v(" Android调试常用命令")]),s._v(" "),t("h3",{attrs:{id:"input-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-命令"}},[s._v("#")]),s._v(" input 命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("input keyevent KEYCODE_TESTCODE(或403)：可以向系统发送按键事件\n\ninput text<String>：可以接收字符串的UI 控件输入字符\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"dumpsys命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dumpsys命令"}},[s._v("#")]),s._v(" dumpsys命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('dumpsys input：可以查看输入设备情况,这个命令可以查看到输入设备映射到了哪一个kl文件\n\nKeyLayoutFile: /vendor/usr/keylayout/venus_IR_input.kl\n\n其他--------------------------\ndumpsys window w | grep \\/ | grep name：获取当前apk包名；\ndumpsys meminfo：显示当前进程的内存使用以及每个 adj（oom adjustment）可回收内存的情况。\ndumpsys meminfo com.mstar.tv.service：显示某包的内存使用情况；\ndumpsys activity：显示四大组件的一些正在运行和 历史的全局变量信息，比如stack中 的activity；\ndumpsys activity top | grep activity：查看 当前界面是哪个activity；\ndumpsys notification：查看当前几秒内弹出的toast，dialog具体由哪个apk弹出；\ndumpsys | grep "service"：查看framework有哪些服务；\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"getevent命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getevent命令"}},[s._v("#")]),s._v(" getevent命令")]),s._v(" "),t("p",[s._v("查看输入设备/dev/input/event*是否有数据输入，查看键值，常用来调试遥控器")]),s._v(" "),t("p",[s._v("vendor 号和input name："),t("strong",[s._v("可以通过cat /proc/bus/input/devices命令查看，当然getevent -p也可以查看")])]),s._v(" "),t("h3",{attrs:{id:"logcat命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logcat命令"}},[s._v("#")]),s._v(" logcat命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('logcat -s "tag"\n\nlogcat -v threadtime -f /data/log.txt：后台抓log，带时间戳。\n\n//过滤TAG为ActivityManager输出级别大于等于I的日志与TAG为MyApp输出级别大于D的日志\n最后的元素 *:S ,，是设置所有的标 签为”silent”，所有日志只显示有”View” and “MyApp”的，用 *:S 的另一个用处是 能够确保日志输出的时候是按照过滤器的说明限制的，也让过滤器也作为一项输出到日志中.\nlogcat ActivityManager:I MyApp:D *:S\n \nlogcat  *:W     //显示优先级为warning或更高的日志信息\n\n//只输出程序包名为“com.rexen.zxapplication”的日志\nshell "logcat | grep com.rexen.zxapplication" >D:\\android-sdk\\log\\log.txt      \n \nlogcat -d //将缓冲区的log打印到屏幕并退出\n \nlogcat -c //清除缓冲区log（testCase运行前可以先清除一下）\n \nlogcat -g //打印缓冲区大小并退出\n \nlogcat -f /data/local/tmp/log.txt -n 10 -r 1  //输出log\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.freesion.com/article/2898889036/",target:"_blank",rel:"noopener noreferrer"}},[s._v("最后可参考"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);