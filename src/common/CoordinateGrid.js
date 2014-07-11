
function CoordinateGrid(buildFunc, rtl) {

	var t = this;
	var rows;
	var cols;
	
	
	t.build = function() {
		var result = buildFunc();
		rows = result.rows;
		cols = result.cols;
	};
	
	
	t.cell = function(x, y) {
		var r=-1, c=-1, result;

		function isBetween(a, s, t) {
			return (a >= s && a < t);
		}
		function rowCoordinateMatcher(y0) {
			return function(row) {
				return isBetween(y0, row[0], row[1]);
			};
		}
		function colCoordinateMatcher(x0) {
			return function(col) {
				return isBetween(x0, col[0], col[1]);
			};
		}

		result = rows.filter(rowCoordinateMatcher(y));
		if (result.length > 0) {
			r = rows.indexOf(result[0]);
		}

		result = cols.filter(colCoordinateMatcher(x));
		if (result.length > 0) {
			c = cols.indexOf(result[0]);
		}

		return (r>=0 && c>=0) ? { row: r, col: c } : null;
	};
	
	
	t.rect = function(row0, col0, row1, col1, originElement) { // row1,col1 is inclusive
		var origin = originElement.offset();
		if (rtl) {
			return {
				top: rows[row0][0] - origin.top,
				left: cols[col1][0] - origin.left,
				width: cols[col0][1] - cols[col1][0],
				height: rows[row1][1] - rows[row0][0]
			};
		}
		else {
			return {
				top: rows[row0][0] - origin.top,
				left: cols[col0][0] - origin.left,
				width: cols[col1][1] - cols[col0][0],
				height: rows[row1][1] - rows[row0][0]
			};
		}
	};

}
