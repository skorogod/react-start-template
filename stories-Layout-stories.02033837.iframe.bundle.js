/*! For license information please see stories-Layout-stories.02033837.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[313],{"./src/stories/Layout.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,base:()=>base,default:()=>Layout_stories});__webpack_require__("./node_modules/react/index.js");var Header=__webpack_require__("./src/shared/header/Header.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Layout=function Layout(props){return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)(Header.Y,{}),(0,jsx_runtime.jsx)("main",{children:props.children})]})};Layout.displayName="Layout";try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/shared/layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}const Layout_stories={title:"Example/Layout",component:Layout,tags:["autodocs"]};var base={};base.parameters={...base.parameters,docs:{...base.parameters?.docs,source:{originalSource:"{}",...base.parameters?.docs?.source}}};const __namedExportsOrder=["base"]},"./src/shared/header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Header});__webpack_require__("./node_modules/react/index.js");var Logo=__webpack_require__("./src/shared/logo/Logo.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/button/button.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(button_module.A,options);const button_button_module=button_module.A&&button_module.A.locals?button_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["primary","size","backgroundColor","label"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=_objectWithoutProperties(_ref,_excluded),mode=primary?button_button_module.primary:button_button_module.secondary;return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:[button_button_module.button,button_button_module[size],mode].join(" "),style:{backgroundColor}},props),{},{children:label}))}Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var header_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/header/header.module.scss"),header_module_options={};header_module_options.styleTagTransform=styleTagTransform_default(),header_module_options.setAttributes=setAttributesWithoutAttributes_default(),header_module_options.insert=insertBySelector_default().bind(null,"head"),header_module_options.domAPI=styleDomAPI_default(),header_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header_module.A,header_module_options);const header_header_module=header_module.A&&header_module.A.locals?header_module.A.locals:void 0;var Header=function Header(props){return(0,jsx_runtime.jsx)("header",{style:{backgroundColor:props.backgroundColor},className:header_header_module.header,children:(0,jsx_runtime.jsxs)("div",{className:header_header_module.content,children:[(0,jsx_runtime.jsx)("div",{className:header_header_module.logo,children:(0,jsx_runtime.jsx)(Logo.g,{})}),(0,jsx_runtime.jsx)("div",{className:header_header_module.userInfo,children:props.user?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Button,{size:"small",onClick:props.onLogout,label:"Log out"})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button,{size:"small",onClick:props.onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button,{primary:!0,size:"small",onClick:props.onCreateAccount,label:"Sign up"})]})})]})})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!1,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!1,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/shared/header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Logo});__webpack_require__("./node_modules/react/index.js");const logo_namespaceObject=__webpack_require__.p+"static/media/logo.266c0b81.svg";var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),logo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/logo/logo.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(logo_module.A,options);const logo_logo_module=logo_module.A&&logo_module.A.locals?logo_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo=function Logo(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size;return(0,jsx_runtime.jsx)("div",{className:[logo_logo_module.logoContainer,logo_logo_module[size]].join(" "),children:(0,jsx_runtime.jsx)("img",{className:logo_logo_module.logo,src:logo_namespaceObject,alt:"logo"})})};Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/shared/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/button/button.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.teAgP8fT9WQ8x7qcTlBc{font-family:"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.teAgP8fT9WQ8x7qcTlBc.RJEQgEvgu00JwVkmAhKh{color:#fff;background-color:#1ea7fd}.teAgP8fT9WQ8x7qcTlBc.nlHz5r0ObUlw7JLG41L7{color:#333;background-color:rgba(0,0,0,0);box-shadow:rgba(0,0,0,.15) 0px 0px 0px 1px inset}.teAgP8fT9WQ8x7qcTlBc.cqCXMQttQvxRrhNlQmTz{font-size:12px;padding:10px 16px}.teAgP8fT9WQ8x7qcTlBc.WW4euFLbQVAXpm4pzVMn{font-size:14px;padding:11px 20px}.teAgP8fT9WQ8x7qcTlBc.Xk9plKdjiCfUNSXYpu3t{font-size:16px;padding:12px 24px}',"",{version:3,sources:["webpack://./src/shared/button/button.module.sass"],names:[],mappings:"AAAA,sBACI,qEAAA,CACA,eAAA,CACA,QAAA,CACA,iBAAA,CACA,cAAA,CACA,oBAAA,CACA,aAAA,CAEA,2CACI,UAAA,CACA,wBAAA,CAEJ,2CACI,UAAA,CACA,8BAAA,CACA,gDAAA,CAEJ,2CACI,cAAA,CACA,iBAAA,CAEJ,2CACI,cAAA,CACA,iBAAA,CAEJ,2CACI,cAAA,CACA,iBAAA",sourcesContent:[".button\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif\n    font-weight: 700\n    border: 0\n    border-radius: 3em\n    cursor: pointer\n    display: inline-block\n    line-height: 1\n\n    &.primary\n        color: white\n        background-color: #1ea7fd\n\n    &.secondary\n        color: #333\n        background-color: transparent\n        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset\n\n    &.small\n        font-size: 12px\n        padding: 10px 16px\n\n    &.medium\n        font-size: 14px\n        padding: 11px 20px\n\n    &.large\n        font-size: 16px\n        padding: 12px 24px\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"teAgP8fT9WQ8x7qcTlBc",primary:"RJEQgEvgu00JwVkmAhKh",secondary:"nlHz5r0ObUlw7JLG41L7",small:"cqCXMQttQvxRrhNlQmTz",medium:"WW4euFLbQVAXpm4pzVMn",large:"Xk9plKdjiCfUNSXYpu3t"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/header/header.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".zqROrPDc_dnEhUF01k17{position:fixed;top:0;left:0;right:0;padding:1rem}.i6Mb7RrW_pqRl3fi1uOX{display:flex;justify-content:space-between}","",{version:3,sources:["webpack://./src/shared/header/header.module.scss"],names:[],mappings:"AAAA,sBACI,cAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,YAAA,CAGJ,sBACI,YAAA,CACA,6BAAA",sourcesContent:[".header {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 1rem;\n}\n\n.content {\n    display: flex;\n    justify-content: space-between;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={header:"zqROrPDc_dnEhUF01k17",content:"i6Mb7RrW_pqRl3fi1uOX"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/logo/logo.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".KbGXEEhypkRe25dY0dJz{object-fit:cover;width:100%}.V8chBWMIuAKjeLNRmJGM.EkxA1SzWdHf1G8nPzYzg{width:30px}.V8chBWMIuAKjeLNRmJGM.BiHgsUzVMD89Y6b8gami{width:40px}.V8chBWMIuAKjeLNRmJGM.ArC1BVpCAvwtXYQJ1S4O{width:50px}","",{version:3,sources:["webpack://./src/shared/logo/logo.module.scss"],names:[],mappings:"AAAA,sBACI,gBAAA,CACA,UAAA,CAIA,2CACI,UAAA,CAGJ,2CACI,UAAA,CAGJ,2CACI,UAAA",sourcesContent:[".logo {\n    object-fit: cover;\n    width: 100%;\n}\n\n.logoContainer {\n    &.small {\n        width: 30px;\n    }\n    \n    &.medium {\n        width: 40px;\n    }\n    \n    &.large {\n        width: 50px;\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={logo:"KbGXEEhypkRe25dY0dJz",logoContainer:"V8chBWMIuAKjeLNRmJGM",small:"EkxA1SzWdHf1G8nPzYzg",medium:"BiHgsUzVMD89Y6b8gami",large:"ArC1BVpCAvwtXYQJ1S4O"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);