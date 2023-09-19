(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{523:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("/system/build.prop 是一个属性文件，在Android系统中.prop文件很重要，记录了系统的设置和改变。这个文件是如何生成的呢？")]),e._v(" "),s("p",[e._v("build/tools/buildinfo.sh 脚本就是专门用于生成build.prop文件，")]),e._v(" "),s("p",[e._v("build/core/Makefile中使用build/tools/buildinfo.sh 脚本生成build.prop文件，所以我们要添加系统属性，主要就是在buildinfo.sh、Makefile和version_defaults.mk中")]),e._v(" "),s("h2",{attrs:{id:"新增系统属性的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增系统属性的流程"}},[e._v("#")]),e._v(" 新增系统属性的流程：")]),e._v(" "),s("p",[e._v("1.在/build/core/version_defaults.mk中增加字段")]),e._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[e._v("TARGET_CONFIGURE "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("2、然后需要在build/tools/buildinfo.sh中增加")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ro.product.configure='),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$TARGET_CONFIGURE")]),e._v('"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("3.最后需要在build/core/Makefile中添加")]),e._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[e._v("TARGET_CONFIGURE"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"$(TARGET_CONFIGURE)"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("最后编译，编译完成后就会在 /out/target/product/system/build.prop中出现加入的ro.product.configure属性，")]),e._v(" "),s("p",[e._v("如果需要修改属性的值，只需要更改/build/core/version_defaults.mk即可")]),e._v(" "),s("h2",{attrs:{id:"可添加系统属性的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可添加系统属性的文件"}},[e._v("#")]),e._v(" 可添加系统属性的文件")]),e._v(" "),s("p",[e._v("1、build/tools/buildinfo.sh\n添加的一般都是前缀为“ro.”的只读系统属性")]),e._v(" "),s("p",[e._v("2、device/$(TARGET_DEVICE_DIR)/system.prop")]),e._v(" "),s("p",[e._v("3、在Makefile中的参数ADDITIONAL_BUILD_PROPERTIES中添加\n添加的一般是特定平台或者产品的特定系统属性")]),e._v(" "),s("p",[e._v("4、在Makefile中的参数PRODUCT_PROPERTY_OVERRIDES中添加\n添加的一般是特定平台或者产品的特定系统属性\n比如device/rockchip/common/device.mk")]),e._v(" "),s("p",[e._v("5、system/core/rootdir/int.rc中on post-fs-data下添加\n添加个人自定义的一些系统属性")]),e._v(" "),s("p",[e._v("本文转自 "),s("a",{attrs:{href:"https://blog.csdn.net/LINENG185/article/details/121560431",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/LINENG185/article/details/121560431"),s("OutboundLink")],1),e._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);s.default=r.exports}}]);