(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__1m44e"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},55:function(e,t,c){"use strict";c.r(t);var n=c(37),o=c(0),r=c(2),a=c(41),s=c.n(a),i=c(1),u=function(e){return Object(i.jsx)("div",{className:s.a.card,children:e.children})},l=c(15),d=c(42),j=c.n(d),b=function(e){var t=Object(o.useRef)(),c=Object(o.useRef)(),a=Object(o.useState)(!1),s=Object(n.a)(a,2),d=s[0],b=s[1];return Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)(r.a,{when:d,message:function(e){return"Are you sure you want to leave? All your entered data will be lost"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){b(!0)},className:j.a.form,onSubmit:function(n){n.preventDefault();var o=t.current.value,r=c.current.value;e.onAddQuote({author:o,text:r})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{className:"btn",onClick:function(){b(!1)},children:"Add Quote"})})]})})]})},f=c(35),h=c(36);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,n=Object(r.h)();return Object(o.useEffect)((function(){"completed"===c&&n.push("/quotes")}),[c,n]),Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.910a8d5f.chunk.js.map