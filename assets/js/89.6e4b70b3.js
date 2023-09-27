(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{544:function(a,t,s){"use strict";s.r(t);var e=s(0),i=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"patch-和diff-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patch-和diff-的区别"}},[a._v("#")]),a._v(" patch 和diff 的区别")]),a._v(" "),t("p",[a._v("Git 提供了两种补丁方案，一是用git diff生成的UNIX标准补丁.diff文件，二是git format-patch生成的Git专用.patch 文件。")]),a._v(" "),t("ul",[t("li",[a._v("diff文件只是记录文件改变的内容，不带有commit记录信息,多个commit可以合并成一个diff文件。")]),a._v(" "),t("li",[a._v("patch文件带有记录文件改变的内容，也带有commit记录信息,每个commit对应一个patch文件。")])]),a._v(" "),t("p",[t("strong",[a._v("在Git下，我们可以使用.diff文件也可以使用.patch 文件来打补丁，主要应用场景有：CodeReview、代码迁移等。")])]),a._v(" "),t("h2",{attrs:{id:"创建patch和diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建patch和diff"}},[a._v("#")]),a._v(" 创建patch和diff")]),a._v(" "),t("h3",{attrs:{id:"创建patch-文件的常用命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建patch-文件的常用命令行"}},[a._v("#")]),a._v(" 创建patch 文件的常用命令行")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("某个提交的patch：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch 【commit sha1 id】 -1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#例子：  ")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch 2a2fb4539925bfa4a141fe492d9828d030f7c8a8 -1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("某次提交（含）之前的几次提交：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch 【commit sha1 id】-n\n\nn指从sha1 id对应的commit开始算起n个提交。  \n\n例子：  \n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch 2a2fb4539925bfa4a141fe492d9828d030f7c8a8 -2\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("某两次提交之间的所有patch:")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch 【commit sha1 id】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("【commit sha1 id】\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#例子：  ")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch 2a2fb4539925bfa4a141fe492d9828d030f7c8a8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("89aebfcc73bdac8054be1a242598610d8ed5f3c8\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])]),a._v(" "),t("h3",{attrs:{id:"创建diff文件的常用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建diff文件的常用方法"}},[a._v("#")]),a._v(" 创建diff文件的常用方法")]),a._v(" "),t("p",[t("strong",[a._v("使用命令行")])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" 【commit sha1 id】 【commit sha1 id】 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 【diff文件名】  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#例子：  ")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" 2a2fb4539925bfa4a141fe492d9828d030f7c8a8 89aebfcc73bdac8054be1a242598610d8ed5f3c8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" patch.diff\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"应用patch-和-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用patch-和-diff"}},[a._v("#")]),a._v(" 应用patch 和 diff")]),a._v(" "),t("h3",{attrs:{id:"_1-检查-patch-diff-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查-patch-diff-文件"}},[a._v("#")]),a._v(" 1. 检查 patch/diff 文件：")]),a._v(" "),t("blockquote",[t("p",[a._v("git apply --stat xxx.patch")])]),a._v(" "),t("h3",{attrs:{id:"_2-检查patch-diff是否能正常打入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-检查patch-diff是否能正常打入"}},[a._v("#")]),a._v(" 2.检查patch/diff是否能正常打入:")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("git apply --check 【path/to/xxx.patch】")])]),a._v(" "),t("p",[t("code",[a._v("git apply --check 【path/to/xxx.diff】")])])]),a._v(" "),t("h3",{attrs:{id:"_3-打入patch-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-打入patch-diff"}},[a._v("#")]),a._v(" 3.打入patch/diff:")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("git apply 【path/to/xxx.patch】")])]),a._v(" "),t("p",[t("code",[a._v("git apply 【path/to/xxx.diff】")])]),a._v(" "),t("p",[a._v("或者")]),a._v(" "),t("p",[t("code",[a._v("git am 【path/to/xxx.patch】")])])]),a._v(" "),t("h2",{attrs:{id:"冲突解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#冲突解决"}},[a._v("#")]),a._v(" 冲突解决")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("执行命令 "),t("code",[a._v("git am xxxx.patch")]),a._v(" 尝试直接打入补丁。因为我们使用的 patch 已经过时了，所以这一步肯定会报错并中断（注意，虽然命令停止执行了，但我们依然处于git am命令的运行环境中，可以通过git status命令查看到当前的状态）。")])]),a._v(" "),t("li",[t("p",[a._v("执行命令 "),t("code",[a._v("git apply --reject xxxx.patch")]),a._v(" 自动合入 patch 中不冲突的代码改动，同时保留冲突的部分。这些存在冲突的改动内容会被单独存储到目标源文件的相应目录下，以后缀为 .rej 的文件进行保存。比如对 ./test/someDeviceDriver.c 文件中的某些行合入代码改动失败，则会将这些发生冲突的行数及内容都保存在 ./test/someDeviceDriver.c.rej 文件中。我们可以在执行 git am 命令的目录下执行 find  -name  *.rej 命令以查看所有存在冲突的源文件位置。")])]),a._v(" "),t("li",[t("p",[a._v("依据 步骤2 中生成的 *.rej 文件内容逐个手动解决冲突，然后删除这些 *.rej 文件。完成这一步骤的操作后，我们就可以继续执行 git am 的过程了。")])]),a._v(" "),t("li",[t("p",[a._v("执行命令 "),t("code",[a._v("git status")]),a._v(" 查看当前改动过的以及新增的文件，确保没有多添加或少添加文件。")])]),a._v(" "),t("li",[t("p",[a._v("执行命令 git  add . 将所有改动都添加到暂存区（注意，关键字add后有一个小数点 . 作为参数，表示当前路径）。")])]),a._v(" "),t("li",[t("p",[a._v("执行命令 "),t("code",[a._v("git am --resolved")]),a._v(" 或"),t("code",[a._v("git am --continue")]),a._v("继续 步骤1 中被中断的 patch 合入操作。合入完成后，会有提示信息输出。可以执行git am --skip跳过此次冲突，也可以执行git am --abort回退打入patch的动作，还原到操作前的状态。")])]),a._v(" "),t("li",[t("p",[a._v("执行命令 "),t("code",[a._v("git log")]),a._v(" 确认合入状态。")])])]),a._v(" "),t("h2",{attrs:{id:"包含二进制文件时的diff和apply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包含二进制文件时的diff和apply"}},[a._v("#")]),a._v(" 包含二进制文件时的diff和apply")]),a._v(" "),t("blockquote",[t("p",[a._v("git diff HEAD^..HEAD --binary > foobar.patch")])])])}),[],!1,null,null,null);t.default=i.exports}}]);