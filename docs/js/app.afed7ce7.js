(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],d=0,j=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&j.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(j.length)j.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var f=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"034f":function(e,t,s){"use strict";s("85ec")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"85ec":function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n,a,r,i=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Chart",{attrs:{val:[e.timeoutTime-e.now,e.now-e.startTime],width:100,height:100}}),e._v(" "+e._s(Math.floor((e.timeoutTime-e.now)/1e3/60))+":"+e._s(Math.floor((e.timeoutTime-e.now)/1e3%60))),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.timemin,expression:"timemin"}],attrs:{type:"number",min:"0",max:"59"},domProps:{value:e.timemin},on:{input:function(t){t.target.composing||(e.timemin=t.target.value)}}}),e._v(": "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.timesec,expression:"timesec"}],attrs:{type:"number",min:"0",max:"59"},domProps:{value:e.timesec},on:{input:function(t){t.target.composing||(e.timesec=t.target.value)}}}),0==this.timerStatus||1==this.timerStatus?s("button",{on:{click:e.startTimer}},[e._v(" Start ")]):e._e(),2==this.timerStatus?s("button",{on:{click:e.stopTimer}},[e._v("Stop")]):e._e(),s("button",{on:{click:e.resetTimer}},[e._v("Reset")]),s("audio",{ref:"entersound",attrs:{src:"finish.mp3",preload:"auto",muted:!1}})],1)},c=[],u=s("d4ec"),f=s("bee2"),d=s("262e"),j=s("2caf"),l=s("9ab4"),b=s("1b40"),m=s("1fca"),h={extends:m["a"],name:"chart",props:["val"],data:function(){return{data:{datasets:[{data:this.val,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{animation:!1,tooltips:{enabled:!1}}}},mounted:function(){this.renderChart(this.data,this.options)},watch:{val:function(){this.data.datasets[0].data=this.val,this.renderChart(this.data,this.options)}}},p=h,v=s("2877"),g=Object(v["a"])(p,n,a,!1,null,null,null),y=g.exports;(function(e){e[e["Stop"]=0]="Stop",e[e["Pause"]=1]="Pause",e[e["Running"]=2]="Running"})(r||(r={}));var k=100,w=function(e){Object(d["a"])(s,e);var t=Object(j["a"])(s);function s(){var e;return Object(u["a"])(this,s),e=t.apply(this,arguments),e.timerStatus=r.Stop,e.timerID=-1,e.timesec=0,e.timemin=1,e.startTime=0,e.timeoutTime=1,e.now=0,e}return Object(f["a"])(s,[{key:"startTimer",value:function(){var e=this;if(-1!=this.timerID&&(clearInterval(this.timerID),this.timerID=-1),this.timerStatus==r.Stop){this.playSound(!0);var t=1*this.timesec+60*this.timemin;this.now=(new Date).getTime(),this.startTime=this.now,this.timeoutTime=this.now+1e3*t}else{var s=this.now;this.now=(new Date).getTime(),this.startTime+=this.now-s,this.timeoutTime+=this.now-s}this.timerStatus=r.Running,this.timerID=setInterval((function(){e.tick()}),k)}},{key:"stopTimer",value:function(){-1!=this.timerID&&(clearInterval(this.timerID),this.timerID=-1),this.timerStatus=r.Pause}},{key:"resetTimer",value:function(){this.stopTimer(),this.timerStatus=r.Stop,this.now=0,this.startTime=0,this.timeoutTime=1}},{key:"playSound",value:function(e){var t=this.$refs["entersound"];return"undefined"!=typeof t.currentTime&&(t.currentTime=0),t.muted=e,t.play()}},{key:"tick",value:function(){if(this.now=(new Date).getTime(),this.timeoutTime<=this.now)return this.resetTimer(),void this.playSound(!1).then((function(){alert("終了！")}))}}]),s}(b["c"]);Object(l["a"])([Object(b["b"])()],w.prototype,"msg",void 0),w=Object(l["a"])([Object(b["a"])({components:{Chart:y}})],w);var T=w,O=T,z=(s("034f"),Object(v["a"])(O,o,c,!1,null,null,null)),S=z.exports,_=s("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.afed7ce7.js.map