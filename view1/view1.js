'use strict';

angular.module('myApp.view1', [
	'ngRoute',
	'smoothScroll'
	// 'myApp.iframe.onload-directive'
	])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/welcome', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', ['$scope', '$location', '$http', 'smoothScroll', function($scope, $location, $http, smoothScroll) {

	// init data
	$scope.formData = {};
	$scope.districts = [
	'Central	中環',
	'Wanchai	灣仔',
	'Kowloon Tong	九龍塘',
	'Mongkok	旺角',
	'Tsimshatsui	尖沙咀',

	'Aberdeen	香港仔',
	'Admiralty	金鐘',
	'Causeway Bay	銅鑼灣',
	'Chai Wan	柴灣',
	'Fortress Hill	炮台山',
	'Happy Valley	跑馬地',
	'North Point	北角',
	'Quarry Bay	鰂魚涌',
	'Shau Kei Wan	筲箕灣',
	'Sheung Wan	上環',
	'Taikoo Shing	太古城',
	'Cheung Sha Wan	長沙灣',
	'Jordan	佐敦',
	'Kowloon Bay	九龍灣',
	'Kwun Tong	觀塘',
	'Lai Chi Kok	荔枝角',
	'Ngau Tau Kok	牛頭角',
	'Prince Edward	太子',
	'San Po Kong	新蒲崗',
	'Yaumatei	油麻地',
	'Kwai Chung	葵涌',
	'Kwai Fong	葵芳',
	'Shatin	沙田',
	'Tseung Kwan O	將軍澳'
	];
	$scope.industries = [
	'Accounting / Auditing	會計 / 審計',
	'Administration	行政',
	'Banking / Finance	銀行 / 金融',
	'Building / Construction	建造 / 工程',
	'Design	設計',
	'Education	教育',
	'Engineering	工程',
	'Government / Public Sector	政府 / 公共機構',
	'Health / Beauty Care	保健 / 美容',
	'Hotel / Catering / Club	酒店 / 餐飲 / 會所',
	'Human Resources	人力資源',
	'Information Technology	資訊科技',
	'Insurance	保險',
	'Logistics / Transportation	物流 / 運輸',
	'Manufacturing	製造生產',
	'Marketing / Public Relations	市場營銷 / 公共關係',
	'Media / Advertising	媒體 / 廣告',
	'Medical Services	醫療服務',
	'Merchandising / Purchasing	跟單 / 採購',
	'NGO	非政府組織',
	'Professional Services	專業服務',
	'Property	物業',
	'Retail	零售',
	'Sales / CS / Business Devpt	銷售 / 顧客服務 / 業務發展',
	'Sciences / Lab / R&D	科學 / 實驗室 / 研究及開發',
	'Travel / Tourism	旅遊 / 觀光'
	];





	//iframe onload
	$scope.iframeLoadedCallback = function(temp){	 	
		$location.path('/thankyou');
		$scope.$apply();

	}




		// if($location.hash() == 'contact'){
		// 	//scroll to portfo
		// 	var element = document.getElementById('contact');
		// 	smoothScroll(element);

		// }

	// $scope.processForm();

}])

.directive('iframeOnload', [function(){
	return {
		scope: {
			callback: '&iframeOnload'
		},
		link: function(scope, element, attrs){

			element.on('load', function(){
				return scope.callback({temp: 'test'});

			})
		}
	}}]);


