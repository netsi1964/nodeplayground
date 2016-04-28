var fs = require('fs');
var cleaned = [];
var varer = [{
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-028",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-048",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-050",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Kha-chai"
}, {
    "varenr": "11-080",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød morning glory"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-202",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Mango (sour) "
}, {
    "varenr": "22-204",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Rambutan"
}, {
    "varenr": "22-205",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Mangosten"
}, {
    "varenr": "22-206",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Duriankød"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-030",
    "mængde": "10,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-087",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "10302004",
    "mængde": "1,0",
    "enhed": "stk",
    "navn": "Thai glasnudler 500 gr"
}, {
    "varenr": "20101002",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Rød karry pesta"
}, {
    "varenr": "22-204",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Rambutan"
}, {
    "varenr": "22-206",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Duriankød"
}, {
    "varenr": "33-907",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Frostdej Blå 20 x 500"
}, {
    "varenr": "20202004",
    "mængde": "3,0",
    "enhed": "stk",
    "navn": "Øster sous 4500 cc"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-030",
    "mængde": "15,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-048",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-055",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Winged bean"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-204",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Rambutan"
}, {
    "varenr": "22-206",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Duriankød"
}, {
    "varenr": "22-214",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Longkong"
}, {
    "varenr": "22-236",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Ga-torn"
}, {
    "varenr": "33-907",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Frostdej Blå 20 x 500"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-030",
    "mængde": "15,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-206",
    "mængde": "4,0",
    "enhed": "kg",
    "navn": "Duriankød"
}, {
    "varenr": "22-212",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Lychee"
}, {
    "varenr": "33-907",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Frostdej Blå 20 x 500"
}, {
    "varenr": "10302004",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Thai glasnudler 500 gr"
}, {
    "varenr": "20503001",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Fiske sauce Tipparot"
}, {
    "varenr": "11-013",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-028",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "10,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-055",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Winged bean"
}, {
    "varenr": "11-080",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød morning glory"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-204",
    "mængde": "5,0",
    "enhed": "kg",
    "navn": "Rambutan"
}, {
    "varenr": "22-236",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Ga-torn"
}, {
    "varenr": "22-214",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Longkong"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-048",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "11-099",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Water cress shoot"
}, {
    "varenr": "22-204",
    "mængde": "5,0",
    "enhed": "kg",
    "navn": "Rambutan"
}, {
    "varenr": "22-206",
    "mængde": "4,0",
    "enhed": "kg",
    "navn": "Duriankød"
}, {
    "varenr": "22-214",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Longkong"
}, {
    "varenr": "22-236",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Ga-torn"
}, {
    "varenr": "33-907",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Frostdej Blå 20 x 500"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-016",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Bitter melon"
}, {
    "varenr": "11-030",
    "mængde": "10,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-145",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Citron/lime blade"
}, {
    "varenr": "11-047",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-087",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-202",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Mango (sour) "
}, {
    "varenr": "22-206",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Duriankød"
}, {
    "varenr": "22-210",
    "mængde": "1,0",
    "enhed": "stk",
    "navn": "Banan"
}, {
    "varenr": "22-212",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Lychee"
}, {
    "varenr": "11-013",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-030",
    "mængde": "15,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-087",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "30306001",
    "mængde": "2,0",
    "enhed": "ks",
    "navn": "Chang beer 750ml (12 stk)"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-030",
    "mængde": "10,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-048",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-087",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-204",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Rambutan"
}, {
    "varenr": "22-206",
    "mængde": "4,0",
    "enhed": "kg",
    "navn": "Duriankød"
}, {
    "varenr": "22-212",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lychee"
}, {
    "varenr": "33-928",
    "mængde": "35,0",
    "enhed": "pack",
    "navn": "Dampet makrel ca 35 pack"
}, {
    "varenr": "10103007",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Wai wai nudler classic"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-028",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "12,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-036",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Coriander"
}, {
    "varenr": "11-047",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-050",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Kha-chai"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-204",
    "mængde": "5,0",
    "enhed": "kg",
    "navn": "Rambutan"
}, {
    "varenr": "33-907",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Frostdej Blå 20 x 500"
}, {
    "varenr": "10302004",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Thai glasnudler 500 gr"
}, {
    "varenr": "20202001",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "700cc Champignon soya"
}, {
    "varenr": "20301002",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "østers sovs 12*600cc"
}, {
    "varenr": "20101002",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Rød karry pesta"
}, {
    "varenr": "20101003",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Panang karry pasta 24 x 400 gr"
}, {
    "varenr": "20503001",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Fiske sauce Tipparot"
}, {
    "varenr": "30302001",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Singha 630ML (12 stk)"
}, {
    "varenr": "30306001",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Chang beer 750ml (12 stk)"
}, {
    "varenr": "20101002",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Rød karry pesta"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-016",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Bitter melon"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-030",
    "mængde": "15,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-036",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Coriander"
}, {
    "varenr": "11-047",
    "mængde": "4,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "22-210",
    "mængde": "1,0",
    "enhed": "stk",
    "navn": "Banan"
}, {
    "varenr": "20101003",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Panang gy pasta 24 x 400 gr"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-016",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Bitter melon"
}, {
    "varenr": "11-028",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "15,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-036",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Coriander"
}, {
    "varenr": "11-045",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Water cress ka-cheet"
}, {
    "varenr": "11-047",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-066",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Sadao blomst"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "22-210",
    "mængde": "1,0",
    "enhed": "stk",
    "navn": "Banan"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-028",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-048",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-047",
    "mængde": "3.0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-050",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Kha-chai"
}, {
    "varenr": "11-052",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Horse tamarind shoot\tyod-gatin"
}, {
    "varenr": "11-055",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Tua-ploo"
}, {
    "varenr": "11-054",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Ærte blomster"
}, {
    "varenr": "11-066",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Sadao blomst"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "11-099",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Water cress shoot"
}, {
    "varenr": "11-168",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Dog-a-jon"
}, {
    "varenr": "11-175",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Kattekål skud (ยอดฟกั แมว้)"
}, {
    "varenr": "22-209",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Guava guava"
}, {
    "varenr": "44-106",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Foi Tong"
}, {
    "varenr": "44-107",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Tong Yip"
}, {
    "varenr": "44-108",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Met Kanun"
}, {
    "varenr": "44-402",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Æg nudler"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-028",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-048",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-047",
    "mængde": "2.0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-054",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Ærte blomster"
}, {
    "varenr": "11-056",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Chaom"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "11-138",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Ganjong"
}, {
    "varenr": "11-175",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Kattekål skud (ยอดฟกั แมว้)"
}, {
    "varenr": "22-202",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Mango (sour)"
}, {
    "varenr": "22-209",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Guava guava"
}, {
    "varenr": "22-233",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "MAYOM"
}, {
    "varenr": "44-401",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Nudler store"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-020",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Pak wan"
}, {
    "varenr": "11-028",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-048",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-054",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Ærte blomster"
}, {
    "varenr": "11-056",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Chaom"
}, {
    "varenr": "11-087",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "11-175",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Kattekål skud (ยอดฟกั แมว้)"
}, {
    "varenr": "22-210",
    "mængde": "1,0",
    "enhed": "stk",
    "navn": "Banan"
}, {
    "varenr": "22-202",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Mango (sour)"
}, {
    "varenr": "44-401",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Nudler store"
}, {
    "varenr": "11-005",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-020",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Pak wan"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-028",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-042",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Bananblade"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-048",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Thai morning glory"
}, {
    "varenr": "11-054",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Ærte blomster"
}, {
    "varenr": "11-055",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Tua-ploo"
}, {
    "varenr": "11-074",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Bai yor"
}, {
    "varenr": "11-080",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Rød morning glory"
}, {
    "varenr": "11-099",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Water cress shoot"
}, {
    "varenr": "11-100",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Hog plum magok s"
}, {
    "varenr": "11-175",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Kattekål skud (ยอดฟกั แมว้)"
}, {
    "varenr": "22-202",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Mango (sour)"
}, {
    "varenr": "30306001",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "(12 stk) Chang beer 750ml"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "4,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-050",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Kha-chai"
}, {
    "varenr": "11-055",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Tua-ploo"
}, {
    "varenr": "11-056",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Chaom"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "11-100",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Hog plum magok s"
}, {
    "varenr": "11-138",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Ganjong"
}, {
    "varenr": "22-210",
    "mængde": "1,0",
    "enhed": "stk",
    "navn": "Banan"
}, {
    "varenr": "44-401",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Nudler store"
}, {
    "varenr": "22-202",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Mango (sour)"
}, {
    "varenr": "11-028",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-013",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-056",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Chaom"
}, {
    "varenr": "11-099",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Water cress shoot"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "11-138",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Ganjong"
}, {
    "varenr": "11-005",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Sød basilikum"
}, {
    "varenr": "11-013",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Aubergine"
}, {
    "varenr": "11-014",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Dværg aubergine"
}, {
    "varenr": "11-023",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Rød chilli"
}, {
    "varenr": "11-028",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Papaya"
}, {
    "varenr": "11-030",
    "mængde": "20,0",
    "enhed": "kg",
    "navn": "Wax gourd (vintermelon)"
}, {
    "varenr": "11-047",
    "mængde": "3,0",
    "enhed": "kg",
    "navn": "Lange bønner"
}, {
    "varenr": "11-055",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Tua-ploo"
}, {
    "varenr": "11-056",
    "mængde": "0,5",
    "enhed": "kg",
    "navn": "Chaom"
}, {
    "varenr": "11-066",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Sadao blomst"
}, {
    "varenr": "11-087",
    "mængde": "2,0",
    "enhed": "kg",
    "navn": "Babymajs"
}, {
    "varenr": "11-099",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Water cress shoot"
}, {
    "varenr": "11-138",
    "mængde": "1,0",
    "enhed": "kg",
    "navn": "Ganjong"
}, {
    "varenr": "22-202",
    "mængde": "1,5",
    "enhed": "kg",
    "navn": "Mango (sour)"
}, {
    "varenr": "22-210",
    "mængde": "2,0",
    "enhed": "stk",
    "navn": "Banan"
}, {
    "varenr": "33-928",
    "mængde": "35,0",
    "enhed": "pack",
    "navn": "Dampet makrel ca 35 pack"
}, {
    "varenr": "44-404",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Chinese noodle, nudler nom jeen"
}, {
    "varenr": "20503001",
    "mængde": "1,0",
    "enhed": "ks",
    "navn": "Fiske sauce Tipparot"
}, {
    "varenr": "30306001",
    "mængde": "2,0",
    "enhed": "ks",
    "navn": "(12 stk) Chang beer 750ml"
}];

