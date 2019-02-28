var data =[]
var keys ;
var values ;

function ToDoList()
{   
    var date = document.getElementById("myDate").value
    var text1 = document.createTextNode(date)
    var description = document.getElementById("todoinput").value
    var text = document.createTextNode(description)
    var remove = "Remove"
        
    for(let index = 0; index < 1; index++) {
        newdata = {'Date': date, 'Description': description , 'Delete': 'Remove' }
        data.push(newdata)
    }
    createTable()
} 


function createTable () {
    key = Object.keys(data[0])

    value = data.map((elemen,index)=>{
        return Object.values(data[index])
    })
    
    var text = []
    var td = []
    var table = document.createElement('table');
    table.setAttribute('id', 'newTable')
    window.onLoad = load(); 

   function load(){
        var tbl = document.getElementById('newTable'); 
        if(tbl) tbl.parentNode.removeChild(tbl);
    } 
    for (var i = 0 ; i < 1; i++)
    {   
        var tr = document.createElement('tr')
        table.appendChild(tr)
        for(index = 0; index < key.length; index++) {
            th = document.createElement("th")
            th.setAttribute('id', key[index])
            th.innerHTML = key[index]
            tr.appendChild(th)
            
        }
    }
    for (var i = 0 ; i < data.length; i++)
    {
        var tr = document.createElement('tr'); 
        tr.setAttribute('id', i)
        table.appendChild(tr);
        for (var j = 0; j < key.length; j++) {
            var td = document.createElement('td')
            tr.appendChild(td)
            if (j === 2) {
              td.innerHTML = '<input type="button" value="Remove" onclick="deleteRow(event)">'
            } else {
              td.innerHTML = data[i][key[j]] // Adding values to each cells
            }
          }
    }
    document.body.appendChild(table)
    table.setAttribute( "border", "2" )
    //From stack overflow 
    // const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
    // const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    //     v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    //     )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    //     document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    //     const table = th.closest('table');
    //     Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
    //         .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
    //         .forEach(tr => table.appendChild(tr) );
    // })));
    addEventsToColumns();
}

function deleteRow(event) {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    var trId = tr.id

    tr.parentNode.removeChild(tr)
    // Deleting the data from array too
    if(data.length === 1) {
      data.splice(0)
    }
    else {
      data.splice(trId, 1)
    }
}

function addEventsToColumns() {
  var key = Object.keys(data[0]);
  for (var i = 0; i < key.length; i++) {
      document.getElementById(key[i]).addEventListener('click', function (event) {
          sortTable(event.target.innerText)
      })
  }
}




let flag = true;
function sortTable(param) {
  data.sort(compare);
  function compare(a, b) {
      if (a[param] > b[param] && flag)
          return 1;
      else
          return -1;
  }
  flag = !flag;
  createTable();
}