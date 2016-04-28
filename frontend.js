var key, keys, values,
    ord = [],
    ordo = [],
    vers = [],
    versOptions = [],
    search,
    found = [],
    searchTimer,
    currentResults,
    result = document.querySelector(".result"),
    crlf = /\n\n/ig,
    search = document.querySelector(".search"),
    inpSalmenr = document.querySelector("[name='SalmeNr']"),
    topWords = document.querySelector(".topWords"),
    eleVers = document.querySelector(".vers");

window.onerror = function() {
    console.log(arguments);
};

function setQuery(q) {
    search.value = q;
    doSearch();
    return false;
}

function doSearch() {
    if (search.value !== '') {
        if (searchTimer) {
            clearTimeout(searchTimer);
        }
        searchTimer = setTimeout(function() {
            result.innerHTML = "";
            render(searchFor(search.value), search.value);
            clearTimeout(searchTimer);
        }, 500);
    }
}

function render(res, q) {
    q = q.trim();
    if (q === "") return false;
    result.innerHTML = "";
    var sHTML = '<h1 class="col-md-12">Fandt "<code>' + q + '</code>" i ' + res.length + ' salme' + ((res.length > 1) ? 'r' : '') + '</h1>',
        curr;
    var reg = new RegExp(q, 'ig');
    var f = "<mark>" + q + "</mark>";
    for (var i = 0; i < res.length; i++) {
        curr = salmer[res[i]];
        sHTML += '<div class="col-md-6"><h2>' + curr.number + ': ';
        sHTML += '' + curr.name.replace(reg, f) + '</h2>';
        sHTML += '<h4><a href="#" onclick="setQuery(title)" title="' + curr.forfatter.name + '">' + curr.forfatter.name.replace(reg, f) + '</a></h4>';
        var texts = '<pre>';
        if (curr.texts.length === 0) {
            texts += '<small>Denne salmetekst er ikke til rådighed</small>';
        } else {
            for (var it = 0; it < curr.texts.length; it++) {
                texts += '<em>' + (it + 1) + '</em>' + curr.texts[it].replace(reg, f).replace(crlf, '\n');
            }
        }
        texts += '</pre>';
        sHTML += texts;
        sHTML += '</div>';

    }
    result.innerHTML = sHTML;
}

function searchFor(q) {
    search.classList.add("searching");
    if (found[q + getMaxVers()]) {
        search.classList.remove("searching");
        return found[q + getMaxVers()];
    } else {
        var reg = new RegExp('\\b' + q + '\\b', 'ig');
        var hit = false;
        for (var i = 0; i < salmer.length; i++) {
            var curr = salmer[i];
            if (curr.texts.length <= getMaxVers()) {
                if (curr.number == q) {
                    hit = i;
                } else {
                    if (curr.name.match(reg)) {
                        hit = i;
                    } else {
                        if (curr.texts.join('').match(reg)) {
                            hit = i;
                        } else {
                            if (curr.forfatter.name.match(reg)) {
                                hit = i;
                            }
                        }
                    }
                }
            }
            if (hit !== false) {
                if (typeof found[q + getMaxVers()] === 'undefined') {
                    found[q + getMaxVers()] = [];
                }
                found[q + getMaxVers()].push(hit);
            }
            hit = false;
        }
    }
    search.classList.remove("searching");
    return found[q + getMaxVers()];
}

function showAtSource(salmenr) {
    inpSalmenr.value = salmenr;
    inpSalmenr.parentNode.target = 'playSong';
    inpSalmenr.parentNode.submit();
    return false;
}

function statistik() {
    var versCount = 0,
        versMin = {
            count: 10000,
            id: null
        },
        versMax = {
            count: -1,
            id: null
        },
        eleStatistik = document.querySelector('.statistik');
    for (var i = 0; i < salmer.length; i++) {
        var curr = salmer[i];

        if (typeof curr.texts.length !== "undefined" && typeof curr.name !== "undefined" && curr.name !== 'undefined') {

            var iCount = 0;
            var v = curr.texts.length;
            vers.push(v);
            versCount += v;
            if (v < versMin.count && v > 0) {
                versMin.count = v;
                versMin.id = curr.name;
            }
            if (v > versMax.count) {
                versMax.count = v;
                versMax.id = curr.name;
            }
            for (var t = 0; t < curr.texts.length; t++) {
                var temp = curr.texts[t].split(" ");
                for (var a = 0; a < temp.length; a++) {
                    var key = temp[a].trim();
                    if (key !== '') {
                        iCount++;
                        if (typeof ordo[key] === 'undefined') {
                            ordo[key] = 0;
                        }
                        ordo[key]++;
                    }
                }
            }
            ord.push(iCount);
        }
    }
    keys = [];
    values = [];
    for (var word in ordo) {
        if (ordo.hasOwnProperty(word) && !isNaN(ordo[word])) {
            keys.push({
                count: ordo[word],
                key: word
            });
            values[keys.length - 1] = word;
        }
    }
    keys.sort(function(a, b) {
        return (a.count === b.count) ? 0 : (a.count < b.count) ? 1 : -1;
    });
    var tw = '<option value="">Ord med flest forekomster</option>';
    for (i = 0; i < 50; i++) {
        var obj = keys[i];
        tw += '<option value="' + obj.key + '">' + (i + 1) + '. ' + obj.key + ' (fundet ' + obj.count + ' gange)</option>';
    }
    topWords.innerHTML = tw;
    tw = '<option value="999">Antal vers</option>';
    var found = "";
    for (i = 0; i < vers.length; i++) {
        var count = parseInt(vers[i]);
        if (count > 0 && found.indexOf("%" + count + "%") === -1) {
            versOptions.push(count);
            found += "%" + count + "%";
        }
    }
    versOptions.sort(function(a, b) {
        return (a === b) ? 0 : (parseInt(a) < parseInt(b) ? 1 : -1);
    });
    for (i = 0; i < versOptions.length; i++) {
        tw += '<option value="' + versOptions[i] + '">max. ' + versOptions[i] + ' </option>';
    }
    eleVers.innerHTML = tw;

    var s = 'Der er ' + salmer.length + ' salmer, med ' + keys.length + ' forskellige ord. Der er ' + versCount + ' vers, hvilket giver et gennemsnitligt antal vers på ' + Math.round(versCount / vers.length) + '. Mindst antal vers har <a href="javascript:void(setQuery(\'' + versMin.id + '\'))">' + versMin.id + '</a> (' + versMin.count + ' vers), flest har <a href="javascript:void(setQuery(\'' + versMax.id + '\'))">' + versMax.id + '</a> (' + versMax.count + ' vers)';
    eleStatistik.innerHTML = s;
}

function getMaxVers() {
    return parseInt(eleVers.value);
}

topWords.onchange = function(e) {
    setQuery(e.target.value);
};
eleVers.onchange = search.onkeyup = doSearch;

statistik();
setQuery('Altid frejdig, når du går');
