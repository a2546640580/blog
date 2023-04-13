(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{498:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、-定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、-定义"}},[t._v("#")]),t._v(" 一、 定义")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("BroadcastReceiver")]),t._v("（广播接收器），属于Android四大组件之一")]),t._v(" "),s("li",[t._v("在Android开发中，BroadcastReceiver的应用场景非常多广播，是一个全局的监听器，属于"),s("code",[t._v("Android")]),t._v("四大组件之一")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Android")]),t._v(" 广播分为两个角色：广播发送者、广播接收者")])]),t._v(" "),s("h2",{attrs:{id:"二、-作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、-作用"}},[t._v("#")]),t._v(" 二、 作用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用于监听 / 接收 应用发出的广播消息，并做出响应")])]),t._v(" "),s("li",[s("p",[t._v("应用场景\na. 不同组件之间通信（包括应用内 / 不同应用之间）")]),t._v(" "),s("p",[t._v("b. 与 "),s("code",[t._v("Android")]),t._v(" 系统在特定情况下的通信")]),t._v(" "),s("blockquote",[s("p",[t._v("如当电话呼入时、网络可用时")])]),t._v(" "),s("p",[t._v("c. 多线程通信")])])]),t._v(" "),s("h2",{attrs:{id:"三、实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、实现原理"}},[t._v("#")]),t._v(" 三、实现原理")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Android")]),t._v("中的广播使用了设计模式中的"),s("strong",[t._v("观察者模式")]),t._v("：基于消息的发布/订阅事件模型。")]),t._v(" "),s("blockquote",[s("p",[t._v("因此，Android将广播的"),s("strong",[t._v("发送者 和 接收者 解耦")]),t._v("，使得系统方便集成，更易扩展")])])]),t._v(" "),s("li",[s("p",[t._v("模型中有3个角色：")]),t._v(" "),s("ol",[s("li",[t._v("消息订阅者（广播接收者）")]),t._v(" "),s("li",[t._v("消息发布者（广播发布者）")]),t._v(" "),s("li",[t._v("消息中心（"),s("code",[t._v("AMS")]),t._v("，即"),s("code",[t._v("Activity Manager Service")]),t._v("）")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/944365-0896ba8d9155140e.png",alt:""}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("原理描述：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("广播接收者 通过 "),s("code",[t._v("Binder")]),t._v("机制在 "),s("code",[t._v("AMS")]),t._v(" 注册")])]),t._v(" "),s("li",[s("p",[t._v("广播发送者 通过 "),s("code",[t._v("Binder")]),t._v(" 机制向 "),s("code",[t._v("AMS")]),t._v(" 发送广播")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("AMS")]),t._v(" 根据 广播发送者 要求，在已注册列表中，寻找合适的广播接收者")]),t._v(" "),s("blockquote",[s("p",[t._v("寻找依据："),s("code",[t._v("IntentFilter / Permission")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("AMS")]),t._v("将广播发送到合适的广播接收者相应的消息循环队列中；")])]),t._v(" "),s("li",[s("p",[t._v("广播接收者通过 消息循环 拿到此广播，并回调 "),s("code",[t._v("onReceive()")])])])])])]),t._v(" "),s("p",[s("strong",[t._v("特别注意")]),t._v("：广播发送者 和 广播接收者的执行 是 "),s("strong",[t._v("异步")]),t._v("的，发出去的广播不会关心有无接收者接收，也不确定接收者到底是何时才能接收到；")]),t._v(" "),s("h2",{attrs:{id:"四、具体使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、具体使用"}},[t._v("#")]),t._v(" 四、具体使用")]),t._v(" "),s("p",[t._v("具体使用流程如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/944365-7c9ff656ebd1b981.png",alt:""}})]),t._v(" "),s("p",[t._v("接下来我将一步步介绍如何使用")]),t._v(" "),s("blockquote",[s("p",[t._v("即上图中的 "),s("strong",[t._v("开发者手动完成部分")])])]),t._v(" "),s("h3",{attrs:{id:"_4-1-自定义广播接收者broadcastreceiver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-自定义广播接收者broadcastreceiver"}},[t._v("#")]),t._v(" 4.1 自定义广播接收者BroadcastReceiver")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("继承自BroadcastReceivre基类")])]),t._v(" "),s("li",[s("p",[t._v("必须复写抽象方法onReceive()方法")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("广播接收器接收到相应广播后，会自动回调onReceive()方法")]),t._v(" "),s("li",[t._v("一般情况下，onReceive方法会涉及与其他组件之间的交互，如发送Notification、启动service等")]),t._v(" "),s("li",[t._v("默认情况下，广播接收器运行在UI线程，因此，onReceive方法不能执行耗时操作，否则将导致ANR。")])])])]),t._v(" "),s("li",[s("p",[t._v("代码范例\n"),s("em",[t._v("mBroadcastReceiver.java")])])])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" mBroadcastReceiver "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BroadcastReceiver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//接收到广播后自动调用该方法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onReceive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//写入接收广播后的操作")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"_4-2-广播接收器注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-广播接收器注册"}},[t._v("#")]),t._v(" 4.2 广播接收器注册")]),t._v(" "),s("p",[t._v("注册的方式分为两种：静态注册、动态注册")]),t._v(" "),s("h4",{attrs:{id:"_4-2-1-静态注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-静态注册"}},[t._v("#")]),t._v(" 4.2.1 静态注册")]),t._v(" "),s("ul",[s("li",[t._v("在AndroidManifest.xml里通过 "),s("strong",[t._v("<receive>")]),t._v(" 标签声明")]),t._v(" "),s("li",[t._v("属性说明：")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v('<receiver\n  android:enabled=["true" | "false"]\n  //此broadcastReceiver能否接收其他App的发出的广播\n  //默认值是由receiver中有无intent-filter决定的：如果有intent-filter，默认值为true，否则为false\n  android:exported=["true" | "false"]\n  android:icon="drawable resource"\n  android:label="string resource"\n  //继承BroadcastReceiver子类的类名\n  android:name=".mBroadcastReceiver"\n  //具有相应权限的广播发送者发送的广播才能被此BroadcastReceiver所接收；\n  android:permission="string"\n  //BroadcastReceiver运行所处的进程\n  //默认为app的进程，可以指定独立的进程\n  //注：Android四大基本组件都可以通过此属性指定自己的独立进程\n  android:process="string" >\n\n  //用于指定此广播接收器将接收的广播类型\n  //本示例中给出的是用于接收网络状态改变时发出的广播\n  '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("intent-filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.net.conn.CONNECTIVITY_CHANGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("intent-filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("receiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("注册示例")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v('<receiver\n  //此广播接收者类是mBroadcastReceiver\n  android:name=".mBroadcastReceiver" >\n  //用于接收网络状态改变时发出的广播\n  '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("intent-filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.net.conn.CONNECTIVITY_CHANGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("intent-filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("receiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("当此App首次启动时，系统会自动实例化mBroadcastReceiver类，并注册到系统中。")])])]),t._v(" "),s("h4",{attrs:{id:"_4-2-2-动态注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-动态注册"}},[t._v("#")]),t._v(" 4.2.2 动态注册")]),t._v(" "),s("p",[t._v("在代码中通过调用Context的*registerReceiver（）*方法进行动态注册BroadcastReceiver，具体代码如下：")]),t._v(" "),s("div",{staticClass:"language-Java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onResume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onResume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例化BroadcastReceiver子类 &  IntentFilter")]),t._v("\n    mBroadcastReceiver mBroadcastReceiver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mBroadcastReceiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntentFilter")]),t._v(" intentFilter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntentFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置接收广播的类型")]),t._v("\n    intentFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CONNECTIVITY_CHANGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用Context的registerReceiver（）方法进行动态注册")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerReceiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mBroadcastReceiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intentFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注册广播后，要在相应位置记得销毁广播")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//即在onPause() 中unregisterReceiver(mBroadcastReceiver)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当此Activity实例化时，会动态将MyBroadcastReceiver注册到系统中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当此Activity销毁时，动态注册的MyBroadcastReceiver将不再接收到相应的广播。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//销毁在onResume()方法中的广播")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterReceiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mBroadcastReceiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("h3",{attrs:{id:"特别注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特别注意"}},[t._v("#")]),t._v(" 特别注意")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("动态广播最好在Activity的onResume()注册、onPause()注销。")])]),t._v(" "),s("li",[s("p",[t._v("原因：")]),t._v(" "),s("p",[t._v("对于动态广播，有注册就必然得有注销，否则会导致"),s("strong",[t._v("内存泄露")])]),t._v(" "),s("blockquote",[s("p",[t._v("重复注册、重复注销也不允许")])])])]),t._v(" "),s("h4",{attrs:{id:"_4-2-3-两种注册方式的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-两种注册方式的区别"}},[t._v("#")]),t._v(" 4.2.3 两种注册方式的区别")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/944365-0ae738c6d50c0adf.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-3-广播发送者向ams发送广播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-广播发送者向ams发送广播"}},[t._v("#")]),t._v(" 4.3 广播发送者向AMS发送广播")]),t._v(" "),s("h4",{attrs:{id:"_4-3-1-广播的发送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-广播的发送"}},[t._v("#")]),t._v(" 4.3.1 广播的发送")]),t._v(" "),s("ul",[s("li",[t._v("广播是用”意图（Intent）“标识")]),t._v(" "),s("li",[t._v("定义广播的本质：定义广播所具备的“意图（Intent）”")]),t._v(" "),s("li",[t._v("广播发送：广播发送者将此广播的”意图“通过"),s("strong",[t._v("sendBroadcast()方法")]),t._v("发送出去")])]),t._v(" "),s("h4",{attrs:{id:"_4-3-2-广播的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-广播的类型"}},[t._v("#")]),t._v(" 4.3.2 广播的类型")]),t._v(" "),s("p",[t._v("广播的类型主要分为5类：")]),t._v(" "),s("ul",[s("li",[t._v("普通广播（Normal Broadcast）")]),t._v(" "),s("li",[t._v("系统广播（System Broadcast）")]),t._v(" "),s("li",[t._v("有序广播（Ordered Broadcast）")]),t._v(" "),s("li",[t._v("粘性广播（Sticky Broadcast）")]),t._v(" "),s("li",[t._v("App应用内广播（Local Broadcast）")])]),t._v(" "),s("p",[t._v("具体说明如下：")]),t._v(" "),s("p",[s("strong",[t._v("①. 普通广播（Normal Broadcast）")])]),t._v(" "),s("p",[t._v("即开发者自身定义intent的广播（最常用）。发送广播使用如下：")]),t._v(" "),s("div",{staticClass:"language-Java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对应BroadcastReceiver中intentFilter的action")]),t._v("\nintent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BROADCAST_ACTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送广播")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBroadcast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("若被注册了的广播接收者中注册时intentFilter的action与上述匹配，则会接收此广播（即进行回调onReceive()）。如下mBroadcastReceiver则会接收上述广播")])]),t._v(" "),s("div",{staticClass:"language-Java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("receiver \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此广播接收者类是mBroadcastReceiver")]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".mBroadcastReceiver"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用于接收网络状态改变时发出的广播")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BROADCAST_ACTION"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("receiver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("若发送广播有相应权限，那么广播接收者也需要相应权限")])]),t._v(" "),s("p",[s("strong",[t._v("②. 系统广播（System Broadcast）")])]),t._v(" "),s("ul",[s("li",[t._v("Android中内置了多个系统广播：只要涉及到手机的基本操作（如开机、网络状态变化、拍照等等），都会发出相应的广播")]),t._v(" "),s("li",[t._v("每个广播都有特定的Intent - Filter（包括具体的action），Android系统广播action如下：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("系统操作")]),t._v(" "),s("th",[t._v("action")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("监听网络变化")]),t._v(" "),s("td",[t._v("android.net.conn.CONNECTIVITY_CHANGE")])]),t._v(" "),s("tr",[s("td",[t._v("关闭或打开飞行模式")]),t._v(" "),s("td",[t._v("Intent.ACTION_AIRPLANE_MODE_CHANGED")])]),t._v(" "),s("tr",[s("td",[t._v("充电时或电量发生变化")]),t._v(" "),s("td",[t._v("Intent.ACTION_BATTERY_CHANGED")])]),t._v(" "),s("tr",[s("td",[t._v("电池电量低")]),t._v(" "),s("td",[t._v("Intent.ACTION_BATTERY_LOW")])]),t._v(" "),s("tr",[s("td",[t._v("电池电量充足（即从电量低变化到饱满时会发出广播")]),t._v(" "),s("td",[t._v("Intent.ACTION_BATTERY_OKAY")])]),t._v(" "),s("tr",[s("td",[t._v("系统启动完成后(仅广播一次)")]),t._v(" "),s("td",[t._v("Intent.ACTION_BOOT_COMPLETED")])]),t._v(" "),s("tr",[s("td",[t._v("按下照相时的拍照按键(硬件按键)时")]),t._v(" "),s("td",[t._v("Intent.ACTION_CAMERA_BUTTON")])]),t._v(" "),s("tr",[s("td",[t._v("屏幕锁屏")]),t._v(" "),s("td",[t._v("Intent.ACTION_CLOSE_SYSTEM_DIALOGS")])]),t._v(" "),s("tr",[s("td",[t._v("设备当前设置被改变时(界面语言、设备方向等)")]),t._v(" "),s("td",[t._v("Intent.ACTION_CONFIGURATION_CHANGED")])]),t._v(" "),s("tr",[s("td",[t._v("插入耳机时")]),t._v(" "),s("td",[t._v("Intent.ACTION_HEADSET_PLUG")])]),t._v(" "),s("tr",[s("td",[t._v("未正确移除SD卡但已取出来时(正确移除方法:设置--SD卡和设备内存--卸载SD卡)")]),t._v(" "),s("td",[t._v("Intent.ACTION_MEDIA_BAD_REMOVAL")])]),t._v(" "),s("tr",[s("td",[t._v("插入外部储存装置（如SD卡）")]),t._v(" "),s("td",[t._v("Intent.ACTION_MEDIA_CHECKING")])]),t._v(" "),s("tr",[s("td",[t._v("成功安装APK")]),t._v(" "),s("td",[t._v("Intent.ACTION_PACKAGE_ADDED")])]),t._v(" "),s("tr",[s("td",[t._v("成功删除APK")]),t._v(" "),s("td",[t._v("Intent.ACTION_PACKAGE_REMOVED")])]),t._v(" "),s("tr",[s("td",[t._v("重启设备")]),t._v(" "),s("td",[t._v("Intent.ACTION_REBOOT")])]),t._v(" "),s("tr",[s("td",[t._v("屏幕被关闭")]),t._v(" "),s("td",[t._v("Intent.ACTION_SCREEN_OFF")])]),t._v(" "),s("tr",[s("td",[t._v("屏幕被打开")]),t._v(" "),s("td",[t._v("Intent.ACTION_SCREEN_ON")])]),t._v(" "),s("tr",[s("td",[t._v("关闭系统时")]),t._v(" "),s("td",[t._v("Intent.ACTION_SHUTDOWN")])]),t._v(" "),s("tr",[s("td",[t._v("重启设备")]),t._v(" "),s("td",[t._v("Intent.ACTION_REBOOT")])])])]),t._v(" "),s("p",[t._v("注：当使用系统广播时，只需要在注册广播接收者时定义相关的action即可，并不需要手动发送广播，当系统有相关操作时会自动进行系统广播")]),t._v(" "),s("p",[s("strong",[t._v("③. 有序广播（Ordered Broadcast）")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义\n发送出去的广播被广播接收者按照先后顺序接收")]),t._v(" "),s("blockquote",[s("p",[t._v("有序是针对广播接收者而言的")])])]),t._v(" "),s("li",[s("p",[t._v("广播接受者接收广播的顺序规则（同时面向静态和动态注册的广播接受者）")]),t._v(" "),s("ol",[s("li",[t._v("按照Priority属性值从大-小排序；")]),t._v(" "),s("li",[t._v("Priority属性相同者，动态注册的广播优先；")])])]),t._v(" "),s("li",[s("p",[t._v("特点")]),t._v(" "),s("ol",[s("li",[t._v("接收广播按顺序接收")]),t._v(" "),s("li",[t._v("先接收的广播接收者可以对广播进行截断，即后接收的广播接收者不再接收到此广播；")]),t._v(" "),s("li",[t._v("先接收的广播接收者可以对广播进行修改，那么后接收的广播接收者将接收到被修改后的广播")])])]),t._v(" "),s("li",[s("p",[t._v("具体使用\n有序广播的使用过程与普通广播非常类似，差异仅在于广播的发送方式：")]),t._v(" "),s("div",{staticClass:"language-Java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendOrderedBroadcast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("p",[s("strong",[t._v("④. App应用内广播（Local Broadcast）")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("背景\nAndroid中的广播可以跨App直接通信（exported对于有intent-filter情况下默认值为true）")])]),t._v(" "),s("li",[s("p",[t._v("冲突\n可能出现的问题：")]),t._v(" "),s("ul",[s("li",[t._v("其他App针对性发出与当前App intent-filter相匹配的广播，由此导致当前App不断接收广播并处理；")]),t._v(" "),s("li",[t._v("其他App注册与当前App一致的intent-filter用于接收广播，获取广播具体信息；\n即会出现安全性 & 效率性的问题。")])])]),t._v(" "),s("li",[s("p",[t._v("解决方案\n使用App应用内广播（Local Broadcast）")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("App应用内广播可理解为一种局部广播，广播的发送者和接收者都同属于一个App。")]),t._v(" "),s("li",[t._v("相比于全局广播（普通广播），App应用内广播优势体现在：安全性高 & 效率高")])])])]),t._v(" "),s("li",[s("p",[t._v("具体使用1 - 将全局广播设置成局部广播")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("注册广播时将exported属性设置为"),s("em",[t._v("false")]),t._v("，使得非本App内部发出的此广播不被接收；")])]),t._v(" "),s("li",[s("p",[t._v("在广播发送和接收时，增设相应权限permission，用于权限验证；")])]),t._v(" "),s("li",[s("p",[t._v("发送广播时指定该广播接收器所在的包名，此广播将只会发送到此包中的App内与之相匹配的有效广播接收器中。")]),t._v(" "),s("blockquote",[s("p",[t._v("通过 "),s("strong",[t._v("intent.setPackage(packageName)")]),t._v(" 指定报名")])])])])]),t._v(" "),s("li",[s("p",[t._v("具体使用2 - 使用封装好的LocalBroadcastManager类\n使用方式上与全局广播几乎相同，只是注册/取消注册广播接收器和发送广播时将参数的context变成了LocalBroadcastManager的单一实例")]),t._v(" "),s("blockquote",[s("p",[t._v("注：对于LocalBroadcastManager方式发送的应用内广播，只能通过LocalBroadcastManager动态注册，不能静态注册")])])])]),t._v(" "),s("div",{staticClass:"language-Java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注册应用内广播接收器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//步骤1：实例化BroadcastReceiver子类 & IntentFilter mBroadcastReceiver ")]),t._v("\nmBroadcastReceiver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mBroadcastReceiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntentFilter")]),t._v(" intentFilter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntentFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//步骤2：实例化LocalBroadcastManager的实例")]),t._v("\nlocalBroadcastManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalBroadcastManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//步骤3：设置接收广播的类型 ")]),t._v("\nintentFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CONNECTIVITY_CHANGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//步骤4：调用LocalBroadcastManager单一实例的registerReceiver（）方法进行动态注册 ")]),t._v("\nlocalBroadcastManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerReceiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mBroadcastReceiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intentFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取消注册应用内广播接收器")]),t._v("\nlocalBroadcastManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterReceiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mBroadcastReceiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送应用内广播")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nintent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BROADCAST_ACTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalBroadcastManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBroadcast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("p",[s("strong",[t._v("⑤. 粘性广播（Sticky Broadcast）")])]),t._v(" "),s("p",[t._v("由于在Android5.0 & API 21中已经失效，所以不建议使用，在这里也不作过多的总结。")])])}),[],!1,null,null,null);s.default=e.exports}}]);