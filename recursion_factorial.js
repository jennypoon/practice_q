function factorial(n) {
  //BASIC
    if (n === 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}