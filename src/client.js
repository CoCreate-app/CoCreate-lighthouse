import api from '@cocreate/api'
const CoCreateLightHouse = {
    id: 'lighthouse',
    actions: [
        'getHtml',
    ],

    /*action_getHtml: function (element, data) {
        let container = element.closest("form");
        let formdData = api.getFormData('lighthouse', 'getHtml', container);
        api.send('lighthouse', 'getHtml', formdData);
    },*/
    render_getHtml: function(data) {
		if (data.object == "error") {
            alert(data.data)
        }
		//console.log(data);
		data = {data: data};
    	console.log("DAta ",data)
    	api.render('getHtml', data);	
	
	},
}


api.init({
	name: CoCreateLightHouse.id, 
	module:	CoCreateLightHouse,
});