(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{GU4X:function(e,o,r){"use strict";r.r(o),r.d(o,"shadow",function(){return f}),r.d(o,"iosTransitionAnimation",function(){return m});var n=500,t="cubic-bezier(0.36,0.66,0.04,1)",a="opacity",d="transform",l="translateX",i="0%",c=.8;function f(e){return e.shadowRoot||e}function m(e,o,r){var m="rtl"===o.ownerDocument.dir,s=m?"-99.5%":"99.5%",u=m?"33%":"-33%",b=r.enteringEl,y=r.leavingEl,S=new e;if(S.addElement(b).duration(r.duration||n).easing(r.easing||t).beforeRemoveClass("ion-page-invisible"),y&&o){var w=new e;w.addElement(o),S.add(w)}var T="back"===r.direction,p=b.querySelector(":scope > ion-content"),v=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),E=b.querySelector(":scope > ion-header > ion-toolbar"),q=new e;if(p||E||0!==v.length?(q.addElement(p),q.addElement(v)):q.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),S.add(q),T?q.beforeClearStyles([a]).fromTo(l,u,i,!0).fromTo(a,c,1,!0):q.beforeClearStyles([a]).fromTo(l,s,i,!0),E){var g=new e;g.addElement(E),S.add(g);var C=new e;C.addElement(E.querySelector("ion-title"));var h=new e;h.addElement(E.querySelectorAll("ion-buttons,[menuToggle]"));var k=new e;k.addElement(f(E).querySelector(".toolbar-background"));var x=new e,A=E.querySelector("ion-back-button");if(x.addElement(A),g.add(C).add(h).add(k).add(x),C.fromTo(a,.01,1,!0),h.fromTo(a,.01,1,!0),T)C.fromTo(l,u,i,!0),x.fromTo(a,.01,1,!0);else if(C.fromTo(l,s,i,!0),k.beforeClearStyles([a]).fromTo(a,.01,1,!0),x.fromTo(a,.01,1,!0),A){var J=new e;J.addElement(f(A).querySelector(".button-text")).fromTo(l,m?"-100px":"100px","0px"),g.add(J)}}if(y){var R=new e;R.addElement(y.querySelector(":scope > ion-content")),R.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),S.add(R),T?R.beforeClearStyles([a]).fromTo(l,i,m?"-100%":"100%"):R.fromTo(l,i,u,!0).fromTo(a,1,c,!0);var X=y.querySelector(":scope > ion-header > ion-toolbar");if(X){var z=new e;z.addElement(X);var D=new e;D.addElement(X.querySelector("ion-title"));var G=new e;G.addElement(X.querySelectorAll("ion-buttons,[menuToggle]"));var P=new e;P.addElement(f(X).querySelector(".toolbar-background"));var U=new e;if(A=X.querySelector("ion-back-button"),U.addElement(A),z.add(D).add(G).add(U).add(P),S.add(z),U.fromTo(a,.99,0),D.fromTo(a,.99,0),G.fromTo(a,.99,0),T){if(D.fromTo(l,i,m?"-100%":"100%"),P.beforeClearStyles([a]).fromTo(a,1,.01),A){var j=new e;j.addElement(f(A).querySelector(".button-text")),j.fromTo(l,i,(m?-124:124)+"px"),z.add(j)}}else D.fromTo(l,i,u).afterClearStyles([d]),U.afterClearStyles([a]),D.afterClearStyles([a]),G.afterClearStyles([a])}}return Promise.resolve(S)}}}]);