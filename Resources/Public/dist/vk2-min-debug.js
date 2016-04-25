(function(){var k, aa = aa || {}, m = this;
function n(c) {
  return void 0 !== c;
}
function ba() {
}
function ca(c) {
  var d = typeof c;
  if ("object" == d) {
    if (c) {
      if (c instanceof Array) {
        return "array";
      }
      if (c instanceof Object) {
        return d;
      }
      var e = Object.prototype.toString.call(c);
      if ("[object Window]" == e) {
        return "object";
      }
      if ("[object Array]" == e || "number" == typeof c.length && "undefined" != typeof c.splice && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == e || "undefined" != typeof c.call && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == d && "undefined" == typeof c.call) {
      return "object";
    }
  }
  return d;
}
function da(c) {
  return null != c;
}
function ea(c) {
  return "array" == ca(c);
}
function fa(c) {
  var d = ca(c);
  return "array" == d || "object" == d && "number" == typeof c.length;
}
function q(c) {
  return "string" == typeof c;
}
function ga(c) {
  return "number" == typeof c;
}
function ha(c) {
  return "function" == ca(c);
}
function ia(c) {
  var d = typeof c;
  return "object" == d && null != c || "function" == d;
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(c, d, e) {
  return c.call.apply(c.bind, arguments);
}
function ma(c, d, e) {
  if (!c) {
    throw Error();
  }
  if (2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, f);
      return c.apply(d, e);
    };
  }
  return function() {
    return c.apply(d, arguments);
  };
}
function r(c, d, e) {
  r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return r.apply(null, arguments);
}
function na(c, d) {
  var e = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = e.slice();
    d.push.apply(d, arguments);
    return c.apply(this, d);
  };
}
var oa = Date.now || function() {
  return +new Date;
};
function t(c, d) {
  var e = c.split("."), f = m;
  e[0] in f || !f.execScript || f.execScript("var " + e[0]);
  for (var g;e.length && (g = e.shift());) {
    !e.length && n(d) ? f[g] = d : f[g] ? f = f[g] : f = f[g] = {};
  }
}
function v(c, d) {
  function e() {
  }
  e.prototype = d.prototype;
  c.na = d.prototype;
  c.prototype = new e;
  c.prototype.constructor = c;
  c.Zb = function(c, e, h) {
    for (var l = Array(arguments.length - 2), p = 2;p < arguments.length;p++) {
      l[p - 2] = arguments[p];
    }
    return d.prototype[e].apply(c, l);
  };
}
;var pa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, x, Ea, Fa, y, Ga;
t("vk2.settings.updateSettings", function() {
  pa = vk2x.settings.ELASTICSEARCH_NODE;
  ra = vk2x.settings.ELASTICSEARCH_SRS;
  sa = vk2x.settings.EVALUATION_GETPROCESS;
  ta = vk2x.settings.EVALUATION_SETISINVALIDE;
  ua = vk2x.settings.EVALUATION_SETISVALIDE;
  va = vk2x.settings.GEOREFERENCE_CONFIRM;
  wa = vk2x.settings.GEOREFERENCE_EXTENT_SRS;
  xa = vk2x.settings.GEOREFERENCE_GETPROCESS;
  ya = vk2x.settings.GEOREFERENCE_HISTORY;
  za = vk2x.settings.GEOREFERENCE_INFORMATION;
  Aa = vk2x.settings.GEOREFERENCE_PAGE;
  Ba = vk2x.settings.GEOREFERENCE_VALIDATION;
  Ca = vk2x.settings.MAIN_PAGE;
  Da = vk2x.settings.MAPPROFILE_PAGE;
  x = vk2x.settings.MAPVIEW_PARAMS;
  Ha = vk2x.settings.MODE_3D;
  Ea = vk2x.settings.THUMB_PATH;
  Fa = vk2x.settings.TMS_URL_SUBDOMAINS;
  y = vk2x.settings.WITH_SPEAKING_URLS;
  Ga = vk2x.settings.WMS_DYNAMIC_TEMPLATE;
});
var Ha = !1;
function Ia(c, d) {
  function e(c, e) {
    if ("polygon" === e.toLowerCase()) {
      for (var d = [], f = 0, g = c.length;f < g;f++) {
        var w = ol.proj.transform(c[f], "EPSG:4326", "EPSG:900913");
        Ha && w.push(1E4);
        d.push(w);
      }
      return new ol.geom.Polygon([d]);
    }
  }
  var f = "clippolygon" in d ? e(d.clippolygon, "polygon") : void 0, f = void 0 === f && "geometry" in d ? e(d.geometry.coordinates[0], d.geometry.type) : f;
  delete d.geometry;
  var f = new ol.Feature({geometry:f}), g;
  for (g in d) {
    d.hasOwnProperty(g) && ("time" === g ? f.set(g, d[g].split("-")[0]) : f.set(g, d[g]));
  }
  f.setId(c);
  return f;
}
function Ja(c) {
  for (var d = [], e = 0, f = c.length;e < f;e++) {
    d.push(Ia(c[e]._id, c[e]._source));
  }
  return d;
}
;var A = {j:{}};
A.j.Xb = new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 0, 255, 1.0)", width:2})});
A.j.tb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#f00", width:1}), fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"})});
A.j.ub = new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:2})});
A.j.Ma = new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}), stroke:new ol.style.Stroke({color:"#ffcc33", width:2}), image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"#ffcc33"})})});
A.j.Ea = function(c) {
  var d = 16 * Math.PI / 6, d = [0, d, d, d, d, d, d];
  c = n(c) ? c : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:8, fill:new ol.style.Fill({color:"rgba(255,255,255,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(49,159,211,0.5)", width:15, lineDash:d})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:c, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
A.j.Na = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.6)"}), stroke:new ol.style.Stroke({color:"#29A329", width:1.5})})});
A.j.qa = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"}), stroke:new ol.style.Stroke({color:"#f00", width:1})}), zIndex:1E5});
A.j.ka = function(c) {
  var d = 22 * Math.PI / 6, d = [0, d, d, d, d, d, d];
  c = n(c) ? c : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:11, fill:new ol.style.Fill({color:"rgba(255,128,0,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(240,0,0,0.5)", width:15, lineDash:d})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:c, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
function Ka() {
  this.b = this.a = !1;
  this.i = 0;
}
function La(c) {
  c.a || c.b || (c.i += 1);
  return "" + c.i;
}
;function Ma(c) {
  this.ya = c;
}
;function Na() {
  0 != Oa && (Pa[this[ja] || (this[ja] = ++ka)] = this);
  this.i = this.i;
  this.O = this.O;
}
var Oa = 0, Pa = {};
Na.prototype.i = !1;
function B(c) {
  c.i || (c.i = !0, c.X(), 0 != Oa && (c = c[ja] || (c[ja] = ++ka), delete Pa[c]));
}
Na.prototype.X = function() {
  if (this.O) {
    for (;this.O.length;) {
      this.O.shift()();
    }
  }
};
function C(c, d) {
  this.type = c;
  this.currentTarget = this.target = d;
  this.b = !1;
  this.lb = !0;
}
C.prototype.stopPropagation = function() {
  this.b = !0;
};
C.prototype.preventDefault = function() {
  this.lb = !1;
};
var Qa = "closure_listenable_" + (1E6 * Math.random() | 0), Ra = 0;
function Sa(c, d, e, f, g) {
  this.listener = c;
  this.a = null;
  this.src = d;
  this.type = e;
  this.ga = !!f;
  this.aa = g;
  ++Ra;
  this.ca = this.ra = !1;
}
function Ta(c) {
  c.ca = !0;
  c.listener = null;
  c.a = null;
  c.src = null;
  c.aa = null;
}
;function Va(c) {
  c = String(c);
  if (/^\s*$/.test(c) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(c.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + c + ")");
    } catch (d) {
    }
  }
  throw Error("Invalid JSON string: " + c);
}
;function Wa(c, d) {
  this.width = c;
  this.height = d;
}
k = Wa.prototype;
k.clone = function() {
  return new Wa(this.width, this.height);
};
k.isEmpty = function() {
  return !(this.width * this.height);
};
k.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
k.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
k.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Xa(c) {
  this.a = c;
}
var Ya = /\s*;\s*/;
k = Xa.prototype;
k.set = function(c, d, e, f, g, h) {
  if (/[;=\s]/.test(c)) {
    throw Error('Invalid cookie name "' + c + '"');
  }
  if (/[;\r\n]/.test(d)) {
    throw Error('Invalid cookie value "' + d + '"');
  }
  n(e) || (e = -1);
  g = g ? ";domain=" + g : "";
  f = f ? ";path=" + f : "";
  h = h ? ";secure" : "";
  e = 0 > e ? "" : 0 == e ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(oa() + 1E3 * e)).toUTCString();
  this.a.cookie = c + "=" + d + g + f + e + h;
};
k.get = function(c, d) {
  for (var e = c + "=", f = (this.a.cookie || "").split(Ya), g = 0, h;h = f[g];g++) {
    if (0 == h.lastIndexOf(e, 0)) {
      return h.substr(e.length);
    }
    if (h == c) {
      return "";
    }
  }
  return d;
};
k.remove = function(c, d, e) {
  var f = n(this.get(c));
  this.set(c, "", 0, d, e);
  return f;
};
k.getKeys = function() {
  return Za(this).keys;
};
k.M = function() {
  return Za(this).values;
};
k.isEmpty = function() {
  return !this.a.cookie;
};
k.Ca = function() {
  return this.a.cookie ? (this.a.cookie || "").split(Ya).length : 0;
};
k.clear = function() {
  for (var c = Za(this).keys, d = c.length - 1;0 <= d;d--) {
    this.remove(c[d]);
  }
};
function Za(c) {
  c = (c.a.cookie || "").split(Ya);
  for (var d = [], e = [], f, g, h = 0;g = c[h];h++) {
    f = g.indexOf("="), -1 == f ? (d.push(""), e.push(g)) : (d.push(g.substring(0, f)), e.push(g.substring(f + 1)));
  }
  return {keys:d, values:e};
}
var $a = new Xa(document);
$a.b = 3950;
function ab() {
}
ab.prototype.a = null;
function bb(c) {
  var d;
  (d = c.a) || (d = {}, cb(c) && (d[0] = !0, d[1] = !0), d = c.a = d);
  return d;
}
;function db(c, d) {
  for (var e in c) {
    d.call(void 0, c[e], e, c);
  }
}
function eb(c, d) {
  for (var e in c) {
    if (d.call(void 0, c[e], e, c)) {
      return !0;
    }
  }
  return !1;
}
function fb(c) {
  var d = [], e = 0, f;
  for (f in c) {
    d[e++] = c[f];
  }
  return d;
}
function gb(c) {
  var d = [], e = 0, f;
  for (f in c) {
    d[e++] = f;
  }
  return d;
}
function hb(c) {
  var d = {}, e;
  for (e in c) {
    d[e] = c[e];
  }
  return d;
}
var ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function jb(c, d) {
  for (var e, f, g = 1;g < arguments.length;g++) {
    f = arguments[g];
    for (e in f) {
      c[e] = f[e];
    }
    for (var h = 0;h < ib.length;h++) {
      e = ib[h], Object.prototype.hasOwnProperty.call(f, e) && (c[e] = f[e]);
    }
  }
}
function kb(c) {
  var d = arguments.length;
  if (1 == d && ea(arguments[0])) {
    return kb.apply(null, arguments[0]);
  }
  for (var e = {}, f = 0;f < d;f++) {
    e[arguments[f]] = !0;
  }
  return e;
}
;kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function lb(c) {
  lb[" "](c);
  return c;
}
lb[" "] = ba;
var mb = String.prototype.trim ? function(c) {
  return c.trim();
} : function(c) {
  return c.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function nb(c) {
  if (!ob.test(c)) {
    return c;
  }
  -1 != c.indexOf("&") && (c = c.replace(qb, "&amp;"));
  -1 != c.indexOf("<") && (c = c.replace(rb, "&lt;"));
  -1 != c.indexOf(">") && (c = c.replace(sb, "&gt;"));
  -1 != c.indexOf('"') && (c = c.replace(tb, "&quot;"));
  -1 != c.indexOf("'") && (c = c.replace(ub, "&#39;"));
  -1 != c.indexOf("\x00") && (c = c.replace(vb, "&#0;"));
  return c;
}
var qb = /&/g, rb = /</g, sb = />/g, tb = /"/g, ub = /'/g, vb = /\x00/g, ob = /[\x00&<>"']/;
function wb(c, d) {
  return c < d ? -1 : c > d ? 1 : 0;
}
function xb(c) {
  return String(c).replace(/\-([a-z])/g, function(c, e) {
    return e.toUpperCase();
  });
}
function yb(c) {
  var d = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return c.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(c, d, g) {
    return d + g.toUpperCase();
  });
}
;var E = Array.prototype, zb = E.indexOf ? function(c, d, e) {
  return E.indexOf.call(c, d, e);
} : function(c, d, e) {
  e = null == e ? 0 : 0 > e ? Math.max(0, c.length + e) : e;
  if (q(c)) {
    return q(d) && 1 == d.length ? c.indexOf(d, e) : -1;
  }
  for (;e < c.length;e++) {
    if (e in c && c[e] === d) {
      return e;
    }
  }
  return -1;
}, Ab = E.forEach ? function(c, d, e) {
  E.forEach.call(c, d, e);
} : function(c, d, e) {
  for (var f = c.length, g = q(c) ? c.split("") : c, h = 0;h < f;h++) {
    h in g && d.call(e, g[h], h, c);
  }
}, Bb = E.filter ? function(c, d, e) {
  return E.filter.call(c, d, e);
} : function(c, d, e) {
  for (var f = c.length, g = [], h = 0, l = q(c) ? c.split("") : c, p = 0;p < f;p++) {
    if (p in l) {
      var u = l[p];
      d.call(e, u, p, c) && (g[h++] = u);
    }
  }
  return g;
};
function Cb(c) {
  var d;
  a: {
    d = Db;
    for (var e = c.length, f = q(c) ? c.split("") : c, g = 0;g < e;g++) {
      if (g in f && d.call(void 0, f[g], g, c)) {
        d = g;
        break a;
      }
    }
    d = -1;
  }
  return 0 > d ? null : q(c) ? c.charAt(d) : c[d];
}
function Eb(c, d) {
  return 0 <= zb(c, d);
}
function Fb(c, d) {
  var e = zb(c, d), f;
  (f = 0 <= e) && E.splice.call(c, e, 1);
  return f;
}
function Gb(c) {
  return E.concat.apply(E, arguments);
}
function Hb(c) {
  var d = c.length;
  if (0 < d) {
    for (var e = Array(d), f = 0;f < d;f++) {
      e[f] = c[f];
    }
    return e;
  }
  return [];
}
function Ib(c, d, e) {
  return 2 >= arguments.length ? E.slice.call(c, d) : E.slice.call(c, d, e);
}
;function Jb(c) {
  c = c.className;
  return q(c) && c.match(/\S+/g) || [];
}
function F(c, d) {
  var e = Jb(c);
  Kb(e, Ib(arguments, 1));
  c.className = e.join(" ");
}
function G(c, d) {
  var e = Jb(c), e = Lb(e, Ib(arguments, 1));
  c.className = e.join(" ");
}
function Kb(c, d) {
  for (var e = 0;e < d.length;e++) {
    Eb(c, d[e]) || c.push(d[e]);
  }
}
function Lb(c, d) {
  return Bb(c, function(c) {
    return !Eb(d, c);
  });
}
function Mb(c, d, e) {
  var f = Jb(c);
  q(d) ? Fb(f, d) : ea(d) && (f = Lb(f, d));
  q(e) && !Eb(f, e) ? f.push(e) : ea(e) && Kb(f, e);
  c.className = f.join(" ");
}
function H(c, d) {
  return Eb(Jb(c), d);
}
;function Nb(c) {
  if (c.classList) {
    return c.classList;
  }
  c = c.className;
  return q(c) && c.match(/\S+/g) || [];
}
function Ob(c, d) {
  return c.classList ? c.classList.contains(d) : Eb(Nb(c), d);
}
function Pb(c, d) {
  c.classList ? c.classList.add(d) : Ob(c, d) || (c.className += 0 < c.className.length ? " " + d : d);
}
function Qb(c, d) {
  c.classList ? c.classList.remove(d) : Ob(c, d) && (c.className = Bb(Nb(c), function(c) {
    return c != d;
  }).join(" "));
}
function Rb(c) {
  Ob(c, "active") ? Qb(c, "active") : Pb(c, "active");
}
;function Sb(c) {
  this.src = c;
  this.a = {};
  this.b = 0;
}
Sb.prototype.add = function(c, d, e, f, g) {
  var h = c.toString();
  c = this.a[h];
  c || (c = this.a[h] = [], this.b++);
  var l = Tb(c, d, f, g);
  -1 < l ? (d = c[l], e || (d.ra = !1)) : (d = new Sa(d, this.src, h, !!f, g), d.ra = e, c.push(d));
  return d;
};
Sb.prototype.remove = function(c, d, e, f) {
  c = c.toString();
  if (!(c in this.a)) {
    return !1;
  }
  var g = this.a[c];
  d = Tb(g, d, e, f);
  return -1 < d ? (Ta(g[d]), E.splice.call(g, d, 1), 0 == g.length && (delete this.a[c], this.b--), !0) : !1;
};
function Ub(c, d) {
  var e = d.type;
  e in c.a && Fb(c.a[e], d) && (Ta(d), 0 == c.a[e].length && (delete c.a[e], c.b--));
}
Sb.prototype.Fa = function(c, d, e, f) {
  c = this.a[c.toString()];
  var g = -1;
  c && (g = Tb(c, d, e, f));
  return -1 < g ? c[g] : null;
};
Sb.prototype.hasListener = function(c, d) {
  var e = n(c), f = e ? c.toString() : "", g = n(d);
  return eb(this.a, function(c) {
    for (var l = 0;l < c.length;++l) {
      if (!(e && c[l].type != f || g && c[l].ga != d)) {
        return !0;
      }
    }
    return !1;
  });
};
function Tb(c, d, e, f) {
  for (var g = 0;g < c.length;++g) {
    var h = c[g];
    if (!h.ca && h.listener == d && h.ga == !!e && h.aa == f) {
      return g;
    }
  }
  return -1;
}
;var Vb;
function Wb() {
}
v(Wb, ab);
function Xb(c) {
  return (c = cb(c)) ? new ActiveXObject(c) : new XMLHttpRequest;
}
function cb(c) {
  if (!c.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var d = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e = 0;e < d.length;e++) {
      var f = d[e];
      try {
        return new ActiveXObject(f), c.b = f;
      } catch (g) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return c.b;
}
Vb = new Wb;
function Yb(c, d) {
  this.g = {};
  this.a = [];
  this.b = 0;
  var e = arguments.length;
  if (1 < e) {
    if (e % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var f = 0;f < e;f += 2) {
      this.set(arguments[f], arguments[f + 1]);
    }
  } else {
    if (c) {
      c instanceof Yb ? (e = c.getKeys(), f = c.M()) : (e = gb(c), f = fb(c));
      for (var g = 0;g < e.length;g++) {
        this.set(e[g], f[g]);
      }
    }
  }
}
k = Yb.prototype;
k.Ca = function() {
  return this.b;
};
k.M = function() {
  Zb(this);
  for (var c = [], d = 0;d < this.a.length;d++) {
    c.push(this.g[this.a[d]]);
  }
  return c;
};
k.getKeys = function() {
  Zb(this);
  return this.a.concat();
};
k.equals = function(c, d) {
  if (this === c) {
    return !0;
  }
  if (this.b != c.Ca()) {
    return !1;
  }
  var e = d || $b;
  Zb(this);
  for (var f, g = 0;f = this.a[g];g++) {
    if (!e(this.get(f), c.get(f))) {
      return !1;
    }
  }
  return !0;
};
function $b(c, d) {
  return c === d;
}
k.isEmpty = function() {
  return 0 == this.b;
};
k.clear = function() {
  this.g = {};
  this.b = this.a.length = 0;
};
k.remove = function(c) {
  return ac(this.g, c) ? (delete this.g[c], this.b--, this.a.length > 2 * this.b && Zb(this), !0) : !1;
};
function Zb(c) {
  if (c.b != c.a.length) {
    for (var d = 0, e = 0;d < c.a.length;) {
      var f = c.a[d];
      ac(c.g, f) && (c.a[e++] = f);
      d++;
    }
    c.a.length = e;
  }
  if (c.b != c.a.length) {
    for (var g = {}, e = d = 0;d < c.a.length;) {
      f = c.a[d], ac(g, f) || (c.a[e++] = f, g[f] = 1), d++;
    }
    c.a.length = e;
  }
}
k.get = function(c, d) {
  return ac(this.g, c) ? this.g[c] : d;
};
k.set = function(c, d) {
  ac(this.g, c) || (this.b++, this.a.push(c));
  this.g[c] = d;
};
k.forEach = function(c, d) {
  for (var e = this.getKeys(), f = 0;f < e.length;f++) {
    var g = e[f], h = this.get(g);
    c.call(d, h, g, this);
  }
};
k.clone = function() {
  return new Yb(this);
};
function ac(c, d) {
  return Object.prototype.hasOwnProperty.call(c, d);
}
;function bc(c) {
  if ("function" == typeof c.M) {
    return c.M();
  }
  if (q(c)) {
    return c.split("");
  }
  if (fa(c)) {
    for (var d = [], e = c.length, f = 0;f < e;f++) {
      d.push(c[f]);
    }
    return d;
  }
  return fb(c);
}
function cc(c, d, e) {
  if ("function" == typeof c.forEach) {
    c.forEach(d, e);
  } else {
    if (fa(c) || q(c)) {
      Ab(c, d, e);
    } else {
      var f;
      if ("function" == typeof c.getKeys) {
        f = c.getKeys();
      } else {
        if ("function" != typeof c.M) {
          if (fa(c) || q(c)) {
            f = [];
            for (var g = c.length, h = 0;h < g;h++) {
              f.push(h);
            }
          } else {
            f = gb(c);
          }
        } else {
          f = void 0;
        }
      }
      for (var g = bc(c), h = g.length, l = 0;l < h;l++) {
        d.call(e, g[l], f && f[l], c);
      }
    }
  }
}
;var dc;
a: {
  var ec = m.navigator;
  if (ec) {
    var fc = ec.userAgent;
    if (fc) {
      dc = fc;
      break a;
    }
  }
  dc = "";
}
function I(c) {
  return -1 != dc.indexOf(c);
}
;function gc() {
  return I("Edge");
}
;var hc = I("Opera") || I("OPR"), J = I("Edge") || I("Trident") || I("MSIE"), ic = I("Gecko") && !(-1 != dc.toLowerCase().indexOf("webkit") && !gc()) && !(I("Trident") || I("MSIE")) && !gc(), K = -1 != dc.toLowerCase().indexOf("webkit") && !gc();
K && I("Mobile");
var jc = I("Macintosh");
I("Windows");
I("Linux") || I("CrOS");
var kc = m.navigator || null;
kc && (kc.appVersion || "").indexOf("X11");
I("Android");
!I("iPhone") || I("iPod") || I("iPad");
I("iPad");
function lc() {
  var c = dc;
  if (ic) {
    return /rv\:([^\);]+)(\)|;)/.exec(c);
  }
  if (J && gc()) {
    return /Edge\/([\d\.]+)/.exec(c);
  }
  if (J) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c);
  }
  if (K) {
    return /WebKit\/(\S+)/.exec(c);
  }
}
function mc() {
  var c = m.document;
  return c ? c.documentMode : void 0;
}
var nc = function() {
  if (hc && m.opera) {
    var c = m.opera.version;
    return ha(c) ? c() : c;
  }
  var c = "", d = lc();
  d && (c = d ? d[1] : "");
  return J && !gc() && (d = mc(), d > parseFloat(c)) ? String(d) : c;
}(), oc = {};
function L(c) {
  var d;
  if (!(d = oc[c])) {
    d = 0;
    for (var e = mb(String(nc)).split("."), f = mb(String(c)).split("."), g = Math.max(e.length, f.length), h = 0;0 == d && h < g;h++) {
      var l = e[h] || "", p = f[h] || "", u = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = u.exec(l) || ["", "", ""], D = z.exec(p) || ["", "", ""];
        if (0 == w[0].length && 0 == D[0].length) {
          break;
        }
        d = wb(0 == w[1].length ? 0 : parseInt(w[1], 10), 0 == D[1].length ? 0 : parseInt(D[1], 10)) || wb(0 == w[2].length, 0 == D[2].length) || wb(w[2], D[2]);
      } while (0 == d);
    }
    d = oc[c] = 0 <= d;
  }
  return d;
}
function pc() {
  return J && (gc() || 9 <= qc);
}
var rc = m.document, sc = mc(), qc = !rc || !J || !sc && gc() ? void 0 : sc || ("CSS1Compat" == rc.compatMode ? parseInt(nc, 10) : 5);
var tc = !J || pc();
!ic && !J || J && pc() || ic && L("1.9.1");
J && L("9");
var uc = J || hc || K;
J && pc();
function vc(c) {
  return M(c);
}
function M(c) {
  var d = document;
  return q(c) ? d.getElementById(c) : c;
}
function N(c, d) {
  var e = d || document;
  return e.querySelectorAll && e.querySelector ? e.querySelectorAll("." + c) : wc("*", c, d);
}
function P(c, d) {
  var e = d || document, f = null;
  e.getElementsByClassName ? f = e.getElementsByClassName(c)[0] : e.querySelectorAll && e.querySelector ? f = e.querySelector("." + c) : f = wc("*", c, d)[0];
  return f || null;
}
function wc(c, d, e) {
  var f = document;
  e = e || f;
  c = c && "*" != c ? c.toUpperCase() : "";
  if (e.querySelectorAll && e.querySelector && (c || d)) {
    return e.querySelectorAll(c + (d ? "." + d : ""));
  }
  if (d && e.getElementsByClassName) {
    e = e.getElementsByClassName(d);
    if (c) {
      for (var f = {}, g = 0, h = 0, l;l = e[h];h++) {
        c == l.nodeName && (f[g++] = l);
      }
      f.length = g;
      return f;
    }
    return e;
  }
  e = e.getElementsByTagName(c || "*");
  if (d) {
    f = {};
    for (h = g = 0;l = e[h];h++) {
      c = l.className, "function" == typeof c.split && Eb(c.split(/\s+/), d) && (f[g++] = l);
    }
    f.length = g;
    return f;
  }
  return e;
}
function xc(c, d) {
  db(d, function(e, d) {
    "style" == d ? c.style.cssText = e : "class" == d ? c.className = e : "for" == d ? c.htmlFor = e : d in yc ? c.setAttribute(yc[d], e) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? c.setAttribute(d, e) : c[d] = e;
  });
}
var yc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Q(c, d, e) {
  var f = arguments, g = document, h = f[0], l = f[1];
  if (!tc && l && (l.name || l.type)) {
    h = ["<", h];
    l.name && h.push(' name="', nb(l.name), '"');
    if (l.type) {
      h.push(' type="', nb(l.type), '"');
      var p = {};
      jb(p, l);
      delete p.type;
      l = p;
    }
    h.push(">");
    h = h.join("");
  }
  h = g.createElement(h);
  l && (q(l) ? h.className = l : ea(l) ? h.className = l.join(" ") : xc(h, l));
  2 < f.length && zc(g, h, f);
  return h;
}
function zc(c, d, e) {
  function f(e) {
    e && d.appendChild(q(e) ? c.createTextNode(e) : e);
  }
  for (var g = 2;g < e.length;g++) {
    var h = e[g];
    !fa(h) || ia(h) && 0 < h.nodeType ? f(h) : Ab(Ac(h) ? Hb(h) : h, f);
  }
}
function R(c, d) {
  c.appendChild(d);
}
function Bc(c) {
  c && c.parentNode && c.parentNode.removeChild(c);
}
function Cc(c) {
  return ia(c) && 1 == c.nodeType;
}
function Dc(c) {
  var d;
  if (uc && !(J && L("9") && !L("10") && m.SVGElement && c instanceof m.SVGElement) && (d = c.parentElement)) {
    return d;
  }
  d = c.parentNode;
  return Cc(d) ? d : null;
}
function Ec(c, d) {
  var e = [];
  return Fc(c, d, e, !0) ? e[0] : void 0;
}
function Gc(c, d) {
  var e = [];
  Fc(c, d, e, !1);
  return e;
}
function Fc(c, d, e, f) {
  if (null != c) {
    for (c = c.firstChild;c;) {
      if (d(c) && (e.push(c), f) || Fc(c, d, e, f)) {
        return !0;
      }
      c = c.nextSibling;
    }
  }
  return !1;
}
function Ac(c) {
  if (c && "number" == typeof c.length) {
    if (ia(c)) {
      return "function" == typeof c.item || "string" == typeof c.item;
    }
    if (ha(c)) {
      return "function" == typeof c.item;
    }
  }
  return !1;
}
;function Hc() {
  proj4.defs("EPSG:3043", "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
  proj4.defs("EPSG:4314", "+proj=longlat +ellps=bessel +datum=potsdam +no_defs");
  proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
  proj4.defs("EPSG:900913", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs");
  proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
}
function Ic(c) {
  var d = c.hasOwnProperty("polygon") && 0 < c.polygon.length ? new ol.geom.Polygon([c.polygon]) : void 0;
  void 0 !== d && d.transform(c.source, x.projection);
  return new ol.Feature({geometry:d});
}
function Jc() {
  var c = M("transformation-chooser");
  return "tps" === c.value.toLowerCase() ? "tps" : "polynom" === c.value.toLowerCase() ? "polynom" : "affine";
}
function Kc() {
  var c = M("projection-chooser");
  return null !== c && void 0 !== c ? c.value : "EPSG:4314";
}
;!J || pc();
var Lc = !J || pc(), Mc = J && !L("9");
!K || L("528");
ic && L("1.9b") || J && L("8") || hc && L("9.5") || K && L("528");
ic && !L("8") || J && L("9");
function Nc(c, d) {
  C.call(this, c ? c.type : "");
  this.currentTarget = this.target = null;
  this.keyCode = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.h = this.l = this.a = this.i = !1;
  this.S = null;
  if (c) {
    this.type = c.type;
    this.target = c.target || c.srcElement;
    this.currentTarget = d;
    var e = c.relatedTarget;
    if (e && ic) {
      try {
        lb(e.nodeName);
      } catch (f) {
      }
    }
    this.offsetX = K || void 0 !== c.offsetX ? c.offsetX : c.layerX;
    this.offsetY = K || void 0 !== c.offsetY ? c.offsetY : c.layerY;
    this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX;
    this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY;
    this.keyCode = c.keyCode || 0;
    this.i = c.ctrlKey;
    this.a = c.altKey;
    this.l = c.shiftKey;
    this.h = c.metaKey;
    this.S = c;
    c.defaultPrevented && this.preventDefault();
  }
}
v(Nc, C);
Nc.prototype.stopPropagation = function() {
  Nc.na.stopPropagation.call(this);
  this.S.stopPropagation ? this.S.stopPropagation() : this.S.cancelBubble = !0;
};
Nc.prototype.preventDefault = function() {
  Nc.na.preventDefault.call(this);
  var c = this.S;
  if (c.preventDefault) {
    c.preventDefault();
  } else {
    if (c.returnValue = !1, Mc) {
      try {
        if (c.ctrlKey || 112 <= c.keyCode && 123 >= c.keyCode) {
          c.keyCode = -1;
        }
      } catch (d) {
      }
    }
  }
};
var Oc = "closure_lm_" + (1E6 * Math.random() | 0), Pc = {}, Qc = 0;
function S(c, d, e, f, g) {
  if (ea(d)) {
    for (var h = 0;h < d.length;h++) {
      S(c, d[h], e, f, g);
    }
    return null;
  }
  e = Rc(e);
  return c && c[Qa] ? c.F.add(String(d), e, !1, f, g) : Sc(c, d, e, !1, f, g);
}
function Sc(c, d, e, f, g, h) {
  if (!d) {
    throw Error("Invalid event type");
  }
  var l = !!g, p = Tc(c);
  p || (c[Oc] = p = new Sb(c));
  e = p.add(d, e, f, g, h);
  if (e.a) {
    return e;
  }
  f = Uc();
  e.a = f;
  f.src = c;
  f.listener = e;
  if (c.addEventListener) {
    c.addEventListener(d.toString(), f, l);
  } else {
    if (c.attachEvent) {
      c.attachEvent(Vc(d.toString()), f);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  Qc++;
  return e;
}
function Uc() {
  var c = Wc, d = Lc ? function(e) {
    return c.call(d.src, d.listener, e);
  } : function(e) {
    e = c.call(d.src, d.listener, e);
    if (!e) {
      return e;
    }
  };
  return d;
}
function T(c, d, e, f, g) {
  if (ea(d)) {
    for (var h = 0;h < d.length;h++) {
      T(c, d[h], e, f, g);
    }
  } else {
    e = Rc(e), c && c[Qa] ? c.F.add(String(d), e, !0, f, g) : Sc(c, d, e, !0, f, g);
  }
}
function Xc(c, d, e, f, g) {
  if (ea(d)) {
    for (var h = 0;h < d.length;h++) {
      Xc(c, d[h], e, f, g);
    }
  } else {
    e = Rc(e), c && c[Qa] ? c.F.remove(String(d), e, f, g) : c && (c = Tc(c)) && (d = c.Fa(d, e, !!f, g)) && Yc(d);
  }
}
function Yc(c) {
  if (!ga(c) && c && !c.ca) {
    var d = c.src;
    if (d && d[Qa]) {
      Ub(d.F, c);
    } else {
      var e = c.type, f = c.a;
      d.removeEventListener ? d.removeEventListener(e, f, c.ga) : d.detachEvent && d.detachEvent(Vc(e), f);
      Qc--;
      (e = Tc(d)) ? (Ub(e, c), 0 == e.b && (e.src = null, d[Oc] = null)) : Ta(c);
    }
  }
}
function Vc(c) {
  return c in Pc ? Pc[c] : Pc[c] = "on" + c;
}
function Zc(c, d, e, f) {
  var g = !0;
  if (c = Tc(c)) {
    if (d = c.a[d.toString()]) {
      for (d = d.concat(), c = 0;c < d.length;c++) {
        var h = d[c];
        h && h.ga == e && !h.ca && (h = $c(h, f), g = g && !1 !== h);
      }
    }
  }
  return g;
}
function $c(c, d) {
  var e = c.listener, f = c.aa || c.src;
  c.ra && Yc(c);
  return e.call(f, d);
}
function Wc(c, d) {
  if (c.ca) {
    return !0;
  }
  if (!Lc) {
    var e;
    if (!(e = d)) {
      a: {
        e = ["window", "event"];
        for (var f = m, g;g = e.shift();) {
          if (null != f[g]) {
            f = f[g];
          } else {
            e = null;
            break a;
          }
        }
        e = f;
      }
    }
    g = e;
    e = new Nc(g, this);
    f = !0;
    if (!(0 > g.keyCode || void 0 != g.returnValue)) {
      a: {
        var h = !1;
        if (0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a;
          } catch (l) {
            h = !0;
          }
        }
        if (h || void 0 == g.returnValue) {
          g.returnValue = !0;
        }
      }
      g = [];
      for (h = e.currentTarget;h;h = h.parentNode) {
        g.push(h);
      }
      for (var h = c.type, p = g.length - 1;!e.b && 0 <= p;p--) {
        e.currentTarget = g[p];
        var u = Zc(g[p], h, !0, e), f = f && u;
      }
      for (p = 0;!e.b && p < g.length;p++) {
        e.currentTarget = g[p], u = Zc(g[p], h, !1, e), f = f && u;
      }
    }
    return f;
  }
  return $c(c, new Nc(d, this));
}
function Tc(c) {
  c = c[Oc];
  return c instanceof Sb ? c : null;
}
var ad = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Rc(c) {
  if (ha(c)) {
    return c;
  }
  c[ad] || (c[ad] = function(d) {
    return c.handleEvent(d);
  });
  return c[ad];
}
;function bd(c) {
  function d(c) {
    c.preventDefault();
    if (Ob(this.J, "three-d")) {
      c = this.J, Qb(c, "three-d"), Pb(c, "two-d"), cd(this, "2D"), e();
    } else {
      if (c = this.J, Qb(c, "two-d"), Pb(c, "three-d"), cd(this, "3D"), A.u()) {
        c = A.N();
        var d = c.getCesiumScene(), f = d.camera, p = olcs.sa.Ob(d), d = Cesium.Math.toRadians(50), p = Cesium.Matrix4.fromTranslation(p);
        c.setEnabled(!0);
        olcs.sa.Qb(f, -d, f.right, p, {duration:500});
      }
    }
  }
  function e() {
    if (A.u()) {
      var c = A.N(), e = c.getCesiumScene(), d = e.camera, f = olcs.sa.Ob(e), u = Cesium.Matrix4.fromTranslation(f), e = olcs.sa.ac(e, f);
      c.a() && olcs.sa.Qb(d, -e, d.right, u, {a:function() {
        c.setEnabled(!1);
        var e = c.b().getView(), d = e.getResolution(), f = e.getRotation();
        e.setResolution(e.constrainResolution(d));
        e.setRotation(e.constrainRotation(f));
      }});
    }
  }
  c = c || {};
  this.J = document.createElement("a");
  this.J.href = "#flip-view-mode";
  this.J.className = A.u() && A.N().a() ? "ol-has-tooltip three-d" : "ol-has-tooltip two-d";
  cd(this, A.u() && A.N().a() ? "2D" : "3D");
  S(this.J, "click", d, void 0, this);
  S(this.J, "touchstart", d, void 0, this);
  var f = document.createElement("div");
  f.className = "flip-view-mode ol-unselectable";
  f.appendChild(this.J);
  ol.control.Control.call(this, {element:f, target:c.target});
}
ol.inherits(bd, ol.control.Control);
function cd(c, d) {
  c.J.innerHTML = d;
  var e = Q("span", {role:"tooltip", innerHTML:A.c("flipviewmode-title")});
  c.J.appendChild(e);
}
function dd(c) {
  var d = c.J;
  Qb(d, "two-d");
  Pb(d, "three-d");
  cd(c, "2D");
}
;function ed(c) {
  function d(c) {
    c.preventDefault();
    g.getMap().getView().setRotation(0);
  }
  c = c || {};
  var e = document.createElement("a");
  e.href = "#rotate-north";
  e.innerHTML = "N";
  e.className = "ol-has-tooltip";
  var f = Q("span", {role:"tooltip", innerHTML:A.c("rotatenorth-title")});
  e.appendChild(f);
  var g = this;
  S(e, "click", d, void 0, this);
  S(e, "touchstart", d, void 0, this);
  f = document.createElement("div");
  f.className = "rotate-north ol-unselectable";
  f.appendChild(e);
  ol.control.Control.call(this, {element:f, target:c.target});
}
ol.inherits(ed, ol.control.Control);
function U() {
  Na.call(this);
  this.F = new Sb(this);
  this.pb = this;
  this.Ka = null;
}
v(U, Na);
U.prototype[Qa] = !0;
k = U.prototype;
k.addEventListener = function(c, d, e, f) {
  S(this, c, d, e, f);
};
k.removeEventListener = function(c, d, e, f) {
  Xc(this, c, d, e, f);
};
k.dispatchEvent = function(c) {
  var d, e = this.Ka;
  if (e) {
    for (d = [];e;e = e.Ka) {
      d.push(e);
    }
  }
  var e = this.pb, f = c.type || c;
  if (q(c)) {
    c = new C(c, e);
  } else {
    if (c instanceof C) {
      c.target = c.target || e;
    } else {
      var g = c;
      c = new C(f, e);
      jb(c, g);
    }
  }
  var g = !0, h;
  if (d) {
    for (var l = d.length - 1;!c.b && 0 <= l;l--) {
      h = c.currentTarget = d[l], g = fd(h, f, !0, c) && g;
    }
  }
  c.b || (h = c.currentTarget = e, g = fd(h, f, !0, c) && g, c.b || (g = fd(h, f, !1, c) && g));
  if (d) {
    for (l = 0;!c.b && l < d.length;l++) {
      h = c.currentTarget = d[l], g = fd(h, f, !1, c) && g;
    }
  }
  return g;
};
k.X = function() {
  U.na.X.call(this);
  if (this.F) {
    var c = this.F, d = 0, e;
    for (e in c.a) {
      for (var f = c.a[e], g = 0;g < f.length;g++) {
        ++d, Ta(f[g]);
      }
      delete c.a[e];
      c.b--;
    }
  }
  this.Ka = null;
};
function fd(c, d, e, f) {
  d = c.F.a[String(d)];
  if (!d) {
    return !0;
  }
  d = d.concat();
  for (var g = !0, h = 0;h < d.length;++h) {
    var l = d[h];
    if (l && !l.ca && l.ga == e) {
      var p = l.listener, u = l.aa || l.src;
      l.ra && Ub(c.F, l);
      g = !1 !== p.call(u, f) && g;
    }
  }
  return g && 0 != f.lb;
}
k.Fa = function(c, d, e, f) {
  return this.F.Fa(String(c), d, e, f);
};
k.hasListener = function(c, d) {
  return this.F.hasListener(n(c) ? String(c) : void 0, d);
};
var gd = {AE:"maptype-ae", MTB:"maptype-mtb", TK:"maptype-tk", GL:"maptype-gl", ToGeoref:"georeference-false"};
function hd(c, d) {
  this.m = q(c) ? M(c) : c;
  d || delete gd.ToGeoref;
  var e = "", f;
  for (f in gd) {
    var g = A.c("facet-" + f.toLowerCase()), e = e + ('<label class="checkbox-inline" title="' + g + '"><input class="facet-search-el" type="checkbox" id="' + f + '" value="' + gd[f] + '" title="' + g + '" >' + g + "</label>")
  }
  e = Q("div", {"class":"search-facet", innerHTML:e});
  this.m.appendChild(e);
  S(e, "click", function(c) {
    c = N("facet-search-el", c.currentTarget);
    for (var e = [], d = !0, f = 0;f < c.length;f++) {
      if (c[f].checked) {
        var g = c[f].value.split("-")[0], w = c[f].value.split("-")[1];
        "georeference" !== g && e.push({key:g, value:w});
        "georeference" === g && (d = !1);
      }
    }
    this.dispatchEvent(new C("facet-change", {facets:e, georeference:d}));
  }, void 0, this);
  U.call(this);
}
v(hd, U);
function id(c, d) {
  var e = q(c) ? M(c) : c;
  this.m = Q("div", {"class":"timeslider-container"});
  e.appendChild(this.m);
  void 0 !== d && jd(this, d);
  U.call(this);
}
v(id, U);
function kd(c) {
  c.innerHTML = "";
  var d = Q("label", {innerHTML:A.c("timeslider-adjust-timeperiod")});
  c.appendChild(d);
  d = Q("div", {"class":"slider-container"});
  c.appendChild(d);
  c = Q("div", {"class":"slider"});
  d.appendChild(c);
  return c;
}
function jd(c, d) {
  function e(c, e) {
    e.style.left = (c - d[0]) / (d[1] - d[0]) * 100 + "%";
    e.innerHTML = c;
  }
  var f = kd(c.m), g, h;
  $(f).slider({range:!0, min:d[0], max:d[1], values:[d[0], d[1]], animate:"slow", orientation:"horizontal", step:1, slide:function(c, d) {
    var f = d.values;
    e(f[0], g);
    e(f[1], h);
  }, change:r(function(c, d) {
    var f = d.values;
    e(f[0], g);
    e(f[1], h);
    this.dispatchEvent(new C("timechange", {time:f}));
  }, c)});
  g = Q("div", {"class":"tooltip min-value", innerHTML:d[0]});
  f.appendChild(g);
  h = Q("div", {"class":"tooltip max-value", innerHTML:d[1]});
  f.appendChild(h);
}
;function ld() {
  U.call(this);
}
v(ld, U);
function V() {
  this.status_ = !1;
  U.call(this);
}
v(V, U);
V.prototype.C = function() {
};
V.prototype.D = function() {
};
function md(c, d, e, f) {
  this.a = [e, f];
  this.s = [new ol.interaction.Draw({source:c, type:"Point", style:function() {
    return [A.j.qa];
  }}), new ol.interaction.Draw({source:d, type:"Point", style:function() {
    return [A.j.qa];
  }})];
  V.call(this);
}
v(md, V);
md.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
md.prototype.I = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].addInteraction(this.s[c]);
  }
};
md.prototype.D = function() {
  this.R();
  this.status_ = !1;
};
md.prototype.R = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].removeInteraction(this.s[c]);
  }
};
function nd(c, d, e, f) {
  function g(c, e, d) {
    if ("point" === c.getGeometry().getType().toLowerCase()) {
      var f = e.getSource().getFeatureById(c.getId());
      c = d.getSource().getFeatureById(c.getId());
      null != f && e.getSource().removeFeature(f);
      null != c && d.getSource().removeFeature(c);
    }
  }
  this.a = [e, f];
  this.s = [new ol.interaction.Select({condition:ol.events.condition.click, layer:c, style:function() {
    return [A.j.qa];
  }, condition:r(function(f) {
    "click" === f.type && e.forEachFeatureAtPixel(f.pixel, function(e) {
      g(e, c, d);
    });
    return !1;
  }, this)}), new ol.interaction.Select({condition:ol.events.condition.click, layer:d, style:function() {
    return [A.j.qa];
  }, condition:r(function(e) {
    "click" === e.type && f.forEachFeatureAtPixel(e.pixel, function(e) {
      g(e, c, d);
    });
    return !1;
  }, this)})];
  V.call(this);
}
v(nd, V);
nd.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
nd.prototype.I = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].addInteraction(this.s[c]);
  }
};
nd.prototype.D = function() {
  this.R();
  this.status_ = !1;
};
nd.prototype.R = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].removeInteraction(this.s[c]);
  }
};
function od(c, d, e, f) {
  this.a = [e, f];
  c.getStyle();
  A.j.ka();
  this.s = [new ol.interaction.Modify({features:c.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [A.j.ka()];
  }}), new ol.interaction.Modify({features:d.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [A.j.ka()];
  }})];
  this.s[0].getMap = function() {
    return e;
  };
  this.s[1].getMap = function() {
    return f;
  };
  pd(this, this.s, [c, d]);
  V.call(this);
}
v(od, V);
od.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
od.prototype.I = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].addInteraction(this.s[c]);
  }
};
od.prototype.D = function() {
  this.R();
  this.status_ = !1;
};
od.prototype.R = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].removeInteraction(this.s[c]);
  }
};
function pd(c, d, e) {
  function f(c, e) {
    var d = h(e.target.getMap(), e.mapBrowserPointerEvent.pixel, c);
    da(d.getId()) && this.dispatchEvent(new C("deselected", {feature:d, srcStyle:A.j.ka(d.getId()), targetStyle:A.j.Ea(d.getId())}));
  }
  function g(c, e) {
    var d = h(e.target.getMap(), e.mapBrowserPointerEvent.pixel, c);
    da(d.getId()) && this.dispatchEvent(new C("selected", {feature:d, srcStyle:A.j.Ea(d.getId()), targetStyle:A.j.ka(d.getId())}));
  }
  function h(c, e, d) {
    var f;
    c.forEachFeatureAtPixel(e, function(c) {
      f = c;
    });
    return d.getFeatureById(f.getId());
  }
  var l = e[0].getSource();
  e = e[1].getSource();
  d[0].on("modifystart", r(g, c, e));
  d[1].on("modifystart", r(g, c, l));
  d[0].on("modifyend", r(f, c, e));
  d[1].on("modifyend", r(f, c, l));
}
ol.Collection.prototype.addFeature = function(c) {
  var d = !1;
  this.forEach(function(e) {
    e === c && (d = !0);
  });
  d || this.push(c);
};
ol.Collection.prototype.removeFeature = function(c) {
  var d = !1;
  this.forEach(function(e) {
    e === c && (d = !0);
  });
  d && this.remove(c);
};
function qd(c, d, e, f, g) {
  if (!(J || K && L("525"))) {
    return !0;
  }
  if (jc && g) {
    return rd(c);
  }
  if (g && !f) {
    return !1;
  }
  ga(d) && (d = sd(d));
  if (!e && (17 == d || 18 == d || jc && 91 == d)) {
    return !1;
  }
  if (K && f && e) {
    switch(c) {
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
  if (J && f && d == c) {
    return !1;
  }
  switch(c) {
    case 13:
      return !0;
    case 27:
      return !K;
  }
  return rd(c);
}
function rd(c) {
  if (48 <= c && 57 >= c || 96 <= c && 106 >= c || 65 <= c && 90 >= c || K && 0 == c) {
    return !0;
  }
  switch(c) {
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
function sd(c) {
  if (ic) {
    c = td(c);
  } else {
    if (jc && K) {
      a: {
        switch(c) {
          case 93:
            c = 91;
            break a;
        }
      }
    }
  }
  return c;
}
function td(c) {
  switch(c) {
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
      return c;
  }
}
;function ud(c, d) {
  U.call(this);
  c && (this.xa && vd(this), this.ia = c, this.wa = S(this.ia, "keypress", this, d), this.Ga = S(this.ia, "keydown", this.a, d, this), this.xa = S(this.ia, "keyup", this.b, d, this));
}
v(ud, U);
k = ud.prototype;
k.ia = null;
k.wa = null;
k.Ga = null;
k.xa = null;
k.G = -1;
k.U = -1;
k.Ba = !1;
var wd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, xd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, yd = J || 
K && L("525"), zd = jc && ic;
ud.prototype.a = function(c) {
  K && (17 == this.G && !c.i || 18 == this.G && !c.a || jc && 91 == this.G && !c.h) && (this.U = this.G = -1);
  -1 == this.G && (c.i && 17 != c.keyCode ? this.G = 17 : c.a && 18 != c.keyCode ? this.G = 18 : c.h && 91 != c.keyCode && (this.G = 91));
  yd && !qd(c.keyCode, this.G, c.l, c.i, c.a) ? this.handleEvent(c) : (this.U = sd(c.keyCode), zd && (this.Ba = c.a));
};
ud.prototype.b = function(c) {
  this.U = this.G = -1;
  this.Ba = c.a;
};
ud.prototype.handleEvent = function(c) {
  var d = c.S, e, f, g = d.altKey;
  J && "keypress" == c.type ? e = this.U : K && "keypress" == c.type ? e = this.U : hc && !K ? e = this.U : (e = d.keyCode || this.U, f = d.charCode || 0, zd && (g = this.Ba), jc && 63 == f && 224 == e && (e = 191));
  f = e = sd(e);
  var h = d.keyIdentifier;
  e ? 63232 <= e && e in wd ? f = wd[e] : 25 == e && c.l && (f = 9) : h && h in xd && (f = xd[h]);
  this.G = f;
  c = new Ad(f, 0, 0, d);
  c.a = g;
  this.dispatchEvent(c);
};
function vd(c) {
  c.wa && (Yc(c.wa), Yc(c.Ga), Yc(c.xa), c.wa = null, c.Ga = null, c.xa = null);
  c.ia = null;
  c.G = -1;
  c.U = -1;
}
ud.prototype.X = function() {
  ud.na.X.call(this);
  vd(this);
};
function Ad(c, d, e, f) {
  Nc.call(this, f);
  this.type = "key";
  this.keyCode = c;
}
v(Ad, Nc);
function Bd(c, d, e) {
  if (q(d)) {
    (d = Cd(c, d)) && (c.style[d] = e);
  } else {
    for (var f in d) {
      e = c;
      var g = d[f], h = Cd(e, f);
      h && (e.style[h] = g);
    }
  }
}
var Dd = {};
function Cd(c, d) {
  var e = Dd[d];
  if (!e) {
    var f = xb(d), e = f;
    void 0 === c.style[f] && (f = (K ? "Webkit" : ic ? "Moz" : J ? "ms" : hc ? "O" : null) + yb(f), void 0 !== c.style[f] && (e = f));
    Dd[d] = e;
  }
  return e;
}
function Ed(c, d) {
  var e = c.style[xb(d)];
  return "undefined" !== typeof e ? e : c.style[Cd(c, d)] || "";
}
function Fd(c) {
  var d = Gd, e;
  a: {
    e = 9 == c.nodeType ? c : c.ownerDocument || c.document;
    if (e.defaultView && e.defaultView.getComputedStyle && (e = e.defaultView.getComputedStyle(c, null))) {
      e = e.display || e.getPropertyValue("display") || "";
      break a;
    }
    e = "";
  }
  if ("none" != (e || (c.currentStyle ? c.currentStyle.display : null) || c.style && c.style.display)) {
    return d(c);
  }
  e = c.style;
  var f = e.display, g = e.visibility, h = e.position;
  e.visibility = "hidden";
  e.position = "absolute";
  e.display = "inline";
  c = d(c);
  e.display = f;
  e.position = h;
  e.visibility = g;
  return c;
}
function Gd(c) {
  var d = c.offsetWidth, e = c.offsetHeight, f = K && !d && !e;
  if ((!n(d) || f) && c.getBoundingClientRect) {
    var g;
    a: {
      try {
        g = c.getBoundingClientRect();
      } catch (h) {
        g = {left:0, top:0, right:0, bottom:0};
        break a;
      }
      J && c.ownerDocument.body && (c = c.ownerDocument, g.left -= c.documentElement.clientLeft + c.body.clientLeft, g.top -= c.documentElement.clientTop + c.body.clientTop);
    }
    return new Wa(g.right - g.left, g.bottom - g.top);
  }
  return new Wa(d, e);
}
J && L(12);
function Hd(c, d, e) {
  c = Q("div", {"class":"modal fade " + c, id:c});
  var f = Q("div", {"class":"modal-dialog"});
  c.appendChild(f);
  var g = Q("div", {"class":"modal-content"});
  f.appendChild(g);
  this.a = Q("div", {"class":"modal-header"});
  g.appendChild(this.a);
  f = Q("button", {"class":"close", type:"button", "data-dismiss":"modal", "aria-hidden":"true", innerHTML:"&times;"});
  this.a.appendChild(f);
  f = Q("h4", {"class":"modal-title"});
  this.a.appendChild(f);
  f = Q("div", {"class":"modal-body"});
  g.appendChild(f);
  f = Q("div", {"class":"modal-footer"});
  g.appendChild(f);
  g = Q("button", {"class":"btn btn-default", type:"button", "data-dismiss":"modal", innerHTML:"Close"});
  f.appendChild(g);
  this.H = c;
  d.appendChild(this.H);
  Id(this.H, e || !1);
}
function Jd(c, d) {
  for (var e = Gc(d, function(c) {
    return "a" === c.nodeName.toLowerCase() && c.hasAttribute("href");
  }), f = P("modal-content", c.H), g = 0;g < e.length;g++) {
    var h = e[g];
    if (!h.hasAttribute("target") || "_self" === h.getAttribute("target")) {
      h.setAttribute("data-href", h.href);
      h.href = "#";
      var l = n("map-profile") ? "map-profile" : h.hasAttribute("data-classname") ? h.getAttribute("data-classname") : "";
      S(h, "click", na(function(c, e) {
        e.preventDefault();
        var d = e.currentTarget.getAttribute("data-href");
        Kd(this, {href:d, classes:c});
        f.className = "modal-content " + c;
        return !1;
      }, l), void 0, c);
    }
  }
}
function Id(c, d) {
  $(c).on("hidden.bs.modal", function() {
    P("modal-body", this).innerHTML = "";
    P("modal-title", this.H).innerHTML = "";
    P("modal-content", this).className = "modal-content";
    d && Bc(this);
  });
}
function Kd(c, d) {
  var e = P("modal-body", c.H);
  e.innerHTML = "";
  var f = Q("iframe", {frameborder:"0", src:d.href});
  f.setAttribute("webkitallowfullscreen", "");
  f.setAttribute("mozallowfullscreen", "");
  f.setAttribute("allowfullscreen", "");
  n(d.width) && Bd(f, "width", d.width);
  n(d.height) && Bd(f, "height", d.height);
  n(d.classes) && F(f, d.classes);
  e.appendChild(f);
}
Hd.prototype.close = function() {
  n(this.H) && $(this.H).modal("hide");
};
Hd.prototype.open = function(c, d, e) {
  null != c && c ? P("modal-title", this.H).innerHTML = c : this.a.style.display = "none";
  n(d) && (c = P("modal-content", this.H), F(c, d));
  n(e) && Kd(this, e);
  $(this.H).modal("show");
};
function Ld(c, d) {
  var e = P("modal-body", c.H);
  q(d) && (e.innerHTML = d);
}
;var Md = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Nd(c) {
  if (Od) {
    Od = !1;
    var d = m.location;
    if (d) {
      var e = d.href;
      if (e && (e = (e = Nd(e)[3] || null) ? decodeURI(e) : e) && e != d.hostname) {
        throw Od = !0, Error();
      }
    }
  }
  return c.match(Md);
}
var Od = K;
function Pd(c, d) {
  for (var e = c.split("&"), f = 0;f < e.length;f++) {
    var g = e[f].indexOf("="), h = null, l = null;
    0 <= g ? (h = e[f].substring(0, g), l = e[f].substring(g + 1)) : h = e[f];
    d(h, l ? decodeURIComponent(l.replace(/\+/g, " ")) : "");
  }
}
;function W(c, d) {
  this.h = this.A = this.i = "";
  this.o = null;
  this.O = this.l = "";
  this.b = !1;
  var e;
  c instanceof W ? (this.b = n(d) ? d : c.b, Qd(this, c.i), this.A = c.A, this.h = c.h, Rd(this, c.o), this.l = c.l, Sd(this, c.a.clone()), this.O = c.O) : c && (e = Nd(String(c))) ? (this.b = !!d, Qd(this, e[1] || "", !0), this.A = Td(e[2] || ""), this.h = Td(e[3] || "", !0), Rd(this, e[4]), this.l = Td(e[5] || "", !0), Sd(this, e[6] || "", !0), this.O = Td(e[7] || "")) : (this.b = !!d, this.a = new Ud(null, 0, this.b));
}
W.prototype.toString = function() {
  var c = [], d = this.i;
  d && c.push(Vd(d, Xd, !0), ":");
  if (d = this.h) {
    c.push("//");
    var e = this.A;
    e && c.push(Vd(e, Xd, !0), "@");
    c.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    d = this.o;
    null != d && c.push(":", String(d));
  }
  if (d = this.l) {
    this.h && "/" != d.charAt(0) && c.push("/"), c.push(Vd(d, "/" == d.charAt(0) ? Yd : Zd, !0));
  }
  (d = this.a.toString()) && c.push("?", d);
  (d = this.O) && c.push("#", Vd(d, $d));
  return c.join("");
};
W.prototype.clone = function() {
  return new W(this);
};
function Qd(c, d, e) {
  c.i = e ? Td(d, !0) : d;
  c.i && (c.i = c.i.replace(/:$/, ""));
}
function Rd(c, d) {
  if (d) {
    d = Number(d);
    if (isNaN(d) || 0 > d) {
      throw Error("Bad port number " + d);
    }
    c.o = d;
  } else {
    c.o = null;
  }
}
function Sd(c, d, e) {
  d instanceof Ud ? (c.a = d, ae(c.a, c.b)) : (e || (d = Vd(d, be)), c.a = new Ud(d, 0, c.b));
}
function ce(c) {
  return c.a;
}
function Td(c, d) {
  return c ? d ? decodeURI(c.replace(/%25/g, "%2525")) : decodeURIComponent(c) : "";
}
function Vd(c, d, e) {
  return q(c) ? (c = encodeURI(c).replace(d, de), e && (c = c.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c) : null;
}
function de(c) {
  c = c.charCodeAt(0);
  return "%" + (c >> 4 & 15).toString(16) + (c & 15).toString(16);
}
var Xd = /[#\/\?@]/g, Zd = /[\#\?:]/g, Yd = /[\#\?]/g, be = /[\#\?@]/g, $d = /#/g;
function Ud(c, d, e) {
  this.b = this.a = null;
  this.i = c || null;
  this.h = !!e;
}
function ee(c) {
  c.a || (c.a = new Yb, c.b = 0, c.i && Pd(c.i, function(d, e) {
    c.add(decodeURIComponent(d.replace(/\+/g, " ")), e);
  }));
}
k = Ud.prototype;
k.Ca = function() {
  ee(this);
  return this.b;
};
k.add = function(c, d) {
  ee(this);
  this.i = null;
  c = fe(this, c);
  var e = this.a.get(c);
  e || this.a.set(c, e = []);
  e.push(d);
  this.b++;
  return this;
};
k.remove = function(c) {
  ee(this);
  c = fe(this, c);
  return ac(this.a.g, c) ? (this.i = null, this.b -= this.a.get(c).length, this.a.remove(c)) : !1;
};
k.clear = function() {
  this.a = this.i = null;
  this.b = 0;
};
k.isEmpty = function() {
  ee(this);
  return 0 == this.b;
};
function ge(c, d) {
  ee(c);
  d = fe(c, d);
  return ac(c.a.g, d);
}
k.getKeys = function() {
  ee(this);
  for (var c = this.a.M(), d = this.a.getKeys(), e = [], f = 0;f < d.length;f++) {
    for (var g = c[f], h = 0;h < g.length;h++) {
      e.push(d[f]);
    }
  }
  return e;
};
k.M = function(c) {
  ee(this);
  var d = [];
  if (q(c)) {
    ge(this, c) && (d = Gb(d, this.a.get(fe(this, c))));
  } else {
    c = this.a.M();
    for (var e = 0;e < c.length;e++) {
      d = Gb(d, c[e]);
    }
  }
  return d;
};
k.set = function(c, d) {
  ee(this);
  this.i = null;
  c = fe(this, c);
  ge(this, c) && (this.b -= this.a.get(c).length);
  this.a.set(c, [d]);
  this.b++;
  return this;
};
k.get = function(c, d) {
  var e = c ? this.M(c) : [];
  return 0 < e.length ? String(e[0]) : d;
};
k.toString = function() {
  if (this.i) {
    return this.i;
  }
  if (!this.a) {
    return "";
  }
  for (var c = [], d = this.a.getKeys(), e = 0;e < d.length;e++) {
    for (var f = d[e], g = encodeURIComponent(String(f)), f = this.M(f), h = 0;h < f.length;h++) {
      var l = g;
      "" !== f[h] && (l += "=" + encodeURIComponent(String(f[h])));
      c.push(l);
    }
  }
  return this.i = c.join("&");
};
k.clone = function() {
  var c = new Ud;
  c.i = this.i;
  this.a && (c.a = this.a.clone(), c.b = this.b);
  return c;
};
function fe(c, d) {
  var e = String(d);
  c.h && (e = e.toLowerCase());
  return e;
}
function ae(c, d) {
  d && !c.h && (ee(c), c.i = null, c.a.forEach(function(c, d) {
    var g = d.toLowerCase();
    d != g && (this.remove(d), this.remove(g), 0 < c.length && (this.i = null, this.a.set(fe(this, g), Hb(c)), this.b += c.length));
  }, c));
  c.h = d;
}
k.extend = function(c) {
  for (var d = 0;d < arguments.length;d++) {
    cc(arguments[d], function(c, d) {
      this.add(d, c);
    }, this);
  }
};
A.f = {};
A.f.$b = function(c) {
  c = c.split("/");
  for (var d = "/", e = 0;e < c.length;e++) {
    "" !== c[e] && (d += c[e] + "/");
  }
  return d;
};
A.f.B = function() {
  var c = new W(window.location.href), d = A.getQueryParam("L"), d = void 0 !== d && "" !== d ? d : 0, c = c.l;
  return y ? -1 === c.indexOf(Ca) ? (-1 !== c.indexOf("/de") || -1 !== c.indexOf("/en") ? c.substring(0, 3) : "") + Ca + "?" : c.substring(0, c.indexOf(Ca) + Ca.length) + "?" : c + "?" + Ca + "&L=" + d;
};
A.f.L = function() {
  var c = A.f.B(), d = c.indexOf("?");
  return c.substring(0, d);
};
A.f.Da = function(c) {
  new W(window.location.href);
  return y ? A.f.L() + sa + "&" + c : A.f.B() + "&" + sa + "&" + c;
};
A.f.Db = function(c) {
  new W(window.location.href);
  return y ? A.f.L() + ua + "&" + c : A.f.B() + "&" + ua + "&" + c;
};
A.f.Cb = function(c) {
  new W(window.location.href);
  return y ? A.f.L() + ta + "&" + c : A.f.B() + "&" + ta + "&" + c;
};
A.f.Eb = function() {
  new W(window.location.href);
  return y ? A.f.L() + ya : A.f.B() + "&" + ya;
};
A.f.Ua = function() {
  new W(window.location.href);
  return y ? A.f.L() + za : A.f.B() + "&" + za;
};
A.f.Ab = function(c) {
  new W(window.location.href);
  return y ? A.f.L() + xa + "&" + c : A.f.B() + "&" + xa + "&" + c;
};
A.f.Bb = function() {
  new W(window.location.href);
  return y ? A.f.L() + Ba + "&undefined" : A.f.B() + "&" + Ba + "&undefined";
};
A.f.zb = function() {
  new W(window.location.href);
  return y ? A.f.L() + va + "&undefined" : A.f.B() + "&" + va + "&undefined";
};
A.f.va = function(c, d) {
  var e = void 0 !== c ? "&objectid=" + c : void 0 !== d ? "&" + d : "";
  new W(window.location.href);
  return y ? A.f.L() + Aa + "&" + e : A.f.B() + "&" + Aa + e;
};
A.f.Fb = function(c) {
  new W(window.location.href);
  return y ? A.f.L() + Da + "&objectid=" + c : A.f.B() + "&" + Da + "&objectid=" + c;
};
A.f.Va = function() {
  return A.f.B();
};
function he(c, d, e) {
  if (ha(c)) {
    e && (c = r(c, e));
  } else {
    if (c && "function" == typeof c.handleEvent) {
      c = r(c.handleEvent, c);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < d ? -1 : m.setTimeout(c, d || 0);
}
;function ie(c, d) {
  this.ta = n(d) ? d : void 0;
  this.m = n(c) ? c : void 0;
  this.v = !1;
}
function je(c) {
  for (var d in c) {
    if (c.hasOwnProperty(d)) {
      for (var e = c[d], f = 0;f < e.length;f++) {
        e[f].setOpacity(0), e[f].setVisible(!0);
      }
    }
  }
}
function ke(c, d) {
  je(d);
  ({start:function(c, d, g) {
    if (g.v) {
      for (var h in c) {
        break;
      }
      var l = n(c[h]) ? c[h] : [];
      delete c[h];
      c = r(this.start, this, c, d, g);
      he(na(g.Sb, l, c), d, g);
      n(g.ta) && (g.ta.innerHTML = n(h) ? h : "");
      n(h) || (console.log("Visualization finished ...."), g.v = !1, n(g.m) && G(g.m, "play"));
    }
  }}).start(d, 500, c);
}
function le(c, d) {
  for (var e = c.sort(function(c, d) {
    return c.getTime() > d.getTime() ? 1 : c.getTime() < d.getTime() ? -1 : 0;
  }), f = 0;f < e.length;f++) {
    d.removeLayer(e[f]), d.addLayer(e[f]);
  }
  for (var g = {}, f = 0;f < e.length;f++) {
    e[f].getTime() in g ? g[e[f].getTime()].push(e[f]) : g[e[f].getTime()] = [e[f]];
  }
  return g;
}
ie.prototype.Sb = function(c, d) {
  ({Ya:function(c, d, g, h, l) {
    if (l.v) {
      var p = c[0].getOpacity() + d;
      if (1.05 >= p) {
        for (var u = 0;u < c.length;u++) {
          c[u].setOpacity(p);
        }
        he(na(this.Ya, c, d, g, h, l), g, this);
      } else {
        n(h) && h();
      }
    }
  }, start:function(c, d, g, h, l) {
    for (var p = 0;p < c.length;p++) {
      c[p].setOpacity(0), c[p].setVisible(!0);
    }
    he(na(this.Ya, c, d, g, h, l), g, this);
  }}).start(c, .1, 500, d, this);
};
function me(c) {
  c.v = !1;
  n(c.ta) && (c.ta.innerHTML = n(void 0) ? void 0 : "");
  n(c.m) && G(c.m, "play");
}
;function X(c) {
  U.call(this);
  this.qb = new Yb;
  this.Y = c || null;
  this.v = !1;
  this.V = this.a = null;
  this.l = this.pa = "";
  this.b = this.ma = this.h = this.ba = !1;
  this.A = 0;
  this.o = null;
  this.La = ne;
  this.da = this.rb = !1;
}
v(X, U);
var ne = "", oe = /^https?$/i, pe = ["POST", "PUT"], qe = [];
function Y(c, d, e, f) {
  var g = new X;
  qe.push(g);
  d && g.F.add("complete", d, !1, void 0, void 0);
  g.F.add("ready", g.wb, !0, void 0, void 0);
  g.send(c, e, f, void 0);
}
k = X.prototype;
k.wb = function() {
  B(this);
  Fb(qe, this);
};
k.send = function(c, d, e, f) {
  if (this.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.pa + "; newUri=" + c);
  }
  d = d ? d.toUpperCase() : "GET";
  this.pa = c;
  this.l = "";
  this.ba = !1;
  this.v = !0;
  this.a = this.Y ? Xb(this.Y) : Xb(Vb);
  this.V = this.Y ? bb(this.Y) : bb(Vb);
  this.a.onreadystatechange = r(this.fb, this);
  try {
    this.ma = !0, this.a.open(d, String(c), !0), this.ma = !1;
  } catch (g) {
    re(this, g);
    return;
  }
  c = e || "";
  var h = this.qb.clone();
  f && cc(f, function(c, d) {
    h.set(d, c);
  });
  f = Cb(h.getKeys());
  e = m.FormData && c instanceof m.FormData;
  !Eb(pe, d) || f || e || h.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  h.forEach(function(c, d) {
    this.a.setRequestHeader(d, c);
  }, this);
  this.La && (this.a.responseType = this.La);
  "withCredentials" in this.a && (this.a.withCredentials = this.rb);
  try {
    se(this), 0 < this.A && ((this.da = te(this.a)) ? (this.a.timeout = this.A, this.a.ontimeout = r(this.nb, this)) : this.o = he(this.nb, this.A, this)), this.h = !0, this.a.send(c), this.h = !1;
  } catch (l) {
    re(this, l);
  }
};
function te(c) {
  return J && L(9) && ga(c.timeout) && n(c.ontimeout);
}
function Db(c) {
  return "content-type" == c.toLowerCase();
}
k.nb = function() {
  "undefined" != typeof aa && this.a && (this.l = "Timed out after " + this.A + "ms, aborting", this.dispatchEvent("timeout"), this.a && this.v && (this.v = !1, this.b = !0, this.a.abort(), this.b = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ue(this)));
};
function re(c, d) {
  c.v = !1;
  c.a && (c.b = !0, c.a.abort(), c.b = !1);
  c.l = d;
  ve(c);
  ue(c);
}
function ve(c) {
  c.ba || (c.ba = !0, c.dispatchEvent("complete"), c.dispatchEvent("error"));
}
k.X = function() {
  this.a && (this.v && (this.v = !1, this.b = !0, this.a.abort(), this.b = !1), ue(this, !0));
  X.na.X.call(this);
};
k.fb = function() {
  this.i || (this.ma || this.h || this.b ? we(this) : this.Mb());
};
k.Mb = function() {
  we(this);
};
function we(c) {
  if (c.v && "undefined" != typeof aa && (!c.V[1] || 4 != xe(c) || 2 != ye(c))) {
    if (c.h && 4 == xe(c)) {
      he(c.fb, 0, c);
    } else {
      if (c.dispatchEvent("readystatechange"), 4 == xe(c)) {
        c.v = !1;
        try {
          var d = ye(c), e;
          a: {
            switch(d) {
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
                e = !0;
                break a;
              default:
                e = !1;
            }
          }
          var f;
          if (!(f = e)) {
            var g;
            if (g = 0 === d) {
              var h = Nd(String(c.pa))[1] || null;
              if (!h && self.location) {
                var l = self.location.protocol, h = l.substr(0, l.length - 1)
              }
              g = !oe.test(h ? h.toLowerCase() : "");
            }
            f = g;
          }
          if (f) {
            c.dispatchEvent("complete"), c.dispatchEvent("success");
          } else {
            var p;
            try {
              p = 2 < xe(c) ? c.a.statusText : "";
            } catch (u) {
              p = "";
            }
            c.l = p + " [" + ye(c) + "]";
            ve(c);
          }
        } finally {
          ue(c);
        }
      }
    }
  }
}
function ue(c, d) {
  if (c.a) {
    se(c);
    var e = c.a, f = c.V[0] ? ba : null;
    c.a = null;
    c.V = null;
    d || c.dispatchEvent("ready");
    try {
      e.onreadystatechange = f;
    } catch (g) {
    }
  }
}
function se(c) {
  c.a && c.da && (c.a.ontimeout = null);
  ga(c.o) && (m.clearTimeout(c.o), c.o = null);
}
function xe(c) {
  return c.a ? c.a.readyState : 0;
}
function ye(c) {
  try {
    return 2 < xe(c) ? c.a.status : -1;
  } catch (d) {
    return -1;
  }
}
function ze(c) {
  try {
    return c.a ? c.a.responseXML : null;
  } catch (d) {
    return null;
  }
}
function Z(c) {
  if (c.a) {
    return Va(c.a.responseText);
  }
}
;A.Yb = function() {
  $(window);
};
A.vb = function(c, d) {
  var e = A.c("facetedsearch-open"), f = A.c("facetedsearch-close"), g = n("facetedsearch-open") ? "facetedsearch-open" : "active", h = n(e) ? e : "", l = n(f) ? f : "";
  S(c, "click", function(e) {
    e.preventDefault();
    H(d, g) ? (G(d, g), c.title = h) : (F(d, g), c.title = l);
  });
};
A.fa = function(c) {
  var d = Fd(M("spatialsearch-container")), e = Fd(M("layermanagement-container")), f = Fd(M("mapdiv")), e = f.width - e.width - 30, d = c.getCoordinateFromPixel([0 + d.width + 30, f.height - 25 - 30]);
  c = c.getCoordinateFromPixel([e, 35]);
  return [d[0], d[1], c[0], c[1]];
};
A.Pa = function() {
  navigator.cookieEnabled || alert("For proper working of the virtuel map forum 2.0 please activate cookies in your browser");
};
A.Sa = function(c) {
  return ce(n(c) ? new W(c) : new W(window.location.href));
};
A.Ta = function(c, d) {
  return c = H(c, d) ? c : A.Ta(Dc(c), d);
};
A.c = function(c) {
  if (!n(c)) {
    return "";
  }
  try {
    if (n(window.lang_dictionary)) {
      return window.lang_dictionary[c];
    }
  } catch (d) {
    return "";
  }
};
A.Hb = function(c) {
  return [[c[0], c[1]], [c[0], c[3]], [c[2], c[3]], [c[2], c[1]], [c[0], c[1]]];
};
A.getQueryParam = function(c, d) {
  return n(d) ? A.Sa(d).get(c) : A.Sa().get(c);
};
A.yb = function() {
  return $a.get("vk2-welcomepage");
};
A.ua = function(c, d, e, f, g) {
  var h = new Hd("vk2-overlay-modal", document.body, !0);
  f = n(f) ? f : "";
  g = n(g) ? g : !0;
  var l = 1 == g ? '<button type="button" class="btn btn-primary" id="confirm-dialog-btn-yes">' + A.c("yes") + '</button><button type="button" class="btn btn-primary"id="confirm-dialog-btn-no">' + A.c("no") + "</button>" : "";
  h.open(c, f);
  Ld(h, "<p>" + d + "</p><br>" + l);
  if (1 == g) {
    var p = n(e) ? e : function() {
    };
    S(M("confirm-dialog-btn-yes"), "click", function() {
      p();
      h.close();
    });
    S(M("confirm-dialog-btn-no"), "click", function() {
      h.close();
    });
  }
};
A.N = function() {
  if (A.u()) {
    return window.ol3d;
  }
};
A.bc = function() {
  return n($a.get("auth_tkt")) ? !0 : !1;
};
A.u = function() {
  return Ha && void 0 !== window.ol3d;
};
A.ab = function(c) {
  c = N(c, (n(void 0) ? void 0 : document.body).body);
  for (var d = 0;d < c.length;d++) {
    S(c[d], "click", function(c) {
      c.preventDefault();
      try {
        var d = new Hd("vk2-overlay-modal", document.body, !0), g = this.title, h = this.getAttribute("data-classes");
        d.open(g, h, {href:this.href, classes:h});
        c.preventDefault();
      } catch (l) {
      }
    });
  }
};
A.la = function() {
  A.u() && !0 === A.N().a() && A.N().getAutoRenderLoop().restartRenderLoop();
};
A.round = function(c, d) {
  var e = n(d) ? Math.pow(10, Math.ceil(d)) : Math.pow(10, 2);
  return Math.round(c * e) / e;
};
A.Nb = function(c) {
  c = P("ol-overlaycontainer-stopevent", M(c));
  for (var d = 0;d < c.children.length;d++) {
    var e = c.children[d];
    if (H(e.children[0], "ol-has-tooltip")) {
      for (var e = N("ol-has-tooltip", e), f = 0;f < e.length;f++) {
        e[f].setAttribute("title", e[f].children[0].innerHTML);
      }
    }
  }
};
A.dc = function(c, d, e) {
  var f = new X;
  T(f, "success", function(c) {
    c = c.target;
    n(d) && d(c);
    B(c);
  });
  T(f, "error", function(c) {
    c = c.target;
    n(e) && e(c);
  });
  f.send(c);
};
A.mb = function(c, d) {
  $a.set(c, d, void 0, "/");
};
t("vk2.utils.setCookie", A.mb);
A.ec = function() {
};
A.fc = function(c, d) {
  var e = Q("div", {"class":"georef-point-container alert alert-warning", style:"display:none;"});
  c.appendChild(e);
  e.innerHTML = "+" + d + " " + A.c("points");
  $(e).fadeIn(1E3).effect("puff", {}, 3E3, function() {
    e.innerHTML = "";
  });
};
A.Ub = function(c) {
  return [Math.round(c[0]), Math.round(-1 * c[1])];
};
A.Vb = function(c) {
  return [Math.round(c[0]), Math.round(-1 * c[1])];
};
t("vk2.app.RankingPageApp", function(c) {
  c = n(c.tableEl) && Cc(c.tableEl) ? c.tableEl : n(c.tableEl) && q(c.tableEl) ? M(c.tableEl) : void 0;
  if (void 0 === c) {
    throw "Could not find targetElement for table data!";
  }
  var d = vc(wc("tbody", void 0, c)[0]);
  d.innerHTML = "";
  Y(A.f.Ua(), function(c) {
    var f = c.target;
    if ("complete" === c.type && 200 === ye(f)) {
      for (c = Z(f).pointoverview, f = 0;f < c.length;f++) {
        var g = c[f], g = Q("tr", {innerHTML:'<th class="rank">' + f + '</th><th class="name">' + g.userid + '</th><th class="new">' + g["new"] + '</th><th class="update">' + g.update + '</th><th class="points">' + g.points + "</th>"});
        d.appendChild(g);
      }
    }
  }, "GET");
});
t("vk2.app.UserHistoryApp", function(c) {
  Ae(this, M(c.target), M(c.targetPoints));
  $("body").scroll(function() {
    $(".lazy-image").lazyload();
  });
  $(".lazy-image").lazyload();
});
function Be(c, d, e) {
  void 0 !== c.points && (e.innerHTML = c.points);
  if (void 0 !== c.georef_profile) {
    e = 0;
    for (var f = c.georef_profile.length;e < f;e++) {
      R(d, Ce(c.georef_profile[e]));
    }
  }
  setTimeout(function() {
    $("body").scroll();
  }, 100);
}
function Ae(c, d, e) {
  var f = new X;
  T(f, "success", function(c) {
    c = c.target;
    var f = Z(c);
    Be(f, d, e);
    B(c);
  }, !1, c);
  T(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, c);
  c = A.f.Eb();
  f.send(c, "GET");
}
function Ce(c) {
  var d = void 0 !== c.transformed && !0 === c.transformed ? Ga + "?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities&map=" + c.mapid : "#", e = void 0 !== c.thumbnail ? c.thumbnail : "#", f = A.f.B() + "&oid=" + c.mapid, f = void 0 !== c.transformed && !0 === c.transformed ? '<a href="' + f + '" target="_blank" class="btn btn-default">' + A.c("evaluation-showmap") + "</a>" : "", g = void 0 !== c.transformed && !0 === c.transformed ? '<a href="' + A.f.va(void 0, "georeferenceid=" + c.georefid) + 
  '" target="_blank" class="btn btn-default">' + A.c("evaluation-gotoprocess") + "</a>" : "", h = "" !== c.isvalide ? c.isvalide : "waiting", h = '<span class="label ' + ("waiting" === h ? "label-warning" : "isvalide" === h ? "label-success" : "label-danger") + '">' + h + "</span>";
  return Q("article", {id:c.georefid, innerHTML:'<div class="media"><a class="pull-right" href="' + d + '"><img alt="" class="lazy-image" alt="" data-original="' + e + '"></a><div class="media-body"><h3>' + c.title + "</h3><p><strong>" + A.c("georef-history-mapId") + ":</strong> " + c.mapid + "</p><p><strong>Validation:</strong> " + h + '</p><p class="links">' + f + " " + g + '</p><p class="meta">Created: ' + c.georeftime + "</p></div></div>"});
}
;t("vk2.app.WelcomePageApp", function(c) {
  var d = void 0 !== c.georefenceElClass ? N(c.georefenceElClass) : void 0, e = void 0 !== c.overallGeorefenceElClass ? N(c.overallGeorefenceElClass) : void 0, f = void 0 !== c.relGeoreferenceElClass ? N(c.relGeoreferenceElClass) : void 0, g = void 0 !== c.georeferenceUserRankingElId ? M(c.georeferenceUserRankingElId) : void 0;
  $("#" + c.deactivateWelcomePageId).change(function() {
    var c = $(this).prop("checked") ? "off" : "on";
    A.mb("vk2-welcomepage", c);
  });
  void 0 !== d && void 0 !== e && void 0 !== f && void 0 !== g && De(this, d, e, f, g);
});
function De(c, d, e, f, g) {
  var h = new X;
  T(h, "success", function(c) {
    c = c.target;
    var h = Z(c), u = h.georeference_map_count, z = u + h.missing_georeference_map_count, w = parseInt(u / z * 100);
    Ee(d, u);
    Ee(e, z);
    for (u = 0;u < f.length;u++) {
      var z = Ed(f[u], "width"), D = Ed(f[u], "margin-left");
      void 0 !== z && "" !== z && Bd(f[u], "width", w + "%");
      void 0 !== D && "" !== D && (-1 < D.indexOf("-") ? Bd(f[u], "margin-left", "-" + w + "%") : Bd(f[u], "margin-left", w + "%"));
    }
    $("head").append("<style>.vk2WelcomePageBody .vk2GeoreferenceProgressText .content:after{ left:" + w + "%; }</style>");
    w = Math.min(h.pointoverview.length, 3);
    for (u = 0;u < w;u++) {
      z = h.pointoverview[u], z = Q("li", {innerHTML:"<span><b>" + (z.hasOwnProperty("username") ? z.username : z.userid) + ":</b> " + z.points + " " + A.c("welcome-points") + "</span>"}), g.appendChild(z);
    }
    B(c);
  }, !1, c);
  T(h, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, c);
  c = A.f.Ua();
  h.send(c, "GET");
}
function Ee(c, d) {
  for (var e = 0;e < c.length;e++) {
    c[e].innerHTML = d;
  }
}
;function Fe(c, d) {
  function e() {
    var c = !1;
    H(g, "deactivate") ? (G(g, "deactivate"), g.title = A.c("activatemap-all")) : (F(g, "deactivate"), g.title = A.c("deactivatemap-all"), c = !0);
    for (var e = Ge(d), f = 0;f < e.length;f++) {
      e[f].setVisible(c);
    }
  }
  var f = Q("div", {"class":"deactivate-map-col-control"});
  c.appendChild(f);
  var g = Q("a", {href:"#", innerHTML:"D", "class":"deactivate", title:A.c("deactivatemap-all")});
  f.appendChild(g);
  S(g, "click", e);
  S(g, "touchstart", e);
}
;function He(c, d) {
  var e = Q("div", {"class":"dyn-vis-control", title:A.c("dynamicmapvis-open")}), f = Q("div", {"class":"content", style:"display:none;"});
  e.appendChild(f);
  c.appendChild(e);
  var g = Q("div", {"class":"feedback"});
  f.appendChild(g);
  g = new ie(e, g);
  Ie(this, f, g, d);
  Je(this, e, f, g);
}
function Je(c, d, e, f) {
  var g = Q("a", {innerHTML:"o", "class":"open-dyn-vis"});
  d.insertBefore(g, d.childNodes[0] || null);
  S(g, "click", function(c) {
    c.preventDefault();
    $(e).slideToggle();
    H(c.currentTarget, "open") ? (me(f), G(c.currentTarget, "open"), c.currentTarget.parentElement.title = A.c("dynamicmapvis-open")) : (F(c.currentTarget, "open"), c.currentTarget.parentElement.title = A.c("dynamicmapvis-close"));
  }, void 0, c);
}
function Ie(c, d, e, f) {
  var g = Q("div", {"class":"start-container"});
  d.appendChild(g);
  var h = Q("a", {href:"#dynamic-start", title:A.c("dynamicmapvis-start"), innerHTML:"Start"});
  g.appendChild(h);
  S(h, "click", function(c) {
    c.preventDefault();
    c = Ge(f);
    e.v || (e.v = !0, c = le(c, f), ke(e, c), n(e.m) && !H(e.m, "play") && F(e.m, "play"));
  }, void 0, c);
  g = Q("span", {role:"tooltip", innerHTML:A.c("dynamicmapvis-start")});
  h.appendChild(g);
  h = Q("div", {"class":"stop-container"});
  d.appendChild(h);
  d = Q("a", {href:"#dynamic-stop", title:A.c("dynamicmapvis-stop"), innerHTML:"Stop"});
  h.appendChild(d);
  S(d, "click", function(c) {
    c.preventDefault();
    me(e);
  }, void 0, c);
  c = Q("span", {role:"tooltip", innerHTML:A.c("dynamicmapvis-stop")});
  d.appendChild(c);
}
;var Ke = {brightness:1, contrast:1, hue:0, saturation:0};
function Le(c) {
  function d(c) {
    c.preventDefault();
    H(c.target, "active") ? (G(c.target, "active"), $(l).fadeOut().removeClass("open")) : (F(c.target, "active"), $(l).fadeIn().addClass("open"));
  }
  function e(c) {
    c = c.glContext;
    var d = $("canvas.ol-unselectable")[0];
    if (void 0 !== c && null !== c) {
      var e = c.getGL();
      if (u) {
        glif.reset();
        for (var f in p) {
          glif.addFilter(f, p[f]);
        }
        u = !1;
      }
      glif.apply(e, d);
      c.useProgram(void 0);
    }
  }
  c = c || {};
  var f = Q("a", {"class":"ol-has-tooltip", href:"#image-manipulation", innerHTML:"I"}), g = Q("span", {role:"tooltip", innerHTML:A.c("imagemanipulation-open")}), h = Q("div", {"class":"image-manipulation ol-unselectable"}), l = Q("div", {"class":"slider-container", style:"display:none;"});
  f.appendChild(g);
  h.appendChild(f);
  h.appendChild(l);
  var p = hb(Ke), u = !1, z = !1, w = r(function(c, d, f, g, h) {
    h = Q("div", {"class":"slider " + c, title:n("opt_title") ? h : "", "data-type":f});
    var l = n(g) ? g[1] : 0, D = n(g) ? g[2] : 100, w = n(g) ? g[3] : 1, O = n(g) ? g[0] : 100, Wd = r(function(c, g) {
      var h = g.value, w = this.getMap().getLayers().getArray()[0];
      z || (w.on("postcompose", e), z = !0);
      "vertical" == d ? (Ua.style.top = 100 - (h - l) / (D - l) * 100 + "%", Ua.innerHTML = h + "%") : (Ua.style.left = (h - l) / (D - l) * 100 + "%", Ua.innerHTML = h, p[f] = h, u = !0, w.changed());
    }, this);
    $(h).slider({min:l, max:D, value:O, animate:"slow", orientation:d, step:w, slide:Wd, change:Wd});
    var Ua = Q("div", {"class":"tooltip value " + c, innerHTML:n(g) ? g[0] : ""});
    h.appendChild(Ua);
    return h;
  }, this), g = w("slider-contrast", "horizontal", "contrast", [1, 0, 2, .01], A.c("imagemanipulation-contrast")), D = w("slider-saturation", "horizontal", "saturation", [0, -1, 1, .01], A.c("imagemanipulation-saturation")), O = w("slider-brightness", "horizontal", "brightness", [1, 0, 2, .1], A.c("imagemanipulation-brightness")), w = w("slider-hue", "horizontal", "hue", [0, -180, 180, 5], A.c("imagemanipulation-hue"));
  l.appendChild(g);
  l.appendChild(D);
  l.appendChild(O);
  l.appendChild(w);
  g = Q("button", {"class":"reset-btn", title:A.c("imagemanipulation-reset"), innerHTML:"Reset"});
  l.appendChild(g);
  S(g, "click", function() {
    this.getMap().getLayers().getArray()[0].un("postcompose", e);
    z = !1;
    for (var c = N("slider", l), d = 0;d < c.length;d++) {
      var f = c[d], g = f.getAttribute("data-type"), g = Ke[g];
      $(f).slider("value", g);
    }
  }, void 0, this);
  S(f, "click", d);
  S(f, "touchstart", d);
  ol.control.Control.call(this, {element:h, target:c.target});
}
ol.inherits(Le, ol.control.Control);
function Me(c) {
  c = c || {};
  var d = n(c.spyLayer) ? c.spyLayer : new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM({attribution:void 0})}), e = n(c.radius) ? parseInt(c.radius, 0) : 75, f = null, g = Q("a", {"class":"ol-has-tooltip", href:"#layerspy", innerHTML:"L"}), h = Q("div", {"class":"ol-layerspy ol-unselectable"}), l = Q("span", {role:"tooltip", innerHTML:A.c("layerspy-title")});
  h.appendChild(g);
  g.appendChild(l);
  var p = {ib:function(c) {
    c.context.restore();
  }, jb:function(c) {
    var d = c.context;
    c = c.frameState.pixelRatio;
    d.save();
    d.beginPath();
    f && (d.arc(f[0] * c, f[1] * c, e * c, 0, 2 * Math.PI), d.lineWidth = 5 * c, d.strokeStyle = "rgba(0,0,0,0.5)", d.stroke());
    d.clip();
  }, cb:function(c) {
    f = this.getMap().getEventPixel(c.S);
    this.getMap().render();
  }, eb:function() {
    f = null;
    this.getMap().render();
  }, Za:function(c) {
    89 === c.keyCode ? (e = Math.min(e + 5, 150), this.getMap().render()) : 88 === c.keyCode && (e = Math.max(e - 5, 25), this.getMap().render());
  }, Oa:function(c) {
    c.target.getArray()[c.target.getLength() - 1] !== d && (this.getMap().removeLayer(d), this.getMap().addLayer(d));
  }}, u = null, z = r(function(c, d, e) {
    this.getMap().addLayer(d);
    d.on("precompose", e.jb, this);
    d.on("postcompose", e.ib, this);
    S(this.getMap().getViewport(), "mousemove", e.cb, void 0, this);
    S(this.getMap().getViewport(), "mouseout", e.eb, void 0, this);
    F(c, "active");
    u = u || new ud(document);
    S(u, "key", e.Za, void 0, this);
    this.getMap().getLayers().on("add", e.Oa, this);
  }, this), w = r(function(c, d, e) {
    d.un("precompose", e.jb, this);
    d.un("postcompose", e.ib, this);
    Xc(this.getMap().getViewport(), "mousemove", e.cb, void 0, this);
    Xc(this.getMap().getViewport(), "mouseout", e.eb, void 0, this);
    this.getMap().removeLayer(d);
    G(c, "active");
    Xc(u, "key", e.Za, void 0, this);
    this.getMap().getLayers().un("add", e.Oa, this);
  }, this);
  S(g, "click", r(function(c) {
    c.preventDefault();
    H(g, "active") ? w(g, d, p) : z(g, d, p);
  }, this));
  ol.control.Control.call(this, {element:h, target:c.target});
}
ol.inherits(Me, ol.control.Control);
function Ne(c) {
  function d(c) {
    var d = this.getMap();
    c = ol.proj.transform(d.getEventCoordinate(c), x.projection, "EPSG:4326");
    g.innerHTML = "Lon: " + A.round(c[0], 3) + ", Lat: " + A.round(c[1], 3);
  }
  c = c || {};
  var e = document.createElement("a");
  e.href = "#mouse-position";
  e.innerHTML = "M";
  e.className = "ol-has-tooltip";
  var f = Q("span", {role:"tooltip", innerHTML:A.c("mouseposition-title")});
  e.appendChild(f);
  var g = void 0, f = r(function(c) {
    c.preventDefault();
    var e = !Ob(c.target, "active"), f = this.getMap();
    ol.proj.transform(f.getEventCoordinate(c), x.projection, "EPSG:4326");
    Rb(c.target);
    if (void 0 === g) {
      var u = f.getViewport();
      g = Q("div", {"class":"mouse-position-box", innerHTML:""});
      u.appendChild(g);
    } else {
      g.innerHTML = "";
    }
    e ? S(f.getViewport(), "mousemove", d, void 0, this) : Xc(f.getViewport(), "mousemove", d, void 0, this);
    d.call(this, [c]);
    Rb(g);
  }, this);
  S(e, "click", f);
  S(e, "touchstart", f);
  f = document.createElement("div");
  f.className = "mouse-position ol-unselectable";
  f.appendChild(e);
  ol.control.Control.call(this, {element:f, target:c.target});
}
ol.inherits(Ne, ol.control.Control);
function Oe(c, d, e) {
  $(c).hover(function() {
    H(this, "hover") || (e.getSource().clear(), e.getSource().addFeature(d), F(this, "hover"), Ha && void 0 !== window.ol3d && window.ol3d.getAutoRenderLoop().restartRenderLoop());
  }, function() {
    H(this, "hover") && (e.getSource().clear(), G(this, "hover"));
  });
}
;function Pe(c) {
  this.id_ = n(c.id) ? c.id : void 0;
  this.time_ = c.time;
  this.title_ = n(c.title) ? c.title : void 0;
  this.thumb_ = n(c.thumbnail) ? c.thumbnail : Ea;
  this.allowUseInLayerManagement = !0;
  for (var d = [], e = 0;e < Fa.length;e++) {
    d.push(c.tms.replace("{s}", Fa[e]) + "/{z}/{x}/{-y}.png");
  }
  e = Qe(c.clip, this.id_, this.time_, this.title_);
  d = new ol.layer.Tile({extent:c.clip.getExtent(), source:new ol.source.XYZ({maxZoom:15, urls:d, crossOrigin:"*"})});
  e = new ol.layer.Vector({source:new ol.source.Vector({features:[e]}), style:function() {
    return [A.j.ub];
  }});
  c.layers = [d, e];
  ol.layer.Group.call(this, c);
}
ol.inherits(Pe, ol.layer.Group);
function Qe(c, d, e, f) {
  c = new ol.Feature(c);
  c.setProperties({objectid:d, time:e, title:f});
  c.setId(d);
  return c;
}
Pe.prototype.getTime = function() {
  return this.time_;
};
Pe.prototype.Xa = function() {
  return this.title_;
};
Pe.prototype.Wa = function() {
  return this.thumb_;
};
Pe.prototype.getId = function() {
  return this.id_;
};
function Re(c) {
  this.id_ = n(c.id) ? c.id : void 0;
  this.time_ = c.time;
  this.title_ = n(c.title) ? c.title : void 0;
  this.thumb_ = n(c.thumbnail) ? c.thumbnail : Ea;
  this.allowUseInLayerManagement = !0;
  for (var d = [], e = 0;e < Fa.length;e++) {
    d.push(c.tms.replace("{s}", Fa[e]) + "/{z}/{x}/{-y}.png");
  }
  c.extent = c.clip.getExtent();
  c.source = new ol.source.XYZ({maxZoom:15, urls:d, crossOrigin:"*"});
  ol.layer.Tile.call(this, c);
}
ol.inherits(Re, ol.layer.Tile);
Re.prototype.getTime = function() {
  return this.time_;
};
Re.prototype.Xa = function() {
  return this.title_;
};
Re.prototype.Wa = function() {
  return this.thumb_;
};
Re.prototype.getId = function() {
  return this.id_;
};
function Se(c, d) {
  var e = n(c.ha) ? c.ha : void 0, f = n(c.projection) ? c.projection : "EPSG:900913", g = n(c.ob) ? c.ob : void 0, h = n(c.$a) ? c.$a : void 0, l = void 0 === e ? void 0 : e.getExtent();
  c.source = new ol.source.TileWMS({url:g, params:{LAYERS:h, VERSION:"1.1.1"}, projection:f, extent:l});
  c.preload = Infinity;
  f = new ol.layer.Tile(c);
  f.set("wms_url", g);
  f.set("layerid", h);
  f.Gb = r(function(c) {
    for (var d = [], f = e.getCoordinates()[0], g = 0;g < f.length;g++) {
      d.push(c.getPixelFromCoordinate(f[g]));
    }
    return d;
  }, f);
  f.xb = function(c, d, e) {
    e.beginPath();
    e.moveTo(c[0][0] * d, c[0][1] * d);
    for (var f = 1;f < c.length;f++) {
      e.lineTo(c[f][0] * d, c[f][1] * d);
    }
    e.closePath();
  };
  n(e) && (f.on("precompose", function(c) {
    var e = c.context, f = this.Gb(d);
    e.save();
    this.xb(f, c.frameState.pixelRatio, e);
    e.clip();
  }, f), f.on("postcompose", function(c) {
    c.context.restore();
  }));
  return f;
}
;function Te(c, d, e) {
  Y(A.f.Bb(), function(c) {
    200 === ye(c.target) ? d(c) : e(c);
  }, "POST", "req=" + JSON.stringify(c));
}
function Ue(c, d) {
  Y(A.f.zb(), d, "POST", "req=" + JSON.stringify(c));
}
;function Ve() {
  return {query:{filtered:{filter:{bool:{must:[]}}}}, sort:{}};
}
function We(c) {
  var d = {geo_shape:{}};
  d.geo_shape.geometry = {relation:"intersects", shape:{type:"polygon", coordinates:[c]}};
  return d;
}
function Xe(c) {
  for (var d = [], e = {bool:{should:d}}, f = 0;f < c.length;f++) {
    var g = c[f], h = {term:{}};
    h.term[g.key] = g.value.toLowerCase();
    d.push(h);
  }
  return e;
}
function Ye(c) {
  var d = {range:{}};
  d.range.time = {gte:c[0], lte:c[1]};
  return d;
}
function Ze(c, d) {
  var e = pa + "/map/_mget", f = JSON.stringify({ids:c});
  Y(e, d, "POST", f);
}
function $e(c, d) {
  for (var e = [], f = {query:{filtered:{filter:{bool:{should:e}}}}}, g = 0, h = d.length;g < h;g++) {
    var l = {term:{}};
    l.term[c] = d[g];
    e.push(l);
  }
  return f;
}
;t("vk2.app.GeoreferenceChooseApp", function(c) {
  this.a = [];
  af(this, M(c.target), M(c.targetCount));
});
function bf(c, d) {
  d.innerHTML = "";
  var e = Q("div", {"class":"form-group"}), f = Q("input", {type:"text", id:"georeference-search", name:"georeference-search", "class":"form-control", placeholder:A.c("georef-search-field") + ":"}), g = Q("ul");
  e.appendChild(f);
  d.appendChild(e);
  d.appendChild(g);
  var h = r(function(c) {
    g.innerHTML = "";
    for (var d = 0, e = c.length;d < e;d++) {
      R(g, cf(c[d]));
    }
    setTimeout(function() {
      $("body").scroll();
    }, 100);
  }, c), l;
  S(f, "keydown", function(c) {
    clearTimeout(l);
    l = setTimeout(r(function() {
      for (var d = c.target.value, e = $.extend(!0, [], this.a), f = [], g = e.length - 1;0 <= g;g--) {
        0 === e[g]._source.title.indexOf(d, 0) && f.push(e[g]);
      }
      h(f);
    }, this), 1E3);
  }, void 0, c);
  h(c.a);
}
function df(c, d, e, f) {
  void 0 !== d.hits && void 0 !== d.hits.total && (f.innerHTML = d.hits.total);
  void 0 !== d.hits && void 0 !== d.hits.hits && 0 < d.hits.hits.length && (c.a = d.hits.hits, bf(c, e));
  $("body").scroll(function() {
    $(".lazy-image").lazyload();
  });
  $(".lazy-image").lazyload();
}
function af(c, d, e) {
  var f = new X;
  T(f, "success", function(c) {
    c = c.target;
    var f = Z(c);
    df(this, f, d, e);
    B(c);
  }, !1, c);
  T(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, c);
  c = pa + "/_search?size=2000";
  var g = $e("georeference", [!1]);
  g.sort = {title:{order:"asc"}};
  f.send(c, "POST", JSON.stringify(g));
}
function cf(c) {
  var d = c._source, e = c._id;
  c = d.maptype;
  var f = void 0 !== d.thumb ? d.thumb : "#", e = void 0 !== e ? A.f.va(e) : "#", g = d.time;
  return Q("li", {id:d.id, innerHTML:'<div class="container record-container"><div class="image"><img class="lazy-image" alt="" data-original="' + f + '"></div><div class="body"><p><strong>' + d.title + "</strong></p><p>" + A.c("georef-choose-time") + ": " + g + "</p><p>" + A.c("georef-choose-maptype") + ": " + c + '</p></div><div class="tools"><a class="btn btn-primary" href="' + e + '" target="_top">' + A.c("georef-choose-goToGeoreference") + "</a></div></div>"});
}
;function ef(c) {
  this.o = n(c.projection) ? c.projection : "EPSG:900913";
  this.da = n(c.Kb) ? c.Kb : 20;
  this.Ha = void 0;
  this.l = new ol.Collection;
  this.V = "title";
  this.ba = "ascending";
  this.b = 0;
  this.h = void 0;
  this.a = {ea:n(c.time) ? c.time[0] : 1868, Aa:n(c.time) ? c.time[1] : 1945};
  this.g = c.map;
  this.A = [];
  this.Y = !0;
  this.C();
  U.call(this);
}
v(ef, U);
ef.prototype.C = function() {
  this.g.on("moveend", function() {
    var c = A.fa(this.g);
    n(this.Ha) && ol.extent.equals(this.Ha, c) || this.za();
  }, this);
};
function ff(c, d, e) {
  var f = [c.a.ea + "-01-01", c.a.Aa + "-01-01"], g = "ascending" === c.ba ? "asc" : "desc";
  if (c.Y) {
    d = A.Hb(ol.proj.transformExtent(d, e, ra));
    e = c.V;
    c = c.A;
    var h = [], l = Ve();
    h.push(Ye(f));
    h.push(We(d));
    h.push(Xe(c));
    h.push({term:{georeference:!0}});
    l.query.filtered.filter.bool.must = h;
    l.sort[e] = {order:g};
    return l;
  }
  d = c.V;
  c = c.A;
  e = [];
  h = Ve();
  e.push(Ye(f));
  e.push(Xe(c));
  e.push({term:{georeference:!1}});
  h.query.filtered.filter.bool.must = e;
  h.sort[d] = {order:g};
  return h;
}
ef.prototype.pa = function(c) {
  this.dispatchEvent(new C("refresh", {features:c, totalFeatureCount:this.h}));
};
ef.prototype.ma = function(c) {
  this.dispatchEvent(new C("paginate", {features:c, totalFeatureCount:this.h}));
};
function gf(c, d, e, f) {
  d = ff(c, d, e);
  e = pa + "/_search?from=" + c.b + "&size=" + c.da;
  var g = new X;
  T(g, "success", function(c) {
    c = c.target;
    if (Z(c)) {
      var d = Z(c);
      this.h = d.hits.total;
      B(c);
      c = Ja(d.hits.hits);
      this.l.extend(c);
      this.b += c.length;
      f.call(this, c);
    } else {
      console.log("Response is empty");
    }
  }, !1, c);
  g.send(e, "POST", JSON.stringify(d));
}
ef.prototype.za = function() {
  var c = A.fa(this.g);
  hf(this, c, this.o);
  this.Ha = Hb(c);
};
function hf(c, d, e) {
  c.l.clear();
  c.b = 0;
  gf(c, d, e, c.pa);
}
;function jf(c, d) {
  this.m = q(c) ? M(c) : c;
  this.a = new ef({projection:"EPSG:900913", map:d});
  S(this.a, "refresh", r(this.A, this));
  S(this.a, "paginate", r(this.za, this));
  this.h = ["time", "title", "georeference"];
  this.K = new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [A.j.tb];
  }});
  void 0 !== A.u() && this.K.set("altitudeMode", "clampToGround");
  d.addLayer(this.K);
  d.getLayers().on("add", function(c) {
    c = c.target.getArray()[c.target.getLength() - 1];
    if (c instanceof Pe || c instanceof Re || "click" == c.get("type")) {
      d.removeLayer(this.K), d.addLayer(this.K);
    }
  }, this);
  kf(this, this.m);
  lf(this, this.m);
  mf(this);
  nf(this);
  of(this);
  U.call(this);
}
v(jf, U);
function kf(c, d) {
  var e = Q("div", {"class":"mapsearch-container"});
  d.appendChild(e);
  var f = Q("div", {"class":"panel panel-default searchTablePanel"});
  e.appendChild(f);
  var g = Q("div", {"class":"panel-heading"});
  f.appendChild(g);
  var h = Q("div", {"class":"content"});
  g.appendChild(h);
  c.l = Q("div");
  h.appendChild(c.l);
  var l = Q("a", {innerHTML:"o", title:A.c("facetedsearch-open")});
  h.appendChild(l);
  h = Q("div", {"class":"facet-container"});
  g.appendChild(h);
  A.vb(l, e);
  c.o = new hd(h, !1);
  e = Q("div", {"class":"panel-body"});
  f.appendChild(e);
  f = Q("div", {"class":"mapsearch-list"});
  e.appendChild(f);
  e = Q("div", {"class":"list-header"});
  f.appendChild(e);
  for (g = 0;g < c.h.length;g++) {
    h = c.h[g], l = Q("div", {"class":"inner-col " + h}), h = Q("div", {"data-type":h, "class":"sort-element " + h, innerHTML:A.c("mapsearch-" + h) + ' <span class="caret caret-reversed"></span>'}), l.appendChild(h), e.appendChild(l);
  }
  c.b = Q("ul", {id:"mapsearch-contentlist", "class":"mapsearch-contentlist"});
  f.appendChild(c.b);
}
function nf(c) {
  n(c.b) && S(c.b, "click", function(c) {
    c.preventDefault();
    var e = A.Ta(c.S.target, "mapsearch-record"), f;
    this.a.l.forEach(function(c) {
      c.get("id") == e.id && (f = c);
    });
    this.dispatchEvent(new C("click-record", {feature:f}));
  }, void 0, c);
}
function lf(c, d) {
  for (var e = N("sort-element", d), f = 0;f < e.length;f++) {
    S(e[f], "click", function(c) {
      c = c.target.getAttribute("data-type");
      for (var d = P("sort-element " + c), e = H(d, "ascending") ? "descending" : "ascending", f = N("sort-element"), u = 0;u < f.length;u++) {
        G(f[u], "descending"), G(f[u], "ascending");
      }
      F(d, e);
      this.a.V = c;
      this.a.ba = e;
      c = this.a;
      hf(c, A.fa(c.g), c.o);
    }, void 0, c);
  }
}
function mf(c) {
  var d = !1;
  n(c.b) && S(c.b, "scroll", function(c) {
    if (!d) {
      d = !0;
      c = c.currentTarget;
      if (c.offsetHeight + c.scrollTop >= c.scrollHeight && (c = this.a, !(c.l.getLength() >= c.h) && (c = this.a, c.b < c.h && 500 > c.b))) {
        var f = A.fa(c.g);
        gf(c, f, c.o, c.ma);
      }
      d = !1;
    }
  }, void 0, c);
}
function of(c) {
  S(c.o, "facet-change", function(c) {
    var e = this.a;
    c = c.target;
    e.Y = c.georeference;
    e.A = c.facets;
    e.za();
  }, void 0, c);
}
function pf(c, d) {
  for (var e = 0;e < d.length;e++) {
    var f, g = d[e];
    f = Q("li", {"class":"mapsearch-record type " + g.get("maptype"), id:g.get("id")});
    var h = Q("span", {"class":"data-col time", innerHTML:parseInt(g.get("time"), 0)});
    f.appendChild(h);
    h = Q("span", {"class":"data-col title", innerHTML:g.get("title")});
    f.appendChild(h);
    h = Q("span", {"class":"data-col time", innerHTML:1});
    f.appendChild(h);
    h = Q("div", {"class":"view-item"});
    f.appendChild(h);
    var l = Q("a", {"class":"thumbnail", href:"#"});
    h.appendChild(l);
    var p = Q("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:g.get("thumb")});
    l.appendChild(p);
    l = Q("div", {"class":"overview"});
    h.appendChild(l);
    h = Q("h2", {innerHTML:g.get("title")});
    l.appendChild(h);
    h = Q("p", {"class":"details"});
    l.appendChild(h);
    l = Q("div", {"class":"timestamp", innerHTML:A.c("timestamp") + " " + g.get("time")});
    h.appendChild(l);
    l = Q("div", {"class":"scale", innerHTML:A.c("factory-scale") + " 1:" + g.get("denominator")});
    h.appendChild(l);
    g.get("georeference") || (g = Q("div", {"class":"georeference", innerHTML:A.c("factory-no-georef")}), h.appendChild(g));
    c.b.appendChild(f);
    n(c.K) && Oe(f, d[e], c.K);
  }
}
jf.prototype.A = function(c) {
  qf(this, c.target.totalFeatureCount);
  this.b.innerHTML = "";
  pf(this, c.target.features);
};
jf.prototype.za = function(c) {
  qf(this, c.target.hc);
  pf(this, c.target.features);
};
function qf(c, d) {
  c.l.innerHTML = 0 < d ? d + " " + A.c("mapsearch-found-maps") : A.c("mapsearch-found-no-maps");
}
;function rf(c) {
  this.l = q(c) ? M(c) : c;
  sf(this, this.l);
  this.b = {};
  this.o = {placename:r(function(c) {
    this.b.hasOwnProperty(c) ? tf(this, this.b[c][0]) : uf(this, c, r(function(c) {
      0 < c.length ? tf(this, c[0]) : alert("The choosen placename is unknown.");
    }, this));
  }, this)};
  vf(this);
  wf(this);
  U.call(this);
}
v(rf, U);
function sf(c, d) {
  var e = Q("div", {"class":"gazetteersearch-container"});
  d.appendChild(e);
  var f = Q("div", {"class":"form-group"});
  e.appendChild(f);
  c.a = Q("input", {placeholder:A.c("gazetteer-placeholder"), type:"text", "class":"form-control gazetteersearch-input"});
  f.appendChild(c.a);
  c.h = Q("input", {value:A.c("gazetteer-submit"), type:"submit", "class":"form-control gazetteersearch-submit"});
  f.appendChild(c.h);
}
function vf(c) {
  $(c.a).autocomplete({source:r(function(c, e) {
    uf(this, c.term, e);
  }, c), delay:300, minLength:3, autoFocus:!0, select:r(function(c, e) {
    tf(this, e.item);
  }, c), open:function() {
    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
  }, close:function() {
    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
  }});
}
function wf(c) {
  var d = r(function(c) {
    c = -1 < c.indexOf(",") ? c.split(",")[0] : c;
    this.o.placename(c);
  }, c);
  S(c.a, "keydown", function(c) {
    13 === c.keyCode && d(this.a.value);
  }, void 0, c);
  S(c.h, "click", function() {
    d(this.a.value);
  }, void 0, c);
}
function uf(c, d, e) {
  F(c.a, "loading");
  Y("https://search.mapzen.com/v1/autocomplete?api_key=search-53q8sJs&text=" + d, r(function(c) {
    c = c.target;
    var g;
    if (Z(c)) {
      g = Z(c);
    } else {
      try {
        g = c.a ? c.a.responseText : "";
      } catch (h) {
        g = "";
      }
    }
    B(c);
    c = $.map(g.features, function(c) {
      return {label:c.properties.label, value:c.properties.name, lonlat:{x:c.geometry.coordinates[0], y:c.geometry.coordinates[1]}, type:c.properties.layer};
    });
    this.b[d] = c;
    e(c);
    H(this.a, "loading") && G(this.a, "loading");
  }, c), "GET");
}
function tf(c, d) {
  c.dispatchEvent(new C(xf, {location_type:d.type, lonlat:[d.lonlat.x, d.lonlat.y], srs:n(void 0) ? void 0 : "EPSG:4326"}));
}
var xf = "jumpto";
function yf(c, d) {
  var e = q(c) ? M(c) : c, f = Q("div", {"class":"spatialsearch-inner-container"});
  e.appendChild(f);
  e = Q("div", {"class":"spatialsearch-content-panel"});
  f.appendChild(e);
  f = Q("div", {"class":"body-container"});
  e.appendChild(f);
  this.b = new rf(f);
  zf(this, f, d, Af(f));
}
function zf(c, d, e, f) {
  c.a = new jf(d, e);
  S(f, "timechange", function(c) {
    var d = this.a.a, e = c.target.time[0];
    c = c.target.time[1];
    var f = d.a.ea;
    if (null != e && ga(e)) {
      if (e > d.a.Aa) {
        throw {name:"WrongParameterExecption", message:"Start value shouldn't be higher than the end value."};
      }
      d.a.ea = e;
    }
    if (null != c && ga(c)) {
      if (c < d.a.ea) {
        throw d.a.ea = f, {name:"WrongParameterExecption", message:"End value shouldn't be lower than the start value."};
      }
      d.a.Aa = c;
    }
    d = this.a.a;
    hf(d, A.fa(d.g), d.o);
  }, void 0, c);
}
function Af(c) {
  var d = pa + "/_search", e = new id(c);
  Y(d, function(c) {
    c = c.target;
    Z(c) ? (c = Z(c), c = [(new Date(c.aggregations.summary.min)).getUTCFullYear(), (new Date(c.aggregations.summary.max)).getUTCFullYear()]) : c = [1850, 1970];
    jd(e, c);
  }, "POST", JSON.stringify({aggs:{summary:{stats:{field:"time"}}}}));
  return e;
}
;function Bf(c, d, e) {
  this.a = q(c) ? M(c) : c;
  c = Q("div", {"class":"container"});
  this.a.appendChild(c);
  var f = Q("div", {"class":"row-metadata"});
  c.appendChild(f);
  c = Q("div", {"class":"col-md-8 col-lg-8 metdata-col"});
  f.appendChild(c);
  var g = Q("div", {"class":"col-md-4 col-lg-4 thumbnail-col"});
  f.appendChild(g);
  var h = e.description, f = Q("div", {"class":"description"});
  c.appendChild(f);
  h = Q("h3", {innerHTML:h});
  f.appendChild(h);
  f = Q("img", {"class":"thumbnail", src:e.thumb});
  g.appendChild(f);
  h = A.c("metadata-keyword");
  f = e.keywords;
  g = Cf(c);
  h = Q("div", {"class":"label", innerHTML:h});
  g.appendChild(h);
  f = Q("div", {innerHTML:f});
  g.appendChild(f);
  for (g = 0;g < e["online-resources"].length;g++) {
    var h = A.c("metadata-online-res"), f = e["online-resources"][g].url, l = Cf(c), h = Q("div", {"class":"label", innerHTML:h});
    l.appendChild(h);
    h = Q("div");
    l.appendChild(h);
    var l = new W(f), p = !1;
    n(l.a.get("SERVICE")) && "wcs" == l.a.get("SERVICE").toLowerCase() && l.a.get("REQUEST") && "getcoverage" == l.a.get("REQUEST").toLowerCase() && (p = !0);
    Sd(l, "", void 0);
    f = p ? Q("a", {target:"_blank", href:f, innerHTML:l.toString(), "class":"download"}) : Q("a", {target:"_blank", href:f, innerHTML:l.toString()});
    h.appendChild(f);
  }
  f = A.c("metadata-spatial-res");
  e = e.denominator;
  g = Cf(c);
  f = Q("div", {"class":"label", innerHTML:f});
  g.appendChild(f);
  f = Q("div");
  g.appendChild(f);
  g = Q("label", {innerHTML:""});
  f.appendChild(g);
  e = Q("span", {innerHTML:e});
  f.appendChild(e);
  d = Q("span", {"class":"unique-id metadata-content-row", innerHTML:'<div class="label">' + A.c("metadata-unqiue-id") + "</div><div>" + d + "</div>"});
  c.appendChild(d);
}
function Cf(c) {
  var d = Q("div", {"class":"metadata-content-row"});
  c.appendChild(d);
  return d;
}
;function Df(c, d) {
  this.b = q(c) ? M(c) : c;
  var e = n("vertical") && q("vertical") ? "vertical" : "horizontal", f = this.b, g = Q("div", {"class":"opacity-container"});
  f.appendChild(g);
  f = Q("div", {"class":"slider-container opacity-slider"});
  g.appendChild(f);
  this.a = Q("div", {"class":"slider"});
  f.appendChild(this.a);
  Ef(this, this.a, d, e);
}
function Ef(c, d, e, f) {
  function g(c, d) {
    "vertical" == f ? d.style.top = 100 - (c - 0) / 100 * 100 + "%" : d.style.left = (c - 0) / 100 * 100 + "%";
    d.innerHTML = c + "%";
  }
  var h = 100 * e.getOpacity();
  $(d).slider({min:0, max:100, value:h, animate:"slow", orientation:f, step:1, slide:function(c, d) {
    var f = d.value;
    g(f, l);
    e.setOpacity(f / 100);
    A.la();
  }, change:r(function(c, d) {
    var f = d.value;
    g(f, l);
    e.setOpacity(f / 100);
    A.la();
  }, c)});
  var l = Q("div", {"class":"tooltip value", innerHTML:"100%"});
  d.appendChild(l);
  e.on("change:opacity", function() {
    var c = 100 * this.getOpacity();
    19 < Math.abs(c - $(d).slider("value")) && $(d).slider("value", c);
  });
}
;function Ff(c, d, e) {
  var f = c.getVisible() ? "visible" : "notvisible", g = Q("li", {"class":"layermanagement-record " + f, id:d, "data-id":c.getId()});
  d = Q("div", {"class":"control-container"});
  g.appendChild(d);
  f = Q("button", {"class":"move-layer-top minimize-tool", type:"button", title:A.c("factory-move-top"), innerHTML:A.c("factory-move-top")});
  d.appendChild(f);
  S(f, "click", function(d) {
    e.removeLayer(c);
    e.addLayer(c);
    d.stopPropagation();
    A.la();
  });
  f = Q("button", {"class":"disable-layer minimize-tool", type:"button", title:A.c("factory-show-map"), innerHTML:A.c("factory-show-map")});
  d.appendChild(f);
  S(f, "click", function() {
    H(g, "visible") ? (Mb(g, "visible", "notvisible"), c.setVisible(!1)) : (Mb(g, "notvisible", "visible"), c.setVisible(!0));
    A.la();
  });
  f = Q("button", {"class":"remove-layer minimize-tool", type:"button", title:A.c("factory-rm-map"), innerHTML:A.c("factory-rm-map")});
  d.appendChild(f);
  S(f, "click", function(d) {
    e.removeLayer(c);
    d.stopPropagation();
    A.la();
  });
  f = Q("div", {"class":"drag-btn"});
  d.appendChild(f);
  f = Q("a", {"class":"thumbnail", href:"#"});
  g.appendChild(f);
  var h = Q("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:c.Wa()});
  f.appendChild(h);
  f = Q("div", {"class":"metadata-container"});
  g.appendChild(f);
  h = Q("h4", {innerHTML:c.Xa()});
  f.appendChild(h);
  h = Q("div", {"class":"timestamps"});
  f.appendChild(h);
  f = Q("span", {"class":"timestamps-label", innerHTML:A.c("timestamp") + " " + c.getTime()});
  h.appendChild(f);
  $a.get("vk2-auth") && (f = Q("a", {"class":"georeference-update", title:A.c("factory-update-georef") + " ...", innerHTML:A.c("factory-update-georef") + " ...", target:"_blank", href:A.f.va(c.getId())}), d.appendChild(f));
  new Df(g, c);
  c.on("change:visible", function() {
    !c.getVisible() && H(g, "visible") ? Mb(g, "visible", "notvisible") : c.getVisible() && H(g, "notvisible") && Mb(g, "notvisible", "visible");
  });
  return g;
}
;function Gf(c, d, e) {
  this.a = d;
  this.g = e;
  d = q(c) ? M(c) : c;
  c = Q("div", {"class":"layermanagement-container", id:"layermanagement-container"});
  d.appendChild(c);
  d = Q("div", {"class":"heading"});
  c.appendChild(d);
  e = Q("span", {"class":"header-label", innerHTML:A.c("layermanagement-header-lbl")});
  d.appendChild(e);
  e = Q("ul", {"class":"layermanagement-body", innerHTML:'<li class="empty">' + A.c("layermanagement-start-msg") + "</li>"});
  c.appendChild(e);
  this.b = e;
  new Fe(d, this.g);
  new He(d, this.g);
  this.I();
  U.call(this);
}
v(Gf, U);
function Hf(c) {
  c = c.a.getArray();
  for (var d = [], e = 0, f = c.length;e < f;e++) {
    n(c[e].allowUseInLayerManagement) && c[e].allowUseInLayerManagement && d.push(c[e]);
  }
  return d;
}
function If(c, d) {
  for (var e = c.a.getArray(), f = 0, g = e.length;f < g;f++) {
    if (d === e[f]) {
      return f;
    }
  }
}
Gf.prototype.h = function(c) {
  if (n(c.element.allowUseInLayerManagement) && c.element.allowUseInLayerManagement) {
    this.b.innerHTML = "";
    c = Hf(this);
    for (var d = c.length - 1;0 <= d;d--) {
      var e = Ff(c[d], d, this.g);
      this.b.appendChild(e);
    }
  }
  $(this.b).sortable({revert:!0, handle:".drag-btn", stop:r(function(c, d) {
    var e = Hf(this), l = N("layermanagement-record", this.b), p = l.length - parseInt(l[d.item.index()].id, 0) - 1, u = d.item.index(), z = e.length - 1 - u, l = parseInt(l[u].id, 0);
    n(l) && p != u && (p = e[l], u = If(this, p), this.a.removeAt(u), e = If(this, e[z]), z > l ? this.a.insertAt(e + 1, p) : this.a.insertAt(e, p));
  }, this)});
};
Gf.prototype.I = function() {
  this.a.on("add", this.h, this);
  this.a.on("remove", this.h, this);
};
Gf.prototype.R = function() {
  this.a.un("add", this.h, this);
  this.a.un("remove", this.h, this);
};
Gf.prototype.getLayers = function() {
  return this.a.getArray();
};
function Jf() {
  U.call(this);
}
v(Jf, U);
function Kf(c, d) {
  var e = ce(new W(window.location.href)), f, g;
  if (ge(e, "c") && !A.u()) {
    var h = e.get("c").split(",");
    f = ol.proj.transform([parseFloat(h[0], 0), parseFloat(h[1], 0)], "EPSG:4326", x.projection);
    g = void 0 !== e.get("z") ? parseInt(e.get("z"), 0) : 4;
    if (isNaN(f[0]) || isNaN(f[1])) {
      f = ol.proj.transform([parseFloat(h[0], 0), parseFloat(h[1], 0)], "EPSG:3857", x.projection);
    }
    Lf(d, f, g);
  }
  if (ge(e, "pos") && A.u()) {
    var h = A.N(), l = h.getCesiumScene().camera, p = e.get("pos").split(","), p = {x:parseFloat(p[0], 0), y:parseFloat(p[1], 0), z:parseFloat(p[2], 0)}, u = void 0 !== e.get("h") ? parseFloat(e.get("h"), 5) : 0, z = void 0 !== e.get("p") ? parseFloat(e.get("p"), 10) : 0, w = void 0 !== e.get("r") ? parseFloat(e.get("r"), 10) : 0;
    h.a() || h.setEnabled(!0);
    l.setView({destination:p, orientation:{heading:u, pitch:z, roll:w}});
  }
  var D = r(function(c, e) {
    var h = Ja(c);
    if (void 0 !== e) {
      for (var l = 0;l < O.length;l++) {
        for (var p = 0;p < h.length;p++) {
          O[l] == h[p].getId() && this.dispatchEvent(new C("addmap", {feature:h[p]}));
        }
      }
    } else {
      for (p = 0;p < h.length;p++) {
        this.dispatchEvent(new C("addmap", {feature:h[p]}));
      }
    }
    !f && 0 < h.length && !A.u() && (f = h[0].getGeometry().getInteriorPoint().getCoordinates(), Lf(d, f, g));
  }, c);
  if (ge(e, "oid") && "" !== e.get("oid")) {
    for (var O = e.get("oid").split(","), e = 0;e < O.length;e++) {
      "" == O[e] && O.splice(e, 1);
    }
    O.reverse();
    Ze(O, function(c) {
      c = c.target;
      var d = Z(c) ? Z(c) : void 0;
      B(c);
      void 0 !== d.docs && 0 < d.docs.length && D(d.docs, O);
    });
  } else {
    ge(e, "dataid") && "" !== e.get("dataid") && (h = pa + "/_search", e = $e("dataid", [e.get("dataid")]), Y(h, function(c) {
      c = c.target;
      var d = Z(c) ? Z(c) : void 0;
      B(c);
      void 0 !== d.hits && void 0 !== d.hits.hits && 0 < d.hits.hits.length && D(d.hits.hits);
    }, "POST", JSON.stringify(e)));
  }
}
function Mf(c) {
  var d = "";
  c.getLayers().forEach(function(c) {
    n(c.getId) && (d += c.getId() + ",");
  });
  var e = ol.proj.transform(c.getView().getCenter(), x.projection, "EPSG:4326"), f = c.getView().getZoom();
  c = Ha && void 0 !== window.ol3d ? window.location.origin + "/vkviewer/main/3d/?welcomepage=off" : window.location.origin + A.f.B() + "?welcomepage=off";
  c = new W(c);
  var g = c.a;
  A.u() ? (e = A.N().getCesiumScene(), f = Cesium.Ellipsoid.WGS84.cartographicToCartesian(e.camera.positionCartographic), g.set("h", e.camera.heading), g.set("p", e.camera.pitch), g.set("pos", f.x + "," + f.y + "," + f.z), g.set("r", e.camera.roll)) : (g.set("z", f), g.set("c", A.round(e[0], 4) + "," + A.round(e[1], 4)));
  g.set("oid", d);
  Sd(c, g);
  return c.toString();
}
;function Nf(c) {
  c = c || {};
  var d = Q("div", {"class":"permalink ol-unselectable"}), e = Q("a", {href:"#permalink", innerHTML:"P", "class":"ol-has-tooltip"});
  d.appendChild(e);
  var f = Q("span", {role:"tooltip", innerHTML:A.c("permalink-title")});
  e.appendChild(f);
  var g = Q("form", {id:"permaCopyBox", style:"display:none;"}), f = Q("div", {"class":"permaClose"});
  g.appendChild(f);
  f = Q("div", {"class":"nose"});
  g.appendChild(f);
  f = Q("div", {"class":"moreDots", innerHTML:"..."});
  g.appendChild(f);
  var h = Q("input", {type:"text", id:"permalinkResult", readonly:"readonly", value:"#"});
  g.appendChild(h);
  f = "MacIntel" == navigator.platform ? "&#8984;" : "Strg";
  f = Q("label", {"for":"permalinkResult", innerHTML:A.c("permalink-msg") + " " + f + "+C."});
  g.appendChild(f);
  d.appendChild(g);
  f = r(function(c) {
    c.preventDefault();
    $(g).hasClass("open") ? ($(g).fadeOut().removeClass("open"), $(h).blur()) : (h.value = Mf(this.getMap()), $(g).fadeIn().addClass("open"), $(h).focus().select());
  }, this);
  S(e, "click", f);
  S(e, "touchstart", f);
  ol.control.Control.call(this, {element:d, target:c.target});
}
ol.inherits(Nf, ol.control.Control);
function Lf(c, d, e) {
  A.u() ? (c = A.N().getCesiumScene().camera, d = ol.proj.transform(d, x.projection, "EPSG:4326"), d = Cesium.Cartesian3.fromDegrees(d[0], d[1], 1E5), c.flyTo({destination:d})) : (c.getView().setCenter(d), c.getView().setZoom(e));
}
function Ge(c) {
  c = c.getLayers().getArray();
  for (var d = [], e = 0;e < c.length;e++) {
    A.u() ? c[e] instanceof Re && d.push(c[e]) : c[e] instanceof Pe && d.push(c[e]);
  }
  return d;
}
function Of(c, d, e) {
  d = void 0 !== d ? d : {projection:"EPSG:3857", center:[1528150, 6630500], zoom:2};
  var f = [new ol.control.Attribution({collapsible:!1, collapsed:!1}), new ol.control.Zoom, new ol.control.FullScreen, new ed, new ol.control.ScaleLine, new Nf, new Ne];
  n(e) && !1 !== e || f.push(new Me({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}));
  var g = [new ol.Attribution({html:'\u00a9 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})];
  n(e) && !0 === e && g.push(new ol.Attribution({html:'<a href="https://cesiumjs.org/data-and-assets/terrain/stk-world-terrain.html">\u00a9 Analytical Graphics, Inc., \u00a9 CGIAR-CSI, Produced using Copernicus data and information funded by the European Union - EU-DEM layers,  \u00a9 Commonwealth of Australia (Geoscience Australia) 2012</a>'}));
  this.g = new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.OSM({attributions:g})})], renderer:"canvas", target:c, interactions:ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom]), controls:f, view:new ol.View(d)});
  !0 === Ha && n(e) && !0 === e && (c = new olcs.OLCesium({map:this.g, sceneOptions:{terrainExaggeration:1}}), c.enableAutoRenderLoop(), e = c.getCesiumScene(), d = e.globe, window.ol3d = c, window.b = 8, window.a = void 0, d.baseColor = Cesium.Color.WHITE, d.b = "100", d.a = "2", e.backgroundColor = Cesium.Color.WHITE, e.globe.depthTestAgainstTerrain = !0, e.screenSpaceCameraController.maximumZoomDistance = 4E6, e.terrainProvider = new Cesium.CesiumTerrainProvider({url:"//assets.agi.com/stk-terrain/world", 
  cc:!0}), e.fog.enabled = !0, e.fog.density = "0.00025", e.fog.screenSpaceErrorFactor = "2", c = ce(new W(window.location.href)), e = new bd, ge(c, "pos") && dd(e), this.g.addControl(e));
  this.g.on("singleclick", function(c) {
    var d = [];
    A.u() ? (c = this.g.getCoordinateFromPixel(c.pixel), d = this.P.getSource().getFeaturesAtCoordinate(c)) : this.getMap().forEachFeatureAtPixel(c.pixel, function(c) {
      d.push(c);
    });
    Pf(d);
  }, this);
}
t("vk2.module.MapModule", Of);
function Qf(c) {
  return Ha && void 0 !== window.ol3d ? new Re({time:c.get("time"), thumbnail:c.get("thumb"), title:c.get("title"), objectid:c.get("id"), id:c.getId(), dataid:c.get("dataid"), tms:c.get("tms"), clip:c.getGeometry().clone()}) : new Pe({time:c.get("time"), thumbnail:c.get("thumb"), title:c.get("title"), objectid:c.get("id"), id:c.getId(), dataid:c.get("dataid"), tms:c.get("tms"), clip:c.getGeometry().clone()});
}
Of.prototype.getMap = function() {
  return this.g;
};
Of.prototype.getMap = Of.prototype.getMap;
function Rf(c, d) {
  S(d, "addmap", function(c) {
    c = c.target.feature;
    !0 === c.get("georeference") && (this.g.addLayer(Qf(c)), A.u() && (c = Qe(c.getGeometry().clone(), c.getId(), c.get("time"), c.get("title")), this.P.getSource().addFeature(c)));
  }, void 0, c);
}
function Sf(c, d) {
  c.a = d.a;
  c.P = A.u() ? new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"})})];
  }}) : void 0;
  void 0 !== c.P && (c.P.set("altitudeMode", "clampToGround"), c.P.set("type", "click"), c.g.getLayers().on("add", function(c) {
    c = c.target.getArray()[c.target.getLength() - 1];
    if (c instanceof Pe || c instanceof Re) {
      this.g.removeLayer(this.P), this.g.addLayer(this.P);
    }
  }, c), c.g.addLayer(c.P));
  S(c.a, "click-record", function(c) {
    c = c.target.feature;
    var d;
    a: {
      d = c.getId();
      for (var g = this.g.getLayers().getArray(), h = 0;h < g.length;h++) {
        if ((g[h] instanceof Pe || g[h] instanceof Re) && g[h].getId() == d) {
          d = !0;
          break a;
        }
      }
      d = !1;
    }
    !d && c.get("georeference") && (this.g.addLayer(Qf(c)), Ha && void 0 !== window.ol3d && (c = Qe(c.getGeometry().clone(), c.getId(), c.get("time"), c.get("title")), this.P.getSource().addFeature(c)));
  }, void 0, c);
  S(d.b, "jumpto", function(c) {
    var d = c.target.lonlat;
    c = ol.proj.transform([parseFloat(d[0]), parseFloat(d[1])], c.target.srs, x.projection);
    Lf(this.g, c, 6);
  }, void 0, c);
}
function Pf(c) {
  if (0 < c.length) {
    var d = new Hd("vk2-overlay-modal", document.body, !0);
    d.open(void 0, "mapcontroller-click-modal");
    for (var e = Q("section"), f = 0;f < c.length;f++) {
      var g = Q("a", {href:A.f.Fb(c[f].getId()), innerHTML:c[f].get("title") + " " + c[f].get("time"), target:"_self"});
      e.appendChild(g);
      var h = Q("br");
      e.appendChild(h);
    }
    f = P("modal-body", d.H);
    Cc(e) && (f.appendChild(e), Jd(d, e));
    1 == c.length && g.click();
  }
}
;t("vk2.app.PresentationApp", function(c) {
  A.Pa();
  var d = n(c.authenticate) && "boolean" == typeof c.authenticate ? c.authenticate : !1;
  A.ab(n(c.modalAnchorClassName) ? c.modalAnchorClassName : "vk2-modal-anchor");
  d || Tf();
  var d = new Of(c.mapContainerId, x, n(c.with25d) ? c.with25d : void 0), e = new yf(c.spatialsearchContainerId, d.getMap());
  Sf(d, e);
  new Gf(c.mapContainerId, d.getMap().getLayers(), d.getMap());
  e = new Jf(d.getMap());
  Kf(e, d.getMap());
  Rf(d, e);
  setTimeout(function() {
    A.Nb(c.mapContainerId);
  }, 500);
});
function Tf() {
  var c = A.getQueryParam("welcomepage");
  M("welcome-page-link") && "off" !== A.yb() && "off" !== c && M("welcome-page-link").click();
}
;function Uf(c, d, e, f) {
  var g = n(e) ? "webgl" : "canvas", h = n(f) ? f : !1;
  Y(d, r(function(e) {
    200 != ye(e.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    e = ze(e.target);
    var f = Ec(e, function(c) {
      return 1 == c.nodeType && "IMAGE_PROPERTIES" == c.tagName;
    });
    e = parseInt(f.getAttribute("WIDTH"), 0);
    f = parseInt(f.getAttribute("HEIGHT"), 0);
    Vf(this, d.substring(0, d.lastIndexOf("/") + 1), f, e, c, g, h);
  }, this), "GET");
  U.call(this);
}
v(Uf, U);
function Vf(c, d, e, f, g, h, l) {
  c.h = e;
  c.l = f;
  var p = new ol.proj.Projection({code:"ZOOMIFY", units:"pixels", extent:[0, 0, f, e]});
  c.o = new ol.source.Zoomify({url:d, size:[f, e], crossOrigin:"*"});
  d = new ol.View({projection:p, center:[f / 2, -e / 2], zoom:1, maxZoom:9});
  c.b = new ol.layer.Tile({source:c.o});
  e = [new ol.control.FullScreen, new ol.control.Zoom];
  l && e.push(new ol.control.OverviewMap({collapsed:!1, layers:[c.b]}));
  c.a = new ol.Map({layers:[c.b], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), controls:e, renderer:h, target:g, view:d});
  c.a.addControl(new ol.control.ZoomToExtent({extent:d.calculateExtent(c.a.getSize())}));
  c.dispatchEvent(new C("loadend", {}));
}
Uf.prototype.getMap = function() {
  return this.a;
};
Uf.prototype.getHeight = function() {
  return parseInt(this.h, 0);
};
Uf.prototype.getWidth = function() {
  return parseInt(this.l, 0);
};
t("vk2.app.MapProfileApp", function(c) {
  var d = A.getQueryParam("objectid");
  null != d ? Y(pa + "/map/" + d, r(function(d) {
    if (d = Z(d.target)) {
      d = Ia(d._id, d._source), Wf(d, c);
    }
  }, this)) : console.log("Could not identify objectid.");
});
function Wf(c, d) {
  var e = c.getProperties();
  M(d.titleshortId).innerHTML = e.title;
  M(d.titlelongId).innerHTML = e.titlelong;
  M(d.linkToFotothekId).href = e.plink;
  if (ol.has.WEBGL) {
    f = new Uf(d.zoomifyContainer, e.zoomify, !0), new Bf(d.metadataContainer, c.getId(), e), S(f, "loadend", function() {
      f.getMap().addControl(new Le);
    });
  } else {
    var f = new Uf(d.zoomifyContainer, e.zoomify);
    new Bf(d.metadataContainer, c.getId(), e);
  }
}
;function Xf(c, d, e, f) {
  var g = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-submit deactivate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + A.c("georef-confirm")});
  M(c).appendChild(g);
  S(g, "click", r(this.a, this, d, e, f));
  U.call(this);
}
v(Xf, U);
Xf.prototype.a = function(c, d, e) {
  this.dispatchEvent(new C("start-confirm", {}));
  var f = Kc(), g = Yf(d, f);
  e = 0 < e.getFeatures().length ? e.getFeatures()[0].getGeometry().clone().transform(x.projection, f) : void 0;
  var h = d.getType();
  if (4 > g.gcps.length) {
    alert("You have to place at least 4 ground control points");
  } else {
    var l = {georeference:g, id:c, type:h};
    void 0 !== e && (l.clip = {source:f, polygon:e.getCoordinates()[0]});
    "update" === h && (c = n(d.hb) ? d.hb : void 0, l.overwrites = c);
    var p = r(function(c) {
      c = Z(c.target);
      this.dispatchEvent(new C("end-confirm", {data:c}));
    }, this);
    r(function() {
      this.dispatchEvent(new C("error", {error:"Something went wrong, while sending confirmation data from the server."}));
    }, this);
    l.hasOwnProperty("clip") ? Ue(l, p) : A.ua(A.c("georef-confirm-clip-title"), A.c("georef-confirm-clip-msg"), function() {
      Ue(l, p);
    }, "georeference-confirm-without-clip");
  }
};
function Zf(c, d, e) {
  var f = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-validate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + A.c("georef-validate")});
  M(c).appendChild(f);
  S(f, "click", r(this.a, this, d, e));
  U.call(this);
}
v(Zf, U);
Zf.prototype.a = function(c, d) {
  var e = {georeference:$f(d, Jc(), Kc()), id:c};
  if (4 > e.georeference.gcps.length) {
    A.ua("Info", A.c("georef-confirm-warn-gcp"), function() {
    }, "georef-validation-dialog", !1);
  } else {
    this.dispatchEvent(new C("start-warping", {}));
    var f = r(function(c) {
      c = Z(c.target);
      this.dispatchEvent(new C("end-warping", {data:c, georefParams:e}));
    }, this), g = r(function() {
      this.dispatchEvent(new C("error", {error:"Something went wrong, while fetching validation data from the server."}));
    }, this);
    Te(e, f, g);
  }
};
function ag(c) {
  this.a = n(c.ja) && ia(c.ja) ? n(c.ja["new"]) ? hb(c.ja["new"]) : hb(c.ja) : {source:"pixel", target:"EPSG:4314"};
  this.hb = n(c.gb) ? c.gb : void 0;
  this.h = n(c.gc) ? c.kb : {source:"pixel", target:"EPSG:900913"};
  this.b = c.sources;
  this.o = n(c.type) ? "update" === c.type ? !0 : !1 : !1;
  this.l = new Ka;
  this.I();
  U.call(this);
}
v(ag, U);
ag.prototype.I = function() {
  bg(this, this.b);
  if (this.a.hasOwnProperty("gcps")) {
    for (var c = this.a, d = this.b, e = this.h, f = 0;f < c.gcps.length;f++) {
      var g = c.gcps[f], h = A.Vb(g.source), h = new ol.Feature(new ol.geom.Point(h)), g = ol.proj.transform(g.target, c.target, e.target), g = new ol.Feature(new ol.geom.Point(g));
      d[0].addFeature(h);
      d[1].addFeature(g);
    }
  }
};
function bg(c, d) {
  function e(c) {
    var e = d[0].getFeatureById(c), l = d[1].getFeatureById(c);
    if (null != e && null != l) {
      e.setProperties({Pb:!0});
      l.setProperties({Pb:!0});
      var p = A.j.Ea();
      p.getText().setText("" + c);
      e.setStyle(p);
      l.setStyle(p);
      f.a = !1;
      f.b = !1;
    }
  }
  var f = c.l;
  d[0].on("addfeature", function(c) {
    if (!1 === f.a) {
      var d = La(f);
      c = c.feature;
      f.a = !0;
      c.setId(d);
      c.setStyle(A.j.Na);
      f.a && f.b && e(d);
    } else {
      alert("Please add source to other map!"), this.removeFeature(c.feature);
    }
  });
  d[0].on("removefeature", function(c) {
    c = c.feature.getId();
    var e = void 0 !== c ? d[0].getFeatureById(c) : void 0;
    null === (void 0 !== c ? d[1].getFeatureById(c) : void 0) & null === e && f.a && (f.a = !1);
  });
  d[1].on("removefeature", function(c) {
    c = c.feature.getId();
    var e = void 0 !== c ? d[0].getFeatureById(c) : void 0;
    null === (void 0 !== c ? d[1].getFeatureById(c) : void 0) & null === e && f.b && (f.b = !1);
  });
  d[1].on("addfeature", function(c) {
    if (!1 === f.b) {
      var d = La(f);
      c = c.feature;
      f.b = !0;
      c.setId(d);
      c.setStyle(A.j.Na);
      f.a && f.b && e(d);
    } else {
      alert("Please add source to other map!"), this.removeFeature(c.feature);
    }
  });
}
function $f(c, d, e) {
  d = n(d) ? d : "affine";
  c = cg(c, n(e) ? e : void 0);
  c.algorithm = d;
  return c;
}
function cg(c, d) {
  var e = r(function(c, d) {
    for (var e = [], f = 0;f < c.length;f++) {
      var g = A.Ub(c[f][0].getGeometry().getCoordinates()), w = ol.proj.transform(c[f][1].getGeometry().getCoordinates(), this.h.target, d);
      e.push({source:g, target:w});
    }
    return e;
  }, c), f = hb(c.a), g = n(d) ? d : f.target;
  f.gcps = e(function(c) {
    for (var d = [], e = 0;e < c[0].getFeatures().length;e++) {
      var f = c[0].getFeatures()[e], g;
      da(f.getId()) && (g = c[1].getFeatureById(f.getId()));
      null != f && null != g && d.push([f, g]);
    }
    return d;
  }(c.b), g);
  f.target = g;
  return f;
}
function Yf(c, d) {
  var e = Jc(), e = n(e) ? e : "affine", f = hb(c.a), g = $f(c, e, n(d) ? d : f.target);
  $f(c, e, f.target);
  return g;
}
ag.prototype.getType = function() {
  return this.o ? "update" : "new";
};
function dg(c) {
  this.b = q(c) ? M(c) : c;
  var d = Q("div", {"class":"georef-tools-clip-container", id:"georef-tools-clip-container"});
  this.b.appendChild(d);
  eg(this, d);
  c = Q("div", {"class":"georef-tools-clip-inner-container", id:"georef-tools-clip-inner-container"});
  d.appendChild(c);
  var d = [], e = fg("noneToggle", "none", A.c("georef-movemap"));
  c.appendChild(e);
  d.push(e);
  var f = fg("drawClip", "drawclip", A.c("georef-drawclip"));
  c.appendChild(f);
  d.push(f);
  S(e, "click", r(this.a, this, "none", d));
  S(f, "click", r(this.a, this, "drawclip", d));
  U.call(this);
}
v(dg, ld);
dg.prototype.C = function() {
  var c = M("georef-tools-clip-handler");
  null != c && H(c, "open") || $(c).trigger("click");
};
function fg(c, d, e) {
  var f = Q("div", {"class":"tool"});
  c = Q("div", {id:c, "class":"tool-move toggle-elements " + c, value:d, innerHTML:'<span class="tool-title">' + e + "</span>"});
  f.appendChild(c);
  return f;
}
dg.prototype.D = function() {
  var c = M("georef-tools-clip-handler");
  if (null == c || H(c, "open")) {
    $(c).trigger("click");
    for (var c = N("toggle-elements"), d = 0;d < c.length;d++) {
      H(c[d], "active") && G(c[d], "active");
    }
  }
};
dg.prototype.a = function(c, d) {
  for (var e = r(function(c, d) {
    H(c, "active") || F(c, "active");
    this.dispatchEvent(new C("activate-" + d, c));
  }, this), f = r(function(c, d) {
    H(c, "active") && G(c, "active");
    this.dispatchEvent(new C("deactivate-" + d, c));
  }, this), g = 0;g < d.length;g++) {
    var h = d[g].children[0];
    h.value === c ? e(h, h.value) : f(h, h.value);
  }
};
function eg(c, d) {
  var e = Q("div", {"class":"georef-tools-clip-handler", id:"georef-tools-clip-handler"});
  d.appendChild(e);
  R(e, Q("span", {"class":"icon"}));
  $(e).click(r(function() {
    var c = H(e, "open") ? new C("deactivate", e) : new C("activate", e);
    this.dispatchEvent(c);
    $("#georef-tools-clip-inner-container").slideToggle(300, function() {
      $(e).toggleClass("open");
    });
  }, c));
}
;function gg(c) {
  this.m = q(c) ? M(c) : c;
  var d = Q("div", {"class":"georef-tools-gcp-container", id:"georef-tools-gcp-container"});
  this.m.appendChild(d);
  hg(this, d);
  c = Q("div", {"class":"georef-tools-gcp-inner-container", id:"georef-tools-gcp-inner-container"});
  d.appendChild(c);
  var d = [], e = ig("noneToggle", "none", A.c("georef-movemap"));
  c.appendChild(e);
  d.push(e);
  var f = ig("pointToggle", "addgcp", A.c("georef-setgcp"));
  c.appendChild(f);
  d.push(f);
  var g = ig("dragToggle", "draggcp", A.c("georef-movegcp"));
  c.appendChild(g);
  d.push(g);
  var h = ig("deleteToggle", "delgcp", A.c("georef-delgcp"));
  c.appendChild(h);
  d.push(h);
  S(e, "click", r(this.a, this, "none", d));
  S(f, "click", r(this.a, this, "addgcp", d));
  S(g, "click", r(this.a, this, "draggcp", d));
  S(h, "click", r(this.a, this, "delgcp", d));
  U.call(this);
}
v(gg, ld);
gg.prototype.C = function() {
  var c = M("georef-tools-gcp-handler");
  null != c && H(c, "open") || $(c).trigger("click");
};
function ig(c, d, e) {
  var f = Q("div", {"class":"tool"});
  c = Q("div", {id:c, "class":"tool-move toggle-elements " + c, value:d, innerHTML:'<span class="tool-title">' + e + "</span>"});
  f.appendChild(c);
  return f;
}
gg.prototype.D = function() {
  var c = M("georef-tools-gcp-handler");
  if (null == c || H(c, "open")) {
    $(c).trigger("click");
    for (var c = N("toggle-elements"), d = 0;d < c.length;d++) {
      H(c[d], "active") && G(c[d], "active");
    }
  }
};
gg.prototype.a = function(c, d) {
  for (var e = r(function(c, d) {
    H(c, "active") || F(c, "active");
    this.dispatchEvent(new C("activate-" + d, c));
  }, this), f = r(function(c, d) {
    H(c, "active") && G(c, "active");
    this.dispatchEvent(new C("deactivate-" + d, c));
  }, this), g = 0;g < d.length;g++) {
    var h = d[g].children[0];
    h.value === c ? e(h, h.value) : f(h, h.value);
  }
};
function hg(c, d) {
  var e = Q("div", {"class":"georef-tools-gcp-handler", id:"georef-tools-gcp-handler"});
  d.appendChild(e);
  R(e, Q("span", {"class":"icon"}));
  $(e).click(r(function() {
    var c = H(e, "open") ? new C("deactivate", e) : new C("activate", e);
    this.dispatchEvent(c);
    $("#georef-tools-gcp-inner-container").slideToggle(300, function() {
      $(e).toggleClass("open");
    });
  }, c));
}
;function jg(c) {
  this.a = c.aa;
  var d = c.Tb, e = c.sources[0], f = c.sources[1];
  c = {W:c.bb[0], T:c.bb[1]};
  var g = {W:new ol.layer.Vector({source:e, style:function() {
    return [A.j.sb];
  }}), T:new ol.layer.Vector({source:f, style:function() {
    return [A.j.sb];
  }})}, f = new md(e, f, c.W, c.T), e = new od(g.W, g.T, c.W, c.T), h = new nd(g.W, g.T, c.W, c.T), f = {"activate-addgcp":f, "deactivate-addgcp":f, "activate-draggcp":e, "deactivate-draggcp":e, "activate-delgcp":h, "deactivate-delgcp":h};
  kg(e);
  lg(d, c, g, f);
  this.ya = d;
}
v(jg, Ma);
function kg(c) {
  function d(c) {
    c.target.feature.setStyle(c.target.targetStyle);
  }
  S(c, "selected", d);
  S(c, "deselected", d);
}
function lg(c, d, e, f) {
  function g(c) {
    h();
    f[c.type].C();
  }
  function h(c) {
    if (n(c)) {
      var d = c.type;
      n(d) && f.hasOwnProperty(d) && f[d].D();
    } else {
      for (d in f) {
        f.hasOwnProperty(d) && f[d].D();
      }
    }
  }
  S(c, "activate-addgcp", g);
  S(c, "deactivate-addgcp", h);
  S(c, "activate-draggcp", g);
  S(c, "deactivate-draggcp", h);
  S(c, "activate-delgcp", g);
  S(c, "deactivate-delgcp", h);
  S(c, "activate", function() {
  });
  S(c, "deactivate", function() {
    h();
  });
  d.W.addLayer(e.W);
  d.T.addLayer(e.T);
}
;function mg(c, d) {
  Uf.call(this, c, d);
}
v(mg, Uf);
function ng(c, d) {
  this.b = x.projection;
  this.Z = void 0;
  this.m = M(c);
  var e = n(d) ? d : [640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], f = new ol.layer.Tile({source:new ol.source.OSM});
  this.g = new ol.Map({layers:[f], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), renderer:"canvas", target:this.m, view:new ol.View({projection:this.b, center:[0, 0], zoom:2}), controls:[new ol.control.FullScreen, new ol.control.Zoom, new ol.control.Attribution, new Me({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})})]});
  this.g.getView().fit(e, this.g.getSize());
  n(d) && (this.a = new ol.control.ZoomToExtent({extent:e}), this.g.addControl(this.a));
  e = new rf(this.m);
  S(e, "jumpto", function(c) {
    var d = this.g.getView(), e = c.target.lonlat;
    d.setCenter(ol.proj.transform([parseFloat(e[0]), parseFloat(e[1])], c.target.srs, this.b));
    d.setZoom(12);
  }, void 0, this);
  P("ol-attribution").children[0].children[0].remove();
}
function og(c) {
  if (!n(pg(c))) {
    var d = Q("div", {"class":"result-viewer-loading-panel", id:"result-viewer-loading-panel", innerHTML:'<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100"aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">100% Complete</span></div></div>'});
    c.m.appendChild(d);
  }
}
function qg(c) {
  c = pg(c);
  n(c) && Bc(c);
}
function rg(c, d, e, f) {
  n(c.Z) && c.g.removeLayer(c.Z);
  f = void 0 !== f ? f.getGeometry() : void 0;
  c.Z = Se({ob:d, $a:e, ha:f}, c.g);
  c.g.getLayers().insertAt(1, c.Z);
  M("opacity-slider-container") && (M("opacity-slider-container").innerHTML = "", new Df(M("opacity-slider-container"), c.Z));
}
ng.prototype.getMap = function() {
  return this.g;
};
function pg(c) {
  for (var d = 0;d < c.m.children.length;d++) {
    if ("result-viewer-loading-panel" === c.m.children[d].id) {
      return c.m.children[d];
    }
  }
}
ng.prototype.setZoom = function(c) {
  void 0 !== c && (c = void 0 === c ? this.g.getView().calculateExtent(this.g.getSize()) : c, this.g.removeControl(this.a), this.a = new ol.control.ZoomToExtent({extent:c}), this.g.addControl(this.a), this.g.getView().fit(c, this.g.getSize()));
};
t("vk2.app.AdminEvaluationApp", function(c) {
  if (!c.hasOwnProperty("process_list") || !c.hasOwnProperty("map_container")) {
    throw "Missing parameter in the vk2.app.AdminEvaluationApp settings. Please check the documentation.";
  }
  var d = c.map_container;
  Hc();
  this.oa = new ng(d);
  c.hasOwnProperty("btn_getallprocess") && sg(this, c.btn_getallprocess, c.process_list);
  c.hasOwnProperty("btn_getallinvalideprocess") && sg(this, c.btn_getallinvalideprocess, c.process_list, "validation=invalide");
  c.hasOwnProperty("btn_getsingleprocess_mapid") && tg(this, c.btn_getsingleprocess_mapid, c.process_list);
  c.hasOwnProperty("btn_getsingleprocess_userid") && ug(this, c.btn_getsingleprocess_userid, c.process_list);
});
function sg(c, d, e, f) {
  S(M(d), "click", function() {
    var c = new X;
    T(c, "success", function(c) {
      c = c.target;
      vg(this, e, Z(c));
      B(c);
    }, !1, this);
    T(c, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    var d = A.f.Da(n(f) ? f : void 0);
    c.send(d, "GET");
  }, void 0, c);
}
function tg(c, d, e) {
  S(M(d), "click", function(c) {
    c = c.currentTarget.getAttribute("data-src");
    var d = M(c).value;
    c = new X;
    T(c, "success", function(c) {
      c = c.target;
      vg(this, e, Z(c));
      B(c);
    }, !1, this);
    d = A.f.Da("mapid=" + d);
    c.send(d, "GET");
  }, void 0, c);
}
function ug(c, d, e) {
  S(M(d), "click", function(c) {
    c = c.currentTarget.getAttribute("data-src");
    var d = M(c).value;
    c = new X;
    T(c, "success", function(c) {
      c = c.target;
      vg(this, e, Z(c));
      B(c);
    }, !1, this);
    T(c, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    d = A.f.Da("userid=" + d);
    c.send(d, "GET");
  }, void 0, c);
}
function wg(c, d) {
  function e(c, d, e, f) {
    e = void 0 !== e ? e : "";
    return void 0 !== f && f ? Q("p", {"class":e, innerHTML:"<strong>" + c + ":</strong><br><span>" + d + "</span>"}) : Q("p", {"class":e, innerHTML:"<strong>" + c + ":</strong> " + d});
  }
  var f = Q("article", {id:d.georef_id}), g = r(function(c) {
    var d = Q("p");
    if ("isvalide" != c.adminvalidation) {
      var e = Q("button", {"data-href":A.f.Db("georeferenceid=" + c.georef_id), "class":"btn btn-primary action-btn", innerHTML:A.c("evaluation-isvalide")});
      xg(e, f, "Georeference process is valide?", "Are you sure you wanna set this georeference process to isvalide? Why?");
      d.appendChild(e);
    }
    e = Q("button", {"data-params-georef":JSON.stringify(c.georef_params), "data-params-id":c.mapid, "class":"btn btn-primary btn-show-georef", innerHTML:A.c("evaluation-showmap")});
    void 0 !== c.clippolygon && e.setAttribute("data-params-clip", JSON.stringify(c.clippolygon));
    yg(this, e);
    d.appendChild(e);
    e = Q("a", {href:A.f.va(void 0, "georeferenceid=" + c.georef_id), "class":"btn btn-primary action-btn", target:"_blank", innerHTML:A.c("evaluation-gotoprocess")});
    d.appendChild(e);
    "invalide" != c.adminvalidation && (c = Q("button", {"data-href":A.f.Cb("georeferenceid=" + c.georef_id), "class":"btn btn-warning action-btn", innerHTML:A.c("evaluation-isinvalide")}), xg(c, f, "Georeference process is invalide?", "Are you sure you wanna set this georeference process to invalide? Why?"), d.appendChild(c));
    return d;
  }, c);
  R(f, e("Process-ID", d.georef_id));
  R(f, e("Admin validation", d.adminvalidation));
  R(f, e("Map id", d.mapid));
  R(f, e("User id", d.userid));
  R(f, e("Map sheet description", d.title));
  R(f, e("Georeference parameter (lon:lat)", JSON.stringify(d.georef_params), "json", !0));
  R(f, e("Type", d.type));
  R(f, e("Processed", d.processed));
  R(f, e("Is active", d.georef_isactive));
  R(f, Q("p", {"class":"meta", innerHTML:"Created: " + d.georef_time}));
  R(f, g(d));
  return f;
}
function vg(c, d, e) {
  d = M(d);
  d.innerHTML = "";
  for (var f = 0, g = e.length;f < g;f++) {
    var h = wg(c, e[f]);
    d.appendChild(h);
  }
}
function xg(c, d, e, f) {
  S(c, "click", na(A.ua, e, f + '<br><div id="admin-validation-comment" class="input-group"><input type="radio" value="imprecision"> Imprecision<br><input type="radio" value="wrong-parameter"> Wrong Parameter<br><input type="radio" value="wrong-map-sheet-number"> Wrong map sheet number<br><input type="radio" value="bad-original"> Bad original<br><br><input type="text" class="form-control" placeholder="comment" id="confirm-comment"></div>', function() {
    for (var e = wc("input", void 0, M("admin-validation-comment")), f = void 0, l = 0;l < e.length;l++) {
      "radio" == e[l].type && e[l].checked && (f = e[l].value);
    }
    e = n(f) ? f : M("confirm-comment").value;
    e = c.getAttribute("data-href") + "&comment=" + e;
    Y(e, function(c) {
      alert(Z(c.target).message);
      Bc(d);
    }, "GET");
  }));
}
function yg(c, d) {
  S(d, "click", function(c) {
    var d = JSON.parse(c.currentTarget.getAttribute("data-params-georef")), g = d.hasOwnProperty("new") ? d["new"] : d, h = null == c.currentTarget.getAttribute("data-params-clip") || void 0 == c.currentTarget.getAttribute("data-params-clip") ? void 0 : JSON.parse(c.currentTarget.getAttribute("data-params-clip"));
    c = parseInt(c.currentTarget.getAttribute("data-params-id"), 0);
    c = {georeference:g, id:c};
    void 0 !== h && (c.clip = h);
    og(this.oa);
    Te(c, r(function(c) {
      c = Z(c.target);
      var d = ol.proj.transformExtent(c.extent, g.target, x.projection), e = void 0 !== h ? Ic(h) : void 0;
      rg(this.oa, c.wmsUrl, c.layerId, e);
      this.oa.setZoom(d);
      qg(this.oa);
    }, this), function() {
      qg(this.oa);
      alert("Something went wrong while trying to fetch a georeference validation result from server ....");
    });
  }, !1, c);
}
;function zg(c, d) {
  var e = d.getSource(), f;
  this.g = c;
  this.s = [new ol.interaction.Draw({features:e.getFeaturesCollection(), type:"Polygon", style:A.j.Ma, minPoints:5, condition:function(c) {
    c = c.coordinate;
    return void 0 !== f && A.round(f[0], 4) === A.round(c[0], 4) && A.round(f[1], 4) === A.round(c[1], 4) ? !1 : !0;
  }, geometryFunction:function(c, d) {
    d || (d = new ol.geom.Polygon(null));
    void 0 !== d.getCoordinates()[0] && 2 < d.getCoordinates()[0].length && 3 >= d.getCoordinates()[0].length ? f = d.getCoordinates()[0][d.getCoordinates()[0].length - 1] : f = void 0;
    d.setCoordinates(c);
    return d;
  }}), new ol.interaction.Modify({features:e.getFeaturesCollection(), deleteCondition:function(c) {
    var d = 1 <= e.getFeatures().length ? e.getFeatures()[0].getGeometry().getCoordinates()[0] : void 0;
    return void 0 !== d && 5 < d.length && ol.events.condition.shiftKeyOnly(c) && ol.events.condition.singleClick(c);
  }})];
  this.s[0].on("drawstart", function() {
    1 <= e.getFeatures().length && this.finishDrawing();
  }, this.s[0]);
  this.s[0].on("drawend", function(c) {
    c = 1 <= e.getFeatures().length ? e.getFeatures()[0].getGeometry() : c.feature.getGeometry();
    if (5 > c.getCoordinates()[0].length) {
      A.ua("Info", A.c("georef-confirm-warn-clippolygon"), function() {
      }, "georef-validation-dialog", !1), this.finishDrawing();
    } else {
      var d = c.getCoordinates(), f = d[0].length;
      A.round(d[0][f - 2][0], 4) === A.round(d[0][f - 3][0], 4) && A.round(d[0][f - 2][1], 4) === A.round(d[0][f - 3][1], 4) && (d[0].splice(f - 2, 1), c.setCoordinates(d));
    }
  }, this.s[0]);
  e.getFeaturesCollection().on("add", function() {
    1 < e.getFeatures().length ? e.getFeatures().splice(1, 1) : this.dispatchEvent(new C("drawend", {feature:e.getFeatures()[0]}));
  }, this);
  V.call(this);
}
v(zg, V);
zg.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
zg.prototype.I = function() {
  for (var c = 0;c < this.s.length;c++) {
    this.g.addInteraction(this.s[c]);
  }
};
zg.prototype.D = function() {
  this.R();
  this.status_ = !1;
};
zg.prototype.R = function() {
  for (var c = 0;c < this.s.length;c++) {
    this.g.removeInteraction(this.s[c]);
  }
};
function Ag(c, d, e) {
  this.a = new ol.source.Vector({features:new ol.Collection});
  n(e) && (e = Ic(e), this.a.addFeature(e));
  this.K = new ol.layer.Vector({source:this.a, style:A.j.Ma});
  this.K.setMap(d);
  this.b = new zg(d, this.K);
  Bg(c, {"activate-drawclip":this.b, "deactivate-drawclip":this.b});
  this.ya = c;
}
v(Ag, Ma);
Ag.prototype.i = function(c) {
  c = Ic(c.target.clip);
  0 === this.a.getFeatures().length && (this.a.addFeature(c), this.K.addFeature(c));
};
function Bg(c, d) {
  function e(c) {
    if (n(c)) {
      var e = c.type;
      n(e) && d.hasOwnProperty(e) && d[e].D();
    } else {
      for (e in d) {
        d.hasOwnProperty(e) && d[e].D();
      }
    }
  }
  S(c, "activate-drawclip", function(c) {
    e();
    d[c.type].C();
  });
  S(c, "deactivate-drawclip", e);
  S(c, "activate", function() {
  });
  S(c, "deactivate", function() {
    e();
  });
}
;function Cg(c) {
  var d = q(c.Ja) ? M(c.Ja) : c.Ja, e = q(c.Ia) ? M(c.Ia) : c.Ia, f = c.Lb, g = c.Ib, h = c.Rb, l = c.Wb, p = n(c.Qa) ? c.Qa : void 0, u = n(c.type) ? c.type : void 0, z = n(c.ha) ? c.ha : void 0, w = n(c.Ra) ? c.Ra : void 0, D = [new ol.source.Vector({features:new ol.Collection}), new ol.source.Vector({features:new ol.Collection})], O = n(c.kb) ? O : void 0;
  c = c.Jb.toLowerCase();
  var qa = {mtb:"affine", gl:"affine", ae:"affine", tk:"affine", ak:"tps"};
  c = void 0 !== p ? p.algorithm : qa.hasOwnProperty(c) ? qa[c.toLowerCase()] : qa.mtb;
  for (var qa = $("#transformation-chooser option"), pb = 0;pb < qa.length;pb++) {
    c.toLowerCase() === qa[pb].innerHTML.toLowerCase() && $("#transformation-chooser").val(qa[pb].innerHTML);
  }
  p = new ag({sources:D, ja:p, type:u, gb:w, kb:O});
  d = new gg(d);
  h = new jg({Tb:d, aa:p, bb:[h.getMap(), l.getMap()], sources:D});
  e = new dg(e);
  z = new Ag(e, l.getMap(), z);
  D = h.ya;
  p = z.ya;
  S(D, "activate", p.D);
  S(p, "activate", D.D);
  T(h.a, "add-gcp-clippolygon", z.i, void 0, z);
  D = new Zf(f, g, h.a);
  f = new Xf(f, g, h.a, z.a);
  Dg(D, f, l, z, e);
  d.C();
}
function Dg(c, d, e, f, g) {
  S(c, "start-warping", function() {
    og(e);
  });
  S(c, "end-warping", function(c) {
    c = c.target.data;
    var d = 0 < f.a.getFeatures().length ? f.a.getFeatures()[0] : void 0, p = ol.proj.transformExtent(c.extent, Kc(), x.projection);
    rg(e, c.wmsUrl, c.layerId, d);
    e.setZoom(p);
    qg(e);
    g.C();
  });
  S(c, "error", function() {
    alert("Something went wrong, while trying to request a validation result.");
    qg(e);
  });
  S(d, "end-confirm", function() {
    window.location.href = A.f.Va();
  });
  S(f.b, "drawend", function(c) {
    c = c.target.feature;
    if (void 0 !== e.Z) {
      var d = e.Z.getProperties();
      rg(e, d.wms_url, d.layerid, c);
    }
  });
}
;function Eg(c, d) {
  A.Pa();
  A.ab("vk2-modal-anchor");
  Hc();
  var e = new W(window.location.href), f = e.a.get("objectid"), e = e.a.get("georeferenceid");
  n(e) ? Fg("georeferenceid=" + e, r(this.a, this, c, d)) : n(f) && Fg("objectid=" + f, r(this.a, this, c, d));
}
t("vk2.app.GeoreferenceApp", Eg);
function Fg(c, d) {
  var e = A.f.Ab(c);
  Y(e, function(c) {
    200 != ye(c.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    d(Z(c.target));
  });
}
Eg.prototype.a = function(c, d, e) {
  var f = e.hasOwnProperty("extent") ? ol.proj.transformExtent(e.extent, wa, "EPSG:3857") : void 0, g = new mg(c, e.zoomify), h = new ng(d, f);
  S(g, "loadend", function() {
    var f = e.hasOwnProperty("recommendedsrid") ? "EPSG:" + e.recommendedsrid : "EPSG:4326";
    $("#projection-chooser").val(f);
    new Cg({Ja:c, Ia:d, Lb:"georef-validate-menu", Ib:e.objectid, Rb:g, Wb:h, Qa:e.georeference, type:e.type, ha:e.clippolygon, Ra:e.georeferenceid, Jb:e.maptype});
  }, void 0, this);
  e.hasOwnProperty("warn") && (f = Q("div", {innerHTML:e.warn + ' <a href="' + A.f.Va() + '">' + A.c("back-to-main") + "</a>", "class":"alert alert-danger warn-msg"}), M(c).appendChild(f));
};
}).call(window);
