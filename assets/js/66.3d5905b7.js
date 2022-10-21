(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{520:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Android是多任务系统，Audio系统是竞争资源。Android2.2之前，没有内建的机制来解决多个程序竞争Audio的问题，2.2引入了称作AudioFocus的机制来管理对Audio资源的竞争的管理与协调。")]),s._v(" "),a("p",[a("strong",[s._v("按照AudioFocus的机制，在使用AudioStream之前，需要申请AudioFocus，在获得AudioFocus之后才可以使用相应的AudioStream；如果有别的程序竞争你正在使用的AudioStream，你的程序需要在收到通知之后做停止播放或者降低声音的处理。值得指出的是，这种机制是需要合作完成的，需要所有使用Audio资源的程序都按照这种机制来做，而如果有程序在它失去AudioFocus的时候仍然在使用Audio，AudioFocus拿它也没办法。而这一点对于开放系统的Android来说很致命的：用户可能安装没遵守这种机制的程序，或者版本太老还没引入这种机制的程序，这最终会导致很差的用户体验。")])]),s._v(" "),a("h2",{attrs:{id:"_1、audiofocus的申请与释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、audiofocus的申请与释放"}},[s._v("#")]),s._v(" 1、AudioFocus的申请与释放")]),s._v(" "),a("p",[s._v("​       获取/放弃AudioFocus的方法都在android.media.AudioManager中，获取AudioFocus用requestAudioFocus()；用完之后，放弃AudioFocus，用abandonAudioFocus()。")]),s._v(" "),a("p",[s._v("其中，参数：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("**streamType：**播放流类型；")])]),s._v(" "),a("li",[a("p",[s._v("durationHint：")]),s._v(" "),a("p",[s._v("是持续性的指示：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("AUDIOFOCUS_GAIN")]),s._v(" 指示申请得到的Audio Focus不知道会持续多久，一般是长期占有；")]),s._v(" "),a("li",[a("code",[s._v("AUDIOFOCUS_GAIN_TRANSIENT")]),s._v("指示要申请的AudioFocus是暂时性的，会很快用完释放的；")]),s._v(" "),a("li",[a("code",[s._v("AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK")]),s._v("不但说要申请的AudioFocus是暂时性的，还指示当前正在使用AudioFocus的可以继续播放，只是要“duck”一下（降低音量）。")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("AudioManager.OnAudioFocusChangeListener")]),s._v(" 是申请成功之后监听AudioFocus使用情况的Listener，后续如果有别的程序要竞争AudioFocus，都是通过这个Listener的"),a("code",[s._v("onAudioFocusChange()")]),s._v("方法来通知这个Audio Focus的使用者的。")])])]),s._v(" "),a("p",[s._v("​    返回值，可能是：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("AUDIOFOCUS_REQUEST_GRANTED")]),s._v("：申请成功；")]),s._v(" "),a("li",[a("code",[s._v("AUDIOFOCUS_REQUEST_FAILED")]),s._v("：申请失败。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("AudioManager audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);\naudioManager.requestAudioFocus(onAudioFocusChangeListener, AudioManager.STREAM_MUSIC, AudioManager.AUDIOFOCUS_GAIN);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2、audiofocus被抢占与重新获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、audiofocus被抢占与重新获得"}},[s._v("#")]),s._v(" 2、AudioFocus被抢占与重新获得")]),s._v(" "),a("p",[s._v("​    由上节中知道，申请/释放AudioFocus时传入了**"),a("code",[s._v("AudioManager.OnAudioFocusChangeListener")]),s._v("**这个参数，其onAudioFocusChange()方法是Audio Focus被抢占与再次获得通知的地方。所以，每个要使用AudioFocus的程序都要小心实现这个函数，保证AudioFocus实现的一致性。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("AUDIOFOCUS_LOSS")]),s._v("：失去了Audio Focus，并将会持续很长的时间。这里因为可能会停掉很长时间，所以不仅仅要停止Audio的播放，最好直接释放掉Media资源。而因为停止播放Audio的时间会很长，如果程序因为这个原因而失去AudioFocus，最好不要让它再次自动获得AudioFocus而继续播放，不然突然冒出来的声音会让用户感觉莫名其妙，感受很不好。这里直接放弃AudioFocus，当然也不用再侦听远程播放控制【如下面代码的处理】。要再次播放，除非用户再在界面上点击开始播放，才重新初始化Media，进行播放。")]),s._v(" "),a("li",[a("code",[s._v("AUDIOFOCUS_LOSS_TRANSIENT")]),s._v("：暂时失去Audio Focus，并会很快再次获得。必须停止Audio的播放，但是因为可能会很快再次获得AudioFocus，这里可以不释放Media资源；")]),s._v(" "),a("li",[a("code",[s._v("AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK")]),s._v("：暂时失去AudioFocus，但是可以继续播放，不过要在降低音量。")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 音频焦点监听\n     */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AudioManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OnAudioFocusChangeListener")]),s._v(" onAudioFocusChangeListener "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AudioManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OnAudioFocusChangeListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onAudioFocusChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" focusChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("focusChange "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AudioManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AUDIOFOCUS_LOSS_TRANSIENT  \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Pause playback   ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("focusChange "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AudioManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AUDIOFOCUS_LOSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n            am"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unregisterMediaButtonEventReceiver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RemoteControlReceiver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n            am"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("abandonAudioFocus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("afChangeListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Stop playback   ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("focusChange "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Lower the volume   ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("focusChange "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AudioManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AUDIOFOCUS_GAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Resume playback or Raise it back to normal   ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"参考连接官方api文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考连接官方api文档"}},[s._v("#")]),s._v(" 参考连接官方api文档")]),s._v(" "),a("p",[a("strong",[s._v("AudioManager文档中文翻译：https://www.itdaan.com/blog/2011/08/07/1674a0bd9fd7d2d4851cce0a77a3dfbe.html")])])])}),[],!1,null,null,null);a.default=e.exports}}]);