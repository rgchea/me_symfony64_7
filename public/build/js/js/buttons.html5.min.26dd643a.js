(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/buttons.html5.min"],{

/***/ "./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.html5.min.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.html5.min.js ***!
  \*********************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
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
(function (j) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs"), __webpack_require__(/*! datatables.net-buttons */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (k) {
    return j(k, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (j, k, l, t, s, q) {
  function x(a) {
    for (var c = ""; 0 <= a;) c = String.fromCharCode(a % 26 + 65) + c, a = Math.floor(a / 26) - 1;
    return c;
  }
  function y(a, c) {
    u === q && (u = -1 === w.serializeToString(j.parseXML(z["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
    j.each(c, function (c, b) {
      if (j.isPlainObject(b)) {
        var e = a.folder(c);
        y(e, b);
      } else {
        if (u) {
          var e = b.childNodes[0],
            f,
            g,
            n = [];
          for (f = e.attributes.length - 1; 0 <= f; f--) {
            g = e.attributes[f].nodeName;
            var h = e.attributes[f].nodeValue;
            -1 !== g.indexOf(":") && (n.push({
              name: g,
              value: h
            }), e.removeAttribute(g));
          }
          f = 0;
          for (g = n.length; f < g; f++) h = b.createAttribute(n[f].name.replace(":", "_dt_b_namespace_token_")), h.value = n[f].value, e.setAttributeNode(h);
        }
        e = w.serializeToString(b);
        u && (-1 === e.indexOf("<?xml") && (e = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + e), e = e.replace(/_dt_b_namespace_token_/g, ":"));
        e = e.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a.file(c, e);
      }
    });
  }
  function p(a, c, d) {
    var b = a.createElement(c);
    d && (d.attr && j(b).attr(d.attr), d.children && j.each(d.children, function (a, c) {
      b.appendChild(c);
    }), null !== d.text && d.text !== q && b.appendChild(a.createTextNode(d.text)));
    return b;
  }
  function J(a, c) {
    var d = a.header[c].length,
      b;
    a.footer && a.footer[c].length > d && (d = a.footer[c].length);
    for (var e = 0, f = a.body.length; e < f; e++) if (b = a.body[e][c], b = null !== b && b !== q ? b.toString() : "", -1 !== b.indexOf("\n") ? (b = b.split("\n"), b.sort(function (a, b) {
      return b.length - a.length;
    }), b = b[0].length) : b = b.length, b > d && (d = b), 40 < d) return 52;
    d *= 1.3;
    return 6 < d ? d : 6;
  }
  var m = j.fn.dataTable,
    r;
  var h = "undefined" !== typeof self && self || "undefined" !== typeof k && k || this.content;
  if ("undefined" === typeof h || "undefined" !== typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent)) r = void 0;else {
    var v = h.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      K = "download" in v,
      L = /constructor/i.test(h.HTMLElement) || h.safari,
      A = /CriOS\/[\d]+/.test(navigator.userAgent),
      M = function M(a) {
        (h.setImmediate || h.setTimeout)(function () {
          throw a;
        }, 0);
      },
      B = function B(a) {
        setTimeout(function () {
          "string" === typeof a ? (h.URL || h.webkitURL || h).revokeObjectURL(a) : a.remove();
        }, 4E4);
      },
      C = function C(a) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([String.fromCharCode(65279), a], {
          type: a.type
        }) : a;
      },
      E = function E(a, c, d) {
        d || (a = C(a));
        var b = this,
          d = "application/octet-stream" === a.type,
          e,
          f = function f() {
            for (var a = ["writestart", "progress", "write", "writeend"], a = [].concat(a), c = a.length; c--;) {
              var d = b["on" + a[c]];
              if ("function" === typeof d) try {
                d.call(b, b);
              } catch (f) {
                M(f);
              }
            }
          };
        b.readyState = b.INIT;
        if (K) e = (h.URL || h.webkitURL || h).createObjectURL(a), setTimeout(function () {
          v.href = e;
          v.download = c;
          var a = new MouseEvent("click");
          v.dispatchEvent(a);
          f();
          B(e);
          b.readyState = b.DONE;
        });else if ((A || d && L) && h.FileReader) {
          var g = new FileReader();
          g.onloadend = function () {
            var a = A ? g.result : g.result.replace(/^data:[^;]*;/, "data:attachment/file;");
            h.open(a, "_blank") || (h.location.href = a);
            b.readyState = b.DONE;
            f();
          };
          g.readAsDataURL(a);
          b.readyState = b.INIT;
        } else e || (e = (h.URL || h.webkitURL || h).createObjectURL(a)), d ? h.location.href = e : h.open(e, "_blank") || (h.location.href = e), b.readyState = b.DONE, f(), B(e);
      },
      i = E.prototype;
    "undefined" !== typeof navigator && navigator.msSaveOrOpenBlob ? r = function r(a, c, d) {
      c = c || a.name || "download";
      d || (a = C(a));
      return navigator.msSaveOrOpenBlob(a, c);
    } : (i.abort = function () {}, i.readyState = i.INIT = 0, i.WRITING = 1, i.DONE = 2, i.error = i.onwritestart = i.onprogress = i.onwrite = i.onabort = i.onerror = i.onwriteend = null, r = function r(a, c, d) {
      return new E(a, c || a.name || "download", d);
    });
  }
  m.fileSave = r;
  var N = function N(a) {
      var c = "Sheet1";
      a.sheetName && (c = a.sheetName.replace(/[\[\]\*\/\\\?\:]/g, ""));
      return c;
    },
    F = function F(a) {
      return a.newline ? a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n";
    },
    G = function G(a, c) {
      for (var d = F(c), b = a.buttons.exportData(c.exportOptions), e = c.fieldBoundary, f = c.fieldSeparator, g = RegExp(e, "g"), n = c.escapeChar !== q ? c.escapeChar : "\\", j = function j(a) {
          for (var b = "", c = 0, d = a.length; c < d; c++) 0 < c && (b += f), b += e ? e + ("" + a[c]).replace(g, n + e) + e : a[c];
          return b;
        }, h = c.header ? j(b.header) + d : "", k = c.footer && b.footer ? d + j(b.footer) : "", l = [], o = 0, i = b.body.length; o < i; o++) l.push(j(b.body[o]));
      return {
        str: h + l.join(d) + k,
        rows: l.length
      };
    },
    H = function H() {
      if (!(-1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("Opera"))) return !1;
      var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
      return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1;
    };
  try {
    var w = new XMLSerializer(),
      u;
  } catch (O) {}
  var z = {
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',
      "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
    },
    I = [{
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
      match: /^\-?\d+$/,
      style: 65
    }, {
      match: /^\-?\d+\.\d{2}$/,
      style: 66
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
      match: /^\-?[\d,]+$/,
      style: 63
    }, {
      match: /^\-?[\d,]+\.\d{2}$/,
      style: 64
    }];
  m.ext.buttons.copyHtml5 = {
    className: "buttons-copy buttons-html5",
    text: function text(a) {
      return a.i18n("buttons.copy", "Copy");
    },
    action: function action(a, c, d, b) {
      this.processing(!0);
      var e = this,
        a = G(c, b),
        f = c.buttons.exportInfo(b),
        g = F(b),
        n = a.str,
        d = j("<div/>").css({
          height: 1,
          width: 1,
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0
        });
      f.title && (n = f.title + g + g + n);
      f.messageTop && (n = f.messageTop + g + g + n);
      f.messageBottom && (n = n + g + g + f.messageBottom);
      b.customize && (n = b.customize(n, b));
      b = j("<textarea readonly/>").val(n).appendTo(d);
      if (l.queryCommandSupported("copy")) {
        d.appendTo(c.table().container());
        b[0].focus();
        b[0].select();
        try {
          var h = l.execCommand("copy");
          d.remove();
          if (h) {
            c.buttons.info(c.i18n("buttons.copyTitle", "Copy to clipboard"), c.i18n("buttons.copySuccess", {
              1: "Copied one row to clipboard",
              _: "Copied %d rows to clipboard"
            }, a.rows), 2E3);
            this.processing(!1);
            return;
          }
        } catch (k) {}
      }
      h = j("<span>" + c.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") + "</span>").append(d);
      c.buttons.info(c.i18n("buttons.copyTitle", "Copy to clipboard"), h, 0);
      b[0].focus();
      b[0].select();
      var D = j(h).closest(".dt-button-info"),
        i = function i() {
          D.off("click.buttons-copy");
          j(l).off(".buttons-copy");
          c.buttons.info(!1);
        };
      D.on("click.buttons-copy", i);
      j(l).on("keydown.buttons-copy", function (a) {
        27 === a.keyCode && (i(), e.processing(!1));
      }).on("copy.buttons-copy cut.buttons-copy", function () {
        i();
        e.processing(!1);
      });
    },
    exportOptions: {},
    fieldSeparator: "\t",
    fieldBoundary: "",
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*"
  };
  m.ext.buttons.csvHtml5 = {
    bom: !1,
    className: "buttons-csv buttons-html5",
    available: function available() {
      return k.FileReader !== q && k.Blob;
    },
    text: function text(a) {
      return a.i18n("buttons.csv", "CSV");
    },
    action: function action(a, c, d, b) {
      this.processing(!0);
      a = G(c, b).str;
      c = c.buttons.exportInfo(b);
      d = b.charset;
      b.customize && (a = b.customize(a, b));
      !1 !== d ? (d || (d = l.characterSet || l.charset), d && (d = ";charset=" + d)) : d = "";
      b.bom && (a = "﻿" + a);
      r(new Blob([a], {
        type: "text/csv" + d
      }), c.filename, !0);
      this.processing(!1);
    },
    filename: "*",
    extension: ".csv",
    exportOptions: {},
    fieldSeparator: ",",
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: !0,
    footer: !1
  };
  m.ext.buttons.excelHtml5 = {
    className: "buttons-excel buttons-html5",
    available: function available() {
      return k.FileReader !== q && (t || k.JSZip) !== q && !H() && w;
    },
    text: function text(a) {
      return a.i18n("buttons.excel", "Excel");
    },
    action: function action(a, c, d, b) {
      this.processing(!0);
      var e = this,
        f = 0,
        a = function a(_a) {
          return j.parseXML(z[_a]);
        },
        g = a("xl/worksheets/sheet1.xml"),
        n = g.getElementsByTagName("sheetData")[0],
        a = {
          _rels: {
            ".rels": a("_rels/.rels")
          },
          xl: {
            _rels: {
              "workbook.xml.rels": a("xl/_rels/workbook.xml.rels")
            },
            "workbook.xml": a("xl/workbook.xml"),
            "styles.xml": a("xl/styles.xml"),
            worksheets: {
              "sheet1.xml": g
            }
          },
          "[Content_Types].xml": a("[Content_Types].xml")
        },
        d = c.buttons.exportData(b.exportOptions),
        h,
        l,
        i = function i(a) {
          h = f + 1;
          l = p(g, "row", {
            attr: {
              r: h
            }
          });
          for (var b = 0, c = a.length; b < c; b++) {
            var d = x(b) + "" + h,
              e = null;
            if (!(null === a[b] || a[b] === q || "" === a[b])) {
              a[b] = j.trim(a[b]);
              for (var i = 0, k = I.length; i < k; i++) {
                var m = I[i];
                if (a[b].match && !a[b].match(/^0\d+/) && a[b].match(m.match)) {
                  e = a[b].replace(/[^\d\.\-]/g, "");
                  m.fmt && (e = m.fmt(e));
                  e = p(g, "c", {
                    attr: {
                      r: d,
                      s: m.style
                    },
                    children: [p(g, "v", {
                      text: e
                    })]
                  });
                  break;
                }
              }
              e || ("number" === typeof a[b] || a[b].match && a[b].match(/^-?\d+(\.\d+)?$/) && !a[b].match(/^0\d+/) ? e = p(g, "c", {
                attr: {
                  t: "n",
                  r: d
                },
                children: [p(g, "v", {
                  text: a[b]
                })]
              }) : (m = !a[b].replace ? a[b] : a[b].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, ""), e = p(g, "c", {
                attr: {
                  t: "inlineStr",
                  r: d
                },
                children: {
                  row: p(g, "is", {
                    children: {
                      row: p(g, "t", {
                        text: m
                      })
                    }
                  })
                }
              })));
              l.appendChild(e);
            }
          }
          n.appendChild(l);
          f++;
        };
      j("sheets sheet", a.xl["workbook.xml"]).attr("name", N(b));
      b.customizeData && b.customizeData(d);
      var m = function m(a, b) {
          var c = j("mergeCells", g);
          c[0].appendChild(p(g, "mergeCell", {
            attr: {
              ref: "A" + a + ":" + x(b) + a
            }
          }));
          c.attr("count", c.attr("count") + 1);
          j("row:eq(" + (a - 1) + ") c", g).attr("s", "51");
        },
        o = c.buttons.exportInfo(b);
      o.title && (i([o.title], f), m(f, d.header.length - 1));
      o.messageTop && (i([o.messageTop], f), m(f, d.header.length - 1));
      b.header && (i(d.header, f), j("row:last c", g).attr("s", "2"));
      for (var c = 0, s = d.body.length; c < s; c++) i(d.body[c], f);
      b.footer && d.footer && (i(d.footer, f), j("row:last c", g).attr("s", "2"));
      o.messageBottom && (i([o.messageBottom], f), m(f, d.header.length - 1));
      c = p(g, "cols");
      j("worksheet", g).prepend(c);
      i = 0;
      for (m = d.header.length; i < m; i++) c.appendChild(p(g, "col", {
        attr: {
          min: i + 1,
          max: i + 1,
          width: J(d, i),
          customWidth: 1
        }
      }));
      b.customize && b.customize(a);
      b = new (t || k.JSZip)();
      d = {
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      };
      y(b, a);
      b.generateAsync ? b.generateAsync(d).then(function (a) {
        r(a, o.filename);
        e.processing(false);
      }) : (r(b.generate(d), o.filename), this.processing(!1));
    },
    filename: "*",
    extension: ".xlsx",
    exportOptions: {},
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*"
  };
  m.ext.buttons.pdfHtml5 = {
    className: "buttons-pdf buttons-html5",
    available: function available() {
      return k.FileReader !== q && (s || k.pdfMake);
    },
    text: function text(a) {
      return a.i18n("buttons.pdf", "PDF");
    },
    action: function action(a, c, d, b) {
      this.processing(!0);
      var e = this,
        a = c.buttons.exportData(b.exportOptions),
        f = c.buttons.exportInfo(b),
        c = [];
      b.header && c.push(j.map(a.header, function (a) {
        return {
          text: "string" === typeof a ? a : a + "",
          style: "tableHeader"
        };
      }));
      for (var g = 0, d = a.body.length; g < d; g++) c.push(j.map(a.body[g], function (a) {
        return {
          text: "string" === typeof a ? a : a + "",
          style: g % 2 ? "tableBodyEven" : "tableBodyOdd"
        };
      }));
      b.footer && a.footer && c.push(j.map(a.footer, function (a) {
        return {
          text: "string" === typeof a ? a : a + "",
          style: "tableFooter"
        };
      }));
      c = {
        pageSize: b.pageSize,
        pageOrientation: b.orientation,
        content: [{
          table: {
            headerRows: 1,
            body: c
          },
          layout: "noBorders"
        }],
        styles: {
          tableHeader: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
            alignment: "center"
          },
          tableBodyEven: {},
          tableBodyOdd: {
            fillColor: "#f3f3f3"
          },
          tableFooter: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154"
          },
          title: {
            alignment: "center",
            fontSize: 15
          },
          message: {}
        },
        defaultStyle: {
          fontSize: 10
        }
      };
      f.messageTop && c.content.unshift({
        text: f.messageTop,
        style: "message",
        margin: [0, 0, 0, 12]
      });
      f.messageBottom && c.content.push({
        text: f.messageBottom,
        style: "message",
        margin: [0, 0, 0, 12]
      });
      f.title && c.content.unshift({
        text: f.title,
        style: "title",
        margin: [0, 0, 0, 12]
      });
      b.customize && b.customize(c, b);
      c = (s || k.pdfMake).createPdf(c);
      "open" === b.download && !H() ? (c.open(), this.processing(!1)) : c.getBuffer(function (a) {
        a = new Blob([a], {
          type: "application/pdf"
        });
        r(a, f.filename);
        e.processing(!1);
      });
    },
    title: "*",
    filename: "*",
    extension: ".pdf",
    exportOptions: {},
    orientation: "portrait",
    pageSize: "A4",
    header: !0,
    footer: !1,
    messageTop: "*",
    messageBottom: "*",
    customize: null,
    download: "download"
  };
  return m.Buttons;
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_regexp_constructor_js-node_modules_core-js_modules_es-de7eec","vendors-node_modules_datatables_net_js_jquery_dataTables_mjs","vendors-node_modules_datatables_net-buttons_js_dataTables_buttons_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-1e5860"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.html5.min.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFDLElBQUk7SUFBQ2xKLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFBQ0MsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUFDa0csVUFBVSxFQUFDLEdBQUc7SUFBQ0MsYUFBYSxFQUFDLEdBQUc7SUFBQ0MsU0FBUyxFQUFDLElBQUk7SUFBQy9ELFFBQVEsRUFBQztFQUFVLENBQUM7RUFBQyxPQUFPaEMsQ0FBQyxDQUFDdEQsT0FBTztBQUFBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9kYXRhdGFibGVzL2V4dHJhcy9UYWJsZVRvb2xzL0J1dHRvbnMtMS40LjIvanMvYnV0dG9ucy5odG1sNS5taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKGope1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiLFwiZGF0YXRhYmxlcy5uZXRcIixcImRhdGF0YWJsZXMubmV0LWJ1dHRvbnNcIl0sZnVuY3Rpb24oayl7cmV0dXJuIGooayx3aW5kb3csZG9jdW1lbnQpfSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGssbCx0LHMpe2t8fChrPXdpbmRvdyk7aWYoIWx8fCFsLmZuLmRhdGFUYWJsZSlsPXJlcXVpcmUoXCJkYXRhdGFibGVzLm5ldFwiKShrLGwpLiQ7bC5mbi5kYXRhVGFibGUuQnV0dG9uc3x8cmVxdWlyZShcImRhdGF0YWJsZXMubmV0LWJ1dHRvbnNcIikoayxsKTtyZXR1cm4gaihsLGssay5kb2N1bWVudCx0LHMpfTpqKGpRdWVyeSx3aW5kb3csZG9jdW1lbnQpfSkoZnVuY3Rpb24oaixrLGwsdCxzLHEpe2Z1bmN0aW9uIHgoYSl7Zm9yKHZhciBjPVwiXCI7MDw9YTspYz1TdHJpbmcuZnJvbUNoYXJDb2RlKGElMjYrNjUpK2MsYT1NYXRoLmZsb29yKGEvXHJcbjI2KS0xO3JldHVybiBjfWZ1bmN0aW9uIHkoYSxjKXt1PT09cSYmKHU9LTE9PT13LnNlcmlhbGl6ZVRvU3RyaW5nKGoucGFyc2VYTUwoeltcInhsL3dvcmtzaGVldHMvc2hlZXQxLnhtbFwiXSkpLmluZGV4T2YoXCJ4bWxuczpyXCIpKTtqLmVhY2goYyxmdW5jdGlvbihjLGIpe2lmKGouaXNQbGFpbk9iamVjdChiKSl7dmFyIGU9YS5mb2xkZXIoYyk7eShlLGIpfWVsc2V7aWYodSl7dmFyIGU9Yi5jaGlsZE5vZGVzWzBdLGYsZyxuPVtdO2ZvcihmPWUuYXR0cmlidXRlcy5sZW5ndGgtMTswPD1mO2YtLSl7Zz1lLmF0dHJpYnV0ZXNbZl0ubm9kZU5hbWU7dmFyIGg9ZS5hdHRyaWJ1dGVzW2ZdLm5vZGVWYWx1ZTstMSE9PWcuaW5kZXhPZihcIjpcIikmJihuLnB1c2goe25hbWU6Zyx2YWx1ZTpofSksZS5yZW1vdmVBdHRyaWJ1dGUoZykpfWY9MDtmb3IoZz1uLmxlbmd0aDtmPGc7ZisrKWg9Yi5jcmVhdGVBdHRyaWJ1dGUobltmXS5uYW1lLnJlcGxhY2UoXCI6XCIsXCJfZHRfYl9uYW1lc3BhY2VfdG9rZW5fXCIpKSxcclxuaC52YWx1ZT1uW2ZdLnZhbHVlLGUuc2V0QXR0cmlidXRlTm9kZShoKX1lPXcuc2VyaWFsaXplVG9TdHJpbmcoYik7dSYmKC0xPT09ZS5pbmRleE9mKFwiPD94bWxcIikmJihlPSc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJ5ZXNcIj8+JytlKSxlPWUucmVwbGFjZSgvX2R0X2JfbmFtZXNwYWNlX3Rva2VuXy9nLFwiOlwiKSk7ZT1lLnJlcGxhY2UoLzwoW148Pl0qPykgeG1sbnM9XCJcIihbXjw+XSo/KT4vZyxcIjwkMSAkMj5cIik7YS5maWxlKGMsZSl9fSl9ZnVuY3Rpb24gcChhLGMsZCl7dmFyIGI9YS5jcmVhdGVFbGVtZW50KGMpO2QmJihkLmF0dHImJmooYikuYXR0cihkLmF0dHIpLGQuY2hpbGRyZW4mJmouZWFjaChkLmNoaWxkcmVuLGZ1bmN0aW9uKGEsYyl7Yi5hcHBlbmRDaGlsZChjKX0pLG51bGwhPT1kLnRleHQmJmQudGV4dCE9PXEmJmIuYXBwZW5kQ2hpbGQoYS5jcmVhdGVUZXh0Tm9kZShkLnRleHQpKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gSihhLGMpe3ZhciBkPVxyXG5hLmhlYWRlcltjXS5sZW5ndGgsYjthLmZvb3RlciYmYS5mb290ZXJbY10ubGVuZ3RoPmQmJihkPWEuZm9vdGVyW2NdLmxlbmd0aCk7Zm9yKHZhciBlPTAsZj1hLmJvZHkubGVuZ3RoO2U8ZjtlKyspaWYoYj1hLmJvZHlbZV1bY10sYj1udWxsIT09YiYmYiE9PXE/Yi50b1N0cmluZygpOlwiXCIsLTEhPT1iLmluZGV4T2YoXCJcXG5cIik/KGI9Yi5zcGxpdChcIlxcblwiKSxiLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5sZW5ndGgtYS5sZW5ndGh9KSxiPWJbMF0ubGVuZ3RoKTpiPWIubGVuZ3RoLGI+ZCYmKGQ9YiksNDA8ZClyZXR1cm4gNTI7ZCo9MS4zO3JldHVybiA2PGQ/ZDo2fXZhciBtPWouZm4uZGF0YVRhYmxlLHI7dmFyIGg9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBzZWxmJiZzZWxmfHxcInVuZGVmaW5lZFwiIT09dHlwZW9mIGsmJmt8fHRoaXMuY29udGVudDtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGh8fFwidW5kZWZpbmVkXCIhPT10eXBlb2YgbmF2aWdhdG9yJiYvTVNJRSBbMS05XVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSlyPVxyXG52b2lkIDA7ZWxzZXt2YXIgdj1oLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImFcIiksSz1cImRvd25sb2FkXCJpbiB2LEw9L2NvbnN0cnVjdG9yL2kudGVzdChoLkhUTUxFbGVtZW50KXx8aC5zYWZhcmksQT0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksTT1mdW5jdGlvbihhKXsoaC5zZXRJbW1lZGlhdGV8fGguc2V0VGltZW91dCkoZnVuY3Rpb24oKXt0aHJvdyBhO30sMCl9LEI9ZnVuY3Rpb24oYSl7c2V0VGltZW91dChmdW5jdGlvbigpe1wic3RyaW5nXCI9PT10eXBlb2YgYT8oaC5VUkx8fGgud2Via2l0VVJMfHxoKS5yZXZva2VPYmplY3RVUkwoYSk6YS5yZW1vdmUoKX0sNEU0KX0sQz1mdW5jdGlvbihhKXtyZXR1cm4vXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1Mjc5KSxcclxuYV0se3R5cGU6YS50eXBlfSk6YX0sRT1mdW5jdGlvbihhLGMsZCl7ZHx8KGE9QyhhKSk7dmFyIGI9dGhpcyxkPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsZSxmPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtcIndyaXRlc3RhcnRcIixcInByb2dyZXNzXCIsXCJ3cml0ZVwiLFwid3JpdGVlbmRcIl0sYT1bXS5jb25jYXQoYSksYz1hLmxlbmd0aDtjLS07KXt2YXIgZD1iW1wib25cIithW2NdXTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl0cnl7ZC5jYWxsKGIsYil9Y2F0Y2goZil7TShmKX19fTtiLnJlYWR5U3RhdGU9Yi5JTklUO2lmKEspZT0oaC5VUkx8fGgud2Via2l0VVJMfHxoKS5jcmVhdGVPYmplY3RVUkwoYSksc2V0VGltZW91dChmdW5jdGlvbigpe3YuaHJlZj1lO3YuZG93bmxvYWQ9Yzt2YXIgYT1uZXcgTW91c2VFdmVudChcImNsaWNrXCIpO3YuZGlzcGF0Y2hFdmVudChhKTtmKCk7QihlKTtiLnJlYWR5U3RhdGU9Yi5ET05FfSk7ZWxzZSBpZigoQXx8ZCYmTCkmJmguRmlsZVJlYWRlcil7dmFyIGc9XHJcbm5ldyBGaWxlUmVhZGVyO2cub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9QT9nLnJlc3VsdDpnLnJlc3VsdC5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpO2gub3BlbihhLFwiX2JsYW5rXCIpfHwoaC5sb2NhdGlvbi5ocmVmPWEpO2IucmVhZHlTdGF0ZT1iLkRPTkU7ZigpfTtnLnJlYWRBc0RhdGFVUkwoYSk7Yi5yZWFkeVN0YXRlPWIuSU5JVH1lbHNlIGV8fChlPShoLlVSTHx8aC53ZWJraXRVUkx8fGgpLmNyZWF0ZU9iamVjdFVSTChhKSksZD9oLmxvY2F0aW9uLmhyZWY9ZTpoLm9wZW4oZSxcIl9ibGFua1wiKXx8KGgubG9jYXRpb24uaHJlZj1lKSxiLnJlYWR5U3RhdGU9Yi5ET05FLGYoKSxCKGUpfSxpPUUucHJvdG90eXBlO1widW5kZWZpbmVkXCIhPT10eXBlb2YgbmF2aWdhdG9yJiZuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYj9yPWZ1bmN0aW9uKGEsYyxkKXtjPWN8fGEubmFtZXx8XCJkb3dubG9hZFwiO2R8fChhPUMoYSkpO3JldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihhLFxyXG5jKX06KGkuYWJvcnQ9ZnVuY3Rpb24oKXt9LGkucmVhZHlTdGF0ZT1pLklOSVQ9MCxpLldSSVRJTkc9MSxpLkRPTkU9MixpLmVycm9yPWkub253cml0ZXN0YXJ0PWkub25wcm9ncmVzcz1pLm9ud3JpdGU9aS5vbmFib3J0PWkub25lcnJvcj1pLm9ud3JpdGVlbmQ9bnVsbCxyPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gbmV3IEUoYSxjfHxhLm5hbWV8fFwiZG93bmxvYWRcIixkKX0pfW0uZmlsZVNhdmU9cjt2YXIgTj1mdW5jdGlvbihhKXt2YXIgYz1cIlNoZWV0MVwiO2Euc2hlZXROYW1lJiYoYz1hLnNoZWV0TmFtZS5yZXBsYWNlKC9bXFxbXFxdXFwqXFwvXFxcXFxcP1xcOl0vZyxcIlwiKSk7cmV0dXJuIGN9LEY9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmV3bGluZT9hLm5ld2xpbmU6bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cy8pP1wiXFxyXFxuXCI6XCJcXG5cIn0sRz1mdW5jdGlvbihhLGMpe2Zvcih2YXIgZD1GKGMpLGI9YS5idXR0b25zLmV4cG9ydERhdGEoYy5leHBvcnRPcHRpb25zKSxlPWMuZmllbGRCb3VuZGFyeSxcclxuZj1jLmZpZWxkU2VwYXJhdG9yLGc9UmVnRXhwKGUsXCJnXCIpLG49Yy5lc2NhcGVDaGFyIT09cT9jLmVzY2FwZUNoYXI6XCJcXFxcXCIsaj1mdW5jdGlvbihhKXtmb3IodmFyIGI9XCJcIixjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKTA8YyYmKGIrPWYpLGIrPWU/ZSsoXCJcIithW2NdKS5yZXBsYWNlKGcsbitlKStlOmFbY107cmV0dXJuIGJ9LGg9Yy5oZWFkZXI/aihiLmhlYWRlcikrZDpcIlwiLGs9Yy5mb290ZXImJmIuZm9vdGVyP2QraihiLmZvb3Rlcik6XCJcIixsPVtdLG89MCxpPWIuYm9keS5sZW5ndGg7bzxpO28rKylsLnB1c2goaihiLmJvZHlbb10pKTtyZXR1cm57c3RyOmgrbC5qb2luKGQpK2sscm93czpsLmxlbmd0aH19LEg9ZnVuY3Rpb24oKXtpZighKC0xIT09bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpJiYtMT09PW5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSYmLTE9PT1uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPcGVyYVwiKSkpcmV0dXJuITE7XHJcbnZhciBhPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvKFxcZCtcXC5cXGQrKS8pO3JldHVybiBhJiYxPGEubGVuZ3RoJiY2MDMuMT4xKmFbMV0/ITA6ITF9O3RyeXt2YXIgdz1uZXcgWE1MU2VyaWFsaXplcix1fWNhdGNoKE8pe312YXIgej17XCJfcmVscy8ucmVsc1wiOic8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJ5ZXNcIj8+PFJlbGF0aW9uc2hpcHMgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L3JlbGF0aW9uc2hpcHNcIj48UmVsYXRpb25zaGlwIElkPVwicklkMVwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL29mZmljZURvY3VtZW50XCIgVGFyZ2V0PVwieGwvd29ya2Jvb2sueG1sXCIvPjwvUmVsYXRpb25zaGlwcz4nLFwieGwvX3JlbHMvd29ya2Jvb2sueG1sLnJlbHNcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwieWVzXCI/PjxSZWxhdGlvbnNoaXBzIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzXCI+PFJlbGF0aW9uc2hpcCBJZD1cInJJZDFcIiBUeXBlPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy93b3Jrc2hlZXRcIiBUYXJnZXQ9XCJ3b3Jrc2hlZXRzL3NoZWV0MS54bWxcIi8+PFJlbGF0aW9uc2hpcCBJZD1cInJJZDJcIiBUeXBlPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9zdHlsZXNcIiBUYXJnZXQ9XCJzdHlsZXMueG1sXCIvPjwvUmVsYXRpb25zaGlwcz4nLFxyXG5cIltDb250ZW50X1R5cGVzXS54bWxcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwieWVzXCI/PjxUeXBlcyB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9wYWNrYWdlLzIwMDYvY29udGVudC10eXBlc1wiPjxEZWZhdWx0IEV4dGVuc2lvbj1cInhtbFwiIENvbnRlbnRUeXBlPVwiYXBwbGljYXRpb24veG1sXCIgLz48RGVmYXVsdCBFeHRlbnNpb249XCJyZWxzXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtcGFja2FnZS5yZWxhdGlvbnNoaXBzK3htbFwiIC8+PERlZmF1bHQgRXh0ZW5zaW9uPVwianBlZ1wiIENvbnRlbnRUeXBlPVwiaW1hZ2UvanBlZ1wiIC8+PE92ZXJyaWRlIFBhcnROYW1lPVwiL3hsL3dvcmtib29rLnhtbFwiIENvbnRlbnRUeXBlPVwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQubWFpbit4bWxcIiAvPjxPdmVycmlkZSBQYXJ0TmFtZT1cIi94bC93b3Jrc2hlZXRzL3NoZWV0MS54bWxcIiBDb250ZW50VHlwZT1cImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLndvcmtzaGVldCt4bWxcIiAvPjxPdmVycmlkZSBQYXJ0TmFtZT1cIi94bC9zdHlsZXMueG1sXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zdHlsZXMreG1sXCIgLz48L1R5cGVzPicsXHJcblwieGwvd29ya2Jvb2sueG1sXCI6Jzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgc3RhbmRhbG9uZT1cInllc1wiPz48d29ya2Jvb2sgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczpyPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwc1wiPjxmaWxlVmVyc2lvbiBhcHBOYW1lPVwieGxcIiBsYXN0RWRpdGVkPVwiNVwiIGxvd2VzdEVkaXRlZD1cIjVcIiBydXBCdWlsZD1cIjI0ODE2XCIvPjx3b3JrYm9va1ByIHNob3dJbmtBbm5vdGF0aW9uPVwiMFwiIGF1dG9Db21wcmVzc1BpY3R1cmVzPVwiMFwiLz48Ym9va1ZpZXdzPjx3b3JrYm9va1ZpZXcgeFdpbmRvdz1cIjBcIiB5V2luZG93PVwiMFwiIHdpbmRvd1dpZHRoPVwiMjU2MDBcIiB3aW5kb3dIZWlnaHQ9XCIxOTAyMFwiIHRhYlJhdGlvPVwiNTAwXCIvPjwvYm9va1ZpZXdzPjxzaGVldHM+PHNoZWV0IG5hbWU9XCJcIiBzaGVldElkPVwiMVwiIHI6aWQ9XCJySWQxXCIvPjwvc2hlZXRzPjwvd29ya2Jvb2s+JyxcclxuXCJ4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWxcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwieWVzXCI/Pjx3b3Jrc2hlZXQgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczpyPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwc1wiIHhtbG5zOm1jPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL21hcmt1cC1jb21wYXRpYmlsaXR5LzIwMDZcIiBtYzpJZ25vcmFibGU9XCJ4MTRhY1wiIHhtbG5zOngxNGFjPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9vZmZpY2Uvc3ByZWFkc2hlZXRtbC8yMDA5LzkvYWNcIj48c2hlZXREYXRhLz48bWVyZ2VDZWxscyBjb3VudD1cIjBcIi8+PC93b3Jrc2hlZXQ+JyxcInhsL3N0eWxlcy54bWxcIjonPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN0eWxlU2hlZXQgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczptYz1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9tYXJrdXAtY29tcGF0aWJpbGl0eS8yMDA2XCIgbWM6SWdub3JhYmxlPVwieDE0YWNcIiB4bWxuczp4MTRhYz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vb2ZmaWNlL3NwcmVhZHNoZWV0bWwvMjAwOS85L2FjXCI+PG51bUZtdHMgY291bnQ9XCI2XCI+PG51bUZtdCBudW1GbXRJZD1cIjE2NFwiIGZvcm1hdENvZGU9XCIjLCMjMC4wMF8tIFskJC00NUNdXCIvPjxudW1GbXQgbnVtRm10SWQ9XCIxNjVcIiBmb3JtYXRDb2RlPVwiJnF1b3Q7wqMmcXVvdDsjLCMjMC4wMFwiLz48bnVtRm10IG51bUZtdElkPVwiMTY2XCIgZm9ybWF0Q29kZT1cIlsk4oKsLTJdICMsIyMwLjAwXCIvPjxudW1GbXQgbnVtRm10SWQ9XCIxNjdcIiBmb3JtYXRDb2RlPVwiMC4wJVwiLz48bnVtRm10IG51bUZtdElkPVwiMTY4XCIgZm9ybWF0Q29kZT1cIiMsIyMwOygjLCMjMClcIi8+PG51bUZtdCBudW1GbXRJZD1cIjE2OVwiIGZvcm1hdENvZGU9XCIjLCMjMC4wMDsoIywjIzAuMDApXCIvPjwvbnVtRm10cz48Zm9udHMgY291bnQ9XCI1XCIgeDE0YWM6a25vd25Gb250cz1cIjFcIj48Zm9udD48c3ogdmFsPVwiMTFcIiAvPjxuYW1lIHZhbD1cIkNhbGlicmlcIiAvPjwvZm9udD48Zm9udD48c3ogdmFsPVwiMTFcIiAvPjxuYW1lIHZhbD1cIkNhbGlicmlcIiAvPjxjb2xvciByZ2I9XCJGRkZGRkZGRlwiIC8+PC9mb250Pjxmb250PjxzeiB2YWw9XCIxMVwiIC8+PG5hbWUgdmFsPVwiQ2FsaWJyaVwiIC8+PGIgLz48L2ZvbnQ+PGZvbnQ+PHN6IHZhbD1cIjExXCIgLz48bmFtZSB2YWw9XCJDYWxpYnJpXCIgLz48aSAvPjwvZm9udD48Zm9udD48c3ogdmFsPVwiMTFcIiAvPjxuYW1lIHZhbD1cIkNhbGlicmlcIiAvPjx1IC8+PC9mb250PjwvZm9udHM+PGZpbGxzIGNvdW50PVwiNlwiPjxmaWxsPjxwYXR0ZXJuRmlsbCBwYXR0ZXJuVHlwZT1cIm5vbmVcIiAvPjwvZmlsbD48ZmlsbC8+PGZpbGw+PHBhdHRlcm5GaWxsIHBhdHRlcm5UeXBlPVwic29saWRcIj48ZmdDb2xvciByZ2I9XCJGRkQ5RDlEOVwiIC8+PGJnQ29sb3IgaW5kZXhlZD1cIjY0XCIgLz48L3BhdHRlcm5GaWxsPjwvZmlsbD48ZmlsbD48cGF0dGVybkZpbGwgcGF0dGVyblR5cGU9XCJzb2xpZFwiPjxmZ0NvbG9yIHJnYj1cIkZGRDk5Nzk1XCIgLz48YmdDb2xvciBpbmRleGVkPVwiNjRcIiAvPjwvcGF0dGVybkZpbGw+PC9maWxsPjxmaWxsPjxwYXR0ZXJuRmlsbCBwYXR0ZXJuVHlwZT1cInNvbGlkXCI+PGZnQ29sb3IgcmdiPVwiZmZjNmVmY2VcIiAvPjxiZ0NvbG9yIGluZGV4ZWQ9XCI2NFwiIC8+PC9wYXR0ZXJuRmlsbD48L2ZpbGw+PGZpbGw+PHBhdHRlcm5GaWxsIHBhdHRlcm5UeXBlPVwic29saWRcIj48ZmdDb2xvciByZ2I9XCJmZmM2Y2ZlZlwiIC8+PGJnQ29sb3IgaW5kZXhlZD1cIjY0XCIgLz48L3BhdHRlcm5GaWxsPjwvZmlsbD48L2ZpbGxzPjxib3JkZXJzIGNvdW50PVwiMlwiPjxib3JkZXI+PGxlZnQgLz48cmlnaHQgLz48dG9wIC8+PGJvdHRvbSAvPjxkaWFnb25hbCAvPjwvYm9yZGVyPjxib3JkZXIgZGlhZ29uYWxVcD1cImZhbHNlXCIgZGlhZ29uYWxEb3duPVwiZmFsc2VcIj48bGVmdCBzdHlsZT1cInRoaW5cIj48Y29sb3IgYXV0bz1cIjFcIiAvPjwvbGVmdD48cmlnaHQgc3R5bGU9XCJ0aGluXCI+PGNvbG9yIGF1dG89XCIxXCIgLz48L3JpZ2h0Pjx0b3Agc3R5bGU9XCJ0aGluXCI+PGNvbG9yIGF1dG89XCIxXCIgLz48L3RvcD48Ym90dG9tIHN0eWxlPVwidGhpblwiPjxjb2xvciBhdXRvPVwiMVwiIC8+PC9ib3R0b20+PGRpYWdvbmFsIC8+PC9ib3JkZXI+PC9ib3JkZXJzPjxjZWxsU3R5bGVYZnMgY291bnQ9XCIxXCI+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgLz48L2NlbGxTdHlsZVhmcz48Y2VsbFhmcyBjb3VudD1cIjY3XCI+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIyXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCIzXCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI0XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjFcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjJcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjNcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjRcIiBmaWxsSWQ9XCI1XCIgYm9yZGVySWQ9XCIxXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIi8+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5QWxpZ25tZW50PVwiMVwiPjxhbGlnbm1lbnQgaG9yaXpvbnRhbD1cImxlZnRcIi8+PC94Zj48eGYgbnVtRm10SWQ9XCIwXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlBbGlnbm1lbnQ9XCIxXCI+PGFsaWdubWVudCBob3Jpem9udGFsPVwiY2VudGVyXCIvPjwveGY+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5QWxpZ25tZW50PVwiMVwiPjxhbGlnbm1lbnQgaG9yaXpvbnRhbD1cInJpZ2h0XCIvPjwveGY+PHhmIG51bUZtdElkPVwiMFwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5QWxpZ25tZW50PVwiMVwiPjxhbGlnbm1lbnQgaG9yaXpvbnRhbD1cImZpbGxcIi8+PC94Zj48eGYgbnVtRm10SWQ9XCIwXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlBbGlnbm1lbnQ9XCIxXCI+PGFsaWdubWVudCB0ZXh0Um90YXRpb249XCI5MFwiLz48L3hmPjx4ZiBudW1GbXRJZD1cIjBcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseUFsaWdubWVudD1cIjFcIj48YWxpZ25tZW50IHdyYXBUZXh0PVwiMVwiLz48L3hmPjx4ZiBudW1GbXRJZD1cIjlcIiAgIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5TnVtYmVyRm9ybWF0PVwiMVwiLz48eGYgbnVtRm10SWQ9XCIxNjRcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseU51bWJlckZvcm1hdD1cIjFcIi8+PHhmIG51bUZtdElkPVwiMTY1XCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCIvPjx4ZiBudW1GbXRJZD1cIjE2NlwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5TnVtYmVyRm9ybWF0PVwiMVwiLz48eGYgbnVtRm10SWQ9XCIxNjdcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseU51bWJlckZvcm1hdD1cIjFcIi8+PHhmIG51bUZtdElkPVwiMTY4XCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCIvPjx4ZiBudW1GbXRJZD1cIjE2OVwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5TnVtYmVyRm9ybWF0PVwiMVwiLz48eGYgbnVtRm10SWQ9XCIzXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCIvPjx4ZiBudW1GbXRJZD1cIjRcIiBmb250SWQ9XCIwXCIgZmlsbElkPVwiMFwiIGJvcmRlcklkPVwiMFwiIGFwcGx5Rm9udD1cIjFcIiBhcHBseUZpbGw9XCIxXCIgYXBwbHlCb3JkZXI9XCIxXCIgeGZJZD1cIjBcIiBhcHBseU51bWJlckZvcm1hdD1cIjFcIi8+PHhmIG51bUZtdElkPVwiMVwiIGZvbnRJZD1cIjBcIiBmaWxsSWQ9XCIwXCIgYm9yZGVySWQ9XCIwXCIgYXBwbHlGb250PVwiMVwiIGFwcGx5RmlsbD1cIjFcIiBhcHBseUJvcmRlcj1cIjFcIiB4ZklkPVwiMFwiIGFwcGx5TnVtYmVyRm9ybWF0PVwiMVwiLz48eGYgbnVtRm10SWQ9XCIyXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiBhcHBseUZvbnQ9XCIxXCIgYXBwbHlGaWxsPVwiMVwiIGFwcGx5Qm9yZGVyPVwiMVwiIHhmSWQ9XCIwXCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCIvPjwvY2VsbFhmcz48Y2VsbFN0eWxlcyBjb3VudD1cIjFcIj48Y2VsbFN0eWxlIG5hbWU9XCJOb3JtYWxcIiB4ZklkPVwiMFwiIGJ1aWx0aW5JZD1cIjBcIiAvPjwvY2VsbFN0eWxlcz48ZHhmcyBjb3VudD1cIjBcIiAvPjx0YWJsZVN0eWxlcyBjb3VudD1cIjBcIiBkZWZhdWx0VGFibGVTdHlsZT1cIlRhYmxlU3R5bGVNZWRpdW05XCIgZGVmYXVsdFBpdm90U3R5bGU9XCJQaXZvdFN0eWxlTWVkaXVtNFwiIC8+PC9zdHlsZVNoZWV0Pid9LFxyXG5JPVt7bWF0Y2g6L15cXC0/XFxkK1xcLlxcZCUkLyxzdHlsZTo2MCxmbXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEvMTAwfX0se21hdGNoOi9eXFwtP1xcZCtcXC4/XFxkKiUkLyxzdHlsZTo1NixmbXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEvMTAwfX0se21hdGNoOi9eXFwtP1xcJFtcXGQsXSsuP1xcZCokLyxzdHlsZTo1N30se21hdGNoOi9eXFwtP8KjW1xcZCxdKy4/XFxkKiQvLHN0eWxlOjU4fSx7bWF0Y2g6L15cXC0/4oKsW1xcZCxdKy4/XFxkKiQvLHN0eWxlOjU5fSx7bWF0Y2g6L15cXC0/XFxkKyQvLHN0eWxlOjY1fSx7bWF0Y2g6L15cXC0/XFxkK1xcLlxcZHsyfSQvLHN0eWxlOjY2fSx7bWF0Y2g6L15cXChbXFxkLF0rXFwpJC8sc3R5bGU6NjEsZm10OmZ1bmN0aW9uKGEpe3JldHVybi0xKmEucmVwbGFjZSgvW1xcKFxcKV0vZyxcIlwiKX19LHttYXRjaDovXlxcKFtcXGQsXStcXC5cXGR7Mn1cXCkkLyxzdHlsZTo2MixmbXQ6ZnVuY3Rpb24oYSl7cmV0dXJuLTEqYS5yZXBsYWNlKC9bXFwoXFwpXS9nLFwiXCIpfX0se21hdGNoOi9eXFwtP1tcXGQsXSskLyxzdHlsZTo2M30sXHJcbnttYXRjaDovXlxcLT9bXFxkLF0rXFwuXFxkezJ9JC8sc3R5bGU6NjR9XTttLmV4dC5idXR0b25zLmNvcHlIdG1sNT17Y2xhc3NOYW1lOlwiYnV0dG9ucy1jb3B5IGJ1dHRvbnMtaHRtbDVcIix0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmkxOG4oXCJidXR0b25zLmNvcHlcIixcIkNvcHlcIil9LGFjdGlvbjpmdW5jdGlvbihhLGMsZCxiKXt0aGlzLnByb2Nlc3NpbmcoITApO3ZhciBlPXRoaXMsYT1HKGMsYiksZj1jLmJ1dHRvbnMuZXhwb3J0SW5mbyhiKSxnPUYoYiksbj1hLnN0cixkPWooXCI8ZGl2Lz5cIikuY3NzKHtoZWlnaHQ6MSx3aWR0aDoxLG92ZXJmbG93OlwiaGlkZGVuXCIscG9zaXRpb246XCJmaXhlZFwiLHRvcDowLGxlZnQ6MH0pO2YudGl0bGUmJihuPWYudGl0bGUrZytnK24pO2YubWVzc2FnZVRvcCYmKG49Zi5tZXNzYWdlVG9wK2crZytuKTtmLm1lc3NhZ2VCb3R0b20mJihuPW4rZytnK2YubWVzc2FnZUJvdHRvbSk7Yi5jdXN0b21pemUmJihuPWIuY3VzdG9taXplKG4sYikpO2I9aihcIjx0ZXh0YXJlYSByZWFkb25seS8+XCIpLnZhbChuKS5hcHBlbmRUbyhkKTtcclxuaWYobC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoXCJjb3B5XCIpKXtkLmFwcGVuZFRvKGMudGFibGUoKS5jb250YWluZXIoKSk7YlswXS5mb2N1cygpO2JbMF0uc2VsZWN0KCk7dHJ5e3ZhciBoPWwuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO2QucmVtb3ZlKCk7aWYoaCl7Yy5idXR0b25zLmluZm8oYy5pMThuKFwiYnV0dG9ucy5jb3B5VGl0bGVcIixcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLGMuaTE4bihcImJ1dHRvbnMuY29weVN1Y2Nlc3NcIix7MTpcIkNvcGllZCBvbmUgcm93IHRvIGNsaXBib2FyZFwiLF86XCJDb3BpZWQgJWQgcm93cyB0byBjbGlwYm9hcmRcIn0sYS5yb3dzKSwyRTMpO3RoaXMucHJvY2Vzc2luZyghMSk7cmV0dXJufX1jYXRjaChrKXt9fWg9aihcIjxzcGFuPlwiK2MuaTE4bihcImJ1dHRvbnMuY29weUtleXNcIixcIlByZXNzIDxpPmN0cmw8L2k+IG9yIDxpPuKMmDwvaT4gKyA8aT5DPC9pPiB0byBjb3B5IHRoZSB0YWJsZSBkYXRhPGJyPnRvIHlvdXIgc3lzdGVtIGNsaXBib2FyZC48YnI+PGJyPlRvIGNhbmNlbCwgY2xpY2sgdGhpcyBtZXNzYWdlIG9yIHByZXNzIGVzY2FwZS5cIikrXHJcblwiPC9zcGFuPlwiKS5hcHBlbmQoZCk7Yy5idXR0b25zLmluZm8oYy5pMThuKFwiYnV0dG9ucy5jb3B5VGl0bGVcIixcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLGgsMCk7YlswXS5mb2N1cygpO2JbMF0uc2VsZWN0KCk7dmFyIEQ9aihoKS5jbG9zZXN0KFwiLmR0LWJ1dHRvbi1pbmZvXCIpLGk9ZnVuY3Rpb24oKXtELm9mZihcImNsaWNrLmJ1dHRvbnMtY29weVwiKTtqKGwpLm9mZihcIi5idXR0b25zLWNvcHlcIik7Yy5idXR0b25zLmluZm8oITEpfTtELm9uKFwiY2xpY2suYnV0dG9ucy1jb3B5XCIsaSk7aihsKS5vbihcImtleWRvd24uYnV0dG9ucy1jb3B5XCIsZnVuY3Rpb24oYSl7Mjc9PT1hLmtleUNvZGUmJihpKCksZS5wcm9jZXNzaW5nKCExKSl9KS5vbihcImNvcHkuYnV0dG9ucy1jb3B5IGN1dC5idXR0b25zLWNvcHlcIixmdW5jdGlvbigpe2koKTtlLnByb2Nlc3NpbmcoITEpfSl9LGV4cG9ydE9wdGlvbnM6e30sZmllbGRTZXBhcmF0b3I6XCJcXHRcIixmaWVsZEJvdW5kYXJ5OlwiXCIsaGVhZGVyOiEwLGZvb3RlcjohMSxcclxudGl0bGU6XCIqXCIsbWVzc2FnZVRvcDpcIipcIixtZXNzYWdlQm90dG9tOlwiKlwifTttLmV4dC5idXR0b25zLmNzdkh0bWw1PXtib206ITEsY2xhc3NOYW1lOlwiYnV0dG9ucy1jc3YgYnV0dG9ucy1odG1sNVwiLGF2YWlsYWJsZTpmdW5jdGlvbigpe3JldHVybiBrLkZpbGVSZWFkZXIhPT1xJiZrLkJsb2J9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaTE4bihcImJ1dHRvbnMuY3N2XCIsXCJDU1ZcIil9LGFjdGlvbjpmdW5jdGlvbihhLGMsZCxiKXt0aGlzLnByb2Nlc3NpbmcoITApO2E9RyhjLGIpLnN0cjtjPWMuYnV0dG9ucy5leHBvcnRJbmZvKGIpO2Q9Yi5jaGFyc2V0O2IuY3VzdG9taXplJiYoYT1iLmN1c3RvbWl6ZShhLGIpKTshMSE9PWQ/KGR8fChkPWwuY2hhcmFjdGVyU2V0fHxsLmNoYXJzZXQpLGQmJihkPVwiO2NoYXJzZXQ9XCIrZCkpOmQ9XCJcIjtiLmJvbSYmKGE9XCLvu79cIithKTtyKG5ldyBCbG9iKFthXSx7dHlwZTpcInRleHQvY3N2XCIrZH0pLGMuZmlsZW5hbWUsITApO3RoaXMucHJvY2Vzc2luZyghMSl9LFxyXG5maWxlbmFtZTpcIipcIixleHRlbnNpb246XCIuY3N2XCIsZXhwb3J0T3B0aW9uczp7fSxmaWVsZFNlcGFyYXRvcjpcIixcIixmaWVsZEJvdW5kYXJ5OidcIicsZXNjYXBlQ2hhcjonXCInLGNoYXJzZXQ6bnVsbCxoZWFkZXI6ITAsZm9vdGVyOiExfTttLmV4dC5idXR0b25zLmV4Y2VsSHRtbDU9e2NsYXNzTmFtZTpcImJ1dHRvbnMtZXhjZWwgYnV0dG9ucy1odG1sNVwiLGF2YWlsYWJsZTpmdW5jdGlvbigpe3JldHVybiBrLkZpbGVSZWFkZXIhPT1xJiYodHx8ay5KU1ppcCkhPT1xJiYhSCgpJiZ3fSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmkxOG4oXCJidXR0b25zLmV4Y2VsXCIsXCJFeGNlbFwiKX0sYWN0aW9uOmZ1bmN0aW9uKGEsYyxkLGIpe3RoaXMucHJvY2Vzc2luZyghMCk7dmFyIGU9dGhpcyxmPTAsYT1mdW5jdGlvbihhKXtyZXR1cm4gai5wYXJzZVhNTCh6W2FdKX0sZz1hKFwieGwvd29ya3NoZWV0cy9zaGVldDEueG1sXCIpLG49Zy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNoZWV0RGF0YVwiKVswXSxcclxuYT17X3JlbHM6e1wiLnJlbHNcIjphKFwiX3JlbHMvLnJlbHNcIil9LHhsOntfcmVsczp7XCJ3b3JrYm9vay54bWwucmVsc1wiOmEoXCJ4bC9fcmVscy93b3JrYm9vay54bWwucmVsc1wiKX0sXCJ3b3JrYm9vay54bWxcIjphKFwieGwvd29ya2Jvb2sueG1sXCIpLFwic3R5bGVzLnhtbFwiOmEoXCJ4bC9zdHlsZXMueG1sXCIpLHdvcmtzaGVldHM6e1wic2hlZXQxLnhtbFwiOmd9fSxcIltDb250ZW50X1R5cGVzXS54bWxcIjphKFwiW0NvbnRlbnRfVHlwZXNdLnhtbFwiKX0sZD1jLmJ1dHRvbnMuZXhwb3J0RGF0YShiLmV4cG9ydE9wdGlvbnMpLGgsbCxpPWZ1bmN0aW9uKGEpe2g9ZisxO2w9cChnLFwicm93XCIse2F0dHI6e3I6aH19KTtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2I8YztiKyspe3ZhciBkPXgoYikrXCJcIitoLGU9bnVsbDtpZighKG51bGw9PT1hW2JdfHxhW2JdPT09cXx8XCJcIj09PWFbYl0pKXthW2JdPWoudHJpbShhW2JdKTtmb3IodmFyIGk9MCxrPUkubGVuZ3RoO2k8aztpKyspe3ZhciBtPUlbaV07aWYoYVtiXS5tYXRjaCYmXHJcbiFhW2JdLm1hdGNoKC9eMFxcZCsvKSYmYVtiXS5tYXRjaChtLm1hdGNoKSl7ZT1hW2JdLnJlcGxhY2UoL1teXFxkXFwuXFwtXS9nLFwiXCIpO20uZm10JiYoZT1tLmZtdChlKSk7ZT1wKGcsXCJjXCIse2F0dHI6e3I6ZCxzOm0uc3R5bGV9LGNoaWxkcmVuOltwKGcsXCJ2XCIse3RleHQ6ZX0pXX0pO2JyZWFrfX1lfHwoXCJudW1iZXJcIj09PXR5cGVvZiBhW2JdfHxhW2JdLm1hdGNoJiZhW2JdLm1hdGNoKC9eLT9cXGQrKFxcLlxcZCspPyQvKSYmIWFbYl0ubWF0Y2goL14wXFxkKy8pP2U9cChnLFwiY1wiLHthdHRyOnt0OlwiblwiLHI6ZH0sY2hpbGRyZW46W3AoZyxcInZcIix7dGV4dDphW2JdfSldfSk6KG09IWFbYl0ucmVwbGFjZT9hW2JdOmFbYl0ucmVwbGFjZSgvW1xceDAwLVxceDA5XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4N0YtXFx4OUZdL2csXCJcIiksZT1wKGcsXCJjXCIse2F0dHI6e3Q6XCJpbmxpbmVTdHJcIixyOmR9LGNoaWxkcmVuOntyb3c6cChnLFwiaXNcIix7Y2hpbGRyZW46e3JvdzpwKGcsXCJ0XCIse3RleHQ6bX0pfX0pfX0pKSk7bC5hcHBlbmRDaGlsZChlKX19bi5hcHBlbmRDaGlsZChsKTtcclxuZisrfTtqKFwic2hlZXRzIHNoZWV0XCIsYS54bFtcIndvcmtib29rLnhtbFwiXSkuYXR0cihcIm5hbWVcIixOKGIpKTtiLmN1c3RvbWl6ZURhdGEmJmIuY3VzdG9taXplRGF0YShkKTt2YXIgbT1mdW5jdGlvbihhLGIpe3ZhciBjPWooXCJtZXJnZUNlbGxzXCIsZyk7Y1swXS5hcHBlbmRDaGlsZChwKGcsXCJtZXJnZUNlbGxcIix7YXR0cjp7cmVmOlwiQVwiK2ErXCI6XCIreChiKSthfX0pKTtjLmF0dHIoXCJjb3VudFwiLGMuYXR0cihcImNvdW50XCIpKzEpO2ooXCJyb3c6ZXEoXCIrKGEtMSkrXCIpIGNcIixnKS5hdHRyKFwic1wiLFwiNTFcIil9LG89Yy5idXR0b25zLmV4cG9ydEluZm8oYik7by50aXRsZSYmKGkoW28udGl0bGVdLGYpLG0oZixkLmhlYWRlci5sZW5ndGgtMSkpO28ubWVzc2FnZVRvcCYmKGkoW28ubWVzc2FnZVRvcF0sZiksbShmLGQuaGVhZGVyLmxlbmd0aC0xKSk7Yi5oZWFkZXImJihpKGQuaGVhZGVyLGYpLGooXCJyb3c6bGFzdCBjXCIsZykuYXR0cihcInNcIixcIjJcIikpO2Zvcih2YXIgYz0wLHM9ZC5ib2R5Lmxlbmd0aDtjPFxyXG5zO2MrKylpKGQuYm9keVtjXSxmKTtiLmZvb3RlciYmZC5mb290ZXImJihpKGQuZm9vdGVyLGYpLGooXCJyb3c6bGFzdCBjXCIsZykuYXR0cihcInNcIixcIjJcIikpO28ubWVzc2FnZUJvdHRvbSYmKGkoW28ubWVzc2FnZUJvdHRvbV0sZiksbShmLGQuaGVhZGVyLmxlbmd0aC0xKSk7Yz1wKGcsXCJjb2xzXCIpO2ooXCJ3b3Jrc2hlZXRcIixnKS5wcmVwZW5kKGMpO2k9MDtmb3IobT1kLmhlYWRlci5sZW5ndGg7aTxtO2krKyljLmFwcGVuZENoaWxkKHAoZyxcImNvbFwiLHthdHRyOnttaW46aSsxLG1heDppKzEsd2lkdGg6SihkLGkpLGN1c3RvbVdpZHRoOjF9fSkpO2IuY3VzdG9taXplJiZiLmN1c3RvbWl6ZShhKTtiPW5ldyAodHx8ay5KU1ppcCk7ZD17dHlwZTpcImJsb2JcIixtaW1lVHlwZTpcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0XCJ9O3koYixhKTtiLmdlbmVyYXRlQXN5bmM/Yi5nZW5lcmF0ZUFzeW5jKGQpLnRoZW4oZnVuY3Rpb24oYSl7cihhLFxyXG5vLmZpbGVuYW1lKTtlLnByb2Nlc3NpbmcoZmFsc2UpfSk6KHIoYi5nZW5lcmF0ZShkKSxvLmZpbGVuYW1lKSx0aGlzLnByb2Nlc3NpbmcoITEpKX0sZmlsZW5hbWU6XCIqXCIsZXh0ZW5zaW9uOlwiLnhsc3hcIixleHBvcnRPcHRpb25zOnt9LGhlYWRlcjohMCxmb290ZXI6ITEsdGl0bGU6XCIqXCIsbWVzc2FnZVRvcDpcIipcIixtZXNzYWdlQm90dG9tOlwiKlwifTttLmV4dC5idXR0b25zLnBkZkh0bWw1PXtjbGFzc05hbWU6XCJidXR0b25zLXBkZiBidXR0b25zLWh0bWw1XCIsYXZhaWxhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuRmlsZVJlYWRlciE9PXEmJihzfHxrLnBkZk1ha2UpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmkxOG4oXCJidXR0b25zLnBkZlwiLFwiUERGXCIpfSxhY3Rpb246ZnVuY3Rpb24oYSxjLGQsYil7dGhpcy5wcm9jZXNzaW5nKCEwKTt2YXIgZT10aGlzLGE9Yy5idXR0b25zLmV4cG9ydERhdGEoYi5leHBvcnRPcHRpb25zKSxmPWMuYnV0dG9ucy5leHBvcnRJbmZvKGIpLGM9W107XHJcbmIuaGVhZGVyJiZjLnB1c2goai5tYXAoYS5oZWFkZXIsZnVuY3Rpb24oYSl7cmV0dXJue3RleHQ6XCJzdHJpbmdcIj09PXR5cGVvZiBhP2E6YStcIlwiLHN0eWxlOlwidGFibGVIZWFkZXJcIn19KSk7Zm9yKHZhciBnPTAsZD1hLmJvZHkubGVuZ3RoO2c8ZDtnKyspYy5wdXNoKGoubWFwKGEuYm9keVtnXSxmdW5jdGlvbihhKXtyZXR1cm57dGV4dDpcInN0cmluZ1wiPT09dHlwZW9mIGE/YTphK1wiXCIsc3R5bGU6ZyUyP1widGFibGVCb2R5RXZlblwiOlwidGFibGVCb2R5T2RkXCJ9fSkpO2IuZm9vdGVyJiZhLmZvb3RlciYmYy5wdXNoKGoubWFwKGEuZm9vdGVyLGZ1bmN0aW9uKGEpe3JldHVybnt0ZXh0Olwic3RyaW5nXCI9PT10eXBlb2YgYT9hOmErXCJcIixzdHlsZTpcInRhYmxlRm9vdGVyXCJ9fSkpO2M9e3BhZ2VTaXplOmIucGFnZVNpemUscGFnZU9yaWVudGF0aW9uOmIub3JpZW50YXRpb24sY29udGVudDpbe3RhYmxlOntoZWFkZXJSb3dzOjEsYm9keTpjfSxsYXlvdXQ6XCJub0JvcmRlcnNcIn1dLHN0eWxlczp7dGFibGVIZWFkZXI6e2JvbGQ6ITAsXHJcbmZvbnRTaXplOjExLGNvbG9yOlwid2hpdGVcIixmaWxsQ29sb3I6XCIjMmQ0MTU0XCIsYWxpZ25tZW50OlwiY2VudGVyXCJ9LHRhYmxlQm9keUV2ZW46e30sdGFibGVCb2R5T2RkOntmaWxsQ29sb3I6XCIjZjNmM2YzXCJ9LHRhYmxlRm9vdGVyOntib2xkOiEwLGZvbnRTaXplOjExLGNvbG9yOlwid2hpdGVcIixmaWxsQ29sb3I6XCIjMmQ0MTU0XCJ9LHRpdGxlOnthbGlnbm1lbnQ6XCJjZW50ZXJcIixmb250U2l6ZToxNX0sbWVzc2FnZTp7fX0sZGVmYXVsdFN0eWxlOntmb250U2l6ZToxMH19O2YubWVzc2FnZVRvcCYmYy5jb250ZW50LnVuc2hpZnQoe3RleHQ6Zi5tZXNzYWdlVG9wLHN0eWxlOlwibWVzc2FnZVwiLG1hcmdpbjpbMCwwLDAsMTJdfSk7Zi5tZXNzYWdlQm90dG9tJiZjLmNvbnRlbnQucHVzaCh7dGV4dDpmLm1lc3NhZ2VCb3R0b20sc3R5bGU6XCJtZXNzYWdlXCIsbWFyZ2luOlswLDAsMCwxMl19KTtmLnRpdGxlJiZjLmNvbnRlbnQudW5zaGlmdCh7dGV4dDpmLnRpdGxlLHN0eWxlOlwidGl0bGVcIixtYXJnaW46WzAsXHJcbjAsMCwxMl19KTtiLmN1c3RvbWl6ZSYmYi5jdXN0b21pemUoYyxiKTtjPShzfHxrLnBkZk1ha2UpLmNyZWF0ZVBkZihjKTtcIm9wZW5cIj09PWIuZG93bmxvYWQmJiFIKCk/KGMub3BlbigpLHRoaXMucHJvY2Vzc2luZyghMSkpOmMuZ2V0QnVmZmVyKGZ1bmN0aW9uKGEpe2E9bmV3IEJsb2IoW2FdLHt0eXBlOlwiYXBwbGljYXRpb24vcGRmXCJ9KTtyKGEsZi5maWxlbmFtZSk7ZS5wcm9jZXNzaW5nKCExKX0pfSx0aXRsZTpcIipcIixmaWxlbmFtZTpcIipcIixleHRlbnNpb246XCIucGRmXCIsZXhwb3J0T3B0aW9uczp7fSxvcmllbnRhdGlvbjpcInBvcnRyYWl0XCIscGFnZVNpemU6XCJBNFwiLGhlYWRlcjohMCxmb290ZXI6ITEsbWVzc2FnZVRvcDpcIipcIixtZXNzYWdlQm90dG9tOlwiKlwiLGN1c3RvbWl6ZTpudWxsLGRvd25sb2FkOlwiZG93bmxvYWRcIn07cmV0dXJuIG0uQnV0dG9uc30pO1xyXG4iXSwibmFtZXMiOlsiaiIsImRlZmluZSIsImFtZCIsImsiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwibCIsInQiLCJzIiwiZm4iLCJkYXRhVGFibGUiLCJyZXF1aXJlIiwiJCIsIkJ1dHRvbnMiLCJqUXVlcnkiLCJxIiwieCIsImEiLCJjIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiTWF0aCIsImZsb29yIiwieSIsInUiLCJ3Iiwic2VyaWFsaXplVG9TdHJpbmciLCJwYXJzZVhNTCIsInoiLCJpbmRleE9mIiwiZWFjaCIsImIiLCJpc1BsYWluT2JqZWN0IiwiZSIsImZvbGRlciIsImNoaWxkTm9kZXMiLCJmIiwiZyIsIm4iLCJhdHRyaWJ1dGVzIiwibGVuZ3RoIiwibm9kZU5hbWUiLCJoIiwibm9kZVZhbHVlIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNyZWF0ZUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJzZXRBdHRyaWJ1dGVOb2RlIiwiZmlsZSIsInAiLCJkIiwiY3JlYXRlRWxlbWVudCIsImF0dHIiLCJjaGlsZHJlbiIsImFwcGVuZENoaWxkIiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiSiIsImhlYWRlciIsImZvb3RlciIsImJvZHkiLCJ0b1N0cmluZyIsInNwbGl0Iiwic29ydCIsIm0iLCJyIiwic2VsZiIsImNvbnRlbnQiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwidXNlckFnZW50IiwidiIsImNyZWF0ZUVsZW1lbnROUyIsIksiLCJMIiwiSFRNTEVsZW1lbnQiLCJzYWZhcmkiLCJBIiwiTSIsInNldEltbWVkaWF0ZSIsInNldFRpbWVvdXQiLCJCIiwiVVJMIiwid2Via2l0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwicmVtb3ZlIiwiQyIsInR5cGUiLCJCbG9iIiwiRSIsImNvbmNhdCIsImNhbGwiLCJyZWFkeVN0YXRlIiwiSU5JVCIsImNyZWF0ZU9iamVjdFVSTCIsImhyZWYiLCJkb3dubG9hZCIsIk1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiRE9ORSIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJvcGVuIiwibG9jYXRpb24iLCJyZWFkQXNEYXRhVVJMIiwiaSIsInByb3RvdHlwZSIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJhYm9ydCIsIldSSVRJTkciLCJlcnJvciIsIm9ud3JpdGVzdGFydCIsIm9ucHJvZ3Jlc3MiLCJvbndyaXRlIiwib25hYm9ydCIsIm9uZXJyb3IiLCJvbndyaXRlZW5kIiwiZmlsZVNhdmUiLCJOIiwic2hlZXROYW1lIiwiRiIsIm5ld2xpbmUiLCJtYXRjaCIsIkciLCJidXR0b25zIiwiZXhwb3J0RGF0YSIsImV4cG9ydE9wdGlvbnMiLCJmaWVsZEJvdW5kYXJ5IiwiZmllbGRTZXBhcmF0b3IiLCJSZWdFeHAiLCJlc2NhcGVDaGFyIiwibyIsInN0ciIsImpvaW4iLCJyb3dzIiwiSCIsIlhNTFNlcmlhbGl6ZXIiLCJPIiwiSSIsInN0eWxlIiwiZm10IiwiZXh0IiwiY29weUh0bWw1IiwiY2xhc3NOYW1lIiwiaTE4biIsImFjdGlvbiIsInByb2Nlc3NpbmciLCJleHBvcnRJbmZvIiwiY3NzIiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRpdGxlIiwibWVzc2FnZVRvcCIsIm1lc3NhZ2VCb3R0b20iLCJjdXN0b21pemUiLCJ2YWwiLCJhcHBlbmRUbyIsInF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCIsInRhYmxlIiwiY29udGFpbmVyIiwiZm9jdXMiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImluZm8iLCJfIiwiYXBwZW5kIiwiRCIsImNsb3Nlc3QiLCJvZmYiLCJvbiIsImtleUNvZGUiLCJjc3ZIdG1sNSIsImJvbSIsImF2YWlsYWJsZSIsImNoYXJzZXQiLCJjaGFyYWN0ZXJTZXQiLCJmaWxlbmFtZSIsImV4dGVuc2lvbiIsImV4Y2VsSHRtbDUiLCJKU1ppcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX3JlbHMiLCJ4bCIsIndvcmtzaGVldHMiLCJ0cmltIiwicm93IiwiY3VzdG9taXplRGF0YSIsInJlZiIsInByZXBlbmQiLCJtaW4iLCJtYXgiLCJjdXN0b21XaWR0aCIsIm1pbWVUeXBlIiwiZ2VuZXJhdGVBc3luYyIsInRoZW4iLCJnZW5lcmF0ZSIsInBkZkh0bWw1IiwicGRmTWFrZSIsIm1hcCIsInBhZ2VTaXplIiwicGFnZU9yaWVudGF0aW9uIiwib3JpZW50YXRpb24iLCJoZWFkZXJSb3dzIiwibGF5b3V0Iiwic3R5bGVzIiwidGFibGVIZWFkZXIiLCJib2xkIiwiZm9udFNpemUiLCJjb2xvciIsImZpbGxDb2xvciIsImFsaWdubWVudCIsInRhYmxlQm9keUV2ZW4iLCJ0YWJsZUJvZHlPZGQiLCJ0YWJsZUZvb3RlciIsIm1lc3NhZ2UiLCJkZWZhdWx0U3R5bGUiLCJ1bnNoaWZ0IiwibWFyZ2luIiwiY3JlYXRlUGRmIiwiZ2V0QnVmZmVyIl0sInNvdXJjZVJvb3QiOiIifQ==