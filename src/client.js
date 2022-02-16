import api from '@cocreate/api'

const CoCreateLightHouse = {
    name: 'lighthouse',
    actions: {
        getHtml: {},
    }
}

api.init({
	name: CoCreateLightHouse.name, 
	module:	CoCreateLightHouse,
});