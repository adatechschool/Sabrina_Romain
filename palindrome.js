function isValidDate(checkDate) {
    let date = parseInt(checkDate.slice(0, 2)) // slices the dd from the dd/mm/yyy
    let month = parseInt(checkDate.slice(3, 5)) // slices the mm from the dd/mm/yyy
    let year = parseInt(checkDate.slice(6, 10)) // slices the yyyy from the dd/mm/yyy

    if (date <= 31 && date > 0 && month <= 12 && month > 0 && year > 999 && year <= 9999) { // checks if the date is valid
        if (date > maxDaysinMonth(month)) {
            console.log("invalid date")
            return false
        } else {
            console.log("congratulations, your date is valid")
            return true
        }
    } else {
        console.log(false)
    }
}

function isPalindrome(string) {
    let convert = string.split('/'); // converted date string
    console.log("hiii"+ convert)
    let d = ''; // concatenated string

    for (let i = 0; i < convert.length; i++) {
        d += convert[i]
    }
    //console.log(d)
    if (d[0] == d[7] && d[1] == d[6] && d[2] == d[5] && d[3] == d[4]) {
        //console.log("you're a palindrome, bitch")
        return true
    } else { return false }
}

function maxDaysinMonth(month) {
    if (month == 2) {
        return 28
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30
    }
    return 31
}

function getNextPalindromes(numberOfPalindromes) {
    const date = new Date()
    let palindromeOccurences = 0;

    do {
        const dateLocaleString = date.toLocaleDateString()

        if (isPalindrome(dateLocaleString)) {
            console.log(dateLocaleString)
            palindromeOccurences++
        }
        date.setDate(date.getDate() + 1)
    } while (palindromeOccurences < numberOfPalindromes)
}

function isPalindrome(string)