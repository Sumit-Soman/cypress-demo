module.exports = {
    /**
     * generate random number of length
     * @param length 
     */
    randomNumber(length = 3) {
        return `${Math.random().toString().slice(2, 2 + length)}`
    }
}
