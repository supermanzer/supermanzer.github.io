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
 * Checks to see if the given url is found and returns a boolean value
 * indicating the validity.
 * @param {String} url
 * @return {Boolean} is found
*/
function checkURL(url) {
    xhr = new XMLHttpRequest();
    xhr.open('HEAD',url, true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.setRequestHeader('Accept', 'text/html');
    xhr.send();
    if (xhr.status === 200) {
        return true;
    } else {
        return false;
    }
}
/**
 * Returns the URL for the standard meteorological summary text file
 * for NDBC 46042.
 * @return {String} url
*/
function getLastFullMonthURL() {
    let mNum = new Date(Date.now()).getMonth();
    let urlIsValid = false;
    let mA = '';
    let base_url ='';
    do {
        mNum--;
        mA = monthAbbrev(mNum);
        base_url = `http://www.ndbc.noaa.gov/data/stdmet/${mA}/46042.txt`;
        urlIsValid = checkURL(base_url);
    } while (urlIsValid === false && mNum >= 0);
    if (urlIsValid) {
        return base_url;
    } else {
        return "I'm sorry.  Something is amok with this code."
    }

}

function getMonthName(mNum) {
    mNames = ['January', 'February', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return mNames[mNum]
}

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

        var svg = d3.select("svg#wind_hist"),
        margin = {top: 10, right: 30, bottom: 30, left: 30},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var max = d3.max(values.WDIR);
        var min = d3.min(values.WDIR);
        var x = d3.scaleLinear()
            .domain([min, max])
            .range([0, width ]);

        var data = d3.histogram()
            .domain(x.domain())
            .thresholds(x.ticks(20))
            (values.WDIR);

        var yMax = d3.max(data, function(d){return d.length});
        var yMin = d3.min(data, function(d){return d.length});
        var colorScale = d3.scaleSequential(d3.interpolateYlGnBu)
               .domain([-20, yMax]);

        var y = d3.scaleLinear()
            .domain([0, yMax])
            .range([height, 0]);

        var bar = g.selectAll('.bar')
           .data(data)
           .enter().append("g")
               .attr("class", "bar")
               .attr('transform',function(d){return  'translate(' + x(d.x0) + ',' + y(d.length) + ')'});

       bar.append("rect")
           .attr("x",1)
           .attr("width", x(data[0].x1) - x(data[0].x0) - 1)
           .attr("height", function(d) {return height - y(d.length);})
           .attr("fill", function(d){return colorScale(d.length)});



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

       g.append("g")
           .call(d3.axisLeft(y));
    });
}
