(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225c55"],{e68f:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-container"},[s("back-to-top"),t._v(" "),s("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:t.$t("节点"),name:"Node"}},[s("node")],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("查看索引信息"),name:"CatIndices"}},["CatIndices"==t.activeName?s("cat",{attrs:{"cat-type":t.activeName,"table-info":t.catData[t.activeName]}}):t._e()],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("显示别名,过滤器,路由信息"),name:"CatAliases"}},["CatAliases"==t.activeName?s("cat",{attrs:{"cat-type":t.activeName,"table-info":t.catData[t.activeName]}}):t._e()],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("显示每个节点分片数量、占用空间"),name:"CatAllocation"}},["CatAllocation"==t.activeName?s("cat",{attrs:{"cat-type":t.activeName,"table-info":t.catData[t.activeName]}}):t._e()],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("显示索引文档的数量"),name:"CatCount"}},["CatCount"==t.activeName?s("cat",{attrs:{"cat-type":t.activeName,"table-info":t.catData[t.activeName]}}):t._e()],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("查看集群健康状况"),name:"CatHealth"}},["CatHealth"==t.activeName?s("cat",{attrs:{"cat-type":t.activeName,"table-info":t.catData[t.activeName]}}):t._e()],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("显示索引分片信息"),name:"CatShards"}},["CatShards"==t.activeName?s("cat",{attrs:{"cat-type":t.activeName,"table-info":t.catData[t.activeName]}}):t._e()],1)],1)],1)},d=[],i={components:{BackToTop:function(){return s.e("chunk-60a93920").then(s.bind(null,"0625"))},Cat:function(){return s.e("chunk-2e1578fa").then(s.bind(null,"153f"))},Node:function(){return s.e("chunk-510bf8c6").then(s.bind(null,"f1e4"))}},data:function(){return{activeName:"Node",catData:{CatIndices:[{data:"health",desc:this.$t("索引健康状态"),sort:!0,width:100},{data:"status",desc:this.$t("索引的开启状态"),sort:!0,width:100},{data:"index",desc:this.$t("索引名称"),sort:!0,width:180},{data:"uuid",desc:this.$t("索引uuid"),sort:!0,width:300},{data:"pri",desc:this.$t("索引主分片数"),sort:!0,width:100},{data:"rep",desc:this.$t("索引副本分片数量"),sort:!0,width:100},{data:"docs->count",desc:this.$t("索引中文档总数"),sort:!0,width:100},{data:"docs->deleted",desc:this.$t("索引中删除状态的文档"),sort:!0,width:100},{data:"store->size",desc:this.$t("主分片+副本分分片的大小"),sort:!0,width:100},{data:"pri->store->size",desc:this.$t("主分片的大小"),sort:!0,width:200}],CatAliases:[{data:"alias",desc:this.$t("别名"),sort:!0,width:300},{data:"index",desc:this.$t("索引别名指向"),sort:!0,width:250},{data:"filter",desc:this.$t("过滤器"),sort:!0,width:220},{data:"index",desc:this.$t("索引路由"),sort:!0,width:220},{data:"routing->search",desc:this.$t("搜索路由"),sort:!0,width:220},{data:"is_write_index",desc:this.$t("写索引"),sort:!0,width:220}],CatAllocation:[{data:"host",desc:this.$t("节点host"),sort:!0,width:150},{data:"ip",desc:this.$t("节点ip"),sort:!0,width:150},{data:"node",desc:this.$t("节点名称"),sort:!0,width:170},{data:"shards",desc:this.$t("节点承载分片数量"),sort:!0,width:150},{data:"disk->indices",desc:this.$t("索引占用空间大小"),sort:!0,width:150},{data:"disk->used",desc:this.$t("节点所在机器已使用的磁盘空间大小"),sort:!0,width:150},{data:"disk->avail",desc:this.$t("节点可用空间大小"),sort:!0,width:170},{data:"disk->total",desc:this.$t("节点总空间大小"),sort:!0,width:170},{data:"disk->percent",desc:this.$t("节点磁盘占用百分比"),sort:!0,width:100}],CatCount:[{data:"epoch",desc:this.$t("自标准时间（1970-01-01 00:00:00）以来的秒数"),sort:!0,width:500},{data:"timestamp",desc:this.$t("时分秒,utc时区"),sort:!0,width:500},{data:"count",desc:this.$t("文档总数"),sort:!0,width:500}],CatHealth:[{data:"cluster",desc:this.$t("集群名称"),sort:!0,width:120},{data:"status",desc:this.$t("集群状态"),sort:!0,width:100},{data:"node->total",desc:this.$t("节点总数"),sort:!0,width:100},{data:"node->data",desc:this.$t("数据节点总数"),sort:!0,width:100},{data:"shards",desc:this.$t("分片总数"),sort:!0,width:100},{data:"pri",desc:this.$t("主分片总数"),sort:!0,width:100},{data:"relo",desc:this.$t("复制节点总数"),sort:!0,width:100},{data:"init",desc:this.$t("初始化节点总数"),sort:!0,width:100},{data:"unassign",desc:this.$t("未分配分片总数"),sort:!0,width:100},{data:"pending_tasks",desc:this.$t("待定任务总数"),sort:!0,width:100},{data:"max_task_wait_time",desc:this.$t("等待最长任务的等待时间"),sort:!0,width:100},{data:"active_shards_percent",desc:this.$t("活动分片百分比"),sort:!0,width:100},{data:"epoch",desc:this.$t("自标准时间（1970-01-01 00:00:00）以来的秒数"),sort:!0,width:100},{data:"timestamp",desc:this.$t("时分秒,utc时区"),sort:!0,width:100}],CatShards:[{data:"index",desc:this.$t("索引名称"),sort:!0,width:220},{data:"shard",desc:this.$t("分片序号"),sort:!0,width:100},{data:"prirep",desc:this.$t("分片类型(p为主分片，r为复制分片)"),sort:!0,width:220},{data:"state",desc:this.$t("分片状态"),sort:!0,width:100},{data:"docs",desc:this.$t("该分片存放的文档数量"),sort:!0,width:140},{data:"store",desc:this.$t("该分片占用的存储空间大小"),sort:!0,width:200},{data:"ip",desc:this.$t("该分片所在的服务器ip"),sort:!1,width:200},{data:"node",desc:this.$t("该分片所在的节点名称"),sort:!0,width:200}]}}},computed:{},created:function(){},methods:{}},c=i,h=s("cba8"),o=Object(h["a"])(c,e,d,!1,null,"67662c30",null);a["default"]=o.exports}}]);