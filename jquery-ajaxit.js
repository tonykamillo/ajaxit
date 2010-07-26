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
				var iframe = $('<iframe name="ajaxit-iframe">').css('display', 'none');
				var form = $(this);
				
				form.attr('target', 'ajaxit-iframe');				
				form.append(iframe);
				
				iframe.load(
					function()
					{
						var response = $($(this).contents()[0].body).html();
						if(options.dataType == 'json')
						{
							try { response = $.parseJSON( response ); }
							catch(e){}
						}												
						if( options.success ) options.success( response ); 			
									
						setTimeout(
							function()
							{ 
								iframe.remove(); 
								form.removeAttr('target');
							}, 
							1000
						);
					}
				);			
			}
			else
			{			
				$.ajax({					
					url:$(this).attr('action'),
					type:$(this).attr('method'),
					data:$(this).serialize(),
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
