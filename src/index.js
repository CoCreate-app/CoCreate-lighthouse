const CoCreateLightHouse = {
    id: 'lighthouse',
    actions: [
        'getHtml',
    ],

    action_getHtml: function (element, data) {
        let container = element.closest("form");
        let formdData = CoCreate.api.getFormData('lighthouse', 'getHtml', container);
        CoCreate.api.send('lighthouse', 'getHtml', formdData);
    },
}


CoCreate.api.init({
	name: CoCreateLightHouse.id, 
	module:	CoCreateLightHouse,
});