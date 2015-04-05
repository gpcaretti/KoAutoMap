/// <reference path="knockout-3.3.0.debug.js" />

ko.autoMap = {
    map: function (jsProperty, observableProperty) {

        if (jsProperty instanceof Array) {
            this.mapArray(jsProperty, observableProperty);
            return;
        }

        var map = {};

        for (prop in jsProperty) {

            if (jsProperty[prop] instanceof Function) {
                continue;
            }

            if (jsProperty[prop] instanceof Array) {
                map[prop] = this.mapArrayToNew(jsProperty[prop]);
                continue;
            }

            if (jsProperty[prop] instanceof Object) {
                map[prop] = this.mapToNew(jsProperty[prop])();
                continue;
            }

            map[prop] = new ko.observable(jsProperty[prop]);
        }

        observableProperty(map);
    },
    mapToNew: function (jsProperty) {
        var observableReturn = new ko.observable();
        this.map(jsProperty, observableReturn);
        return observableReturn;
    },
    mapArray: function (jsArray, observableArray) {
        observableArray.removeAll();

        for (var i = 0; i < jsArray.length; i++) {
            var item = new ko.observable();
            this.map(jsArray[i], item);
            observableArray.push(item());
        }
    },
    mapArrayToNew: function (jsArray) {
        var observableArray = new ko.observableArray();
        this.mapArray(jsArray, observableArray);

        return observableArray;
    }
}