var sort = [];
varer.forEach(function(vare) {
    cleaned[vare.varenr] = vare;

});
for(key in cleaned) {
  var curr = cleaned[key];
  sort.push(curr.varenr);
}
sort.sort(function(a,b) {
  var aa = parseInt(a.replace(/\D/ig, '')),
  bb = parseInt(b.replace(/\D/ig, ''))
  return (aa==bb) ? 0 : (aa<bb) ? -1 : 1;
})

var result = [];
var col = parseInt(sort.length/3)+7;
var passed = '<table style="width: 350px;" class="table-striped table"><tbody><tr>';
var first = true;
var colStart = '<td class="col-md-4"><table style="width: 350px;" class="table-striped table"><thead><tr><td></td><td>Nummer</td><td>Enhed</td><td>Navn</td></tr></thead><tbody><tr><td>';
var colEnd = '</tbody></table></td>'
for(var i=0; i<sort.length; i++) {
  if (i % col===0) {
    passed+=(!first) ? colEnd+colStart : colStart;
  }
  first = false;
  var key = sort[i];
  var curr = cleaned[key];
  result.push(curr);
  passed+=`<tr>
  <td class="col-md-1">____</td>
  <th class="col-md-2">${curr.varenr}</th>
  <td class="col-md-1">${curr.enhed}</td>
  <td class="col-md-8">${curr.navn}</td>
</tr>`;
}
passed+="</tr></tbody></table>";


fs.readFile('index.html', function (err, data) {
   if (err) {
      return console.error(err);
   }
   var output = data.toString().replace(/%INDHOLD%/ig, passed);

   fs.writeFile('thailandiaBestil.html', output,  function(err) {
      if (err) {
          return console.error(err);
      }
   });
});
