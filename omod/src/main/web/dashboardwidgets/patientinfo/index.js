import angular from 'angular';
import openmrsApi from '@openmrs/angularjs-openmrs-api';
import commons from './../dashboardwidgets.services';
import { PatientInfoComponent } from './patientinfo.component';

export default angular.module("openmrs-contrib-dashboardwidgets.patientinfo", [ openmrsApi, commons ])
	.component(PatientInfoComponent.selector, PatientInfoComponent).name;