document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=document.querySelector(".wall");if("wall"===t.target.className){var n=i.getBoundingClientRect(),l=parseInt(window.getComputedStyle(i).borderTopWidth),c=n.bottom-n.top-2*l,o=n.right-n.left-2*l,a=t.clientY-e.clientHeight/2-n.top-l,d=t.clientX-e.clientWidth/2-n.left-l;a=Math.min(Math.max(0,a),c-e.clientHeight),d=Math.min(Math.max(0,d),o-e.clientWidth),e.style.top="".concat(a,"px"),e.style.left="".concat(d,"px")}});
//# sourceMappingURL=index.a6b7079b.js.map