"use strict";

module.exports = function (component, initialState) {
  return "\n    <!doctype html>\n        <html>\n            <head>\n                <script>window.__INITIAL__DATA__ = ".concat(JSON.stringify({
    initialState: initialState
  }), "</script>\n                <link rel=\"stylesheet\" type=\"text/css\" href=\"static/app.css\" />\n                \n            </head>\n            <body>\n                <div id=\"root\">").concat(component, "</div>\n                <script src=\"/static/app.js\"></script>\n            </body>\n        </html>");
};