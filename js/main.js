import 'primo-explore-lod-author-card';
import 'primo-studio-appointment-scheduler';

const app = angular.module('viewCustom', ['angularLoad', 'lodAuthorCard', 'appointmentScheduler']);

/** Increases default results page shown to 5 pages (50 results) **/
app.component('prmExploreMainAfter',{
  bindings: {parentCtrl: '<'},
  controller: ['$scope', function($scope) {
      var vm = this;
      vm.parentCtrl.searchService.cheetah.configurationUtil.searchStateService.resultsBulkSize = 50;                    
  }]
});
/** END Increases default results page shown to 5 pages (50 results) **/

/** Linked Data Author Card */
app.component('prmFullViewAfter', {
  bindings: {parentCtrl: '<'},
  template: `<primo-explore-lod-author-card
    parent-ctrl="$ctrl.parentCtrl">
  </primo-explore-lod-author-card>`
});
/** END Linked Data Author Card */

/** Appointment Scheduler in Library Card */
app.component('prmAccountOverviewAfter', {
  bindings: {parentCtrl: '<'},
  template: `<primo-studio-appointment-scheduler 
    parent-ctrl="$ctrl.parentCtrl"
    sandbox="false"
    first-day-of-week=0
    i18n='{
      en: {
        appointments: "Library Appointments"
      },
      fr: {
        appointments: "Rendez-vous à la bibliothèque",
        appointmentlist: "Rendez-vous que vous avez programmés",
        cancel: "Annuler",
        addappointment: "Ajouter un rendez-vous",
        noappointments: "Vous n&#39;avez pas de rendez-vous planifié.",
      }
    }'
  ></primo-studio-appointment-scheduler>`
});
/** END Appointment Scheduler in Library Card */