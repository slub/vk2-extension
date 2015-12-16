(function(){var g, aa = aa || {}, k = this;
function l(a) {
  return void 0 !== a;
}
function ba() {
}
function ca(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function da(a) {
  return null != a;
}
function ea(a) {
  return "array" == ca(a);
}
function fa(a) {
  var b = ca(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function p(a) {
  return "string" == typeof a;
}
function ga(a) {
  return "number" == typeof a;
}
function ha(a) {
  return "function" == ca(a);
}
function ia(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ma(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function q(a, b, c) {
  q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return q.apply(null, arguments);
}
function na(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
var oa = Date.now || function() {
  return +new Date;
};
function r(a, b) {
  var c = a.split("."), d = k;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && l(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {};
  }
}
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.fa = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Ob = function(a, c, f) {
    for (var h = Array(arguments.length - 2), m = 2;m < arguments.length;m++) {
      h[m - 2] = arguments[m];
    }
    return b.prototype[c].apply(a, h);
  };
}
;var pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, u, Ea, Fa, Ga, v, Ha;
r("vk2.settings.updateSettings", function() {
  pa = vk2x.settings.ELASTICSEARCH_NODE;
  qa = vk2x.settings.ELASTICSEARCH_SRS;
  ra = vk2x.settings.EVALUATION_GETPROCESS;
  sa = vk2x.settings.EVALUATION_SETISINVALIDE;
  ta = vk2x.settings.EVALUATION_SETISVALIDE;
  ua = vk2x.settings.GEOREFERENCE_CONFIRM;
  va = vk2x.settings.GEOREFERENCE_EXTENT_SRS;
  wa = vk2x.settings.GEOREFERENCE_GETPROCESS;
  xa = vk2x.settings.GEOREFERENCE_HISTORY;
  ya = vk2x.settings.GEOREFERENCE_INFORMATION;
  za = vk2x.settings.GEOREFERENCE_ON;
  Aa = vk2x.settings.GEOREFERENCE_PAGE;
  Ba = vk2x.settings.GEOREFERENCE_VALIDATION;
  Ca = vk2x.settings.MAIN_PAGE;
  Da = vk2x.settings.MAPPROFILE_PAGE;
  u = vk2x.settings.MAPVIEW_PARAMS;
  Ea = vk2x.settings.SEARCH_TIMEINTERVAL;
  Fa = vk2x.settings.THUMB_PATH;
  Ga = vk2x.settings.TMS_URL_SUBDOMAINS;
  v = vk2x.settings.WITH_SPEAKING_URLS;
  Ha = vk2x.settings.WMS_DYNAMIC_TEMPLATE;
});
function Ia(a, b) {
  function c(a, c) {
    if ("polygon" === c.toLowerCase()) {
      for (var b = [], d = 0, e = a.length;d < e;d++) {
        b.push(ol.proj.transform(a[d], "EPSG:4326", "EPSG:900913"));
      }
      return new ol.geom.Polygon([b]);
    }
  }
  var d = "clippolygon" in b ? c(b.clippolygon, "polygon") : void 0, d = void 0 === d && "geometry" in b ? c(b.geometry.coordinates[0], b.geometry.type) : d;
  delete b.geometry;
  var d = new ol.Feature({geometry:d}), e;
  for (e in b) {
    b.hasOwnProperty(e) && ("time" === e ? d.set(e, b[e].split("-")[0]) : d.set(e, b[e]));
  }
  d.setId(a);
  return d;
}
function Ja(a) {
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    b.push(Ia(a[c]._id, a[c]._source));
  }
  return b;
}
;var x = {l:{}};
x.l.Mb = new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 0, 255, 1.0)", width:2})});
x.l.jb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#f00", width:1}), fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"})});
x.l.kb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:2})});
x.l.Fa = new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}), stroke:new ol.style.Stroke({color:"#ffcc33", width:2}), image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"#ffcc33"})})});
x.l.xa = function(a) {
  var b = 16 * Math.PI / 6, b = [0, b, b, b, b, b, b];
  a = l(a) ? a : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:8, fill:new ol.style.Fill({color:"rgba(255,255,255,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(49,159,211,0.5)", width:15, lineDash:b})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:a, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
x.l.Ga = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.6)"}), stroke:new ol.style.Stroke({color:"#29A329", width:1.5})})});
x.l.ia = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"}), stroke:new ol.style.Stroke({color:"#f00", width:1})}), zIndex:1E5});
x.l.da = function(a) {
  var b = 22 * Math.PI / 6, b = [0, b, b, b, b, b, b];
  a = l(a) ? a : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:11, fill:new ol.style.Fill({color:"rgba(255,128,0,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(240,0,0,0.5)", width:15, lineDash:b})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:a, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
function Ka() {
  this.b = this.a = !1;
  this.i = 0;
}
function Ma(a) {
  a.a || a.b || (a.i += 1);
  return "" + a.i;
}
;function Na(a) {
  this.qa = a;
}
;function Oa() {
  0 != Pa && (Qa[this[ja] || (this[ja] = ++ka)] = this);
  this.i = this.i;
  this.H = this.H;
}
var Pa = 0, Qa = {};
Oa.prototype.i = !1;
function z(a) {
  a.i || (a.i = !0, a.R(), 0 != Pa && (a = a[ja] || (a[ja] = ++ka), delete Qa[a]));
}
Oa.prototype.R = function() {
  if (this.H) {
    for (;this.H.length;) {
      this.H.shift()();
    }
  }
};
function B(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.b = !1;
  this.ab = !0;
}
B.prototype.stopPropagation = function() {
  this.b = !0;
};
B.prototype.preventDefault = function() {
  this.ab = !1;
};
var Ra = "closure_listenable_" + (1E6 * Math.random() | 0), Sa = 0;
function Ta(a, b, c, d, e) {
  this.listener = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.Z = !!d;
  this.U = e;
  ++Sa;
  this.W = this.ja = !1;
}
function Ua(a) {
  a.W = !0;
  a.listener = null;
  a.a = null;
  a.src = null;
  a.U = null;
}
;function Va(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
;function Wa(a, b) {
  this.width = a;
  this.height = b;
}
g = Wa.prototype;
g.clone = function() {
  return new Wa(this.width, this.height);
};
g.isEmpty = function() {
  return !(this.width * this.height);
};
g.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
g.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
g.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Xa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Ya(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
function Za(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function $a(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
function ab(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
}
var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function cb(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < bb.length;f++) {
      c = bb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function eb(a) {
  var b = arguments.length;
  if (1 == b && ea(arguments[0])) {
    return eb.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
;eb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function fb(a) {
  this.a = a;
}
var gb = /\s*;\s*/;
g = fb.prototype;
g.set = function(a, b, c, d, e, f) {
  if (/[;=\s]/.test(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (/[;\r\n]/.test(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  l(c) || (c = -1);
  e = e ? ";domain=" + e : "";
  d = d ? ";path=" + d : "";
  f = f ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(oa() + 1E3 * c)).toUTCString();
  this.a.cookie = a + "=" + b + e + d + c + f;
};
g.get = function(a, b) {
  for (var c = a + "=", d = (this.a.cookie || "").split(gb), e = 0, f;f = d[e];e++) {
    if (0 == f.lastIndexOf(c, 0)) {
      return f.substr(c.length);
    }
    if (f == a) {
      return "";
    }
  }
  return b;
};
g.remove = function(a, b, c) {
  var d = l(this.get(a));
  this.set(a, "", 0, b, c);
  return d;
};
g.getKeys = function() {
  return hb(this).keys;
};
g.I = function() {
  return hb(this).values;
};
g.isEmpty = function() {
  return !this.a.cookie;
};
g.va = function() {
  return this.a.cookie ? (this.a.cookie || "").split(gb).length : 0;
};
g.clear = function() {
  for (var a = hb(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
function hb(a) {
  a = (a.a.cookie || "").split(gb);
  for (var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  }
  return {keys:b, values:c};
}
var ib = new fb(document);
ib.b = 3950;
function jb() {
}
jb.prototype.a = null;
function kb(a) {
  var b;
  (b = a.a) || (b = {}, lb(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b;
}
;function mb(a) {
  mb[" "](a);
  return a;
}
mb[" "] = ba;
var nb = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function ob(a) {
  if (!pb.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(qb, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(rb, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(sb, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(tb, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ub, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(vb, "&#0;"));
  return a;
}
var qb = /&/g, rb = /</g, sb = />/g, tb = /"/g, ub = /'/g, vb = /\x00/g, pb = /[\x00&<>"']/;
function wb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function xb(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function yb(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;var C = Array.prototype, zb = C.indexOf ? function(a, b, c) {
  return C.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (p(a)) {
    return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, Ab = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Bb = C.filter ? function(a, b, c) {
  return C.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = p(a) ? a.split("") : a, m = 0;m < d;m++) {
    if (m in h) {
      var n = h[m];
      b.call(c, n, m, a) && (e[f++] = n);
    }
  }
  return e;
};
function Cb(a) {
  var b;
  a: {
    b = Db;
    for (var c = a.length, d = p(a) ? a.split("") : a, e = 0;e < c;e++) {
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
}
function Eb(a, b) {
  return 0 <= zb(a, b);
}
function Fb(a, b) {
  var c = zb(a, b), d;
  (d = 0 <= c) && C.splice.call(a, c, 1);
  return d;
}
function Gb(a) {
  return C.concat.apply(C, arguments);
}
function Hb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
function Ib(a, b, c) {
  return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c);
}
;function Jb(a) {
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function D(a, b) {
  var c = Jb(a);
  Kb(c, Ib(arguments, 1));
  a.className = c.join(" ");
}
function E(a, b) {
  var c = Jb(a), c = Lb(c, Ib(arguments, 1));
  a.className = c.join(" ");
}
function Kb(a, b) {
  for (var c = 0;c < b.length;c++) {
    Eb(a, b[c]) || a.push(b[c]);
  }
}
function Lb(a, b) {
  return Bb(a, function(a) {
    return !Eb(b, a);
  });
}
function Mb(a, b, c) {
  var d = Jb(a);
  p(b) ? Fb(d, b) : ea(b) && (d = Lb(d, b));
  p(c) && !Eb(d, c) ? d.push(c) : ea(c) && Kb(d, c);
  a.className = d.join(" ");
}
function F(a, b) {
  return Eb(Jb(a), b);
}
;function Nb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function Ob(a) {
  return a.classList ? a.classList.contains("active") : Eb(Nb(a), "active");
}
function Pb(a) {
  a.classList ? a.classList.add("active") : Ob(a) || (a.className += 0 < a.className.length ? " active" : "active");
}
function Qb(a) {
  a.classList ? a.classList.remove("active") : Ob(a) && (a.className = Bb(Nb(a), function(a) {
    return "active" != a;
  }).join(" "));
}
;function Rb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
Rb.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = Sb(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.ja = !1)) : (b = new Ta(b, this.src, f, !!d, e), b.ja = c, a.push(b));
  return b;
};
Rb.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.a)) {
    return !1;
  }
  var e = this.a[a];
  b = Sb(e, b, c, d);
  return -1 < b ? (Ua(e[b]), C.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1;
};
function Tb(a, b) {
  var c = b.type;
  c in a.a && Fb(a.a[c], b) && (Ua(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
}
Rb.prototype.ya = function(a, b, c, d) {
  a = this.a[a.toString()];
  var e = -1;
  a && (e = Sb(a, b, c, d));
  return -1 < e ? a[e] : null;
};
Rb.prototype.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", e = l(b);
  return Ya(this.a, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].Z != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function Sb(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.W && f.listener == b && f.Z == !!c && f.U == d) {
      return e;
    }
  }
  return -1;
}
;var Ub;
function Vb() {
}
t(Vb, jb);
function Xb(a) {
  return (a = lb(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function lb(a) {
  if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.b = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.b;
}
Ub = new Vb;
function Yb(a, b) {
  this.g = {};
  this.a = [];
  this.b = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof Yb ? (c = a.getKeys(), d = a.I()) : (c = $a(a), d = Za(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
g = Yb.prototype;
g.va = function() {
  return this.b;
};
g.I = function() {
  Zb(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.g[this.a[b]]);
  }
  return a;
};
g.getKeys = function() {
  Zb(this);
  return this.a.concat();
};
g.equals = function(a, b) {
  if (this === a) {
    return !0;
  }
  if (this.b != a.va()) {
    return !1;
  }
  var c = b || $b;
  Zb(this);
  for (var d, e = 0;d = this.a[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return !1;
    }
  }
  return !0;
};
function $b(a, b) {
  return a === b;
}
g.isEmpty = function() {
  return 0 == this.b;
};
g.clear = function() {
  this.g = {};
  this.b = this.a.length = 0;
};
g.remove = function(a) {
  return ac(this.g, a) ? (delete this.g[a], this.b--, this.a.length > 2 * this.b && Zb(this), !0) : !1;
};
function Zb(a) {
  if (a.b != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      ac(a.g, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.b != a.a.length) {
    for (var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], ac(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
g.get = function(a, b) {
  return ac(this.g, a) ? this.g[a] : b;
};
g.set = function(a, b) {
  ac(this.g, a) || (this.b++, this.a.push(a));
  this.g[a] = b;
};
g.forEach = function(a, b) {
  for (var c = this.getKeys(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
g.clone = function() {
  return new Yb(this);
};
function ac(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function bc(a) {
  if ("function" == typeof a.I) {
    return a.I();
  }
  if (p(a)) {
    return a.split("");
  }
  if (fa(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Za(a);
}
function cc(a, b) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, void 0);
  } else {
    if (fa(a) || p(a)) {
      Ab(a, b, void 0);
    } else {
      var c;
      if ("function" == typeof a.getKeys) {
        c = a.getKeys();
      } else {
        if ("function" != typeof a.I) {
          if (fa(a) || p(a)) {
            c = [];
            for (var d = a.length, e = 0;e < d;e++) {
              c.push(e);
            }
          } else {
            c = $a(a);
          }
        } else {
          c = void 0;
        }
      }
      for (var d = bc(a), e = d.length, f = 0;f < e;f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    }
  }
}
;var H;
a: {
  var dc = k.navigator;
  if (dc) {
    var ec = dc.userAgent;
    if (ec) {
      H = ec;
      break a;
    }
  }
  H = "";
}
;function I() {
  return -1 != H.indexOf("Edge");
}
;var fc = -1 != H.indexOf("Opera") || -1 != H.indexOf("OPR"), J = -1 != H.indexOf("Edge") || -1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE"), K = -1 != H.indexOf("Gecko") && !(-1 != H.toLowerCase().indexOf("webkit") && !I()) && !(-1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE")) && !I(), L = -1 != H.toLowerCase().indexOf("webkit") && !I(), gc = -1 != H.indexOf("Macintosh");
function hc() {
  var a = H;
  if (K) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (J && I()) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (J) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (L) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function ic() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var jc = function() {
  if (fc && k.opera) {
    var a = k.opera.version;
    return ha(a) ? a() : a;
  }
  var a = "", b = hc();
  b && (a = b ? b[1] : "");
  return J && !I() && (b = ic(), b > parseFloat(a)) ? String(b) : a;
}(), kc = {};
function M(a) {
  var b;
  if (!(b = kc[a])) {
    b = 0;
    for (var c = nb(String(jc)).split("."), d = nb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", m = d[f] || "", n = RegExp("(\\d*)(\\D*)", "g"), w = RegExp("(\\d*)(\\D*)", "g");
      do {
        var y = n.exec(h) || ["", "", ""], A = w.exec(m) || ["", "", ""];
        if (0 == y[0].length && 0 == A[0].length) {
          break;
        }
        b = wb(0 == y[1].length ? 0 : parseInt(y[1], 10), 0 == A[1].length ? 0 : parseInt(A[1], 10)) || wb(0 == y[2].length, 0 == A[2].length) || wb(y[2], A[2]);
      } while (0 == b);
    }
    b = kc[a] = 0 <= b;
  }
  return b;
}
var lc = k.document, mc = ic(), nc = !lc || !J || !mc && I() ? void 0 : mc || ("CSS1Compat" == lc.compatMode ? parseInt(jc, 10) : 5);
var oc = !J || J && (I() || 9 <= nc);
!K && !J || J && J && (I() || 9 <= nc) || K && M("1.9.1");
J && M("9");
var pc = J || fc || L;
function N(a) {
  var b = document;
  return p(a) ? b.getElementById(a) : a;
}
function O(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : qc("*", a, b);
}
function P(a, b) {
  var c = b || document, d = null;
  c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = qc("*", a, b)[0];
  return d || null;
}
function qc(a, b, c) {
  var d = document;
  c = c || d;
  a = a && "*" != a ? a.toUpperCase() : "";
  if (c.querySelectorAll && c.querySelector && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""));
  }
  if (b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if (a) {
      for (var d = {}, e = 0, f = 0, h;h = c[f];f++) {
        a == h.nodeName && (d[e++] = h);
      }
      d.length = e;
      return d;
    }
    return c;
  }
  c = c.getElementsByTagName(a || "*");
  if (b) {
    d = {};
    for (f = e = 0;h = c[f];f++) {
      a = h.className, "function" == typeof a.split && Eb(a.split(/\s+/), b) && (d[e++] = h);
    }
    d.length = e;
    return d;
  }
  return c;
}
function rc(a, b) {
  Xa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in sc ? a.setAttribute(sc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var sc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Q(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!oc && h && (h.name || h.type)) {
    f = ["<", f];
    h.name && f.push(' name="', ob(h.name), '"');
    if (h.type) {
      f.push(' type="', ob(h.type), '"');
      var m = {};
      cb(m, h);
      delete m.type;
      h = m;
    }
    f.push(">");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (p(h) ? f.className = h : ea(h) ? f.className = h.join(" ") : rc(f, h));
  2 < d.length && tc(e, f, d);
  return f;
}
function tc(a, b, c) {
  function d(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !fa(f) || ia(f) && 0 < f.nodeType ? d(f) : Ab(uc(f) ? Hb(f) : f, d);
  }
}
function R(a, b) {
  a.appendChild(b);
}
function vc(a) {
  a && a.parentNode && a.parentNode.removeChild(a);
}
function wc(a) {
  var b;
  if (pc && !(J && M("9") && !M("10") && k.SVGElement && a instanceof k.SVGElement) && (b = a.parentElement)) {
    return b;
  }
  b = a.parentNode;
  return ia(b) && 1 == b.nodeType ? b : null;
}
function xc(a, b) {
  var c = [];
  return yc(a, b, c, !0) ? c[0] : void 0;
}
function zc(a, b) {
  var c = [];
  yc(a, b, c, !1);
  return c;
}
function yc(a, b, c, d) {
  if (null != a) {
    for (a = a.firstChild;a;) {
      if (b(a) && (c.push(a), d) || yc(a, b, c, d)) {
        return !0;
      }
      a = a.nextSibling;
    }
  }
  return !1;
}
function uc(a) {
  if (a && "number" == typeof a.length) {
    if (ia(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ha(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}
;function Ac() {
  proj4.defs("EPSG:3043", "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
  proj4.defs("EPSG:4314", "+proj=longlat +ellps=bessel +datum=potsdam +no_defs");
  proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
  proj4.defs("EPSG:900913", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs");
  proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
}
function Bc() {
  var a = N("transformation-chooser");
  return "tps" === a.value.toLowerCase() ? "tps" : "polynom" === a.value.toLowerCase() ? "polynom" : "affine";
}
function Cc() {
  var a = N("projection-chooser");
  return null !== a && void 0 !== a ? a.value : "EPSG:4314";
}
;function Dc(a, b) {
  this.b = p(a) ? N(a) : a;
  var c = l("vertical") && p("vertical") ? "vertical" : "horizontal", d = this.b, e = Q("div", {"class":"opacity-container"});
  d.appendChild(e);
  d = Q("div", {"class":"slider-container opacity-slider"});
  e.appendChild(d);
  this.a = Q("div", {"class":"slider"});
  d.appendChild(this.a);
  Ec(this, this.a, b, c);
}
function Ec(a, b, c, d) {
  function e(a, b) {
    "vertical" == d ? b.style.top = 100 - (a - 0) / 100 * 100 + "%" : b.style.left = (a - 0) / 100 * 100 + "%";
    b.innerHTML = a + "%";
  }
  var f = 100 * c.getOpacity();
  $(b).slider({min:0, max:100, value:f, animate:"slow", orientation:d, step:1, slide:function(a, b) {
    var d = b.value;
    e(d, h);
    c.setOpacity(d / 100);
  }, change:q(function(a, b) {
    var d = b.value;
    e(d, h);
    c.setOpacity(d / 100);
  }, a)});
  var h = Q("div", {"class":"tooltip value", innerHTML:"100%"});
  b.appendChild(h);
  c.on("change:opacity", function() {
    var a = 100 * this.getOpacity();
    19 < Math.abs(a - $(b).slider("value")) && $(b).slider("value", a);
  });
}
;var Fc = !J || J && (I() || 9 <= nc), Gc = J && !M("9");
!L || M("528");
K && M("1.9b") || J && M("8") || fc && M("9.5") || L && M("528");
K && !M("8") || J && M("9");
function S(a, b) {
  B.call(this, a ? a.type : "");
  this.currentTarget = this.target = null;
  this.keyCode = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.f = this.j = this.a = this.i = !1;
  this.K = null;
  if (a) {
    this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var c = a.relatedTarget;
    if (c && K) {
      try {
        mb(c.nodeName);
      } catch (d) {
      }
    }
    this.offsetX = L || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = L || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.keyCode = a.keyCode || 0;
    this.i = a.ctrlKey;
    this.a = a.altKey;
    this.j = a.shiftKey;
    this.f = a.metaKey;
    this.K = a;
    a.defaultPrevented && this.preventDefault();
  }
}
t(S, B);
S.prototype.stopPropagation = function() {
  S.fa.stopPropagation.call(this);
  this.K.stopPropagation ? this.K.stopPropagation() : this.K.cancelBubble = !0;
};
S.prototype.preventDefault = function() {
  S.fa.preventDefault.call(this);
  var a = this.K;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Gc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Hc = "closure_lm_" + (1E6 * Math.random() | 0), Ic = {}, Jc = 0;
function T(a, b, c, d, e) {
  if (ea(b)) {
    for (var f = 0;f < b.length;f++) {
      T(a, b[f], c, d, e);
    }
    return null;
  }
  c = Kc(c);
  return a && a[Ra] ? a.C.add(String(b), c, !1, d, e) : Lc(a, b, c, !1, d, e);
}
function Lc(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, m = Mc(a);
  m || (a[Hc] = m = new Rb(a));
  c = m.add(b, c, d, e, f);
  if (c.a) {
    return c;
  }
  d = Nc();
  c.a = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), d, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(Oc(b.toString()), d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  Jc++;
  return c;
}
function Nc() {
  var a = Pc, b = Fc ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function U(a, b, c, d, e) {
  if (ea(b)) {
    for (var f = 0;f < b.length;f++) {
      U(a, b[f], c, d, e);
    }
  } else {
    c = Kc(c), a && a[Ra] ? a.C.add(String(b), c, !0, d, e) : Lc(a, b, c, !0, d, e);
  }
}
function Qc(a, b, c, d, e) {
  if (ea(b)) {
    for (var f = 0;f < b.length;f++) {
      Qc(a, b[f], c, d, e);
    }
  } else {
    c = Kc(c), a && a[Ra] ? a.C.remove(String(b), c, d, e) : a && (a = Mc(a)) && (b = a.ya(b, c, !!d, e)) && Rc(b);
  }
}
function Rc(a) {
  if (!ga(a) && a && !a.W) {
    var b = a.src;
    if (b && b[Ra]) {
      Tb(b.C, a);
    } else {
      var c = a.type, d = a.a;
      b.removeEventListener ? b.removeEventListener(c, d, a.Z) : b.detachEvent && b.detachEvent(Oc(c), d);
      Jc--;
      (c = Mc(b)) ? (Tb(c, a), 0 == c.b && (c.src = null, b[Hc] = null)) : Ua(a);
    }
  }
}
function Oc(a) {
  return a in Ic ? Ic[a] : Ic[a] = "on" + a;
}
function Sc(a, b, c, d) {
  var e = !0;
  if (a = Mc(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.Z == c && !f.W && (f = Tc(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function Tc(a, b) {
  var c = a.listener, d = a.U || a.src;
  a.ja && Rc(a);
  return c.call(d, b);
}
function Pc(a, b) {
  if (a.W) {
    return !0;
  }
  if (!Fc) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = k, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new S(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, m = e.length - 1;!c.b && 0 <= m;m--) {
        c.currentTarget = e[m];
        var n = Sc(e[m], f, !0, c), d = d && n;
      }
      for (m = 0;!c.b && m < e.length;m++) {
        c.currentTarget = e[m], n = Sc(e[m], f, !1, c), d = d && n;
      }
    }
    return d;
  }
  return Tc(a, new S(b, this));
}
function Mc(a) {
  a = a[Hc];
  return a instanceof Rb ? a : null;
}
var Uc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Kc(a) {
  if (ha(a)) {
    return a;
  }
  a[Uc] || (a[Uc] = function(b) {
    return a.handleEvent(b);
  });
  return a[Uc];
}
;function Vc(a) {
  function b(a) {
    a.preventDefault();
    e.getMap().getView().setRotation(0);
  }
  a = a || {};
  var c = document.createElement("a");
  c.href = "#rotate-north";
  c.innerHTML = "N";
  c.className = "ol-has-tooltip";
  var d = Q("span", {role:"tooltip", innerHTML:x.c("rotatenorth")});
  c.appendChild(d);
  var e = this;
  T(c, "click", b, void 0, this);
  T(c, "touchstart", b, void 0, this);
  d = document.createElement("div");
  d.className = "rotate-north ol-unselectable";
  d.appendChild(c);
  ol.control.Control.call(this, {element:d, target:a.target});
}
ol.inherits(Vc, ol.control.Control);
function V() {
  Oa.call(this);
  this.C = new Rb(this);
  this.fb = this;
  this.Da = null;
}
t(V, Oa);
V.prototype[Ra] = !0;
g = V.prototype;
g.addEventListener = function(a, b, c, d) {
  T(this, a, b, c, d);
};
g.removeEventListener = function(a, b, c, d) {
  Qc(this, a, b, c, d);
};
g.dispatchEvent = function(a) {
  var b, c = this.Da;
  if (c) {
    for (b = [];c;c = c.Da) {
      b.push(c);
    }
  }
  var c = this.fb, d = a.type || a;
  if (p(a)) {
    a = new B(a, c);
  } else {
    if (a instanceof B) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new B(d, c);
      cb(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var h = b.length - 1;!a.b && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = Wc(f, d, !0, a) && e;
    }
  }
  a.b || (f = a.currentTarget = c, e = Wc(f, d, !0, a) && e, a.b || (e = Wc(f, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.b && h < b.length;h++) {
      f = a.currentTarget = b[h], e = Wc(f, d, !1, a) && e;
    }
  }
  return e;
};
g.R = function() {
  V.fa.R.call(this);
  if (this.C) {
    var a = this.C, b = 0, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0;e < d.length;e++) {
        ++b, Ua(d[e]);
      }
      delete a.a[c];
      a.b--;
    }
  }
  this.Da = null;
};
function Wc(a, b, c, d) {
  b = a.C.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.W && h.Z == c) {
      var m = h.listener, n = h.U || h.src;
      h.ja && Tb(a.C, h);
      e = !1 !== m.call(n, d) && e;
    }
  }
  return e && 0 != d.ab;
}
g.ya = function(a, b, c, d) {
  return this.C.ya(String(a), b, c, d);
};
g.hasListener = function(a, b) {
  return this.C.hasListener(l(a) ? String(a) : void 0, b);
};
var Xc = {"\u00c4":"maptype-\u00e4", M:"maptype-m", TK:"maptype-tk", GL:"maptype-gl", ToGeoref:"georeference-false"};
function Yc(a, b) {
  this.o = p(a) ? N(a) : a;
  b || delete Xc.ToGeoref;
  var c = "", d;
  for (d in Xc) {
    c += '<label class="checkbox-inline"><input class="facet-search-el" type="checkbox" id="' + d + '" value="' + Xc[d] + '">' + d + "</label>";
  }
  c = Q("div", {"class":"search-facet", innerHTML:c});
  this.o.appendChild(c);
  T(c, "click", function(a) {
    a = O("facet-search-el", a.currentTarget);
    for (var b = [], c = !0, d = 0;d < a.length;d++) {
      if (a[d].checked) {
        var n = a[d].value.split("-")[0], w = a[d].value.split("-")[1];
        "georeference" !== n && b.push({key:n, value:w});
        "georeference" === n && (c = !1);
      }
    }
    this.dispatchEvent(new B("facet-change", {facets:b, georeference:c}));
  }, void 0, this);
  V.call(this);
}
t(Yc, V);
function Zc(a, b) {
  this.b = p(a) ? N(a) : a;
  var c = void 0 !== b ? b : [1868, 1945], d = this.b, e = Q("div", {"class":"timeslider-container"});
  d.appendChild(e);
  d = Q("label", {innerHTML:x.c("change_timeperiod")});
  e.appendChild(d);
  d = Q("div", {"class":"slider-container"});
  e.appendChild(d);
  this.a = Q("div", {"class":"slider"});
  d.appendChild(this.a);
  $c(this, this.a, c);
  V.call(this);
}
t(Zc, V);
function $c(a, b, c) {
  function d(a, b) {
    b.style.left = (a - c[0]) / (c[1] - c[0]) * 100 + "%";
    b.innerHTML = a;
  }
  var e, f;
  $(b).slider({range:!0, min:c[0], max:c[1], values:[c[0], c[1]], animate:"slow", orientation:"horizontal", step:1, slide:function(a, b) {
    var c = b.values;
    d(c[0], e);
    d(c[1], f);
  }, change:q(function(a, b) {
    var c = b.values;
    d(c[0], e);
    d(c[1], f);
    this.dispatchEvent(new B(ad, {time:c}));
  }, a)});
  e = Q("div", {"class":"tooltip min-value", innerHTML:c[0]});
  b.appendChild(e);
  f = Q("div", {"class":"tooltip max-value", innerHTML:c[1]});
  b.appendChild(f);
}
var ad = "timechange";
function W() {
  this.status_ = !1;
  V.call(this);
}
t(W, V);
W.prototype.A = function() {
};
W.prototype.B = function() {
};
function bd(a, b, c, d) {
  this.a = [c, d];
  this.s = [new ol.interaction.Draw({source:a, type:"Point", style:function() {
    return [x.l.ia];
  }}), new ol.interaction.Draw({source:b, type:"Point", style:function() {
    return [x.l.ia];
  }})];
  W.call(this);
}
t(bd, W);
bd.prototype.A = function() {
  this.G();
  this.status_ = !0;
};
bd.prototype.G = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].addInteraction(this.s[a]);
  }
};
bd.prototype.B = function() {
  this.J();
  this.status_ = !1;
};
bd.prototype.J = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].removeInteraction(this.s[a]);
  }
};
function cd(a, b, c, d) {
  function e(a, b, c) {
    var d = b.getSource().getFeatureById(a.getId());
    a = c.getSource().getFeatureById(a.getId());
    null != d && b.getSource().removeFeature(d);
    null != a && c.getSource().removeFeature(a);
  }
  this.a = [c, d];
  this.s = [new ol.interaction.Select({condition:ol.events.condition.click, layer:a, style:function() {
    return [x.l.ia];
  }, condition:q(function(d) {
    "click" === d.type && c.forEachFeatureAtPixel(d.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)}), new ol.interaction.Select({condition:ol.events.condition.click, layer:b, style:function() {
    return [x.l.ia];
  }, condition:q(function(c) {
    "click" === c.type && d.forEachFeatureAtPixel(c.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)})];
  W.call(this);
}
t(cd, W);
cd.prototype.A = function() {
  this.G();
  this.status_ = !0;
};
cd.prototype.G = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].addInteraction(this.s[a]);
  }
};
cd.prototype.B = function() {
  this.J();
  this.status_ = !1;
};
cd.prototype.J = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].removeInteraction(this.s[a]);
  }
};
function dd(a, b, c, d) {
  this.a = [c, d];
  a.getStyle();
  x.l.da();
  this.s = [new ol.interaction.Modify({features:a.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [x.l.da()];
  }}), new ol.interaction.Modify({features:b.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [x.l.da()];
  }})];
  this.s[0].getMap = function() {
    return c;
  };
  this.s[1].getMap = function() {
    return d;
  };
  ed(this, this.s, [a, b]);
  W.call(this);
}
t(dd, W);
dd.prototype.A = function() {
  this.G();
  this.status_ = !0;
};
dd.prototype.G = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].addInteraction(this.s[a]);
  }
};
dd.prototype.B = function() {
  this.J();
  this.status_ = !1;
};
dd.prototype.J = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].removeInteraction(this.s[a]);
  }
};
function ed(a, b, c) {
  function d(a, b) {
    var c = f(b.target.getMap(), b.mapBrowserPointerEvent.pixel, a);
    da(c.getId()) && this.dispatchEvent(new B("deselected", {feature:c, srcStyle:x.l.da(c.getId()), targetStyle:x.l.xa(c.getId())}));
  }
  function e(a, b) {
    var c = f(b.target.getMap(), b.mapBrowserPointerEvent.pixel, a);
    da(c.getId()) && this.dispatchEvent(new B("selected", {feature:c, srcStyle:x.l.xa(c.getId()), targetStyle:x.l.da(c.getId())}));
  }
  function f(a, b, c) {
    var d;
    a.forEachFeatureAtPixel(b, function(a) {
      d = a;
    });
    return c.getFeatureById(d.getId());
  }
  var h = c[0].getSource();
  c = c[1].getSource();
  b[0].on("modifystart", q(e, a, c));
  b[1].on("modifystart", q(e, a, h));
  b[0].on("modifyend", q(d, a, c));
  b[1].on("modifyend", q(d, a, h));
}
ol.Collection.prototype.addFeature = function(a) {
  var b = !1;
  this.forEach(function(c) {
    c === a && (b = !0);
  });
  b || this.push(a);
};
ol.Collection.prototype.removeFeature = function(a) {
  var b = !1;
  this.forEach(function(c) {
    c === a && (b = !0);
  });
  b && this.remove(a);
};
function fd(a, b) {
  var c = b.getSource();
  this.g = a;
  this.s = [new ol.interaction.Draw({features:c.getFeaturesCollection(), type:"Polygon", style:x.l.Fa}), new ol.interaction.Modify({features:b.getSource().getFeaturesCollection(), deleteCondition:function(a) {
    return ol.events.condition.shiftKeyOnly(a) && ol.events.condition.singleClick(a);
  }})];
  this.s[0].on("drawstart", function() {
    1 <= c.getFeatures().length && this.finishDrawing();
  }, this.s[0]);
  c.getFeaturesCollection().on("add", function() {
    1 < c.getFeatures().length ? c.getFeatures().splice(1, 1) : this.dispatchEvent(new B("drawend", {feature:c.getFeatures()[0]}));
  }, this);
  W.call(this);
}
t(fd, W);
fd.prototype.A = function() {
  this.G();
  this.status_ = !0;
};
fd.prototype.G = function() {
  for (var a = 0;a < this.s.length;a++) {
    this.g.addInteraction(this.s[a]);
  }
};
fd.prototype.B = function() {
  this.J();
  this.status_ = !1;
};
fd.prototype.J = function() {
  for (var a = 0;a < this.s.length;a++) {
    this.g.removeInteraction(this.s[a]);
  }
};
function gd() {
  V.call(this);
}
t(gd, V);
function hd(a, b, c, d, e) {
  if (!(J || L && M("525"))) {
    return !0;
  }
  if (gc && e) {
    return id(a);
  }
  if (e && !d) {
    return !1;
  }
  ga(b) && (b = jd(b));
  if (!c && (17 == b || 18 == b || gc && 91 == b)) {
    return !1;
  }
  if (L && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return !1;
    }
  }
  if (J && d && b == a) {
    return !1;
  }
  switch(a) {
    case 13:
      return !0;
    case 27:
      return !L;
  }
  return id(a);
}
function id(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || L && 0 == a) {
    return !0;
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return !0;
    default:
      return !1;
  }
}
function jd(a) {
  if (K) {
    a = kd(a);
  } else {
    if (gc && L) {
      a: {
        switch(a) {
          case 93:
            a = 91;
            break a;
        }
      }
    }
  }
  return a;
}
function kd(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a;
  }
}
;function ld(a, b) {
  V.call(this);
  a && (this.oa && md(this), this.ba = a, this.na = T(this.ba, "keypress", this, b), this.za = T(this.ba, "keydown", this.a, b, this), this.oa = T(this.ba, "keyup", this.b, b, this));
}
t(ld, V);
g = ld.prototype;
g.ba = null;
g.na = null;
g.za = null;
g.oa = null;
g.D = -1;
g.N = -1;
g.ta = !1;
var nd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, od = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, pd = J || 
L && M("525"), qd = gc && K;
ld.prototype.a = function(a) {
  L && (17 == this.D && !a.i || 18 == this.D && !a.a || gc && 91 == this.D && !a.f) && (this.N = this.D = -1);
  -1 == this.D && (a.i && 17 != a.keyCode ? this.D = 17 : a.a && 18 != a.keyCode ? this.D = 18 : a.f && 91 != a.keyCode && (this.D = 91));
  pd && !hd(a.keyCode, this.D, a.j, a.i, a.a) ? this.handleEvent(a) : (this.N = jd(a.keyCode), qd && (this.ta = a.a));
};
ld.prototype.b = function(a) {
  this.N = this.D = -1;
  this.ta = a.a;
};
ld.prototype.handleEvent = function(a) {
  var b = a.K, c, d, e = b.altKey;
  J && "keypress" == a.type ? c = this.N : L && "keypress" == a.type ? c = this.N : fc && !L ? c = this.N : (c = b.keyCode || this.N, d = b.charCode || 0, qd && (e = this.ta), gc && 63 == d && 224 == c && (c = 191));
  d = c = jd(c);
  var f = b.keyIdentifier;
  c ? 63232 <= c && c in nd ? d = nd[c] : 25 == c && a.j && (d = 9) : f && f in od && (d = od[f]);
  this.D = d;
  a = new rd(d, 0, 0, b);
  a.a = e;
  this.dispatchEvent(a);
};
function md(a) {
  a.na && (Rc(a.na), Rc(a.za), Rc(a.oa), a.na = null, a.za = null, a.oa = null);
  a.ba = null;
  a.D = -1;
  a.N = -1;
}
ld.prototype.R = function() {
  ld.fa.R.call(this);
  md(this);
};
function rd(a, b, c, d) {
  S.call(this, d);
  this.type = "key";
  this.keyCode = a;
}
t(rd, S);
function sd(a, b, c) {
  if (p(b)) {
    (b = td(a, b)) && (a.style[b] = c);
  } else {
    for (var d in b) {
      c = a;
      var e = b[d], f = td(c, d);
      f && (c.style[f] = e);
    }
  }
}
var ud = {};
function td(a, b) {
  var c = ud[b];
  if (!c) {
    var d = xb(b), c = d;
    void 0 === a.style[d] && (d = (L ? "Webkit" : K ? "Moz" : J ? "ms" : fc ? "O" : null) + yb(d), void 0 !== a.style[d] && (c = d));
    ud[b] = c;
  }
  return c;
}
function vd(a, b) {
  var c = a.style[xb(b)];
  return "undefined" !== typeof c ? c : a.style[td(a, b)] || "";
}
function wd(a) {
  var b = xd, c;
  a: {
    c = 9 == a.nodeType ? a : a.ownerDocument || a.document;
    if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
      c = c.display || c.getPropertyValue("display") || "";
      break a;
    }
    c = "";
  }
  if ("none" != (c || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) {
    return b(a);
  }
  c = a.style;
  var d = c.display, e = c.visibility, f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = f;
  c.visibility = e;
  return a;
}
function xd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = L && !b && !c;
  if ((!l(b) || d) && a.getBoundingClientRect) {
    var e;
    a: {
      try {
        e = a.getBoundingClientRect();
      } catch (f) {
        e = {left:0, top:0, right:0, bottom:0};
        break a;
      }
      J && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop);
    }
    return new Wa(e.right - e.left, e.bottom - e.top);
  }
  return new Wa(b, c);
}
J && M(12);
function yd(a, b, c) {
  a = Q("div", {"class":"modal fade " + a, id:a});
  var d = Q("div", {"class":"modal-dialog"});
  a.appendChild(d);
  var e = Q("div", {"class":"modal-content"});
  d.appendChild(e);
  this.a = Q("div", {"class":"modal-header"});
  e.appendChild(this.a);
  d = Q("button", {"class":"close", type:"button", "data-dismiss":"modal", "aria-hidden":"true", innerHTML:"&times;"});
  this.a.appendChild(d);
  d = Q("h4", {"class":"modal-title"});
  this.a.appendChild(d);
  d = Q("div", {"class":"modal-body"});
  e.appendChild(d);
  d = Q("div", {"class":"modal-footer"});
  e.appendChild(d);
  e = Q("button", {"class":"btn btn-default", type:"button", "data-dismiss":"modal", innerHTML:"Close"});
  d.appendChild(e);
  this.F = a;
  b.appendChild(this.F);
  zd(this.F, c || !1);
}
function Ad(a, b) {
  for (var c = zc(b, function(a) {
    return "a" === a.nodeName.toLowerCase() && a.hasAttribute("href");
  }), d = P("modal-content", a.F), e = 0;e < c.length;e++) {
    var f = c[e];
    if (!f.hasAttribute("target") || "_self" === f.getAttribute("target")) {
      f.setAttribute("data-href", f.href);
      f.href = "#";
      var h = l("map-profile") ? "map-profile" : f.hasAttribute("data-classname") ? f.getAttribute("data-classname") : "";
      T(f, "click", na(function(a, b) {
        b.preventDefault();
        var c = b.currentTarget.getAttribute("data-href");
        Bd(this, {href:c, classes:a});
        d.className = "modal-content " + a;
        return !1;
      }, h), void 0, a);
    }
  }
}
function zd(a, b) {
  $(a).on("hidden.bs.modal", function() {
    P("modal-body", this).innerHTML = "";
    P("modal-title", this.F).innerHTML = "";
    P("modal-content", this).className = "modal-content";
    b && vc(this);
  });
}
function Bd(a, b) {
  var c = P("modal-body", a.F);
  c.innerHTML = "";
  var d = Q("iframe", {frameborder:"0", src:b.href});
  d.setAttribute("webkitallowfullscreen", "");
  d.setAttribute("mozallowfullscreen", "");
  d.setAttribute("allowfullscreen", "");
  l(b.width) && sd(d, "width", b.width);
  l(b.height) && sd(d, "height", b.height);
  l(b.classes) && D(d, b.classes);
  c.appendChild(d);
}
yd.prototype.close = function() {
  l(this.F) && $(this.F).modal("hide");
};
yd.prototype.open = function(a, b, c) {
  null != a && a ? P("modal-title", this.F).innerHTML = a : this.a.style.display = "none";
  l(b) && (a = P("modal-content", this.F), D(a, b));
  l(c) && Bd(this, c);
  $(this.F).modal("show");
};
function Cd(a, b) {
  var c = P("modal-body", a.F);
  ia(b) && 1 == b.nodeType && (c.appendChild(b), Ad(a, b));
}
function Dd(a, b) {
  var c = P("modal-body", a.F);
  p(b) && (c.innerHTML = b);
}
;function Ed(a, b, c) {
  if (ha(a)) {
    c && (a = q(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = q(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
}
;function Fd(a, b) {
  this.ka = l(b) ? b : void 0;
  this.o = l(a) ? a : void 0;
  this.u = !1;
}
function Gd(a) {
  for (var b in a) {
    if (a.hasOwnProperty(b)) {
      for (var c = a[b], d = 0;d < c.length;d++) {
        c[d].setOpacity(0), c[d].setVisible(!0);
      }
    }
  }
}
function Hd(a, b) {
  Gd(b);
  ({start:function(a, b, e) {
    if (e.u) {
      for (var f in a) {
        break;
      }
      var h = l(a[f]) ? a[f] : [];
      delete a[f];
      a = q(this.start, this, a, b, e);
      Ed(na(e.Hb, h, a), b, e);
      l(e.ka) && (e.ka.innerHTML = l(f) ? f : "");
      l(f) || (console.log("Visualization finished ...."), e.u = !1, l(e.o) && E(e.o, "play"));
    }
  }}).start(b, 500, a);
}
function Id(a, b) {
  for (var c = a.sort(function(a, b) {
    return a.getTime() > b.getTime() ? 1 : a.getTime() < b.getTime() ? -1 : 0;
  }), d = 0;d < c.length;d++) {
    b.removeLayer(c[d]), b.addLayer(c[d]);
  }
  for (var e = {}, d = 0;d < c.length;d++) {
    c[d].getTime() in e ? e[c[d].getTime()].push(c[d]) : e[c[d].getTime()] = [c[d]];
  }
  return e;
}
Fd.prototype.Hb = function(a, b) {
  ({Oa:function(a, b, e, f, h) {
    if (h.u) {
      var m = a[0].getOpacity() + b;
      if (1.05 >= m) {
        for (var n = 0;n < a.length;n++) {
          a[n].setOpacity(m);
        }
        Ed(na(this.Oa, a, b, e, f, h), e, this);
      } else {
        l(f) && f();
      }
    }
  }, start:function(a, b, e, f, h) {
    for (var m = 0;m < a.length;m++) {
      a[m].setOpacity(0), a[m].setVisible(!0);
    }
    Ed(na(this.Oa, a, b, e, f, h), e, this);
  }}).start(a, .1, 500, b, this);
};
function Jd(a) {
  a.u = !1;
  l(a.ka) && (a.ka.innerHTML = l(void 0) ? void 0 : "");
  l(a.o) && E(a.o, "play");
}
;var Kd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Ld(a) {
  if (Md) {
    Md = !1;
    var b = k.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Ld(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) {
        throw Md = !0, Error();
      }
    }
  }
  return a.match(Kd);
}
var Md = L;
function Nd(a, b) {
  for (var c = a.split("&"), d = 0;d < c.length;d++) {
    var e = c[d].indexOf("="), f = null, h = null;
    0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
    b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
  }
}
;function X(a) {
  V.call(this);
  this.gb = new Yb;
  this.S = a || null;
  this.u = !1;
  this.O = this.a = null;
  this.j = this.ga = "";
  this.b = this.ea = this.f = this.V = !1;
  this.v = 0;
  this.m = null;
  this.Ea = Od;
  this.ha = this.hb = !1;
}
t(X, V);
var Od = "", Qd = /^https?$/i, Rd = ["POST", "PUT"], Sd = [];
function Td(a, b, c, d) {
  var e = new X;
  Sd.push(e);
  b && e.C.add("complete", b, !1, void 0, void 0);
  e.C.add("ready", e.lb, !0, void 0, void 0);
  e.send(a, c, d, void 0);
}
g = X.prototype;
g.lb = function() {
  z(this);
  Fb(Sd, this);
};
g.send = function(a, b, c, d) {
  if (this.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.ga + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.ga = a;
  this.j = "";
  this.V = !1;
  this.u = !0;
  this.a = this.S ? Xb(this.S) : Xb(Ub);
  this.O = this.S ? kb(this.S) : kb(Ub);
  this.a.onreadystatechange = q(this.Va, this);
  try {
    this.ea = !0, this.a.open(b, String(a), !0), this.ea = !1;
  } catch (e) {
    Ud(this, e);
    return;
  }
  a = c || "";
  var f = this.gb.clone();
  d && cc(d, function(a, b) {
    f.set(b, a);
  });
  d = Cb(f.getKeys());
  c = k.FormData && a instanceof k.FormData;
  !Eb(Rd, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.a.setRequestHeader(b, a);
  }, this);
  this.Ea && (this.a.responseType = this.Ea);
  "withCredentials" in this.a && (this.a.withCredentials = this.hb);
  try {
    Vd(this), 0 < this.v && ((this.ha = Wd(this.a)) ? (this.a.timeout = this.v, this.a.ontimeout = q(this.cb, this)) : this.m = Ed(this.cb, this.v, this)), this.f = !0, this.a.send(a), this.f = !1;
  } catch (h) {
    Ud(this, h);
  }
};
function Wd(a) {
  return J && M(9) && ga(a.timeout) && l(a.ontimeout);
}
function Db(a) {
  return "content-type" == a.toLowerCase();
}
g.cb = function() {
  "undefined" != typeof aa && this.a && (this.j = "Timed out after " + this.v + "ms, aborting", this.dispatchEvent("timeout"), this.a && this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Xd(this)));
};
function Ud(a, b) {
  a.u = !1;
  a.a && (a.b = !0, a.a.abort(), a.b = !1);
  a.j = b;
  Yd(a);
  Xd(a);
}
function Yd(a) {
  a.V || (a.V = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.R = function() {
  this.a && (this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1), Xd(this, !0));
  X.fa.R.call(this);
};
g.Va = function() {
  this.i || (this.ea || this.f || this.b ? Zd(this) : this.Db());
};
g.Db = function() {
  Zd(this);
};
function Zd(a) {
  if (a.u && "undefined" != typeof aa && (!a.O[1] || 4 != $d(a) || 2 != ae(a))) {
    if (a.f && 4 == $d(a)) {
      Ed(a.Va, 0, a);
    } else {
      if (a.dispatchEvent("readystatechange"), 4 == $d(a)) {
        a.u = !1;
        try {
          var b = ae(a), c;
          a: {
            switch(b) {
              case 200:
              ;
              case 201:
              ;
              case 202:
              ;
              case 204:
              ;
              case 206:
              ;
              case 304:
              ;
              case 1223:
                c = !0;
                break a;
              default:
                c = !1;
            }
          }
          var d;
          if (!(d = c)) {
            var e;
            if (e = 0 === b) {
              var f = Ld(String(a.ga))[1] || null;
              if (!f && self.location) {
                var h = self.location.protocol, f = h.substr(0, h.length - 1)
              }
              e = !Qd.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          if (d) {
            a.dispatchEvent("complete"), a.dispatchEvent("success");
          } else {
            var m;
            try {
              m = 2 < $d(a) ? a.a.statusText : "";
            } catch (n) {
              m = "";
            }
            a.j = m + " [" + ae(a) + "]";
            Yd(a);
          }
        } finally {
          Xd(a);
        }
      }
    }
  }
}
function Xd(a, b) {
  if (a.a) {
    Vd(a);
    var c = a.a, d = a.O[0] ? ba : null;
    a.a = null;
    a.O = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function Vd(a) {
  a.a && a.ha && (a.a.ontimeout = null);
  ga(a.m) && (k.clearTimeout(a.m), a.m = null);
}
function $d(a) {
  return a.a ? a.a.readyState : 0;
}
function ae(a) {
  try {
    return 2 < $d(a) ? a.a.status : -1;
  } catch (b) {
    return -1;
  }
}
function be(a) {
  try {
    return a.a ? a.a.responseXML : null;
  } catch (b) {
    return null;
  }
}
function Y(a) {
  if (a.a) {
    return Va(a.a.responseText);
  }
}
;function ce() {
  return {query:{filtered:{filter:{bool:{must:[]}}}}, sort:{}};
}
function de(a) {
  var b = {geo_shape:{}};
  b.geo_shape.geometry = {relation:"intersects", shape:{type:"polygon", coordinates:[a]}};
  return b;
}
function ee(a) {
  for (var b = [], c = {bool:{should:b}}, d = 0;d < a.length;d++) {
    var e = a[d], f = {term:{}};
    f.term[e.key] = e.value.toLowerCase();
    b.push(f);
  }
  return c;
}
function fe(a) {
  var b = {range:{}};
  b.range.time = {gte:a[0], lte:a[1]};
  return b;
}
function ge(a, b) {
  var c = pa + "/map/_mget", d = JSON.stringify({ids:a});
  Td(c, b, "POST", d);
}
function he(a, b) {
  for (var c = [], d = {query:{filtered:{filter:{bool:{should:c}}}}}, e = 0, f = b.length;e < f;e++) {
    var h = {term:{}};
    h.term[a] = b[e];
    c.push(h);
  }
  return d;
}
;function ie(a, b, c, d) {
  var e = l(c) ? "webgl" : "canvas", f = l(d) ? d : !1;
  Td(b, q(function(c) {
    200 != ae(c.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    c = be(c.target);
    var d = xc(c, function(a) {
      return 1 == a.nodeType && "IMAGE_PROPERTIES" == a.tagName;
    });
    c = parseInt(d.getAttribute("WIDTH"), 0);
    d = parseInt(d.getAttribute("HEIGHT"), 0);
    je(this, b.substring(0, b.lastIndexOf("/") + 1), d, c, a, e, f);
  }, this), "GET");
  V.call(this);
}
t(ie, V);
function je(a, b, c, d, e, f, h) {
  a.f = c;
  a.j = d;
  var m = new ol.proj.Projection({code:"ZOOMIFY", units:"pixels", extent:[0, 0, d, c]});
  a.m = new ol.source.Zoomify({url:b, size:[d, c], crossOrigin:"*"});
  b = new ol.View({projection:m, center:[d / 2, -c / 2], zoom:1, maxZoom:9});
  a.b = new ol.layer.Tile({source:a.m});
  c = [new ol.control.FullScreen, new ol.control.Zoom];
  h && c.push(new ol.control.OverviewMap({collapsed:!1, layers:[a.b]}));
  a.a = new ol.Map({layers:[a.b], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), controls:c, renderer:f, target:e, view:b});
  a.a.addControl(new ol.control.ZoomToExtent({extent:b.calculateExtent(a.a.getSize())}));
  a.dispatchEvent(new B("loadend", {}));
}
ie.prototype.getMap = function() {
  return this.a;
};
ie.prototype.getHeight = function() {
  return parseInt(this.f, 0);
};
ie.prototype.getWidth = function() {
  return parseInt(this.j, 0);
};
function ke(a, b) {
  ie.call(this, a, b);
}
t(ke, ie);
function Z(a, b) {
  this.j = this.v = this.f = "";
  this.m = null;
  this.H = this.b = "";
  this.i = !1;
  var c;
  a instanceof Z ? (this.i = l(b) ? b : a.i, le(this, a.f), this.v = a.v, this.j = a.j, me(this, a.m), this.b = a.b, ne(this, a.a.clone()), this.H = a.H) : a && (c = Ld(String(a))) ? (this.i = !!b, le(this, c[1] || "", !0), this.v = oe(c[2] || ""), this.j = oe(c[3] || "", !0), me(this, c[4]), this.b = oe(c[5] || "", !0), ne(this, c[6] || "", !0), this.H = oe(c[7] || "")) : (this.i = !!b, this.a = new pe(null, 0, this.i));
}
Z.prototype.toString = function() {
  var a = [], b = this.f;
  b && a.push(qe(b, re, !0), ":");
  if (b = this.j) {
    a.push("//");
    var c = this.v;
    c && a.push(qe(c, re, !0), "@");
    a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    b = this.m;
    null != b && a.push(":", String(b));
  }
  if (b = this.b) {
    this.j && "/" != b.charAt(0) && a.push("/"), a.push(qe(b, "/" == b.charAt(0) ? se : te, !0));
  }
  (b = this.a.toString()) && a.push("?", b);
  (b = this.H) && a.push("#", qe(b, ue));
  return a.join("");
};
Z.prototype.clone = function() {
  return new Z(this);
};
function le(a, b, c) {
  a.f = c ? oe(b, !0) : b;
  a.f && (a.f = a.f.replace(/:$/, ""));
}
function me(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.m = b;
  } else {
    a.m = null;
  }
}
function ne(a, b, c) {
  b instanceof pe ? (a.a = b, ve(a.a, a.i)) : (c || (b = qe(b, we)), a.a = new pe(b, 0, a.i));
}
function xe(a) {
  return a.a;
}
function oe(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function qe(a, b, c) {
  return p(a) ? (a = encodeURI(a).replace(b, ye), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function ye(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var re = /[#\/\?@]/g, te = /[\#\?:]/g, se = /[\#\?]/g, we = /[\#\?@]/g, ue = /#/g;
function pe(a, b, c) {
  this.b = this.a = null;
  this.i = a || null;
  this.f = !!c;
}
function ze(a) {
  a.a || (a.a = new Yb, a.b = 0, a.i && Nd(a.i, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
g = pe.prototype;
g.va = function() {
  ze(this);
  return this.b;
};
g.add = function(a, b) {
  ze(this);
  this.i = null;
  a = Ae(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b++;
  return this;
};
g.remove = function(a) {
  ze(this);
  a = Ae(this, a);
  return ac(this.a.g, a) ? (this.i = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1;
};
g.clear = function() {
  this.a = this.i = null;
  this.b = 0;
};
g.isEmpty = function() {
  ze(this);
  return 0 == this.b;
};
function Be(a, b) {
  ze(a);
  b = Ae(a, b);
  return ac(a.a.g, b);
}
g.getKeys = function() {
  ze(this);
  for (var a = this.a.I(), b = this.a.getKeys(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
g.I = function(a) {
  ze(this);
  var b = [];
  if (p(a)) {
    Be(this, a) && (b = Gb(b, this.a.get(Ae(this, a))));
  } else {
    a = this.a.I();
    for (var c = 0;c < a.length;c++) {
      b = Gb(b, a[c]);
    }
  }
  return b;
};
g.set = function(a, b) {
  ze(this);
  this.i = null;
  a = Ae(this, a);
  Be(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b++;
  return this;
};
g.get = function(a, b) {
  var c = a ? this.I(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
g.toString = function() {
  if (this.i) {
    return this.i;
  }
  if (!this.a) {
    return "";
  }
  for (var a = [], b = this.a.getKeys(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.I(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.i = a.join("&");
};
g.clone = function() {
  var a = new pe;
  a.i = this.i;
  this.a && (a.a = this.a.clone(), a.b = this.b);
  return a;
};
function Ae(a, b) {
  var c = String(b);
  a.f && (c = c.toLowerCase());
  return c;
}
function ve(a, b) {
  b && !a.f && (ze(a), a.i = null, a.a.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.i = null, this.a.set(Ae(this, e), Hb(a)), this.b += a.length));
  }, a));
  a.f = b;
}
;x.Nb = function() {
  $(window);
};
x.Y = function(a) {
  var b = wd(N("spatialsearch-container")), c = wd(N("layermanagement-container")), d = wd(N("mapdiv")), c = d.width - c.width - 30, b = a.getCoordinateFromPixel([0 + b.width + 30, d.height - 25 - 30]);
  a = a.getCoordinateFromPixel([c, 35]);
  return [b[0], b[1], a[0], a[1]];
};
x.Ia = function() {
  navigator.cookieEnabled || alert("For proper working of the virtuel map forum 2.0 please activate cookies in your browser");
};
x.La = function(a) {
  return xe(l(a) ? new Z(a) : new Z(window.location.href));
};
x.Ma = function(a, b) {
  return a = F(a, b) ? a : x.Ma(wc(a), b);
};
x.c = function(a) {
  if (!l(a)) {
    return "";
  }
  try {
    if (l(window.lang_dictionary)) {
      return window.lang_dictionary[a];
    }
  } catch (b) {
    return "";
  }
};
x.yb = function(a) {
  return [[a[0], a[1]], [a[0], a[3]], [a[2], a[3]], [a[2], a[1]], [a[0], a[1]]];
};
x.getQueryParam = function(a, b) {
  return l(b) ? x.La(b).get(a) : x.La().get(a);
};
x.ob = function() {
  return ib.get("vk2-welcomepage");
};
x.nb = function(a, b, c, d) {
  var e = new yd("vk2-overlay-modal", document.body, !0);
  e.open(a, l(d) ? d : "");
  Dd(e, "<p>" + b + '</p><br><button type="button" class="btn btn-primary" id="confirm-dialog-btn-yes">' + x.c("yes") + '</button><button type="button" class="btn btn-primary"id="confirm-dialog-btn-no">' + x.c("no") + "</button>");
  var f = l(c) ? c : function() {
  };
  T(N("confirm-dialog-btn-yes"), "click", function() {
    f();
    e.close();
  });
  T(N("confirm-dialog-btn-no"), "click", function() {
    e.close();
  });
};
x.Pb = function() {
  return l(ib.get("auth_tkt")) ? !0 : !1;
};
x.Ra = function(a) {
  a = O(a, (l(void 0) ? void 0 : document.body).body);
  for (var b = 0;b < a.length;b++) {
    T(a[b], "click", function(a) {
      a.preventDefault();
      try {
        var b = new yd("vk2-overlay-modal", document.body, !0), e = this.title, f = this.getAttribute("data-classes");
        b.open(e, f, {href:this.href, classes:f});
        a.preventDefault();
      } catch (h) {
      }
    });
  }
};
x.round = function(a, b) {
  var c = l(b) ? Math.pow(10, Math.ceil(b)) : Math.pow(10, 2);
  return Math.round(a * c) / c;
};
x.Eb = function(a) {
  a = P("ol-overlaycontainer-stopevent", N(a));
  for (var b = 0;b < a.children.length;b++) {
    var c = a.children[b];
    if (F(c.children[0], "ol-has-tooltip")) {
      for (var c = O("ol-has-tooltip", c), d = 0;d < c.length;d++) {
        c[d].setAttribute("title", c[d].children[0].innerHTML);
      }
    }
  }
};
x.Qb = function(a, b, c) {
  var d = new X;
  U(d, "success", function(a) {
    a = a.target;
    l(b) && b(a);
    z(a);
  });
  U(d, "error", function(a) {
    a = a.target;
    l(c) && c(a);
  });
  d.send(a);
};
x.bb = function(a, b) {
  ib.set(a, b);
};
r("vk2.utils.setCookie", x.bb);
x.Rb = function() {
};
x.Sb = function(a, b) {
  var c = Q("div", {"class":"georef-point-container alert alert-warning", style:"display:none;"});
  a.appendChild(c);
  c.innerHTML = "+" + b + " " + x.c("georef_points");
  $(c).fadeIn(1E3).effect("puff", {}, 3E3, function() {
    c.innerHTML = "";
  });
};
x.Jb = function(a) {
  return [Math.round(a[0]), Math.round(-1 * a[1])];
};
x.Kb = function(a) {
  return [Math.round(a[0]), Math.round(-1 * a[1])];
};
function Ce(a, b) {
  function c() {
    for (var a = De(b), c = 0;c < a.length;c++) {
      a[c].setVisible(!1);
    }
  }
  var d = Q("div", {"class":"deactivate-map-col-control"});
  a.appendChild(d);
  var e = Q("a", {href:"#", innerHTML:"D"});
  d.appendChild(e);
  T(e, "click", c);
  T(e, "touchstart", c);
}
;function Ee(a, b) {
  var c = Q("div", {"class":"dyn-vis-control"}), d = Q("div", {"class":"content", style:"display:none;"});
  c.appendChild(d);
  a.appendChild(c);
  var e = Q("div", {"class":"feedback"});
  d.appendChild(e);
  e = new Fd(c, e);
  Fe(this, d, e, b);
  Ge(this, c, d, e);
}
function Ge(a, b, c, d) {
  var e = Q("a", {innerHTML:"o", "class":"open-dyn-vis"});
  b.insertBefore(e, b.childNodes[0] || null);
  T(e, "click", function(a) {
    a.preventDefault();
    $(c).slideToggle();
    F(a.currentTarget, "open") ? (Jd(d), E(a.currentTarget, "open")) : D(a.currentTarget, "open");
  }, void 0, a);
}
function Fe(a, b, c, d) {
  var e = Q("div", {"class":"start-container"});
  b.appendChild(e);
  var f = Q("a", {href:"#dynamic-start", title:x.c("dynMapVisStart"), innerHTML:"Start"});
  e.appendChild(f);
  T(f, "click", function(a) {
    a.preventDefault();
    a = De(d);
    c.u || (c.u = !0, a = Id(a, d), Hd(c, a), l(c.o) && !F(c.o, "play") && D(c.o, "play"));
  }, void 0, a);
  e = Q("span", {role:"tooltip", innerHTML:x.c("dynMapVisStart")});
  f.appendChild(e);
  f = Q("div", {"class":"stop-container"});
  b.appendChild(f);
  b = Q("a", {href:"#dynamic-stop", title:x.c("dynMapVisStop"), innerHTML:"Stop"});
  f.appendChild(b);
  T(b, "click", function(a) {
    a.preventDefault();
    Jd(c);
  }, void 0, a);
  a = Q("span", {role:"tooltip", innerHTML:x.c("dynMapVisStop")});
  b.appendChild(a);
}
;var He = {brightness:1, contrast:1, hue:0, saturation:0};
function Ie(a) {
  function b(a) {
    a.preventDefault();
    F(a.target, "active") ? (E(a.target, "active"), $(h).fadeOut().removeClass("open")) : (D(a.target, "active"), $(h).fadeIn().addClass("open"));
  }
  function c(a) {
    a = a.glContext;
    var b = $("canvas.ol-unselectable")[0];
    if (void 0 !== a && null !== a) {
      var c = a.getGL();
      if (n) {
        glif.reset();
        for (var d in m) {
          glif.addFilter(d, m[d]);
        }
        n = !1;
      }
      glif.apply(c, b);
      a.useProgram(void 0);
    }
  }
  a = a || {};
  var d = Q("a", {"class":"ol-has-tooltip", href:"#image-manipulation", innerHTML:"I"}), e = Q("span", {role:"tooltip", innerHTML:x.c("openImagemanipulation")}), f = Q("div", {"class":"image-manipulation ol-unselectable"}), h = Q("div", {"class":"slider-container", style:"display:none;"});
  d.appendChild(e);
  f.appendChild(d);
  f.appendChild(h);
  var m = ab(He), n = !1, w = !1, y = q(function(a, b, d, e, f) {
    f = Q("div", {"class":"slider " + a, title:l("opt_title") ? f : "", "data-type":d});
    var h = l(e) ? e[1] : 0, A = l(e) ? e[2] : 100, y = l(e) ? e[3] : 1, G = l(e) ? e[0] : 100, Pd = q(function(a, e) {
      var f = e.value, y = this.getMap().getLayers().getArray()[0];
      w || (y.on("postcompose", c), w = !0);
      "vertical" == b ? (La.style.top = 100 - (f - h) / (A - h) * 100 + "%", La.innerHTML = f + "%") : (La.style.left = (f - h) / (A - h) * 100 + "%", La.innerHTML = f, m[d] = f, n = !0, y.changed());
    }, this);
    $(f).slider({min:h, max:A, value:G, animate:"slow", orientation:b, step:y, slide:Pd, change:Pd});
    var La = Q("div", {"class":"tooltip value " + a, innerHTML:l(e) ? e[0] : ""});
    f.appendChild(La);
    return f;
  }, this), e = y("slider-contrast", "horizontal", "contrast", [1, 0, 2, .01], x.c("contrast")), A = y("slider-saturation", "horizontal", "saturation", [0, -1, 1, .01], x.c("saturation")), G = y("slider-brightness", "horizontal", "brightness", [1, 0, 2, .1], x.c("brightness")), y = y("slider-hue", "horizontal", "hue", [0, -180, 180, 5], x.c("hue"));
  h.appendChild(e);
  h.appendChild(A);
  h.appendChild(G);
  h.appendChild(y);
  e = Q("button", {"class":"reset-btn", title:x.c("reset"), innerHTML:"Reset"});
  h.appendChild(e);
  T(e, "click", function() {
    this.getMap().getLayers().getArray()[0].un("postcompose", c);
    w = !1;
    for (var a = O("slider", h), b = 0;b < a.length;b++) {
      var d = a[b], e = d.getAttribute("data-type"), e = He[e];
      $(d).slider("value", e);
    }
  }, void 0, this);
  T(d, "click", b);
  T(d, "touchstart", b);
  ol.control.Control.call(this, {element:f, target:a.target});
}
ol.inherits(Ie, ol.control.Control);
function Je(a) {
  a = a || {};
  var b = l(a.spyLayer) ? a.spyLayer : new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM({attribution:void 0})}), c = l(a.radius) ? parseInt(a.radius, 0) : 75, d = null, e = Q("a", {"class":"ol-has-tooltip", href:"#layerspy", innerHTML:"L"}), f = Q("div", {"class":"ol-layerspy ol-unselectable"}), h = Q("span", {role:"tooltip", innerHTML:x.c("layerspy")});
  f.appendChild(e);
  e.appendChild(h);
  var m = {Ya:function(a) {
    a.context.restore();
  }, Za:function(a) {
    var b = a.context;
    a = a.frameState.pixelRatio;
    b.save();
    b.beginPath();
    d && (b.arc(d[0] * a, d[1] * a, c * a, 0, 2 * Math.PI), b.lineWidth = 5 * a, b.strokeStyle = "rgba(0,0,0,0.5)", b.stroke());
    b.clip();
  }, Ta:function(a) {
    d = this.getMap().getEventPixel(a.K);
    this.getMap().render();
  }, Ua:function() {
    d = null;
    this.getMap().render();
  }, Pa:function(a) {
    89 === a.keyCode ? (c = Math.min(c + 5, 150), this.getMap().render()) : 88 === a.keyCode && (c = Math.max(c - 5, 25), this.getMap().render());
  }, Ha:function(a) {
    a.target.getArray()[a.target.getLength() - 1] !== b && (this.getMap().removeLayer(b), this.getMap().addLayer(b));
  }}, n = null, w = q(function(a, b, c) {
    this.getMap().addLayer(b);
    b.on("precompose", c.Za, this);
    b.on("postcompose", c.Ya, this);
    T(this.getMap().getViewport(), "mousemove", c.Ta, void 0, this);
    T(this.getMap().getViewport(), "mouseout", c.Ua, void 0, this);
    D(a, "active");
    n = n || new ld(document);
    T(n, "key", c.Pa, void 0, this);
    this.getMap().getLayers().on("add", c.Ha, this);
  }, this), y = q(function(a, b, c) {
    b.un("precompose", c.Za, this);
    b.un("postcompose", c.Ya, this);
    Qc(this.getMap().getViewport(), "mousemove", c.Ta, void 0, this);
    Qc(this.getMap().getViewport(), "mouseout", c.Ua, void 0, this);
    this.getMap().removeLayer(b);
    E(a, "active");
    Qc(n, "key", c.Pa, void 0, this);
    this.getMap().getLayers().un("add", c.Ha, this);
  }, this);
  T(e, "click", q(function(a) {
    a.preventDefault();
    F(e, "active") ? y(e, b, m) : w(e, b, m);
  }, this));
  ol.control.Control.call(this, {element:f, target:a.target});
}
ol.inherits(Je, ol.control.Control);
function Ke(a) {
  function b(a) {
    var b = this.getMap();
    a = ol.proj.transform(b.getEventCoordinate(a), u.projection, "EPSG:4326");
    e.innerHTML = "Lon: " + x.round(a[0], 3) + ", Lat: " + x.round(a[1], 3);
  }
  a = a || {};
  var c = document.createElement("a");
  c.href = "#mouse-position";
  c.innerHTML = "M";
  c.className = "ol-has-tooltip";
  var d = Q("span", {role:"tooltip", innerHTML:x.c("mouseposition")});
  c.appendChild(d);
  var e = void 0, d = q(function(a) {
    a.preventDefault();
    var c = !Ob(a.target), d = this.getMap();
    ol.proj.transform(d.getEventCoordinate(a), u.projection, "EPSG:4326");
    var n = a.target;
    Ob(n) ? Qb(n) : Pb(n);
    void 0 === e ? (n = d.getViewport(), e = Q("div", {"class":"mouse-position-box", innerHTML:"Hallo"}), n.appendChild(e)) : e.innerHTML = "";
    c ? T(d.getViewport(), "mousemove", b, void 0, this) : Qc(d.getViewport(), "mousemove", b, void 0, this);
    b.call(this, [a]);
    a = e;
    Ob(a) ? Qb(a) : Pb(a);
  }, this);
  T(c, "click", d);
  T(c, "touchstart", d);
  d = document.createElement("div");
  d.className = "mouse-position ol-unselectable";
  d.appendChild(c);
  ol.control.Control.call(this, {element:d, target:a.target});
}
ol.inherits(Ke, ol.control.Control);
function Le(a, b, c) {
  $(a).hover(function() {
    F(this, "hover") || (c.getSource().clear(), c.getSource().addFeature(b), D(this, "hover"));
  }, function() {
    F(this, "hover") && (c.getSource().clear(), E(this, "hover"));
  });
}
;function Me(a) {
  this.id_ = l(a.id) ? a.id : void 0;
  this.time_ = a.time;
  this.title_ = l(a.title) ? a.title : void 0;
  this.thumb_ = l(a.thumbnail) ? a.thumbnail : Fa;
  this.allowManage_ = !0;
  for (var b = [], c = 0;c < Ga.length;c++) {
    b.push(a.tms.replace("{s}", Ga[c]) + "/{z}/{x}/{-y}.png");
  }
  c = Ne(this, a.clip);
  b = new ol.layer.Tile({extent:a.clip.getExtent(), source:new ol.source.XYZ({maxZoom:15, urls:b})});
  c = new ol.layer.Vector({source:new ol.source.Vector({features:[c]}), style:function() {
    return [x.l.kb];
  }});
  a.layers = [b, c];
  ol.layer.Group.call(this, a);
}
ol.inherits(Me, ol.layer.Group);
function Ne(a, b) {
  var c = new ol.Feature(b);
  c.setProperties({objectid:a.id_, time:a.time_, title:a.title_});
  c.setId(a.id_);
  return c;
}
Me.prototype.getTime = function() {
  return this.time_;
};
Me.prototype.la = function() {
  return this.allowManage_;
};
Me.prototype.getId = function() {
  return this.id_;
};
function Oe(a, b) {
  var c = l(a.aa) ? a.aa : void 0, d = l(a.projection) ? a.projection : "EPSG:900913", e = l(a.eb) ? a.eb : void 0, f = l(a.Qa) ? a.Qa : void 0, h = void 0 === c ? void 0 : c.getExtent();
  a.source = new ol.source.TileWMS({url:e, params:{LAYERS:f, VERSION:"1.1.1"}, projection:d, extent:h});
  a.preload = Infinity;
  d = new ol.layer.Tile(a);
  d.set("wms_url", e);
  d.set("layerid", f);
  d.xb = q(function(a) {
    for (var b = [], d = c.getCoordinates()[0], e = 0;e < d.length;e++) {
      b.push(a.getPixelFromCoordinate(d[e]));
    }
    return b;
  }, d);
  d.mb = function(a, b, c) {
    c.beginPath();
    c.moveTo(a[0][0] * b, a[0][1] * b);
    for (var d = 1;d < a.length;d++) {
      c.lineTo(a[d][0] * b, a[d][1] * b);
    }
    c.closePath();
  };
  l(c) && (d.on("precompose", function(a) {
    var c = a.context, d = this.xb(b);
    c.save();
    this.mb(d, a.frameState.pixelRatio, c);
    c.clip();
  }, d), d.on("postcompose", function(a) {
    a.context.restore();
  }));
  return d;
}
;function Pe(a) {
  this.m = l(a.projection) ? a.projection : "EPSG:900913";
  this.ha = l(a.Bb) ? a.Bb : 20;
  this.Aa = void 0;
  this.j = new ol.Collection;
  this.O = "title";
  this.V = "ascending";
  this.b = 0;
  this.f = void 0;
  this.a = {X:l(a.time) ? a.time[0] : 1868, sa:l(a.time) ? a.time[1] : 1945};
  this.g = a.map;
  this.v = [];
  this.S = !0;
  this.A();
  V.call(this);
}
t(Pe, V);
Pe.prototype.A = function() {
  this.g.on("moveend", function() {
    var a = x.Y(this.g);
    l(this.Aa) && ol.extent.equals(this.Aa, a) || this.ra();
  }, this);
};
function Qe(a, b, c) {
  var d = [a.a.X + "-01-01", a.a.sa + "-01-01"], e = "ascending" === a.V ? "asc" : "desc";
  if (a.S) {
    b = x.yb(ol.proj.transformExtent(b, c, qa));
    c = a.O;
    a = a.v;
    var f = [], h = ce();
    f.push(fe(d));
    f.push(de(b));
    f.push(ee(a));
    f.push({term:{georeference:!0}});
    h.query.filtered.filter.bool.must = f;
    h.sort[c] = {order:e};
    return h;
  }
  b = a.O;
  a = a.v;
  c = [];
  f = ce();
  c.push(fe(d));
  c.push(ee(a));
  c.push({term:{georeference:!1}});
  f.query.filtered.filter.bool.must = c;
  f.sort[b] = {order:e};
  return f;
}
Pe.prototype.ga = function(a) {
  this.dispatchEvent(new B("refresh", {features:a, totalFeatureCount:this.f}));
};
Pe.prototype.ea = function(a) {
  this.dispatchEvent(new B("paginate", {features:a, totalFeatureCount:this.f}));
};
function Re(a, b, c, d) {
  b = Qe(a, b, c);
  c = pa + "/_search?from=" + a.b + "&size=" + a.ha;
  var e = new X;
  U(e, "success", function(a) {
    a = a.target;
    if (Y(a)) {
      var b = Y(a);
      this.f = b.hits.total;
      z(a);
      a = Ja(b.hits.hits);
      this.j.extend(a);
      this.b += a.length;
      d.call(this, a);
    } else {
      console.log("Response is empty");
    }
  }, !1, a);
  e.send(c, "POST", JSON.stringify(b));
}
Pe.prototype.ra = function() {
  var a = x.Y(this.g);
  Se(this, a, this.m);
  this.Aa = Hb(a);
};
function Se(a, b, c) {
  a.j.clear();
  a.b = 0;
  Re(a, b, c, a.ga);
}
;function Te(a, b, c) {
  this.o = p(a) ? N(a) : a;
  this.a = new Pe({projection:"EPSG:900913", map:b});
  T(this.a, "refresh", q(this.v, this));
  T(this.a, "paginate", q(this.ra, this));
  this.j = ["time", "title", "georeference"];
  this.f = new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [x.l.jb];
  }});
  b.addLayer(this.f);
  Ue(this, this.o);
  Ve(this, this.o);
  We(this);
  Xe(this);
  Ye(this, c);
  V.call(this);
}
t(Te, V);
function Ue(a, b) {
  var c = Q("div", {"class":"mapsearch-container"});
  b.appendChild(c);
  var d = Q("div", {"class":"panel panel-default searchTablePanel"});
  c.appendChild(d);
  c = Q("div", {"class":"panel-heading"});
  d.appendChild(c);
  a.m = Q("div", {"class":"content"});
  c.appendChild(a.m);
  c = Q("div", {"class":"panel-body"});
  d.appendChild(c);
  d = Q("div", {"class":"mapsearch-list"});
  c.appendChild(d);
  c = Q("div", {"class":"list-header"});
  d.appendChild(c);
  for (var e = 0;e < a.j.length;e++) {
    var f = a.j[e], h = Q("div", {"class":"inner-col " + f}), f = Q("div", {"data-type":f, "class":"sort-element " + f, innerHTML:x.c(f) + ' <span class="caret caret-reversed"></span>'});
    h.appendChild(f);
    c.appendChild(h);
  }
  a.b = Q("ul", {id:"mapsearch-contentlist", "class":"mapsearch-contentlist"});
  d.appendChild(a.b);
}
function Xe(a) {
  l(a.b) && T(a.b, "click", function(a) {
    a.preventDefault();
    var c = x.Ma(a.K.target, "mapsearch-record"), d;
    this.a.j.forEach(function(a) {
      a.get("id") == c.id && (d = a);
    });
    this.dispatchEvent(new B("click-record", {feature:d}));
  }, void 0, a);
}
function Ve(a, b) {
  for (var c = O("sort-element", b), d = 0;d < c.length;d++) {
    T(c[d], "click", function(a) {
      a = a.target.getAttribute("data-type");
      for (var b = P("sort-element " + a), c = F(b, "ascending") ? "descending" : "ascending", d = O("sort-element"), n = 0;n < d.length;n++) {
        E(d[n], "descending"), E(d[n], "ascending");
      }
      D(b, c);
      this.a.O = a;
      this.a.V = c;
      a = this.a;
      Se(a, x.Y(a.g), a.m);
    }, void 0, a);
  }
}
function We(a) {
  var b = !1;
  l(a.b) && T(a.b, "scroll", function(a) {
    if (!b) {
      b = !0;
      a = a.currentTarget;
      if (a.offsetHeight + a.scrollTop >= a.scrollHeight && (a = this.a, !(a.j.getLength() >= a.f) && (a = this.a, a.b < a.f && 500 > a.b))) {
        var d = x.Y(a.g);
        Re(a, d, a.m, a.ea);
      }
      b = !1;
    }
  }, void 0, a);
}
function Ye(a, b) {
  T(b, "facet-change", function(a) {
    var b = this.a;
    a = a.target;
    b.S = a.georeference;
    b.v = a.facets;
    b.ra();
  }, void 0, a);
}
function Ze(a, b) {
  for (var c = 0;c < b.length;c++) {
    var d, e = b[c];
    d = Q("li", {"class":"mapsearch-record type " + e.get("maptype"), id:e.get("id")});
    var f = Q("span", {"class":"data-col time", innerHTML:parseInt(e.get("time"), 0)});
    d.appendChild(f);
    f = Q("span", {"class":"data-col title", innerHTML:e.get("title")});
    d.appendChild(f);
    f = Q("span", {"class":"data-col time", innerHTML:1});
    d.appendChild(f);
    f = Q("div", {"class":"view-item"});
    d.appendChild(f);
    var h = Q("a", {"class":"thumbnail", href:"#"});
    f.appendChild(h);
    var m = Q("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:e.get("thumb")});
    h.appendChild(m);
    h = Q("div", {"class":"overview"});
    f.appendChild(h);
    f = Q("h2", {innerHTML:e.get("title")});
    h.appendChild(f);
    f = Q("p", {"class":"details"});
    h.appendChild(f);
    h = Q("div", {"class":"timestamp", innerHTML:x.c("timestamp") + " " + e.get("time")});
    f.appendChild(h);
    h = Q("div", {"class":"scale", innerHTML:x.c("scale") + " 1:25.000"});
    f.appendChild(h);
    e.get("georeference") || (e = Q("div", {"class":"georeference", innerHTML:x.c("not_georeference")}), f.appendChild(e));
    a.b.appendChild(d);
    l(a.f) && Le(d, b[c], a.f);
  }
}
Te.prototype.v = function(a) {
  $e(this, a.target.totalFeatureCount);
  this.b.innerHTML = "";
  Ze(this, a.target.features);
};
Te.prototype.ra = function(a) {
  $e(this, a.target.Ub);
  Ze(this, a.target.features);
};
function $e(a, b) {
  a.m.innerHTML = 0 < b ? b + " " + x.c("found_mtb") : x.c("found_no_maps");
}
;function af(a) {
  this.j = p(a) ? N(a) : a;
  bf(this, this.j);
  this.b = {};
  this.m = {placename:q(function(a) {
    this.b.hasOwnProperty(a) ? cf(this, this.b[a][0]) : df(this, a, q(function(a) {
      0 < a.length ? cf(this, a[0]) : alert("The choosen placename is unknown.");
    }, this));
  }, this)};
  ef(this);
  ff(this);
  V.call(this);
}
t(af, V);
function bf(a, b) {
  var c = Q("div", {"class":"gazetteersearch-container"});
  b.appendChild(c);
  var d = Q("div", {"class":"form-group"});
  c.appendChild(d);
  a.a = Q("input", {placeholder:x.c("gazetteer_placeholder"), type:"text", "class":"form-control gazetteersearch-input"});
  d.appendChild(a.a);
  a.f = Q("input", {value:x.c("gazetteer_submit"), type:"submit", "class":"form-control gazetteersearch-submit"});
  d.appendChild(a.f);
}
function ef(a) {
  $(a.a).autocomplete({source:q(function(a, c) {
    df(this, a.term, c);
  }, a), delay:300, minLength:3, autoFocus:!0, select:q(function(a, c) {
    cf(this, c.item);
  }, a), open:function() {
    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
  }, close:function() {
    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
  }});
}
function ff(a) {
  var b = q(function(a) {
    this.m.placename(-1 < a.indexOf(",") ? a.split(",")[0] : a);
  }, a);
  T(a.a, "keydown", function(a) {
    13 === a.keyCode && b(this.a.value);
  }, void 0, a);
  T(a.f, "click", function() {
    b(this.a.value);
  }, void 0, a);
}
function df(a, b, c) {
  D(a.a, "loading");
  Td("https://search.mapzen.com/v1/autocomplete?api_key=search-53q8sJs&text=" + b + "&focus.point.lat=51&focus.point.lon=13", q(function(a) {
    a = a.target;
    var e;
    if (Y(a)) {
      e = Y(a);
    } else {
      try {
        e = a.a ? a.a.responseText : "";
      } catch (f) {
        e = "";
      }
    }
    z(a);
    a = $.map(e.features, function(a) {
      return {label:a.properties.label, value:a.properties.name, lonlat:{x:a.geometry.coordinates[0], y:a.geometry.coordinates[1]}, type:a.properties.layer};
    });
    this.b[b] = a;
    c(a);
    F(this.a, "loading") && E(this.a, "loading");
  }, a), "GET");
}
function cf(a, b) {
  a.dispatchEvent(new B(gf, {location_type:b.type, lonlat:[b.lonlat.x, b.lonlat.y], srs:l(void 0) ? void 0 : "EPSG:4326"}));
}
var gf = "jumpto";
function hf(a, b, c) {
  var d = this.H = p(a) ? N(a) : a;
  a = Q("div", {"class":"spatialsearch-inner-container"});
  d.appendChild(a);
  d = Q("div", {"class":"spatialsearch-content-panel"});
  a.appendChild(d);
  a = Q("div", {"class":"header-container"});
  d.appendChild(a);
  this.i = Q("div", {"class":"content"});
  a.appendChild(this.i);
  this.a = Q("div", {"class":"body-container"});
  d.appendChild(this.a);
  this.b = new af(this.a);
  this.j = new Zc(this.a, Ea);
  a = this.a;
  c = new Yc(a, c);
  this.f = new Te(a, b, c);
}
;function jf(a, b, c) {
  this.a = p(a) ? N(a) : a;
  a = Q("div", {"class":"container"});
  this.a.appendChild(a);
  var d = Q("div", {"class":"row-metadata"});
  a.appendChild(d);
  a = Q("div", {"class":"col-md-8 col-lg-8 metdata-col"});
  d.appendChild(a);
  var e = Q("div", {"class":"col-md-4 col-lg-4 thumbnail-col"});
  d.appendChild(e);
  var f = c.description, d = Q("div", {"class":"description"});
  a.appendChild(d);
  f = Q("h3", {innerHTML:f});
  d.appendChild(f);
  d = Q("img", {"class":"thumbnail", src:c.thumb});
  e.appendChild(d);
  f = x.c("mdrecord_keyword");
  d = c.keywords;
  e = kf(a);
  f = Q("div", {"class":"label", innerHTML:f});
  e.appendChild(f);
  d = Q("div", {innerHTML:d});
  e.appendChild(d);
  for (e = 0;e < c["online-resources"].length;e++) {
    var f = x.c("mdrecord_onlineresource"), d = c["online-resources"][e].url, h = kf(a), f = Q("div", {"class":"label", innerHTML:f});
    h.appendChild(f);
    f = Q("div");
    h.appendChild(f);
    var h = new Z(d), m = !1;
    l(h.a.get("SERVICE")) && "wcs" == h.a.get("SERVICE").toLowerCase() && h.a.get("REQUEST") && "getcoverage" == h.a.get("REQUEST").toLowerCase() && (m = !0);
    ne(h, "", void 0);
    d = m ? Q("a", {target:"_blank", href:d, innerHTML:h.toString(), "class":"download"}) : Q("a", {target:"_blank", href:d, innerHTML:h.toString()});
    f.appendChild(d);
  }
  d = x.c("mdrecord_spatialresolution");
  c = c.denominator;
  e = kf(a);
  d = Q("div", {"class":"label", innerHTML:d});
  e.appendChild(d);
  d = Q("div");
  e.appendChild(d);
  e = Q("label", {innerHTML:""});
  d.appendChild(e);
  c = Q("span", {innerHTML:c});
  d.appendChild(c);
  b = Q("span", {"class":"unique-id metadata-content-row", innerHTML:'<div class="label">' + x.c("mdrecord_uniqueid") + "</div><div>" + b + "</div>"});
  a.appendChild(b);
}
function kf(a) {
  var b = Q("div", {"class":"metadata-content-row"});
  a.appendChild(b);
  return b;
}
;r("vk2.app.MapProfileApp", function(a) {
  var b = x.getQueryParam("objectid");
  null != b ? Td(pa + "/map/" + b, q(function(b) {
    if (b = Y(b.target)) {
      b = Ia(b._id, b._source), lf(b, a);
    }
  }, this)) : console.log("Could not identify objectid.");
});
function lf(a, b) {
  var c = a.getProperties();
  N(b.titleshortId).innerHTML = c.title;
  N(b.titlelongId).innerHTML = c.titlelong;
  N(b.linkToFotothekId).href = c.plink;
  if (ol.has.WEBGL) {
    d = new ie(b.zoomifyContainer, c.zoomify, !0), new jf(b.metadataContainer, a.getId(), c), T(d, "loadend", function() {
      d.getMap().addControl(new Ie);
    });
  } else {
    var d = new ie(b.zoomifyContainer, c.zoomify);
    new jf(b.metadataContainer, a.getId(), c);
  }
}
;x.h = {};
x.h.ua = function(a) {
  a = a.split("/");
  for (var b = "/", c = 0;c < a.length;c++) {
    "" !== a[c] && (b += a[c] + "/");
  }
  return b;
};
x.h.w = function() {
  var a = new Z(window.location.href), b = x.getQueryParam("L");
  return v ? Ca : a.b + "?" + Ca + "&L=" + (void 0 !== b && "" !== b ? b : 0);
};
x.h.wa = function(a) {
  new Z(window.location.href);
  return v ? ra + "&" + a : x.h.w() + "&" + ra + "&" + a;
};
x.h.tb = function(a) {
  new Z(window.location.href);
  return v ? ta + "&" + a : x.h.w() + "&" + ta + "&" + a;
};
x.h.sb = function(a) {
  new Z(window.location.href);
  return v ? sa + "&" + a : x.h.w() + "&" + sa + "&" + a;
};
x.h.vb = function() {
  new Z(window.location.href);
  return v ? xa : x.h.w() + "&" + xa;
};
x.h.ub = function() {
  new Z(window.location.href);
  return v ? ya : x.h.w() + "&" + ya;
};
x.h.qb = function(a) {
  new Z(window.location.href);
  return v ? wa + "&" + a : x.h.w() + "&" + wa + "&" + a;
};
x.h.rb = function() {
  new Z(window.location.href);
  return v ? Ba + "&undefined" : x.h.w() + "&" + Ba + "&undefined";
};
x.h.pb = function() {
  new Z(window.location.href);
  return v ? ua + "&undefined" : x.h.w() + "&" + ua + "&undefined";
};
x.h.ma = function(a, b) {
  var c = void 0 !== a ? "&objectid=" + a : void 0 !== b ? "&" + b : "", d = new Z(window.location.href);
  return v ? x.h.ua(d.b + "/" + Aa) + "?" + c : x.h.w() + "&" + Aa + c;
};
x.h.Na = function(a) {
  var b = new Z(window.location.href);
  return v ? x.h.ua(b.b + "/" + Da) + "?objectid=" + a : x.h.w() + "&" + Da + "&objectid=" + a;
};
x.h.wb = function() {
  var a = new Z(window.location.href);
  return v ? x.h.ua(a.b) + "/" + Ca : x.h.w();
};
r("vk2.app.GeoreferenceChooseApp", function(a) {
  mf(this, N(a.target), N(a.targetCount));
});
function nf(a, b, c) {
  void 0 !== a.hits && void 0 !== a.hits.total && (c.innerHTML = a.hits.total);
  if (void 0 !== a.hits && void 0 !== a.hits.hits && 0 < a.hits.hits.length) {
    b.innerHTML = "";
    c = Q("ul");
    b.appendChild(c);
    b = 0;
    for (var d = a.hits.hits.length;b < d;b++) {
      R(c, of(a.hits.hits[b]));
    }
  }
  $("body").scroll(function() {
    $(".lazy-image").zb();
  });
  $(".lazy-image").zb();
}
function mf(a, b, c) {
  var d = new X;
  U(d, "success", function(a) {
    a = a.target;
    var d = Y(a);
    nf(d, b, c);
    z(a);
  }, !1, a);
  U(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = pa + "/_search?size=2000";
  var e = he("georeference", [!1]);
  e.sort = {title:{order:"asc"}};
  d.send(a, "POST", JSON.stringify(e));
}
function of(a) {
  var b = a._source, c = a._id;
  a = b.maptype;
  var d = void 0 !== b.thumb ? b.thumb : "#", c = void 0 !== c ? x.h.ma(c) : "#", e = b.time;
  return Q("li", {id:b.id, innerHTML:'<div class="container record-container"><div class="image"><img class="lazy-image" alt="" data-original="' + d + '"></div><div class="body"><p><strong>' + b.title + "</strong></p><p>" + x.c("georef-choose-time") + ": " + e + "</p><p>" + x.c("georef-choose-maptype") + ": " + a + '</p></div><div class="tools"><a class="btn btn-primary" href="' + c + '" target="_blank">' + x.c("georef-choose-goToGeoreference") + "</a></div></div>"});
}
;r("vk2.app.UserHistoryApp", function(a) {
  pf(this, N(a.target), N(a.targetPoints));
});
function pf(a, b, c) {
  var d = new X;
  U(d, "success", function(a) {
    a = a.target;
    var d = Y(a);
    void 0 !== d.points && (c.innerHTML = d.points);
    if (void 0 !== d.georef_profile) {
      for (var h = 0, m = d.georef_profile.length;h < m;h++) {
        var n;
        n = d.georef_profile[h];
        var w = void 0 !== n.transformed && !0 === n.transformed ? Ha + "?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities&map=" + n.mapid : "#", y = void 0 !== n.thumbnail ? n.thumbnail : "#", A = x.h.w() + "&oid=" + n.mapid, A = void 0 !== n.transformed && !0 === n.transformed ? '<a href="' + A + '" target="_blank">Klick</a>' : x.c("georef-history-beingGenerated"), G = "" !== n.isvalide ? n.isvalide : "unknown";
        n = Q("article", {id:n.georefid, innerHTML:'<div class="media"><a class="pull-right" href="' + w + '"><img alt="" src="' + y + '"></a><div class="media-body"><p><strong>' + x.c("georef-history-processId") + ":</strong><br>" + n.georefid + "</p><p><strong>" + x.c("georef-history-isValidated") + ":</strong><br>" + G + "</p><p><strong>" + x.c("georef-history-mapId") + ":</strong><br>" + n.mapid + "</p><p><strong>" + x.c("georef-history-mapSheetInfo") + ":</strong><br>" + n.title + "</p><p><strong>" + 
        x.c("georef-history-georefParams") + ":</strong><br>" + JSON.stringify(n.georefparams) + "</p><p><strong>" + x.c("georef-history-persistentAccess") + ":</strong><br>" + A + '</p><p class="meta">Created: ' + n.georeftime + "</p></div></div>"});
        b.appendChild(n);
      }
    }
    z(a);
  }, !1, a);
  U(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = x.h.vb();
  d.send(a, "GET");
}
;r("vk2.app.WelcomePageApp", function(a) {
  var b = void 0 !== a.georefenceElClass ? O(a.georefenceElClass) : void 0, c = void 0 !== a.overallGeorefenceElClass ? O(a.overallGeorefenceElClass) : void 0, d = void 0 !== a.relGeoreferenceElClass ? O(a.relGeoreferenceElClass) : void 0, e = void 0 !== a.georeferenceUserRankingElId ? N(a.georeferenceUserRankingElId) : void 0;
  $("#" + a.deactivateWelcomePageId).change(function() {
    var a = $(this).prop("checked") ? "off" : "on";
    x.bb("vk2-welcomepage", a);
  });
  void 0 !== b && void 0 !== c && void 0 !== d && void 0 !== e && qf(this, b, c, d, e);
});
function qf(a, b, c, d, e) {
  var f = new X;
  U(f, "success", function(a) {
    a = a.target;
    var f = Y(a), n = f.georeference_map_count, w = n + f.missing_georeference_map_count, y = parseInt(n / w * 100);
    rf(b, n);
    rf(c, w);
    for (n = 0;n < d.length;n++) {
      var w = vd(d[n], "width"), A = vd(d[n], "margin-left");
      void 0 !== w && "" !== w && sd(d[n], "width", y + "%");
      void 0 !== A && "" !== A && (-1 < A.indexOf("-") ? sd(d[n], "margin-left", "-" + y + "%") : sd(d[n], "margin-left", y + "%"));
    }
    $("head").append("<style>.vk2WelcomePageBody .vk2GeoreferenceProgressText .content:after{ left:" + y + "%; }</style>");
    y = Math.min(f.pointoverview.length, 3);
    for (n = 0;n < y;n++) {
      w = f.pointoverview[n], w = Q("li", {innerHTML:"<span><b>" + (w.hasOwnProperty("username") ? w.username : w.userid) + ":</b> " + w.points + " Punkt</span>"}), e.appendChild(w);
    }
    z(a);
  }, !1, a);
  U(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = x.h.ub();
  f.send(a, "GET");
}
function rf(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c].innerHTML = b;
  }
}
;function sf(a, b, c) {
  var d = a.getVisible() ? "visible" : "notvisible", e = Q("li", {"class":"layermanagement-record " + d, id:b, "data-id":a.getId()});
  b = Q("div", {"class":"control-container"});
  e.appendChild(b);
  d = Q("button", {"class":"move-layer-top minimize-tool", type:"button", title:x.c("moveToTop"), innerHTML:x.c("moveToTop")});
  b.appendChild(d);
  T(d, "click", function(b) {
    c.removeLayer(a);
    c.addLayer(a);
    b.stopPropagation();
  });
  d = Q("button", {"class":"disable-layer minimize-tool", type:"button", title:x.c("showLayer"), innerHTML:x.c("showLayer")});
  b.appendChild(d);
  T(d, "click", function() {
    F(e, "visible") ? (Mb(e, "visible", "notvisible"), a.setVisible(!1)) : (Mb(e, "notvisible", "visible"), a.setVisible(!0));
  });
  d = Q("button", {"class":"remove-layer minimize-tool", type:"button", title:x.c("removeLayer"), innerHTML:x.c("removeLayer")});
  b.appendChild(d);
  T(d, "click", function(b) {
    c.removeLayer(a);
    b.stopPropagation();
  });
  d = Q("div", {"class":"drag-btn"});
  b.appendChild(d);
  d = Q("a", {"class":"thumbnail", href:"#"});
  e.appendChild(d);
  var f = Q("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:a.thumb_});
  d.appendChild(f);
  d = Q("div", {"class":"metadata-container"});
  e.appendChild(d);
  f = Q("h4", {innerHTML:a.title_});
  d.appendChild(f);
  f = Q("div", {"class":"timestamps"});
  d.appendChild(f);
  d = Q("span", {"class":"timestamps-label", innerHTML:x.c("timestamp") + " " + a.getTime()});
  f.appendChild(d);
  ib.get("vk2-auth") && (d = Q("a", {"class":"georeference-update", innerHTML:x.c("updateGeoref") + " ...", target:"_blank", href:x.h.ma(a.getId())}), b.appendChild(d));
  new Dc(e, a);
  a.on("change:visible", function() {
    !a.getVisible() && F(e, "visible") ? Mb(e, "visible", "notvisible") : a.getVisible() && F(e, "notvisible") && Mb(e, "notvisible", "visible");
  });
  return e;
}
;function tf(a, b, c) {
  Td(x.h.rb(), function(a) {
    200 === ae(a.target) ? b(a) : c(a);
  }, "POST", "req=" + JSON.stringify(a));
}
function uf(a, b) {
  Td(x.h.pb(), b, "POST", "req=" + JSON.stringify(a));
}
;function vf(a, b, c) {
  this.a = b;
  this.g = c;
  b = p(a) ? N(a) : a;
  a = Q("div", {"class":"layermanagement-container", id:"layermanagement-container"});
  b.appendChild(a);
  b = Q("div", {"class":"heading"});
  a.appendChild(b);
  c = Q("span", {"class":"header-label", innerHTML:x.c("layermanagement_label")});
  b.appendChild(c);
  c = Q("ul", {"class":"layermanagement-body", innerHTML:'<li class="empty">' + x.c("start_message") + "</li>"});
  a.appendChild(c);
  this.b = c;
  new Ce(b, this.g);
  new Ee(b, this.g);
  this.G();
  V.call(this);
}
t(vf, V);
function wf(a) {
  a = a.a.getArray();
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    l(a[c].la) && a[c].la() && b.push(a[c]);
  }
  return b;
}
function xf(a, b) {
  for (var c = a.a.getArray(), d = 0, e = c.length;d < e;d++) {
    if (b === c[d]) {
      return d;
    }
  }
}
vf.prototype.f = function(a) {
  if (l(a.element.la) && a.element.la()) {
    this.b.innerHTML = "";
    a = wf(this);
    for (var b = a.length - 1;0 <= b;b--) {
      var c = sf(a[b], b, this.g);
      this.b.appendChild(c);
    }
  }
  $(this.b).sortable({revert:!0, handle:".drag-btn", stop:q(function(a, b) {
    var c = wf(this), h = O("layermanagement-record", this.b), m = h.length - parseInt(h[b.item.index()].id, 0) - 1, n = b.item.index(), w = c.length - 1 - n, h = parseInt(h[n].id, 0);
    l(h) && m != n && (m = c[h], n = xf(this, m), this.a.removeAt(n), c = xf(this, c[w]), w > h ? this.a.insertAt(c + 1, m) : this.a.insertAt(c, m));
  }, this)});
};
vf.prototype.G = function() {
  this.a.on("add", this.f, this);
  this.a.on("remove", this.f, this);
};
vf.prototype.J = function() {
  this.a.un("add", this.f, this);
  this.a.un("remove", this.f, this);
};
function yf() {
  V.call(this);
}
t(yf, V);
function zf(a, b) {
  var c = xe(new Z(window.location.href)), d, e = 4;
  if (Be(c, "c")) {
    var f = c.get("c").split(",");
    d = ol.proj.transform([parseFloat(f[0], 0), parseFloat(f[1], 0)], "EPSG:4326", u.projection);
    e = parseInt(c.get("z"), 0);
    Af(b, d, e);
  }
  var h = q(function(a, c) {
    var f = Ja(a);
    if (void 0 !== c) {
      for (var h = 0;h < m.length;h++) {
        for (var G = 0;G < f.length;G++) {
          m[h] == f[G].getId() && this.dispatchEvent(new B("addmap", {feature:f[G]}));
        }
      }
    } else {
      for (G = 0;G < f.length;G++) {
        this.dispatchEvent(new B("addmap", {feature:f[G]}));
      }
    }
    !d && 0 < f.length && (d = f[0].getGeometry().getInteriorPoint().getCoordinates());
    Af(b, d, e);
  }, a);
  if (Be(c, "oid") && "" !== c.get("oid")) {
    for (var m = c.get("oid").split(","), c = 0;c < m.length;c++) {
      "" == m[c] && m.splice(c, 1);
    }
    m.reverse();
    ge(m, function(a) {
      a = a.target;
      var b = Y(a) ? Y(a) : void 0;
      z(a);
      void 0 !== b.docs && 0 < b.docs.length && h(b.docs, m);
    });
  } else {
    Be(c, "dataid") && "" !== c.get("dataid") && (f = pa + "/_search", c = he("dataid", [c.get("dataid")]), Td(f, function(a) {
      a = a.target;
      var b = Y(a) ? Y(a) : void 0;
      z(a);
      void 0 !== b.hits && void 0 !== b.hits.hits && 0 < b.hits.hits.length && h(b.hits.hits);
    }, "POST", JSON.stringify(c)));
  }
}
function Bf(a) {
  var b = "";
  a.getLayers().forEach(function(a) {
    l(a.getId) && (b += a.getId() + ",");
  });
  var c = ol.proj.transform(a.getView().getCenter(), u.projection, "EPSG:4326");
  a = a.getView().getZoom();
  var d = new Z(window.location.origin + x.h.w() + "&welcomepage=off"), e = d.a;
  e.set("z", a);
  e.set("c", x.round(c[0], 4) + "," + x.round(c[1], 4));
  e.set("oid", b);
  ne(d, e);
  return d.toString();
}
function Af(a, b, c) {
  a.getView().setCenter(b);
  a.getView().setZoom(c);
}
;function Cf(a) {
  a = a || {};
  var b = Q("div", {"class":"permalink ol-unselectable"}), c = Q("a", {href:"#permalink", innerHTML:"P", "class":"ol-has-tooltip"});
  b.appendChild(c);
  var d = Q("span", {role:"tooltip", innerHTML:x.c("permalink")});
  c.appendChild(d);
  var e = Q("form", {id:"permaCopyBox", style:"display:none;"}), d = Q("div", {"class":"permaClose"});
  e.appendChild(d);
  d = Q("div", {"class":"nose"});
  e.appendChild(d);
  d = Q("div", {"class":"moreDots", innerHTML:"..."});
  e.appendChild(d);
  var f = Q("input", {type:"text", id:"permalinkResult", readonly:"readonly", value:"#"});
  e.appendChild(f);
  d = "MacIntel" == navigator.platform ? "&#8984;" : "Strg";
  d = Q("label", {"for":"permalinkResult", innerHTML:x.c("permalink_msg") + " " + d + "+C."});
  e.appendChild(d);
  b.appendChild(e);
  d = q(function(a) {
    a.preventDefault();
    $(e).hasClass("open") ? ($(e).fadeOut().removeClass("open"), $(f).blur()) : (f.value = Bf(this.getMap()), $(e).fadeIn().addClass("open"), $(f).focus().select());
  }, this);
  T(c, "click", d);
  T(c, "touchstart", d);
  ol.control.Control.call(this, {element:b, target:a.target});
}
ol.inherits(Cf, ol.control.Control);
function De(a) {
  a = a.getLayers().getArray();
  for (var b = [], c = 0;c < a.length;c++) {
    a[c] instanceof Me && b.push(a[c]);
  }
  return b;
}
function Df(a) {
  this.g = Ef(a);
  this.g.on("singleclick", function(a) {
    var c = [];
    this.forEachFeatureAtPixel(a.pixel, function(a) {
      c.push(a);
    });
    Ff(c);
  });
}
r("vk2.controller.MapController", Df);
function Ef(a) {
  new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:3})});
  return new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.OSM})], renderer:"canvas", target:a, interactions:ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom]), controls:[new ol.control.Attribution({collapsible:!1, collapsed:!1}), new ol.control.Zoom, new ol.control.FullScreen, new Je({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}), new Vc, new ol.control.ScaleLine, new Cf, new Ke], view:new ol.View({projection:"EPSG:900913", minResolution:1.194328566789627, 
  maxResolution:2445.9849047851562, extent:[640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], center:[1531627.8847864927, 6632124.286850829], zoom:4})});
}
function Gf(a, b) {
  T(b, "jumpto", function(a) {
    var b = this.g.getView(), e = a.target.lonlat;
    b.setCenter(ol.proj.transform([parseFloat(e[0]), parseFloat(e[1])], a.target.srs, "EPSG:900913"));
    b.setZoom(5);
  }, void 0, a);
}
function Hf(a, b) {
  a.a = b;
  T(a.a, "click-record", function(a) {
    a = a.target.feature;
    if (a.get("georeference")) {
      this.g.addLayer(If(a));
    } else {
      if (void 0 !== a) {
        var b = new yd("vk2-overlay-modal", document.body, !0);
        b.open(void 0, "mapcontroller-click-modal georeference-dialog");
        var e = Q("section"), f = Q("a", {"class":"btn btn-primary", href:x.h.ma(a.getId()), innerHTML:x.c("go_to_georeference"), target:"_blank"});
        e.appendChild(f);
        f = Q("a", {"class":"btn btn-primary", href:x.h.Na(a.getId()), innerHTML:x.c("go_to_originalmap"), target:"_self"});
        e.appendChild(f);
        Cd(b, e);
      }
    }
  }, void 0, a);
}
function Jf(a, b) {
  T(b, "addmap", function(a) {
    this.g.addLayer(If(a.target.feature));
  }, void 0, a);
}
function Kf(a, b) {
  T(b, "timechange", function(a) {
    var b = this.a.a, e = a.target.time[0];
    a = a.target.time[1];
    var f = b.a.X;
    if (null != e && ga(e)) {
      if (e > b.a.sa) {
        throw {name:"WrongParameterExecption", message:"Start value shouldn't be higher than the end value."};
      }
      b.a.X = e;
    }
    if (null != a && ga(a)) {
      if (a < b.a.X) {
        throw b.a.X = f, {name:"WrongParameterExecption", message:"End value shouldn't be lower than the start value."};
      }
      b.a.sa = a;
    }
    b = this.a.a;
    Se(b, x.Y(b.g), b.m);
  }, void 0, a);
}
function If(a) {
  return new Me({time:a.get("time"), thumbnail:a.get("thumb"), title:a.get("title"), objectid:a.get("id"), id:a.getId(), dataid:a.get("dataid"), tms:a.get("tms"), clip:a.getGeometry().clone()});
}
function Ff(a) {
  if (0 < a.length) {
    var b = new yd("vk2-overlay-modal", document.body, !0);
    b.open(void 0, "mapcontroller-click-modal");
    for (var c = Q("section"), d = 0;d < a.length;d++) {
      var e = Q("a", {href:x.h.Na(a[d].getId()), innerHTML:a[d].get("title") + " " + a[d].get("time"), target:"_self"});
      c.appendChild(e);
      var f = Q("br");
      c.appendChild(f);
    }
    Cd(b, c);
    1 == a.length && e.click();
  }
}
Df.prototype.getMap = function() {
  return this.g;
};
Df.prototype.getMap = Df.prototype.getMap;
function Lf(a, b) {
  Hf(a, b.f);
  Kf(a, b.j);
  Gf(a, b.b);
}
;r("vk2.app.PresentationApp", function(a) {
  x.Ia();
  var b = l(a.authenticate) && "boolean" == typeof a.authenticate ? a.authenticate : !1, c = b && za ? !0 : !1;
  x.Ra(l(a.modalAnchorClassName) ? a.modalAnchorClassName : "vk2-modal-anchor");
  b || Mf();
  b = new Df(a.mapContainerId);
  c = new hf(a.spatialsearchContainerId, b.getMap(), c);
  Lf(b, c);
  new vf(a.mapContainerId, b.getMap().getLayers(), b.getMap());
  c = new yf(b.getMap());
  zf(c, b.getMap());
  Jf(b, c);
  setTimeout(function() {
    x.Eb(a.mapContainerId);
  }, 500);
});
function Mf() {
  var a = x.getQueryParam("welcomepage");
  N("welcome-page-link") && "off" !== x.ob() && "off" !== a && N("welcome-page-link").click();
}
;function Nf(a, b, c, d) {
  var e = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-submit deactivate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + x.c("submitBtn_validate")});
  N(a).appendChild(e);
  T(e, "click", q(this.a, this, b, c, d));
  V.call(this);
}
t(Nf, V);
Nf.prototype.a = function(a, b, c) {
  this.dispatchEvent(new B("start-confirm", {}));
  var d = Cc(), e = Of(b, d);
  c = 0 < c.getFeatures().length ? c.getFeatures()[0].getGeometry().clone().transform(u.projection, d) : void 0;
  var f = b.getType();
  4 > e.gcps.length ? alert("You have to place at least 4 ground control points") : (a = {georeference:e, id:a, type:f}, void 0 !== c && (a.clip = {source:d, polygon:c.getCoordinates()[0]}), "update" === f && (b = l(b.Xa) ? b.Xa : void 0, a.overwrites = b), b = q(function(a) {
    a = Y(a.target);
    this.dispatchEvent(new B("end-confirm", {data:a}));
  }, this), q(function() {
    this.dispatchEvent(new B("error", {error:"Something went wrong, while sending confirmation data from the server."}));
  }, this), uf(a, b));
};
function Pf(a, b, c) {
  var d = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-validate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + x.c("validateBtn_validate")});
  N(a).appendChild(d);
  T(d, "click", q(this.a, this, b, c));
  V.call(this);
}
t(Pf, V);
Pf.prototype.a = function(a, b) {
  var c = {georeference:Qf(b, Bc(), Cc()), id:a};
  if (!(4 > c.georeference.gcps.length)) {
    this.dispatchEvent(new B("start-warping", {}));
    var d = q(function(a) {
      a = Y(a.target);
      this.dispatchEvent(new B("end-warping", {data:a, georefParams:c}));
    }, this), e = q(function() {
      this.dispatchEvent(new B("error", {error:"Something went wrong, while fetching validation data from the server."}));
    }, this);
    tf(c, d, e);
  }
};
function Rf(a) {
  this.a = l(a.ca) && ia(a.ca) ? l(a.ca["new"]) ? ab(a.ca["new"]) : ab(a.ca) : {source:"pixel", target:"EPSG:4314"};
  this.Xa = l(a.Wa) ? a.Wa : void 0;
  this.f = l(a.Tb) ? a.$a : {source:"pixel", target:"EPSG:900913"};
  this.b = a.sources;
  this.m = l(a.type) ? "update" === a.type ? !0 : !1 : !1;
  this.j = new Ka;
  this.G();
  V.call(this);
}
t(Rf, V);
Rf.prototype.G = function() {
  Sf(this, this.b);
  if (this.a.hasOwnProperty("gcps")) {
    for (var a = this.a, b = this.b, c = this.f, d = 0;d < a.gcps.length;d++) {
      var e = a.gcps[d], f = x.Kb(e.source), f = new ol.Feature(new ol.geom.Point(f)), e = ol.proj.transform(e.target, a.target, c.target), e = new ol.Feature(new ol.geom.Point(e));
      b[0].addFeature(f);
      b[1].addFeature(e);
    }
  }
};
function Sf(a, b) {
  function c(a) {
    var c = b[0].getFeatureById(a), h = b[1].getFeatureById(a);
    if (null != c && null != h) {
      c.setProperties({Fb:!0});
      h.setProperties({Fb:!0});
      var m = x.l.xa();
      m.getText().setText("" + a);
      c.setStyle(m);
      h.setStyle(m);
      d.a = !1;
      d.b = !1;
    }
  }
  var d = a.j;
  b[0].on("addfeature", function(a) {
    if (!1 === d.a) {
      var b = Ma(d);
      a = a.feature;
      d.a = !0;
      a.setId(b);
      a.setStyle(x.l.Ga);
      d.a && d.b && c(b);
    } else {
      alert("Please add source to other map!"), this.removeFeature(a.feature);
    }
  });
  b[0].on("removefeature", function(a) {
    a = a.feature.getId();
    var c = void 0 !== a ? b[0].getFeatureById(a) : void 0;
    null === (void 0 !== a ? b[1].getFeatureById(a) : void 0) & null === c && d.a && (d.a = !1);
  });
  b[1].on("removefeature", function(a) {
    a = a.feature.getId();
    var c = void 0 !== a ? b[0].getFeatureById(a) : void 0;
    null === (void 0 !== a ? b[1].getFeatureById(a) : void 0) & null === c && d.b && (d.b = !1);
  });
  b[1].on("addfeature", function(a) {
    if (!1 === d.b) {
      var b = Ma(d);
      a = a.feature;
      d.b = !0;
      a.setId(b);
      a.setStyle(x.l.Ga);
      d.a && d.b && c(b);
    } else {
      alert("Please add source to other map!"), this.removeFeature(a.feature);
    }
  });
}
function Qf(a, b, c) {
  b = l(b) ? b : "affine";
  a = Tf(a, l(c) ? c : void 0);
  a.algorithm = b;
  return a;
}
function Tf(a, b) {
  var c = q(function(a, b) {
    for (var c = [], d = 0;d < a.length;d++) {
      var e = x.Jb(a[d][0].getGeometry().getCoordinates()), y = ol.proj.transform(a[d][1].getGeometry().getCoordinates(), this.f.target, b);
      c.push({source:e, target:y});
    }
    return c;
  }, a), d = ab(a.a), e = l(b) ? b : d.target;
  d.gcps = c(function(a) {
    for (var b = [], c = 0;c < a[0].getFeatures().length;c++) {
      var d = a[0].getFeatures()[c], e;
      da(d.getId()) && (e = a[1].getFeatureById(d.getId()));
      null != d && null != e && b.push([d, e]);
    }
    return b;
  }(a.b), e);
  d.target = e;
  return d;
}
function Of(a, b) {
  var c = Bc(), c = l(c) ? c : "affine", d = ab(a.a), e = Qf(a, c, l(b) ? b : d.target);
  Qf(a, c, d.target);
  return e;
}
Rf.prototype.getType = function() {
  return this.m ? "update" : "new";
};
function Uf(a, b) {
  this.b = u.projection;
  this.T = void 0;
  this.o = N(a);
  var c = l(b) ? b : [640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], d = new ol.layer.Tile({source:new ol.source.OSM});
  this.g = new ol.Map({layers:[d], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), renderer:"canvas", target:this.o, view:new ol.View({projection:this.b, center:[0, 0], zoom:2}), controls:[new ol.control.FullScreen, new ol.control.Zoom, new ol.control.Attribution, new Je({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})})]});
  this.g.getView().fit(c, this.g.getSize());
  l(b) && (this.a = new ol.control.ZoomToExtent({extent:c}), this.g.addControl(this.a));
  c = new af(this.o);
  T(c, "jumpto", function(a) {
    var b = this.g.getView(), c = a.target.lonlat;
    b.setCenter(ol.proj.transform([parseFloat(c[0]), parseFloat(c[1])], a.target.srs, this.b));
    b.setZoom(12);
  }, void 0, this);
  P("ol-attribution").children[0].children[0].remove();
}
function Vf(a) {
  if (!l(Wf(a))) {
    var b = Q("div", {"class":"result-viewer-loading-panel", id:"result-viewer-loading-panel", innerHTML:'<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100"aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">100% Complete</span></div></div>'});
    a.o.appendChild(b);
  }
}
function Xf(a) {
  a = Wf(a);
  l(a) && vc(a);
}
function Yf(a, b, c, d) {
  l(a.T) && a.g.removeLayer(a.T);
  d = void 0 !== d ? d.getGeometry() : void 0;
  a.T = Oe({eb:b, Qa:c, aa:d}, a.g);
  a.g.getLayers().insertAt(1, a.T);
  N("opacity-slider-container") && (N("opacity-slider-container").innerHTML = "", new Dc(N("opacity-slider-container"), a.T));
}
Uf.prototype.getMap = function() {
  return this.g;
};
function Wf(a) {
  for (var b = 0;b < a.o.children.length;b++) {
    if ("result-viewer-loading-panel" === a.o.children[b].id) {
      return a.o.children[b];
    }
  }
}
Uf.prototype.setZoom = function(a) {
  void 0 !== a && (a = void 0 === a ? this.g.getView().calculateExtent(this.g.getSize()) : a, this.g.removeControl(this.a), this.a = new ol.control.ZoomToExtent({extent:a}), this.g.addControl(this.a), this.g.getView().fit(a, this.g.getSize()));
};
r("vk2.app.AdminEvaluationApp", function(a) {
  if (!a.hasOwnProperty("process_list") || !a.hasOwnProperty("map_container")) {
    throw "Missing parameter in the vk2.app.AdminEvaluationApp settings. Please check the documentation.";
  }
  var b = a.map_container;
  Ac();
  this.pa = new Uf(b);
  a.hasOwnProperty("btn_getallprocess") && Zf(this, a.btn_getallprocess, a.process_list);
  a.hasOwnProperty("btn_getallinvalideprocess") && Zf(this, a.btn_getallinvalideprocess, a.process_list, "validation=invalide");
  a.hasOwnProperty("btn_getsingleprocess_mapid") && $f(this, a.btn_getsingleprocess_mapid, a.process_list);
  a.hasOwnProperty("btn_getsingleprocess_userid") && ag(this, a.btn_getsingleprocess_userid, a.process_list);
});
function Zf(a, b, c, d) {
  T(N(b), "click", function() {
    var a = new X;
    U(a, "success", function(a) {
      a = a.target;
      bg(this, c, Y(a));
      z(a);
    }, !1, this);
    U(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    var b = x.h.wa(l(d) ? d : void 0);
    a.send(b, "GET");
  }, void 0, a);
}
function $f(a, b, c) {
  T(N(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = N(a).value;
    a = new X;
    U(a, "success", function(a) {
      a = a.target;
      bg(this, c, Y(a));
      z(a);
    }, !1, this);
    b = x.h.wa("mapid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function ag(a, b, c) {
  T(N(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = N(a).value;
    a = new X;
    U(a, "success", function(a) {
      a = a.target;
      bg(this, c, Y(a));
      z(a);
    }, !1, this);
    U(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    b = x.h.wa("userid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function cg(a, b) {
  function c(a, b) {
    return Q("p", {innerHTML:"<strong>" + a + ":</strong><br> " + b});
  }
  var d = Q("article", {id:b.georef_id}), e = q(function(a) {
    var b = Q("p");
    if ("isvalide" != a.adminvalidation) {
      var c = Q("button", {"data-href":x.h.tb("georeferenceid=" + a.georef_id), "class":"btn btn-primary action-btn", innerHTML:"Is valide"});
      dg(c, d, "Georeference process is valide?", "Are you sure you wanna set this georeference process to isvalide? Why?");
      b.appendChild(c);
    }
    c = Q("button", {"data-params-georef":a.georef_params, "data-params-clip":a.clippolygon, "data-params-id":a.mapid, "class":"btn btn-primary btn-show-georef", innerHTML:"Show map"});
    eg(this, c);
    b.appendChild(c);
    c = Q("a", {href:x.h.ma(void 0, "georeferenceid=" + a.georef_id), "class":"btn btn-primary action-btn", target:"_blank", innerHTML:"Go to process ..."});
    b.appendChild(c);
    "invalide" != a.adminvalidation && (a = Q("button", {"data-href":x.h.sb("georeferenceid=" + a.georef_id), "class":"btn btn-warning action-btn", innerHTML:"Is invalide"}), dg(a, d, "Georeference process is invalide?", "Are you sure you wanna set this georeference process to invalide? Why?"), b.appendChild(a));
    return b;
  }, a);
  R(d, c("Process-ID", b.georef_id));
  R(d, c("Admin validation", b.adminvalidation));
  R(d, c("Map id", b.mapid));
  R(d, c("User id", b.userid));
  R(d, c("Map sheet description", b.title));
  R(d, c("Georeference parameter (lon:lat)", b.georef_params));
  R(d, c("Type", b.type));
  R(d, c("Processed", b.processed));
  R(d, c("Is active", b.georef_isactive));
  R(d, Q("p", {"class":"meta", innerHTML:"Created: " + b.georef_time}));
  R(d, e(b));
  return d;
}
function bg(a, b, c) {
  b = N(b);
  b.innerHTML = "";
  for (var d = 0, e = c.length;d < e;d++) {
    var f = cg(a, c[d]);
    b.appendChild(f);
  }
}
function dg(a, b, c, d) {
  T(a, "click", na(x.nb, c, d + '<br><div id="admin-validation-comment" class="input-group"><input type="radio" value="imprecision"> Imprecision<br><input type="radio" value="wrong-parameter"> Wrong Parameter<br><input type="radio" value="wrong-map-sheet-number"> Wrong map sheet number<br><input type="radio" value="bad-original"> Bad original<br><br><input type="text" class="form-control" placeholder="comment" id="confirm-comment"></div>', function() {
    for (var c = qc("input", void 0, N("admin-validation-comment")), d = void 0, h = 0;h < c.length;h++) {
      "radio" == c[h].type && c[h].checked && (d = c[h].value);
    }
    c = l(d) ? d : N("confirm-comment").value;
    c = a.getAttribute("data-href") + "&comment=" + c;
    Td(c, function(a) {
      alert(Y(a.target).message);
      vc(b);
    }, "GET");
  }));
}
function eg(a, b) {
  T(b, "click", function(a) {
    var b = JSON.parse(a.currentTarget.getAttribute("data-params-georef")), b = b.hasOwnProperty("new") ? b["new"] : b, e = JSON.parse(a.currentTarget.getAttribute("data-params-clip"));
    a = parseInt(a.currentTarget.getAttribute("data-params-id"), 0);
    a = {georeference:b, id:a, clip:e};
    Vf(this.pa);
    tf(a, q(function(a) {
      Xf(this.pa);
      a = Y(a.target);
      Yf(this.pa, a.wmsUrl, a.layerId, a.clip);
    }, this), function() {
      Xf(this.pa);
      alert("Something went wrong while trying to fetch a georeference validation result from server ....");
    });
  }, !1, a);
}
;function fg(a) {
  this.b = p(a) ? N(a) : a;
  var b = Q("div", {"class":"georef-tools-clip-container", id:"georef-tools-clip-container"});
  this.b.appendChild(b);
  gg(this, b);
  a = Q("div", {"class":"georef-tools-clip-inner-container", id:"georef-tools-clip-inner-container"});
  b.appendChild(a);
  var b = [], c = hg("noneToggle", "none", x.c("moveMap"));
  a.appendChild(c);
  b.push(c);
  var d = hg("drawClip", "drawclip", x.c("drawClip"));
  a.appendChild(d);
  b.push(d);
  T(c, "click", q(this.a, this, "none", b));
  T(d, "click", q(this.a, this, "drawclip", b));
  V.call(this);
}
t(fg, gd);
fg.prototype.A = function() {
  var a = N("georef-tools-clip-handler");
  null != a && F(a, "open") || $(a).trigger("click");
};
function hg(a, b, c) {
  var d = Q("div", {"class":"tool"});
  a = Q("div", {id:a, "class":"tool-move toggle-elements", value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
fg.prototype.B = function() {
  var a = N("georef-tools-clip-handler");
  if (null == a || F(a, "open")) {
    $(a).trigger("click");
    for (var a = O("toggle-elements"), b = 0;b < a.length;b++) {
      F(a[b], "activate") && E(a[b], "activate");
    }
  }
};
fg.prototype.a = function(a, b) {
  for (var c = q(function(a, b) {
    F(a, "activate") || D(a, "activate");
    this.dispatchEvent(new B("activate-" + b, a));
  }, this), d = q(function(a, b) {
    F(a, "activate") && E(a, "activate");
    this.dispatchEvent(new B("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function gg(a, b) {
  var c = Q("div", {"class":"georef-tools-clip-handler", id:"georef-tools-clip-handler"});
  b.appendChild(c);
  R(c, Q("span", {"class":"icon"}));
  $(c).click(q(function() {
    var a = F(c, "open") ? new B("deactivate", c) : new B("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-clip-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function ig(a, b, c) {
  this.a = new ol.source.Vector({features:new ol.Collection});
  l(c) && (c = jg(c), this.a.addFeature(c));
  this.i = new ol.layer.Vector({source:this.a, style:x.l.Fa});
  this.i.setMap(b);
  this.b = new fd(b, this.i);
  kg(a, {"activate-drawclip":this.b, "deactivate-drawclip":this.b});
  this.qa = a;
}
t(ig, Na);
ig.prototype.f = function(a) {
  a = jg(a.target.clip);
  0 === this.a.getFeatures().length && (this.a.addFeature(a), this.i.addFeature(a));
};
function kg(a, b) {
  function c(a) {
    if (l(a)) {
      var c = a.type;
      l(c) && b.hasOwnProperty(c) && b[c].B();
    } else {
      for (c in b) {
        b.hasOwnProperty(c) && b[c].B();
      }
    }
  }
  T(a, "activate-drawclip", function(a) {
    c();
    b[a.type].A();
  });
  T(a, "deactivate-drawclip", c);
  T(a, "activate", function() {
  });
  T(a, "deactivate", function() {
    c();
  });
}
function jg(a) {
  var b = a.hasOwnProperty("polygon") && 0 < a.polygon.length ? new ol.geom.Polygon([a.polygon]) : void 0;
  void 0 !== b && b.transform(a.source, u.projection);
  return new ol.Feature({geometry:b});
}
;function lg(a) {
  this.o = p(a) ? N(a) : a;
  var b = Q("div", {"class":"georef-tools-gcp-container", id:"georef-tools-gcp-container"});
  this.o.appendChild(b);
  mg(this, b);
  a = Q("div", {"class":"georef-tools-gcp-inner-container", id:"georef-tools-gcp-inner-container"});
  b.appendChild(a);
  var b = [], c = ng("noneToggle", "none", x.c("moveMap"));
  a.appendChild(c);
  b.push(c);
  var d = ng("pointToggle", "addgcp", x.c("setCornerPoint"));
  a.appendChild(d);
  b.push(d);
  var e = ng("dragToggle", "draggcp", x.c("moveCornerPoint"));
  a.appendChild(e);
  b.push(e);
  var f = ng("deleteToggle", "delgcp", x.c("deleteCornerPoint"));
  a.appendChild(f);
  b.push(f);
  T(c, "click", q(this.a, this, "none", b));
  T(d, "click", q(this.a, this, "addgcp", b));
  T(e, "click", q(this.a, this, "draggcp", b));
  T(f, "click", q(this.a, this, "delgcp", b));
  V.call(this);
}
t(lg, gd);
lg.prototype.A = function() {
  var a = N("georef-tools-gcp-handler");
  null != a && F(a, "open") || $(a).trigger("click");
};
function ng(a, b, c) {
  var d = Q("div", {"class":"tool"});
  a = Q("div", {id:a, "class":"tool-move toggle-elements", value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
lg.prototype.B = function() {
  var a = N("georef-tools-gcp-handler");
  if (null == a || F(a, "open")) {
    $(a).trigger("click");
    for (var a = O("toggle-elements"), b = 0;b < a.length;b++) {
      F(a[b], "activate") && E(a[b], "activate");
    }
  }
};
lg.prototype.a = function(a, b) {
  for (var c = q(function(a, b) {
    F(a, "activate") || D(a, "activate");
    this.dispatchEvent(new B("activate-" + b, a));
  }, this), d = q(function(a, b) {
    F(a, "activate") && E(a, "activate");
    this.dispatchEvent(new B("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function mg(a, b) {
  var c = Q("div", {"class":"georef-tools-gcp-handler", id:"georef-tools-gcp-handler"});
  b.appendChild(c);
  R(c, Q("span", {"class":"icon"}));
  $(c).click(q(function() {
    var a = F(c, "open") ? new B("deactivate", c) : new B("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-gcp-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function og(a) {
  this.a = a.U;
  var b = a.Ib, c = a.sources[0], d = a.sources[1];
  a = {P:a.Sa[0], L:a.Sa[1]};
  var e = {P:new ol.layer.Vector({source:c, style:function() {
    return [x.l.ib];
  }}), L:new ol.layer.Vector({source:d, style:function() {
    return [x.l.ib];
  }})}, d = new bd(c, d, a.P, a.L), c = new dd(e.P, e.L, a.P, a.L), f = new cd(e.P, e.L, a.P, a.L), d = {"activate-addgcp":d, "deactivate-addgcp":d, "activate-draggcp":c, "deactivate-draggcp":c, "activate-delgcp":f, "deactivate-delgcp":f};
  pg(c);
  qg(b, a, e, d);
  this.qa = b;
}
t(og, Na);
function pg(a) {
  function b(a) {
    a.target.feature.setStyle(a.target.targetStyle);
  }
  T(a, "selected", b);
  T(a, "deselected", b);
}
function qg(a, b, c, d) {
  function e(a) {
    f();
    d[a.type].A();
  }
  function f(a) {
    if (l(a)) {
      var b = a.type;
      l(b) && d.hasOwnProperty(b) && d[b].B();
    } else {
      for (b in d) {
        d.hasOwnProperty(b) && d[b].B();
      }
    }
  }
  T(a, "activate-addgcp", e);
  T(a, "deactivate-addgcp", f);
  T(a, "activate-draggcp", e);
  T(a, "deactivate-draggcp", f);
  T(a, "activate-delgcp", e);
  T(a, "deactivate-delgcp", f);
  T(a, "activate", function() {
  });
  T(a, "deactivate", function() {
    f();
  });
  b.P.addLayer(c.P);
  b.L.addLayer(c.L);
}
;function rg(a) {
  var b = p(a.Ca) ? N(a.Ca) : a.Ca, c = p(a.Ba) ? N(a.Ba) : a.Ba, d = a.Cb, e = a.Ab, f = a.Gb, h = a.Lb, m = l(a.Ja) ? a.Ja : void 0, n = l(a.type) ? a.type : void 0, w = l(a.aa) ? a.aa : void 0, y = l(a.Ka) ? a.Ka : void 0, A = [new ol.source.Vector({features:new ol.Collection}), new ol.source.Vector({features:new ol.Collection})], G = l(a.$a) ? G : void 0;
  if (void 0 !== m) {
    a = m.algorithm;
    for (var Wb = $("#transformation-chooser option"), db = 0;db < Wb.length;db++) {
      a.toLowerCase() === Wb[db].innerHTML.toLowerCase() && $("#transformation-chooser").val(Wb[db].innerHTML);
    }
  }
  m = new Rf({sources:A, ca:m, type:n, Wa:y, $a:G});
  b = new lg(b);
  f = new og({Ib:b, U:m, Sa:[f.getMap(), h.getMap()], sources:A});
  c = new fg(c);
  w = new ig(c, h.getMap(), w);
  A = f.qa;
  m = w.qa;
  T(A, "activate", m.B);
  T(m, "activate", A.B);
  U(f.a, "add-gcp-clippolygon", w.f, void 0, w);
  A = new Pf(d, e, f.a);
  d = new Nf(d, e, f.a, w.a);
  sg(A, d, h, w, c);
  b.A();
}
function sg(a, b, c, d, e) {
  T(a, "start-warping", function() {
    Vf(c);
  });
  T(a, "end-warping", function(a) {
    a = a.target.data;
    var b = 0 < d.a.getFeatures().length ? d.a.getFeatures()[0] : void 0, m = ol.proj.transformExtent(a.extent, Cc(), u.projection);
    Yf(c, a.wmsUrl, a.layerId, b);
    c.setZoom(m);
    Xf(c);
    e.A();
  });
  T(a, "error", function() {
    alert("Something went wrong, while trying to request a validation result.");
    Xf(c);
  });
  T(b, "end-confirm", function() {
    window.location.href = x.h.wb();
  });
  T(d.b, "drawend", function(a) {
    a = a.target.feature;
    if (void 0 !== c.T) {
      var b = c.T.getProperties();
      Yf(c, b.wms_url, b.layerid, a);
    }
  });
}
;function tg(a, b) {
  x.Ia();
  x.Ra("vk2-modal-anchor");
  Ac();
  var c = new Z(window.location.href), d = c.a.get("objectid"), c = c.a.get("georeferenceid");
  l(c) ? ug("georeferenceid=" + c, q(this.a, this, a, b)) : l(d) && ug("objectid=" + d, q(this.a, this, a, b));
}
r("vk2.app.GeoreferenceApp", tg);
function ug(a, b) {
  var c = x.h.qb(a);
  Td(c, function(a) {
    200 != ae(a.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    b(Y(a.target));
  });
}
tg.prototype.a = function(a, b, c) {
  var d = c.hasOwnProperty("extent") ? ol.proj.transformExtent(c.extent, va, "EPSG:3857") : void 0, e = new ke(a, c.zoomify), f = new Uf(b, d);
  T(e, "loadend", function() {
    var d = c.hasOwnProperty("recommendedsrid") ? "EPSG:" + c.recommendedsrid : "EPSG:4326";
    $("#projection-chooser").val(d);
    new rg({Ca:a, Ba:b, Cb:"georef-validate-menu", Ab:c.objectid, Gb:e, Lb:f, Ja:c.georeference, type:c.type, aa:c.clippolygon, Ka:c.georeferenceid});
  }, void 0, this);
};
}).call(window);
