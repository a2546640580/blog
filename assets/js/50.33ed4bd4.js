(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{508:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本篇先对ANR做一个简单认识和理解，关于如何分析ANR问题下一篇再讲。")]),s._v(" "),t("h2",{attrs:{id:"anr简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anr简介"}},[s._v("#")]),s._v(" ANR简介：")]),s._v(" "),t("p",[s._v("ANR，是“Application Not Responding”的缩写，即“应用程序无响应”。直观地说就是：“又卡了？”")]),s._v(" "),t("p",[s._v("与Java Crash或者Native Crash不同，ANR并不会导致程序崩溃，如果用户愿意等待，大多数ANR在一段时间后都是可以恢复的。但对于用户而言，打开一个窗口就要黑屏8秒，或者按下一个按钮后10秒程序没有任何响应显然是不可接受的。为了便于开发者Debug自己程序中响应迟缓的部分，Android提供了ANR机制。ActivityManagerService(简称 AMS)和 WindowManagerService(简称 WMS)会监测应用程序的响应时间，如果应用程序主线程(即 UI 线程)在超时时间内对输入事件没有处理完毕，或者对特定操作没有执行完毕，就会出现 ANR。")]),s._v(" "),t("h2",{attrs:{id:"发生anr的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发生anr的原因"}},[s._v("#")]),s._v(" 发生ANR的原因")]),s._v(" "),t("p",[s._v("1： ANR产生的原因：")]),s._v(" "),t("p",[s._v("Android的UI线程响应超时就会引起ANR， 主要体现在两种情况中：")]),s._v(" "),t("blockquote",[t("p",[s._v("1： 当前事件没机会处理，UI线程正在处理其余的事情，当前的事件被其他事件所阻塞")]),s._v(" "),t("p",[s._v("2： 当前事件正在被处理，但是耗时时间太长没有及时完成。在不同组件里面响应的时间也不一样，Activity响应时间为5秒，广播接受者为10秒，服务为20秒")])]),s._v(" "),t("p",[s._v("2：典型的ANR场景：")]),s._v(" "),t("blockquote",[t("p",[s._v("1: 应用程序UI线程存在耗时操作， 如UI线程进行网络请求， 数据库操作或者文件操作， 这些耗时操作的情况都可能会导致UI线程无法及时处理用户的输入,导致ANR产生。")]),s._v(" "),t("p",[s._v("2：UI线程等待子线程释放一个锁，从而无法处理用户的请求输入")]),s._v(" "),t("p",[s._v("3：耗时操作的动画需要大量的计算工作， 导致CPU的负荷很重。")])]),s._v(" "),t("p",[s._v("一般地，ANR的产生需要同时满足三个条件：")]),s._v(" "),t("p",[s._v("主线程：只有应用程序进程的主线程响应超时才会产生ANR。因为只有主线程也就是UI线程需要与用户进行交互，子线程的阻塞或者缓慢只要不影响主线程就不会引发ANR。")]),s._v(" "),t("p",[s._v("超时时间：不同类型ANR的超时时间不同，只要主线程在这个时间上限内没有响应就会ANR。")]),s._v(" "),t("p",[s._v("输入事件/特定操作：输入事件是指按键、触屏等设备输入事件，特定操作是指BroadcastReceiver和Service的生命周期中的各个函数，产生ANR的场景不同，报出ANR的原因也会不同。")]),s._v(" "),t("p",[s._v("如何理解“产生 ANR 的场景不同，报出ANR的原因也会不同”呢？假设应用程序主线程被阻塞，如果用户点击屏幕，稍后会报出“用户输入事件处理超时”ANR；如果来了需要处理的广播，会导致“广播处理超时”；如果用户切换窗口，则可能导致“窗口获取焦点超时”。同一个阻塞的位置和原因，在不同情况下报出的ANR类型和现象可能是不同的。这就需要在分析过程中透过现象看本质，找到不同Bug共同的原因，从而准确、快速地处理。")]),s._v(" "),t("h2",{attrs:{id:"anr的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anr的类型"}},[s._v("#")]),s._v(" ANR的类型")]),s._v(" "),t("h3",{attrs:{id:"用户输入事件处理超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户输入事件处理超时"}},[s._v("#")]),s._v(" 用户输入事件处理超时")]),s._v(" "),t("p",[s._v("当应用程序的窗口处于活动状态并且能够接收输入事件(例如按键事件、触摸事件等)时，系统底层上报的事件就会被InputDispatcher分发给该应用程序。对大多数窗口而言“处于活动状态”可以理解为“获得焦点”，但是一些具有FLAG_NOT_FOCUSABLE属性的窗口，如Popup窗口，不能获得焦点不能接收按键事件只能接收触摸事件，使得这两个概念不能完全等价。")]),s._v(" "),t("p",[s._v("应用程序的主线程通过InputChannel读取输入事件并交给界面视图处理，界面视图是一个树状结构，DecorView是视图树的根，事件从树根开始一层一层向端点(例如一个 Button)传递。开发者通常需要注册监听器来接收并处理事件，或者创建自定义的视图控件来处理事件。")]),s._v(" "),t("p",[s._v("InputDispatcher运行在system_server进程的一个子线程中，每当接收到一个新的输入事件，InputDispatcher就会检测前一个已经发给应用程序的输入时间是否已经处理完毕，如果超时，会通过一系列的回调通知WMS的notifyANR函数报告ANR发生，")]),s._v(" "),t("p",[s._v("需要注意的是，产生这种ANR的前提是要有输入事件，如果没有输入事件，即使主线程阻塞了也不会报告ANR。从设计的角度看，此时系统会推测用户没有关注手机，寄希望于一段时间后阻塞会自行消失，因此会暂时“隐瞒不报”。从实现的角度看，InputDispatcher没有分发事件给应用程序，当然也不会检测处理超时和报告ANR了。")]),s._v(" "),t("p",[s._v("此类ANR发生时的提示语是：Reason: Input dispatching timed out (Waiting because the focused window has not finished processing the input events that were previously delivered to it.)需要注意区分同为Input dispatching timed out大类的窗口获取焦点超时，这两类超时括号内的提示语是不同的。")]),s._v(" "),t("p",[s._v("此类ANR的超时时间在ActivityManagerService.java中定义，默认为5秒。如果有需要可以修改代码将小内存设备上的超时时间改为8秒。另一个常见的修改是在手机启动后的4分钟内将超时时间暂时提高到15秒，因为开机后MediaServer扫描媒体数据库会消耗大量CPU，这样修改有助以提高Monkey测试时的首错时间。")]),s._v(" "),t("p",[s._v("/frameworks/base/services/core/java/com/android/server/am/ActivityManagerService.java")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" KEY_DISPATCHING_TIMEOUT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"窗口获取焦点超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#窗口获取焦点超时"}},[s._v("#")]),s._v(" 窗口获取焦点超时")]),s._v(" "),t("p",[s._v("窗口获取焦点超时是用户输入事件处理超时的一种子类型，它们都由InputDispatcher向AMS上报。当应用程序的窗口处于“活动状态”并且能够接收输入事件时，系统底层上报的事件就会被InputDispatcher分发给该应用程序。如果由于某种原因，窗口迟迟不能达到“活动状态”，不能接收输入事件，此时InputDispatcher就会报出“窗口获取焦点超时”。")]),s._v(" "),t("p",[s._v("此类ANR发生时的提示语是：Reason: Input dispatching timed out (Waiting because no window has focus but there is a focused application that may eventually add a window when it finishes starting up.)需要注意区分同为Input dispatching timed out大类的用户输入事件处理超时，这两类超时括号内的提示语是不同的。")]),s._v(" "),t("p",[s._v("为了研究窗口为什么会获取焦点超时，我们需要简单了解在窗口切换过程中焦点应用和焦点窗口的切换逻辑。假设当前正处于应用A中，将要启动应用B。启动过程中焦点应用和焦点窗口转换如下：")]),s._v(" "),t("p",[s._v("1、流程开始，焦点应用是A，焦点窗口是A（的某一个窗口）。")]),s._v(" "),t("p",[s._v("2、当A开始OnPause流程后，焦点应用是A，焦点窗口是null。")]),s._v(" "),t("p",[s._v("3、在zygote创建B的进程完毕后，焦点应用是B，焦点窗口是null。")]),s._v(" "),t("p",[s._v("4、应用B的OnResume流程完成后，焦点应用是B，焦点窗口是B（的某一个窗口）。")]),s._v(" "),t("p",[s._v("在这个过程中，如果焦点窗口为null的时间超过了5秒，那么当前焦点应用就会被报告为窗口获取焦点超时类的ANR。")]),s._v(" "),t("p",[s._v("需要注意的是会被报告为ANR的是“当前焦点应用”而不是B。理论上讲创建新应用进程的速度非常快，焦点应用总是能及时地切换到新应用B上，在理想情况下“当前焦点应用”和“新启动的应用B”是等价的。")]),s._v(" "),t("p",[s._v("可惜在实际操作中，某些情况下发生ANR时，被报出ANR的应用并不是真正发生ANR的应用。如果步骤3中zygote迟迟创建不出应用B的进程，那么焦点应用会一直保持在A上，超时后就会报出A发生ANR；此外Android4.4上为了适应多窗口逻辑的需要，WMS和InputDispatcher维护的焦点窗口和焦点应用可以不同步，且原生代码中存在Bug。比如在上述流程中，步骤3中应用B的进程创建完成，但是由于原生Bug导致焦点应用没有转换，超时后同样会报出A发生ANR。")]),s._v(" "),t("p",[s._v("因此在分析窗口获取焦点超时的ANR时，一定要注意分析当前焦点应用和焦点窗口是否一致，首先要明确ANR的真正应用是哪一个，后续的分析才会有价值。"),t("br"),s._v("\n窗口获取焦点超时通常由以下原因导致。")]),s._v(" "),t("p",[s._v("1、应用程序创建慢。程序的OnCreate/OnStart/OnResume方法执行速度慢/存在死锁/死循环导致OnResume迟迟不能执行完毕，超时造成ANR。")]),s._v(" "),t("p",[s._v("2、应用程序OnPause慢。对同一个应用而言，前一次OnPause执行完毕之前后一次OnResume不会执行。但不同应用之间不会互相影响。")]),s._v(" "),t("p",[s._v("3、系统整体性能慢。由于系统性能原因，如CPU占用率高/平均等待队列长/内存碎片化/页错误高/GC慢/用户空间冻结/进程陷入不可打断的睡眠，会造成整体运行慢使ANR频繁发生。")]),s._v(" "),t("h3",{attrs:{id:"广播超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#广播超时"}},[s._v("#")]),s._v(" 广播超时")]),s._v(" "),t("p",[s._v("当应用程序主线程在执行BroadcastReceiver的onReceive方法时，超时没有执行完毕，就会报出广播超时类型的ANR。对于前台进程超时时间是10秒，后台进程超时时间是60秒。如果需要完成一项比较耗时的工作，应当通过发送Intent给应用的Service来完成，而不应长时间占用OnReceive主线程。与前两类ANR不同，系统对这类ANR不会显示对话框提示，仅在slog中输出异常信息。")]),s._v(" "),t("p",[s._v("此类ANR发生时的提示语是：Reason: Broadcast of Intent { act=android.net.wifi.WIFI_STATE_CHANGED flg=0x4000010 cmp=com.android.settings/.widget.SettingsAppWidgetProvider (has extras) }")]),s._v(" "),t("p",[s._v("在小内存Android设备上，Kernel中的LowMemoryKiller会频繁地杀死一些后台应用以释放内存。如果一个应用恰好在开始执行OnReceive方法时被LMK杀死，那么在60秒后BoardcastQueue检查广播处理情况时此应用就一定会发生ANR。这种场景的关键特征是报出ANR时System.log中会显示ANR应用的PID为0。")]),s._v(" "),t("p",[s._v("为避免此类问题发生，提高Monkey测试首错时间，可以在BoardcastQueue中添加代码，检测广播超时ANR的PID，为0时不报ANR。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastHandler")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Handler")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Looper")]),s._v(" looper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("looper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("what"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" BROADCAST_INTENT_MSG"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DEBUG_BROADCAST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Slog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                            TAG_BROADCAST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Received BROADCAST_INTENT_MSG"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("processNextBroadcast")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" BROADCAST_TIMEOUT_MSG"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("broadcastTimeoutLocked")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"service-执行超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-执行超时"}},[s._v("#")]),s._v(" Service 执行超时")]),s._v(" "),t("p",[s._v("Service 的各个生命周期函数，如OnStart、OnCreate、OnStop也运行在主线程中，当这些函数超过 20 秒钟没有返回就会触发 ANR。同样对这种情况的 ANR 系统也不会显示对话框提示,仅是输出 log。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" SERVICE_TIMEOUT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scheduleServiceTimeoutLocked")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProcessRecord")]),s._v(" proc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("proc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("executingServices"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" proc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("thread "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),s._v(" msg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mAm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("obtainMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ActivityManagerService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SERVICE_TIMEOUT_MSG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" proc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        mAm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessageDelayed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                proc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execServicesFg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" SERVICE_TIMEOUT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" SERVICE_BACKGROUND_TIMEOUT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"contentprovider执行超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contentprovider执行超时"}},[s._v("#")]),s._v(" ContentProvider执行超时")]),s._v(" "),t("p",[s._v("在Android平台上，为方便ContentProvider进行Debug增加了此类ANR。当主线程在执行ContentProvider相关操作时没有在规定的时间内执行完毕就会发生ANR。由程序开发者自行设置是否启用以及超时时间。ANR发生时的提示语为：Reason: ContentProvider not responding。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("appNotRespondingViaProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IBinder")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enforceCallingPermission")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REMOVE_TASKS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appNotRespondingViaProvider()"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ContentProviderConnection")]),s._v(" conn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ContentProviderConnection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("conn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Slog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("w")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TAG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ContentProviderConnection is null"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProcessRecord")]),s._v(" host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" conn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("provider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("proc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Slog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("w")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TAG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Failed to find hosting ProcessRecord"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        mHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                mAppErrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("appNotResponding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ContentProvider not responding"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h2",{attrs:{id:"anr的分析过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anr的分析过程"}},[s._v("#")]),s._v(" ANR的分析过程")]),s._v(" "),t("p",[s._v("1： 当一个ANR的问题产生， 我们无法确认是ANR watchdog或者是crash。每一种类型的问题的产生都有不同的影响范围和表现形态， 一般冻屏， 一段时间后程序退出， 这种情况的产生都是ANR。在我们的AP Log中，ANR的filter字段一般有这几种: ANR low_memory slow_operation. 我们根据这些关键字搜索到发生ANR的地方：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/27529213-ee8dd85fdf301a69.png",alt:""}})]),s._v(" "),t("blockquote",[t("p",[s._v("上面的log我们可以定位到产生ANR的具体时间点和应用：")]),s._v(" "),t("p",[s._v("1：ActivityManager( 996): ANR in ... ANR发生在哪个应用")]),s._v(" "),t("p",[s._v("2：PID：8625: 产生ANR应用的线程号")]),s._v(" "),t("p",[s._v("3：ActivityManager( 996): Reason: Input dispatching timed out ANR产生的原因")]),s._v(" "),t("p",[s._v("4：Load: 3.46 / 2.71 / 1.24 CPU前1分钟、5分钟、15分钟的CPU平均负载")]),s._v(" "),t("p",[s._v("5： ActivityManager( 996): CPU usage from 94ms to 643ms later (2000-01-01 00:03:36.926 to 2000-01-01 00:03:37.475): 注意这里是later，代表ANR发生之后，记录的时间是2000-01-01 00:03:36.926 to 2000-01-01 00:03:37.475这个时间间隔之间。")]),s._v(" "),t("p",[s._v("由上面的分析， 我们可以看出来具体的某一个应用因为input dispatching超时产生了ANR。但是这依然看不出具体的原因呀。 这里我们就需要查看ANR log日志了。")])]),s._v(" "),t("p",[s._v("2： ANR log日志在系统的data/anr目录下， 我们将所有的anr log日志pull出来。")]),s._v(" "),t("blockquote",[t("p",[s._v("这么多的ANR log日志我们怎么去看 怎么分析呢。"),t("br"),s._v("\n上面的 ActivityManager( 996): CPU usage from 94ms to 643ms later后面这个时间点事关键，查找在对应时间点输出的ANR log日志， 很明显发生ANR的时间在anr_2000-01-01-00-03-37-561这个时间点里面，那么这个文件就是我们需要的文件了")])]),s._v(" "),t("p",[s._v("3： 打开这个文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/27529213-1ad6dfa2e75d3a02.png",alt:""}})]),s._v(" "),t("blockquote",[t("p",[s._v("1： pid： 8625 对的上")]),s._v(" "),t("p",[s._v("2： cmd line: 包名对得上 check完毕")]),s._v(" "),t("p",[s._v("3： 查看UI线程，搜索main")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/27529213-143333d1b4e47b67.png",alt:""}})]),s._v(" "),t("blockquote",[t("p",[s._v("1: 主线程 sleeping 阻塞了")]),s._v(" "),t("p",[s._v("2: 可以清晰的看到这个应用在发生ANR的调用栈。这样我们也就定位到具体的问题原因了。")]),s._v(" "),t("p",[s._v("3: 针对具体问题原因来定义解决方案")])]),s._v(" "),t("p",[s._v("应用如何避免ANR")]),s._v(" "),t("p",[s._v("造成ANR的原因可以分成两大类，系统原因与应用原因。系统原因是指在手机开发过程中，由于Kernel、FrameWork、驱动存在问题，导致系统工作不稳定，最终在应用层表现出来的ANR。如CPU驱动错误导致四核手机只有一个核运行、Kernel将用户空间冻结导致任何程序都不能执行、I/O吞吐量低下导致应用程序长时间等待I/O，HAL层实时进程长时间占用CPU导致调度队列过长、AMS原生Bug导致系统焦点不能正确转换等等。对于此类问题，如果底层无法在交付时确保系统稳定，就需要在分析大量ANR问题的基础上提炼出其共同规律，针对疑点添加debug信息，再通过长时间的复测才能加以解决。")]),s._v(" "),t("p",[s._v("应用原因是指应用程序主线程死锁、阻塞或者性能低下导致ANR。应用自身为避免发生ANR，应当在程序开发中注意避免将耗时的操作放在主线程，耗时操作包括：")]),s._v(" "),t("p",[s._v("1、数据库操作。 数据库操作尽量采用异步方法做处理，Monkey测试中IOWait可能会很高，此时一个微不足道的数据库查询操作都可能需要很长时间才能返回。")]),s._v(" "),t("p",[s._v("2、初始化的数据和控件太多。可以用布局查看工具HierarchyViewer来优化UI设计，避免深层嵌套。")]),s._v(" "),t("p",[s._v("3、频繁的创建线程或者其它大对象。有些应用在Monkey测试中会创建出800+子线程，显然应避免这样做。")]),s._v(" "),t("p",[s._v("4、加载过大数据和图片。对于彩信或Gallery，设计时应当考虑加载缩略图而不是原始图片，因为测试很喜欢用100M的jpg图片做压力测试。")]),s._v(" "),t("p",[s._v("5、对大数据排序和循环操作。曾有人写出复杂度为O(n^2)的通讯录联系人匹配算法，测试时发现匹配两千个联系人需要15分钟，最后被优化到25秒。显然这种操作应当放在子线程中处理。")]),s._v(" "),t("p",[s._v("6、过多的广播和滥用广播。如果处理一个广播需要花费较长时间，应当通过发送Intent给应用的Service来完成。")]),s._v(" "),t("p",[s._v("7、大对象的传递和共享。")]),s._v(" "),t("p",[s._v("8、访问网络。")]),s._v(" "),t("p",[s._v("9、锁住主线程。给主线程上一个无限等待的锁，然后由子线程来解锁。")]),s._v(" "),t("p",[s._v("本文转自 "),t("a",{attrs:{href:"https://blog.csdn.net/qq_43804080/article/details/101054620",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/qq_43804080/article/details/101054620"),t("OutboundLink")],1),s._v("，如有侵权，请联系删除。")]),s._v(" "),t("p",[s._v("本文转自 "),t("a",{attrs:{href:"https://www.jianshu.com/p/9fc80b3ddad4",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/9fc80b3ddad4"),t("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=e.exports}}]);