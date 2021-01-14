import 'primo-explore-lod-author-card';

const app = angular.module('viewCustom', ['angularLoad', 'lodAuthorCard']);

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