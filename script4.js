$(document).ready(function() {
    var __dom = document.getElementById("linechart");
    var __myChart = echarts.init(__dom);
    var app = {};

    var option;

    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/rain")
        .then(res => res.json())
        .then((out) => {
            $("#content_1 #View4Tbl").empty();
            $("#heading").text("latest 50 Measurements Types");
            let tab =
                `<tr>
      <th>Row_Number</th>
      <th>Date</th>
      <th>Time</th>
      <th>Measurement_Type</th>
      <th>Value</th>
     </tr>`;

            // Loop to access all rows 
            let count = 0;
            for (let r of out) {

                count = count + 1;
                if (count <= 50) {
                    tab += `<tr> 
                <td>${count} </td>
                <td>${r.date_time.slice(0,10)}</td> 
                <td>${r.date_time.slice(11,19)}</td>
                <td>Rain</td>
                <td>${r.rain}</td>
         
          
                </tr>`;
                    option = {
                        xAxis: {
                            type: 'category',
                            data: out.map(item => item.date_time.slice(11, 19))
                                // [r.date_time.slice(11, 19)]
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: out.map(item => item.rain),
                            type: 'line'
                        }]
                    };

                    if (option && typeof option === 'object') {
                        __myChart.setOption(option);
                    }
                }
            }
            // Setting innerHTML as tab variable
            document.getElementById("View4Tbl").innerHTML = tab;

        })
        .catch(err => { throw err });

    $('#Measurements').change(function() {

        $("#content_1 #View4Tbl").html("");
        var measurments = $('#Measurements').find(":selected").text();

        if (measurments == "rain") {
            $('#timeinterval').change(function() {
                var timeinterval = $('#timeinterval').find(":selected").text();

                if (timeinterval == "Now") {


                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/rain")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 Measurements Types");
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                    </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                if (count <= 50) {
                                    tab += `<tr> 
                                        <td>${count} </td>
                                        <td>${r.date_time.slice(0,10)}</td> 
                                        <td>${r.date_time.slice(11,19)}</td>
                                        <td>Rain</td>
                                        <td>${r.rain}</td>
                                
                                
                                        </tr>`;
                                    option = {
                                        xAxis: {
                                            type: 'category',
                                            data: out.map(item => item.date_time.slice(11, 19))
                                                // [r.date_time.slice(11, 19)]
                                        },
                                        yAxis: {
                                            type: 'value'
                                        },
                                        series: [{
                                            data: out.map(item => item.rain),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else
                if (timeinterval == "24 hours") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/23")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 24 hours, values are hourly averages");
                            let tab =
                                `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement_Type</th>
  <th>Value</th>
 </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;

                                tab += `<tr> 
            <td>${count} </td>
            <td>${r.date_time.slice(0,10)}</td> 
            <td>${r.date_time.slice(11,19)}</td>
            <td>Rain</td>
            <td>${r.rain}</td>
     
      
            </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }

                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "48 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/47")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 48 hours, values are hourly averages");
                            let tab =
                                `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement_Type</th>
  <th>Value</th>
 </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;

                                tab += `<tr> 
            <td>${count} </td>
            <td>${r.date_time.slice(0,10)}</td> 
            <td>${r.date_time.slice(11,19)}</td>
            <td>Rain</td>
            <td>${r.rain}</td>
     
      
            </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }

                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "72 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/71")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 72 hours, values are hourly averages");
                            let tab =
                                `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement_Type</th>
  <th>Value</th>
 </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;

                                tab += `<tr> 
            <td>${count} </td>
            <td>${r.date_time.slice(0,10)}</td> 
            <td>${r.date_time.slice(11,19)}</td>
            <td>Rain</td>
            <td>${r.rain}</td>
     
      
            </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }

                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 week") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/167")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest week, values are hourly averages");
                            let tab =
                                `<tr>
<th>Row_Number</th>
<th>Date</th>
<th>Time</th>
<th>Measurement_Type</th>
<th>Value</th>
</tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;

                                tab += `<tr> 
        <td>${count} </td>
        <td>${r.date_time.slice(0,10)}</td> 
        <td>${r.date_time.slice(11,19)}</td>
        <td>Rain</td>
        <td>${r.rain}</td>
 
  
        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }

                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 month") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/730")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest month, values are hourly averages");
                            let tab =
                                `<tr>
<th>Row_Number</th>
<th>Date</th>
<th>Time</th>
<th>Measurement_Type</th>
<th>Value</th>
</tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;

                                tab += `<tr> 
        <td>${count} </td>
        <td>${r.date_time.slice(0,10)}</td> 
        <td>${r.date_time.slice(11,19)}</td>
        <td>Rain</td>
        <td>${r.rain}</td>
 
  
        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.rain),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }

                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                }
            })

        } else if (measurments == "wind_speed") {
            $('#timeinterval').change(function() {
                var timeinterval = $('#timeinterval').find(":selected").text();

                if (timeinterval == "Now") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 Measurements Types");
                            let tab =
                                `<tr>
                  <th>Row_Number</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Measurement_Type</th>
                  <th>Value</th>
                 </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                if (count <= 50) {
                                    tab += `<tr> 
                            <td>${count} </td>
                            <td>${r.date_time.slice(0,10)}</td> 
                            <td>${r.date_time.slice(11,19)}</td>
                            <td>Wind_Speed</td>
                            <td>${r.wind_speed}</td>
                     
                      
                            </tr>`;
                                    option = {
                                        xAxis: {
                                            type: 'category',
                                            data: out.map(item => item.date_time.slice(11, 19))
                                                // [r.date_time.slice(11, 19)]
                                        },
                                        yAxis: {
                                            type: 'value'
                                        },
                                        series: [{
                                            data: out.map(item => item.wind_speed),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else
                if (timeinterval == "24 hours") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/23")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 24 hours, values are hourly averages");
                            let tab =
                                `<tr>
                  <th>Row_Number</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Measurement_Type</th>
                  <th>Value</th>
                 </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                            <td>${count} </td>
                            <td>${r.date_time.slice(0,10)}</td> 
                            <td>${r.date_time.slice(11,19)}</td>
                            <td>Wind_Speed</td>
                            <td>${r.wind_speed}</td>
                     
                      
                            </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }

                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "48 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/47")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 47 hours, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>Wind_Speed</td>
                        <td>${r.wind_speed}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "72 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/71")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 71 hours, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>Wind_Speed</td>
                        <td>${r.wind_speed}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 week") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/167")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest week, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>Wind_Speed</td>
                        <td>${r.wind_speed}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 month") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/730")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest month, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>Wind_Speed</td>
                        <td>${r.wind_speed}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                }
            })
        } else if (measurments == "light") {
            $('#timeinterval').change(function() {
                var timeinterval = $('#timeinterval').find(":selected").text();

                if (timeinterval == "Now") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/light")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 measurements types");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                if (count <= 50) {
                                    tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>light</td>
                        <td>${r.light}</td>
                 
                  
                        </tr>`;
                                    option = {
                                        xAxis: {
                                            type: 'category',
                                            data: out.map(item => item.date_time.slice(11, 19))
                                                // [r.date_time.slice(11, 19)]
                                        },
                                        yAxis: {
                                            type: 'value'
                                        },
                                        series: [{
                                            data: out.map(item => item.light),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else
                if (timeinterval == "24 hours") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/light/23")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 24 hours, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>light</td>
                        <td>${r.light}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "48 hours") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/light/47")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 48 hours, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>light</td>
                        <td>${r.light}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "72 hours") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/light/71")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 72 hours, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>light</td>
                        <td>${r.light}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 week") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/light/167")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest week, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>light</td>
                        <td>${r.light}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 month") {

                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/light/730")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest month, values are hourly averages");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>light</td>
                        <td>${r.light}</td>
                 
                  
                        </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.light),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                }
            })
        } else if (measurments == "temperature") {
            $('#timeinterval').change(function() {
                var timeinterval = $('#timeinterval').find(":selected").text();

                if (timeinterval == "Now") {


                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 50 measurements type");
                            let tab =
                                `<tr>
              <th>Row_Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Measurement_Type</th>
              <th>Value</th>
             </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                if (count <= 50) {
                                    tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>Temperature</td>
                        <td>${r.temperature}</td>
                 
                  
                        </tr>`;
                                    option = {
                                        xAxis: {
                                            type: 'category',
                                            data: out.map(item => item.date_time.slice(11, 19))
                                                // [r.date_time.slice(11, 19)]
                                        },
                                        yAxis: {
                                            type: 'value'
                                        },
                                        series: [{
                                            data: out.map(item => item.temperature),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        __myChart.setOption(option);
                                    }
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else
                if (timeinterval == "24 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/23")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 24 hours, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>Temperature</td>
                    <td>${r.temperature}</td>
             
              
                    </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.temperature),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "48 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/47")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 48 hours, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>Temperature</td>
                    <td>${r.temperature}</td>
             
              
                    </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.temperature),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "72 hours") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/71")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest 72 hours, values are hourly averages");
                            let tab =
                                `<tr>
      <th>Row_Number</th>
      <th>Date</th>
      <th>Time</th>
      <th>Measurement_Type</th>
      <th>Value</th>
     </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                <td>${count} </td>
                <td>${r.date_time.slice(0,10)}</td> 
                <td>${r.date_time.slice(11,19)}</td>
                <td>Temperature</td>
                <td>${r.temperature}</td>
         
          
                </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.temperature),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 week") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/167")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest week, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>Temperature</td>
                    <td>${r.temperature}</td>
             
              
                    </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.temperature),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                } else

                if (timeinterval == "1 month") {
                    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/730")
                        .then(res => res.json())
                        .then((out) => {
                            $("#content_1 #View4Tbl").empty();
                            $("#heading").text("latest month, values are hourly averages");
                            let tab =
                                `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

                            // Loop to access all rows 
                            let count = 0;
                            for (let r of out) {

                                count = count + 1;
                                tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>Temperature</td>
                    <td>${r.temperature}</td>
             
              
                    </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: out.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: out.map(item => item.temperature),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    __myChart.setOption(option);
                                }
                            }
                            // Setting innerHTML as tab variable
                            document.getElementById("View4Tbl").innerHTML = tab;

                        })
                        .catch(err => { throw err });
                }
            })
        }
    })
})