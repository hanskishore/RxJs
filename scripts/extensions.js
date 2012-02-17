alert('were are you');

(function($){

	
	$.fn.addeventObservable = function(eventName,handler) 	{
					var element = this;
					return Rx.Observable.create(
						function(observer){debugger;
							var handler1 = function(eventObject){debugger;
								observer.onNext(eventObject);
								//$("#container").append("here we are");
							}
							$("document").on(eventName, handler, handler1);
							return function()
							{
								$("document").off(eventName, handler1);
							}
						}
					);
		};
})(jQuery);

(function($){
	$.fn.addListener=function(eventName, handler){
		$(this).on(eventName, handler);
	};
	
	$.fn.removeListener = function(eventName, handler){
		$(this).off(eventName, handler);
	};
	
	$.fn.fromEvent = function(eventName){debugger;
		return Rx.Observable.create(function (observer){
			var handler = function (ev) {
				observer.onNext(ev);
			};
			$(this).addListener(eventName, handler);
			return function () {
				$(this).removeListener(eventName, handler);
			};
			
		});
	}
	
})(jQuery);