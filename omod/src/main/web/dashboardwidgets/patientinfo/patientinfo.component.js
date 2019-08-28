import PatientInfoController from './patientinfo.controller';
import template from './patientinfo.html';

export let PatientInfoComponent = {
    template,
    controller: PatientInfoController,
    selector: 'patientinfo',
	scope: {},
    bindings: {
        config: '<'
    }
};