/*********************************************************
 *Date:2014.10.27
 *Author:Panbin
 *********************************************************/
 //获取表格所有数据
 function getAllTables()
 {
    return document.getElementsByTagName('table');
}

 //设置点击事件的处理
 window.onload = function ()
 {
    var tables = getAllTables();
    makeAllTablesSortable(tables);
}

//表格排序
function makeAllTablesSortable(tables)
{
    var data = [ ];

    var tableNum = tables.length;
    console.log("make_table_length = "+tables.length);

    //遍历每个表格
    for(var t = 0 ; t < tableNum ; t++)
    {
        console.log("tableNum = table["+t+"]");
        //遍历表行
        for (var r = 1 ; r < tables.item(t).rows.length ; r++)
        {
            console.log("table_rows = row["+r+"]");
            //遍历表列
            for(var c = 0 ; c < tables.item(t).rows[r].cells.length ; c++)
            {
              console.log("table_rows = col["+c+"]");
              data.push(tables.item(t).rows[r].cells[c].innerHTML)
          }
      }
  }

  for(var i = 0 ; i < data.length ; i++)
      console.log(data[i]+'\t');
}