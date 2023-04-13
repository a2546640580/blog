(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{546:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"find命令基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find命令基本使用"}},[t._v("#")]),t._v(" find命令基本使用")]),t._v(" "),s("p",[s("strong",[t._v("语法格式")]),t._v("：find [路径] [参数] [查找和搜索范围]")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('find /etc -name "*.conf“\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("常用参数")]),t._v("：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("-name")]),t._v(" "),s("th",[t._v("按名称查找")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-size")]),t._v(" "),s("td",[t._v("按大小查找")])]),t._v(" "),s("tr",[s("td",[t._v("-user")]),t._v(" "),s("td",[t._v("按属性查找")])]),t._v(" "),s("tr",[s("td",[t._v("-type")]),t._v(" "),s("td",[t._v("按类型查找")])]),t._v(" "),s("tr",[s("td",[t._v("-iname")]),t._v(" "),s("td",[t._v("忽略大小写")])])])]),t._v(" "),s("h2",{attrs:{id:"grep命令基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep命令基本使用"}},[t._v("#")]),t._v(" grep命令基本使用")]),t._v(" "),s("p",[t._v("Grep称为全局"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式"),s("OutboundLink")],1),t._v("检索工具")]),t._v(" "),s("p",[s("strong",[t._v("语法格式")]),t._v("：grep -option（参数） ‘word’（关键词） file（文本文件）；")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quail"')]),t._v(" /etc/passwd -n -s -r "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示行号，不显示错误信息，递归查找子目录文件")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("grep常用参数：")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("-e:\t\t使用PATTERN作为模式。这可以用于指定多个搜索模式，或保护以连字符（- ）开头的图案。指定字符串做为查找文件内容的样式\n\n-f:\t\t指定规则文件，其内容含有一个或多个规则样式，让grep查找符合规则条件的文件内容，格式为每行一个规则样式\n-w:\t\t精准匹配字符串，必须完全符合，包含大小写下划线空格等\n-i:\t\t忽略大小写，可以和 -w 一起使用\n-o:\t\t参数只输出匹配到的字符串，不会输出匹配行中其他的信息\n-r:\t\t递归文件夹，从当前文件夹向下递归查找所有子文件夹中的文件（不包含链接文件，包含二进制文件，文本等）\n-n:\t\t匹配到具体字符串后，显示字符串在文本中的行数，或者是组合指令中显示匹配的字符串是在上一个指令输出的第几行\n-R:\t\t查找所有文件包含子目录\n-s:\t\t不显示错误信息\t\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("重要参数(查询排除指定文件夹，或者二进制文件)：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("--binary-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("without-match：   排除二进制文件查询。\n\n--exclude"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("GLOB：      \t\t跳过基本名称与GLOB匹配的文件（使用通配符匹配）。文件名GLOB可以使用 * 和"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("作为通配符，和"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("引用通配符或反斜杠字符。\n\t\t搜索其文件名和GLOB通配符相匹配的文件的内容来查找匹配使用方法： "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -H --exclude"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c* "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"old"')]),t._v(" ./* c*是通配文件名的通配符./* 指定需要先通配文件名的文件的范围，必须要给*，不然就匹配不出内容，"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("如果不给*,带上-r选项也可以匹配"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。\n\t\t\n--exclude-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("poky：     \t跳过指定的目录，指定的poky目录下的任何文件都不会去查找。匹配一个目录下的很多内容的同时，还要让一些子目录不接受匹配，就使用此选项。\n--exclude-from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("FILE：    \t跳过文件和目录匹配，跳过FILE（文件或者文件夹），但是这条指令在跳过文件夹时，没有直接使用--exclude-dir效率高。\n--include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("GLOB：      \t\t仅搜索其基本名称与GLOB匹配的文件（使用--exclude下所述的通配符匹配）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("grep 正则表达式主要参数：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\\：   忽略正则表达式中特殊字符的原有含义\n^：  匹配正则表达式的开始行\n$：  匹配正则表达式的结束行\n\\<：  从匹配正则表达 式的行开始\n\\>：  到匹配正则表达式的行结束\n[ ]：  单个字符，如[A]即A符合要求\n[ - ]：  范围，如[A-Z]，即A、B、C一直到Z都符合要求\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"linux重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux重定向"}},[t._v("#")]),t._v(" Linux重定向")]),t._v(" "),s("p",[t._v("Linux中标准的输入设备是默认指的是键盘，标准的输出设备默认指的是显示器。")]),t._v(" "),s("ul",[s("li",[t._v("输入重定向：指的是重新指定设备来代替键盘作为新的输入设备。")]),t._v(" "),s("li",[t._v("输出重定向：指的是重新指定设备来代替显示器作为新的输出设备。")])]),t._v(" "),s("p",[t._v("通常是用文件或命令的执行结果来代替键盘作为新的输入设备，而新的输出设备通常指的就是文件。")]),t._v(" "),s("h3",{attrs:{id:"输入重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入重定向"}},[t._v("#")]),t._v(" 输入重定向")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令符号格式")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("命令 < 文件")]),t._v(" "),s("td",[t._v("将指定文件作为命令的输入设备")])]),t._v(" "),s("tr",[s("td",[t._v("命令 << 分界符")]),t._v(" "),s("td",[t._v("表示从标准输入设备（键盘）中读入，直到遇到分界符才停止（读入的数据不包括分界符），这里的分界符其实就是自定义的字符串")])]),t._v(" "),s("tr",[s("td",[t._v("命令 < 文件1 > 文件2")]),t._v(" "),s("td",[t._v("将文件1作为命令的输入设备，该命令的执行结果输出到文件2中")])])])]),t._v(" "),s("h3",{attrs:{id:"输出重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出重定向"}},[t._v("#")]),t._v(" 输出重定向")]),t._v(" "),s("p",[t._v("输出重定向分为"),s("strong",[t._v("标准输出重定向")]),t._v("和"),s("strong",[t._v("错误输出重定向")]),t._v("两种技术。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令符号格式")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("命令 > 文件")]),t._v(" "),s("td",[t._v("将命令执行的标准输出结果重定向输出到指定的文件中，如果该文件已包含数据，会清空原有数据，再写入新数据。")])]),t._v(" "),s("tr",[s("td",[t._v("命令 2> 文件")]),t._v(" "),s("td",[t._v("将命令执行的错误输出结果重定向到指定的文件中，如果该文件中已包含数据，会清空原有数据，再写入新数据。")])]),t._v(" "),s("tr",[s("td",[t._v("命令 >> 文件")]),t._v(" "),s("td",[t._v("将命令执行的标准输出结果重定向输出到指定的文件中，如果该文件已包含数据，新数据将写入到原有内容的后面。")])]),t._v(" "),s("tr",[s("td",[t._v("命令 2>> 文件")]),t._v(" "),s("td",[t._v("将命令执行的错误输出结果重定向到指定的文件中，如果该文件中已包含数据，新数据将写入到原有内容的后面。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("命令 >> 文件2>&1")]),t._v(" 或 "),s("code",[t._v("命令 &>> 文件")])]),t._v(" "),s("td",[t._v("将标准输出或错误输出写入到指定文件，如果该文件中已包含数据，新数据将写入到原有内容的后面。注意。第一种格式中，最后的"),s("code",[t._v("2>&1")]),t._v("是一体的，可以认为是固定写法。")])])])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat Linux.txt > demo.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat demo.txt")]),t._v("\nLinux\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat Linux.txt > demo.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat demo.txt")]),t._v("\nLinux     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("--这里的 Linux 是清空原有的 Linux 之后，写入的新的 Linux\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat Linux.txt >> demo.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat demo.txt")]),t._v("\nLinux\nLinux     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("--以追加的方式，新数据写入到原有数据之后\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat b.txt > demo.txt")]),t._v("\ncat: b.txt: No such "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" or directory  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- 错误输出信息依然输出到了显示器中\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat b.txt 2> demo.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat demo.txt")]),t._v("\ncat: b.txt: No such "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" or directory  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("--清空文件，再将错误输出信息写入到该文件中\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat b.txt 2>> demo.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat demo.txt")]),t._v("\ncat: b.txt: No such "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" or directory\ncat: b.txt: No such "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" or directory  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("--追加写入错误输出信息\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h2",{attrs:{id:"sed命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sed命令"}},[t._v("#")]),t._v(" sed命令")]),t._v(" "),s("p",[s("code",[t._v("sed")]),t._v("命令采用流编辑模式，最明显的特点是，在"),s("code",[t._v("sed")]),t._v("处理数据之前，需要预先提供一组规则，"),s("code",[t._v("sed")]),t._v("会按照此规则来编辑数据。")]),t._v(" "),s("p",[s("code",[t._v("sed")]),t._v("会根据脚本命令来处理文本文件中的数据，这些命令要么从命令行中输入，要么存储在一个文本文件中，此命令执行数据的顺序如下：")]),t._v(" "),s("ol",[s("li",[t._v("每次仅读取一行内容；")]),t._v(" "),s("li",[t._v("根据提供的规则命令匹配并修改数据。注意，"),s("code",[t._v("sed")]),t._v("默认不会直接修改源文件数据，而是会将数据复制到缓冲区中，修改也仅限于缓冲区中的数据；")]),t._v(" "),s("li",[t._v("将执行结果输出；")])]),t._v(" "),s("p",[t._v("将一行数据匹配完成后，它会继续读取下一行数据，并重复这个过程，直到将文件中所有数据处理完毕。")]),t._v(" "),s("p",[s("code",[t._v("sed")]),t._v("命令的基本格式如下：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sed [选项] [脚本命令] 文件名")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("下表是"),s("code",[t._v("sed")]),t._v("命令常用选项及含义")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-e 脚本命令")]),t._v(" "),s("td",[t._v("该选项会将其后的脚本命令添加到已有的命令中。（多点编辑）")])]),t._v(" "),s("tr",[s("td",[t._v("-f 脚本命令")]),t._v(" "),s("td",[t._v("该选项会将其后文件中的脚本命令添加到已有的命令中。")])]),t._v(" "),s("tr",[s("td",[t._v("-n")]),t._v(" "),s("td",[t._v("默认情况下，"),s("code",[t._v("sed")]),t._v("命令会将STDIN的数据输出到终端上。但如果加上"),s("code",[t._v("-n")]),t._v("参数，则只有经过"),s("code",[t._v("sed")]),t._v("特殊处理的那一行才会被列出来。")])]),t._v(" "),s("tr",[s("td",[t._v("-i")]),t._v(" "),s("td",[t._v("此选项会直接修改源文件，要慎用。")])])])]),t._v(" "),s("p",[t._v("脚本命令说明")]),t._v(" "),s("p",[s("code",[t._v("[n1,[n2]] function")])]),t._v(" "),s("p",[s("code",[t._v("n1,n2：")]),t._v("不见得会存在，一般代表"),s("strong",[t._v("选择进行动态的行数")]),t._v("，举例来说，如果我的动作需要在10到20行之间进行，则"),s("code",[t._v("10,20[动作行为]")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("a")]),t._v(" "),s("td",[t._v("新增，a的后面可以接字符串，而这些字符串会在新的一行出现（当前的下一行）")])]),t._v(" "),s("tr",[s("td",[t._v("c")]),t._v(" "),s("td",[t._v("取代，c的后面可以接字符串，这些字符串可以取代n1,n2之间的行")])]),t._v(" "),s("tr",[s("td",[t._v("d")]),t._v(" "),s("td",[t._v("删除")])]),t._v(" "),s("tr",[s("td",[t._v("i")]),t._v(" "),s("td",[t._v("插入，i的后面可以接字符串，这些字符串在目前的上一行出现")])]),t._v(" "),s("tr",[s("td",[t._v("s")]),t._v(" "),s("td",[t._v("取代，可以直接进行取代的工作，这个s的动作可以搭配正则表达式。")])]),t._v(" "),s("tr",[s("td",[t._v("p")]),t._v(" "),s("td",[t._v("打印，将某个选择的数据打印出来")])])])]),t._v(" "),s("p",[s("strong",[s("code",[t._v("sed")]),t._v("后面接的动作，务必以“两个单引号”括住。")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/要被取代的字符串/新的字符串/g'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#替换22为55")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s#22#55#g'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://blog.csdn.net/qq_36553387/article/details/117715160",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux重定向，grep，sed，awk命令"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://blog.csdn.net/m0_50668851/article/details/108473882",target:"_blank",rel:"noopener noreferrer"}},[t._v("见博客参考连接grep的使用"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);