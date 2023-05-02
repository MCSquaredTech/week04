// Create array licenseNumers 
let licenseNumbers = ["ZF1 Y1AQ", "WF3 CSIU", "NMB K4ID", "FO1 3IEP", "XYQ XXOA", "YHL J7TR", "A4I MR5T", "OIC U812", "NMC F4ID", "NMA 4KID", "NMA 4KED"];

let sortByLicenseSimpleSort = (a) => {
    return a.sort((a,b) => { 
        return a-b;
    })
};

console.log(sortByLicenseSimpleSort(licenseNumbers));


// Matt Zoymota's solution 
let sortByLicensePlate = (a) => { 
    return a.sort((a,b) => {
        if (a < b) {
            return -1;
        } else if (a > b) { 
            return 1;
        }
        return 0
    })
}

console.log(sortByLicensePlate(licenseNumbers));


// My solution
let sortByLicenseNumber = (a) => { 
    return a.sort((a,b) => { 
        return a < b ? -1 : 1;
    })
}

console.log(sortByLicenseNumber(licenseNumbers));

