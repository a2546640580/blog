(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{570:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、使用find与grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、使用find与grep"}},[s._v("#")]),s._v(" 一、使用find与grep")]),s._v(" "),t("ol",[t("li",[s._v('查找所有".h"文件（非组合命令）')])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.h"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v('查找所有".h"文件中的含有"helloworld"字符串的文件（组合命令）')])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.h"')]),s._v(" -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -in "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"helloworld"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.h"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -in "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"helloworld"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v('查找所有".h"和".c"文件中的含有"helloworld"字符串的文件')])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.h"')]),s._v(" -or -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.c"')]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -in "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"helloworld"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v('查找非备份文件中的含有"helloworld"字符串的文件')])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" -not -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*~"')]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -in "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"helloworld"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("注：/PATH为查找路径，默认为当前路径。带-exec参数时必须以;结尾，否则会提示“find: 遗漏“-exec”的参数”。")])]),s._v(" "),t("h2",{attrs:{id:"二、使用find和xargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、使用find和xargs"}},[s._v("#")]),s._v(" 二、使用find和xargs")]),s._v(" "),t("h3",{attrs:{id:"_1-find-pathname-options-print-exec-ok"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-find-pathname-options-print-exec-ok"}},[s._v("#")]),s._v(" 1. find pathname -options [-print -exec -ok]")]),s._v(" "),t("p",[s._v("-optinos"),t("br"),s._v("\na) -name:按照文件名查找")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -name “*.txt” -print\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -name “"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a-z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".txt” -print\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("b) -perm:按照权限查找文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -perm "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" -print  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找权限为755的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -perm 007 -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找o位置上具有7权限的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -perm "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v(" -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找具有suid的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("c) -prune"),t("br"),s._v("\n不在当前目录下查找")]),s._v(" "),t("p",[s._v("d) -user和－nouser")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -user zhao -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找文件属主是zhao的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -nouser -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找文件属主已经被删除的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("e)-group和－nogroup")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -group zhao -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找文件群组是zhao的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("f) 按照时间")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -mtime -5 -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件更改时间在5天内的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -mtime +3 -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件更改时间在3天前的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -newer file1 -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找比文件file1新的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("g)按照类型查找")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -type d -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找所有目录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("h) 按照大小")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -size +1000000C -print "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找文件大小大于1000000字节(1M)的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("i) 查找位于本文件系统里面的文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name “*.txt” -mount -print -exec,-ok \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#find命令对于匹配文件执行该参数所给出shell命令，相应命令形式为: ‘command’ {} \\;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-ok 在执行命令前要确认")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -type f -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name “*.log” -mtime +5 -ok "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name core -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用-x dev参数   防止find搜索其他分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除尺寸为０的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_2-xargs与-exec功能类似"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-xargs与-exec功能类似"}},[s._v("#")]),s._v(" 2. xargs与-exec功能类似")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ~ -type f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name “*.log” -type f -print"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i DB0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i “Mary” "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在所有文件中检索字符串Mary")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *~ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除所有以~结尾的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"三、svn过滤svn文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、svn过滤svn文件夹"}},[s._v("#")]),s._v(" 三、svn过滤svn文件夹")]),s._v(" "),t("p",[s._v("1.使用管道进行双层“过滤”，其中第二次grep使用了-v选项，即逆向匹配，打印出不匹配的行")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -r "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'function_name'")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.svn'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2.或者更简单一些，直接使用–exclude-dir选项，即指定排除目录，注意svn前的 .")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -r --exclude-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".svn "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'function_name'")]),s._v(" * \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3.grep多个过滤条件")]),s._v(" "),t("p",[s._v("a、或操作")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123|abc'")]),s._v(" filename  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找出文件（filename）中包含123或者包含abc的行")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123|abc'")]),s._v(" filename    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用egrep同样可以实现")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/123|abc/'")]),s._v(" filename   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#awk 的实现方式")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("b、与操作")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" pattern1 files "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" pattern2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示既匹配 pattern1 又匹配 pattern2 的行。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("c、其他操作")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i pattern files "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不区分大小写地搜索。默认情况区分大小写，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -l pattern files "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只列出匹配的文件名，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -L pattern files "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出不匹配的文件名，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -w pattern files "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只匹配整个单词，而不是字符串的一部分（如匹配‘magic’，而不是‘magical’），")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -C number pattern files "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#匹配的上下文分别显示[number]行，")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("d、find过滤svn文件夹")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -type f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -path "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/.svn/*'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("只搜索那些具有 .c 或 .h 扩展名的文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --include"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("c,h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" -rnw "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/path/to/somewhere/'")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pattern"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("排除搜索所有以 .o 扩展名结尾的文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*.o -rnw "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/path/to/somewhere/'")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pattern"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("对于目录，可以使用–exclude-dir参数排除一个或多个目录。例如，这将排除目录dir1/、dir2/ 以及所有与*.dst/ 匹配的目录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --exclude-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("dir1,dir2,*.dst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" -rnw "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/path/to/somewhere/'")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pattern"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("本文转自 "),t("a",{attrs:{href:"https://blog.csdn.net/sinat_32152141/article/details/126880839",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/sinat_32152141/article/details/126880839"),t("OutboundLink")],1),s._v("，https://blog.csdn.net/weixin_37335761/article/details/125918438如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=e.exports}}]);