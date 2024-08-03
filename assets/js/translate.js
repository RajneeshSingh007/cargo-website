function russianTranslation(lang) {
  if(lang === "Turkish"){
   $(".menu-item-home").text(`Ana Sayfa`);
   $(".translate_tpslider__title_1").text(`DÜNYANIN HER YERİNE KARGO GÖNDERİYORUZ`);
   $(".translate_tpslider__title_2").text(`DÜNYANIN HER YERİNE KARGO GÖNDERİYORUZ`);
   $(".translate_tpslider__title_3").text(`ES21 KARGO ARTIK UÇUŞA HAZIR`);
   $(".translate_about_title").text(`SINIRLARI ZORLUYORUZ`);
   $(".translate_tpslider__title-3").text(`DÜNYANIN HER YERİNE KARGO GÖNDERİYORUZ`);
   $(".translate_your_subject").attr("placeholder", "KONU");
  }else{
    $(".menu-item-home").text(`Home`);
    $(".translate_tpslider__title-1").text(`WE DELIVER CARGO WORLDWIDE`);
    $(".translate_tpslider__title-2").text(`WE DELIVER CARGO WORLDWIDE`);
    $(".translate_tpslider__title_3").text(`ES21 CARGO NOW READY FOR FLY`);
    $(".translate_about_title").text(`BEYOND BOUNDARIES, BEYOND EXPECTATIONS`);
    $(".translate_your_subject").attr("placeholder", "YOUR SUBJECT");
  }
}


var flagNameList = ["ar", "nl", "en", "fr", "de", "it", "ru", "tr", "uk"];
var countryList = [
  "Arabic",
  "Dutch",
  "English",
  "French",
  "German",
  "Italian",
  "Russian",
  "Turkish",
  "Ukrainian",
];

function googleTranslateElementInit2() {
  new google.translate.TranslateElement(
    { pageLanguage: "en", autoDisplay: false },
    "google_translate_element2"
  );
}

/* <![CDATA[ */
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "6 7(a,b){n{4(2.9){3 c=2.9(\"o\");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s('t'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a=='')v;3 b=a.w('|')[1];3 c;3 d=2.x('y');z(3 i=0;i<d.5;i++)4(d[i].A=='B-C-D')c=d[i];4(2.j('k')==E||2.j('k').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,'m');7(c,'m')}}",
    43,
    43,
    "||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500".split(
      "|"
    ),
    0,
    {}
  )
);
/* ]]> */

$("#selectedCountryImage").attr(
  "src",
  `assets/images/flags/${flagNameList[flagNameList.length -2]}.png`
);
$("#selectedCountryLang").text(countryList[countryList.length - 2]);

function afterTranslate(position) {
  $("#selectedCountryImage").attr(
    "src",
    `assets/images/flags/${flagNameList[position]}.png`
  );
  $("#selectedCountryLang").text(countryList[position]);
  $('.exampleModal').removeClass('exampleModalVisible');
  russianTranslation(countryList[position]);
  localStorage.setItem("lang", countryList[position]);
}
