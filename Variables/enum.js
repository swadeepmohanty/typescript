var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["saturday"] = 6] = "saturday";
    WeekEnds[WeekEnds["sunday"] = 7] = "sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[7]);
