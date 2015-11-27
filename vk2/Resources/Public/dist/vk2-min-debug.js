(function(){var g, aa = aa || {}, k = this;
function l(a) {
  return void 0 !== a;
}
function ba() {
}
function da(a) {
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
function ea(a) {
  return null != a;
}
function fa(a) {
  return "array" == da(a);
}
function ga(a) {
  var b = da(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function p(a) {
  return "string" == typeof a;
}
function ha(a) {
  return "number" == typeof a;
}
function ia(a) {
  return "function" == da(a);
}
function ja(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ka = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function na(a, b, c) {
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
function r(a, b, c) {
  r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
  return r.apply(null, arguments);
}
function oa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
var pa = Date.now || function() {
  return +new Date;
};
function t(a, b) {
  var c = a.split("."), d = k;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && l(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {};
  }
}
function u(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.aa = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Eb = function(a, c, f) {
    for (var h = Array(arguments.length - 2), n = 2;n < arguments.length;n++) {
      h[n - 2] = arguments[n];
    }
    return b.prototype[c].apply(a, h);
  };
}
;var qa, ra, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, v, La;
t("vk2.settings.updateSettings", function() {
  qa = vk2x.settings.ELASTICSEARCH_NODE;
  ra = vk2x.settings.ELASTICSEARCH_SRS;
  ua = vk2x.settings.EVALUATION_GETPROCESS;
  va = vk2x.settings.EVALUATION_SETISINVALIDE;
  wa = vk2x.settings.EVALUATION_SETISVALIDE;
  xa = vk2x.settings.GEOREFERENCE_CONFIRM;
  ya = vk2x.settings.GEOREFERENCE_EXTENT_SRS;
  za = vk2x.settings.GEOREFERENCE_GETPROCESS;
  Aa = vk2x.settings.GEOREFERENCE_HISTORY;
  Ba = vk2x.settings.GEOREFERENCE_INFORMATION;
  Ca = vk2x.settings.GEOREFERENCE_ON;
  Da = vk2x.settings.GEOREFERENCE_PAGE;
  Ea = vk2x.settings.GEOREFERENCE_VALIDATION;
  Fa = vk2x.settings.MAIN_PAGE;
  Ga = vk2x.settings.MAPPROFILE_PAGE;
  Ha = vk2x.settings.MAPVIEW_PARAMS;
  Ia = vk2x.settings.SEARCH_TIMEINTERVAL;
  Ja = vk2x.settings.THUMB_PATH;
  Ka = vk2x.settings.TMS_URL_SUBDOMAINS;
  v = vk2x.settings.WITH_SPEAKING_URLS;
  La = vk2x.settings.WMS_DYNAMIC_TEMPLATE;
});
function Ma(a, b) {
  var c;
  if ("geometry" in b) {
    if (c = b.geometry.coordinates[0], "polygon" === b.geometry.type.toLowerCase()) {
      for (var d = [], e = 0, f = c.length;e < f;e++) {
        d.push(ol.proj.transform(c[e], "EPSG:4326", "EPSG:900913"));
      }
      c = new ol.geom.Polygon([d]);
    } else {
      c = void 0;
    }
  } else {
    c = void 0;
  }
  delete b.geometry;
  c = new ol.Feature({geometry:c});
  for (var h in b) {
    b.hasOwnProperty(h) && ("time" === h ? c.set(h, b[h].split("-")[0]) : c.set(h, b[h]));
  }
  c.setId(a);
  return c;
}
function Na(a) {
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    b.push(Ma(a[c]._id, a[c]._source));
  }
  return b;
}
;var w = {j:{}};
w.j.Cb = new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 0, 255, 1.0)", width:2})});
w.j.bb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#f00", width:1}), fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"})});
w.j.cb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:2})});
w.j.Ea = new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}), stroke:new ol.style.Stroke({color:"#ffcc33", width:2}), image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"#ffcc33"})})});
w.j.ja = function(a) {
  var b = 16 * Math.PI / 6, b = [0, b, b, b, b, b, b];
  a = l(a) ? a : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:8, fill:new ol.style.Fill({color:"rgba(255,255,255,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(49,159,211,0.5)", width:15, lineDash:b})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:a, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
w.j.Fa = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.6)"}), stroke:new ol.style.Stroke({color:"#29A329", width:1.5})})});
w.j.ea = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"}), stroke:new ol.style.Stroke({color:"#f00", width:1})}), zIndex:1E5});
w.j.wa = function(a) {
  var b = 22 * Math.PI / 6, b = [0, b, b, b, b, b, b];
  a = l(a) ? a : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:11, fill:new ol.style.Fill({color:"rgba(255,128,0,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(240,0,0,0.5)", width:15, lineDash:b})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:a, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
function Oa() {
  this.b = this.a = !1;
  this.c = 0;
}
function Pa(a) {
  a.a || a.b || (a.c += 1);
  return "" + a.c;
}
;function Qa(a) {
  this.na = a;
}
;function Ra() {
  0 != Sa && (Ta[this[ka] || (this[ka] = ++la)] = this);
  this.o = this.o;
  this.H = this.H;
}
var Sa = 0, Ta = {};
Ra.prototype.o = !1;
function x(a) {
  a.o || (a.o = !0, a.N(), 0 != Sa && (a = a[ka] || (a[ka] = ++la), delete Ta[a]));
}
Ra.prototype.N = function() {
  if (this.H) {
    for (;this.H.length;) {
      this.H.shift()();
    }
  }
};
function y(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.b = !1;
  this.Ta = !0;
}
y.prototype.stopPropagation = function() {
  this.b = !0;
};
y.prototype.preventDefault = function() {
  this.Ta = !1;
};
var Ua = "closure_listenable_" + (1E6 * Math.random() | 0), Va = 0;
function Wa(a, b, c, d, e) {
  this.listener = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.X = !!d;
  this.P = e;
  ++Va;
  this.S = this.fa = !1;
}
function Xa(a) {
  a.S = !0;
  a.listener = null;
  a.a = null;
  a.src = null;
  a.P = null;
}
;function Ya(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
;function Za(a, b) {
  this.width = a;
  this.height = b;
}
g = Za.prototype;
g.clone = function() {
  return new Za(this.width, this.height);
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
function $a(a) {
  this.a = a;
}
var ab = /\s*;\s*/;
g = $a.prototype;
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
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(pa() + 1E3 * c)).toUTCString();
  this.a.cookie = a + "=" + b + e + d + c + f;
};
g.get = function(a, b) {
  for (var c = a + "=", d = (this.a.cookie || "").split(ab), e = 0, f;f = d[e];e++) {
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
  return bb(this).keys;
};
g.F = function() {
  return bb(this).values;
};
g.isEmpty = function() {
  return !this.a.cookie;
};
g.ua = function() {
  return this.a.cookie ? (this.a.cookie || "").split(ab).length : 0;
};
g.clear = function() {
  for (var a = bb(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
function bb(a) {
  a = (a.a.cookie || "").split(ab);
  for (var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  }
  return {keys:b, values:c};
}
var cb = new $a(document);
cb.b = 3950;
function db() {
}
db.prototype.a = null;
function eb(a) {
  var b;
  (b = a.a) || (b = {}, fb(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b;
}
;function gb(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function hb(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
function ib(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function jb(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
function kb(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
}
var lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function mb(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < lb.length;f++) {
      c = lb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function nb(a) {
  var b = arguments.length;
  if (1 == b && fa(arguments[0])) {
    return nb.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
;nb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function ob(a) {
  ob[" "](a);
  return a;
}
ob[" "] = ba;
var pb = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function qb(a) {
  if (!rb.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(sb, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(tb, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(ub, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(vb, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(wb, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(xb, "&#0;"));
  return a;
}
var sb = /&/g, tb = /</g, ub = />/g, vb = /"/g, wb = /'/g, xb = /\x00/g, rb = /[\x00&<>"']/;
function yb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function zb(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function Ab(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;var A = Array.prototype, Bb = A.indexOf ? function(a, b, c) {
  return A.indexOf.call(a, b, c);
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
}, Cb = A.forEach ? function(a, b, c) {
  A.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Db = A.filter ? function(a, b, c) {
  return A.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = p(a) ? a.split("") : a, n = 0;n < d;n++) {
    if (n in h) {
      var m = h[n];
      b.call(c, m, n, a) && (e[f++] = m);
    }
  }
  return e;
};
function Eb(a) {
  var b;
  a: {
    b = Fb;
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
function Gb(a, b) {
  return 0 <= Bb(a, b);
}
function Hb(a, b) {
  var c = Bb(a, b), d;
  (d = 0 <= c) && A.splice.call(a, c, 1);
  return d;
}
function Ib(a) {
  return A.concat.apply(A, arguments);
}
function Jb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
function Kb(a, b, c) {
  return 2 >= arguments.length ? A.slice.call(a, b) : A.slice.call(a, b, c);
}
;function Lb(a) {
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function B(a, b) {
  var c = Lb(a);
  Mb(c, Kb(arguments, 1));
  a.className = c.join(" ");
}
function D(a, b) {
  var c = Lb(a), c = Nb(c, Kb(arguments, 1));
  a.className = c.join(" ");
}
function Mb(a, b) {
  for (var c = 0;c < b.length;c++) {
    Gb(a, b[c]) || a.push(b[c]);
  }
}
function Nb(a, b) {
  return Db(a, function(a) {
    return !Gb(b, a);
  });
}
function Ob(a, b, c) {
  var d = Lb(a);
  p(b) ? Hb(d, b) : fa(b) && (d = Nb(d, b));
  p(c) && !Gb(d, c) ? d.push(c) : fa(c) && Mb(d, c);
  a.className = d.join(" ");
}
function F(a, b) {
  return Gb(Lb(a), b);
}
;function Pb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function Qb(a) {
  return a.classList ? a.classList.contains("active") : Gb(Pb(a), "active");
}
function Rb(a) {
  a.classList ? a.classList.add("active") : Qb(a) || (a.className += 0 < a.className.length ? " active" : "active");
}
function Sb(a) {
  a.classList ? a.classList.remove("active") : Qb(a) && (a.className = Db(Pb(a), function(a) {
    return "active" != a;
  }).join(" "));
}
;function Tb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
Tb.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = Ub(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.fa = !1)) : (b = new Wa(b, this.src, f, !!d, e), b.fa = c, a.push(b));
  return b;
};
Tb.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.a)) {
    return !1;
  }
  var e = this.a[a];
  b = Ub(e, b, c, d);
  return -1 < b ? (Xa(e[b]), A.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1;
};
function Vb(a, b) {
  var c = b.type;
  c in a.a && Hb(a.a[c], b) && (Xa(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
}
Tb.prototype.xa = function(a, b, c, d) {
  a = this.a[a.toString()];
  var e = -1;
  a && (e = Ub(a, b, c, d));
  return -1 < e ? a[e] : null;
};
Tb.prototype.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", e = l(b);
  return hb(this.a, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].X != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function Ub(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.S && f.listener == b && f.X == !!c && f.P == d) {
      return e;
    }
  }
  return -1;
}
;var Wb;
function Xb() {
}
u(Xb, db);
function Yb(a) {
  return (a = fb(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function fb(a) {
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
Wb = new Xb;
function $b(a, b) {
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
      a instanceof $b ? (c = a.getKeys(), d = a.F()) : (c = jb(a), d = ib(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
g = $b.prototype;
g.ua = function() {
  return this.b;
};
g.F = function() {
  ac(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.g[this.a[b]]);
  }
  return a;
};
g.getKeys = function() {
  ac(this);
  return this.a.concat();
};
g.equals = function(a, b) {
  if (this === a) {
    return !0;
  }
  if (this.b != a.ua()) {
    return !1;
  }
  var c = b || bc;
  ac(this);
  for (var d, e = 0;d = this.a[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return !1;
    }
  }
  return !0;
};
function bc(a, b) {
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
  return cc(this.g, a) ? (delete this.g[a], this.b--, this.a.length > 2 * this.b && ac(this), !0) : !1;
};
function ac(a) {
  if (a.b != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      cc(a.g, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.b != a.a.length) {
    for (var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], cc(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
g.get = function(a, b) {
  return cc(this.g, a) ? this.g[a] : b;
};
g.set = function(a, b) {
  cc(this.g, a) || (this.b++, this.a.push(a));
  this.g[a] = b;
};
g.forEach = function(a, b) {
  for (var c = this.getKeys(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
g.clone = function() {
  return new $b(this);
};
function cc(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function dc(a) {
  if ("function" == typeof a.F) {
    return a.F();
  }
  if (p(a)) {
    return a.split("");
  }
  if (ga(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return ib(a);
}
function ec(a, b) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, void 0);
  } else {
    if (ga(a) || p(a)) {
      Cb(a, b, void 0);
    } else {
      var c;
      if ("function" == typeof a.getKeys) {
        c = a.getKeys();
      } else {
        if ("function" != typeof a.F) {
          if (ga(a) || p(a)) {
            c = [];
            for (var d = a.length, e = 0;e < d;e++) {
              c.push(e);
            }
          } else {
            c = jb(a);
          }
        } else {
          c = void 0;
        }
      }
      for (var d = dc(a), e = d.length, f = 0;f < e;f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    }
  }
}
;var G;
a: {
  var fc = k.navigator;
  if (fc) {
    var gc = fc.userAgent;
    if (gc) {
      G = gc;
      break a;
    }
  }
  G = "";
}
;function H() {
  return -1 != G.indexOf("Edge");
}
;var hc = -1 != G.indexOf("Opera") || -1 != G.indexOf("OPR"), I = -1 != G.indexOf("Edge") || -1 != G.indexOf("Trident") || -1 != G.indexOf("MSIE"), K = -1 != G.indexOf("Gecko") && !(-1 != G.toLowerCase().indexOf("webkit") && !H()) && !(-1 != G.indexOf("Trident") || -1 != G.indexOf("MSIE")) && !H(), L = -1 != G.toLowerCase().indexOf("webkit") && !H(), ic = -1 != G.indexOf("Macintosh");
function jc() {
  var a = G;
  if (K) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (I && H()) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (I) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (L) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function kc() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var lc = function() {
  if (hc && k.opera) {
    var a = k.opera.version;
    return ia(a) ? a() : a;
  }
  var a = "", b = jc();
  b && (a = b ? b[1] : "");
  return I && !H() && (b = kc(), b > parseFloat(a)) ? String(b) : a;
}(), mc = {};
function M(a) {
  var b;
  if (!(b = mc[a])) {
    b = 0;
    for (var c = pb(String(lc)).split("."), d = pb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", n = d[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var z = m.exec(h) || ["", "", ""], E = q.exec(n) || ["", "", ""];
        if (0 == z[0].length && 0 == E[0].length) {
          break;
        }
        b = yb(0 == z[1].length ? 0 : parseInt(z[1], 10), 0 == E[1].length ? 0 : parseInt(E[1], 10)) || yb(0 == z[2].length, 0 == E[2].length) || yb(z[2], E[2]);
      } while (0 == b);
    }
    b = mc[a] = 0 <= b;
  }
  return b;
}
var nc = k.document, oc = kc(), pc = !nc || !I || !oc && H() ? void 0 : oc || ("CSS1Compat" == nc.compatMode ? parseInt(lc, 10) : 5);
var qc = !I || I && (H() || 9 <= pc);
!K && !I || I && I && (H() || 9 <= pc) || K && M("1.9.1");
I && M("9");
var rc = I || hc || L;
function sc() {
  return N("opacity-slider-container");
}
function N(a) {
  var b = document;
  return p(a) ? b.getElementById(a) : a;
}
function O(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : tc("*", a, b);
}
function P(a, b) {
  var c = b || document, d = null;
  c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = tc("*", a, b)[0];
  return d || null;
}
function tc(a, b, c) {
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
      a = h.className, "function" == typeof a.split && Gb(a.split(/\s+/), b) && (d[e++] = h);
    }
    d.length = e;
    return d;
  }
  return c;
}
function uc(a, b) {
  gb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in vc ? a.setAttribute(vc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var vc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Q(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!qc && h && (h.name || h.type)) {
    f = ["<", f];
    h.name && f.push(' name="', qb(h.name), '"');
    if (h.type) {
      f.push(' type="', qb(h.type), '"');
      var n = {};
      mb(n, h);
      delete n.type;
      h = n;
    }
    f.push(">");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (p(h) ? f.className = h : fa(h) ? f.className = h.join(" ") : uc(f, h));
  2 < d.length && wc(e, f, d);
  return f;
}
function wc(a, b, c) {
  function d(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !ga(f) || ja(f) && 0 < f.nodeType ? d(f) : Cb(xc(f) ? Jb(f) : f, d);
  }
}
function R(a, b) {
  a.appendChild(b);
}
function yc(a) {
  a && a.parentNode && a.parentNode.removeChild(a);
}
function zc(a) {
  var b;
  if (rc && !(I && M("9") && !M("10") && k.SVGElement && a instanceof k.SVGElement) && (b = a.parentElement)) {
    return b;
  }
  b = a.parentNode;
  return ja(b) && 1 == b.nodeType ? b : null;
}
function Ac(a, b) {
  var c = [];
  return Bc(a, b, c, !0) ? c[0] : void 0;
}
function Cc(a, b) {
  var c = [];
  Bc(a, b, c, !1);
  return c;
}
function Bc(a, b, c, d) {
  if (null != a) {
    for (a = a.firstChild;a;) {
      if (b(a) && (c.push(a), d) || Bc(a, b, c, d)) {
        return !0;
      }
      a = a.nextSibling;
    }
  }
  return !1;
}
function xc(a) {
  if (a && "number" == typeof a.length) {
    if (ja(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ia(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}
;function Dc() {
  proj4.defs("EPSG:3043", "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
  proj4.defs("EPSG:4314", "+proj=longlat +ellps=bessel +datum=potsdam +no_defs");
  proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
  proj4.defs("EPSG:900913", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs");
  proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
}
function Ec(a) {
  var b = a.getFeatures()[0];
  if (l(b) && "Polygon" === b.getGeometry().getType()) {
    a = [];
    for (var b = b.getGeometry().getCoordinates()[0], c = 0;c < b.length;c++) {
      a.push(w.oa(b[c]));
    }
    return a;
  }
  return [];
}
function Fc() {
  var a = N("transformation-chooser");
  return "tps" === a.value.toLowerCase() ? "tps" : "polynom" === a.value.toLowerCase() ? "polynom" : "affine";
}
function Gc() {
  var a = N("projection-chooser");
  return null !== a && void 0 !== a ? a.value : "EPSG:4314";
}
;function Hc(a, b) {
  this.b = p(a) ? N(a) : a;
  var c = l("vertical") && p("vertical") ? "vertical" : "horizontal", d = this.b, e = Q("div", {"class":"opacity-container"});
  d.appendChild(e);
  d = Q("div", {"class":"slider-container opacity-slider"});
  e.appendChild(d);
  this.a = Q("div", {"class":"slider"});
  d.appendChild(this.a);
  Ic(this, this.a, b, c);
}
function Ic(a, b, c, d) {
  function e(a, b) {
    "vertical" == d ? b.style.top = 100 - (a - 0) / 100 * 100 + "%" : b.style.left = (a - 0) / 100 * 100 + "%";
    b.innerHTML = a + "%";
  }
  var f = 100 * c.getOpacity();
  $(b).slider({min:0, max:100, value:f, animate:"slow", orientation:d, step:1, slide:function(a, b) {
    var d = b.value;
    e(d, h);
    c.setOpacity(d / 100);
  }, change:r(function(a, b) {
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
;var Jc = !I || I && (H() || 9 <= pc), Kc = I && !M("9");
!L || M("528");
K && M("1.9b") || I && M("8") || hc && M("9.5") || L && M("528");
K && !M("8") || I && M("9");
function S(a, b) {
  y.call(this, a ? a.type : "");
  this.currentTarget = this.target = null;
  this.keyCode = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.o = this.i = this.a = this.c = !1;
  this.I = null;
  if (a) {
    this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var c = a.relatedTarget;
    if (c && K) {
      try {
        ob(c.nodeName);
      } catch (d) {
      }
    }
    this.offsetX = L || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = L || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.keyCode = a.keyCode || 0;
    this.c = a.ctrlKey;
    this.a = a.altKey;
    this.i = a.shiftKey;
    this.o = a.metaKey;
    this.I = a;
    a.defaultPrevented && this.preventDefault();
  }
}
u(S, y);
S.prototype.stopPropagation = function() {
  S.aa.stopPropagation.call(this);
  this.I.stopPropagation ? this.I.stopPropagation() : this.I.cancelBubble = !0;
};
S.prototype.preventDefault = function() {
  S.aa.preventDefault.call(this);
  var a = this.I;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Kc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Lc = "closure_lm_" + (1E6 * Math.random() | 0), Mc = {}, Nc = 0;
function T(a, b, c, d, e) {
  if (fa(b)) {
    for (var f = 0;f < b.length;f++) {
      T(a, b[f], c, d, e);
    }
    return null;
  }
  c = Oc(c);
  return a && a[Ua] ? a.w.add(String(b), c, !1, d, e) : Pc(a, b, c, !1, d, e);
}
function Pc(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, n = Qc(a);
  n || (a[Lc] = n = new Tb(a));
  c = n.add(b, c, d, e, f);
  if (c.a) {
    return c;
  }
  d = Rc();
  c.a = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), d, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(Sc(b.toString()), d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  Nc++;
  return c;
}
function Rc() {
  var a = Tc, b = Jc ? function(c) {
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
  if (fa(b)) {
    for (var f = 0;f < b.length;f++) {
      U(a, b[f], c, d, e);
    }
  } else {
    c = Oc(c), a && a[Ua] ? a.w.add(String(b), c, !0, d, e) : Pc(a, b, c, !0, d, e);
  }
}
function Uc(a, b, c, d, e) {
  if (fa(b)) {
    for (var f = 0;f < b.length;f++) {
      Uc(a, b[f], c, d, e);
    }
  } else {
    c = Oc(c), a && a[Ua] ? a.w.remove(String(b), c, d, e) : a && (a = Qc(a)) && (b = a.xa(b, c, !!d, e)) && Vc(b);
  }
}
function Vc(a) {
  if (!ha(a) && a && !a.S) {
    var b = a.src;
    if (b && b[Ua]) {
      Vb(b.w, a);
    } else {
      var c = a.type, d = a.a;
      b.removeEventListener ? b.removeEventListener(c, d, a.X) : b.detachEvent && b.detachEvent(Sc(c), d);
      Nc--;
      (c = Qc(b)) ? (Vb(c, a), 0 == c.b && (c.src = null, b[Lc] = null)) : Xa(a);
    }
  }
}
function Sc(a) {
  return a in Mc ? Mc[a] : Mc[a] = "on" + a;
}
function Wc(a, b, c, d) {
  var e = !0;
  if (a = Qc(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.X == c && !f.S && (f = Xc(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function Xc(a, b) {
  var c = a.listener, d = a.P || a.src;
  a.fa && Vc(a);
  return c.call(d, b);
}
function Tc(a, b) {
  if (a.S) {
    return !0;
  }
  if (!Jc) {
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
      for (var f = a.type, n = e.length - 1;!c.b && 0 <= n;n--) {
        c.currentTarget = e[n];
        var m = Wc(e[n], f, !0, c), d = d && m;
      }
      for (n = 0;!c.b && n < e.length;n++) {
        c.currentTarget = e[n], m = Wc(e[n], f, !1, c), d = d && m;
      }
    }
    return d;
  }
  return Xc(a, new S(b, this));
}
function Qc(a) {
  a = a[Lc];
  return a instanceof Tb ? a : null;
}
var Yc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Oc(a) {
  if (ia(a)) {
    return a;
  }
  a[Yc] || (a[Yc] = function(b) {
    return a.handleEvent(b);
  });
  return a[Yc];
}
;function Zc(a) {
  function b(a) {
    a.preventDefault();
    e.getMap().getView().setRotation(0);
  }
  a = a || {};
  var c = document.createElement("a");
  c.href = "#rotate-north";
  c.innerHTML = "N";
  c.className = "ol-has-tooltip";
  var d = Q("span", {role:"tooltip", innerHTML:w.f("rotatenorth")});
  c.appendChild(d);
  var e = this;
  T(c, "click", b, void 0, this);
  T(c, "touchstart", b, void 0, this);
  d = document.createElement("div");
  d.className = "rotate-north ol-unselectable";
  d.appendChild(c);
  ol.control.Control.call(this, {element:d, target:a.target});
}
ol.inherits(Zc, ol.control.Control);
function V() {
  Ra.call(this);
  this.w = new Tb(this);
  this.Ya = this;
  this.Da = null;
}
u(V, Ra);
V.prototype[Ua] = !0;
g = V.prototype;
g.addEventListener = function(a, b, c, d) {
  T(this, a, b, c, d);
};
g.removeEventListener = function(a, b, c, d) {
  Uc(this, a, b, c, d);
};
g.dispatchEvent = function(a) {
  var b, c = this.Da;
  if (c) {
    for (b = [];c;c = c.Da) {
      b.push(c);
    }
  }
  var c = this.Ya, d = a.type || a;
  if (p(a)) {
    a = new y(a, c);
  } else {
    if (a instanceof y) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new y(d, c);
      mb(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var h = b.length - 1;!a.b && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = $c(f, d, !0, a) && e;
    }
  }
  a.b || (f = a.currentTarget = c, e = $c(f, d, !0, a) && e, a.b || (e = $c(f, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.b && h < b.length;h++) {
      f = a.currentTarget = b[h], e = $c(f, d, !1, a) && e;
    }
  }
  return e;
};
g.N = function() {
  V.aa.N.call(this);
  if (this.w) {
    var a = this.w, b = 0, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0;e < d.length;e++) {
        ++b, Xa(d[e]);
      }
      delete a.a[c];
      a.b--;
    }
  }
  this.Da = null;
};
function $c(a, b, c, d) {
  b = a.w.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.S && h.X == c) {
      var n = h.listener, m = h.P || h.src;
      h.fa && Vb(a.w, h);
      e = !1 !== n.call(m, d) && e;
    }
  }
  return e && 0 != d.Ta;
}
g.xa = function(a, b, c, d) {
  return this.w.xa(String(a), b, c, d);
};
g.hasListener = function(a, b) {
  return this.w.hasListener(l(a) ? String(a) : void 0, b);
};
var ad = {"\u00c4":"maptype-\u00e4", M:"maptype-m", TK:"maptype-tk", GL:"maptype-gl", ToGeoref:"georeference-false"};
function bd(a, b) {
  this.m = p(a) ? N(a) : a;
  b || delete ad.ToGeoref;
  var c = "", d;
  for (d in ad) {
    c += '<label class="checkbox-inline"><input class="facet-search-el" type="checkbox" id="' + d + '" value="' + ad[d] + '">' + d + "</label>";
  }
  c = Q("div", {"class":"search-facet", innerHTML:c});
  this.m.appendChild(c);
  T(c, "click", function(a) {
    a = O("facet-search-el", a.currentTarget);
    for (var b = [], c = !0, d = 0;d < a.length;d++) {
      if (a[d].checked) {
        var m = a[d].value.split("-")[0], q = a[d].value.split("-")[1];
        "georeference" !== m && b.push({key:m, value:q});
        "georeference" === m && (c = !1);
      }
    }
    this.dispatchEvent(new y("facet-change", {facets:b, georeference:c}));
  }, void 0, this);
  V.call(this);
}
u(bd, V);
function cd(a, b) {
  this.b = p(a) ? N(a) : a;
  var c = void 0 !== b ? b : [1868, 1945], d = this.b, e = Q("div", {"class":"timeslider-container"});
  d.appendChild(e);
  d = Q("label", {innerHTML:w.f("change_timeperiod")});
  e.appendChild(d);
  d = Q("div", {"class":"slider-container"});
  e.appendChild(d);
  this.a = Q("div", {"class":"slider"});
  d.appendChild(this.a);
  dd(this, this.a, c);
  V.call(this);
}
u(cd, V);
function dd(a, b, c) {
  function d(a, b) {
    b.style.left = (a - c[0]) / (c[1] - c[0]) * 100 + "%";
    b.innerHTML = a;
  }
  var e, f;
  $(b).slider({range:!0, min:c[0], max:c[1], values:[c[0], c[1]], animate:"slow", orientation:"horizontal", step:1, slide:function(a, b) {
    var c = b.values;
    d(c[0], e);
    d(c[1], f);
  }, change:r(function(a, b) {
    var c = b.values;
    d(c[0], e);
    d(c[1], f);
    this.dispatchEvent(new y(ed, {time:c}));
  }, a)});
  e = Q("div", {"class":"tooltip min-value", innerHTML:c[0]});
  b.appendChild(e);
  f = Q("div", {"class":"tooltip max-value", innerHTML:c[1]});
  b.appendChild(f);
}
var ed = "timechange";
function W() {
  this.status_ = !1;
  V.call(this);
}
u(W, V);
W.prototype.a = function() {
};
W.prototype.v = function() {
};
function fd(a, b, c, d) {
  this.b = [c, d];
  this.c = [new ol.interaction.Draw({source:a, type:"Point", style:function() {
    return [w.j.ea];
  }}), new ol.interaction.Draw({source:b, type:"Point", style:function() {
    return [w.j.ea];
  }})];
  W.call(this);
}
u(fd, W);
fd.prototype.a = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].addInteraction(this.c[a]);
  }
  this.status_ = !0;
};
fd.prototype.v = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].removeInteraction(this.c[a]);
  }
  this.status_ = !1;
};
function gd(a, b, c, d) {
  function e(a, b, c) {
    var d = b.getSource().getFeatureById(a.getId());
    a = c.getSource().getFeatureById(a.getId());
    null != d && b.getSource().removeFeature(d);
    null != a && c.getSource().removeFeature(a);
  }
  this.b = [c, d];
  this.c = [new ol.interaction.Select({condition:ol.events.condition.click, layer:a, style:function() {
    return [w.j.ea];
  }, condition:r(function(d) {
    "click" === d.type && c.forEachFeatureAtPixel(d.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)}), new ol.interaction.Select({condition:ol.events.condition.click, layer:b, style:function() {
    return [w.j.ea];
  }, condition:r(function(c) {
    "click" === c.type && d.forEachFeatureAtPixel(c.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)})];
  W.call(this);
}
u(gd, W);
gd.prototype.a = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].addInteraction(this.c[a]);
  }
  this.status_ = !0;
};
gd.prototype.v = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].removeInteraction(this.c[a]);
  }
  this.status_ = !1;
};
function hd(a, b, c, d) {
  this.c = [c, d];
  var e = w.j.wa();
  c = [new ol.interaction.Select({style:function() {
    return [e];
  }, layer:a, condition:function(a) {
    return "click" === a.type ? !0 : !1;
  }}), new ol.interaction.Select({style:function() {
    return [e];
  }, layer:b, condition:function(a) {
    return "click" === a.type ? !0 : !1;
  }})];
  this.b = [[c[0], new ol.interaction.Modify({features:c[0].getFeatures(), pixelTolerance:10, style:function() {
    return [e];
  }})], [c[1], new ol.interaction.Modify({features:c[1].getFeatures(), pixelTolerance:10, style:function() {
    return [e];
  }})]];
  id(this, c, [a, b]);
  W.call(this);
}
u(hd, W);
hd.prototype.a = function() {
  for (var a = 0;a < this.c.length;a++) {
    for (var b = 0;b < this.b[a].length;b++) {
      this.c[a].addInteraction(this.b[a][b]);
    }
  }
  this.status_ = !0;
};
hd.prototype.v = function() {
  for (var a = 0;a < this.c.length;a++) {
    for (var b = 0;b < this.b[a].length;b++) {
      this.c[a].removeInteraction(this.b[a][b]);
    }
  }
  this.status_ = !1;
};
function id(a, b, c) {
  function d(a, d) {
    if (ea(a.getId())) {
      var e = c[0].getSource().getFeatureById(a.getId()), f = c[0].getSource().getFeatureById(a.getId());
      "add" === d ? (b[0].getFeatures().addFeature(e), b[1].getFeatures().addFeature(f)) : "remove" === d && (b[0].getFeatures().clear(), b[1].getFeatures().clear());
    }
  }
  var e = r(function(a) {
    d(a.element, "add");
    ea(a.element.getId()) && this.dispatchEvent(new y("selected", {feature:a.element, srcStyle:w.j.ja(a.element.getId()), targetStyle:w.j.wa(a.element.getId())}));
  }, a);
  a = r(function(a) {
    d(a.element, "remove");
    ea(a.element.getId()) && this.dispatchEvent(new y("deselected", {feature:a.element, srcStyle:w.j.wa(a.element.getId()), targetStyle:w.j.ja(a.element.getId())}));
  }, a);
  var f = b[0].getFeatures();
  f.on("add", e);
  f.on("remove", a);
  f = b[1].getFeatures();
  f.on("add", e);
  f.on("remove", a);
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
function jd(a, b) {
  var c = b.getSource();
  this.g = a;
  this.b = [new ol.interaction.Draw({features:c.getFeaturesCollection(), type:"Polygon", style:w.j.Ea}), new ol.interaction.Modify({features:b.getSource().getFeaturesCollection(), deleteCondition:function(a) {
    return ol.events.condition.shiftKeyOnly(a) && ol.events.condition.singleClick(a);
  }})];
  this.b[0].on("drawstart", function() {
    1 <= c.getFeatures().length && this.finishDrawing();
  }, this.b[0]);
  c.getFeaturesCollection().on("add", function() {
    1 < c.getFeatures().length && c.getFeatures().splice(1, 1);
  }, b);
  W.call(this);
}
u(jd, W);
jd.prototype.a = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.g.addInteraction(this.b[a]);
  }
  this.status_ = !0;
};
jd.prototype.v = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.g.removeInteraction(this.b[a]);
  }
  this.status_ = !1;
};
function kd() {
  V.call(this);
}
u(kd, V);
function ld(a, b, c, d, e) {
  if (!(I || L && M("525"))) {
    return !0;
  }
  if (ic && e) {
    return md(a);
  }
  if (e && !d) {
    return !1;
  }
  ha(b) && (b = nd(b));
  if (!c && (17 == b || 18 == b || ic && 91 == b)) {
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
  if (I && d && b == a) {
    return !1;
  }
  switch(a) {
    case 13:
      return !0;
    case 27:
      return !L;
  }
  return md(a);
}
function md(a) {
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
function nd(a) {
  if (K) {
    a = od(a);
  } else {
    if (ic && L) {
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
function od(a) {
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
;function pd(a, b) {
  V.call(this);
  a && (this.la && qd(this), this.Z = a, this.ka = T(this.Z, "keypress", this, b), this.ya = T(this.Z, "keydown", this.a, b, this), this.la = T(this.Z, "keyup", this.b, b, this));
}
u(pd, V);
g = pd.prototype;
g.Z = null;
g.ka = null;
g.ya = null;
g.la = null;
g.B = -1;
g.J = -1;
g.ra = !1;
var rd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, sd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, td = I || 
L && M("525"), ud = ic && K;
pd.prototype.a = function(a) {
  L && (17 == this.B && !a.c || 18 == this.B && !a.a || ic && 91 == this.B && !a.o) && (this.J = this.B = -1);
  -1 == this.B && (a.c && 17 != a.keyCode ? this.B = 17 : a.a && 18 != a.keyCode ? this.B = 18 : a.o && 91 != a.keyCode && (this.B = 91));
  td && !ld(a.keyCode, this.B, a.i, a.c, a.a) ? this.handleEvent(a) : (this.J = nd(a.keyCode), ud && (this.ra = a.a));
};
pd.prototype.b = function(a) {
  this.J = this.B = -1;
  this.ra = a.a;
};
pd.prototype.handleEvent = function(a) {
  var b = a.I, c, d, e = b.altKey;
  I && "keypress" == a.type ? c = this.J : L && "keypress" == a.type ? c = this.J : hc && !L ? c = this.J : (c = b.keyCode || this.J, d = b.charCode || 0, ud && (e = this.ra), ic && 63 == d && 224 == c && (c = 191));
  d = c = nd(c);
  var f = b.keyIdentifier;
  c ? 63232 <= c && c in rd ? d = rd[c] : 25 == c && a.i && (d = 9) : f && f in sd && (d = sd[f]);
  this.B = d;
  a = new vd(d, 0, 0, b);
  a.a = e;
  this.dispatchEvent(a);
};
function qd(a) {
  a.ka && (Vc(a.ka), Vc(a.ya), Vc(a.la), a.ka = null, a.ya = null, a.la = null);
  a.Z = null;
  a.B = -1;
  a.J = -1;
}
pd.prototype.N = function() {
  pd.aa.N.call(this);
  qd(this);
};
function vd(a, b, c, d) {
  S.call(this, d);
  this.type = "key";
  this.keyCode = a;
}
u(vd, S);
function wd(a, b, c) {
  if (ia(a)) {
    c && (a = r(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = r(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
}
;function xd(a, b) {
  this.ga = l(b) ? b : void 0;
  this.m = l(a) ? a : void 0;
  this.u = !1;
}
function yd(a) {
  for (var b in a) {
    if (a.hasOwnProperty(b)) {
      for (var c = a[b], d = 0;d < c.length;d++) {
        c[d].setOpacity(0), c[d].setVisible(!0);
      }
    }
  }
}
function zd(a, b) {
  yd(b);
  ({start:function(a, b, e) {
    if (e.u) {
      for (var f in a) {
        break;
      }
      var h = l(a[f]) ? a[f] : [];
      delete a[f];
      a = r(this.start, this, a, b, e);
      wd(oa(e.zb, h, a), b, e);
      l(e.ga) && (e.ga.innerHTML = l(f) ? f : "");
      l(f) || (console.log("Visualization finished ...."), e.u = !1, l(e.m) && D(e.m, "play"));
    }
  }}).start(b, 500, a);
}
function Ad(a, b) {
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
xd.prototype.zb = function(a, b) {
  ({Ma:function(a, b, e, f, h) {
    if (h.u) {
      var n = a[0].getOpacity() + b;
      if (1.05 >= n) {
        for (var m = 0;m < a.length;m++) {
          a[m].setOpacity(n);
        }
        wd(oa(this.Ma, a, b, e, f, h), e, this);
      } else {
        l(f) && f();
      }
    }
  }, start:function(a, b, e, f, h) {
    for (var n = 0;n < a.length;n++) {
      a[n].setOpacity(0), a[n].setVisible(!0);
    }
    wd(oa(this.Ma, a, b, e, f, h), e, this);
  }}).start(a, .1, 500, b, this);
};
function Bd(a) {
  a.u = !1;
  l(a.ga) && (a.ga.innerHTML = l(void 0) ? void 0 : "");
  l(a.m) && D(a.m, "play");
}
;function Cd(a, b, c) {
  if (p(b)) {
    (b = Dd(a, b)) && (a.style[b] = c);
  } else {
    for (var d in b) {
      c = a;
      var e = b[d], f = Dd(c, d);
      f && (c.style[f] = e);
    }
  }
}
var Ed = {};
function Dd(a, b) {
  var c = Ed[b];
  if (!c) {
    var d = zb(b), c = d;
    void 0 === a.style[d] && (d = (L ? "Webkit" : K ? "Moz" : I ? "ms" : hc ? "O" : null) + Ab(d), void 0 !== a.style[d] && (c = d));
    Ed[b] = c;
  }
  return c;
}
function Fd(a, b) {
  var c = a.style[zb(b)];
  return "undefined" !== typeof c ? c : a.style[Dd(a, b)] || "";
}
function Gd(a) {
  var b = Hd, c;
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
function Hd(a) {
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
      I && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop);
    }
    return new Za(e.right - e.left, e.bottom - e.top);
  }
  return new Za(b, c);
}
I && M(12);
function Id(a, b, c) {
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
  this.C = a;
  b.appendChild(this.C);
  Jd(this.C, c || !1);
}
function Kd(a, b) {
  for (var c = Cc(b, function(a) {
    return "a" === a.nodeName.toLowerCase() && a.hasAttribute("href");
  }), d = P("modal-content", a.C), e = 0;e < c.length;e++) {
    var f = c[e];
    if (!f.hasAttribute("target") || "_self" === f.getAttribute("target")) {
      f.setAttribute("data-href", f.href);
      f.href = "#";
      var h = l("map-profile") ? "map-profile" : f.hasAttribute("data-classname") ? f.getAttribute("data-classname") : "";
      T(f, "click", oa(function(a, b) {
        b.preventDefault();
        var c = b.currentTarget.getAttribute("data-href");
        Ld(this, {href:c, classes:a});
        d.className = "modal-content " + a;
        return !1;
      }, h), void 0, a);
    }
  }
}
function Jd(a, b) {
  $(a).on("hidden.bs.modal", function() {
    P("modal-body", this).innerHTML = "";
    P("modal-title", this.C).innerHTML = "";
    P("modal-content", this).className = "modal-content";
    b && yc(this);
  });
}
function Ld(a, b) {
  var c = P("modal-body", a.C);
  c.innerHTML = "";
  var d = Q("iframe", {frameborder:"0", src:b.href});
  d.setAttribute("webkitallowfullscreen", "");
  d.setAttribute("mozallowfullscreen", "");
  d.setAttribute("allowfullscreen", "");
  l(b.width) && Cd(d, "width", b.width);
  l(b.height) && Cd(d, "height", b.height);
  l(b.classes) && B(d, b.classes);
  c.appendChild(d);
}
Id.prototype.close = function() {
  l(this.C) && $(this.C).modal("hide");
};
Id.prototype.open = function(a, b, c) {
  null != a && a ? P("modal-title", this.C).innerHTML = a : this.a.style.display = "none";
  l(b) && (a = P("modal-content", this.C), B(a, b));
  l(c) && Ld(this, c);
  $(this.C).modal("show");
};
function Md(a, b) {
  var c = P("modal-body", a.C);
  ja(b) && 1 == b.nodeType && (c.appendChild(b), Kd(a, b));
}
function Nd(a, b) {
  var c = P("modal-body", a.C);
  p(b) && (c.innerHTML = b);
}
;var Od = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Pd(a) {
  if (Qd) {
    Qd = !1;
    var b = k.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Pd(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) {
        throw Qd = !0, Error();
      }
    }
  }
  return a.match(Od);
}
var Qd = L;
function Rd(a, b) {
  for (var c = a.split("&"), d = 0;d < c.length;d++) {
    var e = c[d].indexOf("="), f = null, h = null;
    0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
    b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
  }
}
;function X(a) {
  V.call(this);
  this.Za = new $b;
  this.L = a || null;
  this.u = !1;
  this.K = this.a = null;
  this.i = this.ba = "";
  this.b = this.T = this.c = this.R = !1;
  this.s = 0;
  this.l = null;
  this.da = Td;
  this.ca = this.$a = !1;
}
u(X, V);
var Td = "", Ud = /^https?$/i, Vd = ["POST", "PUT"], Wd = [];
function Xd(a, b, c, d) {
  var e = new X;
  Wd.push(e);
  b && e.w.add("complete", b, !1, void 0, void 0);
  e.w.add("ready", e.eb, !0, void 0, void 0);
  e.send(a, c, d, void 0);
}
g = X.prototype;
g.eb = function() {
  x(this);
  Hb(Wd, this);
};
g.send = function(a, b, c, d) {
  if (this.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.ba + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.ba = a;
  this.i = "";
  this.R = !1;
  this.u = !0;
  this.a = this.L ? Yb(this.L) : Yb(Wb);
  this.K = this.L ? eb(this.L) : eb(Wb);
  this.a.onreadystatechange = r(this.Qa, this);
  try {
    this.T = !0, this.a.open(b, String(a), !0), this.T = !1;
  } catch (e) {
    Yd(this, e);
    return;
  }
  a = c || "";
  var f = this.Za.clone();
  d && ec(d, function(a, b) {
    f.set(b, a);
  });
  d = Eb(f.getKeys());
  c = k.FormData && a instanceof k.FormData;
  !Gb(Vd, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.a.setRequestHeader(b, a);
  }, this);
  this.da && (this.a.responseType = this.da);
  "withCredentials" in this.a && (this.a.withCredentials = this.$a);
  try {
    Zd(this), 0 < this.s && ((this.ca = $d(this.a)) ? (this.a.timeout = this.s, this.a.ontimeout = r(this.Va, this)) : this.l = wd(this.Va, this.s, this)), this.c = !0, this.a.send(a), this.c = !1;
  } catch (h) {
    Yd(this, h);
  }
};
function $d(a) {
  return I && M(9) && ha(a.timeout) && l(a.ontimeout);
}
function Fb(a) {
  return "content-type" == a.toLowerCase();
}
g.Va = function() {
  "undefined" != typeof aa && this.a && (this.i = "Timed out after " + this.s + "ms, aborting", this.dispatchEvent("timeout"), this.a && this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ae(this)));
};
function Yd(a, b) {
  a.u = !1;
  a.a && (a.b = !0, a.a.abort(), a.b = !1);
  a.i = b;
  be(a);
  ae(a);
}
function be(a) {
  a.R || (a.R = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.N = function() {
  this.a && (this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1), ae(this, !0));
  X.aa.N.call(this);
};
g.Qa = function() {
  this.o || (this.T || this.c || this.b ? ce(this) : this.wb());
};
g.wb = function() {
  ce(this);
};
function ce(a) {
  if (a.u && "undefined" != typeof aa && (!a.K[1] || 4 != de(a) || 2 != ee(a))) {
    if (a.c && 4 == de(a)) {
      wd(a.Qa, 0, a);
    } else {
      if (a.dispatchEvent("readystatechange"), 4 == de(a)) {
        a.u = !1;
        try {
          var b = ee(a), c;
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
              var f = Pd(String(a.ba))[1] || null;
              if (!f && self.location) {
                var h = self.location.protocol, f = h.substr(0, h.length - 1)
              }
              e = !Ud.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          if (d) {
            a.dispatchEvent("complete"), a.dispatchEvent("success");
          } else {
            var n;
            try {
              n = 2 < de(a) ? a.a.statusText : "";
            } catch (m) {
              n = "";
            }
            a.i = n + " [" + ee(a) + "]";
            be(a);
          }
        } finally {
          ae(a);
        }
      }
    }
  }
}
function ae(a, b) {
  if (a.a) {
    Zd(a);
    var c = a.a, d = a.K[0] ? ba : null;
    a.a = null;
    a.K = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function Zd(a) {
  a.a && a.ca && (a.a.ontimeout = null);
  ha(a.l) && (k.clearTimeout(a.l), a.l = null);
}
function de(a) {
  return a.a ? a.a.readyState : 0;
}
function ee(a) {
  try {
    return 2 < de(a) ? a.a.status : -1;
  } catch (b) {
    return -1;
  }
}
function fe(a) {
  try {
    return a.a ? a.a.responseXML : null;
  } catch (b) {
    return null;
  }
}
function Y(a) {
  if (a.a) {
    return Ya(a.a.responseText);
  }
}
;function ge() {
  return {query:{filtered:{filter:{bool:{must:[]}}}}, sort:{}};
}
function he(a) {
  var b = {geo_shape:{}};
  b.geo_shape.geometry = {relation:"intersects", shape:{type:"polygon", coordinates:[a]}};
  return b;
}
function ie(a) {
  for (var b = [], c = {bool:{should:b}}, d = 0;d < a.length;d++) {
    var e = a[d], f = {term:{}};
    f.term[e.key] = e.value.toLowerCase();
    b.push(f);
  }
  return c;
}
function je(a) {
  var b = {range:{}};
  b.range.time = {gte:a[0], lte:a[1]};
  return b;
}
function ke(a, b) {
  var c = qa + "/map/_mget", d = JSON.stringify({ids:a});
  Xd(c, b, "POST", d);
}
function le(a, b) {
  for (var c = [], d = {query:{filtered:{filter:{bool:{should:c}}}}}, e = 0, f = b.length;e < f;e++) {
    var h = {term:{}};
    h.term[a] = b[e];
    c.push(h);
  }
  return d;
}
;function me(a, b, c, d) {
  var e = l(c) ? "webgl" : "canvas", f = l(d) ? d : !1;
  Xd(b, r(function(c) {
    200 != ee(c.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    c = fe(c.target);
    var d = Ac(c, function(a) {
      return 1 == a.nodeType && "IMAGE_PROPERTIES" == a.tagName;
    });
    c = parseInt(d.getAttribute("WIDTH"), 0);
    d = parseInt(d.getAttribute("HEIGHT"), 0);
    ne(this, b.substring(0, b.lastIndexOf("/") + 1), d, c, a, e, f);
  }, this), "GET");
  V.call(this);
}
u(me, V);
function ne(a, b, c, d, e, f, h) {
  a.c = c;
  a.i = d;
  var n = new ol.proj.Projection({code:"ZOOMIFY", units:"pixels", extent:[0, 0, d, c]});
  a.l = new ol.source.Zoomify({url:b, size:[d, c], crossOrigin:"*"});
  b = new ol.View({projection:n, center:[d / 2, -c / 2], zoom:1, maxZoom:9});
  a.b = new ol.layer.Tile({source:a.l});
  c = [new ol.control.FullScreen, new ol.control.Zoom];
  h && c.push(new ol.control.OverviewMap({collapsed:!1, layers:[a.b]}));
  a.a = new ol.Map({layers:[a.b], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), controls:c, renderer:f, target:e, view:b});
  a.a.addControl(new ol.control.ZoomToExtent({extent:b.calculateExtent(a.a.getSize())}));
  a.dispatchEvent(new y("loadend", {}));
}
me.prototype.getMap = function() {
  return this.a;
};
me.prototype.getHeight = function() {
  return parseInt(this.c, 0);
};
me.prototype.getWidth = function() {
  return parseInt(this.i, 0);
};
function oe(a, b) {
  me.call(this, a, b);
}
u(oe, me);
function Z(a, b) {
  this.i = this.s = this.o = "";
  this.H = null;
  this.l = this.b = "";
  this.c = !1;
  var c;
  a instanceof Z ? (this.c = l(b) ? b : a.c, pe(this, a.o), this.s = a.s, this.i = a.i, qe(this, a.H), this.b = a.b, re(this, a.a.clone()), this.l = a.l) : a && (c = Pd(String(a))) ? (this.c = !!b, pe(this, c[1] || "", !0), this.s = se(c[2] || ""), this.i = se(c[3] || "", !0), qe(this, c[4]), this.b = se(c[5] || "", !0), re(this, c[6] || "", !0), this.l = se(c[7] || "")) : (this.c = !!b, this.a = new te(null, 0, this.c));
}
Z.prototype.toString = function() {
  var a = [], b = this.o;
  b && a.push(ue(b, ve, !0), ":");
  if (b = this.i) {
    a.push("//");
    var c = this.s;
    c && a.push(ue(c, ve, !0), "@");
    a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    b = this.H;
    null != b && a.push(":", String(b));
  }
  if (b = this.b) {
    this.i && "/" != b.charAt(0) && a.push("/"), a.push(ue(b, "/" == b.charAt(0) ? we : xe, !0));
  }
  (b = this.a.toString()) && a.push("?", b);
  (b = this.l) && a.push("#", ue(b, ye));
  return a.join("");
};
Z.prototype.clone = function() {
  return new Z(this);
};
function pe(a, b, c) {
  a.o = c ? se(b, !0) : b;
  a.o && (a.o = a.o.replace(/:$/, ""));
}
function qe(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.H = b;
  } else {
    a.H = null;
  }
}
function re(a, b, c) {
  b instanceof te ? (a.a = b, ze(a.a, a.c)) : (c || (b = ue(b, Ae)), a.a = new te(b, 0, a.c));
}
function Be(a) {
  return a.a;
}
function se(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function ue(a, b, c) {
  return p(a) ? (a = encodeURI(a).replace(b, Ce), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Ce(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var ve = /[#\/\?@]/g, xe = /[\#\?:]/g, we = /[\#\?]/g, Ae = /[\#\?@]/g, ye = /#/g;
function te(a, b, c) {
  this.b = this.a = null;
  this.c = a || null;
  this.o = !!c;
}
function De(a) {
  a.a || (a.a = new $b, a.b = 0, a.c && Rd(a.c, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
g = te.prototype;
g.ua = function() {
  De(this);
  return this.b;
};
g.add = function(a, b) {
  De(this);
  this.c = null;
  a = Ee(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b++;
  return this;
};
g.remove = function(a) {
  De(this);
  a = Ee(this, a);
  return cc(this.a.g, a) ? (this.c = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1;
};
g.clear = function() {
  this.a = this.c = null;
  this.b = 0;
};
g.isEmpty = function() {
  De(this);
  return 0 == this.b;
};
function Fe(a, b) {
  De(a);
  b = Ee(a, b);
  return cc(a.a.g, b);
}
g.getKeys = function() {
  De(this);
  for (var a = this.a.F(), b = this.a.getKeys(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
g.F = function(a) {
  De(this);
  var b = [];
  if (p(a)) {
    Fe(this, a) && (b = Ib(b, this.a.get(Ee(this, a))));
  } else {
    a = this.a.F();
    for (var c = 0;c < a.length;c++) {
      b = Ib(b, a[c]);
    }
  }
  return b;
};
g.set = function(a, b) {
  De(this);
  this.c = null;
  a = Ee(this, a);
  Fe(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b++;
  return this;
};
g.get = function(a, b) {
  var c = a ? this.F(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
g.toString = function() {
  if (this.c) {
    return this.c;
  }
  if (!this.a) {
    return "";
  }
  for (var a = [], b = this.a.getKeys(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.F(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.c = a.join("&");
};
g.clone = function() {
  var a = new te;
  a.c = this.c;
  this.a && (a.a = this.a.clone(), a.b = this.b);
  return a;
};
function Ee(a, b) {
  var c = String(b);
  a.o && (c = c.toLowerCase());
  return c;
}
function ze(a, b) {
  b && !a.o && (De(a), a.c = null, a.a.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.c = null, this.a.set(Ee(this, e), Jb(a)), this.b += a.length));
  }, a));
  a.o = b;
}
;w.Db = function() {
  $(window);
};
w.W = function(a) {
  var b = Gd(N("spatialsearch-container")), c = Gd(N("layermanagement-container")), d = Gd(N("mapdiv")), c = d.width - c.width - 30, b = a.getCoordinateFromPixel([0 + b.width + 30, d.height - 25 - 30]);
  a = a.getCoordinateFromPixel([c, 35]);
  return [b[0], b[1], a[0], a[1]];
};
w.Ga = function() {
  navigator.cookieEnabled || alert("For proper working of the virtuel map forum 2.0 please activate cookies in your browser");
};
w.Ja = function(a) {
  return Be(l(a) ? new Z(a) : new Z(window.location.href));
};
w.Ka = function(a, b) {
  return a = F(a, b) ? a : w.Ka(zc(a), b);
};
w.f = function(a) {
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
w.rb = function(a) {
  return [[a[0], a[1]], [a[0], a[3]], [a[2], a[3]], [a[2], a[1]], [a[0], a[1]]];
};
w.getQueryParam = function(a, b) {
  return l(b) ? w.Ja(b).get(a) : w.Ja().get(a);
};
w.hb = function() {
  return cb.get("vk2-welcomepage");
};
w.gb = function(a, b, c, d) {
  var e = new Id("vk2-overlay-modal", document.body, !0);
  e.open(a, l(d) ? d : "");
  Nd(e, "<p>" + b + '</p><br><button type="button" class="btn btn-primary" id="confirm-dialog-btn-yes">' + w.f("yes") + '</button><button type="button" class="btn btn-primary"id="confirm-dialog-btn-no">' + w.f("no") + "</button>");
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
w.Hb = function() {
  return l(cb.get("auth_tkt")) ? !0 : !1;
};
w.Oa = function(a) {
  a = O(a, (l(void 0) ? void 0 : document.body).body);
  for (var b = 0;b < a.length;b++) {
    T(a[b], "click", function(a) {
      a.preventDefault();
      try {
        var b = new Id("vk2-overlay-modal", document.body, !0), e = this.title, f = this.getAttribute("data-classes");
        b.open(e, f, {href:this.href, classes:f});
        a.preventDefault();
      } catch (h) {
      }
    });
  }
};
w.round = function(a, b) {
  var c = l(b) ? Math.pow(10, Math.ceil(b)) : Math.pow(10, 2);
  return Math.round(a * c) / c;
};
w.xb = function(a) {
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
w.Jb = function(a, b, c) {
  var d = new X;
  U(d, "success", function(a) {
    a = a.target;
    l(b) && b(a);
    x(a);
  });
  U(d, "error", function(a) {
    a = a.target;
    l(c) && c(a);
  });
  d.send(a);
};
w.Ua = function(a, b) {
  cb.set(a, b);
};
t("vk2.utils.setCookie", w.Ua);
w.Kb = function() {
};
w.Lb = function(a, b) {
  var c = Q("div", {"class":"georef-point-container alert alert-warning", style:"display:none;"});
  a.appendChild(c);
  c.innerHTML = "+" + b + " " + w.f("georef_points");
  $(c).fadeIn(1E3).effect("puff", {}, 3E3, function() {
    c.innerHTML = "";
  });
};
w.oa = function(a) {
  return [Math.round(a[0]), Math.round(-1 * a[1])];
};
w.Wa = function(a) {
  return [Math.round(a[0]), Math.round(-1 * a[1])];
};
function Ge(a) {
  this.g = a;
  this.m = Q("div", {"class":"dyn-vis-control"});
  a = Q("div", {"class":"content", style:"display:none;"});
  this.m.appendChild(a);
  var b = Q("div", {"class":"feedback"});
  a.appendChild(b);
  this.ta = new xd(this.m, b);
  He(this, a);
  Ie(this, this.m, a);
}
function Ie(a, b, c) {
  var d = Q("a", {innerHTML:"o", "class":"open-dyn-vis"});
  b.insertBefore(d, b.childNodes[0] || null);
  T(d, "click", function(a) {
    a.preventDefault();
    $(c).slideToggle();
    F(a.currentTarget, "open") ? (Bd(this.ta), D(a.currentTarget, "open")) : B(a.currentTarget, "open");
  }, void 0, a);
}
function He(a, b) {
  var c = Q("div", {"class":"start-container"});
  b.appendChild(c);
  var d = Q("a", {href:"#dynamic-start", title:w.f("dynMapVisStart"), innerHTML:"Start"});
  c.appendChild(d);
  T(d, "click", function(a) {
    a.preventDefault();
    var b = this.g.getLayers().getArray();
    a = [];
    for (var c = 0;c < b.length;c++) {
      b[c] instanceof Je && a.push(b[c]);
    }
    b = this.ta;
    c = this.g;
    b.u || (b.u = !0, a = Ad(a, c), zd(b, a), l(b.m) && !F(b.m, "play") && B(b.m, "play"));
  }, void 0, a);
  c = Q("span", {role:"tooltip", innerHTML:w.f("dynMapVisStart")});
  d.appendChild(c);
  c = Q("div", {"class":"stop-container"});
  b.appendChild(c);
  d = Q("a", {href:"#dynamic-stop", title:w.f("dynMapVisStop"), innerHTML:"Stop"});
  c.appendChild(d);
  T(d, "click", function(a) {
    a.preventDefault();
    Bd(this.ta);
  }, void 0, a);
  c = Q("span", {role:"tooltip", innerHTML:w.f("dynMapVisStop")});
  d.appendChild(c);
}
;function Ke(a) {
  a = a || {};
  var b = document.createElement("a");
  b.href = "#image-manipulation";
  b.innerHTML = "I";
  b.className = "ol-has-tooltip";
  var c = Q("span", {role:"tooltip", innerHTML:w.f("openImagemanipulation")});
  b.appendChild(c);
  c = r(function(a) {
    a.preventDefault();
    F(a.target, "active") ? (D(a.target, "active"), $(this.a).fadeOut().removeClass("open")) : (B(a.target, "active"), l(this.a) || (this.a = Le(this, a.currentTarget.parentElement)), $(this.a).fadeIn().addClass("open"));
  }, this);
  T(b, "click", c, void 0, this);
  T(b, "touchstart", c, void 0, this);
  c = document.createElement("div");
  c.className = "image-manipulation ol-unselectable";
  c.appendChild(b);
  ol.control.Control.call(this, {element:c, target:a.target});
}
ol.inherits(Ke, ol.control.Control);
function Me(a) {
  return a.getMap().getLayers().getArray()[0];
}
function Le(a, b) {
  function c(a) {
    a = a.glContext;
    var b = a.Gb();
    if (void 0 !== a && null !== a) {
      var c = a.getGL();
      if (h) {
        glif.reset();
        for (var d in e) {
          glif.addFilter(d, e[d]);
        }
        h = !1;
      }
      glif.apply(c, b);
      a.useProgram(void 0);
    }
  }
  function d(a, b, d, f, m) {
    function q(a, f) {
      var m = f.value;
      n || (d.on("postcompose", c), n = !0);
      Zb.style.left = (m - C) / (Sd - C) * 100 + "%";
      Zb.innerHTML = m;
      e[b] = m;
      h = !0;
      d.changed();
    }
    m = Q("div", {"class":"slider " + a, title:l("opt_title") ? m : "", "data-type":b});
    var C = l(f) ? f[1] : 0, Sd = l(f) ? f[2] : 100, Hf = l(f) ? f[3] : 1, If = l(f) ? f[0] : 100;
    $(m).slider({min:C, max:Sd, value:If, animate:"slow", orientation:"horizontal", step:Hf, slide:q, change:q});
    var Zb = Q("div", {"class":"tooltip value " + a, innerHTML:l(f) ? f[0] : ""});
    m.appendChild(Zb);
    return m;
  }
  var e = {brightness:1, contrast:1, hue:0, saturation:0}, f = kb(e), h = !1, n = !1, m = Q("div", {"class":"slider-container", style:"display:none;"});
  b.appendChild(m);
  var q = d("slider-contrast", "contrast", Me(a), [1, 0, 2, .01], w.f("contrast"));
  m.appendChild(q);
  q = d("slider-saturation", "saturation", Me(a), [0, -1, 1, .01], w.f("saturation"));
  m.appendChild(q);
  q = d("slider-brightness", "brightness", Me(a), [1, 0, 2, .1], w.f("brightness"));
  m.appendChild(q);
  q = d("slider-hue", "hue", Me(a), [0, -180, 180, 5], w.f("hue"));
  m.appendChild(q);
  q = Q("button", {"class":"reset-btn", title:w.f("reset"), innerHTML:"Reset"});
  m.appendChild(q);
  T(q, "click", function() {
    Me(this).un("postcompose", c);
    n = !1;
    for (var a = O("slider", m), b = 0;b < a.length;b++) {
      var d = a[b], e = d.getAttribute("data-type"), e = f[e];
      $(d).slider("value", e);
    }
  }, void 0, a);
  return m;
}
;function Ne(a) {
  function b(a) {
    a.target.getArray()[a.target.getLength() - 1] !== n && (this.getMap().removeLayer(n), this.getMap().addLayer(n));
  }
  function c(a) {
    89 === a.keyCode ? (E = Math.min(E + 5, 150), this.getMap().render()) : 88 === a.keyCode && (E = Math.max(E - 5, 25), this.getMap().render());
  }
  function d() {
    J = null;
    this.getMap().render();
  }
  function e(a) {
    J = this.getMap().getEventPixel(a.I);
    this.getMap().render();
  }
  function f(a) {
    var b = a.context;
    a = a.frameState.pixelRatio;
    b.save();
    b.beginPath();
    J && (b.arc(J[0] * a, J[1] * a, E * a, 0, 2 * Math.PI), b.lineWidth = 5 * a, b.strokeStyle = "rgba(0,0,0,0.5)", b.stroke());
    b.clip();
  }
  function h(a) {
    a.context.restore();
  }
  a = a || {};
  var n = l(a.spyLayer) ? a.spyLayer : new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM({attribution:void 0})}), m = Q("a", {"class":"ol-has-tooltip", href:"#layerspy", innerHTML:"L"}), q = Q("div", {"class":"ol-layerspy ol-unselectable"});
  q.appendChild(m);
  var z = Q("span", {role:"tooltip", innerHTML:w.f("layerspy")});
  m.appendChild(z);
  var E = l(a.radius) ? parseInt(a.radius, 0) : 75, J = null;
  this._keyHandler = null;
  T(m, "click", r(function(a) {
    a.preventDefault();
    F(m, "active") ? (n.un("precompose", f, this), n.un("postcompose", h, this), Uc(this.getMap().getViewport(), "mousemove", e, void 0, this), Uc(this.getMap().getViewport(), "mouseout", d, void 0, this), this.getMap().removeLayer(n), D(m, "active"), Uc(this._keyHandler, "key", c, void 0, this), this.getMap().getLayers().un("add", b, this)) : (this.getMap().addLayer(n), n.on("precompose", f, this), n.on("postcompose", h, this), T(this.getMap().getViewport(), "mousemove", e, void 0, this), T(this.getMap().getViewport(), 
    "mouseout", d, void 0, this), B(m, "active"), this._keyHandler = this._keyHandler || new pd(document), T(this._keyHandler, "key", c, void 0, this), this.getMap().getLayers().on("add", b, this));
  }, this));
  ol.control.Control.call(this, {element:q, target:a.target});
}
ol.inherits(Ne, ol.control.Control);
function Oe(a) {
  function b(a) {
    var b = this.getMap();
    a = ol.proj.transform(b.getEventCoordinate(a), Ha.projection, "EPSG:4326");
    e.innerHTML = "Lon: " + w.round(a[0], 3) + ", Lat: " + w.round(a[1], 3);
  }
  a = a || {};
  var c = document.createElement("a");
  c.href = "#mouse-position";
  c.innerHTML = "M";
  c.className = "ol-has-tooltip";
  var d = Q("span", {role:"tooltip", innerHTML:w.f("mouseposition")});
  c.appendChild(d);
  var e = void 0, d = r(function(a) {
    a.preventDefault();
    var c = !Qb(a.target), d = this.getMap();
    ol.proj.transform(d.getEventCoordinate(a), Ha.projection, "EPSG:4326");
    var m = a.target;
    Qb(m) ? Sb(m) : Rb(m);
    void 0 === e ? (m = d.getViewport(), e = Q("div", {"class":"mouse-position-box", innerHTML:"Hallo"}), m.appendChild(e)) : e.innerHTML = "";
    c ? T(d.getViewport(), "mousemove", b, void 0, this) : Uc(d.getViewport(), "mousemove", b, void 0, this);
    b.call(this, [a]);
    a = e;
    Qb(a) ? Sb(a) : Rb(a);
  }, this);
  T(c, "click", d);
  T(c, "touchstart", d);
  d = document.createElement("div");
  d.className = "mouse-position ol-unselectable";
  d.appendChild(c);
  ol.control.Control.call(this, {element:d, target:a.target});
}
ol.inherits(Oe, ol.control.Control);
function Pe(a, b, c) {
  $(a).hover(function() {
    F(this, "hover") || (c.getSource().clear(), c.getSource().addFeature(b), B(this, "hover"));
  }, function() {
    F(this, "hover") && (c.getSource().clear(), D(this, "hover"));
  });
}
;function Je(a) {
  this.id_ = l(a.id) ? a.id : void 0;
  this.time_ = a.time;
  this.title_ = l(a.title) ? a.title : void 0;
  this.thumb_ = l(a.thumbnail) ? a.thumbnail : Ja;
  this.allowManage_ = !0;
  for (var b = [], c = 0;c < Ka.length;c++) {
    b.push(a.tms.replace("{s}", Ka[c]) + "/{z}/{x}/{-y}.png");
  }
  c = Qe(this, a.clip);
  b = new ol.layer.Tile({extent:a.extent, source:new ol.source.XYZ({maxZoom:15, urls:b})});
  c = new ol.layer.Vector({source:new ol.source.Vector({features:[c]}), style:function() {
    return [w.j.cb];
  }});
  a.layers = [b, c];
  ol.layer.Group.call(this, a);
}
ol.inherits(Je, ol.layer.Group);
function Qe(a, b) {
  for (var c = [], d = 0, e = b.length;d < e;d++) {
    c.push(ol.proj.transform(b[d], ra, Ha.projection));
  }
  c = new ol.Feature(new ol.geom.Polygon([c]));
  c.setProperties({objectid:a.id_, time:a.time_, title:a.title_});
  c.setId(a.id_);
  return c;
}
Je.prototype.getTime = function() {
  return this.time_;
};
Je.prototype.ha = function() {
  return this.allowManage_;
};
Je.prototype.getId = function() {
  return this.id_;
};
function Re(a, b) {
  var c = l(a.Y) ? a.Y : void 0, d = l(a.projection) ? a.projection : "EPSG:900913", e = l(a.Xa) ? a.Xa : void 0, f = l(a.Na) ? a.Na : void 0, h = void 0 === c ? void 0 : c.getExtent();
  a.source = new ol.source.TileWMS({url:e, params:{LAYERS:f, VERSION:"1.1.1"}, projection:d, extent:h});
  a.preload = Infinity;
  d = new ol.layer.Tile(a);
  d.qb = r(function(a) {
    for (var b = [], d = c.getCoordinates()[0], e = 0;e < d.length;e++) {
      b.push(a.getPixelFromCoordinate(d[e]));
    }
    return b;
  }, d);
  d.fb = function(a, b, c) {
    c.beginPath();
    c.moveTo(a[0][0] * b, a[0][1] * b);
    for (var d = 1;d < a.length;d++) {
      c.lineTo(a[d][0] * b, a[d][1] * b);
    }
    c.closePath();
  };
  l(c) && (d.on("precompose", function(a) {
    var c = a.context, d = this.qb(b);
    c.save();
    this.fb(d, a.frameState.pixelRatio, c);
    c.clip();
  }, d), d.on("postcompose", function(a) {
    a.context.restore();
  }));
  return d;
}
;function Se(a) {
  this.s = l(a.projection) ? a.projection : "EPSG:900913";
  this.da = l(a.ub) ? a.ub : 20;
  this.za = void 0;
  this.l = new ol.Collection;
  this.L = "title";
  this.T = "ascending";
  this.c = 0;
  this.i = void 0;
  this.b = {V:l(a.time) ? a.time[0] : 1868, qa:l(a.time) ? a.time[1] : 1945};
  this.g = a.map;
  this.K = [];
  this.R = !0;
  this.a();
  V.call(this);
}
u(Se, V);
Se.prototype.a = function() {
  this.g.on("moveend", function() {
    var a = w.W(this.g);
    l(this.za) && ol.extent.equals(this.za, a) || this.pa();
  }, this);
};
function Te(a, b, c) {
  var d = [a.b.V + "-01-01", a.b.qa + "-01-01"], e = "ascending" === a.T ? "asc" : "desc";
  if (a.R) {
    b = w.rb(ol.proj.transformExtent(b, c, ra));
    c = a.L;
    a = a.K;
    var f = [], h = ge();
    f.push(je(d));
    f.push(he(b));
    f.push(ie(a));
    f.push({term:{georeference:!0}});
    h.query.filtered.filter.bool.must = f;
    h.sort[c] = {order:e};
    return h;
  }
  b = a.L;
  a = a.K;
  c = [];
  f = ge();
  c.push(je(d));
  c.push(ie(a));
  c.push({term:{georeference:!1}});
  f.query.filtered.filter.bool.must = c;
  f.sort[b] = {order:e};
  return f;
}
Se.prototype.ca = function(a) {
  this.dispatchEvent(new y("refresh", {features:a, totalFeatureCount:this.i}));
};
Se.prototype.ba = function(a) {
  this.dispatchEvent(new y("paginate", {features:a, totalFeatureCount:this.i}));
};
function Ue(a, b, c, d) {
  b = Te(a, b, c);
  c = qa + "/_search?from=" + a.c + "&size=" + a.da;
  var e = new X;
  U(e, "success", function(a) {
    a = a.target;
    if (Y(a)) {
      var b = Y(a);
      this.i = b.hits.total;
      x(a);
      a = Na(b.hits.hits);
      this.l.extend(a);
      this.c += a.length;
      d.call(this, a);
    } else {
      console.log("Response is empty");
    }
  }, !1, a);
  e.send(c, "POST", JSON.stringify(b));
}
Se.prototype.pa = function() {
  var a = w.W(this.g);
  Ve(this, a, this.s);
  this.za = Jb(a);
};
function Ve(a, b, c) {
  a.l.clear();
  a.c = 0;
  Ue(a, b, c, a.ca);
}
;function We(a, b, c) {
  this.m = p(a) ? N(a) : a;
  this.a = new Se({projection:"EPSG:900913", map:b});
  T(this.a, "refresh", r(this.s, this));
  T(this.a, "paginate", r(this.pa, this));
  this.i = ["time", "title", "georeference"];
  this.c = new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [w.j.bb];
  }});
  b.addLayer(this.c);
  Xe(this, this.m);
  Ye(this, this.m);
  Ze(this);
  $e(this);
  af(this, c);
  V.call(this);
}
u(We, V);
function Xe(a, b) {
  var c = Q("div", {"class":"mapsearch-container"});
  b.appendChild(c);
  var d = Q("div", {"class":"panel panel-default searchTablePanel"});
  c.appendChild(d);
  c = Q("div", {"class":"panel-heading"});
  d.appendChild(c);
  a.l = Q("div", {"class":"content"});
  c.appendChild(a.l);
  c = Q("div", {"class":"panel-body"});
  d.appendChild(c);
  d = Q("div", {"class":"mapsearch-list"});
  c.appendChild(d);
  c = Q("div", {"class":"list-header"});
  d.appendChild(c);
  for (var e = 0;e < a.i.length;e++) {
    var f = a.i[e], h = Q("div", {"class":"inner-col " + f}), f = Q("div", {"data-type":f, "class":"sort-element " + f, innerHTML:w.f(f) + ' <span class="caret caret-reversed"></span>'});
    h.appendChild(f);
    c.appendChild(h);
  }
  a.b = Q("ul", {id:"mapsearch-contentlist", "class":"mapsearch-contentlist"});
  d.appendChild(a.b);
}
function $e(a) {
  l(a.b) && T(a.b, "click", function(a) {
    a.preventDefault();
    var c = w.Ka(a.I.target, "mapsearch-record"), d;
    this.a.l.forEach(function(a) {
      a.get("id") == c.id && (d = a);
    });
    this.dispatchEvent(new y("click-record", {feature:d}));
  }, void 0, a);
}
function Ye(a, b) {
  for (var c = O("sort-element", b), d = 0;d < c.length;d++) {
    T(c[d], "click", function(a) {
      a = a.target.getAttribute("data-type");
      for (var b = P("sort-element " + a), c = F(b, "ascending") ? "descending" : "ascending", d = O("sort-element"), m = 0;m < d.length;m++) {
        D(d[m], "descending"), D(d[m], "ascending");
      }
      B(b, c);
      this.a.L = a;
      this.a.T = c;
      a = this.a;
      Ve(a, w.W(a.g), a.s);
    }, void 0, a);
  }
}
function Ze(a) {
  var b = !1;
  l(a.b) && T(a.b, "scroll", function(a) {
    if (!b) {
      b = !0;
      a = a.currentTarget;
      if (a.offsetHeight + a.scrollTop >= a.scrollHeight && (a = this.a, !(a.l.getLength() >= a.i) && (a = this.a, a.c < a.i && 500 > a.c))) {
        var d = w.W(a.g);
        Ue(a, d, a.s, a.ba);
      }
      b = !1;
    }
  }, void 0, a);
}
function af(a, b) {
  T(b, "facet-change", function(a) {
    var b = this.a;
    a = a.target;
    b.R = a.georeference;
    b.K = a.facets;
    b.pa();
  }, void 0, a);
}
function bf(a, b) {
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
    var n = Q("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:e.get("thumb")});
    h.appendChild(n);
    h = Q("div", {"class":"overview"});
    f.appendChild(h);
    f = Q("h2", {innerHTML:e.get("title")});
    h.appendChild(f);
    f = Q("p", {"class":"details"});
    h.appendChild(f);
    h = Q("div", {"class":"timestamp", innerHTML:w.f("timestamp") + " " + e.get("time")});
    f.appendChild(h);
    h = Q("div", {"class":"scale", innerHTML:w.f("scale") + " 1:25.000"});
    f.appendChild(h);
    e.get("georeference") || (e = Q("div", {"class":"georeference", innerHTML:w.f("not_georeference")}), f.appendChild(e));
    a.b.appendChild(d);
    l(a.c) && Pe(d, b[c], a.c);
  }
}
We.prototype.s = function(a) {
  cf(this, a.target.totalFeatureCount);
  this.b.innerHTML = "";
  bf(this, a.target.features);
};
We.prototype.pa = function(a) {
  cf(this, a.target.Nb);
  bf(this, a.target.features);
};
function cf(a, b) {
  a.l.innerHTML = 0 < b ? b + " " + w.f("found_mtb") : w.f("found_no_maps");
}
;function df(a) {
  this.i = p(a) ? N(a) : a;
  ef(this, this.i);
  this.b = {};
  this.l = {placename:r(function(a) {
    this.b.hasOwnProperty(a) ? ff(this, this.b[a][0]) : gf(this, a, r(function(a) {
      0 < a.length ? ff(this, a[0]) : alert("The choosen placename is unknown.");
    }, this));
  }, this)};
  hf(this);
  jf(this);
  V.call(this);
}
u(df, V);
function ef(a, b) {
  var c = Q("div", {"class":"gazetteersearch-container"});
  b.appendChild(c);
  var d = Q("div", {"class":"form-group"});
  c.appendChild(d);
  a.a = Q("input", {placeholder:w.f("gazetteer_placeholder"), type:"text", "class":"form-control gazetteersearch-input"});
  d.appendChild(a.a);
  a.c = Q("input", {value:w.f("gazetteer_submit"), type:"submit", "class":"form-control gazetteersearch-submit"});
  d.appendChild(a.c);
}
function hf(a) {
  $(a.a).autocomplete({source:r(function(a, c) {
    gf(this, a.term, c);
  }, a), delay:300, minLength:3, autoFocus:!0, select:r(function(a, c) {
    ff(this, c.item);
  }, a), open:function() {
    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
  }, close:function() {
    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
  }});
}
function jf(a) {
  var b = r(function(a) {
    this.l.placename(-1 < a.indexOf(",") ? a.split(",")[0] : a);
  }, a);
  T(a.a, "keydown", function(a) {
    13 === a.keyCode && b(this.a.value);
  }, void 0, a);
  T(a.c, "click", function() {
    b(this.a.value);
  }, void 0, a);
}
function gf(a, b, c) {
  B(a.a, "loading");
  Xd("https://search.mapzen.com/v1/autocomplete?api_key=search-53q8sJs&text=" + b + "&focus.point.lat=51&focus.point.lon=13", r(function(a) {
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
    x(a);
    a = $.map(e.features, function(a) {
      return {label:a.properties.label, value:a.properties.name, lonlat:{x:a.geometry.coordinates[0], y:a.geometry.coordinates[1]}, type:a.properties.layer};
    });
    this.b[b] = a;
    c(a);
    F(this.a, "loading") && D(this.a, "loading");
  }, a), "GET");
}
function ff(a, b) {
  a.dispatchEvent(new y(kf, {location_type:b.type, lonlat:[b.lonlat.x, b.lonlat.y], srs:l(void 0) ? void 0 : "EPSG:4326"}));
}
var kf = "jumpto";
function lf(a, b, c) {
  var d = this.l = p(a) ? N(a) : a;
  a = Q("div", {"class":"spatialsearch-inner-container"});
  d.appendChild(a);
  d = Q("div", {"class":"spatialsearch-content-panel"});
  a.appendChild(d);
  a = Q("div", {"class":"header-container"});
  d.appendChild(a);
  this.c = Q("div", {"class":"content"});
  a.appendChild(this.c);
  this.a = Q("div", {"class":"body-container"});
  d.appendChild(this.a);
  this.b = new df(this.a);
  this.i = new cd(this.a, Ia);
  a = this.a;
  c = new bd(a, c);
  this.o = new We(a, b, c);
}
;function mf(a, b, c) {
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
  f = w.f("mdrecord_keyword");
  d = c.keywords;
  e = nf(a);
  f = Q("div", {"class":"label", innerHTML:f});
  e.appendChild(f);
  d = Q("div", {innerHTML:d});
  e.appendChild(d);
  for (e = 0;e < c["online-resources"].length;e++) {
    var f = w.f("mdrecord_onlineresource"), d = c["online-resources"][e].url, h = nf(a), f = Q("div", {"class":"label", innerHTML:f});
    h.appendChild(f);
    f = Q("div");
    h.appendChild(f);
    var h = new Z(d), n = !1;
    l(h.a.get("SERVICE")) && "wcs" == h.a.get("SERVICE").toLowerCase() && h.a.get("REQUEST") && "getcoverage" == h.a.get("REQUEST").toLowerCase() && (n = !0);
    re(h, "", void 0);
    d = n ? Q("a", {target:"_blank", href:d, innerHTML:h.toString(), "class":"download"}) : Q("a", {target:"_blank", href:d, innerHTML:h.toString()});
    f.appendChild(d);
  }
  d = w.f("mdrecord_spatialresolution");
  c = c.denominator;
  e = nf(a);
  d = Q("div", {"class":"label", innerHTML:d});
  e.appendChild(d);
  d = Q("div");
  e.appendChild(d);
  e = Q("label", {innerHTML:""});
  d.appendChild(e);
  c = Q("span", {innerHTML:c});
  d.appendChild(c);
  b = Q("span", {"class":"unique-id metadata-content-row", innerHTML:'<div class="label">' + w.f("mdrecord_uniqueid") + "</div><div>" + b + "</div>"});
  a.appendChild(b);
}
function nf(a) {
  var b = Q("div", {"class":"metadata-content-row"});
  a.appendChild(b);
  return b;
}
;t("vk2.app.MapProfileApp", function(a) {
  var b = w.getQueryParam("objectid");
  null != b ? Xd(qa + "/map/" + b, r(function(b) {
    if (b = Y(b.target)) {
      b = Ma(b._id, b._source), of(b, a);
    }
  }, this)) : console.log("Could not identify objectid.");
});
function of(a, b) {
  var c = a.getProperties();
  N(b.titleshortId).innerHTML = c.title;
  N(b.titlelongId).innerHTML = c.titlelong;
  N(b.linkToFotothekId).href = c.plink;
  if (ol.has.WEBGL) {
    d = new me(b.zoomifyContainer, c.zoomify, !0), new mf(b.metadataContainer, a.getId(), c), T(d, "loadend", function() {
      d.getMap().addControl(new Ke);
    });
  } else {
    var d = new me(b.zoomifyContainer, c.zoomify);
    new mf(b.metadataContainer, a.getId(), c);
  }
}
;w.h = {};
w.h.sa = function(a) {
  a = a.split("/");
  for (var b = "/", c = 0;c < a.length;c++) {
    "" !== a[c] && (b += a[c] + "/");
  }
  return b;
};
w.h.A = function() {
  var a = new Z(window.location.href), b = w.getQueryParam("L");
  return v ? Fa : a.b + "?" + Fa + "&L=" + (void 0 !== b && "" !== b ? b : 0);
};
w.h.va = function(a) {
  new Z(window.location.href);
  return v ? ua + "&" + a : w.h.A() + "&" + ua + "&" + a;
};
w.h.mb = function(a) {
  new Z(window.location.href);
  return v ? wa + "&" + a : w.h.A() + "&" + wa + "&" + a;
};
w.h.lb = function(a) {
  new Z(window.location.href);
  return v ? va + "&" + a : w.h.A() + "&" + va + "&" + a;
};
w.h.ob = function() {
  new Z(window.location.href);
  return v ? Aa : w.h.A() + "&" + Aa;
};
w.h.nb = function() {
  new Z(window.location.href);
  return v ? Ba : w.h.A() + "&" + Ba;
};
w.h.jb = function(a) {
  new Z(window.location.href);
  return v ? za + "&" + a : w.h.A() + "&" + za + "&" + a;
};
w.h.kb = function() {
  new Z(window.location.href);
  return v ? Ea + "&undefined" : w.h.A() + "&" + Ea + "&undefined";
};
w.h.ib = function() {
  new Z(window.location.href);
  return v ? xa + "&undefined" : w.h.A() + "&" + xa + "&undefined";
};
w.h.ia = function(a, b) {
  var c = void 0 !== a ? "&objectid=" + a : void 0 !== b ? "&" + b : "", d = new Z(window.location.href);
  return v ? w.h.sa(d.b + "/" + Da) + "?" + c : w.h.A() + "&" + Da + c;
};
w.h.La = function(a) {
  var b = new Z(window.location.href);
  return v ? w.h.sa(b.b + "/" + Ga) + "?objectid=" + a : w.h.A() + "&" + Ga + "&objectid=" + a;
};
w.h.pb = function() {
  var a = new Z(window.location.href);
  return v ? w.h.sa(a.b) + "/" + Fa : w.h.A();
};
t("vk2.app.GeoreferenceChooseApp", function(a) {
  pf(this, N(a.target), N(a.targetCount));
});
function qf(a, b, c) {
  void 0 !== a.hits && void 0 !== a.hits.total && (c.innerHTML = a.hits.total);
  if (void 0 !== a.hits && void 0 !== a.hits.hits && 0 < a.hits.hits.length) {
    b.innerHTML = "";
    c = Q("ul");
    b.appendChild(c);
    b = 0;
    for (var d = a.hits.hits.length;b < d;b++) {
      R(c, rf(a.hits.hits[b]));
    }
  }
  $("body").scroll(function() {
    $(".lazy-image").sb();
  });
  $(".lazy-image").sb();
}
function pf(a, b, c) {
  var d = new X;
  U(d, "success", function(a) {
    a = a.target;
    var d = Y(a);
    qf(d, b, c);
    x(a);
  }, !1, a);
  U(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = qa + "/_search?size=2000";
  var e = le("georeference", [!1]);
  e.sort = {title:{order:"asc"}};
  d.send(a, "POST", JSON.stringify(e));
}
function rf(a) {
  var b = a._source, c = a._id;
  a = b.maptype;
  var d = void 0 !== b.thumb ? b.thumb : "#", c = void 0 !== c ? w.h.ia(c) : "#", e = b.time;
  return Q("li", {id:b.id, innerHTML:'<div class="container record-container"><div class="image"><img class="lazy-image" alt="" data-original="' + d + '"></div><div class="body"><p><strong>' + b.title + "</strong></p><p>" + w.f("georef-choose-time") + ": " + e + "</p><p>" + w.f("georef-choose-maptype") + ": " + a + '</p></div><div class="tools"><a class="btn btn-primary" href="' + c + '" target="_blank">' + w.f("georef-choose-goToGeoreference") + "</a></div></div>"});
}
;t("vk2.app.UserHistoryApp", function(a) {
  sf(this, N(a.target), N(a.targetPoints));
});
function sf(a, b, c) {
  var d = new X;
  U(d, "success", function(a) {
    a = a.target;
    var d = Y(a);
    void 0 !== d.points && (c.innerHTML = d.points);
    if (void 0 !== d.georef_profile) {
      for (var h = 0, n = d.georef_profile.length;h < n;h++) {
        var m;
        m = d.georef_profile[h];
        var q = void 0 !== m.transformed && !0 === m.transformed ? La + "?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities&map=" + m.mapid : "#", z = void 0 !== m.thumbnail ? m.thumbnail : "#", E = void 0 !== m.transformed && !0 === m.transformed ? '<a href="#" target="_blank">Klick</a>' : w.f("georef-history-beingGenerated"), J = "" !== m.isvalide ? m.isvalide : "unknown";
        m = Q("article", {id:m.georefid, innerHTML:'<div class="media"><a class="pull-right" href="' + q + '"><img alt="" src="' + z + '"></a><div class="media-body"><p><strong>' + w.f("georef-history-processId") + ":</strong><br>" + m.georefid + "</p><p><strong>" + w.f("georef-history-isValidated") + ":</strong><br>" + J + "</p><p><strong>" + w.f("georef-history-mapId") + ":</strong><br>" + m.mapid + "</p><p><strong>" + w.f("georef-history-mapSheetInfo") + ":</strong><br>" + m.title + "</p><p><strong>" + 
        w.f("georef-history-georefParams") + ":</strong><br>" + JSON.stringify(m.georefparams) + "</p><p><strong>" + w.f("georef-history-persistentAccess") + ":</strong><br>" + E + '</p><p class="meta">Created: ' + m.georeftime + "</p></div></div>"});
        b.appendChild(m);
      }
    }
    x(a);
  }, !1, a);
  U(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = w.h.ob();
  d.send(a, "GET");
}
;t("vk2.app.WelcomePageApp", function(a) {
  var b = void 0 !== a.georefenceElClass ? O(a.georefenceElClass) : void 0, c = void 0 !== a.overallGeorefenceElClass ? O(a.overallGeorefenceElClass) : void 0, d = void 0 !== a.relGeoreferenceElClass ? O(a.relGeoreferenceElClass) : void 0, e = void 0 !== a.georeferenceUserRankingElId ? N(a.georeferenceUserRankingElId) : void 0;
  $("#" + a.deactivateWelcomePageId).Fb(function() {
    var a = $(this).Ib("checked") ? "off" : "on";
    w.Ua("vk2-welcomepage", a);
  });
  void 0 !== b && void 0 !== c && void 0 !== d && void 0 !== e && tf(this, b, c, d, e);
});
function tf(a, b, c, d, e) {
  var f = new X;
  U(f, "success", function(a) {
    a = a.target;
    var f = Y(a), m = f.georeference_map_count, q = m + f.missing_georeference_map_count, z = parseInt(m / q * 100);
    uf(b, m);
    uf(c, q);
    for (m = 0;m < d.length;m++) {
      var q = Fd(d[m], "width"), E = Fd(d[m], "margin-left");
      void 0 !== q && "" !== q && Cd(d[m], "width", z + "%");
      void 0 !== E && "" !== E && (-1 < E.indexOf("-") ? Cd(d[m], "margin-left", "-" + z + "%") : Cd(d[m], "margin-left", z + "%"));
    }
    $("head").append("<style>.vk2WelcomePageBody .vk2GeoreferenceProgressText .content:after{ left:" + z + "%; }</style>");
    z = Math.min(f.pointoverview.length, 3);
    for (m = 0;m < z;m++) {
      q = f.pointoverview[m], q = Q("li", {innerHTML:"<span><b>" + (q.hasOwnProperty("username") ? q.username : q.userid) + ":</b> " + q.points + " Punkt</span>"}), e.appendChild(q);
    }
    x(a);
  }, !1, a);
  U(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = w.h.nb();
  f.send(a, "GET");
}
function uf(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c].innerHTML = b;
  }
}
;function vf(a, b, c) {
  var d = a.getVisible() ? "visible" : "notvisible", e = Q("li", {"class":"layermanagement-record " + d, id:b, "data-id":a.getId()});
  b = Q("div", {"class":"control-container"});
  e.appendChild(b);
  d = Q("button", {"class":"move-layer-top minimize-tool", type:"button", title:w.f("moveToTop"), innerHTML:w.f("moveToTop")});
  b.appendChild(d);
  T(d, "click", function(b) {
    c.removeLayer(a);
    c.addLayer(a);
    b.stopPropagation();
  });
  d = Q("button", {"class":"disable-layer minimize-tool", type:"button", title:w.f("showLayer"), innerHTML:w.f("showLayer")});
  b.appendChild(d);
  T(d, "click", function() {
    F(e, "visible") ? (Ob(e, "visible", "notvisible"), a.setVisible(!1)) : (Ob(e, "notvisible", "visible"), a.setVisible(!0));
  });
  d = Q("button", {"class":"remove-layer minimize-tool", type:"button", title:w.f("removeLayer"), innerHTML:w.f("removeLayer")});
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
  d = Q("span", {"class":"timestamps-label", innerHTML:w.f("timestamp") + " " + a.getTime()});
  f.appendChild(d);
  cb.get("vk2-auth") && (d = Q("a", {"class":"georeference-update", innerHTML:w.f("updateGeoref") + " ...", target:"_blank", href:w.h.ia(a.getId())}), b.appendChild(d));
  new Hc(e, a);
  a.on("change:visible", function() {
    !a.getVisible() && F(e, "visible") ? Ob(e, "visible", "notvisible") : a.getVisible() && F(e, "notvisible") && Ob(e, "notvisible", "visible");
  });
  return e;
}
;function wf(a, b, c) {
  Xd(w.h.kb(), function(a) {
    200 === ee(a.target) ? b(a) : c(a);
  }, "POST", "req=" + JSON.stringify(a));
}
function xf(a, b) {
  Xd(w.h.ib(), b, "POST", "req=" + JSON.stringify(a));
}
;function yf(a, b, c) {
  this.l = p(a) ? N(a) : a;
  this.a = b;
  this.g = c;
  this.i = new Ge(this.g);
  c = this.l;
  a = this.i;
  b = Q("div", {"class":"layermanagement-container", id:"layermanagement-container"});
  c.appendChild(b);
  c = Q("div", {"class":"heading"});
  b.appendChild(c);
  var d = Q("span", {"class":"header-label", innerHTML:w.f("layermanagement_label")});
  c.appendChild(d);
  c.appendChild(a.m);
  this.b = Q("ul", {"class":"layermanagement-body", innerHTML:'<li class="empty">' + w.f("start_message") + "</li>"});
  b.appendChild(this.b);
  this.a.on("add", this.c, this);
  this.a.on("remove", this.c, this);
  V.call(this);
}
u(yf, V);
function zf(a) {
  a = a.a.getArray();
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    l(a[c].ha) && a[c].ha() && b.push(a[c]);
  }
  return b;
}
function Af(a, b) {
  for (var c = a.a.getArray(), d = 0, e = c.length;d < e;d++) {
    if (b === c[d]) {
      return d;
    }
  }
}
yf.prototype.c = function(a) {
  if (l(a.element.ha) && a.element.ha()) {
    this.b.innerHTML = "";
    a = zf(this);
    for (var b = a.length - 1;0 <= b;b--) {
      var c = vf(a[b], b, this.g);
      this.b.appendChild(c);
    }
  }
  $(this.b).sortable({revert:!0, handle:".drag-btn", stop:r(function(a, b) {
    var c = zf(this), h = O("layermanagement-record", this.b), n = h.length - parseInt(h[b.item.index()].id, 0) - 1, m = b.item.index(), q = c.length - 1 - m, h = parseInt(h[m].id, 0);
    l(h) && n != m && (n = c[h], m = Af(this, n), this.a.removeAt(m), c = Af(this, c[q]), q > h ? this.a.insertAt(c + 1, n) : this.a.insertAt(c, n));
  }, this)});
};
function Bf() {
  V.call(this);
}
u(Bf, V);
function Cf(a, b) {
  var c = Be(new Z(window.location.href)), d, e = 4;
  if (Fe(c, "c")) {
    var f = c.get("c").split(",");
    d = ol.proj.transform([parseFloat(f[0], 0), parseFloat(f[1], 0)], "EPSG:4326", Ha.projection);
    e = parseInt(c.get("z"), 0);
    Df(b, d, e);
  }
  var h = r(function(a, c) {
    var f = Na(a);
    if (void 0 !== c) {
      for (var h = 0;h < n.length;h++) {
        for (var J = 0;J < f.length;J++) {
          n[h] == f[J].getId() && this.dispatchEvent(new y("addmap", {feature:f[J]}));
        }
      }
    } else {
      for (J = 0;J < f.length;J++) {
        this.dispatchEvent(new y("addmap", {feature:f[J]}));
      }
    }
    !d && 0 < f.length && (d = f[0].getGeometry().getInteriorPoint().getCoordinates());
    Df(b, d, e);
  }, a);
  if (Fe(c, "oid") && "" !== c.get("oid")) {
    for (var n = c.get("oid").split(","), c = 0;c < n.length;c++) {
      "" == n[c] && n.splice(c, 1);
    }
    n.reverse();
    ke(n, function(a) {
      a = a.target;
      var b = Y(a) ? Y(a) : void 0;
      x(a);
      void 0 !== b.docs && 0 < b.docs.length && h(b.docs, n);
    });
  } else {
    Fe(c, "dataid") && "" !== c.get("dataid") && (f = qa + "/_search", c = le("dataid", [c.get("dataid")]), Xd(f, function(a) {
      a = a.target;
      var b = Y(a) ? Y(a) : void 0;
      x(a);
      void 0 !== b.hits && void 0 !== b.hits.hits && 0 < b.hits.hits.length && h(b.hits.hits);
    }, "POST", JSON.stringify(c)));
  }
}
function Ef(a) {
  var b = "";
  a.getLayers().forEach(function(a) {
    l(a.getId) && (b += a.getId() + ",");
  });
  var c = ol.proj.transform(a.getView().getCenter(), Ha.projection, "EPSG:4326");
  a = a.getView().getZoom();
  var d = new Z(window.location.origin + w.h.A() + "&welcomepage=off"), e = d.a;
  e.set("z", a);
  e.set("c", w.round(c[0], 4) + "," + w.round(c[1], 4));
  e.set("oid", b);
  re(d, e);
  return d.toString();
}
function Df(a, b, c) {
  a.getView().setCenter(b);
  a.getView().setZoom(c);
}
;function Ff(a) {
  a = a || {};
  var b = Q("div", {"class":"permalink ol-unselectable"}), c = Q("a", {href:"#permalink", innerHTML:"P", "class":"ol-has-tooltip"});
  b.appendChild(c);
  var d = Q("span", {role:"tooltip", innerHTML:w.f("permalink")});
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
  d = Q("label", {"for":"permalinkResult", innerHTML:w.f("permalink_msg") + " " + d + "+C."});
  e.appendChild(d);
  b.appendChild(e);
  d = r(function(a) {
    a.preventDefault();
    $(e).hasClass("open") ? ($(e).fadeOut().removeClass("open"), $(f).blur()) : (f.value = Ef(this.getMap()), $(e).fadeIn().addClass("open"), $(f).focus().select());
  }, this);
  T(c, "click", d);
  T(c, "touchstart", d);
  ol.control.Control.call(this, {element:b, target:a.target});
}
ol.inherits(Ff, ol.control.Control);
function Gf(a) {
  this.g = Jf(a);
  this.g.on("singleclick", function(a) {
    var c = [];
    this.forEachFeatureAtPixel(a.pixel, function(a) {
      c.push(a);
    });
    Kf(c);
  });
}
t("vk2.controller.MapController", Gf);
function Jf(a) {
  new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:3})});
  return new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.OSM})], renderer:"canvas", target:a, interactions:ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom]), controls:[new ol.control.Attribution({collapsible:!1, collapsed:!1}), new ol.control.Zoom, new ol.control.FullScreen, new Ne({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}), new Zc, new ol.control.ScaleLine, new Ff, new Oe], view:new ol.View({projection:"EPSG:900913", minResolution:1.194328566789627, 
  maxResolution:2445.9849047851562, extent:[640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], center:[1531627.8847864927, 6632124.286850829], zoom:4})});
}
function Lf(a, b) {
  T(b, "jumpto", function(a) {
    var b = this.g.getView(), e = a.target.lonlat;
    b.setCenter(ol.proj.transform([parseFloat(e[0]), parseFloat(e[1])], a.target.srs, "EPSG:900913"));
    b.setZoom(5);
  }, void 0, a);
}
function Mf(a, b) {
  a.a = b;
  T(a.a, "click-record", function(a) {
    a = a.target.feature;
    if (a.get("georeference")) {
      this.g.addLayer(Nf(a));
    } else {
      if (void 0 !== a) {
        var b = new Id("vk2-overlay-modal", document.body, !0);
        b.open(void 0, "mapcontroller-click-modal georeference-dialog");
        var e = Q("section"), f = Q("a", {"class":"btn btn-primary", href:w.h.ia(a.getId()), innerHTML:w.f("go_to_georeference"), target:"_blank"});
        e.appendChild(f);
        f = Q("a", {"class":"btn btn-primary", href:w.h.La(a.getId()), innerHTML:w.f("go_to_originalmap"), target:"_self"});
        e.appendChild(f);
        Md(b, e);
      }
    }
  }, void 0, a);
}
function Of(a, b) {
  T(b, "addmap", function(a) {
    this.g.addLayer(Nf(a.target.feature));
  }, void 0, a);
}
function Pf(a, b) {
  T(b, "timechange", function(a) {
    var b = this.a.a, e = a.target.time[0];
    a = a.target.time[1];
    var f = b.b.V;
    if (null != e && ha(e)) {
      if (e > b.b.qa) {
        throw {name:"WrongParameterExecption", message:"Start value shouldn't be higher than the end value."};
      }
      b.b.V = e;
    }
    if (null != a && ha(a)) {
      if (a < b.b.V) {
        throw b.b.V = f, {name:"WrongParameterExecption", message:"End value shouldn't be lower than the start value."};
      }
      b.b.qa = a;
    }
    b = this.a.a;
    Ve(b, w.W(b.g), b.s);
  }, void 0, a);
}
function Nf(a) {
  return new Je({time:a.get("time"), extent:a.getGeometry().getExtent(), thumbnail:a.get("thumb"), title:a.get("title"), objectid:a.get("id"), id:a.getId(), dataid:a.get("dataid"), tms:a.get("tms"), clip:a.get("clippolygon")});
}
function Kf(a) {
  if (0 < a.length) {
    var b = new Id("vk2-overlay-modal", document.body, !0);
    b.open(void 0, "mapcontroller-click-modal");
    for (var c = Q("section"), d = 0;d < a.length;d++) {
      var e = Q("a", {href:w.h.La(a[d].getId()), innerHTML:a[d].get("title") + " " + a[d].get("time"), target:"_self"});
      c.appendChild(e);
      var f = Q("br");
      c.appendChild(f);
    }
    Md(b, c);
    1 == a.length && e.click();
  }
}
Gf.prototype.getMap = function() {
  return this.g;
};
Gf.prototype.getMap = Gf.prototype.getMap;
function Qf(a, b) {
  Mf(a, b.o);
  Pf(a, b.i);
  Lf(a, b.b);
}
;t("vk2.app.PresentationApp", function(a) {
  w.Ga();
  var b = l(a.authenticate) && "boolean" == typeof a.authenticate ? a.authenticate : !1, c = b && Ca ? !0 : !1;
  w.Oa(l(a.modalAnchorClassName) ? a.modalAnchorClassName : "vk2-modal-anchor");
  b || Rf();
  b = new Gf(a.mapContainerId);
  c = new lf(a.spatialsearchContainerId, b.getMap(), c);
  Qf(b, c);
  new yf(a.mapContainerId, b.getMap().getLayers(), b.getMap());
  c = new Bf(b.getMap());
  Cf(c, b.getMap());
  Of(b, c);
  setTimeout(function() {
    w.xb(a.mapContainerId);
  }, 500);
});
function Rf() {
  var a = w.getQueryParam("welcomepage");
  N("welcome-page-link") && "off" !== w.hb() && "off" !== a && N("welcome-page-link").click();
}
;function Sf(a, b, c, d) {
  var e = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-submit deactivate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + w.f("submitBtn_validate")});
  N(a).appendChild(e);
  T(e, "click", r(this.a, this, b, c, d));
  V.call(this);
}
u(Sf, V);
Sf.prototype.a = function(a, b, c) {
  this.dispatchEvent(new y("start-confirm", {}));
  var d = Tf(b), e = Ec(c);
  c = b.getType();
  4 > d.gcps.length ? alert("You have to place at least 4 ground control points") : (a = {georeference:d, id:a, clip:{source:"pixel", polygon:e}, type:c}, "update" === c && (b = l(b.Ra) ? b.Ra : void 0, a.overwrites = b), b = r(function(a) {
    a = Y(a.target);
    this.dispatchEvent(new y("end-confirm", {data:a}));
  }, this), r(function() {
    this.dispatchEvent(new y("error", {error:"Something went wrong, while sending confirmation data from the server."}));
  }, this), xf(a, b));
};
function Uf(a, b, c, d) {
  var e = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-validate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + w.f("validateBtn_validate")});
  N(a).appendChild(e);
  T(e, "click", r(this.a, this, b, c, d));
  V.call(this);
}
u(Uf, V);
Uf.prototype.a = function(a, b, c) {
  b = Vf(b, Fc(), Gc());
  c = Ec(c);
  a = {georeference:b, id:a, clip:{source:"pixel", polygon:c}};
  4 > a.georeference.gcps.length || (this.dispatchEvent(new y("start-warping", {})), c = r(function(a) {
    a = Y(a.target);
    this.dispatchEvent(new y("end-warping", {data:a}));
  }, this), b = r(function() {
    this.dispatchEvent(new y("error", {error:"Something went wrong, while fetching validation data from the server."}));
  }, this), wf(a, c, b));
};
function Wf(a) {
  this.a = l(a.O) && ja(a.O) ? l(a.O["new"]) ? kb(a.O["new"]) : kb(a.O) : {source:"pixel", target:"EPSG:4314"};
  this.Ra = l(a.Aa) ? a.Aa : void 0;
  this.b = l(a.Mb) ? a.Ba : {source:"pixel", target:"EPSG:900913"};
  this.U = a.sources;
  this.l = l(a.type) ? "update" === a.type ? !0 : !1 : !1;
  this.c = new Oa;
  this.i();
  V.call(this);
}
u(Wf, V);
Wf.prototype.i = function() {
  Xf(this, this.U);
  if (this.a.hasOwnProperty("gcps")) {
    for (var a = this.a, b = this.U, c = this.b, d = 0;d < a.gcps.length;d++) {
      var e = a.gcps[d], f = w.Wa(e.source), f = new ol.Feature(new ol.geom.Point(f)), e = ol.proj.transform(e.target, a.target, c.target), e = new ol.Feature(new ol.geom.Point(e));
      b[0].addFeature(f);
      b[1].addFeature(e);
    }
  }
};
function Xf(a, b) {
  function c(a) {
    var c = b[0].getFeatureById(a), h = b[1].getFeatureById(a);
    if (null != c && null != h) {
      c.setProperties({yb:!0});
      h.setProperties({yb:!0});
      var n = w.j.ja();
      n.getText().setText("" + a);
      c.setStyle(n);
      h.setStyle(n);
      d.a = !1;
      d.b = !1;
    }
  }
  var d = a.c;
  b[0].on("addfeature", function(a) {
    if (!1 === d.a) {
      var b = Pa(d);
      a = a.feature;
      d.a = !0;
      a.setId(b);
      a.setStyle(w.j.Fa);
      d.a && d.b && c(b);
    } else {
      alert("Please add source to other map!"), this.removeFeature(a.feature);
    }
  });
  b[0].on("removefeature", function(a) {
    a = a.feature.getId();
    var c = b[0].getFeatureById(a);
    null === b[1].getFeatureById(a) & null === c && d.a && (d.a = !1);
  });
  b[1].on("removefeature", function(a) {
    a = a.feature.getId();
    var c = b[0].getFeatureById(a);
    null === b[1].getFeatureById(a) & null === c && d.b && (d.b = !1);
  });
  b[1].on("addfeature", function(a) {
    if (!1 === d.b) {
      var b = Pa(d);
      a = a.feature;
      d.b = !0;
      a.setId(b);
      a.setStyle(w.j.Fa);
      d.a && d.b && c(b);
    } else {
      alert("Please add source to other map!"), this.removeFeature(a.feature);
    }
  });
}
function Vf(a, b, c) {
  b = l(b) ? b : "affine";
  a = Yf(a, l(c) ? c : void 0);
  a.algorithm = b;
  return a;
}
function Yf(a, b) {
  var c = r(function(a, b) {
    for (var c = [], d = 0;d < a.length;d++) {
      var e = w.oa(a[d][0].getGeometry().getCoordinates()), z = ol.proj.transform(a[d][1].getGeometry().getCoordinates(), this.b.target, b);
      c.push({source:e, target:z});
    }
    return c;
  }, a), d = kb(a.a), e = l(b) ? b : d.target;
  d.gcps = c(function(a) {
    for (var b = [], c = 0;c < a[0].getFeatures().length;c++) {
      var d = a[0].getFeatures()[c], e;
      ea(d.getId()) && (e = a[1].getFeatureById(d.getId()));
      null != d && null != e && b.push([d, e]);
    }
    return b;
  }(a.U), e);
  d.target = e;
  return d;
}
function Tf(a) {
  var b = Fc(), c = Gc(), b = l(b) ? b : "affine", d = kb(a.a), c = Vf(a, b, l(c) ? c : d.target);
  Vf(a, b, d.target);
  return c;
}
Wf.prototype.getType = function() {
  return this.l ? "update" : "new";
};
function Zf(a) {
  this.s = a.Ca;
  Wf.call(this, a);
}
u(Zf, Wf);
Zf.prototype.i = function() {
  $f(this, this.U);
};
function $f(a, b) {
  function c(a) {
    l(a.feature.getId()) || (alert("As first please select the 4 corner points on the source map."), this.removeFeature(a.feature));
  }
  function d(a, b, c) {
    var d;
    c = 0 < a[0] - c / 2 ? !1 : !0;
    a = 0 < a[1] - b / 2 ? !1 : !0;
    c && a && (d = "ulc");
    c && !a && (d = "llc");
    !c && a && (d = "urc");
    c || a || (d = "lrc");
    return d;
  }
  var e = a.s, f = a.a, h = a.b.target, n = r(function() {
    b[0].un("addfeature", q);
    b[1].un("addfeature", c);
    Xf(this, b);
  }, a), m = r(function() {
    for (var a = b[0].getFeatures(), c = {}, f = 0;f < a.length;f++) {
      var h = w.oa(a[f].getGeometry().getCoordinates()), n = d(h, e.getHeight(), e.getWidth());
      c[n] = h;
    }
    this.dispatchEvent(new y("add-gcp-clippolygon", {clip:{source:"pixel", polygon:[c.ulc, c.urc, c.lrc, c.llc, c.ulc]}}));
  }, a), q = r(function(a) {
    a = a.feature;
    var c = w.oa(a.getGeometry().getCoordinates()), c = d(c, e.getHeight(), e.getWidth()), q = f.gcps, ca = {};
    if (0 < q.length) {
      for (var sa = q[0].target[0], ta = q[0].target[1], C = 0;C < q.length;C++) {
        q[C].target[0] < sa && (sa = q[C].target[0]), q[C].target[1] < ta && (ta = q[C].target[1]);
      }
      for (C = 0;C < q.length;C++) {
        q[C].target[0] === sa && q[C].target[1] === ta && (ca.llc = q[C].target), q[C].target[0] === sa && q[C].target[1] > ta && (ca.ulc = q[C].target), q[C].target[0] > sa && q[C].target[1] === ta && (ca.lrc = q[C].target), q[C].target[0] > sa && q[C].target[1] > ta && (ca.urc = q[C].target);
      }
    }
    c = ol.proj.transform(ca[c], f.target, h);
    c = new ol.Feature(new ol.geom.Point(c));
    q = Pa(this.c);
    a.setId(q);
    c.setId(q);
    ca = w.j.ja();
    ca.getText().setText(q);
    a.setStyle(ca);
    c.setStyle(ca);
    b[1].addFeature(c);
    4 === b[0].getFeatures().length && (n(), m());
  }, a);
  b[0].on("addfeature", q);
  b[1].on("addfeature", c);
}
;function ag(a) {
  this.c = p(a) ? N(a) : a;
  var b = Q("div", {"class":"georef-tools-clip-container", id:"georef-tools-clip-container"});
  this.c.appendChild(b);
  bg(this, b);
  a = Q("div", {"class":"georef-tools-clip-inner-container", id:"georef-tools-clip-inner-container"});
  b.appendChild(a);
  var b = [], c = cg("noneToggle", "none", w.f("moveMap"));
  a.appendChild(c);
  b.push(c);
  var d = cg("drawClip", "drawclip", w.f("drawClip"));
  a.appendChild(d);
  b.push(d);
  T(c, "click", r(this.b, this, "none", b));
  T(d, "click", r(this.b, this, "drawclip", b));
  V.call(this);
}
u(ag, kd);
ag.prototype.a = function() {
  var a = N("georef-tools-clip-handler");
  null != a && F(a, "open") || $(a).trigger("click");
};
function cg(a, b, c) {
  var d = Q("div", {"class":"tool"});
  a = Q("div", {id:a, "class":"tool-move toggle-elements", value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
ag.prototype.v = function() {
  var a = N("georef-tools-clip-handler");
  if (null == a || F(a, "open")) {
    $(a).trigger("click");
    for (var a = O("toggle-elements"), b = 0;b < a.length;b++) {
      F(a[b], "activate") && D(a[b], "activate");
    }
  }
};
ag.prototype.b = function(a, b) {
  for (var c = r(function(a, b) {
    F(a, "activate") || B(a, "activate");
    this.dispatchEvent(new y("activate-" + b, a));
  }, this), d = r(function(a, b) {
    F(a, "activate") && D(a, "activate");
    this.dispatchEvent(new y("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function bg(a, b) {
  var c = Q("div", {"class":"georef-tools-clip-handler", id:"georef-tools-clip-handler"});
  b.appendChild(c);
  R(c, Q("span", {"class":"icon"}));
  $(c).click(r(function() {
    var a = F(c, "open") ? new y("deactivate", c) : new y("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-clip-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function dg(a, b, c) {
  this.a = new ol.source.Vector({features:new ol.Collection});
  l(c) && (c = eg(c), this.a.addFeature(c));
  this.b = new ol.layer.Vector({source:this.a, style:w.j.Ea});
  c = new jd(b, this.b);
  fg(a, b, this.b, {"activate-drawclip":c, "deactivate-drawclip":c});
  this.na = a;
}
u(dg, Qa);
dg.prototype.c = function(a) {
  a = eg(a.target.clip);
  0 === this.a.getFeatures().length && (this.a.addFeature(a), this.b.addFeature(a));
};
function fg(a, b, c, d) {
  function e(a) {
    if (l(a)) {
      var b = a.type;
      l(b) && d.hasOwnProperty(b) && d[b].v();
    } else {
      for (b in d) {
        d.hasOwnProperty(b) && d[b].v();
      }
    }
  }
  T(a, "activate-drawclip", function(a) {
    e();
    d[a.type].a();
  });
  T(a, "deactivate-drawclip", e);
  T(a, "activate", function() {
    c.setMap(b);
  });
  T(a, "deactivate", function() {
    e();
    c.setMap(null);
  });
}
function eg(a) {
  if ("pixel" === a.source) {
    for (var b = [], c = 0;c < a.polygon.length;c++) {
      b.push(w.Wa(a.polygon[c]));
    }
    a = new ol.geom.Polygon([b]);
    return new ol.Feature({geometry:a});
  }
}
;function gg(a) {
  this.m = p(a) ? N(a) : a;
  var b = Q("div", {"class":"georef-tools-gcp-container", id:"georef-tools-gcp-container"});
  this.m.appendChild(b);
  hg(this, b);
  a = Q("div", {"class":"georef-tools-gcp-inner-container", id:"georef-tools-gcp-inner-container"});
  b.appendChild(a);
  var b = [], c = ig("noneToggle", "none", w.f("moveMap"));
  a.appendChild(c);
  b.push(c);
  var d = ig("pointToggle", "addgcp", w.f("setCornerPoint"));
  a.appendChild(d);
  b.push(d);
  var e = ig("dragToggle", "draggcp", w.f("moveCornerPoint"));
  a.appendChild(e);
  b.push(e);
  var f = ig("deleteToggle", "delgcp", w.f("deleteCornerPoint"));
  a.appendChild(f);
  b.push(f);
  T(c, "click", r(this.b, this, "none", b));
  T(d, "click", r(this.b, this, "addgcp", b));
  T(e, "click", r(this.b, this, "draggcp", b));
  T(f, "click", r(this.b, this, "delgcp", b));
  V.call(this);
}
u(gg, kd);
gg.prototype.a = function() {
  var a = N("georef-tools-gcp-handler");
  null != a && F(a, "open") || $(a).trigger("click");
};
function ig(a, b, c) {
  var d = Q("div", {"class":"tool"});
  a = Q("div", {id:a, "class":"tool-move toggle-elements", value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
gg.prototype.v = function() {
  var a = N("georef-tools-gcp-handler");
  if (null == a || F(a, "open")) {
    $(a).trigger("click");
    for (var a = O("toggle-elements"), b = 0;b < a.length;b++) {
      F(a[b], "activate") && D(a[b], "activate");
    }
  }
};
gg.prototype.b = function(a, b) {
  for (var c = r(function(a, b) {
    F(a, "activate") || B(a, "activate");
    this.dispatchEvent(new y("activate-" + b, a));
  }, this), d = r(function(a, b) {
    F(a, "activate") && D(a, "activate");
    this.dispatchEvent(new y("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function hg(a, b) {
  var c = Q("div", {"class":"georef-tools-gcp-handler", id:"georef-tools-gcp-handler"});
  b.appendChild(c);
  R(c, Q("span", {"class":"icon"}));
  $(c).click(r(function() {
    var a = F(c, "open") ? new y("deactivate", c) : new y("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-gcp-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function jg(a) {
  this.a = a.P;
  var b = a.Ab, c = a.sources[0], d = a.sources[1];
  a = {G:a.Pa[0], D:a.Pa[1]};
  var e = {G:new ol.layer.Vector({source:c, style:function() {
    return [w.j.ab];
  }}), D:new ol.layer.Vector({source:d, style:function() {
    return [w.j.ab];
  }})}, d = new fd(c, d, a.G, a.D), c = new hd(e.G, e.D, a.G, a.D), f = new gd(e.G, e.D, a.G, a.D), d = {"activate-addgcp":d, "deactivate-addgcp":d, "activate-draggcp":c, "deactivate-draggcp":c, "activate-delgcp":f, "deactivate-delgcp":f};
  kg(c, this.a);
  lg(b, a, e, d);
  this.na = b;
}
u(jg, Qa);
function kg(a, b) {
  function c(a) {
    var c = a.target.feature;
    a = a.target.targetStyle;
    var f;
    f = b.U[0].getFeatureById(c.getId());
    var h = b.U[1].getFeatureById(c.getId());
    f = c === f ? h : c === h ? f : void 0;
    c.setStyle(a);
    null != f && f.setStyle(a);
  }
  T(a, "selected", c);
  T(a, "deselected", c);
}
function lg(a, b, c, d) {
  function e(a) {
    f();
    d[a.type].a();
  }
  function f(a) {
    if (l(a)) {
      var b = a.type;
      l(b) && d.hasOwnProperty(b) && d[b].v();
    } else {
      for (b in d) {
        d.hasOwnProperty(b) && d[b].v();
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
    b.G.addLayer(c.G);
    b.D.addLayer(c.D);
  });
  T(a, "deactivate", function() {
    f();
    b.G.removeLayer(c.G);
    b.D.removeLayer(c.D);
  });
}
;function mg(a) {
  var b = p(a.Sa) ? N(a.Sa) : b, c = a.vb, d = a.tb, e = a.Ca, f = a.Bb, h = l(a.Ha) ? a.Ha : void 0, n = l(a.type) ? a.type : void 0, m = l(a.Y) ? a.Y : void 0, q = l(a.Ia) ? a.Ia : void 0, z = [new ol.source.Vector, new ol.source.Vector], E = l(a.Ba) ? E : void 0;
  if (a = l(h)) {
    a: {
      if (l(h.gcps) && 4 === h.gcps.length && (a = h.gcps, 0 === a[0].source.length && 0 === a[1].source.length && 0 === a[2].source.length && 0 === a[3].source.length)) {
        a = !0;
        break a;
      }
      a = void 0;
    }
  }
  n = a ? new Zf({sources:z, O:h, type:n, Aa:q, Ba:E, Ca:e}) : new Wf({sources:z, O:h, type:n, Aa:q, Ba:E});
  h = new gg(b);
  z = new jg({Ab:h, P:n, Pa:[e.getMap(), f.getMap()], sources:z});
  b = new ag(b);
  e = new dg(b, e.getMap(), m);
  m = z.na;
  b = e.na;
  T(m, "activate", b.v);
  T(b, "activate", m.v);
  U(z.a, "add-gcp-clippolygon", e.c, void 0, e);
  m = new Uf(c, d, z.a, e.a);
  c = new Sf(c, d, z.a, e.a);
  ng(m, c, f);
  h.a();
}
function ng(a, b, c) {
  T(a, "start-warping", function() {
    og(c);
  });
  T(a, "end-warping", function(a) {
    a = a.target.data;
    pg(c, a.wmsUrl, a.layerId, a.clip);
    qg(c);
  });
  T(a, "error", function() {
    alert("Something went wrong, while trying to request a validation result.");
    qg(c);
  });
  T(b, "end-confirm", function() {
    window.location.href = w.h.pb();
  });
}
;function rg(a, b) {
  this.a = void 0;
  this.m = N(a);
  var c = l(b) ? b : [640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], d = new ol.layer.Tile({source:new ol.source.OSM});
  this.g = new ol.Map({layers:[d], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), renderer:"canvas", target:this.m, view:new ol.View({projection:"EPSG:3857", center:[0, 0], zoom:2}), controls:[new ol.control.FullScreen, new ol.control.Zoom, new ol.control.Attribution, new Ne({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}), new ol.control.MousePosition]});
  this.g.getView().fit(c, this.g.getSize());
  this.b = new ol.control.ZoomToExtent({extent:c});
  this.g.addControl(this.b);
  c = new df(this.m);
  T(c, "jumpto", function(a) {
    var b = this.g.getView(), c = a.target.lonlat;
    b.setCenter(ol.proj.transform([parseFloat(c[0]), parseFloat(c[1])], a.target.srs, "EPSG:3857"));
    b.setZoom(12);
  }, void 0, this);
  P("ol-attribution").children[0].children[0].remove();
}
function og(a) {
  if (!l(sg(a))) {
    var b = Q("div", {"class":"result-viewer-loading-panel", id:"result-viewer-loading-panel", innerHTML:'<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100"aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">100% Complete</span></div></div>'});
    a.m.appendChild(b);
  }
}
function qg(a) {
  a = sg(a);
  l(a) && yc(a);
}
function pg(a, b, c, d) {
  l(a.a) && a.g.removeLayer(a.a);
  var e = d.hasOwnProperty("polygon") && 0 < d.polygon.length ? new ol.geom.Polygon([d.polygon]) : void 0;
  d = void 0 !== e ? e.transform(d.source, "EPSG:3857") : void 0;
  e = void 0 === d ? a.g.getView().calculateExtent(a.g.getSize()) : d.getExtent();
  a.g.removeControl(a.b);
  a.b = new ol.control.ZoomToExtent({extent:e});
  a.g.addControl(a.b);
  a.a = Re({Xa:b, Na:c, Y:d}, a.g);
  a.g.getLayers().insertAt(1, a.a);
  void 0 !== d && a.g.getView().fit(d.getExtent(), a.g.getSize());
  a = a.a;
  sc() && (sc().innerHTML = "", new Hc(sc(), a));
}
rg.prototype.getMap = function() {
  return this.g;
};
function sg(a) {
  for (var b = 0;b < a.m.children.length;b++) {
    if ("result-viewer-loading-panel" === a.m.children[b].id) {
      return a.m.children[b];
    }
  }
}
;t("vk2.app.AdminEvaluationApp", function(a) {
  if (!a.hasOwnProperty("process_list") || !a.hasOwnProperty("map_container")) {
    throw "Missing parameter in the vk2.app.AdminEvaluationApp settings. Please check the documentation.";
  }
  var b = a.map_container;
  Dc();
  this.ma = new rg(b);
  a.hasOwnProperty("btn_getallprocess") && tg(this, a.btn_getallprocess, a.process_list);
  a.hasOwnProperty("btn_getallinvalideprocess") && tg(this, a.btn_getallinvalideprocess, a.process_list, "validation=invalide");
  a.hasOwnProperty("btn_getsingleprocess_mapid") && ug(this, a.btn_getsingleprocess_mapid, a.process_list);
  a.hasOwnProperty("btn_getsingleprocess_userid") && vg(this, a.btn_getsingleprocess_userid, a.process_list);
});
function tg(a, b, c, d) {
  T(N(b), "click", function() {
    var a = new X;
    U(a, "success", function(a) {
      a = a.target;
      wg(this, c, Y(a));
      x(a);
    }, !1, this);
    U(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    var b = w.h.va(l(d) ? d : void 0);
    a.send(b, "GET");
  }, void 0, a);
}
function ug(a, b, c) {
  T(N(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = N(a).value;
    a = new X;
    U(a, "success", function(a) {
      a = a.target;
      wg(this, c, Y(a));
      x(a);
    }, !1, this);
    b = w.h.va("mapid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function vg(a, b, c) {
  T(N(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = N(a).value;
    a = new X;
    U(a, "success", function(a) {
      a = a.target;
      wg(this, c, Y(a));
      x(a);
    }, !1, this);
    U(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    b = w.h.va("userid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function xg(a, b) {
  function c(a, b) {
    return Q("p", {innerHTML:"<strong>" + a + ":</strong><br> " + b});
  }
  var d = Q("article", {id:b.georef_id}), e = r(function(a) {
    var b = Q("p");
    if ("isvalide" != a.adminvalidation) {
      var c = Q("button", {"data-href":w.h.mb("georeferenceid=" + a.georef_id), "class":"btn btn-primary action-btn", innerHTML:"Is valide"});
      yg(c, d, "Georeference process is valide?", "Are you sure you wanna set this georeference process to isvalide? Why?");
      b.appendChild(c);
    }
    c = Q("button", {"data-params-georef":a.georef_params, "data-params-clip":a.clippolygon, "data-params-id":a.mapid, "class":"btn btn-primary btn-show-georef", innerHTML:"Show map"});
    zg(this, c);
    b.appendChild(c);
    c = Q("a", {href:w.h.ia(void 0, "georeferenceid=" + a.georef_id), "class":"btn btn-primary action-btn", target:"_blank", innerHTML:"Go to process ..."});
    b.appendChild(c);
    "invalide" != a.adminvalidation && (a = Q("button", {"data-href":w.h.lb("georeferenceid=" + a.georef_id), "class":"btn btn-warning action-btn", innerHTML:"Is invalide"}), yg(a, d, "Georeference process is invalide?", "Are you sure you wanna set this georeference process to invalide? Why?"), b.appendChild(a));
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
function wg(a, b, c) {
  b = N(b);
  b.innerHTML = "";
  for (var d = 0, e = c.length;d < e;d++) {
    var f = xg(a, c[d]);
    b.appendChild(f);
  }
}
function yg(a, b, c, d) {
  T(a, "click", oa(w.gb, c, d + '<br><div id="admin-validation-comment" class="input-group"><input type="radio" value="imprecision"> Imprecision<br><input type="radio" value="wrong-parameter"> Wrong Parameter<br><input type="radio" value="wrong-map-sheet-number"> Wrong map sheet number<br><input type="radio" value="bad-original"> Bad original<br><br><input type="text" class="form-control" placeholder="comment" id="confirm-comment"></div>', function() {
    for (var c = tc("input", void 0, N("admin-validation-comment")), d = void 0, h = 0;h < c.length;h++) {
      "radio" == c[h].type && c[h].checked && (d = c[h].value);
    }
    c = l(d) ? d : N("confirm-comment").value;
    c = a.getAttribute("data-href") + "&comment=" + c;
    Xd(c, function(a) {
      alert(Y(a.target).message);
      yc(b);
    }, "GET");
  }));
}
function zg(a, b) {
  T(b, "click", function(a) {
    var b = JSON.parse(a.currentTarget.getAttribute("data-params-georef")), b = b.hasOwnProperty("new") ? b["new"] : b, e = JSON.parse(a.currentTarget.getAttribute("data-params-clip"));
    a = parseInt(a.currentTarget.getAttribute("data-params-id"), 0);
    a = {georeference:b, id:a, clip:e};
    og(this.ma);
    wf(a, r(function(a) {
      qg(this.ma);
      a = Y(a.target);
      pg(this.ma, a.wmsUrl, a.layerId, a.clip);
    }, this), function() {
      qg(this.ma);
      alert("Something went wrong while trying to fetch a georeference validation result from server ....");
    });
  }, !1, a);
}
;function Ag(a, b) {
  w.Ga();
  w.Oa("vk2-modal-anchor");
  Dc();
  var c = new Z(window.location.href), d = c.a.get("objectid"), c = c.a.get("georeferenceid");
  l(c) ? Bg("georeferenceid=" + c, r(this.a, this, a, b)) : l(d) && Bg("objectid=" + d, r(this.a, this, a, b));
}
t("vk2.app.GeoreferenceApp", Ag);
function Bg(a, b) {
  var c = w.h.jb(a);
  Xd(c, function(a) {
    200 != ee(a.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    b(Y(a.target));
  });
}
Ag.prototype.a = function(a, b, c) {
  var d = c.hasOwnProperty("extent") ? c.extent : [13.8, 51, 14.2, 52], e = new oe(a, c.zoomify), f = new rg(b, ol.proj.transformExtent(d, ya, "EPSG:3857"));
  T(e, "loadend", function() {
    new mg({Sa:a, vb:"georef-validate-menu", tb:c.objectid, Ca:e, Bb:f, Ha:c.georeference, type:c.type, Y:c.clip, Ia:c.georeferenceid});
  }, void 0, this);
};
}).call(window);
