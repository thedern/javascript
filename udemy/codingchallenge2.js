var j1, j2, j3, m1, m2, m3, jAve, mAve;

j1 = 89;
j2 = 120;
j3 = 140;

m1 = 116;
m2 = 94;
m3 = 123;

jAve = (j1 + j2 + j3) / 3;
mAve = (m1 + m2 + m3) / 3;

if (jAve > mAve) {
    console.log('John\'s average is higher: ' + jAve);
} else if (mAve > jAve) {
    console.log('Mike\'s average is higher: ' + mAve);
} else {
    console.log('It is a draw ' + mAve + ' ' + jAve);
}