var SchedGrid = {
	
	// Height of Each Schedule Block
	cellHeight: 70,
			
	init: function() {
		SchedGrid.tableSetup();
		SchedGrid.emptyBlockSetup();		
	},
			
	tableSetup: function() {
		
		// Build Table and Save Selectors
		var view = $('#sched-view');
		view.append('<table cellspacing="0" cellpadding="0"><thead><tr></tr></thead><tbody><tr></tr></tbody></table>');
		var head = view.find('thead tr');
		var row = view.find('tbody tr');
		
		// Build Header
		for(i = -1; i < 5; i++) {
			var cell = $('<th></th>');
			if (i >= 0) { cell.html(DAYS[i]); } // Index -1 is Empty Cell
			head.append(cell);
		}
		
		// Set Up Time Column
		var times = $('<td class="sched-column sched-col-time"></td>');
		var cell;
		for(i = START_HOUR; i < END_HOUR; i++) {
			cell = $('<div class="sched-cell sched-cell-time"></div>');
			if (i < 12) { cell.html(i + ' AM'); }
			else if (i === 12) { cell.html('12 PM'); } // Modulo Doesn't Work Here
			else { cell.html(i%12 + ' PM'); }
			times.append(cell);
		}
		row.append(times);
		
		var col;
		for(i = 0; i < 5; i++) {
			col = $('<td class="sched-column" id="sched-col-'+i+'"></td>');
			
			for (j = START_HOUR; j < END_HOUR; j++) {
				cell = $('<div class="sched-cell" id="sched-cell-'+i+'-'+j+'"></div>');
				col.append(cell);
			}
			
			// Append All to Master View
			row.append(col);
		}
		
		// Adjust Height of All Cells
		$('.sched-cell').css({ height:SchedGrid.cellHeight });
		
	},
			
	emptyBlockSetup: function() {
		
		// Double For Loop Because PERIODS Is Split Up into Multiple Objects
		// Based on the Type of Period of Each
		for (var type in PERIODS) {
			for (var title in PERIODS[type]) {

				var period = PERIODS[type][title];

				// Compensate for Padding and Border on SchedCell
				//var actualCellHeight = SchedGrid.cellHeight + 10 + 1;
				var actualCellHeight = SchedGrid.cellHeight;

				// Generate a Block for Each Time Data Object
				for (i = 0; i < period.length; i++) {

					// Time Data for Current Block Only
					var time = period[i];

					// Column That Will Contain the Day Block
					var col = $('#sched-col-'+time.day);

					// Create Cal Block Object
					var block = $('<div class="sched-block sched-empty-block sched-empty-block-collapsed"></div>');
					
					// Add Type Attribute for jQuery Interaction
					var title_sn = title.replace('+', 'plus');
					block.addClass('series-'+type);
					block.addClass('period-'+title_sn);
					block.attr('data-period', title);
					block.attr('data-period-sn', title_sn);

					// Calculate Positioning Based on Numeric Times
					bTop = time.start*actualCellHeight;
					bHeight = ((time.duration/60)*actualCellHeight); // -24 Because of SchedEmptyBlock Border and Padding
					block.css({ top:bTop, height:bHeight });
					
					// Reposition Block in Case of Overlap
					if (time.column !== 0) { block.addClass('empty-double-'+time.column); }

					// Inner Text for Empty Block
					block.append('<span class="empty-block-title"><span>'+title+'</span></span>')

					// Put Event Data in Block
					//var timeText = decimalToTime(time.start)+' - '+decimalToTime(time.start+(time.duration/60));

					// Set Data for Later Resizing
					block.attr('data-start', time.start);
					block.attr('data-duration', time.duration);

					// Then Display the Cal Block
					col.append(block);

				}

			}
		}
		
	},
			
	addBlock: function(data) {

		// Compensate for Padding and Border on SchedCell
		//var actualCellHeight = SchedGrid.cellHeight + 10 + 1;
		var actualCellHeight = SchedGrid.cellHeight;
		
		// Generate a Block for Each Time Data Object
		for (i = 0; i < data.times.length; i++) {
			
			// Time Data for Current Block Only
			var time = data.times[i];
			
			// Column That Will Contain the Day Block
			var col = $('#sched-col-'+time.day);
			
			// Create Cal Block Object and Position Based on 
			var block = $('<div class="sched-block"></div>');
			
			// Set Color Based on Given Data
			block.css({ 
				background:'rgba('+data.color[0]+','+data.color[1]+','+data.color[2]+',0.6)',
				border:'1px solid rgba('+data.color[0]+','+data.color[1]+','+data.color[2]+',1)'
			});
			
			// Calculate Positioning Based on Numeric Times
			bTop = time.start*actualCellHeight;
			bHeight = ((time.duration/60)*actualCellHeight); // -4 Because of SchedBlock Padding
			block.css({ top:bTop, height:bHeight });
			
			// Put Event Data in Block
			var timeText = decimalToTime(time.start)+' - '+decimalToTime(time.start+(time.duration/60));
			block.append('<span class="block-time">'+timeText+'</span>');
			block.append('<span class="block-title">'+data.title+'</span>');
			block.append('<span class="block-location">'+data.location+'</span>');
			
			// Set Data for Later Resizing
			block.attr('data-start', time.start);
			block.attr('data-duration', time.duration);
			
			// Append Edit/Remove Controls
			block.append('<div class="button-block-edit"></div>');
			block.append('<div class="button-block-delete"></div>');
			
			// Then Display the Cal Block
			col.append(block);
			
			// Fade in Block
			block.css({ opacity:0 }).animate({ opacity:1 }, 500);

		}
		
	},
			
	editBlock: function(data) {
		
	},
			
	removeBlock: function(data) {
		
	}
	
}