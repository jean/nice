// Generated by CoffeeScript 1.3.3
(function() {
  var HTML, tag, _fn, _i, _len, _ref;

  HTML = (function() {

    function HTML(options) {
      this.options = options;
    }

    HTML.prototype._tag = function(name, argument) {
      var attributes, content, key, value;
      if (argument != null ? argument.substr : void 0) {
        content = argument || "";
        attributes = "";
      } else if (argument != null ? argument.join : void 0) {
        content = argument.join("");
        attributes = "";
      } else if (argument != null) {
        if ((content = argument.content || argument.text) != null) {
          delete argument.content;
          delete argument.text;
        }
        if (content != null ? content.join : void 0) {
          content = content.join("");
        }
        if (argument.url) {
          argument.href = argument.url;
          delete argument.url;
        }
        attributes = ((function() {
          var _results;
          _results = [];
          for (key in argument) {
            value = argument[key];
            _results.push("" + key + "='" + value + "'");
          }
          return _results;
        })()).join(" ");
        if (content == null) {
          content = "";
        }
      } else {
        content = "";
        attributes = "";
      }
      if (content === "" && !name === "script") {
        if (attributes === "") {
          return "<" + name + "/>";
        } else {
          return "<" + name + " " + attributes + "/>";
        }
      } else {
        if (attributes === "") {
          return "<" + name + ">" + content + "</" + name + ">";
        } else {
          return "<" + name + " " + attributes + ">" + content + "</" + name + ">";
        }
      }
    };

    return HTML;

  })();

  _ref = "html head title base link meta style script noscript body section nav  article aside h1 h2 h3 h4 h5 h6 hgroup header footer address p hr pre blockquote   ol ul li dl dt dd figure figcaption div a em strong small s cite q dfn abbr data  time code var samp kbd sub sup i b u mark ruby rp bdi span br wbr ins del img  iframe embed object param video audio source track canvas map area svg math  table caption colgroup col tbody thead tfoot tr td th form fieldset legend label  input button select datalist optgroup option textarea keygen output progress meter  details summary command menu".split(" ");
  _fn = function(tag) {
    return HTML.prototype[tag] = function(x) {
      return this._tag(tag, x);
    };
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    tag = _ref[_i];
    _fn(tag);
  }

  HTML.beautify = require("./beautify");

  module.exports = HTML;

}).call(this);