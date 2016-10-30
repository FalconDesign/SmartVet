angular.module('smartVetApp', ['ui.bootstrap', 'ngAnimate', 'ui.router'])
  .controller('mainCtrl', $scope => {})

  .config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider, $stateProvider) => {

  $urlRouterProvider.otherwise('/main');

  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'sections/main.html'
  })
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'sections/about.html'
  })
  $stateProvider.state('farmacy', {
    url: '/farmacy',
    templateUrl: 'sections/farmacy.html'
  })
  $stateProvider.state('faq', {
    url: '/faq',
    templateUrl: 'sections/faq.html'
  })
  $stateProvider.state('contacts', {
    url: '/contacts',
    templateUrl: 'sections/contacts.html'
  })
  }]);
