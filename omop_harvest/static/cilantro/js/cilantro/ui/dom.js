define([],function(){var e=function(e,t,i){var n=e.children(),o=n.size();return 0>t&&(t=Math.max(0,o+1+t)),e.append(i),o>t&&n.eq(t).before(n.last()),e};return{insertAt:e}});
//@ sourceMappingURL=dom.js.map