Ajaxit 
======
Is an jQuery plugin which simplifies usage of ajax requests and asynchronous upload.


jQuery 1.4 or newer is required.


##Options

**dataType**: Can be json, html, text or xml. Default is json (available only for ajax submit form, for now).

**error**: Callback function that will be executed if, any error happen during the request proccess. (available only for ajax submit form, for now)

**success**: Callback function that will be executed when the request is completed with success. (available for all cases)

##Usage
	
- Submit a simple form (without inputs file)
	
    ```javascript	
    $('form_selector').ajaxit({
    	success:function(response)
    	{ alert('Form submited.'); }
    	error:function(data, status, xhr)
    	{ alert('ops!'); }
    });
    ```
	
- Submit a form with inputs file (asynchronous upload)
		
    The same way of the submit simple form. The Ajaxit is smart! He knows when exists inputs file into the form and then simulates an ajax request using iframe. But dont worry about this, because Ajaxit leaves anything clean, no dirt. The unique difference, is that the callback error dont is available for this case, yet.
	
- Open links
	
    ```javascript
    $('a_selector').ajaxit({ 
        success: function(html)
        { $('any_element').append(thml); } 
    });
    ```
	In this case the callback is pure html.
		

Have fun!
