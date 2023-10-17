const classinfo = {
    kunal: {
        grades: "A+",
        city: "Gwl",
    },
    ps:{
        grades: "A",
        city: "Gwl"
    }
};

console.log(classinfo)
console.log(classinfo.kunal)
console.log(classinfo.kunal.city)
console.log(classinfo.kunal.grades)

console.log(classinfo.ps)
// console.log(classinfo.ps.city)
classinfo.ps.city = "Gurgaon"
console.log(classinfo.ps.city)
console.log(classinfo.ps.grades)