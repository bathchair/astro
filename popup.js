// pop up functionality

var d;

const signs = {
    ARIES: "Aries",
    TAURUS: "Taurus",
    GEMINI: "Gemini",
    CANCER: "Cancer",
    LEO: "Leo",
    VIRGO: "Virgo",
    LIBRA: "Libra",
    SCORPIO: "Scorpio",
    SAGITTARIUS: "Sagittarius",
    CAPRICORN: "Capricorn",
    AQUARIUS: "Aquarius",
    PISCES: "Pisces"
};

document.addEventListener('DOMContentLoaded', function() {

    // retrieve button id
    var checkScanButton = document.getElementById('scanDate')

    checkScanButton.addEventListener('click', function() {
        // executes when the button is clicked; get highlighted text
        chrome.tabs.executeScript( {
            code: "window.getSelection().toString();"
          }, function(selection) {
            d = new Date(selection[0])
            // check if highlighted obj is valid date
            if (Object.prototype.toString.call(d) === "[object Date]") {
                if (isNaN(d.getTime())) {
                    document.getElementById('date').innerHTML = "Not a date!"
                } else {
                    document.getElementById('date').innerHTML = d.toLocaleDateString()
                    document.getElementById('sign').innerHTML = calculateAstrology(d)
                }
            } else {
                document.getElementById('date').innerHTML = "Not a date!"
            }

          })
    })
}, false)


function calculateAstrology(d) {
    var month = d.getMonth() + 1
    var day = d.getDate()
    var astroSign;

    // WARNING: long switch statement ahead ><
    switch (month) {
        case 1: // january
            if (day < 20) {
                astroSign = signs.CAPRICORN
            } else {
                astroSign = signs.AQUARIUS
            }
            break;
        case 2:
            if (day < 19) {
                astroSign = signs.AQUARIUS
            } else {
                astroSign = signs.PISCES
            }
            break;
        case 3:
            if (day < 21) {
                astroSign = signs.PISCES
            } else {
                astroSign = signs.ARIES
            }
            break;
        case 4:
            if (day < 20) {
                astroSign = signs.ARIES
            } else {
                astroSign = signs.TAURUS
            }
            break;
        case 5:
            if (day < 21) {
                astroSign = signs.TAURUS
            } else {
                astroSign = signs.GEMINI
            }
            break;
        case 6:
            if (day < 21) {
                astroSign = signs.GEMINI
            } else {
                astroSign = signs.CANCER
            }
            break;
        case 7:
            if (day < 23) {
                astroSign = signs.CANCER
            } else {
                astroSign = signs.LEO
            }
            break;
        case 8:
            if (day < 23) {
                astroSign = signs.LEO
            } else {
                astroSign = signs.VIRGO
            }
            break;
        case 9:
            if (day < 23) {
                astroSign = signs.VIRGO
            } else {
                astroSign = signs.LIBRA
            }
            break;
        case 10:
            if (day < 23) {
                astroSign = signs.LIBRA
            } else {
                astroSign = signs.SCORPIO
            }
            break;
        case 11:
            if (day < 22) {
                astroSign = signs.SCORPIO
            } else {
                astroSign = signs.SAGITTARIUS
            }
            break;
        case 12:
            if (day < 22) {
                astroSign = signs.SAGITTARIUS
            } else {
                astroSign = signs.CAPRICORN
            }
            break;
    }

    return astroSign;
}