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
        newdata = {'Date': date, 'Description': description , 'Delete': remove }
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
    var thead = document.createElement('thead');
    table.appendChild(thead)
    window.onLoad = load(); 

   function load()
   {
    var tbl = document.getElementById('newTable'); 
    if(tbl) tbl.parentNode.removeChild(tbl);} 
    for (var i = 0 ; i < key.length; i++)
    {
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(key[i]))
    }
    for (var i = 0 ; i < value.length; i++)
    {
        var tr = document.createElement('tr'); 
        
        for (var j = 0 ; j < key.length; j++)  
            {
                td[j] = document.createElement('td');
                text[j]= document.createTextNode(value[i][j]);
                td[j].appendChild(text[j]);
                tr.appendChild(td[j]);
                
            }
    table.appendChild(tr);
    }

document.body.appendChild(table)
table.setAttribute( "border", "2" )
//From stack overflow 
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));
}