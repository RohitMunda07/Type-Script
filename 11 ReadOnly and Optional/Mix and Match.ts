type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCard: cardDetails = {
    cardnumber: "cardJan11",
    carddate: "12/12",
    cvv: 564
}