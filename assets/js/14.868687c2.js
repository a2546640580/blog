(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{378:function(e,t,s){},443:function(e,t,s){"use strict";s(378)},478:function(e,t,s){"use strict";s.r(t);var n=s(442),l=s.n(n),a={name:"flex",data:()=>({containerStyle:{"flex-direction":"row","flex-wrap":"nowrap","justify-content":"flex-start","align-items":"flex-start","align-content":"flex-start"},itemStyles:[{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"}],choosenItemIndex:-1,choosenItem:{},hideTop:!1,flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around"],alignItems:["flex-start","flex-end","center","baseline","stretch"],alignContent:["flex-start","flex-end","center","space-between","space-around"],flexGrow:[0,1],flexShrink:[0,1],alignSelf:["auto","flex-start","flex-end","center","baseline"]}),watch:{containerStyle:{handler(){this.setContainerStyleStr()},deep:!0}},computed:{order(){let e=[];for(let t=0;t<this.itemStyles.length;t++)e.push(t);return e}},methods:{styleToString(e){let t="";for(let s in e)t+=`${s}: ${e[s]};\n`;return t},setContainerStyleStr(){this.$refs.flexContainer.innerHTML=l.a.highlight(this.styleToString(this.containerStyle),l.a.languages.css)},changeItemCss(e,t){this.$refs.flexItem.innerHTML=l.a.highlight(this.styleToString(e),l.a.languages.css),this.choosenItem=e,this.choosenItemIndex=t}},mounted(){this.setContainerStyleStr()}},i=(s(443),s(0)),o=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"live-flex"},[t("p",{staticClass:"tip"},[e._v("click item to change stlye")]),e._v(" "),t("div",{staticClass:"flex-container",style:e.containerStyle},e._l(e.itemStyles,(function(s,n){return t("div",{key:n,staticClass:"flex-item",style:s,on:{click:function(t){return e.changeItemCss(s,n)}}},[e._v("item-"+e._s(n+1)+"\n    ")])})),0),e._v(" "),t("p",{staticClass:"title"},[t("span",[e._v("style of container")]),e._v(" "),t("span",{staticClass:"tip hide-btn",on:{click:()=>this.hideTop=!this.hideTop}},[t("i",{class:e.hideTop?"el-icon-arrow-up":"el-icon-arrow-down"}),e._v(" "+e._s(e.hideTop?"show":"hide"))])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideTop,expression:"!hideTop"}],staticClass:"bottom-border"},[t("div",{staticClass:"language-css extra-class"},[t("pre",{staticClass:"language-css"},[t("code",{ref:"flexContainer"})])]),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("flex-direction:")]),e._v(" "),e._l(e.flexDirection,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.containerStyle["flex-direction"],callback:function(t){e.$set(e.containerStyle,"flex-direction",t)},expression:"containerStyle['flex-direction']"}})}))],2),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("flex-wrap:")]),e._v(" "),e._l(e.flexWrap,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.containerStyle["flex-wrap"],callback:function(t){e.$set(e.containerStyle,"flex-wrap",t)},expression:"containerStyle['flex-wrap']"}})}))],2),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("justify-content:")]),e._v(" "),e._l(e.justifyContent,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.containerStyle["justify-content"],callback:function(t){e.$set(e.containerStyle,"justify-content",t)},expression:"containerStyle['justify-content']"}})}))],2),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("align-items:")]),e._v(" "),e._l(e.alignItems,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.containerStyle["align-items"],callback:function(t){e.$set(e.containerStyle,"align-items",t)},expression:"containerStyle['align-items']"}})}))],2),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("align-content:")]),e._v(" "),e._l(e.alignContent,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.containerStyle["align-content"],callback:function(t){e.$set(e.containerStyle,"align-content",t)},expression:"containerStyle['align-content']"}})}))],2)]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:-1!=e.choosenItemIndex,expression:"choosenItemIndex != -1"}],staticClass:"bottom-border"},[t("p",{staticClass:"title"},[e._v("style of item-"+e._s(e.choosenItemIndex+1))]),e._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{staticClass:"language-css"},[t("code",{ref:"flexItem"})])]),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("order:")]),e._v(" "),e._l(e.order,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.choosenItem.order,callback:function(t){e.$set(e.choosenItem,"order",t)},expression:"choosenItem['order']"}})}))],2),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("flex-grow:")]),e._v(" "),e._l(e.flexGrow,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.choosenItem["flex-grow"],callback:function(t){e.$set(e.choosenItem,"flex-grow",t)},expression:"choosenItem['flex-grow']"}})}))],2),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("flex-shrink:")]),e._v(" "),e._l(e.flexShrink,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.choosenItem["flex-shrink"],callback:function(t){e.$set(e.choosenItem,"flex-shrink",t)},expression:"choosenItem['flex-shrink']"}})}))],2),e._v(" "),t("div",{staticClass:"key-value"},[t("span",{staticClass:"key"},[e._v("align-self:")]),e._v(" "),e._l(e.alignSelf,(function(s,n){return t("el-radio",{key:n,attrs:{label:s},model:{value:e.choosenItem["align-self"],callback:function(t){e.$set(e.choosenItem,"align-self",t)},expression:"choosenItem['align-self']"}})}))],2)])])}),[],!1,null,"ebb295ae",null);t.default=o.exports}}]);