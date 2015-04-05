/// <reference path="knockout-3.3.0.debug.js" />
/// <reference path="komap.js" />


function testViewModel() {
    var self = this;

    var simpleObject = {
        Key: 1,
        Name: "Márvio André",
        Email: "marvio.bezerra@gmail.com"
    };

    var complexObject = {
        Key: 1,
        Name: "Márvio André",
        Email: "marvio.bezerra@gmail.com",
        Job: {
            Key: 101,
            Type: "Developer",
            Company: {
                Key: 23,
                Name: "Foo Tecnology",
                Adress: {
                    Key: 55,
                    Country: "Brasil"
                }
            }
        }
    }

    var arrayObject = [
        { Key: 1, Name: "Item 1" },
        { Key: 2, Name: "Item 2" },
        { Key: 3, Name: "Item 3" },
        { Key: 4, Name: "Item 4" },
    ];

    self.SimpleObject = new ko.observable();
    self.ComplexObject = new ko.observable();
    self.ArrayObject = new ko.observableArray();

    self.Init = function () {
        ko.autoMap.map(simpleObject, self.SimpleObject);
        ko.autoMap.map(complexObject, self.ComplexObject);
        ko.autoMap.map(arrayObject, self.ArrayObject);
    }
}

ko.applyBindings(new testViewModel());