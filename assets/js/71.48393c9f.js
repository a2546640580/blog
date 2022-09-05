(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{526:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"shell-脚本语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本语言"}},[t._v("#")]),t._v(" shell 脚本语言")]),t._v(" "),s("p",[t._v("脚本：本质是一个文件，文件里面存放的是特定格式的指令，系统可以使用脚本解析器翻译或解析指令并执行（它不需要编译）shell 既是应用程序 又是一种脚本语言（应用程序 解析 脚本语言）")]),t._v(" "),s("h3",{attrs:{id:"shell命令解析器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell命令解析器"}},[t._v("#")]),t._v(" shell命令解析器：")]),t._v(" "),s("p",[t._v("系统提供 shell命令解析器： sh ash bash\n查看自己linux系统的默认解析：echo $SHELL")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"img",href:"https://img-blog.csdnimg.cn/20200420202511492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI4ODIwMQ==,size_16,color_FFFFFF,t_70"}},[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shug666/image/images/20200420202511492.png",alt:"img"}})])]),t._v(" "),s("h3",{attrs:{id:"shell脚本文件的命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本文件的命名规范"}},[t._v("#")]),t._v(" shell脚本文件的命名规范：")]),t._v(" "),s("ul",[s("li",[t._v("首个字符必须为字母（a-z，A-Z）。")]),t._v(" "),s("li",[t._v("中间不能有空格，可以使用下划线（_）。")]),t._v(" "),s("li",[t._v("不能使用标点符号。")]),t._v(" "),s("li",[t._v("不能使用bash里的关键字（可用help命令查看保留关键字）。")]),t._v(" "),s("li",[t._v("必须指定解析器#!/bin/bash")])]),t._v(" "),s("h2",{attrs:{id:"shell-语法初识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-语法初识"}},[t._v("#")]),t._v(" shell 语法初识")]),t._v(" "),s("p",[t._v("使用变量：myUrl、{myUrl}")]),t._v(" "),s("p",[t._v("只读变量：readonly myUrl")]),t._v(" "),s("p",[t._v("删除变量：unset myUrl")]),t._v(" "),s("h3",{attrs:{id:"三种执行方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三种执行方式"}},[t._v("#")]),t._v(" 三种执行方式:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("./xxx.sh : 先按照 文件中#!指定的解析器解析，如果#！指定指定的解析器不存在，才会使用系统默认的解析器")])]),t._v(" "),s("li",[s("p",[t._v("bash xxx.sh: 指明先用bash解析器解析，如果bash不存在，才会使用默认解析器")])]),t._v(" "),s("li",[s("p",[t._v(". xxx.sh  直接使用默认解析器解析（不会执行第一行的#！指定的解析器）但是第一行还是要写的")])])]),t._v(" "),s("h3",{attrs:{id:"shell-环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-环境变量"}},[t._v("#")]),t._v(" shell 环境变量")]),t._v(" "),s("h4",{attrs:{id:"系统变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统变量"}},[t._v("#")]),t._v(" 系统变量：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("$0")]),t._v(" "),s("th",[t._v("当前脚本的文件名")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$n")]),t._v(" "),s("td",[t._v("传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是$1，第二个参数是$2")])]),t._v(" "),s("tr",[s("td",[t._v("$#")]),t._v(" "),s("td",[t._v("传递给脚本或函数的参数个数")])]),t._v(" "),s("tr",[s("td",[t._v("$*")]),t._v(" "),s("td",[t._v("传递给脚本或函数的所有参数")])]),t._v(" "),s("tr",[s("td",[t._v("$@")]),t._v(" "),s("td",[t._v("传递给脚本或函数的所有参数")])]),t._v(" "),s("tr",[s("td",[t._v("$?")]),t._v(" "),s("td",[t._v("上个命令的退出状态，或函数的返回值，返回0表示执行成功")])]),t._v(" "),s("tr",[s("td",[t._v("$$")]),t._v(" "),s("td",[t._v("当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID")])])])]),t._v(" "),s("h4",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量：")]),t._v(" "),s("p",[t._v("所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PATH  \t\t命令所示路径，以冒号为分割；\nHOME  \t\t打印用户家目录；\nSHELL \t\t显示当前Shell类型；\nUSER  \t\t打印当前用户名；\nID    \t\t打印当前用户id信息；\nPWD   \t\t显示当前所在路径；\nTERM  \t\t打印当前终端类型；\nHOSTNAME    显示当前主机名；\nPS1         定义主机命令提示符的；\nHISTSIZE    历史命令大小，可通过 HISTTIMEFORMAT 变量设置命令执行时间;\nRANDOM      随机生成一个 0 至 32767 的整数;\nHOSTNAME    主机名\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h4",{attrs:{id:"局部变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部变量"}},[t._v("#")]),t._v(" 局部变量")]),t._v(" "),s("p",[t._v("局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 常见的变量之三用户变量，用户变量又称为局部变量，主要用在Shell脚本内部或者临时局部使用，系统变量详解如下：\n\na=rivers \t\t\t\t       自定义变量A；\nHttpd_sort=httpd-2.4.6-97.tar  自定义变量N_SOFT；\nBACK_DIR=/data/backup/         自定义变量BACK_DIR；\nIPaddress=10.0.0.1\t\t\t   自定义变量IP1；\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"转义字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义字符"}},[t._v("#")]),t._v(" 转义字符")]),t._v(" "),s("p",[t._v("如果表达式中包含特殊字符，Shell 将会进行替换。例如，在双引号中使用变量就是一种替换，转义字符也是一种替换。")]),t._v(" "),s("p",[t._v("转义字符替换：echo –e “This is a test.\\n”，其中-e表示对转义字符进行替换。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("\\\\")]),t._v(" "),s("th",[t._v("反斜杠")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("\\a")]),t._v(" "),s("td",[t._v("警报，响铃")])]),t._v(" "),s("tr",[s("td",[t._v("\\b")]),t._v(" "),s("td",[t._v("退格（删除键）")])]),t._v(" "),s("tr",[s("td",[t._v("\\f")]),t._v(" "),s("td",[t._v("换页(FF)，将当前位置移到下页开头")])]),t._v(" "),s("tr",[s("td",[t._v("\\n")]),t._v(" "),s("td",[t._v("换行")])]),t._v(" "),s("tr",[s("td",[t._v("\\r")]),t._v(" "),s("td",[t._v("回车")])]),t._v(" "),s("tr",[s("td",[t._v("\\t")]),t._v(" "),s("td",[t._v("水平制表符（tab键）")])]),t._v(" "),s("tr",[s("td",[t._v("\\v")]),t._v(" "),s("td",[t._v("垂直制表符")])])])]),t._v(" "),s("h3",{attrs:{id:"变量替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量替换"}},[t._v("#")]),t._v(" 变量替换")]),t._v(" "),s("p",[t._v("​\t变量替换可以根据变量的状态（是否为空、是否定义等）来改变它的值")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("${var}")]),t._v(" "),s("th",[t._v("变量本来的值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("${var:-word}")]),t._v(" "),s("td",[t._v("如果变量 var 为空或已被删除(unset)，那么返回 word，但不改变 var 的值。")])]),t._v(" "),s("tr",[s("td",[t._v("${var:=word}")]),t._v(" "),s("td",[t._v("如果变量 var 为空或已被删除(unset)，那么返回 word，并将 var 的值设置为 word。")])]),t._v(" "),s("tr",[s("td",[t._v("${var:?message}")]),t._v(" "),s("td",[t._v("如果变量 var 为空或已被删除(unset)，那么将消息 message 送到标准错误输出，可以用来检测变量 var 是否可以被正常赋值。若此替换出现在Shell脚本中，那么脚本将停止运行。")])]),t._v(" "),s("tr",[s("td",[t._v("${var:+word}")]),t._v(" "),s("td",[t._v("如果变量 var 被定义，那么返回 word，但不改变 var 的值。")])])])]),t._v(" "),s("h3",{attrs:{id:"shell运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell运算符"}},[t._v("#")]),t._v(" Shell运算符")]),t._v(" "),s("p",[t._v("Bash 支持很多运算符，包括算数运算符、关系运算符、布尔运算符、字符串运算符和文件测试运算符。")]),t._v(" "),s("p",[s("strong",[t._v("算术运算符：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("+")]),t._v(" "),s("th",[t._v("加法")]),t._v(" "),s("th",[s("code",[t._v("expr $a + $b")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-")]),t._v(" "),s("td",[t._v("减法")]),t._v(" "),s("td",[s("code",[t._v("expr $a - $b")])])]),t._v(" "),s("tr",[s("td",[t._v("*")]),t._v(" "),s("td",[t._v("乘法")]),t._v(" "),s("td",[s("code",[t._v("expr $a \\* $b")])])]),t._v(" "),s("tr",[s("td",[t._v("/")]),t._v(" "),s("td",[t._v("除法")]),t._v(" "),s("td",[s("code",[t._v("expr $a / $b")])])]),t._v(" "),s("tr",[s("td",[t._v("%")]),t._v(" "),s("td",[t._v("取余")]),t._v(" "),s("td",[s("code",[t._v("expr $a % $b")])])]),t._v(" "),s("tr",[s("td",[t._v("=")]),t._v(" "),s("td",[t._v("赋值")]),t._v(" "),s("td",[t._v("a = $b")])]),t._v(" "),s("tr",[s("td",[t._v("==")]),t._v(" "),s("td",[t._v("等于")]),t._v(" "),s("td",[t._v("[ $a == $b ]")])]),t._v(" "),s("tr",[s("td",[t._v("!=")]),t._v(" "),s("td",[t._v("不等于")]),t._v(" "),s("td",[t._v("[ $a != $b ]")])])])]),t._v(" "),s("p",[s("strong",[t._v("关系运算符：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("-eq")]),t._v(" "),s("th",[t._v("是否相等")]),t._v(" "),s("th",[t._v("[ $a  –eq  $b ]")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-ne")]),t._v(" "),s("td",[t._v("是否不相等")]),t._v(" "),s("td",[t._v("[ $a  –ne  $b ]")])]),t._v(" "),s("tr",[s("td",[t._v("-gt")]),t._v(" "),s("td",[t._v("大于")]),t._v(" "),s("td",[t._v("[ $a  –gt  $b ]")])]),t._v(" "),s("tr",[s("td",[t._v("-lt")]),t._v(" "),s("td",[t._v("小于")]),t._v(" "),s("td",[t._v("[ $a  –lt  $b ]")])]),t._v(" "),s("tr",[s("td",[t._v("-ge")]),t._v(" "),s("td",[t._v("大于等于")]),t._v(" "),s("td",[t._v("[ $a  –ge  $b ]")])]),t._v(" "),s("tr",[s("td",[t._v("-le")]),t._v(" "),s("td",[t._v("小于等于")]),t._v(" "),s("td",[t._v("[ $a  –le  $b ]")])])])]),t._v(" "),s("p",[s("strong",[t._v("布尔运算符：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("!")]),t._v(" "),s("th",[t._v("非运算")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-o")]),t._v(" "),s("td",[t._v("或运算")])]),t._v(" "),s("tr",[s("td",[t._v("-a")]),t._v(" "),s("td",[t._v("与运算")])])])]),t._v(" "),s("p",[s("strong",[t._v("字符串运算符：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("=")]),t._v(" "),s("th",[t._v("字符串是否相等")]),t._v(" "),s("th",[t._v("[ $a = $b ]")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("!=")]),t._v(" "),s("td",[t._v("字符串是否不相等")]),t._v(" "),s("td",[t._v("[ $a != $b ]")])]),t._v(" "),s("tr",[s("td",[t._v("-z")]),t._v(" "),s("td",[t._v("字符串长度是否为0")]),t._v(" "),s("td",[t._v("[ -z $a ]")])]),t._v(" "),s("tr",[s("td",[t._v("-n")]),t._v(" "),s("td",[t._v("字符串长度是否不为0")]),t._v(" "),s("td",[t._v("[ -z $a ]")])]),t._v(" "),s("tr",[s("td",[t._v("str")]),t._v(" "),s("td",[t._v("字符串是否为空")]),t._v(" "),s("td",[t._v("[ $a ]")])])])]),t._v(" "),s("p",[s("strong",[t._v("文件测试运算符：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("-b")]),t._v(" "),s("th",[t._v("检测文件是否是块设备文件")]),t._v(" "),s("th",[t._v("[ -b $file ]")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-c")]),t._v(" "),s("td",[t._v("检测文件是否是字符设备文件")]),t._v(" "),s("td",[t._v("[ -c $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-d")]),t._v(" "),s("td",[t._v("检测文件是否是目录")]),t._v(" "),s("td",[t._v("[ -d $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-f")]),t._v(" "),s("td",[t._v("检测文件是否是普通文件（既不是目录，也不是设备文件）")]),t._v(" "),s("td",[t._v("[ -f $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-g")]),t._v(" "),s("td",[t._v("检测文件是否设置了 SGID 位")]),t._v(" "),s("td",[t._v("[ -g $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-k")]),t._v(" "),s("td",[t._v("检测文件是否设置了粘着位")]),t._v(" "),s("td",[t._v("[ -k $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-p")]),t._v(" "),s("td",[t._v("检测文件是否是具名管道")]),t._v(" "),s("td",[t._v("[ -p $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-u")]),t._v(" "),s("td",[t._v("检测文件是否设置了 SUID 位")]),t._v(" "),s("td",[t._v("[ -u $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-r")]),t._v(" "),s("td",[t._v("检测文件是否可读")]),t._v(" "),s("td",[t._v("[ -r $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-w")]),t._v(" "),s("td",[t._v("检测文件是否可写")]),t._v(" "),s("td",[t._v("[ -w $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-x")]),t._v(" "),s("td",[t._v("检测文件是否可执行")]),t._v(" "),s("td",[t._v("[ -x $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-s")]),t._v(" "),s("td",[t._v("检测文件是否为空（文件大小是否大于0）")]),t._v(" "),s("td",[t._v("[ -s $file ]")])]),t._v(" "),s("tr",[s("td",[t._v("-e")]),t._v(" "),s("td",[t._v("检测文件（包括目录）是否存在")]),t._v(" "),s("td",[t._v("[ -e $file ]")])])])]),t._v(" "),s("h3",{attrs:{id:"if条件语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if条件语句"}},[t._v("#")]),t._v(" if条件语句")]),t._v(" "),s("p",[t._v("If条件判断语句，通常以if开头，fi结尾。也可加入else或者elif进行多条件的判断")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("if (条件表达式);then\n\t语句1\nelif (条件表达式);then\n\t语句2\nelse\n\t语句3\nfi\n")])])]),s("h3",{attrs:{id:"case选择语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case选择语句"}},[t._v("#")]),t._v(" case选择语句")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#Case选择语句，主要用于对多个选择条件进行匹配输出，与if elif语句结构类似，通常用于脚本传递输入参数，打印出输出结果及内容，其语法格式以Case…in开头，esac结尾。语法格式如下：\ncase "${item}" in\n    1)\n        echo "item = 1"\n    ;;\n    2|3)\n        echo "item = 2 or item = 3"\n    ;;\n    *)\n        echo "default (none of above)"\n    ;;\nesac\n# 每个模式必须以右括号结束，命令结尾以双分号结束。\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"for循环语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for循环语句"}},[t._v("#")]),t._v(" for循环语句")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#格式\n#格式：for name [ [ in [ word ... ] ] ; ] do list ; done\nfor 变量名 in 取值列表; do\n\t语句 1\ndone\n--------------------------\nfor((i=0;i<n;i++)); do\n    echo "${i}"\ndone\n--------------------------\nfor item in {a..z}; do\n    echo "${item}"\ndone\n--------------------------\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("while循环语句")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# While循环语句与for循环功能类似，主要用于对某个数据域进行循环读取、对文件进行遍历，通常用于需要循环某个文件或者列表，满足循环条件会一直循环，不满足则退出循环，其语法格式以while…do开头，done结尾与 \n#while 关联的还有一个 until 语句，它与 while 不同之处在于，是当条件表达式为 false 时才循环，实际使用中比较少。\n\nwhile  (表达式); do\n  语句1\ndone\n--------------------------\nuntil [ condition ]; do\n    # body\ndone\n\n也有break和continue\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"select-循环选择语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select-循环选择语句"}},[t._v("#")]),t._v(" select 循环选择语句")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#select 是一个类似于 for 循环的语句\n#Select语句一般用于选择，常用于选择菜单的创建，可以配合PS3来做打印菜单的输出信息，其语法格式以select…in do开头，done结尾：\n\nselect i in （表达式） \n    do\n    语句\ndone\n--------------------------\nPS3="Please enter you select install menu:"\nselect i in http php mysql quit; do\n    case $i in\n            http)\n            echo -e "\n                    \\033[31m Test Httpd \\033[0m" \n            ;;\n            php)\n            echo  -e "\\033[32m Test PHP\\033[0m"\n            ;;\n            mysql)\n            echo -e "\\033[33m Test MySQL.\\033[0m"\n            ;;\n            quit)\n            echo -e "\\033[32m The System exit.\\033[0m"\n            exit\n    esac\ndone\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("h3",{attrs:{id:"shell函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell函数"}},[t._v("#")]),t._v(" shell函数")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# Shell允许将一组命令集或语句形成一个可用块，这些块称为Shell函数，Shell函数的用于在于只需定义一次，后期随时使用即可，无需在Shell脚本中添加重复的语句块，其语法格式以function name（）{开头，以}结尾。\n\n# Shell编程函数默认不能将参数传入（）内部，Shell函数参数传递在调用函数名称传递，例如name args1 args2。\n\n# Shell 函数很简单，函数名后跟双括号，再跟双大括号。通过函数名直接调用，不加小括号。\nfunction name () {\n    echo "text" \n}\nname\n#function可省略\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 数组是相同类型的元素按一定顺序排列的集合。\n格式：array=(元素1 元素2 元素3 ...)\n用小括号初始化数组，元素之间用空格分隔。\n定义方法 1：初始化数组 array=(a b c)\n定义方法 2：新建数组并添加元素 array[下标]=元素\n定义方法 3：将命令输出作为数组元素array=($(command))\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"可参考学习链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可参考学习链接"}},[t._v("#")]),t._v(" 可参考学习链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_42313749/article/details/120524768?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166018519016781667870464%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166018519016781667870464&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-120524768-null-null.142%5Ev40%5Epc_rank_34_ecpm25,185%5Ev2%5Econtrol&utm_term=shell&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("shell脚本入门"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_44794688/article/details/123138257",target:"_blank",rel:"noopener noreferrer"}},[t._v("shell 中各种括号的用法"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);