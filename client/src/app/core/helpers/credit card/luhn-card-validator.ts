function valid_credit_card(value: any) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0, bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1;n >= 0;n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}
/**
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * @author ShirtlessKirk. Copyright (c) 2012.
 * @license WTFPL (http://www.wtfpl.net/txt/copying)
 */
const luhnChk = (function (arr) {
  return function (ccNum: string) {
    let
      len = ccNum.length,
      bit = 1,
      sum = 0,
      val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

/**
 * Calculate a Luhn (Mod10) checksum
 *   -or-
 * Verify the Luhn checksum of a credit card or IMEI number
 *
 * This implementation was adapted from the following sources:
 *   - https://en.wikipedia.org/w/index.php?title=Luhn_algorithm&oldid=688221366
 *   - https://gist.github.com/ShirtlessKirk/2134376
 */

var luhn = {
  /* Calculates the Luhn checksum */
  calculate: function (digits: any) {
    var sum = this.sum(digits, false);
    return (sum * 9) % 10;
  },

  /* Verifies if a number is a valid Luhn checksum */
  verify: function (digits: any) {
    var sum = this.sum(digits, true);
    return sum > 0 && sum % 10 === 0;
  },

  /* Sum each digit from right to left, and double
     every second digit. If the double exceeds 9,
     then sum its digits (i.e., 654321 -> 358341
     -> 24) */
  sum: function (digits: string | any[], even: boolean) {
    var sum = 0,
      digit = 0,
      i = digits.length;

    while (i--) {
      digit = Number(digits[i]);
      sum += (even = !even) ? this.computed[digit] : digit;
    }

    return sum;
  },

  /* Create a precomputed list based on doubling
     each digit, as described in sum(). */
  computed: [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
};


var helpers = {
  /* Appends a Luhn checksum to the end of a number */
  createLuhnId: function (number: any) {
    var digits = String(number);
    return digits + luhn.calculate(digits);
  },

  /* Checks if a credit card or IMEI number is valid */
  isLuhnId: function (number: any) {
    return luhn.verify(String(number));
  }
};


/* const luhnCheck = (num: any) => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
}; */
