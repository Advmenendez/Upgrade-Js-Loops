const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

function isAproved(params) {
    for (let i = 0; i < params.length; i++) {
        student = params[i];

        let approvedSignature = 0;

        if (student.T1) {
            approvedSignature++
        }
        if (student.T2) {
            approvedSignature++
        }
        if (student.T3) {
            approvedSignature++
        }
        student.isAproved = approvedSignature >= 2 ? true : false;
        
    }
}
isAproved(alumns);
console.log(alumns);