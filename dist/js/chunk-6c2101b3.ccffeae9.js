(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6c2101b3"],{"148d":function(t,e,o){},2449:function(t,e,o){"use strict";var s=o("4c2f");o.n(s).a},"4c2f":function(t,e,o){},5785:function(t,e,o){"use strict";var s={data:function(){return{}},props:{icon:{type:String,default:"信息"},size:{type:String,default:"14"}}},i=(o("2449"),o("2877")),l=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"iconTitle"},[e("svg-icon",{style:"fontSize:"+this.size+"px",attrs:{"icon-class":this.icon}}),e("label",{style:"fontSize:"+this.size+"px"},[this._t("default")],2)],1)}),[],!1,null,"9d6858ea",null);e.a=l.exports},"59d4":function(t,e,o){"use strict";o.r(e);o("b0c0"),o("ac1f"),o("1276");var s=o("5785"),i=[{title:"商品",key:"goods",scopedSlots:{customRender:"goods"},width:400},{title:"批价/库存",key:"stockPrice",scopedSlots:{customRender:"stockPrice"},width:150},{title:"云盘图片",key:"cloudImage",scopedSlots:{customRender:"cloudImage"},width:150},{title:"操作",key:"action",scopedSlots:{customRender:"action"},width:150}],l=[{title:"颜色",key:"color",dataIndex:"color",scopedSlots:{customRender:"color"},align:"center"},{title:"尺码",key:"size",dataIndex:"size",align:"center"},{title:"价格",key:"price",dataIndex:"price",scopedSlots:{customRender:"price"},align:"center"},{title:"库存",key:"stock",dataIndex:"stock",scopedSlots:{customRender:"stock"},align:"center"}],a={data:function(){return{type:null,data:[{goods:1},{goods:2}],priceList:[{color:"红色",size:"12",price:150,stock:100},{color:"蓝色",size:"15,16,17",children:[{color:"蓝色",size:"15",price:150,stock:100},{color:"蓝色",size:"16",price:150,stock:100},{color:"蓝色",size:"17",price:150,stock:100}]}],columnsPrice:l,columns:i,selectedRowKeys:[],visible:!1,priceVisible:!1,diskForm:{url:"",code:""}}},components:{iconTitle:s.a},computed:{hasSelected:function(){return this.selectedRowKeys.length>0},urlTitle:function(){return"warehouse"===this.type?"仓库中的商品":"sellGoods"===this.type?"出售中的商品":"店内推荐的商品"},formItemLayout:function(){return{labelCol:{span:4},wrapperCol:{span:20}}},buttonItemLayout:function(){return{wrapperCol:{span:14,offset:4}}}},methods:{onSelectChange:function(t){console.log("selectedRowKeys changed: ",t),this.selectedRowKeys=t},urlParsing:function(t){var e=t.target.value.split(" ");"链接:"===e[0]&&"提取码:"===e[2]&&(this.diskForm.url=e[1],this.diskForm.code=e[3])},setCloudDiskShow:function(){this.visible=!0},setPriceShow:function(){this.priceVisible=!0},setCloudDisk:function(){},handleOk:function(t){this.visible=!1},handlePrice:function(){this.priceVisible=!1}},created:function(){this.type=this.$route.name},watch:{$route:function(){console.log(this.$route.name),this.type=this.$route.name}}},r=(o("cdf91"),o("2877")),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sellGoods"},[s("div",{staticClass:"s-goodsSelector"},[s("icon-title",{attrs:{icon:"仓库"}},[t._v(t._s(t.urlTitle))]),s("div",{staticClass:"s-g-s-form"},[s("a-form",{attrs:{layout:"inline"}},[s("a-form-item",{attrs:{label:"标题"}},[s("a-input",{attrs:{placeholder:"input placeholder"}})],1),s("a-form-item",{attrs:{label:"货号"}},[s("a-input",{attrs:{placeholder:"input placeholder"}})],1),s("a-form-item",{attrs:{label:"商品类目"}},[s("a-input",{attrs:{placeholder:"input placeholder"}})],1),s("a-form-item",[s("a-button",{attrs:{type:"primary"}},[t._v(" 搜索 ")])],1)],1)],1)],1),s("div",{staticClass:"s-goodsMain"},[s("div",{staticClass:"s-g-button"},["warehouse"===t.type?s("a-button",[t._v("上架商品")]):t._e(),"sellGoods"===t.type?s("a-button",[t._v("下架商品")]):t._e(),"showGoods"===t.type?s("a-button",[t._v("推荐商品")]):t._e()],1),s("div",{staticClass:"s-g-list"},[s("a-table",{staticClass:"s-g-l-table",attrs:{"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},columns:t.columns,"data-source":t.data,rowKey:function(t){return t.goods}},scopedSlots:t._u([{key:"goods",fn:function(e){return s("div",{staticClass:"s-g-l-t-goods"},[s("div",{staticClass:"s-g-l-t-goods-l"},[s("img",{attrs:{src:o("602d"),alt:""}})]),s("div",{staticClass:"s-g-l-t-goods-r"},[s("label",[t._v("夏季女 衬衫女新款2020年夏锁骨方领泡泡袖 收腰上衣心机设计感衬衣")]),s("div",[t._v("货号：1008611")]),s("div",[t._v("商品编号：WZ-107A-1008611")])])])}},{key:"stockPrice",fn:function(e){return s("div",{},[s("div",{on:{click:t.setPriceShow}},[s("a",{staticStyle:{color:"red"}},[t._v("￥100.00 "),s("svg-icon",{attrs:{"icon-class":"笔"}})],1)]),s("span",{staticStyle:{color:"#666"}},[t._v("1000")])])}},{key:"cloudImage",fn:function(e){return s("div",{staticClass:"s-g-l-t-img"},[s("a-button",{attrs:{type:"link"},on:{click:t.setCloudDiskShow}},[s("a",{staticStyle:{color:"red"}},[t._v(" 未设置 "),s("svg-icon",{attrs:{"icon-class":"笔"}})],1)]),s("a-button",{attrs:{type:"link"}},[s("a",{staticStyle:{color:"#666"}},[t._v("已设置 "),s("svg-icon",{attrs:{"icon-class":"笔"}})],1)])],1)}},{key:"action",fn:function(e){return s("div",{staticClass:"s-g-l-t-img"},["showGoods"!==t.type?s("div",[s("a-button",{staticClass:"linkColor",attrs:{type:"link"}},[t._v(" 编辑 ")]),"warehouse"===t.type?s("a-button",{staticClass:"linkColor",attrs:{type:"link"}},[t._v(" 上架 ")]):t._e(),"sellGoods"===t.type?s("a-button",{staticClass:"linkColor",attrs:{type:"link"}},[t._v(" 下架 ")]):t._e()],1):s("div",[s("a-button",{staticClass:"linkColor",attrs:{type:"link"}},[t._v(" 推荐商品 ")]),s("a-button",{staticClass:"blackColor",attrs:{type:"link"}},[t._v(" 取消推荐 ")])],1)])}}])})],1)]),s("a-modal",{attrs:{title:"设置云盘图片",footer:null},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("a-form",{model:{value:t.diskForm,callback:function(e){t.diskForm=e},expression:"diskForm"}},[s("a-form-item",{attrs:{label:"分享链接","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[s("a-input",{attrs:{placeholder:"请粘贴链接"},on:{change:t.urlParsing},model:{value:t.diskForm.url,callback:function(e){t.$set(t.diskForm,"url",e)},expression:"diskForm.url"}}),t._v(" 直接粘贴复制的私密链接，系统将会自动解析并填入 ")],1),s("a-form-item",{attrs:{label:"提取码","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[s("a-input",{attrs:{placeholder:"请输入提取码"},model:{value:t.diskForm.code,callback:function(e){t.$set(t.diskForm,"code",e)},expression:"diskForm.code"}})],1),s("a-form-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[s("a-button",{staticClass:"modal-button",attrs:{type:"primary"}},[t._v("保存")])],1)],1)],1),s("a-modal",{attrs:{title:"设置批价和库存",footer:null,width:850},on:{ok:t.handlePrice},model:{value:t.priceVisible,callback:function(e){t.priceVisible=e},expression:"priceVisible"}},[s("a-form",{staticStyle:{"margin-bottom":"16px"},attrs:{layout:"inline"}},[s("a-form-item",{attrs:{label:"批量设置"}},[s("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"价格"}})],1),s("a-form-item",[s("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"库存"}})],1),s("a-form-item",[s("a-button",{staticStyle:{width:"98px"},attrs:{type:"primary"}},[t._v("确定")])],1)],1),s("a-table",{attrs:{bordered:"",columns:t.columnsPrice,"data-source":t.priceList,rowKey:function(t){return t.size},pagination:!1,scroll:{y:400}},scopedSlots:t._u([{key:"price",fn:function(e,o){return s("div",{},[o.children?t._e():s("a-input",{attrs:{placeholder:"请输入价格",type:"number"},model:{value:e,callback:function(t){e=t},expression:"price"}})],1)}},{key:"stock",fn:function(e,o){return s("div",{},[o.children?t._e():s("a-input",{attrs:{placeholder:"请输入库存",type:"number"},model:{value:e,callback:function(t){e=t},expression:"stock"}})],1)}}])}),s("div",{staticStyle:{margin:"20px 0",display:"flex","align-items":"center"}},[s("label",[t._v(" 一口价(批发价)： ")]),s("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入价格"}})],1),s("div",{staticStyle:{"text-align":"center"}},[s("a-button",{staticStyle:{width:"220px"},attrs:{type:"primary"}},[t._v("确定")])],1)],1)],1)}),[],!1,null,"403b02eb",null);e.default=n.exports},"602d":function(t,e,o){t.exports=o.p+"img/dome.41c17429.png"},cdf91:function(t,e,o){"use strict";var s=o("148d");o.n(s).a}}]);