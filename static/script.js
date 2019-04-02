let getJSON = function (url, params, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.responseType = 'json';
    xhr.onload = function () {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send(params);
};

function searchClicked(){
    let query = document.getElementById('search').value;
    let params = JSON.stringify({message:query});

    getJSON('/test', params, function(err, data){
        if(err !== null){
            console.log("error retrieving data" + err)
        }
        else{
            var x = document.getElementById("myTable").rows.length;
            for(var i=x-1; i > 0; i-=1) {
                document.getElementById("myTable").deleteRow(i);
            } 
            var items = data['msg']
             cols = document.querySelector("#table > table > thead > tr").children.length, // Get length of the columns in thead
             tbody = document.querySelector("#table > table > tbody");
             for (var i = 0; i < items.length; i += 1) {
                var row = tbody.insertRow(i);
                for (var j = 0; j < cols; j += 1) {
                  var cell = row.insertCell(j);
                  if (j === 0) { // First td
                    var id = document.createTextNode(items[i][0]);
                    cell.appendChild(id);
                  }
                  if (j === 1) { // Second td
                    var name = document.createTextNode(items[i][1]);
                    cell.appendChild(name);
                  }
                  if (j === 2) { // Third td
                    var price = document.createTextNode(items[i][2]);
                    cell.appendChild(price);
                  }
                }
              }
            console.log(data['msg'])
        }
    });
}

function allClicked(){
    let query = 'show all';
    let params = JSON.stringify({message:query});

    getJSON('/test', params, function(err, data){
        if(err !== null){
            console.log("error retrieving data" + err)
        }
        else{
            var x = document.getElementById("myTable").rows.length;
            for(var i=x-1; i > 0; i-=1) {
                document.getElementById("myTable").deleteRow(i);
            } 
            var items = data['msg']
             cols = document.querySelector("#table > table > thead > tr").children.length, // Get length of the columns in thead
             tbody = document.querySelector("#table > table > tbody");
             for (var i = 0; i < items.length; i += 1) {
                var row = tbody.insertRow(i);
                for (var j = 0; j < cols; j += 1) {
                  var cell = row.insertCell(j);
                  if (j === 0) { // First td
                    var id = document.createTextNode(items[i][0]);
                    cell.appendChild(id);
                  }
                  if (j === 1) { // Second td
                    var name = document.createTextNode(items[i][1]);
                    cell.appendChild(name);
                  }
                  if (j === 2) { // Third td
                    var price = document.createTextNode(items[i][2]);
                    cell.appendChild(price);
                  }
                }
              }
            console.log(data['msg'])
        }
    });
}