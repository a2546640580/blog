import{_ as e,o as i,c as l,a as s,b as n,e as a}from"./app-9f26182c.js";const t={},c=s("h2",{id:"ros文件系统",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ros文件系统","aria-hidden":"true"},"#"),n(" ROS文件系统")],-1),o=s("ul",null,[s("li",null,[n("软件包"),s("br"),n(" 包是ROS代码的软件组织单元，每个软件包都可以包含程序库、可执行文件、脚本或其他构件。")]),s("li",null,[n("Manifests"),s("br"),n(" 清单（Manifest）是对软件包的描述。它用于定义软件包之间的依赖关系，并记录有关软件包的元信息，如版本、维护者、许可证等。")]),s("li",null,[n("内置命令工具 "),s("ul",null,[s("li",null,[n("rospack 获取软件包的所在路径 "),s("code",null,"rospack find [package_name]")]),s("li",null,[n("roscd "),s("ul",null,[s("li",null,[n("切换目录到软件包或者软件包集 "),s("code",null,"roscd [locationname[/subdir]]")]),s("li",null,[n("进入日志文件目录 "),s("code",null,"roscd log")])])])]),s("div",{class:"custom-container tip"},[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8h.01"}),s("path",{d:"M11 12h1v4h1"})])]),s("p",{class:"custom-container-title"},"TIP"),s("p",null,[n("就像ROS中的其它工具一样，roscd只能切换到那些路径已经包含在ROS_PACKAGE_PATH环境变量中的软件包，可以通过 "),s("code",null,"$ echo $ROS_PACKAGE_PATH"),n(" 查看ROS_PACKAGE_PATH环境变量中包含的路径")])]),s("ul",null,[s("li",null,[n("rosls 直接按软件包的名称执行ls命令 "),s("code",null,"rosls [locationname[/subdir]]")]),s("li",null,[n("TAB补全 "),s("ul",null,[s("li",null,"使用TAB键可以补全较长的软件包名称"),s("li",null,[n("查看当前安装的所有软件包 "),s("code",null,"rosls 双击TAB")])])])])])],-1),r=a(`<h2 id="创建ros软件包" tabindex="-1"><a class="header-anchor" href="#创建ros软件包" aria-hidden="true">#</a> 创建ROS软件包</h2><ul><li>catkin软件包的组成 <ul><li>一个符合catkin规范的package.xml文件</li><li>一个catkin版本的CMakeLists.txt文件</li><li>每个包必须有自己的目录</li></ul></li><li>开发方法：推荐使用catkin工作空间</li><li>创建catkin软件包<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、创建一个新的catkin软件包
catkin_create_pkg <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span> <span class="token punctuation">[</span>depend1<span class="token punctuation">]</span> <span class="token punctuation">[</span>depend2<span class="token punctuation">]</span> <span class="token punctuation">[</span>depend3<span class="token punctuation">]</span>
<span class="token number">2</span>、在catkin工作区中构建软件包
<span class="token builtin class-name">cd</span> ~/catkin_ws
catkin_make
<span class="token number">3</span>、要将这个工作空间添加到ROS环境中，你需要source一下生成的配置文件
<span class="token builtin class-name">source</span> ~/catkin_ws/devel/setup.bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>软件包的依赖关系<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/catkin_ws/src
// std_msgs rospy roscpp 即为beginner_tutorials的一级依赖
catkin_create_pkg beginner_tutorials std_msgs rospy roscpp
// 查看一级依赖
rospack depends1 beginner_tutorials
// 查看间接依赖
rospack depends1 rospy
// 查看所有依赖
rospack depends beginner_tutorials
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="构建ros软件包" tabindex="-1"><a class="header-anchor" href="#构建ros软件包" aria-hidden="true">#</a> 构建ROS软件包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/catkin_ws
// 构建src目录下的所有catkin项目
catkin_make
// 构建my_src目录下的所有catkin项目
catkin_make <span class="token parameter variable">--source</span> my_src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="理解ros节点" tabindex="-1"><a class="header-anchor" href="#理解ros节点" aria-hidden="true">#</a> 理解ROS节点</h2><p>计算图（Computation Graph）是一个由ROS进程组成的点对点网络，它们能够共同处理数据。ROS的基本计算图概念有节点（Nodes）、主节点（Master）、参数服务器（Parameter Server）、消息（Messages）、服务（Services）、话题（Topics）和袋（Bags），它们都以不同的方式向图（Graph）提供数据。</p><ul><li>节点（Nodes） <ul><li>节点是一个ROS软件包中的可执行文件</li><li>节点使用ROS客户端库与其他节点通信</li><li>节点可以发布或订阅话题</li><li>节点可以提供或使用服务</li></ul></li><li>消息（Messages）：订阅或发布话题时所使用的ROS数据类型</li><li>话题（Topics）：节点可以将消息发布到话题，或通过订阅话题来接收消息</li><li>主节点（Master）：ROS的命名服务，例如帮助节点发现彼此</li><li>客户端库 <ul><li>ROS客户端库可以让用不同编程语言编写的节点进行相互通信</li><li>rospy = Python客户端库</li><li>roscpp = C++客户端库</li></ul></li><li>rosout：在ROS中相当于stdout/stderr（标准输出/标准错误）</li><li>roscore <ul><li>主节点 + rosout + 参数服务器</li><li><code>roscore</code> 在运行所有ROS程序前首先要运行的命令</li></ul></li><li>rosnode <ul><li><code>rosnode list</code> 列出当前活动的节点</li><li><code>rosnode info</code> 返回某个指定节点的信息</li><li><code>rosnode ping [node_name]</code> 测试某个节点是否正常</li></ul></li><li>rosrun <ul><li><code>rosrun [package_name] [node_name]</code> 可以直接用包名运行软件包内的节点</li><li><code>rosrun [package_name] [node_name] __name:=my_name</code> 使用重映射参数来改变节点名称</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rosrun turtlesim turtlesim_node
rosnode list
  /rosout
  /turtlesim   
rosrun turtlesim turtlesim_node __name:<span class="token operator">=</span>my_turtle
rosnode list
  /rosout
  /my_turtle 
rosnode <span class="token function">ping</span> my_turtle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="理解ros话题" tabindex="-1"><a class="header-anchor" href="#理解ros话题" aria-hidden="true">#</a> 理解ROS话题</h2><p>节点之间是通过ROS话题来相互通信的</p><ul><li>用动态的图显示系统中相互通信的节点 <code>rosrun rqt_graph rqt_graph</code></li><li>在滚动时间图上显示发布到某个话题上的数据 <code>rosrun rqt_plot rqt_plot</code></li><li><code>rostopic</code> 命令工具 <ul><li>显示发布在某个话题上的数据 <code>rostopic echo [topic]</code></li><li>列出当前已被订阅和发布的所有话题 <code>rostopic list -b/-v/-p/-s/-h</code></li><li>话题的通信是通过节点间发送ROS消息实现的 <ul><li>查看所发布话题的消息类型 <code>rostopic type [topic]</code></li><li>查看消息的详细消息 <code>rosmsg show [msg_type]</code></li><li>结合 <code>rostopic type [topic] | rosmsg show</code></li></ul></li><li><code>rostopic pub</code> 可以把数据发布到当前某个正在广播的话题上 <ul><li><code>rostopic pub [topic] [msg_type] [args]</code></li><li>使用 <code>rostopic pub -r</code> 可以发布源源不断的命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// -1代表只发布一条消息然后退出 --用来告诉选项解析器之后的参数都不是选项
rostopic pub <span class="token parameter variable">-1</span> /turtle1/cmd_vel geometry_msgs/Twist -- <span class="token string">&#39;[2.0, 0.0, 0.0]&#39;</span> <span class="token string">&#39;[0.0, 0.0, 1.8]&#39;</span>
// <span class="token number">1</span>代表发布的频率为1HZ
rostopic pub /turtle1/cmd_vel geometry_msgs/Twist <span class="token parameter variable">-r</span> <span class="token number">1</span> -- <span class="token string">&#39;[2.0, 0.0, 0.0]&#39;</span> <span class="token string">&#39;[0.0, 0.0, -1.8]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>报告数据发布的速率 <code>rostopic hz [topic]</code></li></ul></li></ul><h2 id="理解ros服务和参数" tabindex="-1"><a class="header-anchor" href="#理解ros服务和参数" aria-hidden="true">#</a> 理解ROS服务和参数</h2><p>ROS服务是节点之间通讯的另一种方式，服务允许节点发送一个请求（request）并获得一个响应（response）</p><ul><li>rosservice <ul><li><code>rosservice list</code> 输出活跃服务的信息</li><li><code>rosservice type [service]</code> 输出服务的类型</li><li><code>rosservice call [service] [args]</code> 调用指定服务<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 无参数的调用
rosservice call /clear
// 有参数的调用
rosservice <span class="token builtin class-name">type</span> /spawn <span class="token operator">|</span> rossrv show
  float32 x
  float32 y
  float32 theta
  string name
  ---
  string name
rosservice call /spawn <span class="token number">2</span> <span class="token number">2</span> <span class="token number">0.2</span> <span class="token string">&quot;&quot;</span>
  name: turtle2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>rosservice find</code> 按服务的类型查找服务</li><li><code>rosservice uri</code> 输出服务的ROSRPC uri</li></ul></li><li>rosparam <ul><li>rosparam可以在ROS参数服务器（Parameter Server）上存储和操作数据</li><li>参数服务器能够存储整型（integer）、浮点（float）、布尔（boolean）、字典（dictionaries）和列表（list）等数据类型</li><li>rosparam使用YAML标记语言的语法</li><li><code>rosparam list</code> 列出参数名</li><li><code>rosparam set [param_name] [arg]</code> 设置参数</li><li><code>rosparam get [param_name]</code> 获取参数</li><li><code>rosparam get /</code> 显示参数服务器上的所有内容</li><li><code>rosparam delete</code> 删除参数</li><li><code>rosparam dump [file_name] [namespace]</code> 向文件中转储参数</li><li><code>rosparam load [file_name] [namespace]</code> 从文件中加载参数</li></ul></li></ul><h2 id="使用rqt-console和roslaunch" tabindex="-1"><a class="header-anchor" href="#使用rqt-console和roslaunch" aria-hidden="true">#</a> 使用rqt_console和roslaunch</h2>`,14),d=s("ul",null,[s("li",null,[n("rqt_console连接到了ROS的日志框架，以显示节点的输出信息 "),s("code",null,"rosrun rqt_console rqt_console")]),s("li",null,[n("rqt_logger_level允许我们在节点运行时改变输出信息的详细级别，包括Debug、Info、Warn和Error "),s("code",null,"rosrun rqt_logger_level rqt_logger_level"),s("div",{class:"custom-container tip"},[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8h.01"}),s("path",{d:"M11 12h1v4h1"})])]),s("p",{class:"custom-container-title"},"TIP"),s("p",null,[n("日志记录器级别从高到低为Fatal Error Warn Info Debug"),s("br"),n(" 通过设置日志级别可以获得所有优先级级别，或只是更高级别的消息")])])]),s("li",null,[n("roslaunch可以用来启动定义在launch（启动）文件中的节点 "),s("ul",null,[s("li",null,[s("code",null,"roslaunch [package] [filename.launch]")]),s("li",null,"Example")]),s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token builtin class-name"},"cd"),n(` ~/catkin_ws
`),s("span",{class:"token builtin class-name"},"source"),n(` devel/setup.bash
roscd beginner_tutorials
`),s("span",{class:"token function"},"mkdir"),n(` launch
`),s("span",{class:"token builtin class-name"},"cd"),n(` launch
// 创建launch文件
`),s("span",{class:"token function"},"touch"),n(` turtlemimic.launch
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])]),n("turtlemimic.launch"),s("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[s("pre",{class:"language-xml"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("launch")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token comment"},"<!-- 创建了两个分组，并以命名空间（namespace）标签来区分 -->"),n(`
  `),s("span",{class:"token comment"},"<!-- 两个分组中都有相同的名为sim的turtlesim节点。这样可以让我们同时启动两个turtlesim模拟器，而不会产生命名冲突 -->"),n(`
  `),s("span",{class:"token comment"},"<!-- turtulesim1 -->"),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("group")]),n(),s("span",{class:"token attr-name"},"ns"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim1"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("node")]),n(),s("span",{class:"token attr-name"},"pkg"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"name"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("sim"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim_node"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("group")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token comment"},"<!-- turtulesim2 -->"),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("group")]),n(),s("span",{class:"token attr-name"},"ns"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim2"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("node")]),n(),s("span",{class:"token attr-name"},"pkg"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"name"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("sim"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim_node"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("group")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token comment"},"<!-- 模仿节点 -->"),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("node")]),n(),s("span",{class:"token attr-name"},"pkg"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"name"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mimic"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mimic"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("remap")]),n(),s("span",{class:"token attr-name"},"from"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("input"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"to"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim1/turtle1"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},"/>")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("remap")]),n(),s("span",{class:"token attr-name"},"from"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("output"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"to"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("turtlesim2/turtle1"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("node")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("launch")]),s("span",{class:"token punctuation"},">")]),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])]),n("然后通过roslaunch来运行lanunch文件"),s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n(`// 运行launch文件
roslaunch beginner_tutorials turtlemimic.launch
// 发布命令给turtlesim1
rostopic pub /turtlesim1/turtle1/cmd_vel geometry_msgs/Twist `),s("span",{class:"token parameter variable"},"-r"),n(),s("span",{class:"token number"},"1"),n(" -- "),s("span",{class:"token string"},"'[2.0, 0.0, 0.0]'"),n(),s("span",{class:"token string"},"'[0.0, 0.0, -1.8]'"),n(`
// /turtlesim1/sim `),s("span",{class:"token operator"},"="),s("span",{class:"token operator"},">"),n(" mimic "),s("span",{class:"token operator"},"="),s("span",{class:"token operator"},">"),n(`  /turtlesim2/sim
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])])])],-1),u=a(`<h2 id="使用rosed在ros中编辑文件" tabindex="-1"><a class="header-anchor" href="#使用rosed在ros中编辑文件" aria-hidden="true">#</a> 使用rosed在ROS中编辑文件</h2><p>rosed是rosbash套件的一部分。利用它可以直接通过软件包名编辑包中的文件，而无需键入完整路径。</p><ul><li>用法：<code>rosed [package_name] [filename]</code></li><li>示例：<code>rosed roscpp Logger.msg</code></li><li>查看包中所有文件 <code>rosed [package_name] &lt;tab&gt;&lt;tab&gt;</code></li></ul><h2 id="创建ros消息和服务" tabindex="-1"><a class="header-anchor" href="#创建ros消息和服务" aria-hidden="true">#</a> 创建ROS消息和服务</h2><h3 id="msg和srv介绍" tabindex="-1"><a class="header-anchor" href="#msg和srv介绍" aria-hidden="true">#</a> msg和srv介绍</h3><ul><li>msg（消息） <ul><li>msg文件就是文本文件，用于描述ROS消息的字段</li><li>msg文件用于为不同编程语言编写的消息生成源代码</li><li>msg文件存放在软件包的msg目录下</li><li>msg文件每行都有一个字段类型和字段名称</li><li>msg可使用的类型有 <ul><li>int8, int16, int32, int64 (以及 uint*)</li><li>float32, float64</li><li>string</li><li>time, duration</li><li>其他msg文件</li><li>variable-length array[] 和 fixed-length array[C]</li><li>特殊的数据类型：Header (含有时间戳和ROS中广泛使用的坐标帧信息)</li></ul></li><li>Example<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Header header
string child_frame_id
geometry_msgs/PoseWithCovariance pose
geometry_msgs/TwistWithCovariance twist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>srv（服务） <ul><li>一个srv文件描述一个服务</li><li>srv文件由请求（request）和响应（response）组成，这两部分用一条---线隔开</li><li>srv文件存放在srv目录下</li><li>Example (A和B是请求, Sum是响应)<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int64 A
int64 B
---
int64 Sum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="msg和srv的创建和使用" tabindex="-1"><a class="header-anchor" href="#msg和srv的创建和使用" aria-hidden="true">#</a> msg和srv的创建和使用</h3><ul><li>创建msg<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>roscd beginner_tutorials
<span class="token function">mkdir</span> msg
<span class="token builtin class-name">echo</span> <span class="token string">&quot;int64 num&quot;</span> <span class="token operator">&gt;</span> msg/Num.msg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>添加依赖到package.xml<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build_depend</span><span class="token punctuation">&gt;</span></span>message_generation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build_depend</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exec_depend</span><span class="token punctuation">&gt;</span></span>message_runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exec_depend</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>修改CMakeLists.txt<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.为已经存在里面的find_package调用添加message_generation依赖项
find_package(catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
  message_generation
)
// 2.确保导出消息的运行时依赖关系
catkin_package(
  ...
  CATKIN_DEPENDS message_runtime
  ...
)
// 3.手动添加.msg文件
add_message_files(
  FILES
  Num.msg
)
// 4.确保generate_messages()函数被调用
generate_messages(
  DEPENDENCIES
  std_msgs
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>使用rosmsg <ul><li>用法 <code>rosmsg show [message type]</code></li><li>Example<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 带包名
rosmsg show beginner_tutorials/Num
// 不带报名
rosmsg show Num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>创建srv<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>roscd beginner_tutorials
<span class="token function">mkdir</span> srv
roscp rospy_tutorials AddTwoInts.srv srv/AddTwoInts.srv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>注：roscp用于将文件从一个包复制到另一个包 <code>roscp [package_name] [file_to_copy_path] [copy_path]</code><br> 添加依赖到package.xml<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build_depend</span><span class="token punctuation">&gt;</span></span>message_generation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build_depend</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exec_depend</span><span class="token punctuation">&gt;</span></span>message_runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exec_depend</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>修改CMakeLists.txt<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.为已经存在里面的find_package调用添加message_generation依赖项
find_package(catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
  message_generation
)
// 2.确保导出消息的运行时依赖关系
catkin_package(
  ...
  CATKIN_DEPENDS message_runtime
  ...
)
// 3.手动添加.srv文件
add_service_files(
  FILES
  AddTwoInts.srv
)
// 4.确保generate_messages()函数被调用
generate_messages(
  DEPENDENCIES
  std_msgs
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>使用rossrv <ul><li>用法：<code>rossrv show &lt;service type&gt;</code></li><li>Example<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 带包名
rossrv show beginner_tutorials/AddTwoInts
// 不带报名
rossrv show AddTwoInts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="msg和srv的一般步骤" tabindex="-1"><a class="header-anchor" href="#msg和srv的一般步骤" aria-hidden="true">#</a> msg和srv的一般步骤</h3><p>修改CMakeLists.txt</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>generate_messages(
  DEPENDENCIES
  # 取消注释，然后添加任意你的消息用到的包含.msg文件的软件包（本例中为std_msgs）
  std_msgs
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新make软件包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>roscd beginner_tutorials
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>
catkin_make
<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=s("div",{class:"custom-container tip"},[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8h.01"}),s("path",{d:"M11 12h1v4h1"})])]),s("p",{class:"custom-container-title"},"TIP"),s("p",null,"msg目录中的任何.msg文件都将生成所有支持语言的代码。C++消息的头文件将生成在~/catkin_ws/devel/include/beginner_tutorials/。Python脚本将创建在~/catkin_ws/devel/lib/python2.7/dist-packages/beginner_tutorials/msg。而Lisp文件则出现在~/catkin_ws/devel/share/common-lisp/ros/beginner_tutorials/msg/。"),s("p",null,"类似地，srv目录中的任何.srv文件都将生成支持语言的代码。对于C++，头文件将生成在消息的头文件的同一目录中。对于Python和Lisp，会在msg目录旁边的srv目录中。")],-1),m=a(`<h2 id="录制和回放数据" tabindex="-1"><a class="header-anchor" href="#录制和回放数据" aria-hidden="true">#</a> 录制和回放数据</h2><ul><li>录制数据 <ul><li>录制所有话题 <code>rosbag record -a</code></li><li>仅录制感兴趣的话题即数据子集 <code>rosbag record -O &lt;bagfile_name&gt; &lt;topic1&gt; &lt;topic2&gt;</code></li></ul></li><li>查看bag文件 <ul><li>查看所有话题的信息 <code>rosbag info &lt;your bagfile&gt;</code></li><li>查看指定话题的信息 <code>rosbag info mybag.bag | grep -E &quot;(topic1|topic2|topic3)&quot;</code></li></ul></li><li>回放bag文件 <ul><li><code>rosbag play &lt;your bagfile&gt;</code></li><li>rosbag play命令在公告每条消息后会等待一小段时间（0.2秒）才真正开始发布bag文件中的内容，等待时间可以通过<code>-d</code>选项来指定</li><li><code>-s</code> 参数选项让rosbag play不从bag文件的开头开始，而是从某个指定的时间开始</li><li><code>-r</code> 选项允许通过设定一个参数来改变消息发布速率 如 <code>rosbag play -r 2 &lt;your bagfile&gt;</code></li><li><code>--immediate</code> 尽可能快地回放bag文件</li><li><code>--topics topic1 topic2 ... topicN</code> 只回放感兴趣的话题</li></ul></li><li>局限性<br> rosbag受制于其本身的性能无法完全复制录制时的系统运行行为，rosplay也一样。对于像turtlesim这样的节点，当处理消息的过程中系统定时发生极小变化时也会使其行为发生微妙变化，用户不应该期望能够完美地模仿系统行为。</li><li>从bag文件中读取所需话题的消息的两种方法 <ul><li>方法1：立即回放消息并在多个终端中查看输出<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>roscore
// 订阅topic1并复读该话题上发布的所有内容，同时用tee命令转储到一个yaml格式的文件中以便之后查看
rostopic <span class="token builtin class-name">echo</span> /topic1 <span class="token operator">|</span> <span class="token function">tee</span> topic1.yaml
// 对其他你感兴趣的话题重复这一步骤，每个话题必须有自己的终端
rostopic <span class="token builtin class-name">echo</span> /topic2 <span class="token operator">|</span> <span class="token function">tee</span> topic2.yaml
// 回放bag文件
rosbag play <span class="token parameter variable">--immediate</span> demo.bag <span class="token parameter variable">--topics</span> /topic1 /topic2
// 在topic1.yaml和topic2.yaml中查看文件中的消息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>方法2：使用ros_readbagfile脚本<br> 1.下载并安装ros_readbag.py<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载脚本文件</span>
<span class="token function">wget</span> https://raw.githubusercontent.com/ElectricRCAircraftGuy/eRCaGuy_dotfiles/master/useful_scripts/ros_readbagfile.py
<span class="token comment"># 赋予执行权限</span>
<span class="token function">chmod</span> +x ros_readbagfile.py
<span class="token comment"># 创建bin路径</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/bin
<span class="token comment"># 将脚本放入bin文件夹中 并更改成ros_readbagfile的脚本名</span>
<span class="token function">mv</span> ros_readbagfile.py ~/bin/ros_readbagfile
<span class="token comment"># resource环境脚本</span>
<span class="token builtin class-name">.</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>2.通过rosbag_info命令确定要从bag文件中读取的准确话题名<br> 3.使用ros_readbagfile <ul><li>默认Python版本为Python3 <code>ros_readbagfile &lt;mybagfile.bag&gt; [topic1] [topic2] [topic3] [...]</code></li><li>默认Python版本为Python2 <code>python ros_readbagfile.py &lt;mybagfile.bag&gt; [topic1] [topic2] [topic3] [...]</code></li><li>Example<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># python3</span>
ros_readbagfile ~/bagfiles/subset.bag /turtle1/cmd_vel <span class="token operator">|</span> <span class="token function">tee</span> subset.yaml
<span class="token comment"># python2</span>
<span class="token function">wget</span> https://raw.githubusercontent.com/ElectricRCAircraftGuy/eRCaGuy_dotfiles/master/useful_scripts/ros_readbagfile.py
python ros_readbagfile.py ~/bagfiles/subset.bag /turtle1/cmd_vel <span class="token operator">|</span> <span class="token function">tee</span> subset.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>对比 <ul><li>rostopic极慢，ros_readbagfile脚本较快</li><li>rostopic一次只能读取单个话题，而ros_readbagfile脚本可以同时读取任意多的话题</li></ul></li></ul></li></ul><h2 id="roswtf入门" tabindex="-1"><a class="header-anchor" href="#roswtf入门" aria-hidden="true">#</a> roswtf入门</h2><ul><li>用法：<code>roswtf</code> 可以检查你的系统并尝试发现问题</li><li>输出信息 <ul><li>package or stack in context</li><li>Static checks summary<br> 报告任何关于文件系统或非运行时（比如无需roscore的场景）的问题</li><li>Online graph checks <ul><li>roscore未运行时不会进行</li><li>roscore在运行时会进行ROS图的在线检查，检查过程的长短取决于正在运行的ROS节点数量</li></ul></li></ul></li><li><code>roswtf</code> 会对一些系统中看起来异常但可能是正常的运行情况发出警告，也会对确实有问题的情况报告错误<br> Example<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>roscd
ROS_PACKAGE_PATH=bad:$ROS_PACKAGE_PATH
roswtf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>检查信息<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Stack: ros
================================================================================
Static checks summary:

Found 1 error(s).

ERROR Not all paths in ROS_PACKAGE_PATH [bad] point to an existing directory: 
 * bad

================================================================================

Cannot communicate with master, ignoring graph checks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,4),v=[c,o,r,d,u,p,m];function b(g,k){return i(),l("div",null,v)}const _=e(t,[["render",b],["__file","junior-class.html.vue"]]);export{_ as default};
