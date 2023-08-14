(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{569:function(n,a,s){"use strict";s.r(a);var t=s(0),e=Object(t.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"nodejs-npm的安装与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-npm的安装与配置"}},[n._v("#")]),n._v(" nodejs+npm的安装与配置")]),n._v(" "),a("p",[n._v("点击_"),a("a",{attrs:{href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Node.js中文网"),a("OutboundLink")],1),n._v("_根据自身系统进行下载即可")]),n._v(" "),a("p",[n._v("检查环境变量和安装目录，win+R，输入cmd，获取node版本号")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/64857159d6344184a330f7ca6b7421cc.png",alt:"在这里插入图片描述"}})]),n._v(" "),a("p",[n._v("如果无法获取版本号，则在path添加环境变量为node的安装目录")]),n._v(" "),a("p",[n._v("npm是在nodejs下载安装后自带的工具，所以我们首先要了解npm的默认配置；第一步还是检查版本")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/e2b26ca8355248f1a9ca1b0174041af8.png",alt:"在这里插入图片描述"}})]),n._v(" "),a("h2",{attrs:{id:"npm相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm相关配置"}},[n._v("#")]),n._v(" npm相关配置")]),n._v(" "),a("p",[n._v("1.查看npm的配置文件及其配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("npm config ls -l \t\t\t\t#查看npm的所有配置信息\nnpm config get globalconfig\t\t#获取全局配置文件的路径，默认不启用\nnpm config get userconfig\t\t#获取用户配置文件的路径，默认启用\nnpm config get registry\t\t\t#获取远程依赖包的下载地址\nnpm config get cache\t\t\t#获取包缓存路径\nnpm config get prefix\t\t\t#获取全局包的安装路径\nnpm config get proxy\t\t\t#获取代理地址\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("p",[n._v("2.修改默认配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('npm config list\t\t#获取用户配置\nnpm config set prefix="D:\\Program Files\\nodejs\\node_global" #设置全局包的下载路径\nnpm config set cache="D:\\Program Files\\nodejs\\node_cache"\t#设置缓存路径\nnpm config set registry=http://registry.npm.taobao.org/\t\t#设置远程镜像地址\nnpm config set proxy="http://127.0.0.1:[代理端口号]"\t\t\t#设置代理端口号\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("p",[n._v("如果有些包下载不下来，比如我遇到过sass无法从github上下载下来，我们连接代理服务器并设置代理地址来下载")]),n._v(" "),a("h2",{attrs:{id:"包下载、全局模块-尽量不要使用全局安装-避免依赖错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包下载、全局模块-尽量不要使用全局安装-避免依赖错误"}},[n._v("#")]),n._v(" 包下载、全局模块（尽量不要使用全局安装，避免依赖错误）")]),n._v(" "),a("p",[n._v("首先我们要了解公共模块和私有模块，公共模块顾名思义是公共的一个模块，该模块下的包可以被其他所有项目所使用，而私有的模块下的包，只应用在当前项目下。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/ba1ff1c513e643b7954fb5f0ab71319c.png",alt:"在这里插入图片描述"}})]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("npm install [模块名] [-g] \t#包安装，加上-g代表全局安装，不加则是当前文件夹下安装\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("p",[n._v("为了让命令能在终端执行，我们需要在系统环境变量中添加该路径（D:\\Program Files\\nodejs\\node_global）到系统环境Path中\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b64fbffee1bd4b2d96092cbfa0f82c73.png",alt:"在这里插入图片描述"}})]),n._v(" "),a("h2",{attrs:{id:"win10下安装node之后-node-v正常-npm-v报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#win10下安装node之后-node-v正常-npm-v报错"}},[n._v("#")]),n._v(" win10下安装"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=node&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[n._v("node"),a("OutboundLink")],1),n._v("之后，"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=node&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[n._v("node"),a("OutboundLink")],1),n._v(" -v正常，npm -v报错")]),n._v(" "),a("p",[a("strong",[n._v("原因：node目录权限不够")])]),n._v(" "),a("p",[a("strong",[n._v("找到node安装目录，右键属性，点击安全，设置users用户完全控制权限")])]),n._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/aba2e7343a88411ab80bac63b0cc7575.bmp",alt:"img"}})]),n._v(" "),a("h2",{attrs:{id:"yarn的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn的安装"}},[n._v("#")]),n._v(" yarn的安装")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("npm install -g yarn \nyarn --version\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])]),a("p",[n._v("Yarn 设置淘宝源")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("yarn config set registry https://registry.npm.taobao.org -g \nyarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])]),a("h2",{attrs:{id:"npm命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm命令"}},[n._v("#")]),n._v(" npm命令")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 查看 npm 全局安装过的包\nnpm list -g --depth 0\n// 全局安装\nnpm install <package> -g\n// 安装项目所有依赖\nnpm install\n// 安装指定版本\nnpm install <package>@1.2.3\n// 安装最新版本\nnpm i <package>@latest\n// 删除全局的包\nnpm uninstall -g <package>\n// 删除 node_modules 目录下面的包\nnpm uninstall <package>\n// 更新指定包\nnpm update <package>\n// 更新指定全局包\nnpm update -g <package>\n// 更新本地安装的包\n// 在 package.json 文件所在的目录中执行 npm update 命令\n// 执行 npm outdated 命令。不应该有任何输出。\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("h2",{attrs:{id:"yarn命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn命令"}},[n._v("#")]),n._v(" yarn命令")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 查看 yarn 全局安装过的包\nyarn global list --depth=0\n// 全局安装\nyarn global add <package>\n// 安装所有依赖\nyarn\n// 安装指定版本\nyarn add <package>@<version>\n// 安装最新版本\nyarn add <package>\n// 删除包,会更新package.json和yarn.lock\nyarn remove <package>\n// 更新包\nyarn upgrade\n// 更新指定的包\nyarn upgrade <package>\n// 获取可更新的包列表选择更新\nyarn upgrade-interactive --latest\n// 更新全局依赖\nyarn global upgrade --latest\n// 更新全局依赖，有交互\nyarn global upgrade-interactive --latest\n// 列出已缓存的包\nyarn cache list\n// 查找缓存包的路径\nyarn cache dir\n// 清除缓存的包\nyarn cache clean\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br")])]),a("h2",{attrs:{id:"yarn的配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn的配置项"}},[n._v("#")]),n._v(" yarn的配置项")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("yarn config list // 显示所有配置项\nyarn config get <key> //显示某配置项\nyarn config delete <key> //删除某配置项\nyarn config set <key> <value> [-g|--global] //设置配置项\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);