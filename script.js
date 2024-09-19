
const afficherEtoiles = (n) => {
    let starsNumber = "";
    for (let i = 0; i<n; i++) {
        const tempRandomInt = getRandomInt(5)
        if (tempRandomInt === 5) {
            const pickDecoration = getRandomInt(2)
            pickDecoration === 2 ? starsNumber += 'o' : starsNumber += '+'
        } else {
            starsNumber += "*"
        }
    }
    return starsNumber
}
// afficherEtoiles(3)



const afficherTriangleDroite = (n) => {
    const msgArr = []
    for (let i=0; i<n; i++) {
        const msg = afficherEtoiles(i) + '\\';
        // console.log(msg)
        msgArr.push(msg)
    }
    return msgArr
}
// console.log(afficherTriangleDroite(5))

const formatSpace = (n, i) => {
    let formattedSpace = ''
    for (let j=n-i; j>0; j--) {
        formattedSpace += ' '
    }
    return formattedSpace
}

const afficherTriangleGauche = (n) => {
    const msgArr = []
    for (let i=0; i<n; i++) {
        const msg = formatSpace(n,i) + '/' + afficherEtoiles(i);
        msgArr.push(msg)
        // console.log(msg)
    }
    return msgArr
}
// console.log(afficherTriangleGauche(3))


const afficherPointeSapin = (n) => {
    const leftArr = afficherTriangleGauche(n)
    const rightArr = afficherTriangleDroite(n)
    for (let i=0; i<n; i++) {
        i === 0 ? console.log(formatSpace(n, i-1) + '+') : null
        let tempMsg = leftArr[i] + '|' + rightArr[i]
        console.log(tempMsg)
    }
}
// afficherPointeSapin(2)
// afficherPointeSapin(3)
// afficherPointeSapin(4)

const formatAnotherSpace = (n) => {
    let formattedSpace = ""
    for (let i = 0; i<n; i++) {
        formattedSpace += " "
    }
    return formattedSpace
}

const afficherEtage = (hauteur, pointe_offset, espacement) => {
    const leftArr = afficherTriangleGauche(hauteur+pointe_offset)
    const rightArr = afficherTriangleDroite(hauteur+pointe_offset)
    for (let i=0; i<hauteur; i++) {
        let tempMsg = formatAnotherSpace(espacement) + leftArr[i+pointe_offset] + '|' + rightArr[i+pointe_offset]
        console.log(tempMsg)
    }
}
// afficherEtage(5,0,5)
// afficherEtage(5,1,4)
// afficherEtage(5,2,3)
// afficherEtage(5,3,2)




const afficherEtoilesTronc = (n) => {
    let starsNumber = "";
    for (let i = 0; i<n; i++) {
            starsNumber += "*"
        }
    return starsNumber
}

const afficherTronc = (etages, hauteur_etage, h, w) => {
    const lastLineCount = (((afficherTriangleGauche(etages)[etages-1].length) + hauteur_etage) * 2) +1
    const middle = lastLineCount / 2
    const startingPoint = middle - (w/2)
    for (let i = 0; i<h; i++) {
        let formatMsg = ""
        for (let j=0; j<startingPoint; j++) {
            formatMsg += " "
        }
        formatMsg += afficherEtoilesTronc(w)
        console.log(formatMsg)
    }
    // console.log(leftArr)
}


const afficherSapin = (etages, hauteur_etage) => {
    for (let i = 0; i<etages; i++) {
        i === 0 ? console.log(formatSpace(etages+hauteur_etage, i-1) + '+') : null
        afficherEtage(hauteur_etage, i, etages-i)
    }
    afficherTronc(etages,hauteur_etage,3,5)
}
afficherSapin(7,4)


const afficherRectangle = (h,w) => {
    for (let i=0; i<h; i++) {
        afficherEtoiles(w)
    }
}
// afficherRectangle(5, 5)


function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

