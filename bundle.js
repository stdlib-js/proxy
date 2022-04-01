// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty;var a=function(e){return"number"==typeof e};function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}var n=function(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e},o=a,s=n,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;var p=function(e){var r,t,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,a=parseInt(t,10),!isFinite(a)){if(!o(t))throw new Error("invalid integer. Value: "+t);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(t=(-a).toString(r),e.precision&&(t=s(t,e.precision,e.padRight)),t="-"+t):(t=a.toString(r),a||e.precision?e.precision&&(t=s(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},u=a,f=Math.abs,d=String.prototype.toLowerCase,g=String.prototype.toUpperCase,h=String.prototype.replace,b=/e\+(\d)$/,w=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,m=/\.0$/,_=/\.0*e/,x=/(\..*[^0])0*e/;var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function E(e){return{mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],hasPeriod:"."===e[4],precision:e[5],specifier:e[6]}}function P(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var S=p,j=function(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":f(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=h.call(t,x,"$1e"),t=h.call(t,_,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,b,"e+0$1"),t=h.call(t,w,"e-0$1"),e.alternate&&(t=h.call(t,v,"$1."),t=h.call(t,y,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):d.call(t)},$=function(e){var r,t,a,i;for(t=[],i=0,a=k.exec(e);a;)(r=e.slice(i,k.lastIndex-a[0].length)).length&&t.push(r),t.push(E(a)),i=k.lastIndex,a=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t},V=function(e,r,t){var a=r-e.length;return a<0?e:e=t?e+P(a):P(a)+e},F=n,C=function(e){return"string"==typeof e},I=String.fromCharCode,T=isNaN;var R=function e(r){var t,a,i,n,o,s,c,l,p;if(!C(r))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=$(r),s="",c=1,l=0;l<t.length;l++)if(i=t[l],C(i))s+=i;else{for(i.mapping&&(c=i.mapping),a=i.flags,p=0;p<a.length;p++)switch(n=a.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=a.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,T(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if("*"===i.precision&&i.hasPeriod){if(i.precision=parseInt(arguments[c],10),c+=1,T(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,i.hasPeriod=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":i.hasPeriod&&(i.padZeros=!1),i.arg=S(i);break;case"s":i.maxWidth=i.hasPeriod?i.precision:-1;break;case"c":if(!T(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=T(o)?String(i.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":i.hasPeriod||(i.precision=6),i.arg=j(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=F(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=V(i.arg,i.width,i.padRight)),s+=i.arg||"",c+=1}return s},A=R,O=Object.prototype,Z=O.toString,G=O.__defineGetter__,W=O.__defineSetter__,L=O.__lookupGetter__,N=O.__lookupSetter__;var U=t,X=function(e,r,t){var a,i,n,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||N.call(e,r)?(a=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=a):e[r]=t.value),n="get"in t,o="set"in t,i&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&G&&G.call(e,r,t.get),o&&W&&W.call(e,r,t.set),e},z=r()?U:X;var M=eval;var q="undefined"==typeof Proxy?null:Proxy,B=function(e){return e},D={};return function(e,r,t){z(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}(D,"Proxy",function(){var e;try{M('"use strict"; var handler = { "get": function get( t, n ) { return t[ n ] * 100; } }; var target = { "beep": 3.14 }; var p = new Proxy( target, handler ); var x = p.beep; if ( x !== 314 ) { throw new Error( "native Proxy is not supported." ); }'),e=!0}catch(r){e=!1}return e}()?q:B),D}));
//# sourceMappingURL=bundle.js.map