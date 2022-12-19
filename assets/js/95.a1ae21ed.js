(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{546:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_2853r配置遥控器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2853r配置遥控器"}},[s._v("#")]),s._v(" 2853R配置遥控器")]),s._v(" "),a("p",[s._v("直接在RTD2853R\\customer\\IR目录下创建相应的.config文件，然后编译脚本source build.sh ，需注意的是在要编译的脚本里面指定.config文件，目前已经适配过的IR协议有：NEC、KONKA、SONY、三星")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"image-20220817175130793",href:"https://raw.githubusercontent.com/shug666/image/master/images/image-20220817175130793.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/master/images/image-20220817175130793.png",alt:"image-20220817175130793"}})])]),s._v(" "),a("p",[s._v(".config文由三部分组成，")]),s._v(" "),a("ul",[a("li",[s._v("第一个列是protocol，遥控器的协议。")]),s._v(" "),a("li",[s._v("第二列是按键的码值，")]),s._v(" "),a("li",[s._v("第三列是keycode，也就是我们要上报的值")])]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"image-20220817174302882",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220817174302882.png"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220817174302882.png",alt:"image-20220817174302882"}})])]),s._v(" "),a("h2",{attrs:{id:"查看和设置协议的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看和设置协议的方式"}},[s._v("#")]),s._v(" 查看和设置协议的方式")]),s._v(" "),a("p",[s._v("在配置遥控器之前，需要设置对应的协议，目前已经配置过的遥控器协议有NEC、KONKA,C03.")]),s._v(" "),a("p",[s._v("在串口下")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/venus_ir/ir_protocol\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{"data-fancybox":"",title:"img",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/wps2.jpg"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/wps2.jpg",alt:"img"}})])]),s._v(" "),a("p",[s._v("同时也可以设置需要的遥控协议，比如")]),s._v(" "),a("p",[a("strong",[s._v("无权限时需要输入su命令")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/venus_ir/ir_protocol\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看遥控器码值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看遥控器码值"}},[s._v("#")]),s._v(" 查看遥控器码值")]),s._v(" "),a("p",[s._v("串口下输入：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/sys/venus_ir/ir_decode_debug\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/kernel/printk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("按下遥控按键，看到如下"),a("strong",[s._v("REG_IR_RP")]),s._v(" = [A45BFB04] 就是 得到的ir 键值。")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"img",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/wps3.jpg"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/wps3.jpg",alt:"img"}})])]),s._v(" "),a("h2",{attrs:{id:"编译时的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译时的操作"}},[s._v("#")]),s._v(" 编译时的操作")]),s._v(" "),a("p",[s._v("在main_process.sh脚本中的set_IR_Protocol方法里")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ir_config_file}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ir_bin_tool}")]),s._v("/customer/ir_table.config\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ir_bin_tool}")]),s._v('/out/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ir_bin_tool}")]),s._v("/out/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ir_bin_tool}")]),s._v(" ir_table_bin\n\nperl "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${toptech_config_path}")]),s._v("/scripts/generate_ir_c.pl "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ir_config_file}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${toptech_config_path}")]),s._v("/tmp/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${config_remote_name}")]),s._v(".c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${toptech_config_path}")]),s._v("/tmp/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${config_remote_name}")]),s._v(".c "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${root_path}")]),s._v("/kernel/linux/linux-4.14/drivers/rtk_kdriver/ir/ir_table/ir_table_default.c\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",[a("li",[s._v("将RTD2853R\\customer\\IR目录下的xxx.config文件拷贝到kernel/android/R/vendor/realtek/tool/image_file_creator/ir_bin_tool/customer/ir_table.config，并清空\\ir_bin_tool\\out目录（先删除再创建）")]),s._v(" "),a("li",[s._v("在ir_bin_tool目录下执行make ir_table_bin命令会在ir_bin_tool/out产生ir_table.bin文件,同时也会拷贝到kernel/android/R/vendor/realtek/common/ATV/data/factory_ro目录下")]),s._v(" "),a("li",[s._v("在ir_bin_tool 路径下cmd: make ir_def_table, 自动产生/kernel/linux/linux-4.14/drivers/rtk_kdriver/ir/ir_table/ir_table_default.c文件。（脚本中调用了generate_ir_c.pl将xxx.config生成xxx.c并拷贝到/kernel/linux/linux-4.14/drivers/rtk_kdriver/ir/ir_table/ir_table_default.c）")])]),s._v(" "),a("blockquote",[a("p",[s._v("注意：IR的默认协议取决于ir_table.config文件最上面的协议，脚本在编译时候会解析该协议，写入到000Bootparam.h，所以我们在有不同协议的ir_table.config文件里面需要根据需要调整码值位置。")])]),s._v(" "),a("h2",{attrs:{id:"根据按键码值判断协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据按键码值判断协议"}},[s._v("#")]),s._v(" 根据按键码值判断协议")]),s._v(" "),a("p",[s._v("1 代表ir 协议，也就是nec 码，0xf40b（0b 是码值，f4按位或0b ==ff）头码低高八位反码，头码低八位反码，这个应该也适用于三星码")]),s._v(" "),a("p",[s._v("10 ir协议，konka码，0x四个0，加上头码低八位，加上码值，因为konka 码目前只配过这一次，目前只能找到这个规律。")]),s._v(" "),a("h2",{attrs:{id:"按键复用问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按键复用问题"}},[s._v("#")]),s._v(" 按键复用问题")]),s._v(" "),a("p",[s._v("复用的配置文件_tv_keys.xml放在customers/IR/下面。文件里面修改的话key ir 填入遥控器的名字。")]),s._v(" "),a("p",[s._v("Linkedname表示需要复用的这个按键的实际码值。Key name代表的是需要被复用成的按键。例如")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"img",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/wps1.jpg"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/wps1.jpg",alt:"img"}})])]),s._v(" "),a("p",[s._v("linkedName = KEYCODE_MEDIA_PLAY_PAUSE代表这个按键的实际keycode 是这个播放暂停键。Key name =KEYCODE_TIMESHIFT.代表这个播放暂停按键要复用时移按键。")]),s._v(" "),a("p",[s._v("目前已经复用的按键都在xml 注释中体现出来了，如果没有体现出来的，那么需要改代码了，这个就建议让RD协助添加这部分。")]),s._v(" "),a("h2",{attrs:{id:"_2851添加遥控器按键流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2851添加遥控器按键流程"}},[s._v("#")]),s._v(" 2851添加遥控器按键流程")]),s._v(" "),a("p",[a("strong",[s._v("1.在\\RTD2853R\\customer\\IR\\xxx.config 中添加未定义的keycode")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v(" 示例："),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0XB9469F00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("KEY_ZERO_FACTORY\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("2.在\\RTD2853R\\kernel\\linux\\linux-4.14\\include\\uapi\\linux\\input-event-codes.h文件中添加示例：")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("KEY_ZERO_FACTORY")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x393")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("("),a("strong",[s._v("添加这个 值时建议按照顺序添加，方便以后添加按键以及进行代码维护)")])]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"image-20220819114747152",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220819114747152.png"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220819114747152.png",alt:"image-20220819114747152"}})])]),s._v(" "),a("p",[a("strong",[s._v("3.在\\RTD2853R\\kernel\\android\\R\\device\\realtek\\common\\keylayout\\venus_IR_input.kl 中添加一个Key值  keycode")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v(" 示例：key "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("915")]),s._v(" ZERO_FACTORY\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{"data-fancybox":"",title:"image-20220819114505445",href:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220819114505445.png"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/image-20220819114505445.png",alt:"image-20220819114505445"}})])]),s._v(" "),a("blockquote",[a("p",[s._v("注:venus_IR_input.kl文件是一个映射文件，是标准 linux 与android 的键值映射文件，可以有很多个。如 0x393 是在 input-event-codes.h 中定义的，kernel 层传到 android 中的值就是 915(0x393 的十进制)。")])]),s._v(" "),a("p",[a("strong",[s._v("4.在\\RTD2853R\\kernel\\android\\R\\frameworks\\native\\include\\input\\InputEventLabels.h 文件的")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" InputEventLabel KEYCODES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("数组中添加 keylable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("如：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("DEFINE_KEYCODE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZERO_FACTORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("5.在Z:\\RTD2853R\\kernel\\android\\R\\frameworks\\native\\include\\android\\keycodes.h文件中enum{}中添加 keycode.")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("示例： "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tAKEYCODE_ZERO_FACTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("461")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("注：(添加这个值时建议按照顺序添加，方便以后添加按键以及进行代码维护)")])]),s._v(" "),a("p",[a("strong",[s._v("此处keycodes.h 里的值即是上面keylable定义在数组中的位 置(index)")])]),s._v(" "),a("blockquote",[a("p",[s._v("这个文件映射的是Android中的键值，这个键值和InputEventLabel.h文件中数组添加的键名有一个映射关系，Android也是借此实现了从Linux键值到Android键值的映射")]),s._v(" "),a("p",[s._v("修改这个文件很简单，只要在enum中添加如下值就好了")])]),s._v(" "),a("p",[a("strong",[s._v("6.在 \\RTD2853R\\kernel\\android\\R\\frameworks\\base\\core\\java\\android\\view\\KeyEvent.java中")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("KeyEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InputEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Parcelable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("类中去添加变量\n\n示例："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" KEYCODE_ZERO_FACTORY "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("461")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("**"),a("em",[s._v("*注：*"),a("em",[s._v("修改public static final int TOPTECH_ADD_END = KEYCODE_ZERO_FACTORY;")])])]),s._v(" "),a("blockquote",[a("p",[s._v("Andriod借此文件把键值从c语言转到java语言。")]),s._v(" "),a("p",[s._v("变量名字与keycodes.h中比较少了开头的A，键值保持不变。")])]),s._v(" "),a("p",[a("strong",[s._v("7.在\\RTD2853R\\kernel\\android\\R\\frameworks\\base\\core\\res\\res\\values\\attrs.xml文件中")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("标签中添加示例：\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("enum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("KEYCODE_ZERO_FACTORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("461"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("8.两种方式测试：")])]),s._v(" "),a("p",[s._v("（1）在AS的任一demo中MainActicity中添加onKeyup方法（这种方式便于测试按键）")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("示例："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onKeyUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" keyCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("KeyEvent")]),s._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("keyCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("461")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zero"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"------add key successfully..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("通过adb connect ip(板卡ip，在串口ifconfig)命令连接板卡，在AS中直接安装到TV平台")])]),s._v(" "),a("p",[s._v("（2）\\RTD2853R\\kernel\\android\\R\\external\\replicaisland\\src\\com\\replica\\replicaisland\\MainMenuActivity.java")]),s._v(" "),a("p",[s._v("在 MainMenuActivity 代码的 onKeyup()方法中添加打印，方便测试添加按键是否成功。(也可以在其他活动中添加打印，注意导包)")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("示例： "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onKeyUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" keyCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("KeyEvent")]),s._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO Auto-generated method stub")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("keyCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("KeyEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("KEYCODE_ZERO_FACTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zero"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"------add key successfully..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("9.PhoneWindowManager 添加按键功能")])]),s._v(" "),a("p",[s._v("接下来就是处理自己的功能了，此时按键已经通过 onKeyEvent()拿到，如果你想全局处理，可以在 PhoneWindowManager 的")]),s._v(" "),a("p",[s._v("interceptKeyBeforeQueueing 方法添加功能，如:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/a2090e03b7dd4c1a8d110d3e36b72475.png",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("10.添加完成后需要在\\RTD2853R\\kernel\\android\\R目录下使用"),a("em",[s._v("make update-api")]),s._v("命令对current.txt（/kernel/android/R/frameworks/base/api/current.txt目录下文件）进行更新。")])]),s._v(" "),a("p",[s._v("可用git status 查看文件修改(不更新编译时会报错)")]),s._v(" "),a("p",[a("strong",[s._v("注意：提交代码时需要提交current.txt")]),s._v("**")]),s._v(" "),a("p",[a("strong",[s._v("11.用对应客户脚本编译代码（脚本里的遥控器编号需与\\RTD2853R\\customer\\IR下编写的对应），编译无误后将系统烧到板子上")])]),s._v(" "),a("p",[s._v("在串口中输入 "),a("em",[a("strong",[s._v('*logcat -s "tag值"*')])]),s._v(" 查看打印结果。结果正确表示添加按键成功")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("编译build.sh的时候会提示下面三个命令，每次提示错误后，依次执行编译即可")]),s._v(" "),a("p",[s._v("执行make命令如果报错找不到命令则要执行source build/envsetup.sh，然后输入lunch命令")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/a567890k/article/details/79412382",target:"_blank",rel:"noopener noreferrer"}},[s._v("可参考build/envsetup.sh 简介"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("make api-stubs-docs-non-updatable-update-current-api")]),s._v(" "),a("p",[s._v("make api-stubs-docs-update-current-api")]),s._v(" "),a("p",[s._v("make test-api-stubs-docs-update-current-api")]),s._v(" "),a("p",[s._v("使用git clone克隆时可以先使用武汉地址拉下来，然后修改.git/config文件为深圳地址然后pull命令更新这样更节省时间")]),s._v(" "),a("p",[s._v("武汉地址ssh://git@162.168.0.245/RTD2853R")]),s._v(" "),a("p",[s._v("深圳地址ssh://git@58.250.251.47:20111RTD2853R")])])}),[],!1,null,null,null);a.default=n.exports}}]);