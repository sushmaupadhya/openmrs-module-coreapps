import PatientInfo from './';
import 'angular-mocks';

describe('PatientInfo', () => {
	let $componentController;
	let $scope;
	let $httpBackend;
  
	beforeEach(() => {
		angular.mock.module(PatientInfo);
		inject((_$componentController_, $rootScope, _$httpBackend_) => {
			$componentController = _$componentController_;
			$scope = $rootScope.$new();
			$httpBackend = _$httpBackend_;
		});
		
		$httpBackend.expectGET('/module/uicommons/messages/messages.json?localeKey=en').respond({});
	});

    it('should use maxAge from config', () => {
		let bindings = {config: { maxAge: '2w', concepts: 'uuid-1, uuid-2', patientUuid: 'patientUuid' }};
		let ctrl = $componentController('patientinfo', {$scope}, bindings);
		
		ctrl.$onInit();
		
		expect(ctrl.maxAgeInDays).toBe(14);
    });
	
	it('should query for concepts from config', () => {
		let bindings = {config: { maxAge: '2w', concepts: 'uuid-1,uuid-2', patientUuid: 'patientUuid' }};
		let ctrl = $componentController('patientinfo', {$scope}, bindings);

		$httpBackend.expectGET('/ws/rest/v1/patinfo?concept=uuid-1,uuid-2&patient=patientUuid&v=full').respond({results: []});

		ctrl.$onInit();
		
		$httpBackend.flush();
    });

	it('should query for a single concept from config', () => {
		let bindings = {config: { maxAge: '2w', concepts: 'uuid-1', patientUuid: 'patientUuid' }};
		let ctrl = $componentController('patientinfo', {$scope}, bindings);

		$httpBackend.expectGET('/ws/rest/v1/patinfo?concept=uuid-1&patient=patientUuid&v=full').respond({results: []});

		ctrl.$onInit();

		$httpBackend.flush();
	});
});