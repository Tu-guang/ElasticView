(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfec2"],{"667c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",[n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-plus"},on:{click:e.addAlias}},[e._v(e._s(e.$t("新增别名"))+"\n      ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-check"},on:{click:e.batchAdd}},[e._v(e._s(e.$t("批量提交"))+"\n      ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-delete"},on:{click:e.getAlias}},[e._v(e._s(e.$t("重置"))+"\n      ")]),e._v(" "),n("index-select",{attrs:{multiple:!0,clearable:!0,placeholder:e.$t("迁移别名到多个索引上")},on:{change:e.changeAnotherIndex}})],1),e._v(" "),e._l(e.aliasList,(function(t,r){return n("el-form-item",{key:r,attrs:{label:e.$t("别名")+Number(r+1)}},[n("el-input",{staticStyle:{width:"300px"},attrs:{readonly:"new"!=e.aliasList[r].types},model:{value:e.aliasList[r].name,callback:function(t){e.$set(e.aliasList[r],"name",t)},expression:"aliasList[index].name"}}),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.anotherIndex.length>0,expression:"anotherIndex.length>0"}],attrs:{size:"mini",icon:"el-icon-right",type:"success"},on:{click:function(t){return e.moveAliasToIndex(r)}}},[e._v("迁移\n      ")]),e._v(" "),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.aliasList[r].name,expression:"aliasList[index].name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{size:"mini",icon:"el-icon-copy",type:"success"}},[e._v(e._s(e.$t("复制"))+"\n      ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:"new"==e.aliasList[r].types,expression:"aliasList[index].types =='new'"}],attrs:{size:"mini",type:"primary",icon:"el-icon-check"},on:{click:function(t){return e.submitForm(r)}}},[e._v(e._s(e.$t("提交"))+"\n      ")]),e._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.removeAlias(r)}}},[e._v(e._s(e.$t("删除"))+"\n      ")])],1)}))],2)],1)},s=[],a=(n("9f60"),n("94f0"),n("0c84"),n("2843"),n("4057"),n("a450"),n("e186"),n("c3ae")),i=n("b89e");function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}function c(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l={name:"Alias",components:{IndexSelect:function(){return n.e("chunk-2d0b6ed9").then(n.bind(null,"1ef5"))}},props:{indexName:{type:String,default:""}},data:function(){return{aliasList:[],anotherIndex:[]}},mounted:function(){this.getAlias()},methods:{moveAliasToIndex:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.aliasList[t].name,r={},r["types"]=3,r["new_index_list"]=this.anotherIndex,r["alias_name"]=n.trim(),r["es_connect"]=this.$store.state.baseData.EsConnectID,e.next=8,Object(i["h"])(r);case 8:if(s=e.sent,a=s.data,o=s.code,c=s.msg,console.log(a,o,c),0!=o){e.next=18;break}return this.$message({type:"success",message:c}),e.abrupt("return");case 18:return this.$message({type:"error",message:c}),e.abrupt("return");case 20:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),changeAnotherIndex:function(e){this.anotherIndex=e},onCopy:function(e){this.$message({message:"复制成功！",type:"success"})},onError:function(e){this.$message({message:"复制失败！",type:"error"})},getAlias:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.aliasList=[],t={},t["es_connect"]=this.$store.state.baseData.EsConnectID,t["index_name"]=this.indexName,e.next=6,Object(i["d"])(t);case 6:if(n=e.sent,r=n.data,s=n.code,a=n.msg,console.log(r,s,a),0==s)for(o in r)this.aliasList.push({name:r[o].AliasName,types:"old"});else this.$message({message:a,type:"error"});case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submitForm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.aliasList[t].name,r={},r["types"]=1,r["index_name"]=this.indexName,r["alias_name"]=n.trim(),r["es_connect"]=this.$store.state.baseData.EsConnectID,e.next=8,Object(i["h"])(r);case 8:if(s=e.sent,a=s.data,o=s.code,c=s.msg,console.log(a,o,c),0!=o){e.next=18;break}return this.$message({type:"success",message:c}),e.abrupt("return");case 18:return this.$message({type:"error",message:c}),e.abrupt("return");case 20:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),batchAdd:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,a,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[],n=o(this.aliasList);try{for(n.s();!(r=n.n()).done;)s=r.value,"new"==s.types&&t.push(s.name)}catch(m){n.e(m)}finally{n.f()}return a={},a["types"]=4,a["index_name"]=this.indexName,a["new_alias_name_list"]=t,a["es_connect"]=this.$store.state.baseData.EsConnectID,e.next=10,Object(i["h"])(a);case 10:if(c=e.sent,c.data,u=c.code,l=c.msg,0!=u){e.next=19;break}return this.$message({type:"success",message:l}),e.abrupt("return");case 19:return this.$message({type:"error",message:l}),e.abrupt("return");case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeAlias:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("new"!=this.aliasList[t].types){e.next=4;break}this.aliasList.splice(t,1),e.next=25;break;case 4:if("old"!=this.aliasList[t].types){e.next=25;break}return n=this.aliasList[t].name,r={},r["types"]=2,r["index_name"]=this.indexName,r["alias_name"]=n.trim(),r["es_connect"]=this.$store.state.baseData.EsConnectID,e.next=13,Object(i["h"])(r);case 13:if(s=e.sent,s.data,a=s.code,o=s.msg,0!=a){e.next=23;break}return this.$message({type:"success",message:o}),this.aliasList.splice(t,1),e.abrupt("return");case 23:return this.$message({type:"error",message:o}),e.abrupt("return");case 25:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addAlias:function(){this.aliasList.push({name:"",types:"new"})}}},m=l,p=n("cba8"),h=Object(p["a"])(m,r,s,!1,null,"5a50c88f",null);t["default"]=h.exports}}]);