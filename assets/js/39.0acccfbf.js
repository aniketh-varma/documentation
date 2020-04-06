(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{341:function(t,a,e){"use strict";e.r(a);var s=e(8),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"displayed-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#displayed-attributes"}},[t._v("#")]),t._v(" Displayed attributes")]),t._v(" "),e("p",[e("em",[t._v("Child route of the "),e("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings route")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("Displayed attributes are the fields contained in each matching document.")]),t._v(" "),e("p",[t._v("Displayed attributes can also be updated directly through the "),e("RouterLink",{attrs:{to:"/references/settings.html#update-settings"}},[t._v("global settings route")]),t._v(" at the same time than the other settings.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Updating the settings means overwriting the default settings of MeiliSearch. You can reset to default values using the "),e("code",[t._v("DELETE")]),t._v(" routes.")])]),t._v(" "),e("h2",{attrs:{id:"get-displayed-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-displayed-attributes"}},[t._v("#")]),t._v(" Get displayed attributes")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/settings/displayed-attributes"}}),t._v(" "),e("p",[t._v("Get the displayed attributes of an index.")]),t._v(" "),e("h4",{attrs:{id:"path-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("index_uid")])]),t._v(" "),e("td",[t._v("The index UID")])])])]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/displayed-attributes'")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-200-ok"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("200 Ok")])]),t._v(" "),e("p",[t._v("List the settings.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release_date"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rank"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"poster"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"update-displayed-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-displayed-attributes"}},[t._v("#")]),t._v(" Update displayed attributes")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/settings/displayed-attributes"}}),t._v(" "),e("p",[t._v("Update the displayed attributes of an index.")]),t._v(" "),e("h4",{attrs:{id:"path-variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("index_uid")])]),t._v(" "),e("td",[t._v("The index UID")])])])]),t._v(" "),e("h4",{attrs:{id:"body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),e("p",[t._v("An array of strings that contains attributes of an index to display.")]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/displayed-attributes'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[\n      "title",\n      "description",\n      "release_date",\n      "rank",\n      "poster"\n  ]\'')]),t._v("\n")])])]),e("h4",{attrs:{id:"response-202-accepted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("202 Accepted")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This "),e("code",[t._v("updateId")]),t._v(" allows you to "),e("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"reset-displayed-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset-displayed-attributes"}},[t._v("#")]),t._v(" Reset displayed attributes")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings/displayed-attributes"}}),t._v(" "),e("p",[t._v("Reset the displayed attributes of the index to the default value.")]),t._v(" "),e("h4",{attrs:{id:"default-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-value"}},[t._v("#")]),t._v(" Default value")]),t._v(" "),e("p",[t._v("All attributes found in the documents added to the index.")]),t._v(" "),e("h4",{attrs:{id:"path-variables-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("index_uid")])]),t._v(" "),e("td",[t._v("The index UID")])])])]),t._v(" "),e("h4",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X DELETE "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/displayed-attributes'")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-202-accepted-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("202 Accepted")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This "),e("code",[t._v("updateId")]),t._v(" allows you to "),e("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);