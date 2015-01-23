/* jshint -W117, -W030 */
describe('sms routes', function () {
    describe('state', function () {
        var controller;
        var view = 'app/sms/sms.html';

        beforeEach(function() {
            module('app.sms', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state sms to url /sms ', function() {
            expect($state.href('sms', {})).to.equal('/sms');
        });

        it('should map /sms route to sms View template', function () {
            expect($state.get('sms').templateUrl).to.equal(view);
        });

        it('of admin should work with $state.go', function () {
            $state.go('sms');
            $rootScope.$apply();
            expect($state.is('sms'));
        });
    });
});
