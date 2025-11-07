(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/buttons.flash.min"],{

/***/ "./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.flash.min.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.flash.min.js ***!
  \*********************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (h) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs"), __webpack_require__(/*! datatables.net-buttons */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (j) {
    return h(j, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (h, j, l, p) {
  function v(a) {
    for (var b = ""; 0 <= a;) b = String.fromCharCode(a % 26 + 65) + b, a = Math.floor(a / 26) - 1;
    return b;
  }
  function o(a, b, d) {
    var c = a.createElement(b);
    d && (d.attr && h(c).attr(d.attr), d.children && h.each(d.children, function (a, b) {
      c.appendChild(b);
    }), null !== d.text && d.text !== p && c.appendChild(a.createTextNode(d.text)));
    return c;
  }
  function B(a, b) {
    var d = a.header[b].length,
      c;
    a.footer && a.footer[b].length > d && (d = a.footer[b].length);
    for (var e = 0, f = a.body.length; e < f; e++) if (c = a.body[e][b], c = null !== c && c !== p ? c.toString() : "", -1 !== c.indexOf("\n") ? (c = c.split("\n"), c.sort(function (a, b) {
      return b.length - a.length;
    }), c = c[0].length) : c = c.length, c > d && (d = c), 40 < d) return 52;
    d *= 1.3;
    return 6 < d ? d : 6;
  }
  function w(a) {
    q === p && (q = -1 === u.serializeToString(h.parseXML(m["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
    h.each(a, function (b, d) {
      if (h.isPlainObject(d)) w(d);else {
        if (q) {
          var c = d.childNodes[0],
            e,
            f,
            i = [];
          for (e = c.attributes.length - 1; 0 <= e; e--) {
            f = c.attributes[e].nodeName;
            var k = c.attributes[e].nodeValue;
            -1 !== f.indexOf(":") && (i.push({
              name: f,
              value: k
            }), c.removeAttribute(f));
          }
          e = 0;
          for (f = i.length; e < f; e++) k = d.createAttribute(i[e].name.replace(":", "_dt_b_namespace_token_")), k.value = i[e].value, c.setAttributeNode(k);
        }
        c = u.serializeToString(d);
        q && (-1 === c.indexOf("<?xml") && (c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + c), c = c.replace(/_dt_b_namespace_token_/g, ":"));
        c = c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a[b] = c;
      }
    });
  }
  var g = h.fn.dataTable,
    i = {
      version: "1.0.4-TableTools2",
      clients: {},
      moviePath: "",
      nextId: 1,
      $: function $(a) {
        "string" == typeof a && (a = l.getElementById(a));
        a.addClass || (a.hide = function () {
          this.style.display = "none";
        }, a.show = function () {
          this.style.display = "";
        }, a.addClass = function (a) {
          this.removeClass(a);
          this.className += " " + a;
        }, a.removeClass = function (a) {
          this.className = this.className.replace(RegExp("\\s*" + a + "\\s*"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
        }, a.hasClass = function (a) {
          return !!this.className.match(RegExp("\\s*" + a + "\\s*"));
        });
        return a;
      },
      setMoviePath: function setMoviePath(a) {
        this.moviePath = a;
      },
      dispatch: function dispatch(a, b, d) {
        (a = this.clients[a]) && a.receiveEvent(b, d);
      },
      log: function log(a) {
        console.log("Flash: " + a);
      },
      register: function register(a, b) {
        this.clients[a] = b;
      },
      getDOMObjectPosition: function getDOMObjectPosition(a) {
        var b = {
          left: 0,
          top: 0,
          width: a.width ? a.width : a.offsetWidth,
          height: a.height ? a.height : a.offsetHeight
        };
        "" !== a.style.width && (b.width = a.style.width.replace("px", ""));
        "" !== a.style.height && (b.height = a.style.height.replace("px", ""));
        for (; a;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b;
      },
      Client: function Client(a) {
        this.handlers = {};
        this.id = i.nextId++;
        this.movieId = "ZeroClipboard_TableToolsMovie_" + this.id;
        i.register(this.id, this);
        a && this.glue(a);
      }
    };
  i.Client.prototype = {
    id: 0,
    ready: !1,
    movie: null,
    clipText: "",
    fileName: "",
    action: "copy",
    handCursorEnabled: !0,
    cssEffects: !0,
    handlers: null,
    sized: !1,
    sheetName: "",
    glue: function glue(a, b) {
      this.domElement = i.$(a);
      var d = 99;
      this.domElement.style.zIndex && (d = parseInt(this.domElement.style.zIndex, 10) + 1);
      var c = i.getDOMObjectPosition(this.domElement);
      this.div = l.createElement("div");
      var e = this.div.style;
      e.position = "absolute";
      e.left = "0px";
      e.top = "0px";
      e.width = c.width + "px";
      e.height = c.height + "px";
      e.zIndex = d;
      "undefined" != typeof b && "" !== b && (this.div.title = b);
      0 !== c.width && 0 !== c.height && (this.sized = !0);
      this.domElement && (this.domElement.appendChild(this.div), this.div.innerHTML = this.getHTML(c.width, c.height).replace(/&/g, "&amp;"));
    },
    positionElement: function positionElement() {
      var a = i.getDOMObjectPosition(this.domElement),
        b = this.div.style;
      b.position = "absolute";
      b.width = a.width + "px";
      b.height = a.height + "px";
      0 !== a.width && 0 !== a.height && (this.sized = !0, b = this.div.childNodes[0], b.width = a.width, b.height = a.height);
    },
    getHTML: function getHTML(a, b) {
      var d = "",
        c = "id=" + this.id + "&width=" + a + "&height=" + b;
      if (navigator.userAgent.match(/MSIE/)) var e = location.href.match(/^https/i) ? "https://" : "http://",
        d = d + ('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + e + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="' + a + '" height="' + b + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + i.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + c + '"/><param name="wmode" value="transparent"/></object>');else d += '<embed id="' + this.movieId + '" src="' + i.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + a + '" height="' + b + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + c + '" wmode="transparent" />';
      return d;
    },
    hide: function hide() {
      this.div && (this.div.style.left = "-2000px");
    },
    show: function show() {
      this.reposition();
    },
    destroy: function destroy() {
      var a = this;
      this.domElement && this.div && (h(this.div).remove(), this.div = this.domElement = null, h.each(i.clients, function (b, d) {
        d === a && delete i.clients[b];
      }));
    },
    reposition: function reposition(a) {
      a && ((this.domElement = i.$(a)) || this.hide());
      if (this.domElement && this.div) {
        var a = i.getDOMObjectPosition(this.domElement),
          b = this.div.style;
        b.left = "" + a.left + "px";
        b.top = "" + a.top + "px";
      }
    },
    clearText: function clearText() {
      this.clipText = "";
      this.ready && this.movie.clearText();
    },
    appendText: function appendText(a) {
      this.clipText += a;
      this.ready && this.movie.appendText(a);
    },
    setText: function setText(a) {
      this.clipText = a;
      this.ready && this.movie.setText(a);
    },
    setFileName: function setFileName(a) {
      this.fileName = a;
      this.ready && this.movie.setFileName(a);
    },
    setSheetData: function setSheetData(a) {
      this.ready && this.movie.setSheetData(JSON.stringify(a));
    },
    setAction: function setAction(a) {
      this.action = a;
      this.ready && this.movie.setAction(a);
    },
    addEventListener: function addEventListener(a, b) {
      a = a.toString().toLowerCase().replace(/^on/, "");
      this.handlers[a] || (this.handlers[a] = []);
      this.handlers[a].push(b);
    },
    setHandCursor: function setHandCursor(a) {
      this.handCursorEnabled = a;
      this.ready && this.movie.setHandCursor(a);
    },
    setCSSEffects: function setCSSEffects(a) {
      this.cssEffects = !!a;
    },
    receiveEvent: function receiveEvent(a, b) {
      var d,
        a = a.toString().toLowerCase().replace(/^on/, "");
      switch (a) {
        case "load":
          this.movie = l.getElementById(this.movieId);
          if (!this.movie) {
            d = this;
            setTimeout(function () {
              d.receiveEvent("load", null);
            }, 1);
            return;
          }
          if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
            d = this;
            setTimeout(function () {
              d.receiveEvent("load", null);
            }, 100);
            this.ready = !0;
            return;
          }
          this.ready = !0;
          this.movie.clearText();
          this.movie.appendText(this.clipText);
          this.movie.setFileName(this.fileName);
          this.movie.setAction(this.action);
          this.movie.setHandCursor(this.handCursorEnabled);
          break;
        case "mouseover":
          this.domElement && this.cssEffects && this.recoverActive && this.domElement.addClass("active");
          break;
        case "mouseout":
          this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0));
          break;
        case "mousedown":
          this.domElement && this.cssEffects && this.domElement.addClass("active");
          break;
        case "mouseup":
          this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1);
      }
      if (this.handlers[a]) for (var c = 0, e = this.handlers[a].length; c < e; c++) {
        var f = this.handlers[a][c];
        if ("function" == typeof f) f(this, b);else if ("object" == _typeof(f) && 2 == f.length) f[0][f[1]](this, b);else if ("string" == typeof f) j[f](this, b);
      }
    }
  };
  i.hasFlash = function () {
    try {
      if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0;
    } catch (a) {
      if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] !== p && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return !0;
    }
    return !1;
  };
  j.ZeroClipboard_TableTools = i;
  var _x = function x(a, b) {
      b.attr("id");
      b.parents("html").length ? a.glue(b[0], "") : setTimeout(function () {
        _x(a, b);
      }, 500);
    },
    C = function C(a) {
      var b = "Sheet1";
      a.sheetName && (b = a.sheetName.replace(/[\[\]\*\/\\\?\:]/g, ""));
      return b;
    },
    s = function s(a, b) {
      var d = b.match(/[\s\S]{1,8192}/g) || [];
      a.clearText();
      for (var c = 0, e = d.length; c < e; c++) a.appendText(d[c]);
    },
    y = function y(a) {
      return a.newline ? a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n";
    },
    z = function z(a, b) {
      for (var d = y(b), c = a.buttons.exportData(b.exportOptions), e = b.fieldBoundary, f = b.fieldSeparator, h = RegExp(e, "g"), i = b.escapeChar !== p ? b.escapeChar : "\\", j = function j(a) {
          for (var b = "", c = 0, d = a.length; c < d; c++) 0 < c && (b += f), b += e ? e + ("" + a[c]).replace(h, i + e) + e : a[c];
          return b;
        }, l = b.header ? j(c.header) + d : "", o = b.footer && c.footer ? d + j(c.footer) : "", n = [], g = 0, m = c.body.length; g < m; g++) n.push(j(c.body[g]));
      return {
        str: l + n.join(d) + o,
        rows: n.length
      };
    },
    t = {
      available: function available() {
        return i.hasFlash();
      },
      init: function init(a, b, d) {
        i.moviePath = g.Buttons.swfPath;
        var c = new i.Client();
        c.setHandCursor(!0);
        c.addEventListener("mouseDown", function () {
          d._fromFlash = !0;
          a.button(b[0]).trigger();
          d._fromFlash = !1;
        });
        _x(c, b);
        d._flash = c;
      },
      destroy: function destroy(a, b, d) {
        d._flash.destroy();
      },
      fieldSeparator: ",",
      fieldBoundary: '"',
      exportOptions: {},
      title: "*",
      messageTop: "*",
      messageBottom: "*",
      filename: "*",
      extension: ".csv",
      header: !0,
      footer: !1
    },
    u = "",
    u = "undefined" === typeof j.XMLSerializer ? new function () {
      this.serializeToString = function (a) {
        return a.xml;
      };
    }() : new XMLSerializer(),
    q,
    m = {
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',
      "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="61"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
    },
    A = [{
      match: /^\-?\d+\.\d%$/,
      style: 60,
      fmt: function fmt(a) {
        return a / 100;
      }
    }, {
      match: /^\-?\d+\.?\d*%$/,
      style: 56,
      fmt: function fmt(a) {
        return a / 100;
      }
    }, {
      match: /^\-?\$[\d,]+.?\d*$/,
      style: 57
    }, {
      match: /^\-?£[\d,]+.?\d*$/,
      style: 58
    }, {
      match: /^\-?€[\d,]+.?\d*$/,
      style: 59
    }, {
      match: /^\([\d,]+\)$/,
      style: 61,
      fmt: function fmt(a) {
        return -1 * a.replace(/[\(\)]/g, "");
      }
    }, {
      match: /^\([\d,]+\.\d{2}\)$/,
      style: 62,
      fmt: function fmt(a) {
        return -1 * a.replace(/[\(\)]/g, "");
      }
    }, {
      match: /^[\d,]+$/,
      style: 63
    }, {
      match: /^[\d,]+\.\d{2}$/,
      style: 64
    }];
  g.Buttons.swfPath = "//cdn.datatables.net/buttons/" + g.Buttons.version + "/swf/flashExport.swf";
  g.Api.register("buttons.resize()", function () {
    h.each(i.clients, function (a, b) {
      b.domElement !== p && b.domElement.parentNode && b.positionElement();
    });
  });
  g.ext.buttons.copyFlash = h.extend({}, t, {
    className: "buttons-copy buttons-flash",
    text: function text(a) {
      return a.i18n("buttons.copy", "Copy");
    },
    action: function action(a, b, d, c) {
      if (c._fromFlash) {
        this.processing(!0);
        var a = c._flash,
          e = z(b, c),
          d = b.buttons.exportInfo(c),
          f = y(c),
          e = e.str;
        d.title && (e = d.title + f + f + e);
        d.messageTop && (e = d.messageTop + f + f + e);
        d.messageBottom && (e = e + f + f + d.messageBottom);
        c.customize && (e = c.customize(e, c));
        a.setAction("copy");
        s(a, e);
        this.processing(!1);
        b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), b.i18n("buttons.copySuccess", {
          _: "Copied %d rows to clipboard",
          1: "Copied 1 row to clipboard"
        }, data.rows), 3E3);
      }
    },
    fieldSeparator: "\t",
    fieldBoundary: ""
  });
  g.ext.buttons.csvFlash = h.extend({}, t, {
    className: "buttons-csv buttons-flash",
    text: function text(a) {
      return a.i18n("buttons.csv", "CSV");
    },
    action: function action(a, b, d, c) {
      a = c._flash;
      b = z(b, c);
      b = c.customize ? c.customize(b.str, c) : b.str;
      a.setAction("csv");
      a.setFileName(_filename(c));
      s(a, b);
    },
    escapeChar: '"'
  });
  g.ext.buttons.excelFlash = h.extend({}, t, {
    className: "buttons-excel buttons-flash",
    text: function text(a) {
      return a.i18n("buttons.excel", "Excel");
    },
    action: function action(a, b, d, c) {
      this.processing(!0);
      var a = c._flash,
        e = 0,
        f = h.parseXML(m["xl/worksheets/sheet1.xml"]),
        i = f.getElementsByTagName("sheetData")[0],
        d = {
          _rels: {
            ".rels": h.parseXML(m["_rels/.rels"])
          },
          xl: {
            _rels: {
              "workbook.xml.rels": h.parseXML(m["xl/_rels/workbook.xml.rels"])
            },
            "workbook.xml": h.parseXML(m["xl/workbook.xml"]),
            "styles.xml": h.parseXML(m["xl/styles.xml"]),
            worksheets: {
              "sheet1.xml": f
            }
          },
          "[Content_Types].xml": h.parseXML(m["[Content_Types].xml"])
        },
        k = b.buttons.exportData(c.exportOptions),
        j,
        l,
        g = function g(a) {
          j = e + 1;
          l = o(f, "row", {
            attr: {
              r: j
            }
          });
          for (var b = 0, c = a.length; b < c; b++) {
            var d = v(b) + "" + j,
              g = null;
            if (!(null === a[b] || a[b] === p || "" === a[b])) {
              a[b] = h.trim(a[b]);
              for (var k = 0, n = A.length; k < n; k++) {
                var m = A[k];
                if (a[b].match && !a[b].match(/^0\d+/) && a[b].match(m.match)) {
                  g = a[b].replace(/[^\d\.\-]/g, "");
                  m.fmt && (g = m.fmt(g));
                  g = o(f, "c", {
                    attr: {
                      r: d,
                      s: m.style
                    },
                    children: [o(f, "v", {
                      text: g
                    })]
                  });
                  break;
                }
              }
              g || ("number" === typeof a[b] || a[b].match && a[b].match(/^-?\d+(\.\d+)?$/) && !a[b].match(/^0\d+/) ? g = o(f, "c", {
                attr: {
                  t: "n",
                  r: d
                },
                children: [o(f, "v", {
                  text: a[b]
                })]
              }) : (m = !a[b].replace ? a[b] : a[b].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, ""), g = o(f, "c", {
                attr: {
                  t: "inlineStr",
                  r: d
                },
                children: {
                  row: o(f, "is", {
                    children: {
                      row: o(f, "t", {
                        text: m
                      })
                    }
                  })
                }
              })));
              l.appendChild(g);
            }
          }
          i.appendChild(l);
          e++;
        };
      h("sheets sheet", d.xl["workbook.xml"]).attr("name", C(c));
      c.customizeData && c.customizeData(k);
      var n = function n(a, b) {
          var c = h("mergeCells", f);
          c[0].appendChild(o(f, "mergeCell", {
            attr: {
              ref: "A" + a + ":" + v(b) + a
            }
          }));
          c.attr("count", c.attr("count") + 1);
          h("row:eq(" + (a - 1) + ") c", f).attr("s", "51");
        },
        b = b.buttons.exportInfo(c);
      b.title && (g([b.title], e), n(e, k.header.length - 1));
      b.messageTop && (g([b.messageTop], e), n(e, k.header.length - 1));
      c.header && (g(k.header, e), h("row:last c", f).attr("s", "2"));
      for (var r = 0, q = k.body.length; r < q; r++) g(k.body[r], e);
      c.footer && k.footer && (g(k.footer, e), h("row:last c", f).attr("s", "2"));
      b.messageBottom && (g([b.messageBottom], e), n(e, k.header.length - 1));
      g = o(f, "cols");
      h("worksheet", f).prepend(g);
      n = 0;
      for (r = k.header.length; n < r; n++) g.appendChild(o(f, "col", {
        attr: {
          min: n + 1,
          max: n + 1,
          width: B(k, n),
          customWidth: 1
        }
      }));
      c.customize && c.customize(d);
      w(d);
      a.setAction("excel");
      a.setFileName(b.filename);
      a.setSheetData(d);
      s(a, "");
      this.processing(!1);
    },
    extension: ".xlsx"
  });
  g.ext.buttons.pdfFlash = h.extend({}, t, {
    className: "buttons-pdf buttons-flash",
    text: function text(a) {
      return a.i18n("buttons.pdf", "PDF");
    },
    action: function action(a, b, d, c) {
      this.processing(!0);
      var a = c._flash,
        d = b.buttons.exportData(c.exportOptions),
        e = b.buttons.exportInfo(c),
        f = b.table().node().offsetWidth,
        g = b.columns(c.columns).indexes().map(function (a) {
          return b.column(a).header().offsetWidth / f;
        });
      a.setAction("pdf");
      a.setFileName(e.filename);
      s(a, JSON.stringify({
        title: e.title || "",
        messageTop: e.messageTop || "",
        messageBottom: e.messageBottom || "",
        colWidth: g.toArray(),
        orientation: c.orientation,
        size: c.pageSize,
        header: c.header ? d.header : null,
        footer: c.footer ? d.footer : null,
        body: d.body
      }));
      this.processing(!1);
    },
    extension: ".pdf",
    orientation: "portrait",
    pageSize: "A4",
    newline: "\n"
  });
  return g.Buttons;
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_regexp_constructor_js-node_modules_core-js_modules_es-de7eec","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d0f16b","vendors-node_modules_datatables_net_js_jquery_dataTables_mjs","vendors-node_modules_datatables_net-buttons_js_dataTables_buttons_js","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_arr-db7981"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.flash.min.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxFQUFDdEksQ0FBQyxDQUFDc0ksVUFBVSxJQUFFLEVBQUU7UUFBQ0MsYUFBYSxFQUFDdkksQ0FBQyxDQUFDdUksYUFBYSxJQUFFLEVBQUU7UUFBQzBDLFFBQVEsRUFBQ3RKLENBQUMsQ0FBQ3VKLE9BQU8sQ0FBQyxDQUFDO1FBQUNDLFdBQVcsRUFBQy9MLENBQUMsQ0FBQytMLFdBQVc7UUFBQ0MsSUFBSSxFQUFDaE0sQ0FBQyxDQUFDaU0sUUFBUTtRQUFDeEwsTUFBTSxFQUFDVCxDQUFDLENBQUNTLE1BQU0sR0FBQ1YsQ0FBQyxDQUFDVSxNQUFNLEdBQUMsSUFBSTtRQUFDRSxNQUFNLEVBQUNYLENBQUMsQ0FBQ1csTUFBTSxHQUMvZlosQ0FBQyxDQUFDWSxNQUFNLEdBQUMsSUFBSTtRQUFDRyxJQUFJLEVBQUNmLENBQUMsQ0FBQ2U7TUFBSSxDQUFDLENBQUMsQ0FBQztNQUFDLElBQUksQ0FBQ2tKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ1gsU0FBUyxFQUFDLE1BQU07SUFBQzBDLFdBQVcsRUFBQyxVQUFVO0lBQUNFLFFBQVEsRUFBQyxJQUFJO0lBQUNuRSxPQUFPLEVBQUM7RUFBSSxDQUFDLENBQUM7RUFBQyxPQUFPdkYsQ0FBQyxDQUFDbkQsT0FBTztBQUFBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9kYXRhdGFibGVzL2V4dHJhcy9UYWJsZVRvb2xzL0J1dHRvbnMtMS40LjIvanMvYnV0dG9ucy5mbGFzaC5taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKGgpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiLFwiZGF0YXRhYmxlcy5uZXRcIixcImRhdGF0YWJsZXMubmV0LWJ1dHRvbnNcIl0sZnVuY3Rpb24oail7cmV0dXJuIGgoaix3aW5kb3csZG9jdW1lbnQpfSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGosbCl7anx8KGo9d2luZG93KTtpZighbHx8IWwuZm4uZGF0YVRhYmxlKWw9cmVxdWlyZShcImRhdGF0YWJsZXMubmV0XCIpKGosbCkuJDtsLmZuLmRhdGFUYWJsZS5CdXR0b25zfHxyZXF1aXJlKFwiZGF0YXRhYmxlcy5uZXQtYnV0dG9uc1wiKShqLGwpO3JldHVybiBoKGwsaixqLmRvY3VtZW50KX06aChqUXVlcnksd2luZG93LGRvY3VtZW50KX0pKGZ1bmN0aW9uKGgsaixsLHApe2Z1bmN0aW9uIHYoYSl7Zm9yKHZhciBiPVwiXCI7MDw9YTspYj1TdHJpbmcuZnJvbUNoYXJDb2RlKGElMjYrNjUpK2IsYT1NYXRoLmZsb29yKGEvMjYpLVxyXG4xO3JldHVybiBifWZ1bmN0aW9uIG8oYSxiLGQpe3ZhciBjPWEuY3JlYXRlRWxlbWVudChiKTtkJiYoZC5hdHRyJiZoKGMpLmF0dHIoZC5hdHRyKSxkLmNoaWxkcmVuJiZoLmVhY2goZC5jaGlsZHJlbixmdW5jdGlvbihhLGIpe2MuYXBwZW5kQ2hpbGQoYil9KSxudWxsIT09ZC50ZXh0JiZkLnRleHQhPT1wJiZjLmFwcGVuZENoaWxkKGEuY3JlYXRlVGV4dE5vZGUoZC50ZXh0KSkpO3JldHVybiBjfWZ1bmN0aW9uIEIoYSxiKXt2YXIgZD1hLmhlYWRlcltiXS5sZW5ndGgsYzthLmZvb3RlciYmYS5mb290ZXJbYl0ubGVuZ3RoPmQmJihkPWEuZm9vdGVyW2JdLmxlbmd0aCk7Zm9yKHZhciBlPTAsZj1hLmJvZHkubGVuZ3RoO2U8ZjtlKyspaWYoYz1hLmJvZHlbZV1bYl0sYz1udWxsIT09YyYmYyE9PXA/Yy50b1N0cmluZygpOlwiXCIsLTEhPT1jLmluZGV4T2YoXCJcXG5cIik/KGM9Yy5zcGxpdChcIlxcblwiKSxjLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5sZW5ndGgtYS5sZW5ndGh9KSxjPWNbMF0ubGVuZ3RoKTpcclxuYz1jLmxlbmd0aCxjPmQmJihkPWMpLDQwPGQpcmV0dXJuIDUyO2QqPTEuMztyZXR1cm4gNjxkP2Q6Nn1mdW5jdGlvbiB3KGEpe3E9PT1wJiYocT0tMT09PXUuc2VyaWFsaXplVG9TdHJpbmcoaC5wYXJzZVhNTChtW1wieGwvd29ya3NoZWV0cy9zaGVldDEueG1sXCJdKSkuaW5kZXhPZihcInhtbG5zOnJcIikpO2guZWFjaChhLGZ1bmN0aW9uKGIsZCl7aWYoaC5pc1BsYWluT2JqZWN0KGQpKXcoZCk7ZWxzZXtpZihxKXt2YXIgYz1kLmNoaWxkTm9kZXNbMF0sZSxmLGk9W107Zm9yKGU9Yy5hdHRyaWJ1dGVzLmxlbmd0aC0xOzA8PWU7ZS0tKXtmPWMuYXR0cmlidXRlc1tlXS5ub2RlTmFtZTt2YXIgaz1jLmF0dHJpYnV0ZXNbZV0ubm9kZVZhbHVlOy0xIT09Zi5pbmRleE9mKFwiOlwiKSYmKGkucHVzaCh7bmFtZTpmLHZhbHVlOmt9KSxjLnJlbW92ZUF0dHJpYnV0ZShmKSl9ZT0wO2ZvcihmPWkubGVuZ3RoO2U8ZjtlKyspaz1kLmNyZWF0ZUF0dHJpYnV0ZShpW2VdLm5hbWUucmVwbGFjZShcIjpcIixcIl9kdF9iX25hbWVzcGFjZV90b2tlbl9cIikpLFxyXG5rLnZhbHVlPWlbZV0udmFsdWUsYy5zZXRBdHRyaWJ1dGVOb2RlKGspfWM9dS5zZXJpYWxpemVUb1N0cmluZyhkKTtxJiYoLTE9PT1jLmluZGV4T2YoXCI8P3htbFwiKSYmKGM9Jzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgc3RhbmRhbG9uZT1cInllc1wiPz4nK2MpLGM9Yy5yZXBsYWNlKC9fZHRfYl9uYW1lc3BhY2VfdG9rZW5fL2csXCI6XCIpKTtjPWMucmVwbGFjZSgvPChbXjw+XSo/KSB4bWxucz1cIlwiKFtePD5dKj8pPi9nLFwiPCQxICQyPlwiKTthW2JdPWN9fSl9dmFyIGc9aC5mbi5kYXRhVGFibGUsaT17dmVyc2lvbjpcIjEuMC40LVRhYmxlVG9vbHMyXCIsY2xpZW50czp7fSxtb3ZpZVBhdGg6XCJcIixuZXh0SWQ6MSwkOmZ1bmN0aW9uKGEpe1wic3RyaW5nXCI9PXR5cGVvZiBhJiYoYT1sLmdldEVsZW1lbnRCeUlkKGEpKTthLmFkZENsYXNzfHwoYS5oaWRlPWZ1bmN0aW9uKCl7dGhpcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSxhLnNob3c9ZnVuY3Rpb24oKXt0aGlzLnN0eWxlLmRpc3BsYXk9XHJcblwiXCJ9LGEuYWRkQ2xhc3M9ZnVuY3Rpb24oYSl7dGhpcy5yZW1vdmVDbGFzcyhhKTt0aGlzLmNsYXNzTmFtZSs9XCIgXCIrYX0sYS5yZW1vdmVDbGFzcz1mdW5jdGlvbihhKXt0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZS5yZXBsYWNlKFJlZ0V4cChcIlxcXFxzKlwiK2ErXCJcXFxccypcIiksXCIgXCIpLnJlcGxhY2UoL15cXHMrLyxcIlwiKS5yZXBsYWNlKC9cXHMrJC8sXCJcIil9LGEuaGFzQ2xhc3M9ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLmNsYXNzTmFtZS5tYXRjaChSZWdFeHAoXCJcXFxccypcIithK1wiXFxcXHMqXCIpKX0pO3JldHVybiBhfSxzZXRNb3ZpZVBhdGg6ZnVuY3Rpb24oYSl7dGhpcy5tb3ZpZVBhdGg9YX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSxiLGQpeyhhPXRoaXMuY2xpZW50c1thXSkmJmEucmVjZWl2ZUV2ZW50KGIsZCl9LGxvZzpmdW5jdGlvbihhKXtjb25zb2xlLmxvZyhcIkZsYXNoOiBcIithKX0scmVnaXN0ZXI6ZnVuY3Rpb24oYSxiKXt0aGlzLmNsaWVudHNbYV09Yn0sZ2V0RE9NT2JqZWN0UG9zaXRpb246ZnVuY3Rpb24oYSl7dmFyIGI9XHJcbntsZWZ0OjAsdG9wOjAsd2lkdGg6YS53aWR0aD9hLndpZHRoOmEub2Zmc2V0V2lkdGgsaGVpZ2h0OmEuaGVpZ2h0P2EuaGVpZ2h0OmEub2Zmc2V0SGVpZ2h0fTtcIlwiIT09YS5zdHlsZS53aWR0aCYmKGIud2lkdGg9YS5zdHlsZS53aWR0aC5yZXBsYWNlKFwicHhcIixcIlwiKSk7XCJcIiE9PWEuc3R5bGUuaGVpZ2h0JiYoYi5oZWlnaHQ9YS5zdHlsZS5oZWlnaHQucmVwbGFjZShcInB4XCIsXCJcIikpO2Zvcig7YTspYi5sZWZ0Kz1hLm9mZnNldExlZnQsYi50b3ArPWEub2Zmc2V0VG9wLGE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGJ9LENsaWVudDpmdW5jdGlvbihhKXt0aGlzLmhhbmRsZXJzPXt9O3RoaXMuaWQ9aS5uZXh0SWQrKzt0aGlzLm1vdmllSWQ9XCJaZXJvQ2xpcGJvYXJkX1RhYmxlVG9vbHNNb3ZpZV9cIit0aGlzLmlkO2kucmVnaXN0ZXIodGhpcy5pZCx0aGlzKTthJiZ0aGlzLmdsdWUoYSl9fTtpLkNsaWVudC5wcm90b3R5cGU9e2lkOjAscmVhZHk6ITEsbW92aWU6bnVsbCxjbGlwVGV4dDpcIlwiLGZpbGVOYW1lOlwiXCIsXHJcbmFjdGlvbjpcImNvcHlcIixoYW5kQ3Vyc29yRW5hYmxlZDohMCxjc3NFZmZlY3RzOiEwLGhhbmRsZXJzOm51bGwsc2l6ZWQ6ITEsc2hlZXROYW1lOlwiXCIsZ2x1ZTpmdW5jdGlvbihhLGIpe3RoaXMuZG9tRWxlbWVudD1pLiQoYSk7dmFyIGQ9OTk7dGhpcy5kb21FbGVtZW50LnN0eWxlLnpJbmRleCYmKGQ9cGFyc2VJbnQodGhpcy5kb21FbGVtZW50LnN0eWxlLnpJbmRleCwxMCkrMSk7dmFyIGM9aS5nZXRET01PYmplY3RQb3NpdGlvbih0aGlzLmRvbUVsZW1lbnQpO3RoaXMuZGl2PWwuY3JlYXRlRWxlbWVudChcImRpdlwiKTt2YXIgZT10aGlzLmRpdi5zdHlsZTtlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIjtlLmxlZnQ9XCIwcHhcIjtlLnRvcD1cIjBweFwiO2Uud2lkdGg9Yy53aWR0aCtcInB4XCI7ZS5oZWlnaHQ9Yy5oZWlnaHQrXCJweFwiO2UuekluZGV4PWQ7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGImJlwiXCIhPT1iJiYodGhpcy5kaXYudGl0bGU9Yik7MCE9PWMud2lkdGgmJjAhPT1jLmhlaWdodCYmKHRoaXMuc2l6ZWQ9XHJcbiEwKTt0aGlzLmRvbUVsZW1lbnQmJih0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kaXYpLHRoaXMuZGl2LmlubmVySFRNTD10aGlzLmdldEhUTUwoYy53aWR0aCxjLmhlaWdodCkucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikpfSxwb3NpdGlvbkVsZW1lbnQ6ZnVuY3Rpb24oKXt2YXIgYT1pLmdldERPTU9iamVjdFBvc2l0aW9uKHRoaXMuZG9tRWxlbWVudCksYj10aGlzLmRpdi5zdHlsZTtiLnBvc2l0aW9uPVwiYWJzb2x1dGVcIjtiLndpZHRoPWEud2lkdGgrXCJweFwiO2IuaGVpZ2h0PWEuaGVpZ2h0K1wicHhcIjswIT09YS53aWR0aCYmMCE9PWEuaGVpZ2h0JiYodGhpcy5zaXplZD0hMCxiPXRoaXMuZGl2LmNoaWxkTm9kZXNbMF0sYi53aWR0aD1hLndpZHRoLGIuaGVpZ2h0PWEuaGVpZ2h0KX0sZ2V0SFRNTDpmdW5jdGlvbihhLGIpe3ZhciBkPVwiXCIsYz1cImlkPVwiK3RoaXMuaWQrXCImd2lkdGg9XCIrYStcIiZoZWlnaHQ9XCIrYjtpZihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFLykpdmFyIGU9XHJcbmxvY2F0aW9uLmhyZWYubWF0Y2goL15odHRwcy9pKT9cImh0dHBzOi8vXCI6XCJodHRwOi8vXCIsZD1kKygnPG9iamVjdCBjbGFzc2lkPVwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCIgY29kZWJhc2U9XCInK2UrJ2Rvd25sb2FkLm1hY3JvbWVkaWEuY29tL3B1Yi9zaG9ja3dhdmUvY2Ficy9mbGFzaC9zd2ZsYXNoLmNhYiN2ZXJzaW9uPTEwLDAsMCwwXCIgd2lkdGg9XCInK2ErJ1wiIGhlaWdodD1cIicrYisnXCIgaWQ9XCInK3RoaXMubW92aWVJZCsnXCIgYWxpZ249XCJtaWRkbGVcIj48cGFyYW0gbmFtZT1cImFsbG93U2NyaXB0QWNjZXNzXCIgdmFsdWU9XCJhbHdheXNcIiAvPjxwYXJhbSBuYW1lPVwiYWxsb3dGdWxsU2NyZWVuXCIgdmFsdWU9XCJmYWxzZVwiIC8+PHBhcmFtIG5hbWU9XCJtb3ZpZVwiIHZhbHVlPVwiJytpLm1vdmllUGF0aCsnXCIgLz48cGFyYW0gbmFtZT1cImxvb3BcIiB2YWx1ZT1cImZhbHNlXCIgLz48cGFyYW0gbmFtZT1cIm1lbnVcIiB2YWx1ZT1cImZhbHNlXCIgLz48cGFyYW0gbmFtZT1cInF1YWxpdHlcIiB2YWx1ZT1cImJlc3RcIiAvPjxwYXJhbSBuYW1lPVwiYmdjb2xvclwiIHZhbHVlPVwiI2ZmZmZmZlwiIC8+PHBhcmFtIG5hbWU9XCJmbGFzaHZhcnNcIiB2YWx1ZT1cIicrXHJcbmMrJ1wiLz48cGFyYW0gbmFtZT1cIndtb2RlXCIgdmFsdWU9XCJ0cmFuc3BhcmVudFwiLz48L29iamVjdD4nKTtlbHNlIGQrPSc8ZW1iZWQgaWQ9XCInK3RoaXMubW92aWVJZCsnXCIgc3JjPVwiJytpLm1vdmllUGF0aCsnXCIgbG9vcD1cImZhbHNlXCIgbWVudT1cImZhbHNlXCIgcXVhbGl0eT1cImJlc3RcIiBiZ2NvbG9yPVwiI2ZmZmZmZlwiIHdpZHRoPVwiJythKydcIiBoZWlnaHQ9XCInK2IrJ1wiIG5hbWU9XCInK3RoaXMubW92aWVJZCsnXCIgYWxpZ249XCJtaWRkbGVcIiBhbGxvd1NjcmlwdEFjY2Vzcz1cImFsd2F5c1wiIGFsbG93RnVsbFNjcmVlbj1cImZhbHNlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIgcGx1Z2luc3BhZ2U9XCJodHRwOi8vd3d3Lm1hY3JvbWVkaWEuY29tL2dvL2dldGZsYXNocGxheWVyXCIgZmxhc2h2YXJzPVwiJytjKydcIiB3bW9kZT1cInRyYW5zcGFyZW50XCIgLz4nO3JldHVybiBkfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXYmJih0aGlzLmRpdi5zdHlsZS5sZWZ0PVwiLTIwMDBweFwiKX0sXHJcbnNob3c6ZnVuY3Rpb24oKXt0aGlzLnJlcG9zaXRpb24oKX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy5kb21FbGVtZW50JiZ0aGlzLmRpdiYmKGgodGhpcy5kaXYpLnJlbW92ZSgpLHRoaXMuZGl2PXRoaXMuZG9tRWxlbWVudD1udWxsLGguZWFjaChpLmNsaWVudHMsZnVuY3Rpb24oYixkKXtkPT09YSYmZGVsZXRlIGkuY2xpZW50c1tiXX0pKX0scmVwb3NpdGlvbjpmdW5jdGlvbihhKXthJiYoKHRoaXMuZG9tRWxlbWVudD1pLiQoYSkpfHx0aGlzLmhpZGUoKSk7aWYodGhpcy5kb21FbGVtZW50JiZ0aGlzLmRpdil7dmFyIGE9aS5nZXRET01PYmplY3RQb3NpdGlvbih0aGlzLmRvbUVsZW1lbnQpLGI9dGhpcy5kaXYuc3R5bGU7Yi5sZWZ0PVwiXCIrYS5sZWZ0K1wicHhcIjtiLnRvcD1cIlwiK2EudG9wK1wicHhcIn19LGNsZWFyVGV4dDpmdW5jdGlvbigpe3RoaXMuY2xpcFRleHQ9XCJcIjt0aGlzLnJlYWR5JiZ0aGlzLm1vdmllLmNsZWFyVGV4dCgpfSxhcHBlbmRUZXh0OmZ1bmN0aW9uKGEpe3RoaXMuY2xpcFRleHQrPVxyXG5hO3RoaXMucmVhZHkmJnRoaXMubW92aWUuYXBwZW5kVGV4dChhKX0sc2V0VGV4dDpmdW5jdGlvbihhKXt0aGlzLmNsaXBUZXh0PWE7dGhpcy5yZWFkeSYmdGhpcy5tb3ZpZS5zZXRUZXh0KGEpfSxzZXRGaWxlTmFtZTpmdW5jdGlvbihhKXt0aGlzLmZpbGVOYW1lPWE7dGhpcy5yZWFkeSYmdGhpcy5tb3ZpZS5zZXRGaWxlTmFtZShhKX0sc2V0U2hlZXREYXRhOmZ1bmN0aW9uKGEpe3RoaXMucmVhZHkmJnRoaXMubW92aWUuc2V0U2hlZXREYXRhKEpTT04uc3RyaW5naWZ5KGEpKX0sc2V0QWN0aW9uOmZ1bmN0aW9uKGEpe3RoaXMuYWN0aW9uPWE7dGhpcy5yZWFkeSYmdGhpcy5tb3ZpZS5zZXRBY3Rpb24oYSl9LGFkZEV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxiKXthPWEudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL15vbi8sXCJcIik7dGhpcy5oYW5kbGVyc1thXXx8KHRoaXMuaGFuZGxlcnNbYV09W10pO3RoaXMuaGFuZGxlcnNbYV0ucHVzaChiKX0sc2V0SGFuZEN1cnNvcjpmdW5jdGlvbihhKXt0aGlzLmhhbmRDdXJzb3JFbmFibGVkPVxyXG5hO3RoaXMucmVhZHkmJnRoaXMubW92aWUuc2V0SGFuZEN1cnNvcihhKX0sc2V0Q1NTRWZmZWN0czpmdW5jdGlvbihhKXt0aGlzLmNzc0VmZmVjdHM9ISFhfSxyZWNlaXZlRXZlbnQ6ZnVuY3Rpb24oYSxiKXt2YXIgZCxhPWEudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL15vbi8sXCJcIik7c3dpdGNoKGEpe2Nhc2UgXCJsb2FkXCI6dGhpcy5tb3ZpZT1sLmdldEVsZW1lbnRCeUlkKHRoaXMubW92aWVJZCk7aWYoIXRoaXMubW92aWUpe2Q9dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZC5yZWNlaXZlRXZlbnQoXCJsb2FkXCIsbnVsbCl9LDEpO3JldHVybn1pZighdGhpcy5yZWFkeSYmbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRmlyZWZveC8pJiZuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzLykpe2Q9dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZC5yZWNlaXZlRXZlbnQoXCJsb2FkXCIsbnVsbCl9LDEwMCk7dGhpcy5yZWFkeT0hMDtyZXR1cm59dGhpcy5yZWFkeT1cclxuITA7dGhpcy5tb3ZpZS5jbGVhclRleHQoKTt0aGlzLm1vdmllLmFwcGVuZFRleHQodGhpcy5jbGlwVGV4dCk7dGhpcy5tb3ZpZS5zZXRGaWxlTmFtZSh0aGlzLmZpbGVOYW1lKTt0aGlzLm1vdmllLnNldEFjdGlvbih0aGlzLmFjdGlvbik7dGhpcy5tb3ZpZS5zZXRIYW5kQ3Vyc29yKHRoaXMuaGFuZEN1cnNvckVuYWJsZWQpO2JyZWFrO2Nhc2UgXCJtb3VzZW92ZXJcIjp0aGlzLmRvbUVsZW1lbnQmJnRoaXMuY3NzRWZmZWN0cyYmdGhpcy5yZWNvdmVyQWN0aXZlJiZ0aGlzLmRvbUVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7YnJlYWs7Y2FzZSBcIm1vdXNlb3V0XCI6dGhpcy5kb21FbGVtZW50JiZ0aGlzLmNzc0VmZmVjdHMmJih0aGlzLnJlY292ZXJBY3RpdmU9ITEsdGhpcy5kb21FbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYodGhpcy5kb21FbGVtZW50LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLHRoaXMucmVjb3ZlckFjdGl2ZT0hMCkpO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjp0aGlzLmRvbUVsZW1lbnQmJlxyXG50aGlzLmNzc0VmZmVjdHMmJnRoaXMuZG9tRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTticmVhaztjYXNlIFwibW91c2V1cFwiOnRoaXMuZG9tRWxlbWVudCYmdGhpcy5jc3NFZmZlY3RzJiYodGhpcy5kb21FbGVtZW50LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLHRoaXMucmVjb3ZlckFjdGl2ZT0hMSl9aWYodGhpcy5oYW5kbGVyc1thXSlmb3IodmFyIGM9MCxlPXRoaXMuaGFuZGxlcnNbYV0ubGVuZ3RoO2M8ZTtjKyspe3ZhciBmPXRoaXMuaGFuZGxlcnNbYV1bY107aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZilmKHRoaXMsYik7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZiYmMj09Zi5sZW5ndGgpZlswXVtmWzFdXSh0aGlzLGIpO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGYpaltmXSh0aGlzLGIpfX19O2kuaGFzRmxhc2g9ZnVuY3Rpb24oKXt0cnl7aWYobmV3IEFjdGl2ZVhPYmplY3QoXCJTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaFwiKSlyZXR1cm4hMH1jYXRjaChhKXtpZihuYXZpZ2F0b3IubWltZVR5cGVzJiZcclxubmF2aWdhdG9yLm1pbWVUeXBlc1tcImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCJdIT09cCYmbmF2aWdhdG9yLm1pbWVUeXBlc1tcImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCJdLmVuYWJsZWRQbHVnaW4pcmV0dXJuITB9cmV0dXJuITF9O2ouWmVyb0NsaXBib2FyZF9UYWJsZVRvb2xzPWk7dmFyIHg9ZnVuY3Rpb24oYSxiKXtiLmF0dHIoXCJpZFwiKTtiLnBhcmVudHMoXCJodG1sXCIpLmxlbmd0aD9hLmdsdWUoYlswXSxcIlwiKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eChhLGIpfSw1MDApfSxDPWZ1bmN0aW9uKGEpe3ZhciBiPVwiU2hlZXQxXCI7YS5zaGVldE5hbWUmJihiPWEuc2hlZXROYW1lLnJlcGxhY2UoL1tcXFtcXF1cXCpcXC9cXFxcXFw/XFw6XS9nLFwiXCIpKTtyZXR1cm4gYn0scz1mdW5jdGlvbihhLGIpe3ZhciBkPWIubWF0Y2goL1tcXHNcXFNdezEsODE5Mn0vZyl8fFtdO2EuY2xlYXJUZXh0KCk7Zm9yKHZhciBjPTAsZT1kLmxlbmd0aDtjPGU7YysrKWEuYXBwZW5kVGV4dChkW2NdKX0sXHJcbnk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmV3bGluZT9hLm5ld2xpbmU6bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cy8pP1wiXFxyXFxuXCI6XCJcXG5cIn0sej1mdW5jdGlvbihhLGIpe2Zvcih2YXIgZD15KGIpLGM9YS5idXR0b25zLmV4cG9ydERhdGEoYi5leHBvcnRPcHRpb25zKSxlPWIuZmllbGRCb3VuZGFyeSxmPWIuZmllbGRTZXBhcmF0b3IsaD1SZWdFeHAoZSxcImdcIiksaT1iLmVzY2FwZUNoYXIhPT1wP2IuZXNjYXBlQ2hhcjpcIlxcXFxcIixqPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIlwiLGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspMDxjJiYoYis9ZiksYis9ZT9lKyhcIlwiK2FbY10pLnJlcGxhY2UoaCxpK2UpK2U6YVtjXTtyZXR1cm4gYn0sbD1iLmhlYWRlcj9qKGMuaGVhZGVyKStkOlwiXCIsbz1iLmZvb3RlciYmYy5mb290ZXI/ZCtqKGMuZm9vdGVyKTpcIlwiLG49W10sZz0wLG09Yy5ib2R5Lmxlbmd0aDtnPG07ZysrKW4ucHVzaChqKGMuYm9keVtnXSkpO3JldHVybntzdHI6bCtuLmpvaW4oZCkrXHJcbm8scm93czpuLmxlbmd0aH19LHQ9e2F2YWlsYWJsZTpmdW5jdGlvbigpe3JldHVybiBpLmhhc0ZsYXNoKCl9LGluaXQ6ZnVuY3Rpb24oYSxiLGQpe2kubW92aWVQYXRoPWcuQnV0dG9ucy5zd2ZQYXRoO3ZhciBjPW5ldyBpLkNsaWVudDtjLnNldEhhbmRDdXJzb3IoITApO2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlRG93blwiLGZ1bmN0aW9uKCl7ZC5fZnJvbUZsYXNoPSEwO2EuYnV0dG9uKGJbMF0pLnRyaWdnZXIoKTtkLl9mcm9tRmxhc2g9ITF9KTt4KGMsYik7ZC5fZmxhc2g9Y30sZGVzdHJveTpmdW5jdGlvbihhLGIsZCl7ZC5fZmxhc2guZGVzdHJveSgpfSxmaWVsZFNlcGFyYXRvcjpcIixcIixmaWVsZEJvdW5kYXJ5OidcIicsZXhwb3J0T3B0aW9uczp7fSx0aXRsZTpcIipcIixtZXNzYWdlVG9wOlwiKlwiLG1lc3NhZ2VCb3R0b206XCIqXCIsZmlsZW5hbWU6XCIqXCIsZXh0ZW5zaW9uOlwiLmNzdlwiLGhlYWRlcjohMCxmb290ZXI6ITF9LHU9XCJcIix1PVwidW5kZWZpbmVkXCI9PT10eXBlb2Ygai5YTUxTZXJpYWxpemVyP1xyXG5uZXcgZnVuY3Rpb24oKXt0aGlzLnNlcmlhbGl6ZVRvU3RyaW5nPWZ1bmN0aW9uKGEpe3JldHVybiBhLnhtbH19Om5ldyBYTUxTZXJpYWxpemVyLHEsbT17XCJfcmVscy8ucmVsc1wiOic8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJ5ZXNcIj8+PFJlbGF0aW9uc2hpcHMgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L3JlbGF0aW9uc2hpcHNcIj48UmVsYXRpb25zaGlwIElkPVwicklkMVwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL29mZmljZURvY3VtZW50XCIgVGFyZ2V0PVwieGwvd29ya2Jvb2sueG1sXCIvPjwvUmVsYXRpb25zaGlwcz4nLFwieGwvX3JlbHMvd29ya2Jvb2sueG1sLnJlbHNcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwieWVzXCI/PjxSZWxhdGlvbnNoaXBzIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzXCI+PFJlbGF0aW9uc2hpcCBJZD1cInJJZDFcIiBUeXBlPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy93b3Jrc2hlZXRcIiBUYXJnZXQ9XCJ3b3Jrc2hlZXRzL3NoZWV0MS54bWxcIi8+PFJlbGF0aW9uc2hpcCBJZD1cInJJZDJcIiBUeXBlPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9zdHlsZXNcIiBUYXJnZXQ9XCJzdHlsZXMueG1sXCIvPjwvUmVsYXRpb25zaGlwcz4nLFxyXG5cIltDb250ZW50X1R5cGVzXS54bWxcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwieWVzXCI/PjxUeXBlcyB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9wYWNrYWdlLzIwMDYvY29udGVudC10eXBlc1wiPjxEZWZhdWx0IEV4dGVuc2lvbj1cInhtbFwiIENvbnRlbnRUeXBlPVwiYXBwbGljYXRpb24veG1sXCIgLz48RGVmYXVsdCBFeHRlbnNpb249XCJyZWxzXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtcGFja2FnZS5yZWxhdGlvbnNoaXBzK3htbFwiIC8+PERlZmF1bHQgRXh0ZW5zaW9uPVwianBlZ1wiIENvbnRlbnRUeXBlPVwiaW1hZ2UvanBlZ1wiIC8+PE92ZXJyaWRlIFBhcnROYW1lPVwiL3hsL3dvcmtib29rLnhtbFwiIENvbnRlbnRUeXBlPVwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQubWFpbit4bWxcIiAvPjxPdmVycmlkZSBQYXJ0TmFtZT1cIi94bC93b3Jrc2hlZXRzL3NoZWV0MS54bWxcIiBDb250ZW50VHlwZT1cImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLndvcmtzaGVldCt4bWxcIiAvPjxPdmVycmlkZSBQYXJ0TmFtZT1cIi94bC9zdHlsZXMueG1sXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zdHlsZXMreG1sXCIgLz48L1R5cGVzPicsXHJcblwieGwvd29ya2Jvb2sueG1sXCI6Jzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgc3RhbmRhbG9uZT1cInllc1wiPz48d29ya2Jvb2sgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczpyPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwc1wiPjxmaWxlVmVyc2lvbiBhcHBOYW1lPVwieGxcIiBsYXN0RWRpdGVkPVwiNVwiIGxvd2VzdEVkaXRlZD1cIjVcIiBydXBCdWlsZD1cIjI0ODE2XCIvPjx3b3JrYm9va1ByIHNob3dJbmtBbm5vdGF0aW9uPVwiMFwiIGF1dG9Db21wcmVzc1BpY3R1cmVzPVwiMFwiLz48Ym9va1ZpZXdzPjx3b3JrYm9va1ZpZXcgeFdpbmRvdz1cIjBcIiB5V2luZG93PVwiMFwiIHdpbmRvd1dpZHRoPVwiMjU2MDBcIiB3aW5kb3dIZWlnaHQ9XCIxOTAyMFwiIHRhYlJhdGlvPVwiNTAwXCIvPjwvYm9va1ZpZXdzPjxzaGVldHM+PHNoZWV0IG5hbWU9XCJcIiBzaGVldElkPVwiMVwiIHI6aWQ9XCJySWQxXCIvPjwvc2hlZXRzPjwvd29ya2Jvb2s+JyxcclxuXCJ4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWxcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwieWVzXCI/Pjx3b3Jrc2hlZXQgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczpyPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwc1wiIHhtbG5zOm1jPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL21hcmt1cC1jb21wYXRpYmlsaXR5LzIwMDZcIiBtYzpJZ25vcmFibGU9XCJ4MTRhY1wiIHhtbG5zOngxNGFjPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9vZmZpY2Uvc3ByZWFkc2hlZXRtbC8yMDA5LzkvYWNcIj48c2hlZXREYXRhLz48bWVyZ2VDZWxscyBjb3VudD1cIjBcIi8+PC93b3Jrc2hlZXQ+JyxcInhsL3N0eWxlcy54bWxcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN0eWxlU2hlZXQgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczptYz1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9tYXJrdXAtY29tcGF0aWJpbGl0eS8yMDA2XCIgbWM6SWdub3JhYmxlPVwieDE0YWNcIiB4bWxuczp4MTRhYz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vb2ZmaWNlL3NwcmVhZHNoZWV0bWwvMjAwOS85L2FjXCI+PG51bUZtdHMgY291bnQ9XCI2XCI+PG51bUZtdCBudW1GbXRJZD1cIjE2NFwiIGZvcm1hdENvZGU9XCIjLCMjMC4wMF8tIFskJC00NUNdXCIvPjxudW1GbXQgbnVtRm10SWQ9XCIxNjVcIiBmb3JtYXRDb2RlPVwiJnF1b3Q7wqMmcXVvdDsjLCMjMC4wMFwiLz48bnVtRm10IG51bUZtdElkPVwiMTY2XCIgZm9ybWF0Q29kZT1cIlsk4oKsLTJdICMsIyMwLjAwXCIvPjxudW1GbXQgbnVtRm10SWQ9XCIxNjdcIiBmb3JtYXRDb2RlPVwiMC4wJVwiLz48bnVtRm10IG51bUZtdElkPVwiMTY4XCIgZm9ybWF0Q29kZT1cIiMsIyMwOygjLCMjMClcIi8+PG51bUZtdCBudW1GbXRJZD1cIjE2OVwiIGZvcm1hdENvZGU9XCIjLCMjMC4wMDsoIywjIzAuMDApXCIvPjwvbnVtRm10cz48Zm9udHMgY291bnQ9XCI1XCIgeDE0YWM6a25vd25Gb250cz1cIjFcIj48Zm9udD48c3ogdmFsPVwiMTFcIiAvPjxuYW1lIHZhbD1cIkNhbGlicmlcIiAvPjwvZm9udD48Zm9udD48c3ogdmFsPVwiMTFcIiAvPjxuYW1lIHZhbD1cIkNhbGlicmlcIiAvPjxjb2xvciByZ2I9XCJGRkZGRkZGRlwiIC8+PC9mb250Pjxmb250PjxzeiB2YWw9XCIxMVwiIC8+PG5hbWUgdmFsPVwiQ2FsaWJyaVwiIC8+PGIgLz48L2ZvbnQ+PGZvbnQ+PHN6IHZhbD1cIjExXCIgLz48bmFtZSB2YWw9XCJDYWxpYnJpXCIgLz48aSAvPjwvZm9udD48Zm9udD48c3ogdmFsPVwiMTFcIiAvPjxuYW1lIHZhbD1cIkNhbGlicmlcIiAvPjx1IC8+PC9mb250PjwvZm9udHM+PGZpbGxzIGNvdW50PVwiNlwiPjxmaWxsPjxwYXR0ZXJuRmlsbCBwYXR0ZXJuVHlwZT1cIm5vbmVcIiAvPjwvZmlsbD48ZmlsbC8+PGZpbGw+PHBhdHRlcm5GaWxsIHBhdHRlcm5UeXBlPVwic29saWRcIj48ZmdDb2xvciByZ2I9XCJGRkQ5RDlEOVwiIC8+PGJnQ29sb3IgaW5kZXhlZD1cIjY0XCIgLz48L3BhdHRlcm5GaWxsPjwvZmlsbD48ZmlsbD48cGF0dGVybkZpbGwgcGF0dGVyblR5cGU9XCJzb2xpZFwiPjxmZ0NvbG9yIHJnYj1cIkZGRDk5Nzk1XCIgLz48YmdDb2xvciBpbmRleGVkPVwiNjRcIiAvPjwvcGF0dGVybkZpbGw+PC9maWxsPjxmaWxsPjxwYXR0ZXJuRmlsbCBwYXR0ZXJuVHlwZT1cInNvbGlkXCI+PGZnQ29sb3IgcmdiPVwiZmZjNmVmY2VcIiAvPjxiZ0NvbG9yIGluZGV4ZWQ9XCI2NFwiIC8+PC9wYXR0ZXJuRmlsbD48L2ZpbGw+PGZpbGw+PHBhdHRlcm5GaWxsIHBhdHRlcm5UeXBlPVwic29saWRcIj48ZmdDb2xvciByZ2I9XCJmZmM2Y2ZlZlwiIC8+PGJnQ29sb3IgaW5kZXhlZD1cIjY0XCIgLz48L3BhdHRlcm5GaWxsPjwvZmlsbD48L2ZpbGxzPjxib3JkZXJzIGNvdW50PVwiMlwiPjxib3JkZXI+PGxlZnQgLz48cmlnaHQgLz48dG9wIC8+PGJvdHRvbSAvPjxkaWFnb25hbCAvPjwvYm9yZGVyPjxib3JkZXIgZGlhZ29uYWxVcD1cImZhbHNlXCIgZGlhZ29uYWxEb3duPVwiZmFsc2VcIj48bGVmdCBzdHlsZT1cInRoaW5cIj48Y29sb3IgYXV0bz1cIjFcIiAvPjwvbGVmdD48cmlnaHQgc3R5bGU9XCJ0aGluXCI+PGNvbG9yIGF1dG89XCIxXCIgLz48L3JpZ2h0Pjx0b3Agc3R5bGU9XCJ0aGluXCI+PGNvbG9yIGF1dG89XCIxXCIgLz48L3RvcD48Ym90dG9tIHN0eWxlPVwidGhpblwiPjxjb2xvciBhdXRvPVwiMVwiIC8+PC9ib3R0b20+PGRpYWdvbmFsIC8+PC9ib3JkZXI+PC9ib3JkZXJzPjxjZWxsU3R5bGVYZnMgY291bnQ9XCIxXCI+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgLz48L2NlbGxTdHlsZVhmcz48Y2VsbFhmcyBjb3VudD1cIjYxXCI+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5QWxpZ25tZW50PVwiMVwiPjxhbGlnbm1lbnQgaG9yaXpvbnRhbD1cImxlZnRcIi8+PC94Zj48eGYgbnVtRm10SWQ9XCIwXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlBbGlnbm1lbnQ9XCIxXCI+PGFsaWdubWVudCBob3Jpem9udGFsPVwiY2VudGVyXCIvPjwveGY+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5QWxpZ25tZW50PVwiMVwiPjxhbGlnbm1lbnQgaG9yaXpvbnRhbD1cInJpZ2h0XCIvPjwveGY+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5QWxpZ25tZW50PVwiMVwiPjxhbGlnbm1lbnQgaG9yaXpvbnRhbD1cImZpbGxcIi8+PC94Zj48eGYgbnVtRm10SWQ9XCIwXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlBbGlnbm1lbnQ9XCIxXCI+PGFsaWdubWVudCB0ZXh0Um90YXRpb249XCI5MFwiLz48L3hmPjx4ZiBudW1GbXRJZD1cIjBcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseUFsaWdubWVudD1cIjFcIj48YWxpZ25tZW50IHdyYXBUZXh0PVwiMVwiLz48L3hmPjx4ZiBudW1GbXRJZD1cIjlcIiAgIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5TnVtYmVyRm9ybWF0PVwiMVwiLz48eGYgbnVtRm10SWQ9XCIxNjRcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseU51bWJlckZvcm1hdD1cIjFcIi8+PHhmIG51bUZtdElkPVwiMTY1XCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCIvPjx4ZiBudW1GbXRJZD1cIjE2NlwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5TnVtYmVyRm9ybWF0PVwiMVwiLz48eGYgbnVtRm10SWQ9XCIxNjdcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseU51bWJlckZvcm1hdD1cIjFcIi8+PHhmIG51bUZtdElkPVwiMTY4XCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCIvPjx4ZiBudW1GbXRJZD1cIjE2OVwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5TnVtYmVyRm9ybWF0PVwiMVwiLz48eGYgbnVtRm10SWQ9XCIzXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCIvPjx4ZiBudW1GbXRJZD1cIjRcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseU51bWJlckZvcm1hdD1cIjFcIi8+PC9jZWxsWGZzPjxjZWxsU3R5bGVzIGNvdW50PVwiMVwiPjxjZWxsU3R5bGUgbmFtZT1cIk5vcm1hbFwiIHhmSWQ9XCIwXCIgYnVpbHRpbklkPVwiMFwiIC8+PC9jZWxsU3R5bGVzPjxkeGZzIGNvdW50PVwiMFwiIC8+PHRhYmxlU3R5bGVzIGNvdW50PVwiMFwiIGRlZmF1bHRUYWJsZVN0eWxlPVwiVGFibGVTdHlsZU1lZGl1bTlcIiBkZWZhdWx0UGl2b3RTdHlsZT1cIlBpdm90U3R5bGVNZWRpdW00XCIgLz48L3N0eWxlU2hlZXQ+J30sXHJcbkE9W3ttYXRjaDovXlxcLT9cXGQrXFwuXFxkJSQvLHN0eWxlOjYwLGZtdDpmdW5jdGlvbihhKXtyZXR1cm4gYS8xMDB9fSx7bWF0Y2g6L15cXC0/XFxkK1xcLj9cXGQqJSQvLHN0eWxlOjU2LGZtdDpmdW5jdGlvbihhKXtyZXR1cm4gYS8xMDB9fSx7bWF0Y2g6L15cXC0/XFwkW1xcZCxdKy4/XFxkKiQvLHN0eWxlOjU3fSx7bWF0Y2g6L15cXC0/wqNbXFxkLF0rLj9cXGQqJC8sc3R5bGU6NTh9LHttYXRjaDovXlxcLT/igqxbXFxkLF0rLj9cXGQqJC8sc3R5bGU6NTl9LHttYXRjaDovXlxcKFtcXGQsXStcXCkkLyxzdHlsZTo2MSxmbXQ6ZnVuY3Rpb24oYSl7cmV0dXJuLTEqYS5yZXBsYWNlKC9bXFwoXFwpXS9nLFwiXCIpfX0se21hdGNoOi9eXFwoW1xcZCxdK1xcLlxcZHsyfVxcKSQvLHN0eWxlOjYyLGZtdDpmdW5jdGlvbihhKXtyZXR1cm4tMSphLnJlcGxhY2UoL1tcXChcXCldL2csXCJcIil9fSx7bWF0Y2g6L15bXFxkLF0rJC8sc3R5bGU6NjN9LHttYXRjaDovXltcXGQsXStcXC5cXGR7Mn0kLyxzdHlsZTo2NH1dO2cuQnV0dG9ucy5zd2ZQYXRoPVwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvYnV0dG9ucy9cIitcclxuZy5CdXR0b25zLnZlcnNpb24rXCIvc3dmL2ZsYXNoRXhwb3J0LnN3ZlwiO2cuQXBpLnJlZ2lzdGVyKFwiYnV0dG9ucy5yZXNpemUoKVwiLGZ1bmN0aW9uKCl7aC5lYWNoKGkuY2xpZW50cyxmdW5jdGlvbihhLGIpe2IuZG9tRWxlbWVudCE9PXAmJmIuZG9tRWxlbWVudC5wYXJlbnROb2RlJiZiLnBvc2l0aW9uRWxlbWVudCgpfSl9KTtnLmV4dC5idXR0b25zLmNvcHlGbGFzaD1oLmV4dGVuZCh7fSx0LHtjbGFzc05hbWU6XCJidXR0b25zLWNvcHkgYnV0dG9ucy1mbGFzaFwiLHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaTE4bihcImJ1dHRvbnMuY29weVwiLFwiQ29weVwiKX0sYWN0aW9uOmZ1bmN0aW9uKGEsYixkLGMpe2lmKGMuX2Zyb21GbGFzaCl7dGhpcy5wcm9jZXNzaW5nKCEwKTt2YXIgYT1jLl9mbGFzaCxlPXooYixjKSxkPWIuYnV0dG9ucy5leHBvcnRJbmZvKGMpLGY9eShjKSxlPWUuc3RyO2QudGl0bGUmJihlPWQudGl0bGUrZitmK2UpO2QubWVzc2FnZVRvcCYmKGU9ZC5tZXNzYWdlVG9wK1xyXG5mK2YrZSk7ZC5tZXNzYWdlQm90dG9tJiYoZT1lK2YrZitkLm1lc3NhZ2VCb3R0b20pO2MuY3VzdG9taXplJiYoZT1jLmN1c3RvbWl6ZShlLGMpKTthLnNldEFjdGlvbihcImNvcHlcIik7cyhhLGUpO3RoaXMucHJvY2Vzc2luZyghMSk7Yi5idXR0b25zLmluZm8oYi5pMThuKFwiYnV0dG9ucy5jb3B5VGl0bGVcIixcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLGIuaTE4bihcImJ1dHRvbnMuY29weVN1Y2Nlc3NcIix7XzpcIkNvcGllZCAlZCByb3dzIHRvIGNsaXBib2FyZFwiLDE6XCJDb3BpZWQgMSByb3cgdG8gY2xpcGJvYXJkXCJ9LGRhdGEucm93cyksM0UzKX19LGZpZWxkU2VwYXJhdG9yOlwiXFx0XCIsZmllbGRCb3VuZGFyeTpcIlwifSk7Zy5leHQuYnV0dG9ucy5jc3ZGbGFzaD1oLmV4dGVuZCh7fSx0LHtjbGFzc05hbWU6XCJidXR0b25zLWNzdiBidXR0b25zLWZsYXNoXCIsdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gYS5pMThuKFwiYnV0dG9ucy5jc3ZcIixcIkNTVlwiKX0sYWN0aW9uOmZ1bmN0aW9uKGEsYixkLGMpe2E9Yy5fZmxhc2g7XHJcbmI9eihiLGMpO2I9Yy5jdXN0b21pemU/Yy5jdXN0b21pemUoYi5zdHIsYyk6Yi5zdHI7YS5zZXRBY3Rpb24oXCJjc3ZcIik7YS5zZXRGaWxlTmFtZShfZmlsZW5hbWUoYykpO3MoYSxiKX0sZXNjYXBlQ2hhcjonXCInfSk7Zy5leHQuYnV0dG9ucy5leGNlbEZsYXNoPWguZXh0ZW5kKHt9LHQse2NsYXNzTmFtZTpcImJ1dHRvbnMtZXhjZWwgYnV0dG9ucy1mbGFzaFwiLHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaTE4bihcImJ1dHRvbnMuZXhjZWxcIixcIkV4Y2VsXCIpfSxhY3Rpb246ZnVuY3Rpb24oYSxiLGQsYyl7dGhpcy5wcm9jZXNzaW5nKCEwKTt2YXIgYT1jLl9mbGFzaCxlPTAsZj1oLnBhcnNlWE1MKG1bXCJ4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWxcIl0pLGk9Zi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNoZWV0RGF0YVwiKVswXSxkPXtfcmVsczp7XCIucmVsc1wiOmgucGFyc2VYTUwobVtcIl9yZWxzLy5yZWxzXCJdKX0seGw6e19yZWxzOntcIndvcmtib29rLnhtbC5yZWxzXCI6aC5wYXJzZVhNTChtW1wieGwvX3JlbHMvd29ya2Jvb2sueG1sLnJlbHNcIl0pfSxcclxuXCJ3b3JrYm9vay54bWxcIjpoLnBhcnNlWE1MKG1bXCJ4bC93b3JrYm9vay54bWxcIl0pLFwic3R5bGVzLnhtbFwiOmgucGFyc2VYTUwobVtcInhsL3N0eWxlcy54bWxcIl0pLHdvcmtzaGVldHM6e1wic2hlZXQxLnhtbFwiOmZ9fSxcIltDb250ZW50X1R5cGVzXS54bWxcIjpoLnBhcnNlWE1MKG1bXCJbQ29udGVudF9UeXBlc10ueG1sXCJdKX0saz1iLmJ1dHRvbnMuZXhwb3J0RGF0YShjLmV4cG9ydE9wdGlvbnMpLGosbCxnPWZ1bmN0aW9uKGEpe2o9ZSsxO2w9byhmLFwicm93XCIse2F0dHI6e3I6an19KTtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2I8YztiKyspe3ZhciBkPXYoYikrXCJcIitqLGc9bnVsbDtpZighKG51bGw9PT1hW2JdfHxhW2JdPT09cHx8XCJcIj09PWFbYl0pKXthW2JdPWgudHJpbShhW2JdKTtmb3IodmFyIGs9MCxuPUEubGVuZ3RoO2s8bjtrKyspe3ZhciBtPUFba107aWYoYVtiXS5tYXRjaCYmIWFbYl0ubWF0Y2goL14wXFxkKy8pJiZhW2JdLm1hdGNoKG0ubWF0Y2gpKXtnPWFbYl0ucmVwbGFjZSgvW15cXGRcXC5cXC1dL2csXHJcblwiXCIpO20uZm10JiYoZz1tLmZtdChnKSk7Zz1vKGYsXCJjXCIse2F0dHI6e3I6ZCxzOm0uc3R5bGV9LGNoaWxkcmVuOltvKGYsXCJ2XCIse3RleHQ6Z30pXX0pO2JyZWFrfX1nfHwoXCJudW1iZXJcIj09PXR5cGVvZiBhW2JdfHxhW2JdLm1hdGNoJiZhW2JdLm1hdGNoKC9eLT9cXGQrKFxcLlxcZCspPyQvKSYmIWFbYl0ubWF0Y2goL14wXFxkKy8pP2c9byhmLFwiY1wiLHthdHRyOnt0OlwiblwiLHI6ZH0sY2hpbGRyZW46W28oZixcInZcIix7dGV4dDphW2JdfSldfSk6KG09IWFbYl0ucmVwbGFjZT9hW2JdOmFbYl0ucmVwbGFjZSgvW1xceDAwLVxceDA5XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4N0YtXFx4OUZdL2csXCJcIiksZz1vKGYsXCJjXCIse2F0dHI6e3Q6XCJpbmxpbmVTdHJcIixyOmR9LGNoaWxkcmVuOntyb3c6byhmLFwiaXNcIix7Y2hpbGRyZW46e3JvdzpvKGYsXCJ0XCIse3RleHQ6bX0pfX0pfX0pKSk7bC5hcHBlbmRDaGlsZChnKX19aS5hcHBlbmRDaGlsZChsKTtlKyt9O2goXCJzaGVldHMgc2hlZXRcIixkLnhsW1wid29ya2Jvb2sueG1sXCJdKS5hdHRyKFwibmFtZVwiLFxyXG5DKGMpKTtjLmN1c3RvbWl6ZURhdGEmJmMuY3VzdG9taXplRGF0YShrKTt2YXIgbj1mdW5jdGlvbihhLGIpe3ZhciBjPWgoXCJtZXJnZUNlbGxzXCIsZik7Y1swXS5hcHBlbmRDaGlsZChvKGYsXCJtZXJnZUNlbGxcIix7YXR0cjp7cmVmOlwiQVwiK2ErXCI6XCIrdihiKSthfX0pKTtjLmF0dHIoXCJjb3VudFwiLGMuYXR0cihcImNvdW50XCIpKzEpO2goXCJyb3c6ZXEoXCIrKGEtMSkrXCIpIGNcIixmKS5hdHRyKFwic1wiLFwiNTFcIil9LGI9Yi5idXR0b25zLmV4cG9ydEluZm8oYyk7Yi50aXRsZSYmKGcoW2IudGl0bGVdLGUpLG4oZSxrLmhlYWRlci5sZW5ndGgtMSkpO2IubWVzc2FnZVRvcCYmKGcoW2IubWVzc2FnZVRvcF0sZSksbihlLGsuaGVhZGVyLmxlbmd0aC0xKSk7Yy5oZWFkZXImJihnKGsuaGVhZGVyLGUpLGgoXCJyb3c6bGFzdCBjXCIsZikuYXR0cihcInNcIixcIjJcIikpO2Zvcih2YXIgcj0wLHE9ay5ib2R5Lmxlbmd0aDtyPHE7cisrKWcoay5ib2R5W3JdLGUpO2MuZm9vdGVyJiZrLmZvb3RlciYmKGcoay5mb290ZXIsXHJcbmUpLGgoXCJyb3c6bGFzdCBjXCIsZikuYXR0cihcInNcIixcIjJcIikpO2IubWVzc2FnZUJvdHRvbSYmKGcoW2IubWVzc2FnZUJvdHRvbV0sZSksbihlLGsuaGVhZGVyLmxlbmd0aC0xKSk7Zz1vKGYsXCJjb2xzXCIpO2goXCJ3b3Jrc2hlZXRcIixmKS5wcmVwZW5kKGcpO249MDtmb3Iocj1rLmhlYWRlci5sZW5ndGg7bjxyO24rKylnLmFwcGVuZENoaWxkKG8oZixcImNvbFwiLHthdHRyOnttaW46bisxLG1heDpuKzEsd2lkdGg6QihrLG4pLGN1c3RvbVdpZHRoOjF9fSkpO2MuY3VzdG9taXplJiZjLmN1c3RvbWl6ZShkKTt3KGQpO2Euc2V0QWN0aW9uKFwiZXhjZWxcIik7YS5zZXRGaWxlTmFtZShiLmZpbGVuYW1lKTthLnNldFNoZWV0RGF0YShkKTtzKGEsXCJcIik7dGhpcy5wcm9jZXNzaW5nKCExKX0sZXh0ZW5zaW9uOlwiLnhsc3hcIn0pO2cuZXh0LmJ1dHRvbnMucGRmRmxhc2g9aC5leHRlbmQoe30sdCx7Y2xhc3NOYW1lOlwiYnV0dG9ucy1wZGYgYnV0dG9ucy1mbGFzaFwiLHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaTE4bihcImJ1dHRvbnMucGRmXCIsXHJcblwiUERGXCIpfSxhY3Rpb246ZnVuY3Rpb24oYSxiLGQsYyl7dGhpcy5wcm9jZXNzaW5nKCEwKTt2YXIgYT1jLl9mbGFzaCxkPWIuYnV0dG9ucy5leHBvcnREYXRhKGMuZXhwb3J0T3B0aW9ucyksZT1iLmJ1dHRvbnMuZXhwb3J0SW5mbyhjKSxmPWIudGFibGUoKS5ub2RlKCkub2Zmc2V0V2lkdGgsZz1iLmNvbHVtbnMoYy5jb2x1bW5zKS5pbmRleGVzKCkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBiLmNvbHVtbihhKS5oZWFkZXIoKS5vZmZzZXRXaWR0aC9mfSk7YS5zZXRBY3Rpb24oXCJwZGZcIik7YS5zZXRGaWxlTmFtZShlLmZpbGVuYW1lKTtzKGEsSlNPTi5zdHJpbmdpZnkoe3RpdGxlOmUudGl0bGV8fFwiXCIsbWVzc2FnZVRvcDplLm1lc3NhZ2VUb3B8fFwiXCIsbWVzc2FnZUJvdHRvbTplLm1lc3NhZ2VCb3R0b218fFwiXCIsY29sV2lkdGg6Zy50b0FycmF5KCksb3JpZW50YXRpb246Yy5vcmllbnRhdGlvbixzaXplOmMucGFnZVNpemUsaGVhZGVyOmMuaGVhZGVyP2QuaGVhZGVyOm51bGwsZm9vdGVyOmMuZm9vdGVyP1xyXG5kLmZvb3RlcjpudWxsLGJvZHk6ZC5ib2R5fSkpO3RoaXMucHJvY2Vzc2luZyghMSl9LGV4dGVuc2lvbjpcIi5wZGZcIixvcmllbnRhdGlvbjpcInBvcnRyYWl0XCIscGFnZVNpemU6XCJBNFwiLG5ld2xpbmU6XCJcXG5cIn0pO3JldHVybiBnLkJ1dHRvbnN9KTtcclxuIl0sIm5hbWVzIjpbImgiLCJkZWZpbmUiLCJhbWQiLCJqIiwid2luZG93IiwiZG9jdW1lbnQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImwiLCJmbiIsImRhdGFUYWJsZSIsInJlcXVpcmUiLCIkIiwiQnV0dG9ucyIsImpRdWVyeSIsInAiLCJ2IiwiYSIsImIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJNYXRoIiwiZmxvb3IiLCJvIiwiZCIsImMiLCJjcmVhdGVFbGVtZW50IiwiYXR0ciIsImNoaWxkcmVuIiwiZWFjaCIsImFwcGVuZENoaWxkIiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiQiIsImhlYWRlciIsImxlbmd0aCIsImZvb3RlciIsImUiLCJmIiwiYm9keSIsInRvU3RyaW5nIiwiaW5kZXhPZiIsInNwbGl0Iiwic29ydCIsInciLCJxIiwidSIsInNlcmlhbGl6ZVRvU3RyaW5nIiwicGFyc2VYTUwiLCJtIiwiaXNQbGFpbk9iamVjdCIsImNoaWxkTm9kZXMiLCJpIiwiYXR0cmlidXRlcyIsIm5vZGVOYW1lIiwiayIsIm5vZGVWYWx1ZSIsInB1c2giLCJuYW1lIiwidmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjcmVhdGVBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic2V0QXR0cmlidXRlTm9kZSIsImciLCJ2ZXJzaW9uIiwiY2xpZW50cyIsIm1vdmllUGF0aCIsIm5leHRJZCIsImdldEVsZW1lbnRCeUlkIiwiYWRkQ2xhc3MiLCJoaWRlIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvdyIsInJlbW92ZUNsYXNzIiwiY2xhc3NOYW1lIiwiUmVnRXhwIiwiaGFzQ2xhc3MiLCJtYXRjaCIsInNldE1vdmllUGF0aCIsImRpc3BhdGNoIiwicmVjZWl2ZUV2ZW50IiwibG9nIiwiY29uc29sZSIsInJlZ2lzdGVyIiwiZ2V0RE9NT2JqZWN0UG9zaXRpb24iLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJvZmZzZXRQYXJlbnQiLCJDbGllbnQiLCJoYW5kbGVycyIsImlkIiwibW92aWVJZCIsImdsdWUiLCJwcm90b3R5cGUiLCJyZWFkeSIsIm1vdmllIiwiY2xpcFRleHQiLCJmaWxlTmFtZSIsImFjdGlvbiIsImhhbmRDdXJzb3JFbmFibGVkIiwiY3NzRWZmZWN0cyIsInNpemVkIiwic2hlZXROYW1lIiwiZG9tRWxlbWVudCIsInpJbmRleCIsInBhcnNlSW50IiwiZGl2IiwicG9zaXRpb24iLCJ0aXRsZSIsImlubmVySFRNTCIsImdldEhUTUwiLCJwb3NpdGlvbkVsZW1lbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBvc2l0aW9uIiwiZGVzdHJveSIsInJlbW92ZSIsImNsZWFyVGV4dCIsImFwcGVuZFRleHQiLCJzZXRUZXh0Iiwic2V0RmlsZU5hbWUiLCJzZXRTaGVldERhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0QWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvTG93ZXJDYXNlIiwic2V0SGFuZEN1cnNvciIsInNldENTU0VmZmVjdHMiLCJzZXRUaW1lb3V0IiwicmVjb3ZlckFjdGl2ZSIsImhhc0ZsYXNoIiwiQWN0aXZlWE9iamVjdCIsIm1pbWVUeXBlcyIsImVuYWJsZWRQbHVnaW4iLCJaZXJvQ2xpcGJvYXJkX1RhYmxlVG9vbHMiLCJ4IiwicGFyZW50cyIsIkMiLCJzIiwieSIsIm5ld2xpbmUiLCJ6IiwiYnV0dG9ucyIsImV4cG9ydERhdGEiLCJleHBvcnRPcHRpb25zIiwiZmllbGRCb3VuZGFyeSIsImZpZWxkU2VwYXJhdG9yIiwiZXNjYXBlQ2hhciIsIm4iLCJzdHIiLCJqb2luIiwicm93cyIsInQiLCJhdmFpbGFibGUiLCJpbml0Iiwic3dmUGF0aCIsIl9mcm9tRmxhc2giLCJidXR0b24iLCJ0cmlnZ2VyIiwiX2ZsYXNoIiwibWVzc2FnZVRvcCIsIm1lc3NhZ2VCb3R0b20iLCJmaWxlbmFtZSIsImV4dGVuc2lvbiIsIlhNTFNlcmlhbGl6ZXIiLCJ4bWwiLCJBIiwiZm10IiwiQXBpIiwicGFyZW50Tm9kZSIsImV4dCIsImNvcHlGbGFzaCIsImV4dGVuZCIsImkxOG4iLCJwcm9jZXNzaW5nIiwiZXhwb3J0SW5mbyIsImN1c3RvbWl6ZSIsImluZm8iLCJfIiwiZGF0YSIsImNzdkZsYXNoIiwiX2ZpbGVuYW1lIiwiZXhjZWxGbGFzaCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX3JlbHMiLCJ4bCIsIndvcmtzaGVldHMiLCJyIiwidHJpbSIsInJvdyIsImN1c3RvbWl6ZURhdGEiLCJyZWYiLCJwcmVwZW5kIiwibWluIiwibWF4IiwiY3VzdG9tV2lkdGgiLCJwZGZGbGFzaCIsInRhYmxlIiwibm9kZSIsImNvbHVtbnMiLCJpbmRleGVzIiwibWFwIiwiY29sdW1uIiwiY29sV2lkdGgiLCJ0b0FycmF5Iiwib3JpZW50YXRpb24iLCJzaXplIiwicGFnZVNpemUiXSwic291cmNlUm9vdCI6IiJ9