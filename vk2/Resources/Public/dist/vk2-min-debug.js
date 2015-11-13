(function(){var g, aa = aa || {}, k = this;
function l(a) {
  return void 0 !== a;
}
function ca() {
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
function ha(a) {
  var b = da(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function p(a) {
  return "string" == typeof a;
}
function ia(a) {
  return "number" == typeof a;
}
function ja(a) {
  return "function" == da(a);
}
function ka(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var la = "closure_uid_" + (1E9 * Math.random() >>> 0), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function oa(a, b, c) {
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
  q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return q.apply(null, arguments);
}
function pa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
var sa = Date.now || function() {
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
  a.Hb = function(a, c, f) {
    for (var h = Array(arguments.length - 2), n = 2;n < arguments.length;n++) {
      h[n - 2] = arguments[n];
    }
    return b.prototype[c].apply(a, h);
  };
}
;var v = {updateSettings:function() {
  v.ELASTICSEARCH_NODE = vk2x.settings.ELASTICSEARCH_NODE;
  v.ELASTICSEARCH_SRS = vk2x.settings.ELASTICSEARCH_SRS;
  v.EVALUATION_GETPROCESS = vk2x.settings.EVALUATION_GETPROCESS;
  v.EVALUATION_SETISINVALIDE = vk2x.settings.EVALUATION_SETISINVALIDE;
  v.EVALUATION_SETISVALIDE = vk2x.settings.EVALUATION_SETISVALIDE;
  v.GEOREFERENCE_CONFIRM = vk2x.settings.GEOREFERENCE_CONFIRM;
  v.GEOREFERENCE_EXTENT_SRS = vk2x.settings.GEOREFERENCE_EXTENT_SRS;
  v.GEOREFERENCE_GETPROCESS = vk2x.settings.GEOREFERENCE_GETPROCESS;
  v.GEOREFERENCE_HISTORY = vk2x.settings.GEOREFERENCE_HISTORY;
  v.GEOREFERENCE_INFORMATION = vk2x.settings.GEOREFERENCE_INFORMATION;
  v.GEOREFERENCE_ON = vk2x.settings.GEOREFERENCE_ON;
  v.GEOREFERENCE_PAGE = vk2x.settings.GEOREFERENCE_PAGE;
  v.GEOREFERENCE_VALIDATION = vk2x.settings.GEOREFERENCE_VALIDATION;
  v.MAIN_PAGE = vk2x.settings.MAIN_PAGE;
  v.MAPPROFILE_PAGE = vk2x.settings.MAPPROFILE_PAGE;
  v.MAPVIEW_PARAMS = vk2x.settings.MAPVIEW_PARAMS;
  v.SEARCH_TIMEINTERVAL = vk2x.settings.SEARCH_TIMEINTERVAL;
  v.THUMB_PATH = vk2x.settings.THUMB_PATH;
  v.TMS_URL_SUBDOMAINS = vk2x.settings.TMS_URL_SUBDOMAINS;
  v.WITH_SPEAKING_URLS = vk2x.settings.WITH_SPEAKING_URLS;
  v.WMS_DYNAMIC_TEMPLATE = vk2x.settings.WMS_DYNAMIC_TEMPLATE;
}};
function ta(a, b, c, d) {
  c = null != c ? c : "EPSG:4326";
  d = null != d ? d : "EPSG:900913";
  if ("geometry" in b) {
    var e = b.geometry.coordinates[0];
    if ("polygon" === b.geometry.type.toLowerCase()) {
      for (var f = [], h = 0, n = e.length;h < n;h++) {
        f.push(ol.proj.transform(e[h], c, d));
      }
      c = new ol.geom.Polygon([f]);
    } else {
      c = void 0;
    }
  } else {
    c = void 0;
  }
  delete b.geometry;
  c = new ol.Feature({geometry:c});
  for (var m in b) {
    b.hasOwnProperty(m) && ("time" === m ? c.set(m, b[m].split("-")[0]) : c.set(m, b[m]));
  }
  c.setId(a);
  return c;
}
function ua(a) {
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    b.push(ta(a[c]._id, a[c]._source));
  }
  return b;
}
;var w = {j:{}};
w.j.Eb = new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 0, 255, 1.0)", width:2})});
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
function va() {
  this.b = this.a = !1;
  this.c = 0;
}
function wa(a) {
  a.a || a.b || (a.c += 1);
  return "" + a.c;
}
;function xa(a) {
  this.na = a;
}
;function ya() {
  0 != za && (Aa[this[la] || (this[la] = ++ma)] = this);
  this.o = this.o;
  this.H = this.H;
}
var za = 0, Aa = {};
ya.prototype.o = !1;
function x(a) {
  a.o || (a.o = !0, a.N(), 0 != za && (a = a[la] || (a[la] = ++ma), delete Aa[a]));
}
ya.prototype.N = function() {
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
var Ba = "closure_listenable_" + (1E6 * Math.random() | 0), Ca = 0;
function Da(a, b, c, d, e) {
  this.listener = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.X = !!d;
  this.P = e;
  ++Ca;
  this.S = this.fa = !1;
}
function Ea(a) {
  a.S = !0;
  a.listener = null;
  a.a = null;
  a.src = null;
  a.P = null;
}
;function Fa(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
;function Ga(a, b) {
  this.width = a;
  this.height = b;
}
g = Ga.prototype;
g.clone = function() {
  return new Ga(this.width, this.height);
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
function Ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Ia(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
function Ja(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Ka(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
function La(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
}
var Ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Na(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ma.length;f++) {
      c = Ma[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function Oa(a) {
  var b = arguments.length;
  if (1 == b && fa(arguments[0])) {
    return Oa.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
;Oa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function Pa(a) {
  this.a = a;
}
var Qa = /\s*;\s*/;
g = Pa.prototype;
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
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(sa() + 1E3 * c)).toUTCString();
  this.a.cookie = a + "=" + b + e + d + c + f;
};
g.get = function(a, b) {
  for (var c = a + "=", d = (this.a.cookie || "").split(Qa), e = 0, f;f = d[e];e++) {
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
  return Ra(this).keys;
};
g.F = function() {
  return Ra(this).values;
};
g.isEmpty = function() {
  return !this.a.cookie;
};
g.ua = function() {
  return this.a.cookie ? (this.a.cookie || "").split(Qa).length : 0;
};
g.clear = function() {
  for (var a = Ra(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
function Ra(a) {
  a = (a.a.cookie || "").split(Qa);
  for (var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  }
  return {keys:b, values:c};
}
var Sa = new Pa(document);
Sa.b = 3950;
function Ta() {
}
Ta.prototype.a = null;
function Ua(a) {
  var b;
  (b = a.a) || (b = {}, Va(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b;
}
;function Wa(a) {
  Wa[" "](a);
  return a;
}
Wa[" "] = ca;
var Xa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function Ya(a) {
  if (!Za.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace($a, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ab, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(bb, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(cb, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(db, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(eb, "&#0;"));
  return a;
}
var $a = /&/g, ab = /</g, bb = />/g, cb = /"/g, db = /'/g, eb = /\x00/g, Za = /[\x00&<>"']/;
function fb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function gb(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function hb(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;var z = Array.prototype, ib = z.indexOf ? function(a, b, c) {
  return z.indexOf.call(a, b, c);
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
}, jb = z.forEach ? function(a, b, c) {
  z.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, kb = z.filter ? function(a, b, c) {
  return z.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = p(a) ? a.split("") : a, n = 0;n < d;n++) {
    if (n in h) {
      var m = h[n];
      b.call(c, m, n, a) && (e[f++] = m);
    }
  }
  return e;
};
function lb(a) {
  var b;
  a: {
    b = mb;
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
function nb(a, b) {
  return 0 <= ib(a, b);
}
function ob(a, b) {
  var c = ib(a, b), d;
  (d = 0 <= c) && z.splice.call(a, c, 1);
  return d;
}
function pb(a) {
  return z.concat.apply(z, arguments);
}
function qb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
function rb(a, b, c) {
  return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c);
}
;function sb(a) {
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function B(a, b) {
  var c = sb(a);
  tb(c, rb(arguments, 1));
  a.className = c.join(" ");
}
function C(a, b) {
  var c = sb(a), c = ub(c, rb(arguments, 1));
  a.className = c.join(" ");
}
function tb(a, b) {
  for (var c = 0;c < b.length;c++) {
    nb(a, b[c]) || a.push(b[c]);
  }
}
function ub(a, b) {
  return kb(a, function(a) {
    return !nb(b, a);
  });
}
function vb(a, b, c) {
  var d = sb(a);
  p(b) ? ob(d, b) : fa(b) && (d = ub(d, b));
  p(c) && !nb(d, c) ? d.push(c) : fa(c) && tb(d, c);
  a.className = d.join(" ");
}
function E(a, b) {
  return nb(sb(a), b);
}
;function wb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
function xb(a, b, c, d, e, f) {
  var h = b.toString();
  b = a.a[h];
  b || (b = a.a[h] = [], a.b++);
  var n = yb(b, c, e, f);
  -1 < n ? (a = b[n], d || (a.fa = !1)) : (a = new Da(c, a.src, h, !!e, f), a.fa = d, b.push(a));
  return a;
}
wb.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.a)) {
    return !1;
  }
  var e = this.a[a];
  b = yb(e, b, c, d);
  return -1 < b ? (Ea(e[b]), z.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1;
};
function zb(a, b) {
  var c = b.type;
  c in a.a && ob(a.a[c], b) && (Ea(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
}
wb.prototype.xa = function(a, b, c, d) {
  a = this.a[a.toString()];
  var e = -1;
  a && (e = yb(a, b, c, d));
  return -1 < e ? a[e] : null;
};
wb.prototype.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", e = l(b);
  return Ia(this.a, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].X != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function yb(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.S && f.listener == b && f.X == !!c && f.P == d) {
      return e;
    }
  }
  return -1;
}
;var Ab;
function Bb() {
}
u(Bb, Ta);
function Cb(a) {
  return (a = Va(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Va(a) {
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
Ab = new Bb;
function Db(a, b) {
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
      a instanceof Db ? (c = a.getKeys(), d = a.F()) : (c = Ka(a), d = Ja(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
g = Db.prototype;
g.ua = function() {
  return this.b;
};
g.F = function() {
  Eb(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.g[this.a[b]]);
  }
  return a;
};
g.getKeys = function() {
  Eb(this);
  return this.a.concat();
};
g.equals = function(a, b) {
  if (this === a) {
    return !0;
  }
  if (this.b != a.ua()) {
    return !1;
  }
  var c = b || Fb;
  Eb(this);
  for (var d, e = 0;d = this.a[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return !1;
    }
  }
  return !0;
};
function Fb(a, b) {
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
  return Gb(this.g, a) ? (delete this.g[a], this.b--, this.a.length > 2 * this.b && Eb(this), !0) : !1;
};
function Eb(a) {
  if (a.b != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      Gb(a.g, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.b != a.a.length) {
    for (var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], Gb(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
g.get = function(a, b) {
  return Gb(this.g, a) ? this.g[a] : b;
};
g.set = function(a, b) {
  Gb(this.g, a) || (this.b++, this.a.push(a));
  this.g[a] = b;
};
g.forEach = function(a, b) {
  for (var c = this.getKeys(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
g.clone = function() {
  return new Db(this);
};
function Gb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function Hb(a) {
  if ("function" == typeof a.F) {
    return a.F();
  }
  if (p(a)) {
    return a.split("");
  }
  if (ha(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ja(a);
}
function Ib(a, b) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, void 0);
  } else {
    if (ha(a) || p(a)) {
      jb(a, b, void 0);
    } else {
      var c;
      if ("function" == typeof a.getKeys) {
        c = a.getKeys();
      } else {
        if ("function" != typeof a.F) {
          if (ha(a) || p(a)) {
            c = [];
            for (var d = a.length, e = 0;e < d;e++) {
              c.push(e);
            }
          } else {
            c = Ka(a);
          }
        } else {
          c = void 0;
        }
      }
      for (var d = Hb(a), e = d.length, f = 0;f < e;f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    }
  }
}
;var G;
a: {
  var Jb = k.navigator;
  if (Jb) {
    var Kb = Jb.userAgent;
    if (Kb) {
      G = Kb;
      break a;
    }
  }
  G = "";
}
;function H() {
  return -1 != G.indexOf("Edge");
}
;var Mb = -1 != G.indexOf("Opera") || -1 != G.indexOf("OPR"), I = -1 != G.indexOf("Edge") || -1 != G.indexOf("Trident") || -1 != G.indexOf("MSIE"), J = -1 != G.indexOf("Gecko") && !(-1 != G.toLowerCase().indexOf("webkit") && !H()) && !(-1 != G.indexOf("Trident") || -1 != G.indexOf("MSIE")) && !H(), K = -1 != G.toLowerCase().indexOf("webkit") && !H(), Nb = -1 != G.indexOf("Macintosh");
function Ob() {
  var a = G;
  if (J) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (I && H()) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (I) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (K) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function Pb() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var Qb = function() {
  if (Mb && k.opera) {
    var a = k.opera.version;
    return ja(a) ? a() : a;
  }
  var a = "", b = Ob();
  b && (a = b ? b[1] : "");
  return I && !H() && (b = Pb(), b > parseFloat(a)) ? String(b) : a;
}(), Rb = {};
function L(a) {
  var b;
  if (!(b = Rb[a])) {
    b = 0;
    for (var c = Xa(String(Qb)).split("."), d = Xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", n = d[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), r = RegExp("(\\d*)(\\D*)", "g");
      do {
        var A = m.exec(h) || ["", "", ""], F = r.exec(n) || ["", "", ""];
        if (0 == A[0].length && 0 == F[0].length) {
          break;
        }
        b = fb(0 == A[1].length ? 0 : parseInt(A[1], 10), 0 == F[1].length ? 0 : parseInt(F[1], 10)) || fb(0 == A[2].length, 0 == F[2].length) || fb(A[2], F[2]);
      } while (0 == b);
    }
    b = Rb[a] = 0 <= b;
  }
  return b;
}
var Sb = k.document, Tb = Pb(), Ub = !Sb || !I || !Tb && H() ? void 0 : Tb || ("CSS1Compat" == Sb.compatMode ? parseInt(Qb, 10) : 5);
var Vb = !I || I && (H() || 9 <= Ub);
!J && !I || I && I && (H() || 9 <= Ub) || J && L("1.9.1");
I && L("9");
var Wb = I || Mb || K;
function Xb() {
  return M("opacity-slider-container");
}
function M(a) {
  var b = document;
  return p(a) ? b.getElementById(a) : a;
}
function N(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Yb("*", a, b);
}
function O(a, b) {
  var c = b || document, d = null;
  c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Yb("*", a, b)[0];
  return d || null;
}
function Yb(a, b, c) {
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
      a = h.className, "function" == typeof a.split && nb(a.split(/\s+/), b) && (d[e++] = h);
    }
    d.length = e;
    return d;
  }
  return c;
}
function Zb(a, b) {
  Ha(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in $b ? a.setAttribute($b[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var $b = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function P(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!Vb && h && (h.name || h.type)) {
    f = ["<", f];
    h.name && f.push(' name="', Ya(h.name), '"');
    if (h.type) {
      f.push(' type="', Ya(h.type), '"');
      var n = {};
      Na(n, h);
      delete n.type;
      h = n;
    }
    f.push(">");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (p(h) ? f.className = h : fa(h) ? f.className = h.join(" ") : Zb(f, h));
  2 < d.length && ac(e, f, d);
  return f;
}
function ac(a, b, c) {
  function d(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !ha(f) || ka(f) && 0 < f.nodeType ? d(f) : jb(bc(f) ? qb(f) : f, d);
  }
}
function Q(a, b) {
  a.appendChild(b);
}
function cc(a) {
  a && a.parentNode && a.parentNode.removeChild(a);
}
function dc(a) {
  var b;
  if (Wb && !(I && L("9") && !L("10") && k.SVGElement && a instanceof k.SVGElement) && (b = a.parentElement)) {
    return b;
  }
  b = a.parentNode;
  return ka(b) && 1 == b.nodeType ? b : null;
}
function ec(a, b) {
  var c = [];
  return fc(a, b, c, !0) ? c[0] : void 0;
}
function gc(a, b) {
  var c = [];
  fc(a, b, c, !1);
  return c;
}
function fc(a, b, c, d) {
  if (null != a) {
    for (a = a.firstChild;a;) {
      if (b(a) && (c.push(a), d) || fc(a, b, c, d)) {
        return !0;
      }
      a = a.nextSibling;
    }
  }
  return !1;
}
function bc(a) {
  if (a && "number" == typeof a.length) {
    if (ka(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ja(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}
;function hc() {
  proj4.defs("EPSG:3043", "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
  proj4.defs("EPSG:4314", "+proj=longlat +ellps=bessel +datum=potsdam +no_defs");
  proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
  proj4.defs("EPSG:900913", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs");
  proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
}
function ic(a) {
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
function jc() {
  var a = M("transformation-chooser");
  return "tps" === a.value.toLowerCase() ? "tps" : "polynom" === a.value.toLowerCase() ? "polynom" : "affine";
}
function kc() {
  var a = M("projection-chooser");
  return null !== a && void 0 !== a ? a.value : "EPSG:4314";
}
;function lc(a, b) {
  this.b = p(a) ? M(a) : a;
  var c = l("vertical") && p("vertical") ? "vertical" : "horizontal", d = this.b, e = P("div", {"class":"opacity-container"});
  d.appendChild(e);
  d = P("div", {"class":"slider-container opacity-slider"});
  e.appendChild(d);
  this.a = P("div", {"class":"slider"});
  d.appendChild(this.a);
  mc(this, this.a, b, c);
}
function mc(a, b, c, d) {
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
  var h = P("div", {"class":"tooltip value", innerHTML:"100%"});
  b.appendChild(h);
  c.on("change:opacity", function() {
    var a = 100 * this.getOpacity();
    19 < Math.abs(a - $(b).slider("value")) && $(b).slider("value", a);
  });
}
;var nc = !I || I && (H() || 9 <= Ub), oc = I && !L("9");
!K || L("528");
J && L("1.9b") || I && L("8") || Mb && L("9.5") || K && L("528");
J && !L("8") || I && L("9");
function R(a, b) {
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
    if (c && J) {
      try {
        Wa(c.nodeName);
      } catch (d) {
      }
    }
    this.offsetX = K || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = K || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
u(R, y);
R.prototype.stopPropagation = function() {
  R.aa.stopPropagation.call(this);
  this.I.stopPropagation ? this.I.stopPropagation() : this.I.cancelBubble = !0;
};
R.prototype.preventDefault = function() {
  R.aa.preventDefault.call(this);
  var a = this.I;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, oc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var pc = "closure_lm_" + (1E6 * Math.random() | 0), qc = {}, rc = 0;
function S(a, b, c, d, e) {
  if (fa(b)) {
    for (var f = 0;f < b.length;f++) {
      S(a, b[f], c, d, e);
    }
    return null;
  }
  c = sc(c);
  return a && a[Ba] ? xb(a.w, String(b), c, !1, d, e) : tc(a, b, c, !1, d, e);
}
function tc(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, n = uc(a);
  n || (a[pc] = n = new wb(a));
  c = xb(n, b, c, d, e, f);
  if (c.a) {
    return c;
  }
  d = vc();
  c.a = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), d, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(wc(b.toString()), d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  rc++;
  return c;
}
function vc() {
  var a = xc, b = nc ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function T(a, b, c, d, e) {
  if (fa(b)) {
    for (var f = 0;f < b.length;f++) {
      T(a, b[f], c, d, e);
    }
  } else {
    c = sc(c), a && a[Ba] ? xb(a.w, String(b), c, !0, d, e) : tc(a, b, c, !0, d, e);
  }
}
function yc(a, b, c, d, e) {
  if (fa(b)) {
    for (var f = 0;f < b.length;f++) {
      yc(a, b[f], c, d, e);
    }
  } else {
    c = sc(c), a && a[Ba] ? a.w.remove(String(b), c, d, e) : a && (a = uc(a)) && (b = a.xa(b, c, !!d, e)) && zc(b);
  }
}
function zc(a) {
  if (!ia(a) && a && !a.S) {
    var b = a.src;
    if (b && b[Ba]) {
      zb(b.w, a);
    } else {
      var c = a.type, d = a.a;
      b.removeEventListener ? b.removeEventListener(c, d, a.X) : b.detachEvent && b.detachEvent(wc(c), d);
      rc--;
      (c = uc(b)) ? (zb(c, a), 0 == c.b && (c.src = null, b[pc] = null)) : Ea(a);
    }
  }
}
function wc(a) {
  return a in qc ? qc[a] : qc[a] = "on" + a;
}
function Ac(a, b, c, d) {
  var e = !0;
  if (a = uc(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.X == c && !f.S && (f = Bc(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function Bc(a, b) {
  var c = a.listener, d = a.P || a.src;
  a.fa && zc(a);
  return c.call(d, b);
}
function xc(a, b) {
  if (a.S) {
    return !0;
  }
  if (!nc) {
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
    c = new R(e, this);
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
        var m = Ac(e[n], f, !0, c), d = d && m;
      }
      for (n = 0;!c.b && n < e.length;n++) {
        c.currentTarget = e[n], m = Ac(e[n], f, !1, c), d = d && m;
      }
    }
    return d;
  }
  return Bc(a, new R(b, this));
}
function uc(a) {
  a = a[pc];
  return a instanceof wb ? a : null;
}
var Cc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function sc(a) {
  if (ja(a)) {
    return a;
  }
  a[Cc] || (a[Cc] = function(b) {
    return a.handleEvent(b);
  });
  return a[Cc];
}
;function Dc(a) {
  function b(a) {
    a.preventDefault();
    e.getMap().getView().setRotation(0);
  }
  a = a || {};
  var c = document.createElement("a");
  c.href = "#rotate-north";
  c.innerHTML = "N";
  c.className = "ol-has-tooltip";
  var d = P("span", {role:"tooltip", innerHTML:w.f("rotatenorth")});
  c.appendChild(d);
  var e = this;
  S(c, "click", b, void 0, this);
  S(c, "touchstart", b, void 0, this);
  d = document.createElement("div");
  d.className = "rotate-north ol-unselectable";
  d.appendChild(c);
  ol.control.Control.call(this, {element:d, target:a.target});
}
ol.inherits(Dc, ol.control.Control);
function U() {
  ya.call(this);
  this.w = new wb(this);
  this.Ya = this;
  this.Da = null;
}
u(U, ya);
U.prototype[Ba] = !0;
g = U.prototype;
g.addEventListener = function(a, b, c, d) {
  S(this, a, b, c, d);
};
g.removeEventListener = function(a, b, c, d) {
  yc(this, a, b, c, d);
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
      Na(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var h = b.length - 1;!a.b && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = Ec(f, d, !0, a) && e;
    }
  }
  a.b || (f = a.currentTarget = c, e = Ec(f, d, !0, a) && e, a.b || (e = Ec(f, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.b && h < b.length;h++) {
      f = a.currentTarget = b[h], e = Ec(f, d, !1, a) && e;
    }
  }
  return e;
};
g.N = function() {
  U.aa.N.call(this);
  if (this.w) {
    var a = this.w, b = 0, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0;e < d.length;e++) {
        ++b, Ea(d[e]);
      }
      delete a.a[c];
      a.b--;
    }
  }
  this.Da = null;
};
function Ec(a, b, c, d) {
  b = a.w.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.S && h.X == c) {
      var n = h.listener, m = h.P || h.src;
      h.fa && zb(a.w, h);
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
var Fc = {"\u00c4":"maptype-\u00e4", M:"maptype-m", TK:"maptype-tk", GL:"maptype-gl", ToGeoref:"georeference-false"};
function Gc(a, b) {
  this.m = p(a) ? M(a) : a;
  b || delete Fc.ToGeoref;
  var c = "", d;
  for (d in Fc) {
    c += '<label class="checkbox-inline"><input class="facet-search-el" type="checkbox" id="' + d + '" value="' + Fc[d] + '">' + d + "</label>";
  }
  c = P("div", {"class":"search-facet", innerHTML:c});
  this.m.appendChild(c);
  S(c, "click", function(a) {
    a = N("facet-search-el", a.currentTarget);
    for (var b = [], c = !0, d = 0;d < a.length;d++) {
      if (a[d].checked) {
        var m = a[d].value.split("-")[0], r = a[d].value.split("-")[1];
        "georeference" !== m && b.push({key:m, value:r});
        "georeference" === m && (c = !1);
      }
    }
    this.dispatchEvent(new y("facet-change", {facets:b, georeference:c}));
  }, void 0, this);
  U.call(this);
}
u(Gc, U);
function Hc(a, b) {
  this.b = p(a) ? M(a) : a;
  var c = void 0 !== b ? b : [1868, 1945], d = this.b, e = P("div", {"class":"timeslider-container"});
  d.appendChild(e);
  d = P("label", {innerHTML:w.f("change_timeperiod")});
  e.appendChild(d);
  d = P("div", {"class":"slider-container"});
  e.appendChild(d);
  this.a = P("div", {"class":"slider"});
  d.appendChild(this.a);
  Ic(this, this.a, c);
  U.call(this);
}
u(Hc, U);
function Ic(a, b, c) {
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
    this.dispatchEvent(new y(Jc, {time:c}));
  }, a)});
  e = P("div", {"class":"tooltip min-value", innerHTML:c[0]});
  b.appendChild(e);
  f = P("div", {"class":"tooltip max-value", innerHTML:c[1]});
  b.appendChild(f);
}
var Jc = "timechange";
function V() {
  this.status_ = !1;
  U.call(this);
}
u(V, U);
V.prototype.a = function() {
};
V.prototype.v = function() {
};
function Kc(a, b, c, d) {
  this.b = [c, d];
  this.c = [new ol.interaction.Draw({source:a, type:"Point", style:function() {
    return [w.j.ea];
  }}), new ol.interaction.Draw({source:b, type:"Point", style:function() {
    return [w.j.ea];
  }})];
  V.call(this);
}
u(Kc, V);
Kc.prototype.a = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].addInteraction(this.c[a]);
  }
  this.status_ = !0;
};
Kc.prototype.v = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].removeInteraction(this.c[a]);
  }
  this.status_ = !1;
};
function Lc(a, b, c, d) {
  function e(a, b, c) {
    var d = b.getSource().getFeatureById(a.getId());
    a = c.getSource().getFeatureById(a.getId());
    null != d && b.getSource().removeFeature(d);
    null != a && c.getSource().removeFeature(a);
  }
  this.b = [c, d];
  this.c = [new ol.interaction.Select({condition:ol.events.condition.click, layer:a, style:function() {
    return [w.j.ea];
  }, condition:q(function(d) {
    "click" === d.type && c.forEachFeatureAtPixel(d.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)}), new ol.interaction.Select({condition:ol.events.condition.click, layer:b, style:function() {
    return [w.j.ea];
  }, condition:q(function(c) {
    "click" === c.type && d.forEachFeatureAtPixel(c.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)})];
  V.call(this);
}
u(Lc, V);
Lc.prototype.a = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].addInteraction(this.c[a]);
  }
  this.status_ = !0;
};
Lc.prototype.v = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.b[a].removeInteraction(this.c[a]);
  }
  this.status_ = !1;
};
function Mc(a, b, c, d) {
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
  Nc(this, c, [a, b]);
  V.call(this);
}
u(Mc, V);
Mc.prototype.a = function() {
  for (var a = 0;a < this.c.length;a++) {
    for (var b = 0;b < this.b[a].length;b++) {
      this.c[a].addInteraction(this.b[a][b]);
    }
  }
  this.status_ = !0;
};
Mc.prototype.v = function() {
  for (var a = 0;a < this.c.length;a++) {
    for (var b = 0;b < this.b[a].length;b++) {
      this.c[a].removeInteraction(this.b[a][b]);
    }
  }
  this.status_ = !1;
};
function Nc(a, b, c) {
  function d(a, d) {
    if (ea(a.getId())) {
      var e = c[0].getSource().getFeatureById(a.getId()), f = c[0].getSource().getFeatureById(a.getId());
      "add" === d ? (b[0].getFeatures().addFeature(e), b[1].getFeatures().addFeature(f)) : "remove" === d && (b[0].getFeatures().clear(), b[1].getFeatures().clear());
    }
  }
  var e = q(function(a) {
    d(a.element, "add");
    ea(a.element.getId()) && this.dispatchEvent(new y("selected", {feature:a.element, srcStyle:w.j.ja(a.element.getId()), targetStyle:w.j.wa(a.element.getId())}));
  }, a);
  a = q(function(a) {
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
function Oc(a, b) {
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
  V.call(this);
}
u(Oc, V);
Oc.prototype.a = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.g.addInteraction(this.b[a]);
  }
  this.status_ = !0;
};
Oc.prototype.v = function() {
  for (var a = 0;a < this.b.length;a++) {
    this.g.removeInteraction(this.b[a]);
  }
  this.status_ = !1;
};
function Pc() {
  U.call(this);
}
u(Pc, U);
function Qc(a, b, c, d, e) {
  if (!(I || K && L("525"))) {
    return !0;
  }
  if (Nb && e) {
    return Rc(a);
  }
  if (e && !d) {
    return !1;
  }
  ia(b) && (b = Sc(b));
  if (!c && (17 == b || 18 == b || Nb && 91 == b)) {
    return !1;
  }
  if (K && d && c) {
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
      return !K;
  }
  return Rc(a);
}
function Rc(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || K && 0 == a) {
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
function Sc(a) {
  if (J) {
    a = Tc(a);
  } else {
    if (Nb && K) {
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
function Tc(a) {
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
;function Uc(a, b) {
  U.call(this);
  a && (this.la && Vc(this), this.Z = a, this.ka = S(this.Z, "keypress", this, b), this.ya = S(this.Z, "keydown", this.a, b, this), this.la = S(this.Z, "keyup", this.b, b, this));
}
u(Uc, U);
g = Uc.prototype;
g.Z = null;
g.ka = null;
g.ya = null;
g.la = null;
g.B = -1;
g.J = -1;
g.ra = !1;
var Wc = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Xc = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Yc = I || 
K && L("525"), Zc = Nb && J;
Uc.prototype.a = function(a) {
  K && (17 == this.B && !a.c || 18 == this.B && !a.a || Nb && 91 == this.B && !a.o) && (this.J = this.B = -1);
  -1 == this.B && (a.c && 17 != a.keyCode ? this.B = 17 : a.a && 18 != a.keyCode ? this.B = 18 : a.o && 91 != a.keyCode && (this.B = 91));
  Yc && !Qc(a.keyCode, this.B, a.i, a.c, a.a) ? this.handleEvent(a) : (this.J = Sc(a.keyCode), Zc && (this.ra = a.a));
};
Uc.prototype.b = function(a) {
  this.J = this.B = -1;
  this.ra = a.a;
};
Uc.prototype.handleEvent = function(a) {
  var b = a.I, c, d, e = b.altKey;
  I && "keypress" == a.type ? c = this.J : K && "keypress" == a.type ? c = this.J : Mb && !K ? c = this.J : (c = b.keyCode || this.J, d = b.charCode || 0, Zc && (e = this.ra), Nb && 63 == d && 224 == c && (c = 191));
  d = c = Sc(c);
  var f = b.keyIdentifier;
  c ? 63232 <= c && c in Wc ? d = Wc[c] : 25 == c && a.i && (d = 9) : f && f in Xc && (d = Xc[f]);
  this.B = d;
  a = new $c(d, 0, 0, b);
  a.a = e;
  this.dispatchEvent(a);
};
function Vc(a) {
  a.ka && (zc(a.ka), zc(a.ya), zc(a.la), a.ka = null, a.ya = null, a.la = null);
  a.Z = null;
  a.B = -1;
  a.J = -1;
}
Uc.prototype.N = function() {
  Uc.aa.N.call(this);
  Vc(this);
};
function $c(a, b, c, d) {
  R.call(this, d);
  this.type = "key";
  this.keyCode = a;
}
u($c, R);
function ad(a, b, c) {
  if (p(b)) {
    (b = bd(a, b)) && (a.style[b] = c);
  } else {
    for (var d in b) {
      c = a;
      var e = b[d], f = bd(c, d);
      f && (c.style[f] = e);
    }
  }
}
var cd = {};
function bd(a, b) {
  var c = cd[b];
  if (!c) {
    var d = gb(b), c = d;
    void 0 === a.style[d] && (d = (K ? "Webkit" : J ? "Moz" : I ? "ms" : Mb ? "O" : null) + hb(d), void 0 !== a.style[d] && (c = d));
    cd[b] = c;
  }
  return c;
}
function dd(a, b) {
  var c = a.style[gb(b)];
  return "undefined" !== typeof c ? c : a.style[bd(a, b)] || "";
}
function ed(a) {
  var b = fd, c;
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
function fd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = K && !b && !c;
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
    return new Ga(e.right - e.left, e.bottom - e.top);
  }
  return new Ga(b, c);
}
I && L(12);
function gd(a, b, c) {
  a = P("div", {"class":"modal fade " + a, id:a});
  var d = P("div", {"class":"modal-dialog"});
  a.appendChild(d);
  var e = P("div", {"class":"modal-content"});
  d.appendChild(e);
  this.a = P("div", {"class":"modal-header"});
  e.appendChild(this.a);
  d = P("button", {"class":"close", type:"button", "data-dismiss":"modal", "aria-hidden":"true", innerHTML:"&times;"});
  this.a.appendChild(d);
  d = P("h4", {"class":"modal-title"});
  this.a.appendChild(d);
  d = P("div", {"class":"modal-body"});
  e.appendChild(d);
  d = P("div", {"class":"modal-footer"});
  e.appendChild(d);
  e = P("button", {"class":"btn btn-default", type:"button", "data-dismiss":"modal", innerHTML:"Close"});
  d.appendChild(e);
  this.C = a;
  b.appendChild(this.C);
  hd(this.C, c || !1);
}
function id(a, b) {
  for (var c = gc(b, function(a) {
    return "a" === a.nodeName.toLowerCase() && a.hasAttribute("href");
  }), d = O("modal-content", a.C), e = 0;e < c.length;e++) {
    var f = c[e];
    if (!f.hasAttribute("target") || "_self" === f.getAttribute("target")) {
      f.setAttribute("data-href", f.href);
      f.href = "#";
      var h = l("map-profile") ? "map-profile" : f.hasAttribute("data-classname") ? f.getAttribute("data-classname") : "";
      S(f, "click", pa(function(a, b) {
        b.preventDefault();
        var c = b.currentTarget.getAttribute("data-href");
        jd(this, {href:c, classes:a});
        d.className = "modal-content " + a;
        return !1;
      }, h), void 0, a);
    }
  }
}
function hd(a, b) {
  $(a).on("hidden.bs.modal", function() {
    O("modal-body", this).innerHTML = "";
    O("modal-title", this.C).innerHTML = "";
    O("modal-content", this).className = "modal-content";
    b && cc(this);
  });
}
function jd(a, b) {
  var c = O("modal-body", a.C);
  c.innerHTML = "";
  var d = P("iframe", {frameborder:"0", src:b.href});
  d.setAttribute("webkitallowfullscreen", "");
  d.setAttribute("mozallowfullscreen", "");
  d.setAttribute("allowfullscreen", "");
  l(b.width) && ad(d, "width", b.width);
  l(b.height) && ad(d, "height", b.height);
  l(b.classes) && B(d, b.classes);
  c.appendChild(d);
}
gd.prototype.close = function() {
  l(this.C) && $(this.C).modal("hide");
};
gd.prototype.open = function(a, b, c) {
  null != a && a ? O("modal-title", this.C).innerHTML = a : this.a.style.display = "none";
  l(b) && (a = O("modal-content", this.C), B(a, b));
  l(c) && jd(this, c);
  $(this.C).modal("show");
};
function kd(a, b) {
  var c = O("modal-body", a.C);
  ka(b) && 1 == b.nodeType && (c.appendChild(b), id(a, b));
}
function ld(a, b) {
  var c = O("modal-body", a.C);
  p(b) && (c.innerHTML = b);
}
;function md(a, b, c) {
  if (ja(a)) {
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
;function nd(a, b) {
  this.ga = l(b) ? b : void 0;
  this.m = l(a) ? a : void 0;
  this.u = !1;
}
function od(a) {
  for (var b in a) {
    if (a.hasOwnProperty(b)) {
      for (var c = a[b], d = 0;d < c.length;d++) {
        c[d].setOpacity(0), c[d].setVisible(!0);
      }
    }
  }
}
function pd(a, b) {
  od(b);
  ({start:function(a, b, e) {
    if (e.u) {
      for (var f in a) {
        break;
      }
      var h = l(a[f]) ? a[f] : [];
      delete a[f];
      a = q(this.start, this, a, b, e);
      md(pa(e.Ab, h, a), b, e);
      l(e.ga) && (e.ga.innerHTML = l(f) ? f : "");
      l(f) || (console.log("Visualization finished ...."), e.u = !1, l(e.m) && C(e.m, "play"));
    }
  }}).start(b, 500, a);
}
function qd(a, b) {
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
nd.prototype.Ab = function(a, b) {
  ({Ma:function(a, b, e, f, h) {
    if (h.u) {
      var n = a[0].getOpacity() + b;
      if (1.05 >= n) {
        for (var m = 0;m < a.length;m++) {
          a[m].setOpacity(n);
        }
        md(pa(this.Ma, a, b, e, f, h), e, this);
      } else {
        l(f) && f();
      }
    }
  }, start:function(a, b, e, f, h) {
    for (var n = 0;n < a.length;n++) {
      a[n].setOpacity(0), a[n].setVisible(!0);
    }
    md(pa(this.Ma, a, b, e, f, h), e, this);
  }}).start(a, .1, 500, b, this);
};
function rd(a) {
  a.u = !1;
  l(a.ga) && (a.ga.innerHTML = l(void 0) ? void 0 : "");
  l(a.m) && C(a.m, "play");
}
;var sd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function td(a) {
  if (ud) {
    ud = !1;
    var b = k.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = td(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) {
        throw ud = !0, Error();
      }
    }
  }
  return a.match(sd);
}
var ud = K;
function wd(a, b) {
  for (var c = a.split("&"), d = 0;d < c.length;d++) {
    var e = c[d].indexOf("="), f = null, h = null;
    0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
    b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
  }
}
;function W(a) {
  U.call(this);
  this.Za = new Db;
  this.L = a || null;
  this.u = !1;
  this.K = this.a = null;
  this.i = this.ba = "";
  this.b = this.T = this.c = this.R = !1;
  this.s = 0;
  this.l = null;
  this.da = xd;
  this.ca = this.$a = !1;
}
u(W, U);
var xd = "", yd = /^https?$/i, zd = ["POST", "PUT"], Ad = [];
function X(a, b, c, d) {
  var e = new W;
  Ad.push(e);
  b && xb(e.w, "complete", b, !1, void 0, void 0);
  xb(e.w, "ready", e.eb, !0, void 0, void 0);
  e.send(a, c, d, void 0);
}
g = W.prototype;
g.eb = function() {
  x(this);
  ob(Ad, this);
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
  this.a = this.L ? Cb(this.L) : Cb(Ab);
  this.K = this.L ? Ua(this.L) : Ua(Ab);
  this.a.onreadystatechange = q(this.Qa, this);
  try {
    this.T = !0, this.a.open(b, String(a), !0), this.T = !1;
  } catch (e) {
    Bd(this, e);
    return;
  }
  a = c || "";
  var f = this.Za.clone();
  d && Ib(d, function(a, b) {
    f.set(b, a);
  });
  d = lb(f.getKeys());
  c = k.FormData && a instanceof k.FormData;
  !nb(zd, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.a.setRequestHeader(b, a);
  }, this);
  this.da && (this.a.responseType = this.da);
  "withCredentials" in this.a && (this.a.withCredentials = this.$a);
  try {
    Cd(this), 0 < this.s && ((this.ca = Dd(this.a)) ? (this.a.timeout = this.s, this.a.ontimeout = q(this.Va, this)) : this.l = md(this.Va, this.s, this)), this.c = !0, this.a.send(a), this.c = !1;
  } catch (h) {
    Bd(this, h);
  }
};
function Dd(a) {
  return I && L(9) && ia(a.timeout) && l(a.ontimeout);
}
function mb(a) {
  return "content-type" == a.toLowerCase();
}
g.Va = function() {
  "undefined" != typeof aa && this.a && (this.i = "Timed out after " + this.s + "ms, aborting", this.dispatchEvent("timeout"), this.a && this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ed(this)));
};
function Bd(a, b) {
  a.u = !1;
  a.a && (a.b = !0, a.a.abort(), a.b = !1);
  a.i = b;
  Fd(a);
  Ed(a);
}
function Fd(a) {
  a.R || (a.R = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.N = function() {
  this.a && (this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1), Ed(this, !0));
  W.aa.N.call(this);
};
g.Qa = function() {
  this.o || (this.T || this.c || this.b ? Gd(this) : this.wb());
};
g.wb = function() {
  Gd(this);
};
function Gd(a) {
  if (a.u && "undefined" != typeof aa && (!a.K[1] || 4 != Hd(a) || 2 != Id(a))) {
    if (a.c && 4 == Hd(a)) {
      md(a.Qa, 0, a);
    } else {
      if (a.dispatchEvent("readystatechange"), 4 == Hd(a)) {
        a.u = !1;
        try {
          var b = Id(a), c;
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
              var f = td(String(a.ba))[1] || null;
              if (!f && self.location) {
                var h = self.location.protocol, f = h.substr(0, h.length - 1)
              }
              e = !yd.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          if (d) {
            a.dispatchEvent("complete"), a.dispatchEvent("success");
          } else {
            var n;
            try {
              n = 2 < Hd(a) ? a.a.statusText : "";
            } catch (m) {
              n = "";
            }
            a.i = n + " [" + Id(a) + "]";
            Fd(a);
          }
        } finally {
          Ed(a);
        }
      }
    }
  }
}
function Ed(a, b) {
  if (a.a) {
    Cd(a);
    var c = a.a, d = a.K[0] ? ca : null;
    a.a = null;
    a.K = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function Cd(a) {
  a.a && a.ca && (a.a.ontimeout = null);
  ia(a.l) && (k.clearTimeout(a.l), a.l = null);
}
function Hd(a) {
  return a.a ? a.a.readyState : 0;
}
function Id(a) {
  try {
    return 2 < Hd(a) ? a.a.status : -1;
  } catch (b) {
    return -1;
  }
}
function Jd(a) {
  try {
    return a.a ? a.a.responseXML : null;
  } catch (b) {
    return null;
  }
}
function Y(a) {
  if (a.a) {
    return Fa(a.a.responseText);
  }
}
;function Kd() {
  return {query:{filtered:{filter:{bool:{must:[]}}}}, sort:{}};
}
function Ld(a) {
  var b = {geo_shape:{}};
  b.geo_shape.geometry = {relation:"intersects", shape:{type:"polygon", coordinates:[a]}};
  return b;
}
function Md(a) {
  for (var b = [], c = {bool:{should:b}}, d = 0;d < a.length;d++) {
    var e = a[d], f = {term:{}};
    f.term[e.key] = e.value.toLowerCase();
    b.push(f);
  }
  return c;
}
function Nd(a) {
  var b = {range:{}};
  b.range.time = {gte:a[0], lte:a[1]};
  return b;
}
function Od(a, b) {
  var c = v.ELASTICSEARCH_NODE + "/map/_mget", d = JSON.stringify({ids:a});
  X(c, b, "POST", d);
}
function Pd() {
  for (var a = [!1], b = [], c = {query:{filtered:{filter:{bool:{should:b}}}}}, d = 0, e = a.length;d < e;d++) {
    var f = {term:{}};
    f.term.georeference = a[d];
    b.push(f);
  }
  return c;
}
;function Qd(a, b, c, d) {
  var e = l(c) ? "webgl" : "canvas", f = l(d) ? d : !1;
  X(b, q(function(c) {
    200 != Id(c.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    c = Jd(c.target);
    var d = ec(c, function(a) {
      return 1 == a.nodeType && "IMAGE_PROPERTIES" == a.tagName;
    });
    c = parseInt(d.getAttribute("WIDTH"), 0);
    d = parseInt(d.getAttribute("HEIGHT"), 0);
    Rd(this, b.substring(0, b.lastIndexOf("/") + 1), d, c, a, e, f);
  }, this), "GET");
  U.call(this);
}
u(Qd, U);
function Rd(a, b, c, d, e, f, h) {
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
Qd.prototype.getMap = function() {
  return this.a;
};
Qd.prototype.getHeight = function() {
  return parseInt(this.c, 0);
};
Qd.prototype.getWidth = function() {
  return parseInt(this.i, 0);
};
function Sd(a, b) {
  Qd.call(this, a, b);
}
u(Sd, Qd);
function Z(a, b) {
  this.i = this.s = this.o = "";
  this.H = null;
  this.l = this.b = "";
  this.c = !1;
  var c;
  a instanceof Z ? (this.c = l(b) ? b : a.c, Td(this, a.o), this.s = a.s, this.i = a.i, Ud(this, a.H), this.b = a.b, Vd(this, a.a.clone()), this.l = a.l) : a && (c = td(String(a))) ? (this.c = !!b, Td(this, c[1] || "", !0), this.s = Wd(c[2] || ""), this.i = Wd(c[3] || "", !0), Ud(this, c[4]), this.b = Wd(c[5] || "", !0), Vd(this, c[6] || "", !0), this.l = Wd(c[7] || "")) : (this.c = !!b, this.a = new Xd(null, 0, this.c));
}
Z.prototype.toString = function() {
  var a = [], b = this.o;
  b && a.push(Yd(b, Zd, !0), ":");
  if (b = this.i) {
    a.push("//");
    var c = this.s;
    c && a.push(Yd(c, Zd, !0), "@");
    a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    b = this.H;
    null != b && a.push(":", String(b));
  }
  if (b = this.b) {
    this.i && "/" != b.charAt(0) && a.push("/"), a.push(Yd(b, "/" == b.charAt(0) ? $d : ae, !0));
  }
  (b = this.a.toString()) && a.push("?", b);
  (b = this.l) && a.push("#", Yd(b, be));
  return a.join("");
};
Z.prototype.clone = function() {
  return new Z(this);
};
function Td(a, b, c) {
  a.o = c ? Wd(b, !0) : b;
  a.o && (a.o = a.o.replace(/:$/, ""));
}
function Ud(a, b) {
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
function Vd(a, b, c) {
  b instanceof Xd ? (a.a = b, ce(a.a, a.c)) : (c || (b = Yd(b, de)), a.a = new Xd(b, 0, a.c));
}
function ee(a) {
  return a.a;
}
function Wd(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Yd(a, b, c) {
  return p(a) ? (a = encodeURI(a).replace(b, fe), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function fe(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Zd = /[#\/\?@]/g, ae = /[\#\?:]/g, $d = /[\#\?]/g, de = /[\#\?@]/g, be = /#/g;
function Xd(a, b, c) {
  this.b = this.a = null;
  this.c = a || null;
  this.o = !!c;
}
function ge(a) {
  a.a || (a.a = new Db, a.b = 0, a.c && wd(a.c, function(b, c) {
    var d = decodeURIComponent(b.replace(/\+/g, " "));
    ge(a);
    a.c = null;
    var d = he(a, d), e = a.a.get(d);
    e || a.a.set(d, e = []);
    e.push(c);
    a.b++;
  }));
}
g = Xd.prototype;
g.ua = function() {
  ge(this);
  return this.b;
};
g.remove = function(a) {
  ge(this);
  a = he(this, a);
  return Gb(this.a.g, a) ? (this.c = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1;
};
g.clear = function() {
  this.a = this.c = null;
  this.b = 0;
};
g.isEmpty = function() {
  ge(this);
  return 0 == this.b;
};
function ie(a, b) {
  ge(a);
  b = he(a, b);
  return Gb(a.a.g, b);
}
g.getKeys = function() {
  ge(this);
  for (var a = this.a.F(), b = this.a.getKeys(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
g.F = function(a) {
  ge(this);
  var b = [];
  if (p(a)) {
    ie(this, a) && (b = pb(b, this.a.get(he(this, a))));
  } else {
    a = this.a.F();
    for (var c = 0;c < a.length;c++) {
      b = pb(b, a[c]);
    }
  }
  return b;
};
g.set = function(a, b) {
  ge(this);
  this.c = null;
  a = he(this, a);
  ie(this, a) && (this.b -= this.a.get(a).length);
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
  var a = new Xd;
  a.c = this.c;
  this.a && (a.a = this.a.clone(), a.b = this.b);
  return a;
};
function he(a, b) {
  var c = String(b);
  a.o && (c = c.toLowerCase());
  return c;
}
function ce(a, b) {
  b && !a.o && (ge(a), a.c = null, a.a.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.c = null, this.a.set(he(this, e), qb(a)), this.b += a.length));
  }, a));
  a.o = b;
}
;w.Gb = function() {
  $(window);
};
w.W = function(a) {
  var b = ed(M("spatialsearch-container")), c = ed(M("layermanagement-container")), d = ed(M("mapdiv")), c = d.width - c.width - 30, b = a.getCoordinateFromPixel([0 + b.width + 30, d.height - 25 - 30]);
  a = a.getCoordinateFromPixel([c, 35]);
  return [b[0], b[1], a[0], a[1]];
};
w.Ga = function() {
  navigator.cookieEnabled || alert("For proper working of the virtuel map forum 2.0 please activate cookies in your browser");
};
w.Ja = function(a) {
  return ee(l(a) ? new Z(a) : new Z(window.location.href));
};
w.Ka = function(a, b) {
  return a = E(a, b) ? a : w.Ka(dc(a), b);
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
  return Sa.get("vk2-welcomepage");
};
w.gb = function(a, b, c, d) {
  var e = new gd("vk2-overlay-modal", document.body, !0);
  e.open(a, l(d) ? d : "");
  ld(e, "<p>" + b + '</p><br><button type="button" class="btn btn-primary" id="confirm-dialog-btn-yes">' + w.f("yes") + '</button><button type="button" class="btn btn-primary"id="confirm-dialog-btn-no">' + w.f("no") + "</button>");
  var f = l(c) ? c : function() {
  };
  S(M("confirm-dialog-btn-yes"), "click", function() {
    f();
    e.close();
  });
  S(M("confirm-dialog-btn-no"), "click", function() {
    e.close();
  });
};
w.Kb = function() {
  return l(Sa.get("auth_tkt")) ? !0 : !1;
};
w.Oa = function(a) {
  a = N(a, (l(void 0) ? void 0 : document.body).body);
  for (var b = 0;b < a.length;b++) {
    S(a[b], "click", function(a) {
      a.preventDefault();
      try {
        var b = new gd("vk2-overlay-modal", document.body, !0), e = this.title, f = this.getAttribute("data-classes");
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
  a = O("ol-overlaycontainer-stopevent", M(a));
  for (var b = 0;b < a.children.length;b++) {
    var c = a.children[b];
    if (E(c.children[0], "ol-has-tooltip")) {
      for (var c = N("ol-has-tooltip", c), d = 0;d < c.length;d++) {
        c[d].setAttribute("title", c[d].children[0].innerHTML);
      }
    }
  }
};
w.Mb = function(a, b, c) {
  var d = new W;
  T(d, "success", function(a) {
    a = a.target;
    l(b) && b(a);
    x(a);
  });
  T(d, "error", function(a) {
    a = a.target;
    l(c) && c(a);
  });
  d.send(a);
};
w.Ua = function(a, b) {
  Sa.set(a, b);
};
t("vk2.utils.setCookie", w.Ua);
w.zb = function() {
  var a = window.location.origin;
  window.location.origin || (a = window.location.protocol + "//" + window.location.host);
  v.Fb = a + "/vkviewer/proxy/?url=";
};
w.Nb = function(a, b) {
  var c = P("div", {"class":"georef-point-container alert alert-warning", style:"display:none;"});
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
function je(a) {
  this.g = a;
  this.m = P("div", {"class":"dyn-vis-control"});
  a = P("div", {"class":"content", style:"display:none;"});
  this.m.appendChild(a);
  var b = P("div", {"class":"feedback"});
  a.appendChild(b);
  this.ta = new nd(this.m, b);
  ke(this, a);
  le(this, this.m, a);
}
function le(a, b, c) {
  var d = P("a", {innerHTML:"o", "class":"open-dyn-vis"});
  b.insertBefore(d, b.childNodes[0] || null);
  S(d, "click", function(a) {
    a.preventDefault();
    $(c).slideToggle();
    E(a.currentTarget, "open") ? (rd(this.ta), C(a.currentTarget, "open")) : B(a.currentTarget, "open");
  }, void 0, a);
}
function ke(a, b) {
  var c = P("div", {"class":"start-container"});
  b.appendChild(c);
  var d = P("a", {href:"#dynamic-start", title:w.f("dynMapVisStart"), innerHTML:"Start"});
  c.appendChild(d);
  S(d, "click", function(a) {
    a.preventDefault();
    var b = this.g.getLayers().getArray();
    a = [];
    for (var c = 0;c < b.length;c++) {
      b[c] instanceof me && a.push(b[c]);
    }
    b = this.ta;
    c = this.g;
    b.u || (b.u = !0, a = qd(a, c), pd(b, a), l(b.m) && !E(b.m, "play") && B(b.m, "play"));
  }, void 0, a);
  c = P("span", {role:"tooltip", innerHTML:w.f("dynMapVisStart")});
  d.appendChild(c);
  c = P("div", {"class":"stop-container"});
  b.appendChild(c);
  d = P("a", {href:"#dynamic-stop", title:w.f("dynMapVisStop"), innerHTML:"Stop"});
  c.appendChild(d);
  S(d, "click", function(a) {
    a.preventDefault();
    rd(this.ta);
  }, void 0, a);
  c = P("span", {role:"tooltip", innerHTML:w.f("dynMapVisStop")});
  d.appendChild(c);
}
;function ne(a) {
  a = a || {};
  var b = document.createElement("a");
  b.href = "#image-manipulation";
  b.innerHTML = "I";
  b.className = "ol-has-tooltip";
  var c = P("span", {role:"tooltip", innerHTML:w.f("openImagemanipulation")});
  b.appendChild(c);
  c = q(function(a) {
    a.preventDefault();
    E(a.target, "active") ? (C(a.target, "active"), $(this.a).fadeOut().removeClass("open")) : (B(a.target, "active"), l(this.a) || (this.a = oe(this, a.currentTarget.parentElement)), $(this.a).fadeIn().addClass("open"));
  }, this);
  S(b, "click", c, void 0, this);
  S(b, "touchstart", c, void 0, this);
  c = document.createElement("div");
  c.className = "image-manipulation ol-unselectable";
  c.appendChild(b);
  ol.control.Control.call(this, {element:c, target:a.target});
}
ol.inherits(ne, ol.control.Control);
function pe(a) {
  return a.getMap().getLayers().getArray()[0];
}
function oe(a, b) {
  function c(a) {
    a = a.glContext;
    var b = a.Jb();
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
    function r(a, f) {
      var m = f.value;
      n || (d.on("postcompose", c), n = !0);
      Lb.style.left = (m - D) / (vd - D) * 100 + "%";
      Lb.innerHTML = m;
      e[b] = m;
      h = !0;
      d.changed();
    }
    m = P("div", {"class":"slider " + a, title:l("opt_title") ? m : "", "data-type":b});
    var D = l(f) ? f[1] : 0, vd = l(f) ? f[2] : 100, jf = l(f) ? f[3] : 1, kf = l(f) ? f[0] : 100;
    $(m).slider({min:D, max:vd, value:kf, animate:"slow", orientation:"horizontal", step:jf, slide:r, change:r});
    var Lb = P("div", {"class":"tooltip value " + a, innerHTML:l(f) ? f[0] : ""});
    m.appendChild(Lb);
    return m;
  }
  var e = {brightness:1, contrast:1, hue:0, saturation:0}, f = La(e), h = !1, n = !1, m = P("div", {"class":"slider-container", style:"display:none;"});
  b.appendChild(m);
  var r = d("slider-contrast", "contrast", pe(a), [1, 0, 2, .01], w.f("contrast"));
  m.appendChild(r);
  r = d("slider-saturation", "saturation", pe(a), [0, -1, 1, .01], w.f("saturation"));
  m.appendChild(r);
  r = d("slider-brightness", "brightness", pe(a), [1, 0, 2, .1], w.f("brightness"));
  m.appendChild(r);
  r = d("slider-hue", "hue", pe(a), [0, -180, 180, 5], w.f("hue"));
  m.appendChild(r);
  r = P("button", {"class":"reset-btn", title:w.f("reset"), innerHTML:"Reset"});
  m.appendChild(r);
  S(r, "click", function() {
    pe(this).un("postcompose", c);
    n = !1;
    for (var a = N("slider", m), b = 0;b < a.length;b++) {
      var d = a[b], e = d.getAttribute("data-type"), e = f[e];
      $(d).slider("value", e);
    }
  }, void 0, a);
  return m;
}
;function qe(a) {
  function b(a) {
    a.target.getArray()[a.target.getLength() - 1] !== n && (this.getMap().removeLayer(n), this.getMap().addLayer(n));
  }
  function c(a) {
    89 === a.keyCode ? (F = Math.min(F + 5, 150), this.getMap().render()) : 88 === a.keyCode && (F = Math.max(F - 5, 25), this.getMap().render());
  }
  function d() {
    ga = null;
    this.getMap().render();
  }
  function e(a) {
    ga = this.getMap().getEventPixel(a.I);
    this.getMap().render();
  }
  function f(a) {
    var b = a.context;
    a = a.frameState.pixelRatio;
    b.save();
    b.beginPath();
    ga && (b.arc(ga[0] * a, ga[1] * a, F * a, 0, 2 * Math.PI), b.lineWidth = 5 * a, b.strokeStyle = "rgba(0,0,0,0.5)", b.stroke());
    b.clip();
  }
  function h(a) {
    a.context.restore();
  }
  a = a || {};
  var n = l(a.spyLayer) ? a.spyLayer : new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM({attribution:void 0})}), m = P("a", {"class":"ol-has-tooltip", href:"#layerspy", innerHTML:"L"}), r = P("div", {"class":"ol-layerspy ol-unselectable"});
  r.appendChild(m);
  var A = P("span", {role:"tooltip", innerHTML:w.f("layerspy")});
  m.appendChild(A);
  var F = l(a.radius) ? parseInt(a.radius, 0) : 75, ga = null;
  this._keyHandler = null;
  S(m, "click", q(function(a) {
    a.preventDefault();
    E(m, "active") ? (n.un("precompose", f, this), n.un("postcompose", h, this), yc(this.getMap().getViewport(), "mousemove", e, void 0, this), yc(this.getMap().getViewport(), "mouseout", d, void 0, this), this.getMap().removeLayer(n), C(m, "active"), yc(this._keyHandler, "key", c, void 0, this), this.getMap().getLayers().un("add", b, this)) : (this.getMap().addLayer(n), n.on("precompose", f, this), n.on("postcompose", h, this), S(this.getMap().getViewport(), "mousemove", e, void 0, this), S(this.getMap().getViewport(), 
    "mouseout", d, void 0, this), B(m, "active"), this._keyHandler = this._keyHandler || new Uc(document), S(this._keyHandler, "key", c, void 0, this), this.getMap().getLayers().on("add", b, this));
  }, this));
  ol.control.Control.call(this, {element:r, target:a.target});
}
ol.inherits(qe, ol.control.Control);
function re(a, b, c) {
  $(a).hover(function() {
    E(this, "hover") || (c.getSource().clear(), c.getSource().addFeature(b), B(this, "hover"));
  }, function() {
    E(this, "hover") && (c.getSource().clear(), C(this, "hover"));
  });
}
;function me(a) {
  this.id_ = l(a.id) ? a.id : void 0;
  this.time_ = a.time;
  this.title_ = l(a.title) ? a.title : void 0;
  this.thumb_ = l(a.thumbnail) ? a.thumbnail : v.THUMB_PATH;
  this.allowManage_ = !0;
  for (var b = [], c = 0;c < v.TMS_URL_SUBDOMAINS.length;c++) {
    b.push(a.tms.replace("{s}", v.TMS_URL_SUBDOMAINS[c]) + "/{z}/{x}/{-y}.png");
  }
  c = se(this, a.clip);
  b = new ol.layer.Tile({extent:a.extent, source:new ol.source.XYZ({maxZoom:15, urls:b})});
  c = new ol.layer.Vector({source:new ol.source.Vector({features:[c]}), style:function() {
    return [w.j.cb];
  }});
  a.layers = [b, c];
  ol.layer.Group.call(this, a);
}
ol.inherits(me, ol.layer.Group);
function se(a, b) {
  for (var c = [], d = 0, e = b.length;d < e;d++) {
    c.push(ol.proj.transform(b[d], v.ELASTICSEARCH_SRS, v.MAPVIEW_PARAMS.projection));
  }
  c = new ol.Feature(new ol.geom.Polygon([c]));
  c.setProperties({objectid:a.id_, time:a.time_, title:a.title_});
  c.setId(a.id_);
  return c;
}
me.prototype.getTime = function() {
  return this.time_;
};
me.prototype.ha = function() {
  return this.allowManage_;
};
me.prototype.getId = function() {
  return this.id_;
};
function te(a, b) {
  var c = l(a.Y) ? a.Y : void 0, d = l(a.projection) ? a.projection : "EPSG:900913", e = l(a.Xa) ? a.Xa : void 0, f = l(a.Na) ? a.Na : void 0, h = void 0 === c ? void 0 : c.getExtent();
  a.source = new ol.source.TileWMS({url:e, params:{LAYERS:f, VERSION:"1.1.1"}, projection:d, extent:h});
  a.preload = Infinity;
  d = new ol.layer.Tile(a);
  d.qb = q(function(a) {
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
;function ue(a) {
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
  U.call(this);
}
u(ue, U);
ue.prototype.a = function() {
  this.g.on("moveend", function() {
    var a = w.W(this.g);
    l(this.za) && ol.extent.equals(this.za, a) || this.pa();
  }, this);
};
function ve(a, b, c) {
  var d = [a.b.V + "-01-01", a.b.qa + "-01-01"], e = "ascending" === a.T ? "asc" : "desc";
  if (a.R) {
    b = w.rb(ol.proj.transformExtent(b, c, v.ELASTICSEARCH_SRS));
    c = a.L;
    a = a.K;
    var f = [], h = Kd();
    f.push(Nd(d));
    f.push(Ld(b));
    f.push(Md(a));
    f.push({term:{georeference:!0}});
    h.query.filtered.filter.bool.must = f;
    h.sort[c] = {order:e};
    return h;
  }
  b = a.L;
  a = a.K;
  c = [];
  f = Kd();
  c.push(Nd(d));
  c.push(Md(a));
  c.push({term:{georeference:!1}});
  f.query.filtered.filter.bool.must = c;
  f.sort[b] = {order:e};
  return f;
}
ue.prototype.ca = function(a) {
  this.dispatchEvent(new y("refresh", {features:a, totalFeatureCount:this.i}));
};
ue.prototype.ba = function(a) {
  this.dispatchEvent(new y("paginate", {features:a, totalFeatureCount:this.i}));
};
function we(a, b, c, d) {
  b = ve(a, b, c);
  c = v.ELASTICSEARCH_NODE + "/_search?from=" + a.c + "&size=" + a.da;
  var e = new W;
  T(e, "success", function(a) {
    a = a.target;
    if (Y(a)) {
      var b = Y(a);
      this.i = b.hits.total;
      x(a);
      a = ua(b.hits.hits);
      this.l.extend(a);
      this.c += a.length;
      d.call(this, a);
    } else {
      console.log("Response is empty");
    }
  }, !1, a);
  e.send(c, "POST", JSON.stringify(b));
}
ue.prototype.pa = function() {
  var a = w.W(this.g);
  xe(this, a, this.s);
  this.za = qb(a);
};
function xe(a, b, c) {
  a.l.clear();
  a.c = 0;
  we(a, b, c, a.ca);
}
;function ye(a, b, c) {
  this.m = p(a) ? M(a) : a;
  this.a = new ue({projection:"EPSG:900913", map:b});
  S(this.a, "refresh", q(this.s, this));
  S(this.a, "paginate", q(this.pa, this));
  this.i = ["time", "title", "georeference"];
  this.c = new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [w.j.bb];
  }});
  b.addLayer(this.c);
  ze(this, this.m);
  Ae(this, this.m);
  Be(this);
  Ce(this);
  De(this, c);
  U.call(this);
}
u(ye, U);
function ze(a, b) {
  var c = P("div", {"class":"mapsearch-container"});
  b.appendChild(c);
  var d = P("div", {"class":"panel panel-default searchTablePanel"});
  c.appendChild(d);
  c = P("div", {"class":"panel-heading"});
  d.appendChild(c);
  a.l = P("div", {"class":"content"});
  c.appendChild(a.l);
  c = P("div", {"class":"panel-body"});
  d.appendChild(c);
  d = P("div", {"class":"mapsearch-list"});
  c.appendChild(d);
  c = P("div", {"class":"list-header"});
  d.appendChild(c);
  for (var e = 0;e < a.i.length;e++) {
    var f = a.i[e], h = P("div", {"class":"inner-col " + f}), f = P("div", {"data-type":f, "class":"sort-element " + f, innerHTML:w.f(f) + ' <span class="caret caret-reversed"></span>'});
    h.appendChild(f);
    c.appendChild(h);
  }
  a.b = P("ul", {id:"mapsearch-contentlist", "class":"mapsearch-contentlist"});
  d.appendChild(a.b);
}
function Ce(a) {
  l(a.b) && S(a.b, "click", function(a) {
    a.preventDefault();
    var c = w.Ka(a.I.target, "mapsearch-record"), d;
    this.a.l.forEach(function(a) {
      a.get("id") == c.id && (d = a);
    });
    this.dispatchEvent(new y("click-record", {feature:d}));
  }, void 0, a);
}
function Ae(a, b) {
  for (var c = N("sort-element", b), d = 0;d < c.length;d++) {
    S(c[d], "click", function(a) {
      a = a.target.getAttribute("data-type");
      for (var b = O("sort-element " + a), c = E(b, "ascending") ? "descending" : "ascending", d = N("sort-element"), m = 0;m < d.length;m++) {
        C(d[m], "descending"), C(d[m], "ascending");
      }
      B(b, c);
      this.a.L = a;
      this.a.T = c;
      a = this.a;
      xe(a, w.W(a.g), a.s);
    }, void 0, a);
  }
}
function Be(a) {
  var b = !1;
  l(a.b) && S(a.b, "scroll", function(a) {
    if (!b) {
      b = !0;
      a = a.currentTarget;
      if (a.offsetHeight + a.scrollTop >= a.scrollHeight && (a = this.a, !(a.l.getLength() >= a.i) && (a = this.a, a.c < a.i && 500 > a.c))) {
        var d = w.W(a.g);
        we(a, d, a.s, a.ba);
      }
      b = !1;
    }
  }, void 0, a);
}
function De(a, b) {
  S(b, "facet-change", function(a) {
    var b = this.a;
    a = a.target;
    b.R = a.georeference;
    b.K = a.facets;
    b.pa();
  }, void 0, a);
}
function Ee(a, b) {
  for (var c = 0;c < b.length;c++) {
    var d, e = b[c];
    d = P("li", {"class":"mapsearch-record type " + e.get("maptype"), id:e.get("id")});
    var f = P("span", {"class":"data-col time", innerHTML:parseInt(e.get("time"), 0)});
    d.appendChild(f);
    f = P("span", {"class":"data-col title", innerHTML:e.get("title")});
    d.appendChild(f);
    f = P("span", {"class":"data-col time", innerHTML:1});
    d.appendChild(f);
    f = P("div", {"class":"view-item"});
    d.appendChild(f);
    var h = P("a", {"class":"thumbnail", href:"#"});
    f.appendChild(h);
    var n = P("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:e.get("thumb")});
    h.appendChild(n);
    h = P("div", {"class":"overview"});
    f.appendChild(h);
    f = P("h2", {innerHTML:e.get("title")});
    h.appendChild(f);
    f = P("p", {"class":"details"});
    h.appendChild(f);
    h = P("div", {"class":"timestamp", innerHTML:w.f("timestamp") + " " + e.get("time")});
    f.appendChild(h);
    h = P("div", {"class":"scale", innerHTML:w.f("scale") + " 1:25.000"});
    f.appendChild(h);
    e.get("georeference") || (e = P("div", {"class":"georeference", innerHTML:w.f("not_georeference")}), f.appendChild(e));
    a.b.appendChild(d);
    l(a.c) && re(d, b[c], a.c);
  }
}
ye.prototype.s = function(a) {
  Fe(this, a.target.totalFeatureCount);
  this.b.innerHTML = "";
  Ee(this, a.target.features);
};
ye.prototype.pa = function(a) {
  Fe(this, a.target.Pb);
  Ee(this, a.target.features);
};
function Fe(a, b) {
  a.l.innerHTML = 0 < b ? b + " " + w.f("found_mtb") : w.f("found_no_maps");
}
;function Ge(a) {
  this.i = p(a) ? M(a) : a;
  He(this, this.i);
  this.b = {};
  this.l = {placename:q(function(a) {
    this.b.hasOwnProperty(a) ? Ie(this, this.b[a][0]) : Je(this, a, q(function(a) {
      0 < a.length ? Ie(this, a[0]) : alert("The choosen placename is unknown.");
    }, this));
  }, this)};
  Ke(this);
  Le(this);
  U.call(this);
}
u(Ge, U);
function He(a, b) {
  var c = P("div", {"class":"gazetteersearch-container"});
  b.appendChild(c);
  var d = P("div", {"class":"form-group"});
  c.appendChild(d);
  a.a = P("input", {placeholder:w.f("gazetteer_placeholder"), type:"text", "class":"form-control gazetteersearch-input"});
  d.appendChild(a.a);
  a.c = P("input", {value:w.f("gazetteer_submit"), type:"submit", "class":"form-control gazetteersearch-submit"});
  d.appendChild(a.c);
}
function Ke(a) {
  $(a.a).autocomplete({source:q(function(a, c) {
    Je(this, a.term, c);
  }, a), delay:300, minLength:3, autoFocus:!0, select:q(function(a, c) {
    Ie(this, c.item);
  }, a), open:function() {
    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
  }, close:function() {
    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
  }});
}
function Le(a) {
  var b = q(function(a) {
    this.l.placename(-1 < a.indexOf(",") ? a.split(",")[0] : a);
  }, a);
  S(a.a, "keydown", function(a) {
    13 === a.keyCode && b(this.a.value);
  }, void 0, a);
  S(a.c, "click", function() {
    b(this.a.value);
  }, void 0, a);
}
function Je(a, b, c) {
  B(a.a, "loading");
  X("https://search.mapzen.com/v1/autocomplete?api_key=search-53q8sJs&text=" + b + "&focus.point.lat=51&focus.point.lon=13", q(function(a) {
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
    E(this.a, "loading") && C(this.a, "loading");
  }, a), "GET");
}
function Ie(a, b) {
  a.dispatchEvent(new y(Me, {location_type:b.type, lonlat:[b.lonlat.x, b.lonlat.y], srs:l(void 0) ? void 0 : "EPSG:4326"}));
}
var Me = "jumpto";
function Ne(a, b, c) {
  var d = this.l = p(a) ? M(a) : a;
  a = P("div", {"class":"spatialsearch-inner-container"});
  d.appendChild(a);
  d = P("div", {"class":"spatialsearch-content-panel"});
  a.appendChild(d);
  a = P("div", {"class":"header-container"});
  d.appendChild(a);
  this.c = P("div", {"class":"content"});
  a.appendChild(this.c);
  this.a = P("div", {"class":"body-container"});
  d.appendChild(this.a);
  this.b = new Ge(this.a);
  this.i = new Hc(this.a, v.SEARCH_TIMEINTERVAL);
  a = this.a;
  c = new Gc(a, c);
  this.o = new ye(a, b, c);
}
;function Oe(a, b, c) {
  this.a = p(a) ? M(a) : a;
  a = P("div", {"class":"container"});
  this.a.appendChild(a);
  var d = P("div", {"class":"row-metadata"});
  a.appendChild(d);
  a = P("div", {"class":"col-md-8 col-lg-8 metdata-col"});
  d.appendChild(a);
  var e = P("div", {"class":"col-md-4 col-lg-4 thumbnail-col"});
  d.appendChild(e);
  var f = c.description, d = P("div", {"class":"description"});
  a.appendChild(d);
  f = P("h3", {innerHTML:f});
  d.appendChild(f);
  d = P("img", {"class":"thumbnail", src:c.thumb});
  e.appendChild(d);
  f = w.f("mdrecord_keyword");
  d = c.keywords;
  e = Pe(a);
  f = P("div", {"class":"label", innerHTML:f});
  e.appendChild(f);
  d = P("div", {innerHTML:d});
  e.appendChild(d);
  for (e = 0;e < c["online-resources"].length;e++) {
    var f = w.f("mdrecord_onlineresource"), d = c["online-resources"][e].url, h = Pe(a), f = P("div", {"class":"label", innerHTML:f});
    h.appendChild(f);
    f = P("div");
    h.appendChild(f);
    var h = new Z(d), n = !1;
    l(h.a.get("SERVICE")) && "wcs" == h.a.get("SERVICE").toLowerCase() && h.a.get("REQUEST") && "getcoverage" == h.a.get("REQUEST").toLowerCase() && (n = !0);
    Vd(h, "", void 0);
    d = n ? P("a", {target:"_blank", href:d, innerHTML:h.toString(), "class":"download"}) : P("a", {target:"_blank", href:d, innerHTML:h.toString()});
    f.appendChild(d);
  }
  d = w.f("mdrecord_spatialresolution");
  c = c.denominator;
  e = Pe(a);
  d = P("div", {"class":"label", innerHTML:d});
  e.appendChild(d);
  d = P("div");
  e.appendChild(d);
  e = P("label", {innerHTML:""});
  d.appendChild(e);
  c = P("span", {innerHTML:c});
  d.appendChild(c);
  b = P("span", {"class":"unique-id metadata-content-row", innerHTML:'<div class="label">' + w.f("mdrecord_uniqueid") + "</div><div>" + b + "</div>"});
  a.appendChild(b);
}
function Pe(a) {
  var b = P("div", {"class":"metadata-content-row"});
  a.appendChild(b);
  return b;
}
;t("vk2.app.MapProfileApp", function(a) {
  var b = w.getQueryParam("objectid");
  null != b ? X(v.ELASTICSEARCH_NODE + "/map/" + b, q(function(b) {
    if (b = Y(b.target)) {
      b = ta(b._id, b._source), Qe(b, a);
    }
  }, this)) : console.log("Could not identify objectid.");
});
function Qe(a, b) {
  var c = a.getProperties();
  M(b.titleshortId).innerHTML = c.title;
  M(b.titlelongId).innerHTML = c.titlelong;
  M(b.linkToFotothekId).href = c.plink;
  if (ol.has.WEBGL) {
    d = new Qd(b.zoomifyContainer, c.zoomify, !0), new Oe(b.metadataContainer, a.getId(), c), S(d, "loadend", function() {
      d.getMap().addControl(new ne);
    });
  } else {
    var d = new Qd(b.zoomifyContainer, c.zoomify);
    new Oe(b.metadataContainer, a.getId(), c);
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
  return v.WITH_SPEAKING_URLS ? v.MAIN_PAGE : a.b + "?" + v.MAIN_PAGE + "&L=" + (void 0 !== b && "" !== b ? b : 0);
};
w.h.va = function(a) {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.EVALUATION_GETPROCESS + "&" + a : w.h.A() + "&" + v.EVALUATION_GETPROCESS + "&" + a;
};
w.h.mb = function(a) {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.EVALUATION_SETISVALIDE + "&" + a : w.h.A() + "&" + v.EVALUATION_SETISVALIDE + "&" + a;
};
w.h.lb = function(a) {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.EVALUATION_SETISINVALIDE + "&" + a : w.h.A() + "&" + v.EVALUATION_SETISINVALIDE + "&" + a;
};
w.h.ob = function() {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.GEOREFERENCE_HISTORY : w.h.A() + "&" + v.GEOREFERENCE_HISTORY;
};
w.h.nb = function() {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.GEOREFERENCE_INFORMATION : w.h.A() + "&" + v.GEOREFERENCE_INFORMATION;
};
w.h.jb = function(a) {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.GEOREFERENCE_GETPROCESS + "&" + a : w.h.A() + "&" + v.GEOREFERENCE_GETPROCESS + "&" + a;
};
w.h.kb = function() {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.GEOREFERENCE_VALIDATION + "&undefined" : w.h.A() + "&" + v.GEOREFERENCE_VALIDATION + "&undefined";
};
w.h.ib = function() {
  new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? v.GEOREFERENCE_CONFIRM + "&undefined" : w.h.A() + "&" + v.GEOREFERENCE_CONFIRM + "&undefined";
};
w.h.ia = function(a, b) {
  var c = void 0 !== a ? "&objectid=" + a : void 0 !== b ? "&" + b : "", d = new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? w.h.sa(d.b + "/" + v.GEOREFERENCE_PAGE) + "?" + c : w.h.A() + "&" + v.GEOREFERENCE_PAGE + c;
};
w.h.La = function(a) {
  var b = new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? w.h.sa(b.b + "/" + v.MAPPROFILE_PAGE) + "?objectid=" + a : w.h.A() + "&" + v.MAPPROFILE_PAGE + "&objectid=" + a;
};
w.h.pb = function() {
  var a = new Z(window.location.href);
  return v.WITH_SPEAKING_URLS ? w.h.sa(a.b) + "/" + v.MAIN_PAGE : w.h.A();
};
t("vk2.app.GeoreferenceChooseApp", function(a) {
  Re(this, M(a.target), M(a.targetCount));
});
function Se(a, b, c) {
  void 0 !== a.hits && void 0 !== a.hits.total && (c.innerHTML = a.hits.total);
  if (void 0 !== a.hits && void 0 !== a.hits.hits && 0 < a.hits.hits.length) {
    b.innerHTML = "";
    c = P("ul");
    b.appendChild(c);
    b = 0;
    for (var d = a.hits.hits.length;b < d;b++) {
      Q(c, Te(a.hits.hits[b]));
    }
  }
  $("body").scroll(function() {
    $(".lazy-image").sb();
  });
  $(".lazy-image").sb();
}
function Re(a, b, c) {
  var d = new W;
  T(d, "success", function(a) {
    a = a.target;
    var d = Y(a);
    Se(d, b, c);
    x(a);
  }, !1, a);
  T(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = vk2x.settings.Db + "/_search?size=2000";
  var e = Pd();
  e.sort = {title:{order:"asc"}};
  d.send(a, "POST", JSON.stringify(e));
}
function Te(a) {
  var b = a._source, c = a._id;
  a = b.maptype;
  var d = void 0 !== b.thumb ? b.thumb : "#", c = void 0 !== c ? w.h.ia(c) : "#", e = b.time;
  return P("li", {id:b.id, innerHTML:'<div class="container record-container"><div class="image"><img class="lazy-image" alt="" data-original="' + d + '"></div><div class="body"><p><strong>' + b.title + "</strong></p><p>" + w.f("georef-choose-time") + ": " + e + "</p><p>" + w.f("georef-choose-maptype") + ": " + a + '</p></div><div class="tools"><a class="btn btn-primary" href="' + c + '" target="_blank">' + w.f("georef-choose-goToGeoreference") + "</a></div></div>"});
}
;t("vk2.app.UserHistoryApp", function(a) {
  Ue(this, M(a.target), M(a.targetPoints));
});
function Ue(a, b, c) {
  var d = new W;
  T(d, "success", function(a) {
    a = a.target;
    var d = Y(a);
    void 0 !== d.points && (c.innerHTML = d.points);
    if (void 0 !== d.georef_profile) {
      for (var h = 0, n = d.georef_profile.length;h < n;h++) {
        var m;
        m = d.georef_profile[h];
        var r = void 0 !== m.transformed && !0 === m.transformed ? v.WMS_DYNAMIC_TEMPLATE + "?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities&map=" + m.mapid : "#", A = void 0 !== m.thumbnail ? m.thumbnail : "#", F = void 0 !== m.transformed && !0 === m.transformed ? '<a href="#" target="_blank">Klick</a>' : w.f("georef-history-beingGenerated"), ga = "" !== m.isvalide ? m.isvalide : "unknown";
        m = P("article", {id:m.georefid, innerHTML:'<div class="media"><a class="pull-right" href="' + r + '"><img alt="" src="' + A + '"></a><div class="media-body"><p><strong>' + w.f("georef-history-processId") + ":</strong><br>" + m.georefid + "</p><p><strong>" + w.f("georef-history-isValidated") + ":</strong><br>" + ga + "</p><p><strong>" + w.f("georef-history-mapId") + ":</strong><br>" + m.mapid + "</p><p><strong>" + w.f("georef-history-mapSheetInfo") + ":</strong><br>" + m.title + "</p><p><strong>" + 
        w.f("georef-history-georefParams") + ":</strong><br>" + JSON.stringify(m.georefparams) + "</p><p><strong>" + w.f("georef-history-persistentAccess") + ":</strong><br>" + F + '</p><p class="meta">Created: ' + m.georeftime + "</p></div></div>"});
        b.appendChild(m);
      }
    }
    x(a);
  }, !1, a);
  T(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = w.h.ob();
  d.send(a, "GET");
}
;t("vk2.app.WelcomePageApp", function(a) {
  var b = void 0 !== a.georefenceElClass ? N(a.georefenceElClass) : void 0, c = void 0 !== a.overallGeorefenceElClass ? N(a.overallGeorefenceElClass) : void 0, d = void 0 !== a.relGeoreferenceElClass ? N(a.relGeoreferenceElClass) : void 0, e = void 0 !== a.georeferenceUserRankingElId ? M(a.georeferenceUserRankingElId) : void 0;
  $("#" + a.deactivateWelcomePageId).Ib(function() {
    var a = $(this).Lb("checked") ? "off" : "on";
    w.Ua("vk2-welcomepage", a);
  });
  void 0 !== b && void 0 !== c && void 0 !== d && void 0 !== e && Ve(this, b, c, d, e);
});
function Ve(a, b, c, d, e) {
  var f = new W;
  T(f, "success", function(a) {
    a = a.target;
    var f = Y(a), m = f.georeference_map_count, r = m + f.missing_georeference_map_count, A = parseInt(m / r * 100);
    We(b, m);
    We(c, r);
    for (m = 0;m < d.length;m++) {
      var r = dd(d[m], "width"), F = dd(d[m], "margin-left");
      void 0 !== r && "" !== r && ad(d[m], "width", A + "%");
      void 0 !== F && "" !== F && (-1 < F.indexOf("-") ? ad(d[m], "margin-left", "-" + A + "%") : ad(d[m], "margin-left", A + "%"));
    }
    $("head").append("<style>.vk2WelcomePageBody .vk2GeoreferenceProgressText .content:after{ left:" + A + "%; }</style>");
    A = Math.min(f.pointoverview.length, 3);
    for (m = 0;m < A;m++) {
      r = f.pointoverview[m], r = P("li", {innerHTML:"<span><b>" + (r.hasOwnProperty("username") ? r.username : r.userid) + ":</b> " + r.points + " Punkt</span>"}), e.appendChild(r);
    }
    x(a);
  }, !1, a);
  T(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = w.h.nb();
  f.send(a, "GET");
}
function We(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c].innerHTML = b;
  }
}
;function Xe(a, b, c) {
  var d = a.getVisible() ? "visible" : "notvisible", e = P("li", {"class":"layermanagement-record " + d, id:b, "data-id":a.getId()});
  b = P("div", {"class":"control-container"});
  e.appendChild(b);
  d = P("button", {"class":"move-layer-top minimize-tool", type:"button", title:w.f("moveToTop"), innerHTML:w.f("moveToTop")});
  b.appendChild(d);
  S(d, "click", function(b) {
    c.removeLayer(a);
    c.addLayer(a);
    b.stopPropagation();
  });
  d = P("button", {"class":"disable-layer minimize-tool", type:"button", title:w.f("showLayer"), innerHTML:w.f("showLayer")});
  b.appendChild(d);
  S(d, "click", function() {
    E(e, "visible") ? (vb(e, "visible", "notvisible"), a.setVisible(!1)) : (vb(e, "notvisible", "visible"), a.setVisible(!0));
  });
  d = P("button", {"class":"remove-layer minimize-tool", type:"button", title:w.f("removeLayer"), innerHTML:w.f("removeLayer")});
  b.appendChild(d);
  S(d, "click", function(b) {
    c.removeLayer(a);
    b.stopPropagation();
  });
  d = P("div", {"class":"drag-btn"});
  b.appendChild(d);
  d = P("a", {"class":"thumbnail", href:"#"});
  e.appendChild(d);
  var f = P("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:a.thumb_});
  d.appendChild(f);
  d = P("div", {"class":"metadata-container"});
  e.appendChild(d);
  f = P("h4", {innerHTML:a.title_});
  d.appendChild(f);
  f = P("div", {"class":"timestamps"});
  d.appendChild(f);
  d = P("span", {"class":"timestamps-label", innerHTML:w.f("timestamp") + " " + a.getTime()});
  f.appendChild(d);
  Sa.get("vk2-auth") && (d = P("a", {"class":"georeference-update", innerHTML:w.f("updateGeoref") + " ...", target:"_blank", href:w.h.ia(a.getId())}), b.appendChild(d));
  new lc(e, a);
  a.on("change:visible", function() {
    !a.getVisible() && E(e, "visible") ? vb(e, "visible", "notvisible") : a.getVisible() && E(e, "notvisible") && vb(e, "notvisible", "visible");
  });
  return e;
}
;function Ye(a, b, c) {
  X(w.h.kb(), function(a) {
    200 === Id(a.target) ? b(a) : c(a);
  }, "POST", "req=" + JSON.stringify(a));
}
function Ze(a, b) {
  X(w.h.ib(), b, "POST", "req=" + JSON.stringify(a));
}
;function $e(a, b, c) {
  this.l = p(a) ? M(a) : a;
  this.a = b;
  this.g = c;
  this.i = new je(this.g);
  c = this.l;
  a = this.i;
  b = P("div", {"class":"layermanagement-container", id:"layermanagement-container"});
  c.appendChild(b);
  c = P("div", {"class":"heading"});
  b.appendChild(c);
  var d = P("span", {"class":"header-label", innerHTML:w.f("layermanagement_label")});
  c.appendChild(d);
  c.appendChild(a.m);
  this.b = P("ul", {"class":"layermanagement-body", innerHTML:'<li class="empty">' + w.f("start_message") + "</li>"});
  b.appendChild(this.b);
  this.a.on("add", this.c, this);
  this.a.on("remove", this.c, this);
  U.call(this);
}
u($e, U);
function af(a) {
  a = a.a.getArray();
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    l(a[c].ha) && a[c].ha() && b.push(a[c]);
  }
  return b;
}
function bf(a, b) {
  for (var c = a.a.getArray(), d = 0, e = c.length;d < e;d++) {
    if (b === c[d]) {
      return d;
    }
  }
}
$e.prototype.c = function(a) {
  if (l(a.element.ha) && a.element.ha()) {
    this.b.innerHTML = "";
    a = af(this);
    for (var b = a.length - 1;0 <= b;b--) {
      var c = Xe(a[b], b, this.g);
      this.b.appendChild(c);
    }
  }
  $(this.b).sortable({revert:!0, handle:".drag-btn", stop:q(function(a, b) {
    var c = af(this), h = N("layermanagement-record", this.b), n = h.length - parseInt(h[b.item.index()].id, 0) - 1, m = b.item.index(), r = c.length - 1 - m, h = parseInt(h[m].id, 0);
    l(h) && n != m && (n = c[h], m = bf(this, n), this.a.removeAt(m), c = bf(this, c[r]), r > h ? this.a.insertAt(c + 1, n) : this.a.insertAt(c, n));
  }, this)});
};
function cf(a) {
  this.a = a;
  df(this);
  U.call(this);
}
u(cf, U);
function df(a) {
  var b = ee(new Z(window.location.href)), c, d = 4;
  if (ie(b, "z") && ie(b, "c")) {
    var e = b.get("c").split(",");
    c = [parseInt(e[0], 0), parseInt(e[1], 0)];
    d = parseInt(b.get("z"), 0);
  }
  if (!ie(b, "oid") && l(c)) {
    ef(a, c, d);
  } else {
    if (ie(b, "oid") && "" !== b.get("oid")) {
      for (var f = b.get("oid").split(","), b = 0;b < f.length;b++) {
        "" == f[b] && f.splice(b, 1);
      }
      f.reverse();
      1 !== f.length || l(c) ? Od(f, q(function(a) {
        a = a.target;
        var b = Y(a) ? Y(a) : void 0;
        x(a);
        if (l(b)) {
          a = ua(b.docs);
          for (b = 0;b < f.length;b++) {
            for (var e = 0;e < a.length;e++) {
              f[b] == a[e].getId() && this.dispatchEvent(new y("addmap", {feature:a[e]}));
            }
          }
          !c && 0 < a.length && (c = a[0].getGeometry().getInteriorPoint().getCoordinates());
          ef(this, c, d);
        }
      }, a)) : X(v.ELASTICSEARCH_NODE + "/map/" + f[0], q(function(a) {
        a = a.target;
        var b = Y(a) ? Y(a) : void 0;
        x(a);
        l(b) && (a = ta(f[0], b._source, v.ELASTICSEARCH_SRS, "EPSG:3857"), void 0 !== a && (c = a.getGeometry().getInteriorPoint().getCoordinates(), this.dispatchEvent(new y("addmap", {feature:a})), ef(this, c, d)));
      }, a), "GET");
    }
  }
}
function ff(a) {
  if (l(a.a)) {
    var b = "";
    a.a.getLayers().forEach(function(a) {
      l(a.getId) && (b += a.getId() + ",");
    });
    var c = a.a.getView().getCenter();
    a = a.a.getView().getZoom();
    var d = new Z(window.location.origin + w.h.A() + "welcomepage=off"), e = d.a;
    e.set("z", a);
    e.set("c", c[0] + "," + c[1]);
    e.set("oid", b);
    Vd(d, e);
    return d.toString();
  }
}
function ef(a, b, c) {
  a.a.getView().setCenter(b);
  a.a.getView().setZoom(c);
}
;function gf(a) {
  a = a || {};
  var b = P("div", {"class":"permalink ol-unselectable"}), c = P("a", {href:"#permalink", innerHTML:"P", "class":"ol-has-tooltip"});
  b.appendChild(c);
  var d = P("span", {role:"tooltip", innerHTML:w.f("permalink")});
  c.appendChild(d);
  var e = P("form", {id:"permaCopyBox", style:"display:none;"}), d = P("div", {"class":"permaClose"});
  e.appendChild(d);
  d = P("div", {"class":"nose"});
  e.appendChild(d);
  d = P("div", {"class":"moreDots", innerHTML:"..."});
  e.appendChild(d);
  var f = P("input", {type:"text", id:"permalinkResult", readonly:"readonly", value:"#"});
  e.appendChild(f);
  d = "MacIntel" == navigator.platform ? "&#8984;" : "Strg";
  d = P("label", {"for":"permalinkResult", innerHTML:w.f("permalink_msg") + " " + d + "+C."});
  e.appendChild(d);
  b.appendChild(e);
  var h = void 0, d = q(function(a) {
    a.preventDefault();
    h || (h = new cf(this.getMap()));
    $(e).hasClass("open") ? ($(e).fadeOut().removeClass("open"), $(f).blur()) : (f.value = ff(h), $(e).fadeIn().addClass("open"), $(f).focus().select());
  }, this);
  S(c, "click", d);
  S(c, "touchstart", d);
  ol.control.Control.call(this, {element:b, target:a.target});
}
ol.inherits(gf, ol.control.Control);
function hf(a) {
  this.g = lf(a);
  this.g.on("singleclick", function(a) {
    var c = [];
    this.forEachFeatureAtPixel(a.pixel, function(a) {
      c.push(a);
    });
    mf(c);
  });
}
t("vk2.controller.MapController", hf);
function lf(a) {
  new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:3})});
  return new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.OSM})], renderer:"canvas", target:a, interactions:ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom]), controls:[new ol.control.Attribution({collapsible:!1, collapsed:!1}), new ol.control.Zoom, new ol.control.FullScreen, new qe({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}), new Dc, new ol.control.ScaleLine, new gf], view:new ol.View({projection:"EPSG:900913", minResolution:1.194328566789627, 
  maxResolution:2445.9849047851562, extent:[640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], center:[1531627.8847864927, 6632124.286850829], zoom:4})});
}
function nf(a, b) {
  S(b, "jumpto", function(a) {
    var b = this.g.getView(), e = a.target.lonlat;
    b.setCenter(ol.proj.transform([parseFloat(e[0]), parseFloat(e[1])], a.target.srs, "EPSG:900913"));
    b.setZoom(5);
  }, void 0, a);
}
function of(a, b) {
  a.a = b;
  S(a.a, "click-record", function(a) {
    a = a.target.feature;
    if (a.get("georeference")) {
      this.g.addLayer(pf(a));
    } else {
      if (void 0 !== a) {
        var b = new gd("vk2-overlay-modal", document.body, !0);
        b.open(void 0, "mapcontroller-click-modal georeference-dialog");
        var e = P("section"), f = P("a", {"class":"btn btn-primary", href:w.h.ia(a.getId()), innerHTML:w.f("go_to_georeference"), target:"_blank"});
        e.appendChild(f);
        f = P("a", {"class":"btn btn-primary", href:w.h.La(a.getId()), innerHTML:w.f("go_to_originalmap"), target:"_self"});
        e.appendChild(f);
        kd(b, e);
      }
    }
  }, void 0, a);
}
function qf(a, b) {
  S(b, "addmap", function(a) {
    this.g.addLayer(pf(a.target.feature));
  }, void 0, a);
}
function rf(a, b) {
  S(b, "timechange", function(a) {
    var b = this.a.a, e = a.target.time[0];
    a = a.target.time[1];
    var f = b.b.V;
    if (null != e && ia(e)) {
      if (e > b.b.qa) {
        throw {name:"WrongParameterExecption", message:"Start value shouldn't be higher than the end value."};
      }
      b.b.V = e;
    }
    if (null != a && ia(a)) {
      if (a < b.b.V) {
        throw b.b.V = f, {name:"WrongParameterExecption", message:"End value shouldn't be lower than the start value."};
      }
      b.b.qa = a;
    }
    b = this.a.a;
    xe(b, w.W(b.g), b.s);
  }, void 0, a);
}
function pf(a) {
  return new me({time:a.get("time"), extent:a.getGeometry().getExtent(), thumbnail:a.get("thumb"), title:a.get("title"), objectid:a.get("id"), id:a.getId(), dataid:a.get("dataid"), tms:a.get("tms"), clip:a.get("clippolygon")});
}
function mf(a) {
  if (0 < a.length) {
    var b = new gd("vk2-overlay-modal", document.body, !0);
    b.open(void 0, "mapcontroller-click-modal");
    for (var c = P("section"), d = 0;d < a.length;d++) {
      var e = P("a", {href:w.h.La(a[d].getId()), innerHTML:a[d].get("title") + " " + a[d].get("time"), target:"_self"});
      c.appendChild(e);
      var f = P("br");
      c.appendChild(f);
    }
    kd(b, c);
    1 == a.length && e.click();
  }
}
hf.prototype.getMap = function() {
  return this.g;
};
hf.prototype.getMap = hf.prototype.getMap;
function sf(a, b) {
  of(a, b.o);
  rf(a, b.i);
  nf(a, b.b);
}
;t("vk2.app.PresentationApp", function(a) {
  w.zb();
  w.Ga();
  var b = l(a.authenticate) && "boolean" == typeof a.authenticate ? a.authenticate : !1, c = b && v.GEOREFERENCE_ON ? !0 : !1;
  w.Oa(l(a.modalAnchorClassName) ? a.modalAnchorClassName : "vk2-modal-anchor");
  b || tf();
  b = new hf(a.mapContainerId);
  c = new Ne(a.spatialsearchContainerId, b.getMap(), c);
  sf(b, c);
  new $e(a.mapContainerId, b.getMap().getLayers(), b.getMap());
  c = new cf(b.getMap());
  qf(b, c);
  setTimeout(function() {
    w.xb(a.mapContainerId);
  }, 500);
});
function tf() {
  var a = w.getQueryParam("welcomepage");
  M("welcome-page-link") && "off" !== w.hb() && "off" !== a && M("welcome-page-link").click();
}
;function uf(a, b, c, d) {
  var e = P("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-submit deactivate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + w.f("submitBtn_validate")});
  M(a).appendChild(e);
  S(e, "click", q(this.a, this, b, c, d));
  U.call(this);
}
u(uf, U);
uf.prototype.a = function(a, b, c) {
  this.dispatchEvent(new y("start-confirm", {}));
  var d = vf(b), e = ic(c);
  c = b.getType();
  4 > d.gcps.length ? alert("You have to place at least 4 ground control points") : (a = {georeference:d, id:a, clip:{source:"pixel", polygon:e}, type:c}, "update" === c && (b = l(b.Ra) ? b.Ra : void 0, a.overwrites = b), b = q(function(a) {
    a = Y(a.target);
    this.dispatchEvent(new y("end-confirm", {data:a}));
  }, this), q(function() {
    this.dispatchEvent(new y("error", {error:"Something went wrong, while sending confirmation data from the server."}));
  }, this), Ze(a, b));
};
function wf(a, b, c, d) {
  var e = P("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-validate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + w.f("validateBtn_validate")});
  M(a).appendChild(e);
  S(e, "click", q(this.a, this, b, c, d));
  U.call(this);
}
u(wf, U);
wf.prototype.a = function(a, b, c) {
  b = xf(b, jc(), kc());
  c = ic(c);
  a = {georeference:b, id:a, clip:{source:"pixel", polygon:c}};
  4 > a.georeference.gcps.length || (this.dispatchEvent(new y("start-warping", {})), c = q(function(a) {
    a = Y(a.target);
    this.dispatchEvent(new y("end-warping", {data:a}));
  }, this), b = q(function() {
    this.dispatchEvent(new y("error", {error:"Something went wrong, while fetching validation data from the server."}));
  }, this), Ye(a, c, b));
};
function yf(a) {
  this.a = l(a.O) && ka(a.O) ? l(a.O["new"]) ? La(a.O["new"]) : La(a.O) : {source:"pixel", target:"EPSG:4314"};
  this.Ra = l(a.Aa) ? a.Aa : void 0;
  this.b = l(a.Ob) ? a.Ba : {source:"pixel", target:"EPSG:900913"};
  this.U = a.sources;
  this.l = l(a.type) ? "update" === a.type ? !0 : !1 : !1;
  this.c = new va;
  this.i();
  U.call(this);
}
u(yf, U);
yf.prototype.i = function() {
  zf(this, this.U);
  if (this.a.hasOwnProperty("gcps")) {
    for (var a = this.a, b = this.U, c = this.b, d = 0;d < a.gcps.length;d++) {
      var e = a.gcps[d], f = w.Wa(e.source), f = new ol.Feature(new ol.geom.Point(f)), e = ol.proj.transform(e.target, a.target, c.target), e = new ol.Feature(new ol.geom.Point(e));
      b[0].addFeature(f);
      b[1].addFeature(e);
    }
  }
};
function zf(a, b) {
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
      var b = wa(d);
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
      var b = wa(d);
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
function xf(a, b, c) {
  b = l(b) ? b : "affine";
  a = Af(a, l(c) ? c : void 0);
  a.algorithm = b;
  return a;
}
function Af(a, b) {
  var c = q(function(a, b) {
    for (var c = [], d = 0;d < a.length;d++) {
      var e = w.oa(a[d][0].getGeometry().getCoordinates()), A = ol.proj.transform(a[d][1].getGeometry().getCoordinates(), this.b.target, b);
      c.push({source:e, target:A});
    }
    return c;
  }, a), d = La(a.a), e = l(b) ? b : d.target;
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
function vf(a) {
  var b = jc(), c = kc(), b = l(b) ? b : "affine", d = La(a.a), c = xf(a, b, l(c) ? c : d.target);
  xf(a, b, d.target);
  return c;
}
yf.prototype.getType = function() {
  return this.l ? "update" : "new";
};
function Bf(a) {
  this.s = a.Ca;
  yf.call(this, a);
}
u(Bf, yf);
Bf.prototype.i = function() {
  Cf(this, this.U);
};
function Cf(a, b) {
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
  var e = a.s, f = a.a, h = a.b.target, n = q(function() {
    b[0].un("addfeature", r);
    b[1].un("addfeature", c);
    zf(this, b);
  }, a), m = q(function() {
    for (var a = b[0].getFeatures(), c = {}, f = 0;f < a.length;f++) {
      var h = w.oa(a[f].getGeometry().getCoordinates()), n = d(h, e.getHeight(), e.getWidth());
      c[n] = h;
    }
    this.dispatchEvent(new y("add-gcp-clippolygon", {clip:{source:"pixel", polygon:[c.ulc, c.urc, c.lrc, c.llc, c.ulc]}}));
  }, a), r = q(function(a) {
    a = a.feature;
    var c = w.oa(a.getGeometry().getCoordinates()), c = d(c, e.getHeight(), e.getWidth()), r = f.gcps, ba = {};
    if (0 < r.length) {
      for (var qa = r[0].target[0], ra = r[0].target[1], D = 0;D < r.length;D++) {
        r[D].target[0] < qa && (qa = r[D].target[0]), r[D].target[1] < ra && (ra = r[D].target[1]);
      }
      for (D = 0;D < r.length;D++) {
        r[D].target[0] === qa && r[D].target[1] === ra && (ba.llc = r[D].target), r[D].target[0] === qa && r[D].target[1] > ra && (ba.ulc = r[D].target), r[D].target[0] > qa && r[D].target[1] === ra && (ba.lrc = r[D].target), r[D].target[0] > qa && r[D].target[1] > ra && (ba.urc = r[D].target);
      }
    }
    c = ol.proj.transform(ba[c], f.target, h);
    c = new ol.Feature(new ol.geom.Point(c));
    r = wa(this.c);
    a.setId(r);
    c.setId(r);
    ba = w.j.ja();
    ba.getText().setText(r);
    a.setStyle(ba);
    c.setStyle(ba);
    b[1].addFeature(c);
    4 === b[0].getFeatures().length && (n(), m());
  }, a);
  b[0].on("addfeature", r);
  b[1].on("addfeature", c);
}
;function Df(a) {
  this.c = p(a) ? M(a) : a;
  var b = P("div", {"class":"georef-tools-clip-container", id:"georef-tools-clip-container"});
  this.c.appendChild(b);
  Ef(this, b);
  a = P("div", {"class":"georef-tools-clip-inner-container", id:"georef-tools-clip-inner-container"});
  b.appendChild(a);
  var b = [], c = Ff("noneToggle", "none", w.f("moveMap"));
  a.appendChild(c);
  b.push(c);
  var d = Ff("drawClip", "drawclip", w.f("drawClip"));
  a.appendChild(d);
  b.push(d);
  S(c, "click", q(this.b, this, "none", b));
  S(d, "click", q(this.b, this, "drawclip", b));
  U.call(this);
}
u(Df, Pc);
Df.prototype.a = function() {
  var a = M("georef-tools-clip-handler");
  null != a && E(a, "open") || $(a).trigger("click");
};
function Ff(a, b, c) {
  var d = P("div", {"class":"tool"});
  a = P("div", {id:a, "class":"tool-move toggle-elements", value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
Df.prototype.v = function() {
  var a = M("georef-tools-clip-handler");
  if (null == a || E(a, "open")) {
    $(a).trigger("click");
    for (var a = N("toggle-elements"), b = 0;b < a.length;b++) {
      E(a[b], "activate") && C(a[b], "activate");
    }
  }
};
Df.prototype.b = function(a, b) {
  for (var c = q(function(a, b) {
    E(a, "activate") || B(a, "activate");
    this.dispatchEvent(new y("activate-" + b, a));
  }, this), d = q(function(a, b) {
    E(a, "activate") && C(a, "activate");
    this.dispatchEvent(new y("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function Ef(a, b) {
  var c = P("div", {"class":"georef-tools-clip-handler", id:"georef-tools-clip-handler"});
  b.appendChild(c);
  Q(c, P("span", {"class":"icon"}));
  $(c).click(q(function() {
    var a = E(c, "open") ? new y("deactivate", c) : new y("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-clip-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function Gf(a, b, c) {
  this.a = new ol.source.Vector({features:new ol.Collection});
  l(c) && (c = Hf(c), this.a.addFeature(c));
  this.b = new ol.layer.Vector({source:this.a, style:w.j.Ea});
  c = new Oc(b, this.b);
  If(a, b, this.b, {"activate-drawclip":c, "deactivate-drawclip":c});
  this.na = a;
}
u(Gf, xa);
Gf.prototype.c = function(a) {
  a = Hf(a.target.clip);
  0 === this.a.getFeatures().length && (this.a.addFeature(a), this.b.addFeature(a));
};
function If(a, b, c, d) {
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
  S(a, "activate-drawclip", function(a) {
    e();
    d[a.type].a();
  });
  S(a, "deactivate-drawclip", e);
  S(a, "activate", function() {
    c.setMap(b);
  });
  S(a, "deactivate", function() {
    e();
    c.setMap(null);
  });
}
function Hf(a) {
  if ("pixel" === a.source) {
    for (var b = [], c = 0;c < a.polygon.length;c++) {
      b.push(w.Wa(a.polygon[c]));
    }
    a = new ol.geom.Polygon([b]);
    return new ol.Feature({geometry:a});
  }
}
;function Jf(a) {
  this.m = p(a) ? M(a) : a;
  var b = P("div", {"class":"georef-tools-gcp-container", id:"georef-tools-gcp-container"});
  this.m.appendChild(b);
  Kf(this, b);
  a = P("div", {"class":"georef-tools-gcp-inner-container", id:"georef-tools-gcp-inner-container"});
  b.appendChild(a);
  var b = [], c = Lf("noneToggle", "none", w.f("moveMap"));
  a.appendChild(c);
  b.push(c);
  var d = Lf("pointToggle", "addgcp", w.f("setCornerPoint"));
  a.appendChild(d);
  b.push(d);
  var e = Lf("dragToggle", "draggcp", w.f("moveCornerPoint"));
  a.appendChild(e);
  b.push(e);
  var f = Lf("deleteToggle", "delgcp", w.f("deleteCornerPoint"));
  a.appendChild(f);
  b.push(f);
  S(c, "click", q(this.b, this, "none", b));
  S(d, "click", q(this.b, this, "addgcp", b));
  S(e, "click", q(this.b, this, "draggcp", b));
  S(f, "click", q(this.b, this, "delgcp", b));
  U.call(this);
}
u(Jf, Pc);
Jf.prototype.a = function() {
  var a = M("georef-tools-gcp-handler");
  null != a && E(a, "open") || $(a).trigger("click");
};
function Lf(a, b, c) {
  var d = P("div", {"class":"tool"});
  a = P("div", {id:a, "class":"tool-move toggle-elements", value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
Jf.prototype.v = function() {
  var a = M("georef-tools-gcp-handler");
  if (null == a || E(a, "open")) {
    $(a).trigger("click");
    for (var a = N("toggle-elements"), b = 0;b < a.length;b++) {
      E(a[b], "activate") && C(a[b], "activate");
    }
  }
};
Jf.prototype.b = function(a, b) {
  for (var c = q(function(a, b) {
    E(a, "activate") || B(a, "activate");
    this.dispatchEvent(new y("activate-" + b, a));
  }, this), d = q(function(a, b) {
    E(a, "activate") && C(a, "activate");
    this.dispatchEvent(new y("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function Kf(a, b) {
  var c = P("div", {"class":"georef-tools-gcp-handler", id:"georef-tools-gcp-handler"});
  b.appendChild(c);
  Q(c, P("span", {"class":"icon"}));
  $(c).click(q(function() {
    var a = E(c, "open") ? new y("deactivate", c) : new y("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-gcp-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function Mf(a) {
  this.a = a.P;
  var b = a.Bb, c = a.sources[0], d = a.sources[1];
  a = {G:a.Pa[0], D:a.Pa[1]};
  var e = {G:new ol.layer.Vector({source:c, style:function() {
    return [w.j.ab];
  }}), D:new ol.layer.Vector({source:d, style:function() {
    return [w.j.ab];
  }})}, d = new Kc(c, d, a.G, a.D), c = new Mc(e.G, e.D, a.G, a.D), f = new Lc(e.G, e.D, a.G, a.D), d = {"activate-addgcp":d, "deactivate-addgcp":d, "activate-draggcp":c, "deactivate-draggcp":c, "activate-delgcp":f, "deactivate-delgcp":f};
  Nf(c, this.a);
  Of(b, a, e, d);
  this.na = b;
}
u(Mf, xa);
function Nf(a, b) {
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
  S(a, "selected", c);
  S(a, "deselected", c);
}
function Of(a, b, c, d) {
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
  S(a, "activate-addgcp", e);
  S(a, "deactivate-addgcp", f);
  S(a, "activate-draggcp", e);
  S(a, "deactivate-draggcp", f);
  S(a, "activate-delgcp", e);
  S(a, "deactivate-delgcp", f);
  S(a, "activate", function() {
    b.G.addLayer(c.G);
    b.D.addLayer(c.D);
  });
  S(a, "deactivate", function() {
    f();
    b.G.removeLayer(c.G);
    b.D.removeLayer(c.D);
  });
}
;function Pf(a) {
  var b = p(a.Sa) ? M(a.Sa) : b, c = a.vb, d = a.tb, e = a.Ca, f = a.Cb, h = l(a.Ha) ? a.Ha : void 0, n = l(a.type) ? a.type : void 0, m = l(a.Y) ? a.Y : void 0, r = l(a.Ia) ? a.Ia : void 0, A = [new ol.source.Vector, new ol.source.Vector], F = l(a.Ba) ? F : void 0;
  if (a = l(h)) {
    a: {
      if (l(h.gcps) && 4 === h.gcps.length && (a = h.gcps, 0 === a[0].source.length && 0 === a[1].source.length && 0 === a[2].source.length && 0 === a[3].source.length)) {
        a = !0;
        break a;
      }
      a = void 0;
    }
  }
  n = a ? new Bf({sources:A, O:h, type:n, Aa:r, Ba:F, Ca:e}) : new yf({sources:A, O:h, type:n, Aa:r, Ba:F});
  h = new Jf(b);
  A = new Mf({Bb:h, P:n, Pa:[e.getMap(), f.getMap()], sources:A});
  b = new Df(b);
  e = new Gf(b, e.getMap(), m);
  m = A.na;
  b = e.na;
  S(m, "activate", b.v);
  S(b, "activate", m.v);
  T(A.a, "add-gcp-clippolygon", e.c, void 0, e);
  m = new wf(c, d, A.a, e.a);
  c = new uf(c, d, A.a, e.a);
  Qf(m, c, f);
  h.a();
}
function Qf(a, b, c) {
  S(a, "start-warping", function() {
    Rf(c);
  });
  S(a, "end-warping", function(a) {
    a = a.target.data;
    Sf(c, a.wmsUrl, a.layerId, a.clip);
    Tf(c);
  });
  S(a, "error", function() {
    alert("Something went wrong, while trying to request a validation result.");
    Tf(c);
  });
  S(b, "end-confirm", function() {
    window.location.href = w.h.pb();
  });
}
;function Uf(a, b) {
  this.a = void 0;
  this.m = M(a);
  var c = l(b) ? b : [640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], d = new ol.layer.Tile({source:new ol.source.OSM});
  this.g = new ol.Map({layers:[d], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), renderer:"canvas", target:this.m, view:new ol.View({projection:"EPSG:3857", center:[0, 0], zoom:2}), controls:[new ol.control.FullScreen, new ol.control.Zoom, new ol.control.Attribution, new qe({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}), new ol.control.MousePosition]});
  this.g.getView().fit(c, this.g.getSize());
  this.b = new ol.control.ZoomToExtent({extent:c});
  this.g.addControl(this.b);
  c = new Ge(this.m);
  S(c, "jumpto", function(a) {
    var b = this.g.getView(), c = a.target.lonlat;
    b.setCenter(ol.proj.transform([parseFloat(c[0]), parseFloat(c[1])], a.target.srs, "EPSG:3857"));
    b.setZoom(12);
  }, void 0, this);
  O("ol-attribution").children[0].children[0].remove();
}
function Rf(a) {
  if (!l(Vf(a))) {
    var b = P("div", {"class":"result-viewer-loading-panel", id:"result-viewer-loading-panel", innerHTML:'<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100"aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">100% Complete</span></div></div>'});
    a.m.appendChild(b);
  }
}
function Tf(a) {
  a = Vf(a);
  l(a) && cc(a);
}
function Sf(a, b, c, d) {
  l(a.a) && a.g.removeLayer(a.a);
  var e = d.hasOwnProperty("polygon") && 0 < d.polygon.length ? new ol.geom.Polygon([d.polygon]) : void 0;
  d = void 0 !== e ? e.transform(d.source, "EPSG:3857") : void 0;
  e = void 0 === d ? a.g.getView().calculateExtent(a.g.getSize()) : d.getExtent();
  a.g.removeControl(a.b);
  a.b = new ol.control.ZoomToExtent({extent:e});
  a.g.addControl(a.b);
  a.a = te({Xa:b, Na:c, Y:d}, a.g);
  a.g.getLayers().insertAt(1, a.a);
  void 0 !== d && a.g.getView().fit(d.getExtent(), a.g.getSize());
  a = a.a;
  Xb() && (Xb().innerHTML = "", new lc(Xb(), a));
}
Uf.prototype.getMap = function() {
  return this.g;
};
function Vf(a) {
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
  hc();
  this.ma = new Uf(b);
  a.hasOwnProperty("btn_getallprocess") && Wf(this, a.btn_getallprocess, a.process_list);
  a.hasOwnProperty("btn_getallinvalideprocess") && Wf(this, a.btn_getallinvalideprocess, a.process_list, "validation=invalide");
  a.hasOwnProperty("btn_getsingleprocess_mapid") && Xf(this, a.btn_getsingleprocess_mapid, a.process_list);
  a.hasOwnProperty("btn_getsingleprocess_userid") && Yf(this, a.btn_getsingleprocess_userid, a.process_list);
});
function Wf(a, b, c, d) {
  S(M(b), "click", function() {
    var a = new W;
    T(a, "success", function(a) {
      a = a.target;
      Zf(this, c, Y(a));
      x(a);
    }, !1, this);
    T(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    var b = w.h.va(l(d) ? d : void 0);
    a.send(b, "GET");
  }, void 0, a);
}
function Xf(a, b, c) {
  S(M(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = M(a).value;
    a = new W;
    T(a, "success", function(a) {
      a = a.target;
      Zf(this, c, Y(a));
      x(a);
    }, !1, this);
    b = w.h.va("mapid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function Yf(a, b, c) {
  S(M(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = M(a).value;
    a = new W;
    T(a, "success", function(a) {
      a = a.target;
      Zf(this, c, Y(a));
      x(a);
    }, !1, this);
    T(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    b = w.h.va("userid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function $f(a, b) {
  function c(a, b) {
    return P("p", {innerHTML:"<strong>" + a + ":</strong><br> " + b});
  }
  var d = P("article", {id:b.georef_id}), e = q(function(a) {
    var b = P("p");
    if ("isvalide" != a.adminvalidation) {
      var c = P("button", {"data-href":w.h.mb("georeferenceid=" + a.georef_id), "class":"btn btn-primary action-btn", innerHTML:"Is valide"});
      ag(c, d, "Georeference process is valide?", "Are you sure you wanna set this georeference process to isvalide? Why?");
      b.appendChild(c);
    }
    c = P("button", {"data-params-georef":a.georef_params, "data-params-clip":a.clippolygon, "data-params-id":a.mapid, "class":"btn btn-primary btn-show-georef", innerHTML:"Show map"});
    bg(this, c);
    b.appendChild(c);
    c = P("a", {href:w.h.ia(void 0, "georeferenceid=" + a.georef_id), "class":"btn btn-primary action-btn", target:"_blank", innerHTML:"Go to process ..."});
    b.appendChild(c);
    "invalide" != a.adminvalidation && (a = P("button", {"data-href":w.h.lb("georeferenceid=" + a.georef_id), "class":"btn btn-warning action-btn", innerHTML:"Is invalide"}), ag(a, d, "Georeference process is invalide?", "Are you sure you wanna set this georeference process to invalide? Why?"), b.appendChild(a));
    return b;
  }, a);
  Q(d, c("Process-ID", b.georef_id));
  Q(d, c("Admin validation", b.adminvalidation));
  Q(d, c("Map id", b.mapid));
  Q(d, c("User id", b.userid));
  Q(d, c("Map sheet description", b.title));
  Q(d, c("Georeference parameter (lon:lat)", b.georef_params));
  Q(d, c("Type", b.type));
  Q(d, c("Processed", b.processed));
  Q(d, c("Is active", b.georef_isactive));
  Q(d, P("p", {"class":"meta", innerHTML:"Created: " + b.georef_time}));
  Q(d, e(b));
  return d;
}
function Zf(a, b, c) {
  b = M(b);
  b.innerHTML = "";
  for (var d = 0, e = c.length;d < e;d++) {
    var f = $f(a, c[d]);
    b.appendChild(f);
  }
}
function ag(a, b, c, d) {
  S(a, "click", pa(w.gb, c, d + '<br><div id="admin-validation-comment" class="input-group"><input type="radio" value="imprecision"> Imprecision<br><input type="radio" value="wrong-parameter"> Wrong Parameter<br><input type="radio" value="wrong-map-sheet-number"> Wrong map sheet number<br><input type="radio" value="bad-original"> Bad original<br><br><input type="text" class="form-control" placeholder="comment" id="confirm-comment"></div>', function() {
    for (var c = Yb("input", void 0, M("admin-validation-comment")), d = void 0, h = 0;h < c.length;h++) {
      "radio" == c[h].type && c[h].checked && (d = c[h].value);
    }
    c = l(d) ? d : M("confirm-comment").value;
    c = a.getAttribute("data-href") + "&comment=" + c;
    X(c, function(a) {
      alert(Y(a.target).message);
      cc(b);
    }, "GET");
  }));
}
function bg(a, b) {
  S(b, "click", function(a) {
    var b = JSON.parse(a.currentTarget.getAttribute("data-params-georef")), b = b.hasOwnProperty("new") ? b["new"] : b, e = JSON.parse(a.currentTarget.getAttribute("data-params-clip"));
    a = parseInt(a.currentTarget.getAttribute("data-params-id"), 0);
    a = {georeference:b, id:a, clip:e};
    Rf(this.ma);
    Ye(a, q(function(a) {
      Tf(this.ma);
      a = Y(a.target);
      Sf(this.ma, a.wmsUrl, a.layerId, a.clip);
    }, this), function() {
      Tf(this.ma);
      alert("Something went wrong while trying to fetch a georeference validation result from server ....");
    });
  }, !1, a);
}
;function cg(a, b) {
  w.Ga();
  w.Oa("vk2-modal-anchor");
  hc();
  var c = new Z(window.location.href), d = c.a.get("objectid"), c = c.a.get("georeferenceid");
  l(c) ? dg("georeferenceid=" + c, q(this.a, this, a, b)) : l(d) && dg("objectid=" + d, q(this.a, this, a, b));
}
t("vk2.app.GeoreferenceApp", cg);
function dg(a, b) {
  var c = w.h.jb(a);
  X(c, function(a) {
    200 != Id(a.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    b(Y(a.target));
  });
}
cg.prototype.a = function(a, b, c) {
  var d = c.hasOwnProperty("extent") ? c.extent : [13.8, 51, 14.2, 52], e = new Sd(a, c.zoomify), f = new Uf(b, ol.proj.transformExtent(d, v.GEOREFERENCE_EXTENT_SRS, "EPSG:3857"));
  S(e, "loadend", function() {
    new Pf({Sa:a, vb:"georef-validate-menu", tb:c.objectid, Ca:e, Cb:f, Ha:c.georeference, type:c.type, Y:c.clip, Ia:c.georeferenceid});
  }, void 0, this);
};
}).call(window);
