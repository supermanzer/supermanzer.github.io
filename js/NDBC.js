/**
 * NDBC.js - A collection of functions to generate D3 visualizations
 * of NDBC 46042 data.
 *
 * DEPENDS ON:
 *   D3.js
*/
/**
 * Returns the three letter abbreviation of a given month number
 * (starting at 0)
 * @param {Number} month number
 * @return {String} 3 letter month abbreviation
 */
 function monthAbbrev(mNum) {
     const mAbbrevs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     return mAbbrevs[mNum];
 }

/**
* Returns the full month name based on a given month number
* @param {Number} month number
* @return {String} Full month name
*/
 function getMonthName(mNum) {
     mNames = ['January', 'February', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     return mNames[mNum]
 }

 /**
  * Generates histogram plot of wind direction
  */
  function plotStdMet() {
      d3.json("data/stdmet.json", function(error, data) {
          if (error) {
              throw error;
          }
          columns = Object.keys(data);

          for (var i = 0; i < columns.length; i++) {
              k = columns[i];
              if (i === 0) {
                  var time = Object.keys(data[k]).map(x => new Date(x));
                  data['time'] = time;
              }
              data[k] = Object.values(data[k]).map(x => +x);
          }
          var values = data;

          var txtTitle = 'Histogram of Wind Direction for ' + getMonthName(data['time'][20].getMonth()) + " " + data['time'][20].getFullYear();

          var formatCount = d3.format(",.0f");
          // scaling our plot to the window size.
          var w = document.getElementById('d_wind_hist').clientWidth,
              h = .65 * w;

         // Let's adjust our title's shape too
         if (w < 600) {
             var txtTitle = 'Histogram of Wind Direction <br/> for ' + getMonthName(data['time'][20].getMonth()) + " " + data['time'][20].getFullYear();
         }

          var svg = d3.select("svg#wind_hist")
                .attr('width', w)
                .attr('height', h),
          margin = {top: 10, right: 30, bottom: 60, left: 60},
          width = +svg.attr("width") - margin.left - margin.right,
          height = +svg.attr("height") - margin.top - margin.bottom,
          g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          var tt = d3.select("div#d_wind_hist").append("div")
                    .attr('class', 'tooltip')
                    .style('opacity', 0);

          var max = d3.max(values.WDIR);
          var min = d3.min(values.WDIR);
          var x = d3.scaleLinear()
              .domain([0, 360])
              .range([0, width ]);

          //
          var data = d3.histogram()
              .domain(x.domain())
              .thresholds(x.ticks(36))
              (values.WDIR);
          const dind = data.length-1;
          data[dind-1].length += data[dind].length
          data.splice(dind,1);

          var yMax = d3.max(data, function(d){return d.length});
          var yMin = d3.min(data, function(d){return d.length});
          var totalHours = d3.sum(data, function(d){return d.length});
          var colorScale = d3.scaleSequential(d3.interpolateYlGnBu)
                 .domain([-20, yMax]);

          var y = d3.scaleLinear()
              .domain([0, yMax])
              .range([height, 0])
              ;

          var bar = g.selectAll('.bar')
             .data(data)
             .enter().append("g")
                 .attr("class", "bar")
                 .attr('transform',function(d){return  'translate(' + x(d.x0) + ',' + y(d.length) + ')'});

         bar.append("rect")
             .attr("x",1)
             .attr("width", x(data[0].x1) - x(data[0].x0) - 1)
             .attr("height", function(d) {return height - y(d.length);})
             .attr("fill", function(d){return colorScale(d.length)})
             .on("mouseover", function(d){
                 tt.transition()
                    .duration(200)
                    .style("opacity", 0.8);
                tt.html("WDIR: " + d.x0 + "&deg; - " + d.x1 + "&deg; <hr/> " + d.length + " hours - " + d3.format(".1%")(d.length/totalHours) + " of total")
                    .style("left", (d3.event.pageX) + "px")
                    .style("top",(d3.event.pageY -28)+ "px");
                })
            .on("mouseout", function(d){
                tt.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

         svg.append('text')
             .attr("x", (width/2))
             .attr("y", 20)
             .attr("text-anchor", "middle")
             .attr("class", "graph-title")
             .text(txtTitle);

         g.append("g")
             .attr("class", "axis axis--x")
             .attr('transform', 'translate(0,' + height + ')')
             .call(d3.axisBottom(x));
        //Add x axis label - it's good practice
        svg.append("text")
            .attr('transform', 'translate(' + w/2 + ',' + (h+margin.top - 20) + ')')
            .style("text-anchor","middle")
            .text("Wind Direction (blowing from)")

         g.append("g")
             .call(d3.axisLeft(y));

        svg.append('text')
            .attr("transform", "rotate(-90)")
            .attr("y", 0 )
            .attr("x", 0 - (h/2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("# of Hours");
      });
  }

/**
 * Plots a radial histogram of wind direction
 */
 function wdirRadHist() {
     var w = document.getElementById('d_rad_hist').clientWidth,
         h = 0.65 * w,
         bar_h = h / 2 - 40;

    var formatNumber = d3.format("s");

    var svg = d3.select("svg#rad_hist")
                .attr('width', w)
                .attr('height', h)
                .append('g')
                    .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');
    d3.d3.json('data/stdmet.json', function(error, data) {
        if (error) {
            throw error;
        }
        columns = Object.keys(data);
        for (var i = 0; i < columns.length; i++) {
            k = columns[i];
            if (i === 0) {
                var time = Object.keys(data[k]).map(x => new Date(x));
                data['time'] = time;
            }
            data[k] = Object.values(data[k]).map(x => +x);
        }
        var values = data,
            data = values['WDIR'];

        var extent = d3.extent(function(d){return d.value; });
        var barScale = d3.scaleLinear()
                        .domain(extent)
                        .range([0, -barheight]);

    });
 }
