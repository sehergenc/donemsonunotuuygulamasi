let vize = 50;
let final = 100;
let donemNotu = 85;
let harfNotu = 'B';
if (donemNotu >= 90 && donemNotu <= 100) {
  harfNotu = 'A';
} else if (donemNotu >= 80 && donemNotu <= 89) {
  harfNotu = 'B';
} else if (donemNotu >= 70 && donemNotu <= 79) {
  harfNotu = 'C';
} else if (donemNotu >= 60 && donemNotu <= 69) {
  harfNotu = 'D';
} else if (donemNotu >= 50 && donemNotu <= 59) {
  harfNotu = 'E';
} else if (donemNotu < 50) {
  harfNotu = 'F';
}