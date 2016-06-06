var app = angular.module('cabinet', []);

app.controller('CabinetController', ['$scope', 'DataService', function (scope, dataService){
    scope.students = dataService.list();
    scope.remove = function(item){
        var index = scope.students.indexOf(item);
        scope.students.splice(index, 1);
    };
    scope.newStudent = function(){
        scope.students.push({photo:scope.photo, name:scope.name, surname:scope.surname, skype:scope.skype,
            group:scope.group, phone:scope.phone, status:scope.status});
        scope.photo = '';
        scope.name = '';
        scope.surname = '';
        scope.skype = '';
        scope.group = '';
        scope.phone = '';
        scope.status = '';
    };
}]);
app.directive('dynEdit', function() {
    return {
        restrict: 'E',
        scope: { value: '=' },
        template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value" size="inherit">',
        link: function (scope, element) {
            var inputElement = angular.element(element.children()[1]);
            element.addClass('dyn-edit');
            scope.editing = false;
            scope.edit = function () {
                scope.editing = true;
                element.addClass('active');
                inputElement[0].focus();
            };
            inputElement.prop('onblur', function() {
                scope.editing = false;
                element.removeClass('active');
            });
        }
    };
});
app.service('DataService', [function(){
    function list(){
        return [
            {
                "name":"Дэвид",
                "surname":"Фленаган",
                "photoURL":"img/javaman.jpg",
                "skype":"javaman",
                "birth-year":"1987",
                "phone":"095-125-1313",
                "group":"common",
                "status":"1"
            },
            {
                "name":"Джон",
                "surname":"Резиг",
                "photoURL":"img/ninja.jpg",
                "skype":"ninja",
                "birth-year":"1996",
                "phone":"066-158-8587",
                "group":"business",
                "status":"1"
            },
            {
                "name":"Линус",
                "surname":"Торвальдс",
                "photoURL":"img/penguin.jpg",
                "skype":"penguin",
                "birth-year":"1990",
                "phone":"050-98-7888",
                "group":"common",
                "status":"0"
            },
            {
                "name":"Герберт",
                "surname":"Шилдт",
                "photoURL":"img/schildt.jpg",
                "skype":"master-schildt",
                "birth-year":"1980",
                "phone":"097-97-2322",
                "group":"common",
                "status":"1"
            },
            {
                "name":"Марийн",
                "surname":"Хевербейк",
                "photoURL":"img/marijn.jpg",
                "skype":"marijn",
                "birth-year":"1984",
                "phone":"012-100-88-52",
                "group":"native",
                "status":"1"
            },
            {
                "name":"Брюс",
                "surname":"Эккель",
                "photoURL":"img/bruce.jpg",
                "skype":"bruce",
                "birth-year":"1984",
                "phone":"051-45-1950",
                "group":"private",
                "status":"0"
            },
            {
                "name":"Дональд",
                "surname":"Кнут",
                "photoURL":"img/knuth.jpg",
                "skype":"knuth",
                "birth-year":"1961",
                "phone":"095-988-7810",
                "group":"business",
                "status":"1"
            },
            {
                "name":"Коди",
                "surname":"Линдли",
                "photoURL":"img/codylindley.jpg",
                "skype":"codylindley",
                "birth-year":"1980",
                "phone":"099-70-6899",
                "group":"private",
                "status":"0"
            },
            {
                "name":"Сэм",
                "surname":"Канер",
                "photoURL":"img/cemkaner.jpg",
                "skype":"cemkaner",
                "birth-year":"1985",
                "phone":"096-234-7985",
                "group":"business",
                "status":"1"
            },
            {
                "name":"Мишко",
                "surname":"Эвери",
                "photoURL":"img/misko.jpg",
                "skype":"misko",
                "birth-year":"1977",
                "phone":"099-127-00-01",
                "group":"common",
                "status":"1"
            }
        ];
    }
    return {
        list: list
    };
}]);