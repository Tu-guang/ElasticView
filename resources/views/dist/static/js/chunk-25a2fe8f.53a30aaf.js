(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25a2fe8f"],{"22a9":function(t,e,n){},5955:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",{staticClass:"content_xwl"},[n("div",{staticClass:"header_xwl",staticStyle:{background:"white"}},[n("div",{staticClass:"root_xwl"},[n("div",{staticClass:"main_xwl"},[n("span",{staticClass:"title_xwl",staticStyle:{color:"#202d3f"}},[t._v("  "+t._s(t.$t("数据管理")))])]),t._v(" "),n("div",{staticClass:"actions_xwl"},[n("el-button",{attrs:{size:"mini",type:"primary"},nativeOn:{click:function(e){t.showIndexSettings=!0}}},[t._v(t._s(t.$t("显示该索引结构"))+"\n          ")])],1)])]),t._v(" "),n("split-pane",{attrs:{"min-percent":4,"default-percent":15,split:"vertical"}},[n("template",{slot:"paneL"},[n("div",{staticStyle:{height:"100%",width:"100%",display:"inline-block","vertical-align":"top",background:"white"},attrs:{id:"scollL"}},[n("div",{staticStyle:{width:"100%",height:"calc(100% - 80px)","overflow-x":"hidden","overflow-y":"auto",padding:"10px"}},[n("div",{staticStyle:{width:"100%",height:"90px","margin-bottom":"0px","z-index":"80",position:"absolute",top:"0px",left:"0px",padding:"20px","border-bottom":"1px solid #f0f2f5",background:"white",display:"flex","align-items":"center","justify-content":"center"}},[n("el-autocomplete",{staticStyle:{width:"90%"},attrs:{clearable:"","fetch-suggestions":t.querySearch,placeholder:t.$t("请输入索引名")},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("span",[t._v(t._s(r.value))])]}}]),model:{value:t.filterStr,callback:function(e){t.filterStr=e},expression:"filterStr"}},[n("i",{staticClass:"el-icon-edit el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1),t._v(" "),n("el-menu",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingMenu,expression:"loadingMenu"}],staticStyle:{"margin-top":"100px"},attrs:{"active-text-color":"rgb(64 158 255)"}},t._l(t.getIndexList,(function(e,r){return n("div",{key:r,attrs:{index:r}},[n("el-menu-item",{attrs:{index:r.toString()},nativeOn:{click:function(n){return t.clickItem(e["index"])}}},[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},["red"==e.health?n("i",{staticClass:"el-icon-s-grid",staticStyle:{color:"red"}}):t._e(),t._v(" "),"green"==e.health?n("i",{staticClass:"el-icon-s-grid",staticStyle:{color:"#13ce66"}}):t._e(),t._v(" "),"yellow"==e.health?n("i",{staticClass:"el-icon-s-grid",staticStyle:{color:"#ffba00"}}):t._e()]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{icon:"el-icon-delete"},nativeOn:{click:function(e){return t.deleteIndex(t.getIndexList[r].k,t.getIndexList[r].index)}}},[t._v("\n                        "+t._s(t.$t("删除"))+"\n                      ")])],1)],1),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.index)+"【"+t._s(e.storeSize)+"】")])],1)],1)})),0)],1)])]),t._v(" "),n("template",{slot:"paneR"},[n("div",{staticStyle:{width:"100%",height:"calc(100% - 80px)","overflow-x":"hidden","overflow-y":"auto",padding:"10px"}},[t.refreshTab?n("crud",{attrs:{"attr-map-prop":t.attrMap,"event-attr-options-prop":t.eventAttrOptions,"index-name":t.currentIndexName}}):t._e()],1),t._v(" "),n("el-drawer",{ref:"drawer",attrs:{title:t.$t("索引结构"),visible:t.showIndexSettings,direction:"rtl","close-on-press-escape":"","destroy-on-close":"",size:"50%"},on:{"update:visible":function(e){t.showIndexSettings=e}}},[n("div",{staticStyle:{height:"100%",width:"100%",display:"inline-block","vertical-align":"top",background:"white"}},[n("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],attrs:{type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:t.$t("索引设置"),name:"settings"}},[t.refreshTab?n("json-editor",{attrs:{height:"720",styles:"width: 100%",read:!0,title:t.currentIndexName},model:{value:JSON.stringify(t.currentSettings,null,"\t"),callback:function(e){t.$set(JSON,"stringify(currentSettings,null, '\t')",e)},expression:"JSON.stringify(currentSettings,null, '\\t')"}}):t._e()],1),t._v(" "),n("el-tab-pane",{attrs:{label:t.$t("映射结构"),name:"mappings"}},[t.refreshTab?n("json-editor",{attrs:{height:"720",styles:"width: 100%",read:!0,title:t.currentIndexName},model:{value:JSON.stringify(t.currentMappings,null,"\t"),callback:function(e){t.$set(JSON,"stringify(currentMappings,null, '\t')",e)},expression:"JSON.stringify(currentMappings,null, '\\t')"}}):t._e()],1)],1)],1)])],1)],2)],1)])},i=[],a=(n("4057"),n("1bc7"),n("32ea"),n("e186"),n("c3ae")),s=n("cee7"),o=n("cc06"),c=n("b89e"),u=n("c236"),l=n("63b8"),d=n.n(l),p={name:"Navicat",components:{JsonEditor:function(){return Promise.all([n.e("chunk-31af6a17"),n.e("chunk-03b113fc"),n.e("chunk-36ba3740")]).then(n.bind(null,"fa7e"))},Crud:function(){return n.e("chunk-a600deb4").then(n.bind(null,"f46e"))}},data:function(){return{indexTishiList:[],currentMappings:{},tabLoading:!1,refreshTab:!0,activeName:"settings",loadingMenu:!1,indexList:[],filterStr:"",currentIndexName:"",currentSettings:{},eventAttrOptions:[],showIndexSettings:!1,attrMap:[]}},computed:{getIndexList:function(){return""==this.filterStr?this.indexList:Object(o["a"])(this.indexList,this.filterStr)}},beforeMount:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.init();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.toggleSideBar();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{toggleSideBar:function(){this.$store.dispatch("app/toggleSideBar")},reloadTab:function(){var t=this;this.refreshTab=!1,this.$nextTick((function(){t.refreshTab=!0}))},clickItem:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,r,i,a,s,o,l,d,p,h,f,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.currentIndexName=e,n={},n["es_connect"]=this.$store.state.baseData.EsConnectID,n["index_name"]=this.currentIndexName,this.tabLoading=!0,t.next=7,Object(u["a"])(n);case 7:return r=t.sent,0!=r.code&&(this.tabLoading=!1,this.$message({type:"error",message:r.msg})),t.next=11,Object(c["e"])(n);case 11:i=t.sent,0!=i.code&&(this.tabLoading=!1,this.$message({type:"error",message:i.msg})),this.currentMappings=r.data.list,a=[{label:"筛选字段",options:[]}],s={2:[]},o={},t.t0=r.data.ver,t.next=6===t.t0?20:7===t.t0?22:8===t.t0?24:26;break;case 20:return o=this.currentMappings[this.currentIndexName].mappings[Object.keys(this.currentMappings[this.currentIndexName].mappings)[0]].properties,t.abrupt("break",26);case 22:return o=this.currentMappings[this.currentIndexName].mappings.properties,t.abrupt("break",26);case 24:return o=this.currentMappings[this.currentIndexName].mappings.properties,t.abrupt("break",26);case 26:l=1,d=2,p=3,h=Object.keys(o),t.t1=regeneratorRuntime.keys(h);case 31:if((t.t2=t.t1()).done){t.next=48;break}if(f=t.t2.value,!o[h[f]].type){t.next=46;break}a[0].options.push({value:h[f],label:h[f]}),m={attribute_name:h[f],show_name:h[f]},t.t3=o[h[f]].type,t.next="text"===t.t3||"keyword"===t.t3?39:"byte"===t.t3||"short"===t.t3||"integer"===t.t3||"long"===t.t3?41:"float"===t.t3||"half_float"===t.t3||"scaled_float"===t.t3||"double"===t.t3?43:45;break;case 39:return m["data_type"]=p,t.abrupt("break",45);case 41:return m["data_type"]=l,t.abrupt("break",45);case 43:return m["data_type"]=d,t.abrupt("break",45);case 45:s["2"].push(m);case 46:t.next=31;break;case 48:this.attrMap=s,this.eventAttrOptions=a,this.currentSettings=i.data,this.tabLoading=!1,this.reloadTab();case 53:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deleteListByK:function(t){for(var e in this.indexList){var n=this.indexList[e];if(n["k"].toString()==t.toString()){this.indexList.splice(e,1);break}}},deleteIndex:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$confirm("确定删除("+n+")该索引吗?","警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(regeneratorRuntime.mark((function t(){var i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=d.a.Message({message:"  索引删除中...",customClass:"theme-message",type:"success",duration:0,iconClass:"el-icon-loading"}),a={},a["es_connect"]=r.$store.state.baseData.EsConnectID,a["index_name"]=n,t.next=6,Object(c["c"])(a);case 6:s=t.sent,i.close(),r.currentIndexName==n&&(r.currentIndexName=""),0==s.code||200==s.code?(r.$message({type:"success",message:n+"已删除"}),r.deleteListByK(e)):r.$message({type:"error",message:s.msg});case 10:case"end":return t.stop()}}),t)})))).catch((function(t){console.error(t)}));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),compare:function(t,e){return function(n,r){var i=n[t],a=r[t];return e?a-i:i-a}},querySearch:function(t,e){var n=JSON.parse(JSON.stringify(this.indexTishiList));void 0==t&&(t=""),""!=t.trim()?(n=Object(o["a"])(n,t.trim()),n.length>this.max?e(n.slice(0,this.max)):e(n)):n.length>this.max?e(n.slice(0,this.max)):e(n)},init:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={cat:"CatIndices",es_connect:this.$store.state.baseData.EsConnectID},this.indexList=[],this.loadingMenu=!0,this.indexTishiList=[],t.next=6,Object(s["a"])(e);case 6:if(n=t.sent,0==n.code){t.next=11;break}return this.$message({type:"error",message:n.msg}),this.loadingMenu=!1,t.abrupt("return");case 11:for(r in n.data)i=n.data[r],a={health:i.health,index:i.index,k:r,storeSize:i["store.size"],docsCount:i["docs.count"]},this.indexList.push(a),this.indexTishiList.push({value:i.index,data:i.index});this.loadingMenu=!1;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},h=p,f=(n("9a60"),n("bffe9"),n("cba8")),m=Object(f["a"])(h,r,i,!1,null,"5368cf36",null);e["default"]=m.exports},"9a60":function(t,e,n){"use strict";n("e71dd")},b89e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return o})),n.d(e,"i",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"j",(function(){return h})),n.d(e,"a",(function(){return f}));var r=n("b775"),i="/api/es_index/";function a(t){return Object(r["a"])({url:i+"CreateAction",method:"post",data:t})}function s(t){return Object(r["a"])({url:i+"GetSettingsAction",method:"post",data:t})}function o(t){return Object(r["a"])({url:i+"IndexNamesAction",method:"post",data:t})}function c(t){return Object(r["a"])({url:i+"ReindexAction",method:"post",data:t})}function u(t){return Object(r["a"])({url:i+"GetAliasAction",method:"post",data:t})}function l(t){return Object(r["a"])({url:i+"DeleteAction",method:"post",data:t})}function d(t){return Object(r["a"])({url:i+"OperateAliasAction",method:"post",data:t})}function p(t){return Object(r["a"])({url:i+"GetSettingsInfoAction",method:"post",data:t})}function h(t){return Object(r["a"])({url:i+"StatsAction",method:"post",data:t})}function f(t){return Object(r["a"])({url:i+"CatStatusAction",method:"post",data:t})}},bffe9:function(t,e,n){"use strict";n("22a9")},c236:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n("b775"),i="/api/es_map/";function a(t){return Object(r["a"])({url:i+"ListAction",method:"post",data:t})}function s(t){return Object(r["a"])({url:i+"UpdateMappingAction",method:"post",data:t})}},cc06:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d0f2"),n("1bc7"),n("32ea");function r(t,e){var n,r=e.toLowerCase(),i=t;return n=r?i.filter((function(t){return Object.keys(t).some((function(e){return String(t[e]).toLowerCase().match(r)}))})):i,n}},cee7:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return l}));var r=n("b775"),i="/api/es/";function a(t){return Object(r["a"])({url:i+"PingAction",method:"post",data:t})}function s(t){return Object(r["a"])({url:i+"CatAction",method:"post",data:t})}function o(t){return Object(r["a"])({url:i+"RunDslAction",method:"post",transformResponse:[function(t){return jsonlint.parse(t)}],data:t})}function c(t){return Object(r["a"])({url:i+"SqlToDslAction",method:"get",params:t})}function u(t){return Object(r["a"])({url:i+"OptimizeAction",method:"post",transformResponse:[function(t){return jsonlint.parse(t)}],data:t})}function l(t){return Object(r["a"])({url:i+"RecoverCanWrite",method:"post",data:t})}},e71dd:function(t,e,n){}}]);