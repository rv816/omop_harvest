define([],function(){var t={chart:{style:{fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif'}},title:{text:"",align:"right"},subtitle:{align:"right"},exporting:{enabled:!1},credits:{enabled:!1},tooltip:{formatter:function(){if(this.point.values){var t=[];return t.push("<strong>"+this.series.xAxis.axisTitle.text+"</strong>:"),t.push(this.point.values[0]+"<br>"),t.push("<strong>"+this.series.yAxis.axisTitle.text+"</strong>:"),t.push(this.y),t.join("")}return this.key},snap:1,useHTML:!0,borderWidth:1,borderRadius:3},plotOptions:{series:{cursor:"pointer",shadow:!1,borderWidth:0,borderColor:"#4b8cf7",turboThreshold:0,animation:{duration:400},color:"#777",states:{select:{color:"#0088cc"},hover:{enabled:!1}}},area:{lineWidth:1,shadow:!1,stacking:"normal",states:{hover:{lineWidth:1}},marker:{enabled:!1,states:{hover:{enabled:!0,radius:5}}},fillOpacity:.1},areaspline:{lineWidth:1,shadow:!1,states:{hover:{lineWidth:1}},marker:{enabled:!1,states:{hover:{enabled:!0}}},fillOpacity:.1},bar:{borderWidth:0,minPointLength:2},column:{borderWidth:0,minPointLength:2},pie:{allowPointSelect:!0,cursor:"pointer",showInLegend:!0},scatter:{marker:{radius:5,states:{hover:{enabled:!1}}},states:{hover:{marker:{enabled:!1}}}}}},e={chart:{defaultSeriesType:"areaspline",margin:[0,0,0,0],height:40},title:{text:"",align:"left",y:0,x:0,style:{fontSize:"8px",color:"#333333"}},credits:{enabled:!1},legend:{enabled:!1},tooltip:{enabled:!1},xAxis:{startOnTick:!0,labels:{enabled:!1}},yAxis:{endOnTick:!0,labels:{enabled:!1}},plotOptions:{series:{lineWidth:1,shadow:!1,states:{hover:{enabled:!1}},marker:{enabled:!1}},areaspline:{fillOpacity:.1},area:{fillOpacity:.1}}};return{defaults:t,sparkline:e}});
//@ sourceMappingURL=options.js.map