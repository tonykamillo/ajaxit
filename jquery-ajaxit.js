(function($){	
	$.fn.ajaxit = function(options)
	{
		var element_name = $(this).get(0).nodeName.toLowerCase();
		if( element_name == 'form' )
		{
			var default_options = {success:null, error:null, dataType:'json'};	
			options = $.extend(default_options, options);
			
			if( $(this).find('input:file').length > 0 )
			{
				var iname = 'ajaxit-iframe-' + new Date().getTime();
				var iframe = $('<iframe name="'+iname+'">').css('display', 'none').one(
					'load',
					function()
					{
						var response = null;
						try { response = eval( "("+$(this).contents().find('body').html()+")" ); }
						catch(e) { response = $(this).contents().find('body').html(); }												
						if( options.success ) options.success( response ); 						
						iframe.remove();
					}
				);
				$('body').append(iframe);
				$(this).attr('target', iname);
			}
			else
			{			
				$.ajax({					
					url:$(this).attr('action'),
					type:$(this).attr('method'),
					data:$(this).serialize(),
					dataType:options.dataType,
					success:options.success,
					error:options.error
				});
			}
		}
		else if( element_name == 'a' )
		{
			$.ajax({
				async:false,
				url:$(this).attr('href'),				
				success:options.success				
			});
		}
		
	}	
})(jQuery);
