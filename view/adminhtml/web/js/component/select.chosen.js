/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'underscore',
    'uiRegistry',
    'Magento_Ui/js/form/element/select',
    'ko',
    'jquery',
    'jquery/chosen'
], function (_,registry ,Select, ko, $) {
    'use strict';
    
    ko.bindingHandlers.chosen = {
	    init: function(element, valueAccessor, allBindings, viewModel, bindingContext){
	    	var $element = $(element);
	        var options = ko.unwrap(valueAccessor());
	        
	        if (typeof options === 'object')
	            $element.chosen(options);
	                
	        ['options', 'selectedOptions'].forEach(function(propName){
	            if (allBindings.has(propName)){
	                var prop = allBindings.get(propName);
	                if (ko.isObservable(prop)){
	                    prop.subscribe(function(){
	                        $element.trigger('chosen:updated');
	                    });
	                }
	            }
	        });   
	    }
	}
    
    return Select;
});
