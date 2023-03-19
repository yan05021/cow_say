
var cowsay = require("cowsay");

const student = {
    name: 'yiyan',
    campus: 'nantes'
};


function cowsayfn() {
    const message = cowsay.say({
        text: `Hello I'm ${student.name} from ${student.campus} campus!`,
        e: "oO",
        T: "U "
    });

    console.log(message);
}

module.exports = {
    cowsay: cowsayfn,
};  