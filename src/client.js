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
		console.log(data)
	},
}


api.init({
	name: CoCreateLightHouse.id, 
	module:	CoCreateLightHouse,
});