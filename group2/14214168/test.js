/*********************************************************
 *Date:2014.10.27
 *Author:Panbin
 *********************************************************/
 //设置点击事件的处理
 window.onload() = function () {
    var tables = getAllTables();
    makeAllTablesSortable(tables);
}

//获取表格所有数据
function getAllTables(){
    return document.getElementsByTagName(table);
}

//表格排序
function makeAllTablesSortable(){

}