"use strict";angular.module("jm.i18next").config(["$i18nextProvider",function(a){a.options={lng:"en",keyseparator:"##",nsseparator:"####",useCookie:!1,useLocalStorage:!1,fallbackLng:"en-US",resGetPath:"locales/__lng__/__ns__.json"}}]),angular.module("foobarApp",["jm.i18next"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/url",{templateUrl:"views/url.html",controller:"UrlCtrl"}).when("/confirm",{templateUrl:"views/confirm.html",controller:"ConfirmCtrl"}).otherwise({redirectTo:"/"})}]),$(document).ready(function(){$(document).foundation()}),angular.module("foobarApp").controller("MainCtrl",["$scope",function(a){a.format={print:!0,copyStr:"Text"},a.printFormat=function(){a.format={print:!0,copyStr:"Text"}},a.webFormat=function(){a.format={web:!0,copyStr:"HTML"}}}]);