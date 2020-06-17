module.exports.encodeID = (s) => {
    if (s === '') return '_';
    return s.replace(/[^a-zA-Z0-9.-]/g, function (match) {
        return '_';
    });
}

module.exports.replaceDiacritics = (text) => {
    const diacr = "ÁÄČÇĎÉĚËÍŇÓÖŘŠŤÚŮÜÝŽáäčçďéěëíňóöřšťúůüýž";
    const diacrSubs = "AACCDEEEINOORSTUUUYZaaccdeeeinoorstuuuyz";

    if (text.length < diacr.length) {
        for (let i = 0; i < text.length; i++) {
            let indexOfSpecChar = diacr.indexOf(text[i]);

            if (indexOfSpecChar > -1) {
                text = text.replace(new RegExp(diacr[indexOfSpecChar], 'g'), diacrSubs[indexOfSpecChar]);
            }

        }
    } else {
        for (let j = 0; j < diacr.length; j++) {
            text = text.replace(new RegExp(diacr[j], 'g'), diacrSubs[j]);
        }
    }

    return text;
}