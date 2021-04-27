$(document).ready(function() {
    var __dom = document.getElementById("barchart");
    var __myChart = echarts.init(__dom);
    var app = {};

    var option;
    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction")
        .then(res => res.json())
        .then((out) => {
            $("#content_1 #View4Tbl").empty();
            $("#heading").text("latest 20 Measurements Types");
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
                if (count <= 20) {
                    tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>wind_direction</td>
                    <td>${r.wind_direction}</td>
             
              
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
                            data: out.map(item => item.wind_direction),
                            type: 'bar'
                        }]
                    };

                    if (option && typeof option === 'object') {
                        __myChart.setOption(option);
                    }
                }
            }
            // Setting innerHTML as tab variable
            document.getElementById("View3Tbl").innerHTML = tab;

        })
        .catch(err => { throw err });

    $('#timeinterval').change(function() {
        var timeinterval = $('#timeinterval').find(":selected").text();

        if (timeinterval == "Now") {

            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction")
                .then(res => res.json())
                .then((out) => {
                    $("#content_1 #View4Tbl").empty();
                    $("#heading").text("latest 20 measurements Types");
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
                        if (count <= 20) {
                            tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.slice(0,10)}</td> 
                        <td>${r.date_time.slice(11,19)}</td>
                        <td>wind_direction</td>
                        <td>${r.wind_direction}</td>
                 
                  
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
                                    data: out.map(item => item.wind_direction),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }

                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("View3Tbl").innerHTML = tab;

                })
                .catch(err => { throw err });

        } else
        if (timeinterval == "24 hours") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23")
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
                        if (count <= 50) {
                            tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>wind_direction</td>
                    <td>${r.wind_direction}</td>
             
              
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
                                    data: out.map(item => item.wind_direction),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("View3Tbl").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (timeinterval == "48 hours") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/47")
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
                        if (count <= 50) {
                            tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>wind_direction</td>
                    <td>${r.wind_direction}</td>
             
              
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
                                    data: out.map(item => item.wind_direction),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("View3Tbl").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (timeinterval == "72 hours") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/71")
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
                        if (count <= 50) {
                            tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>wind_direction</td>
                    <td>${r.wind_direction}</td>
             
              
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
                                    data: out.map(item => item.wind_direction),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("View3Tbl").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (timeinterval == "1 week") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/167")
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
                        if (count <= 50) {
                            tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>wind_direction</td>
                    <td>${r.wind_direction}</td>
             
              
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
                                    data: out.map(item => item.wind_direction),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("View3Tbl").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (timeinterval == "1 month") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/730")
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
                        if (count <= 50) {
                            tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>wind_direction</td>
                    <td>${r.wind_direction}</td>
             
              
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
                                    data: out.map(item => item.wind_direction),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("View3Tbl").innerHTML = tab;

                })
                .catch(err => { throw err });
        }
    })
})