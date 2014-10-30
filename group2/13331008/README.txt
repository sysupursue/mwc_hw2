�������url��    1.http://www.statsoft.com/textbook/distribution-tables
		2.http://dev.mysql.com/doc/refman/5.0/en/statistics-table.html
		3.http://www.irs.gov/uac/SOI-Tax-Stats-Historic-Table-2

ʹ��һ�´��뼴������

    	tables = document.getElementsByTagName("table");
	for (var i = 0; i < tables.length; i++) {
		var th = tables[i].rows[0].cells;
		tables[i].col = -1; // ������table�м�¼�������th��û����Ϊ-1

		for (var j = 0; j < th.length; j++) {
			th[j].tableNum = i; // ��¼�������th������table
			th[j].column = j; // ��¼�������th
			th[j].clickFlag = 0; // �����жϵ�����������ǽ�������

			th[j].onclick = function() {
				var table = this.parentNode.parentNode.parentNode; // ��ñ������th������table
				var tr = table.rows, th = tr[0].cells;

				// �ı��ͷ
				if (this.clickFlag == 0) { // �ж��������ǽ����ͷ
					if (table.col != -1) { //�ж��ǲ�����ͬһ��table�е��
						th[table.col].className = th[table.col].className.replace(" changed1", "");
						th[table.col].className = th[table.col].className.replace(" changed2", "");
						th[table.col].clickFlag = 0; // ȥ��table�����б�ͷ������table��֮ǰ������е�clickFlag����
					}
					th[this.column].className += " changed1"; // ʹ�������ͷ
				}
				else {
					th[this.column].className = th[this.column].className.replace(" changed1", " changed2"); // ʹ�ý����ͷ
				}

				this.clickFlag = 1 - this.clickFlag;
				table.col = this.column;

				// ��ÿһ�н�������ѡ�����򣬸���clickFlag��ȷ���������ǽ�������
				for (var x = 1; x < tr.length - 1; x++) {
					var temp;

					for (var y = x + 1; y < tr.length; y++) {
						if ((this.clickFlag != 0 && tr[x].cells[this.column].innerHTML > tr[y].cells[this.column].innerHTML)
							|| (this.clickFlag == 0 && tr[x].cells[this.column].innerHTML < tr[y].cells[this.column].innerHTML)) {
							temp = tr[x].innerHTML;
							tr[x].innerHTML = tr[y].innerHTML;
							tr[y].innerHTML = temp;
						}
					}
				}
			};
		}
	}