// Generated by CoffeeScript 1.6.3
define(['cilantro'], function(c) {
  var safeMethod, sameOrigin;
  sameOrigin = function(url) {
    var host, origin, protocol, sr_origin;
    host = document.location.host;
    protocol = document.location.protocol;
    sr_origin = '//' + host;
    origin = protocol + sr_origin;
    return (url === origin || url.slice(0, origin.length + 1) === origin + '/') || (url === sr_origin || url.slice(0, sr_origin.length + 1) === sr_origin + '/') || !(/^(\/\/|http:|https:).*/.test(url));
  };
  safeMethod = function(method) {
    return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
  };
  return $.ajaxPrefilter(function(settings, origSettings, xhr) {
    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
      return xhr.setRequestHeader('X-CSRFToken', window.csrf_token);
    }
  });
});
