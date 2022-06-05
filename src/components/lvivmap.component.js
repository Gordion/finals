import React, { Component, useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
// import banner from "./maxresdefault.jpg";
// import regions from "./Lviv_regions.svg";
import * as d3 from "d3";
import rd3 from "react-d3-library";
import { queue } from "d3-queue";
import "./lvivmap.styles.css";

// export default class LvivMap extends Component {

//   render() {

//     return (

//       <div className="App">
//           <div id="my_dataviz"></div>
//         </div>
//   );
//   }

// }

export default function LvivMap(props) {
  const ref = useRef();
  useEffect(() => {
    // const [mapD3, setMapD3] = useState();

    const node = ref.current; // document.createElement("div");

    var mw = 500; // map container width
    var mh = 600; // map container height
    var main_chart_svg = d3.select(node);

    // var legend_svg = d3.select("#legend_container").append("svg").attr({
    //   width: 200,
    //   height: 600,
    // });

    var hue = "g"; /* b=blue, g=green, r=red colours - from ColorBrewer */

    /* break the data values into 9 ranges of €100 each   */
    /* max and min values already known so 400-1300 works */
    var quantize = d3.scale
      .quantize()
      .domain([400, 1300])
      .range(
        d3.range(9).map(function (i) {
          return hue + i + "-9";
        })
      );

    /* declare locale so we can format values with euro symbol */
    var ie = d3.locale({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["€", ""],
      dateTime: "%a %b %e %X %Y",
      date: "%d/%m/%Y",
      time: "%H:%M:%S",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    });

    var rateById = d3.map();

    var lastActive = "";
    var ireland;
    var data;
    var defaultScale = 0.6; /* default scale of map - fits nicely on standard screen */
    var scale = 3; /* maximum size to zoom county */

    var format = ie.numberFormat("$, #,##0d");

    /* Thanks to http://stackoverflow.com/users/3128209/ameliabr for tips on creating a quantized legend */
    // var legend = legend_svg
    //   .selectAll("g.legendEntry")
    //   .data(quantize.range())
    //   .enter()
    //   .append("g")
    //   .attr("class", "legendEntry");

    // legend
    //   .append("rect")
    //   .attr("x", 20)
    //   .attr("y", function (d, i) {
    //     return i * 25 + 20;
    //   })
    //   .attr("width", 15)
    //   .attr("height", 15)
    //   .attr("class", function (d) {
    //     return d;
    //   })
    //   .style("stroke", "black")
    //   .style("stroke-width", 1)
    //   .on("click", function (d) {
    //     if (lastActive == "") {
    //       resetAll();
    //       d3.select(ireland)
    //         .selectAll("." + d)
    //         .attr(
    //           "class",
    //           "highlight"
    //         ); /* Highlight all counties in range selected */
    //     }
    //   });

    // legend
    //   .append("text")
    //   .attr("x", 40) //leave 5 pixel space after the <rect>
    //   .attr("y", function (d, i) {
    //     return i * 25 + 20;
    //   })
    //   .attr("dy", "0.8em") //place text one line *below* the x,y point
    //   .text(function (d, i) {
    //     var extent = quantize.invertExtent(d);
    //     //extent will be a two-element array, format it however you want:
    //     return format(extent[0]) + " - " + format(+extent[1]);
    //   })
    //   .style("font-family", "sans-serif")
    //   .style("font-size", "12px");

    /* Data has key "county" and value "rental" - i.e. average rental price per county */
    queue()
      .defer(
        d3.csv,
        "https://gist.githubusercontent.com/Gordion/7fdbf9c919564fc1773622cbd552060f/raw/15c6efd7a35c10469674b7ff735c1a05cb8fa9af/rentals-2015-bycounty.csv",
        data
      )
      .await(ready);

    function ready(error, data) {
      if (error) throw error;

      d3.map(data, function (d) {
        rateById.set(d.county, +d.rental);
      }); /* create the data map */

      d3.xml(
        "https://gist.githubusercontent.com/Gordion/9effa1d8e6e4051b49a983fedd8fb1f0/raw/6c581f5facecdd0887491a62a43a2b038956b5ea/ireland.svg",
        "image/svg+xml",
        function (error, xml) {
          /* embed the SVG map */
          if (error) throw error;

          // var countyTable = tabulate(data, [
          //   "county",
          //   "rental",
          // ]); /* render the data table */

          var svgMap =
            xml.getElementsByTagName("g")[0]; /* set svgMap to root g */

          ireland = main_chart_svg
            .node()
            .appendChild(svgMap); /* island of Ireland map */

          d3.select(ireland)
            .selectAll("#NI") /* Group Northern Ireland together */
            .attr("class", "region NI");

          d3.select(ireland)
            .selectAll("#republic") /* Group Republic of Ireland together */
            .attr("class", "region republic");

          d3.select(ireland)
            .selectAll("#republic")
            .selectAll("path") /* Map Republic counties to rental data */
            .attr("class", function (d) {
              return quantize(rateById.get(this.id));
            })
            .append("title")
            .text(function (d) {
              /* add title = name of each county and average rental */ return (
                this.parentNode.id +
                ", " +
                format(rateById.get(this.parentNode.id))
              );
            });

          d3.select(ireland)
            .selectAll("#republic")
            .selectAll("path")
            .on("mouseover", function (d) {
              if (d3.select(this).classed("active"))
                return; /* no need to change class when county is already selected */
              d3.select(this).attr("class", "hover");
            })
            .on("mouseout", function (d) {
              if (d3.select(this).classed("active")) return;
              d3.select(this).attr("class", function (d) {
                /* reset county color to quantize range */ return quantize(
                  rateById.get(this.id)
                );
              });
            })
            .on("click", function (d) {
              zoomed(d3.select(this));
            });

          /* Let's add an id to each group that wraps a path */
          d3.select(ireland)
            .selectAll("#republic")
            .selectAll("path")
            .each(function (d) {
              d3.select(this.parentNode).attr("id", this.id);
            });

          /* Now add a text box to the group with content equal to the id of the group */
          d3.select(ireland)
            .selectAll("#republic")
            .selectAll("g")
            .append("svg:text")
            .text(function (d) {
              return this.parentNode.id;
            })
            .attr("x", function (d) {
              // console.log(d3.select(this.parentNode).select("path").attr("d"));
              //return 600;
              //d3.select(ireland).select("path")
              return getBoundingBox(
                d3.select(this.parentNode).select("path")
              )[4];
            })
            .attr("y", function (d) {
              return getBoundingBox(
                d3.select(this.parentNode).select("path")
              )[5];
            })
            //	   .attr("text-anchor","middle")
            //	   .attr("font-family", "sans-serif")
            //	   .attr("stroke-width", 0.5)
            .classed("text", true);
          //	   .attr("fill", "#333")
          //	   .attr('font-size','10pt')
        }
      );
    }

    /* Thanks to http://bl.ocks.org/phil-pedruco/7557092 for the table code */
    /* and style - and what a coincidence he also used a map of Ireland!	*/

    // function tabulate(data, columns) {
    //   var table = d3.select("#table_container").append("table");
    //   (thead = table.append("thead")), (tbody = table.append("tbody"));

    //   // append the header row
    //   thead
    //     .append("tr")
    //     .selectAll("th")
    //     .data(columns)
    //     .enter()
    //     .append("th")
    //     .text(function (column) {
    //       return column;
    //     });

    //   // create a row for each object in the data
    //   var rows = tbody
    //     .selectAll("tr")
    //     .data(data)
    //     .enter()
    //     .append("tr")
    //     .on("click", function (d) {
    //       tableRowClicked(d);
    //     });

    //   // create a cell in each row for each column
    //   var cells = rows
    //     .selectAll("td")
    //     .data(function (row) {
    //       return columns.map(function (column) {
    //         return { column: column, value: row[column] };
    //       });
    //     })
    //     .enter()
    //     .append("td")
    //     //        .attr("style", "font-family: Courier") // sets the font style
    //     .html(function (d) {
    //       if (d.column == "rental") return format(d.value);
    //       else return d.value;
    //     });

    //   return table;
    // }

    function zoomed(d) {
      /* Thanks to http://complextosimple.blogspot.ie/2012/10/zoom-and-center-with-d3.html 	*/
      /* for a simple explanation of transform scale and translation  			*/
      /* This function centers the county's bounding box in the map container		*/
      /* The scale is set to the minimum value that enables the county to fit in the	*/
      /* container, horizontally or vertically, up to a maximum value of 3.			*/
      /* If the full width of container is not required, the county is horizontally centred */
      /* Likewise, if the full height of the container is not required, the county is	*/
      /* vertically centred.								*/

      var xy =
        getBoundingBox(d); /* get top left co-ordinates and width and height 	*/
      if (d.classed("active")) {
        /* if county is active reset map scale and county colour */
        d.attr("class", function (d) {
          return quantize(rateById.get(this.id));
        });
        main_chart_svg
          .selectAll("#viewport")
          .transition()
          .duration(750)
          .attr("transform", "scale(" + defaultScale + ")");
        lastActive = "";
      } else {
        /* zoom into new county      */
        resetAll(); /* reset county colors	     */

        /* scale is the max number of times bounding box will fit into container, capped at 3 times */
        scale = Math.min(mw / xy[1], mh / xy[3], 3);

        /* tx and ty are the translations of the x and y co-ordinates */
        /* the translation centers the bounding box in the container  */
        var tx = -xy[0] + (mw - xy[1] * scale) / (2 * scale);
        var ty = -xy[2] + (mh - xy[3] * scale) / (2 * scale);

        main_chart_svg
          .selectAll("#viewport")
          .transition()
          .duration(750)
          .attr(
            "transform",
            "scale(" + scale + ")translate(" + tx + "," + ty + ")"
          );
        d.attr("class", "active");
        lastActive = d.attr("id");
      }
    }

    function reset(selection) {
      /* resets the color of a single county */
      if (selection != "")
        d3.select(ireland)
          .select("#" + selection)
          .attr("class", function (d) {
            return quantize(rateById.get(this.id));
          });
    }

    function resetAll() {
      /* resets the color of all counties */
      d3.select(ireland)
        .selectAll("#republic")
        .selectAll("path")
        .attr("class", function (d) {
          return quantize(rateById.get(this.id));
        });
    }

    function tableRowClicked(x) {
      /* resets colors and zooms into new county */
      resetAll();
      lastActive = x.county;
      zoomed(
        d3
          .select(ireland)
          .selectAll("#" + x.county)
          .select("path")
      );
    }

    function getBoundingBox(selection) {
      /* get x,y co-ordinates of top-left of bounding box and width and height */
      const element = selection.node();
      const bbox = element.getBBox();
      const cx = bbox.x + bbox.width / 2;
      const cy = bbox.y + bbox.height / 2;
      return [bbox.x, bbox.width, bbox.y, bbox.height, cx, cy];
    }
    // d3.select(node).style("height", "650px");
  }, []);

  // setMapD3(node);

  // const RD3Component = rd3.Component;

  return <svg ref={ref} width="500" height="600" />;
}
