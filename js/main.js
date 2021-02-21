import 'primo-explore-lod-author-card';
import 'primo-explore-appointment-scheduler';

const app = angular.module('viewCustom', ['angularLoad', 'lodAuthorCard', 'appointmentScheduler']);

/** Increases default results page shown to 5 pages (50 results) **/
app.component('prmExploreMainAfter',{
  bindings: {parentCtrl: '<'},
  controller: function($scope){
      var vm = this;
      vm.parentCtrl.searchService.cheetah.configurationUtil.searchStateService.resultsBulkSize = 50;                    
  }
});
/** END Increases default results page shown to 5 pages (50 results) **/

/** Linked Data Author Card */
app.component('prmServiceDetailsAfter', {
  bindings: {parentCtrl: '<'},
  template: `<lod-author-card-component parent-ctrl="$ctrl.parentCtrl"></lod-author-card-component>`
});
/** END Linked Data Author Card */

/** Appointment Scheduler in Library Card */
app.component('prmAccountOverviewAfter', {
  bindings: {parentCtrl: '<'},
  template: `<appointment-scheduler 
    parent-ctrl="$ctrl.parentCtrl"
    apikey="l8xxf9499482a3fe4c79b76825aa79173c99"
    i18n='{
      en: {
        appointments: "Library Appointments"
      },
      fr: {
        appointments: "Rendez-vous à la bibliothèque"
      }
    }'
  ></appointment-scheduler>`
});
/** END Appointment Scheduler in Library Card */