const newsPerPage = 6;
let currentPage = 1;
const newsItems = [
  {
    link: "/news/zboru_trydovogo_kolektuvy.html",
    image: "./image/news/zboru_trydovogo_kolektuvy/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vupysk_2025.html",
    image: "./image/news/vupysk_2025/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_MO_kyratoriv_27_06.html",
    image: "./image/news/zasidanya_MO_kyratoriv_27_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_konstutycii_Ykrainu.html",
    image: "./image/news/den_konstutycii_Ykrainu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/isput_D11STN.html",
    image: "./image/news/isput_D11STN/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_pedahohichnoi_radu_25_06.html",
    image: "./image/news/zasidanya_pedahohichnoi_radu_25_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_stupendialnoi_komisii_25_06.html",
    image: "./image/news/zasidanya_stupendialnoi_komisii_25_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/kluch_do_yspihy.html",
    image: "./image/news/kluch_do_yspihy/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_duplomnuh_proektiv_201_24_06.html",
    image: "./image/news/zahust_duplomnuh_proektiv_201_24_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_duplomnuh_proektiv_201_23_06.html",
    image: "./image/news/zahust_duplomnuh_proektiv_201_23_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zystrich_cherez_50_rokiv.html",
    image: "./image/news/zystrich_cherez_50_rokiv/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_duplomnuh_proektiv_201.html",
    image: "./image/news/zahust_duplomnuh_proektiv_201/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_duplomnuh_proektiv_142.html",
    image: "./image/news/zahust_duplomnuh_proektiv_142/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_duplomnuh_proektiv_205.html",
    image: "./image/news/zahust_duplomnuh_proektiv_205/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_duplomnuh_proektiv_275.html",
    image: "./image/news/zahust_duplomnuh_proektiv_275/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/oficiyna_zayava.html",
    image: "./image/news/oficiyna_zayava/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zystrich_vupysknukiv_1980.html",
    image: "./image/news/zystrich_vupysknukiv_1980/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/stydentocentruzm_19_06.html",
    image: "./image/news/stydentocentruzm_19_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/isput_tehnichna_mehanika.html",
    image: "./image/news/isput_tehnichna_mehanika/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_zvitiv_raktuku.html",
    image: "./image/news/zahust_zvitiv_raktuku/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vchumo_istoriy.html",
    image: "./image/news/vchumo_istoriy/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/polovi_zboru.html",
    image: "./image/news/polovi_zboru/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zahust_kyrsovuh.html",
    image: "./image/news/zahust_kyrsovuh/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/kvalifikaciuynuy_isput.html",
    image: "./image/news/kvalifikaciuynuy_isput/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/innovacii_v_holodi.html",
    image: "./image/news/innovacii_v_holodi/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/yasuk.html",
    image: "./image/news/yasuk/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vustyp_oskar.html",
    image: "./image/news/vustyp_oskar/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/narada_10_06.html",
    image: "./image/news/narada_10_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/golos_pravdu.html",
    image: "./image/news/golos_pravdu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_kyratoriv_06_06.html",
    image: "./image/news/zasidanya_kyratoriv_06_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zmaganya_jum.html",
    image: "./image/news/zmaganya_jum/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/koncert_05_06.html",
    image: "./image/news/koncert_05_06/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/olimpijskui_zahid.html",
    image: "./image/news/olimpijskui_zahid/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_pamjati_ditej.html",
    image: "./image/news/den_pamjati_ditej/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/beznevunni_ditu.html",
    image: "./image/news/beznevunni_ditu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/svit_bez_jorstokosti.html",
    image: "./image/news/svit_bez_jorstokosti/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/mijnarodnui_olimpijskuj_den.html",
    image: "./image/news/mijnarodnui_olimpijskuj_den/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zystrich_z_durektorom.html",
    image: "./image/news/zystrich_z_durektorom/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/1_chervnya.html",
    image: "./image/news/1_chervnya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_vidkrutuh_dverei_29_05.html",
    image: "./image/news/den_vidkrutuh_dverei_29_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/dosvid.html",
    image: "./image/news/dosvid/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/tovarustskui_match_29_05.html",
    image: "./image/news/tovarustskui_match_29_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_27_05_2.html",
    image: "./image/news/proforientaciya_27_05_2/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_27_05.html",
    image: "./image/news/proforientaciya_27_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pedrada_27_05.html",
    image: "./image/news/pedrada_27_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/volonterstvo_27_05.html",
    image: "./image/news/volonterstvo_27_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/tujden_bezbariernosti.html",
    image: "./image/news/tujden_bezbariernosti/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/tujden_bezbariernosti.html",
    image: "./image/news/tujden_bezbariernosti/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zlit_stydentiv_23_05.html",
    image: "./image/news/zlit_stydentiv_23_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_pusemnosti_24_05.html",
    image: "./image/news/den_pusemnosti_24_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientacya_23_05.html",
    image: "./image/news/proforientacya_23_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/minifootball_22_05.html",
    image: "./image/news/minifootball_22_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/oskar_22_05.html",
    image: "./image/news/oskar_22_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/dni_nayku_22_05.html",
    image: "./image/news/dni_nayku_22_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/blagodiynui_koncert_22_05.html",
    image: "./image/news/blagodiynui_koncert_22_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/praktuchne_navchannya.html",
    image: "./image/news/praktuchne_navchannya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/kryglui_stil_zav_vaddilennya.html",
    image: "./image/news/kryglui_stil_zav_vaddilennya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zystrich_z_steikholderamu_20_05.html",
    image: "./image/news/zystrich_z_steikholderamu_20_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/kryglui_stil_20_05.html",
    image: "./image/news/kryglui_stil_20_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/gostova_lekciya_25_05.html",
    image: "./image/news/gostova_lekciya_25_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pamiyat_19_05.html",
    image: "./image/news/pamiyat_19_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/mijnarodnui_den_myzeiv.html",
    image: "./image/news/mijnarodnui_den_myzeiv/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vuhovna_goduna_ykraina_pamiatae.html",
    image: "./image/news/vuhovna_goduna_ykraina_pamiatae/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_metoduchnoi_radu_16_05.html",
    image: "./image/news/zasidanya_metoduchnoi_radu_16_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_pryimalnoi_komisii.html",
    image: "./image/news/zasidanya_pryimalnoi_komisii/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_vushuvanku_15_05.html",
    image: "./image/news/den_vushuvanku_15_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pruventuvne_vuhovanya_14_05.html",
    image: "./image/news/pruventuvne_vuhovanya_14_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/ekskyrsiya_14_05.html",
    image: "./image/news/ekskyrsiya_14_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_stupendialnoi_komisii.html",
    image: "./image/news/zasidanya_stupendialnoi_komisii/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_12_05.html",
    image: "./image/news/proforientaciya_12_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_voleibol.html",
    image: "./image/news/proforientaciya_voleibol/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_MO_kyratoriv_12_05.html",
    image: "./image/news/zasidanya_MO_kyratoriv_12_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/gostova_lekciya_12_05.html",
    image: "./image/news/gostova_lekciya_12_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_10_05.html",
    image: "./image/news/proforientaciya_10_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_09_05.html",
    image: "./image/news/proforientaciya_09_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_evropu.html",
    image: "./image/news/den_evropu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_materi.html",
    image: "./image/news/den_materi/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/mijnarodnui_den_protu_bylingy_08_05.html",
    image: "./image/news/mijnarodnui_den_protu_bylingy_08_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidannya_stydradu_08_05.html",
    image: "./image/news/zasidannya_stydradu_08_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_vidkrutuh_dverei_08_05.html",
    image: "./image/news/den_vidkrutuh_dverei_08_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/gostova_lekciya_06_05.html",
    image: "./image/news/gostova_lekciya_06_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vsesvitnii_den_presu.html",
    image: "./image/news/vsesvitnii_den_presu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_pamiyati_08_05.html",
    image: "./image/news/den_pamiyati_08_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_06_05.html",
    image: "./image/news/proforientaciya_06_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/stydrada_06_05.html",
    image: "./image/news/stydrada_06_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zboru_kyratoriv_02_05.html",
    image: "./image/news/zboru_kyratoriv_02_05/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/prezentaciya_pasichnuk.html",
    image: "./image/news/prezentaciya_pasichnuk/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/planove_zasidannya_pedagogichnoi_radu.html",
    image: "./image/news/planove_zasidannya_pedagogichnoi_radu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/roboche_zasidanya_28_04.html",
    image: "./image/news/roboche_zasidanya_28_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/ohorona_praci_28_04.html",
    image: "./image/news/ohorona_praci_28_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/metoduchna_rada_28_04.html",
    image: "./image/news/metoduchna_rada_28_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/gostova_lekciya_28_04.html",
    image: "./image/news/gostova_lekciya_28_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/binarne_zanyattya.html",
    image: "./image/news/binarne_zanyattya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/chornobul_25_04.html",
    image: "./image/news/chornobul_25_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/intelekt_25_04.html",
    image: "./image/news/intelekt_25_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_robochoi_grypu.html",
    image: "./image/news/zasidanya_robochoi_grypu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_english_23_04.html",
    image: "./image/news/den_english_23_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_vidkrutuh_dverei_24_04.html",
    image: "./image/news/den_vidkrutuh_dverei_24_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/baikerskui_front.html",
    image: "./image/news/baikerskui_front/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/olimpiada_23_04.html",
    image: "./image/news/olimpiada_23_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/NMC_vebinar.html",
    image: "./image/news/NMC_vebinar/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/sanyemo_kobzara.html",
    image: "./image/news/sanyemo_kobzara/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_zemli_22_04.html",
    image: "./image/news/den_zemli_22_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_tvorchosti.html",
    image: "./image/news/den_tvorchosti/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pro_sychasny_viiny.html",
    image: "./image/news/pro_sychasny_viiny/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/proforientaciya_20_04.html",
    image: "./image/news/proforientaciya_20_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/maisterklas.html",
    image: "./image/news/maisterklas/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/yrok_doslidjenya_bidna.html",
    image: "./image/news/yrok_doslidjenya_bidna/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/laboratorni_18_04.html",
    image: "./image/news/laboratorni_18_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zystrich_18_04.html",
    image: "./image/news/zystrich_18_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/velukodnya_akciya.html",
    image: "./image/news/velukodnya_akciya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/fotokonkyrs.html",
    image: "./image/news/fotokonkyrs/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zbir_krushechok.html",
    image: "./image/news/zbir_krushechok/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pojejna_bezpeka.html",
    image: "./image/news/pojejna_bezpeka/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/onlain_lekciya_142.html",
    image: "./image/news/onlain_lekciya_142/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zmaganya_15_04.html",
    image: "./image/news/zmaganya_15_04/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pokluk_vershun.html",
    image: "./image/news/pokluk_vershun/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/blagodiynuy_koncert_s_kray.html",
    image: "./image/news/blagodiynuy_koncert_s_kray/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/sport_ta_zdorovya.html",
    image: "./image/news/sport_ta_zdorovya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_zdorovya.html",
    image: "./image/news/den_zdorovya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/04_04_praktuka.html",
    image: "./image/news/04_04_praktuka/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/04_04_stydrada.html",
    image: "./image/news/04_04_stydrada/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/01_03_zahodu.html",
    image: "./image/news/01_03_zahodu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/01_03.html",
    image: "./image/news/01_03/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/narada_kyratoriv.html",
    image: "./image/news/narada_kyratoriv/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/praktuka_31_03.html",
    image: "./image/news/praktuka_31_03/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_kyratoriv.html",
    image: "./image/news/zasidanya_kyratoriv/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pedrada_27.html",
    image: "./image/news/pedrada_27/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/27_bereznya.html",
    image: "./image/news/27_bereznya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/goduna_zemli.html",
    image: "./image/news/goduna_zemli/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_nacionalnoi_gvardii.html",
    image: "./image/news/den_nacionalnoi_gvardii/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_SBY.html",
    image: "./image/news/den_SBY/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_borotbu_z_tyberkylozom.html",
    image: "./image/news/den_borotbu_z_tyberkylozom/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/maybytne_lisy.html",
    image: "./image/news/maybytne_lisy/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/atestaciya_2025.html",
    image: "./image/news/atestaciya_2025/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/seminar.html",
    image: "./image/news/seminar/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_zemli.html",
    image: "./image/news/den_zemli/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/isput_traktorusta.html",
    image: "./image/news/isput_traktorusta/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/lina_kostenko.html",
    image: "./image/news/lina_kostenko/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_dobrovolca.html",
    image: "./image/news/den_dobrovolca/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_matematuku.html",
    image: "./image/news/den_matematuku/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/NMT.html",
    image: "./image/news/NMT/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_kiber_cenzury.html",
    image: "./image/news/den_kiber_cenzury/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vuhovna_yagodyak.html",
    image: "./image/news/vuhovna_yagodyak/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_derjavnogo_gimny.html",
    image: "./image/news/den_derjavnogo_gimny/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/sumurenko.html",
    image: "./image/news/sumurenko/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/shevchenko_07_03.html",
    image: "./image/news/shevchenko_07_03/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_06_03.html",
    image: "./image/news/zasidanya_06_03/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/protudiya_pidlitkiv.html",
    image: "./image/news/protudiya_pidlitkiv/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_borotbu_z_narkomaniey.html",
    image: "./image/news/den_borotbu_z_narkomaniey/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/MO_kyratoriv_03_03.html",
    image: "./image/news/MO_kyratoriv_03_03/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/MO_kyratoriv_03_03.html",
    image: "./image/news/MO_kyratoriv_03_03/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_pessmennuka.html",
    image: "./image/news/den_pessmennuka/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/marafon_shevchenka.html",
    image: "./image/news/marafon_shevchenka/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zmaganya_arm.html",
    image: "./image/news/zmaganya_arm/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_pedradu_28_03.html",
    image: "./image/news/zasidanya_pedradu_28_03/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/pedrada_27_02.html",
    image: "./image/news/pedrada_27_02/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/krum_ce_ukraina.html",
    image: "./image/news/krum_ce_ukraina/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vebinar_klass_room.html",
    image: "./image/news/vebinar_klass_room/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/nezlamna_ukraina.html",
    image: "./image/news/nezlamna_ukraina/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_ukrainskoi_jinku.html",
    image: "./image/news/den_ukrainskoi_jinku/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/lesya_ukrainka.html",
    image: "./image/news/lesya_ukrainka/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/partnerstvo_zaradu_maibytnogo.html",
    image: "./image/news/partnerstvo_zaradu_maibytnogo/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zasidanya_AK.html",
    image: "./image/news/zasidanya_AK/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/3_rik_viynu.html",
    image: "./image/news/3_rik_viynu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vizut.html",
    image: "./image/news/vizut/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/mova_2025.html",
    image: "./image/news/mova_2025/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/20_lutogo_2025.html",
    image: "./image/news/20_lutogo_2025/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/akredutaciya_2025.html",
    image: "./image/news/akredutaciya_2025/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/truzyb.html",
    image: "./image/news/truzyb/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/den_spontanoi_dobrotu.html",
    image: "./image/news/den_spontanoi_dobrotu/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/16_lutogo.html",
    image: "./image/news/16_lutogo/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/boiovi_dii.html",
    image: "./image/news/boiovi_dii/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/sportuvna_molod.html",
    image: "./image/news/sportuvna_molod/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/zystrich_z_depytatkoy.html",
    image: "./image/news/zystrich_z_depytatkoy/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/storii_kohanya.html",
    image: "./image/news/storii_kohanya/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/vpo.html",
    image: "./image/news/vpo/1.jpg",
    img_descr: "",
    title: "",
    content: "",
  },
  {
    link: "/news/robitnuchi_profesii.html",
    image: "./image/news/robitnuchi_profesii/1.jpg",
    img_descr: "Робітничі професії: перспективно і цікаво",
    title: "Робітничі професії: перспективно і цікаво",
    content:
      "Сьогодні кожен здобувач освіти коледжу розуміє цінність робітничих професій...",
  },
  {
    link: "/news/isput_traktorust.html",
    image: "./image/news/isput_traktorust/1.jpg",
    img_descr:
      "Іспит на отримання посвідчень тракториста-машиніста базової категорії А1",
    title:
      "Іспит на отримання посвідчень тракториста-машиніста базової категорії А1",
    content:
      "11 лютого 2025 року в коледжі працювала екзаменаційна комісія Держпродспоживслуби України...",
  },
  {
    link: "/news/jinku_v_nayci.html",
    image: "./image/news/jinku_v_nayci/1.jpg",
    img_descr: "Жінки в науці",
    title: "Жінки в науці",
    content:
      "Щорічно, 11 лютого за рішенням ООН відзначається Міжнародний День жінок і дівчат у науці...",
  },
  {
    link: "/news/jutya_za_chest_ta_gidnist.html",
    image: "./image/news/jutya_za_chest_ta_gidnist/1.jpg",
    img_descr: "Вони віддали своє життя за честь і гідгність",
    title: "Вони віддали своє життя за честь і гідгність",
    content:
      "7 лютого в М11 групі куратором Валентиною МЕФОДОВСЬКОЮ проведено урок мужності...",
  },
  {
    link: "/news/den_bezpechnogo_internety.html",
    image: "./image/news/den_bezpechnogo_internety/1.jpg",
    img_descr: "Тиждень безпечного інтернету",
    title: "Тиждень безпечного інтернету",
    content:
      "Погодьтеся, що сучасні інформаційні технології та Всесвітня мережа...",
  },
  {
    link: "/news/istoriya_nashogo_geroya.html",
    image: "./image/news/istoriya_nashogo_geroya/1.jpg",
    img_descr: "Історія нашого героя",
    title: "Історія нашого героя",
    content:
      "Олександр БЕВЗЮК випускник 2014 року, який пробув 2 роки та 7 місяців у полоні...",
  },
  {
    link: "/news/stydrada_05_02.html",
    image: "./image/news/stydrada_05_02/1.jpg",
    img_descr: "5 лютого відбулось засідання студентського самоврядування",
    title: "5 лютого відбулось засідання студентського самоврядування",
    content:
      "Студентська рада Новоушицького фахового коледжу - це спільнота здобувачів освіти, яка...",
  },
  {
    link: "/news/pochatok_2_semestry.html",
    image: "./image/news/pochatok_2_semestry/1.jpg",
    img_descr: "Розпочинаємо ІІ семестр",
    title: "Розпочинаємо ІІ семестр",
    content:
      "Протягом першого тижня лютого відбулися збори в студентських колективах...",
  },
  {
    link: "/news/3_lutogo_2025.html",
    image: "./image/news/3_lutogo_2025/1.jpg",
    img_descr: "3 лютого відбулось планове засідання кураторів",
    title: "3 лютого відбулось планове засідання кураторів",
    content:
      "Початок нового семестру - це нові можливості, виклики та перспективи...",
  },
  {
    link: "/news/zasidannya_pedagogichnoi_radu_30_12.html",
    image: "./image/news/zasidannya_pedagogichnoi_radu_30_12/1.jpg",
    img_descr: "30 січня 2025 планове засідання педагогічної ради",
    title: "30 січня 2025 планове засідання педагогічної ради",
    content:
      "Порядок денний: 1. Про підсумки освітнього процесу у першому півріччі 2024 -...",
  },
  {
    link: "/news/den_pamyati_geroiv_kryt.html",
    image: "./image/news/den_pamyati_geroiv_kryt/1.jpg",
    img_descr: "День пам'яті героїв Крут: символ мужності і любові до України",
    title: "День пам'яті героїв Крут: символ мужності і любові до України",
    content:
      "Цього дня ми віддаємо шану стійкості та мужності молодих хлопців...",
  },
  {
    link: "/news/robochi_naradu.html",
    image: "./image/news/robochi_naradu/1.jpg",
    img_descr: "Відбулися робочі наради керівного складу",
    title: "Відбулися робочі наради керівного складу",
    content: "Серед головних питань - безпека освітнього процесу",
  },
  {
    link: "/news/den_zatverdjenya_derjavnogo_prapora.html",
    image: "./image/news/den_zatverdjenya_derjavnogo_prapora/1.jpg",
    img_descr: "Ці кольори - уособлення нашої землі",
    title: "Ці кольори - уособлення нашої землі",
    content:
      "28 січня 1992 року Верховна Рада України прийняла Постанову про затвердження...",
  },
  {
    link: "/news/mijnarodnui_den_pamiyati_golokosty.html",
    image: "./image/news/mijnarodnui_den_pamiyati_golokosty/1.jpg",
    img_descr: "Неможливо забути",
    title: "Неможливо забути",
    content: "27 січня світ вшановує пам'ять жертв Голокосту...",
  },
  {
    link: "/news/goduna_nacionalnoi_ednosti.html",
    image: "./image/news/goduna_nacionalnoi_ednosti/1.jpg",
    img_descr: "З Днем Соборності",
    title: "З Днем Соборності",
    content: "Година національної єдності з нагоди Дня Соборності...",
  },
  {
    link: "/news/den_pamiyati_kiborgiv.html",
    image: "./image/news/den_pamiyati_kiborgiv/1.jpg",
    img_descr:
      "Присвячується Дню вшанування пам'яті захисників Донецького аеропорту",
    title:
      "Присвячується Дню вшанування пам'яті захисників Донецького аеропорту",
    content:
      "20 січня у стінах нашого коледжу для усіх працівників відбулась Година Пам'яті...",
  },
  {
    link: "/news/pidvuschenya_kvalifikacii_20_01.html",
    image: "./image/news/pidvuschenya_kvalifikacii_20_01/1.jpg",
    img_descr: "Підвищення кваліфікації у формі стажування",
    title: "Підвищення кваліфікації у формі стажування",
    content:
      "З 20 січня по 24 січня 2025 року викладачі спецдисциплін спеціальності 142...",
  },
  {
    link: "/news/stydentocentruzm.html",
    image: "./image/news/stydentocentruzm/1.jpg",
    img_descr: "Студентоцентризм",
    title: "Студентоцентризм",
    content: "16 грудня відбулось планове засідання стипендіальної комісії...",
  },
  {
    link: "/news/navchannya_z_ohoronu_praci.html",
    image: "./image/news/navchannya_z_ohoronu_praci/1.jpg",
    img_descr: "Охорона праці",
    title: "Охорона праці",
    content:
      "У ВСП «НФК ЗВО «ПДУ» проведено навчання та перевірку знань з охорони праці...",
  },
  {
    link: "/news/zasidanya_MO_kyratoriv.html",
    image: "./image/news/zasidanya_MO_kyratoriv/1.jpg",
    img_descr: "Виховна робота",
    title: "Виховна робота",
    content:
      "14 грудня відбулося планове засідання методичного об'єднання кураторів академічних груп...",
  },
  {
    link: "/news/zystrich_z_steikholderamu_11.html",
    image: "./image/news/zystrich_z_steikholderamu_11/1.jpg",
    img_descr: "Відвідування ТОВ Компанія ЛАН",
    title: "Відвідування ТОВ Компанія ЛАН",
    content:
      "В.о. директора коледжу Віталій ХРУСТІНСЬКИЙ здійснив візит до ТОВ ЛАН...",
  },
  {
    link: "/news/stepan_bandera.html",
    image: "./image/news/stepan_bandera/1.jpg",
    img_descr: "Степан Бандера як символ руху нескорених",
    title: "Степан Бандера як символ руху нескорених",
    content:
      "В історії кожного народу є люди, які опиняються в центрі доленосних подій, стають ініціаторами...",
  },
  {
    link: "/news/kolyada.html",
    image: "./image/news/kolyada/1.jpg",
    img_descr: "Коляда лунає в стінах коледжу!",
    title: "Коляда лунає в стінах коледжу!",
    content:
      "У другий день Різдва наповнені теплом і святковим духом віншування подарувала колежанській ...",
  },
  {
    link: "/news/istorii_nashuh_geroiv.html",
    image: "./image/news/istorii_nashuh_geroiv/1.jpg",
    img_descr: "ІСТОРІЇ НАШИХ ГЕРОЇВ",
    title: "ІСТОРІЇ НАШИХ ГЕРОЇВ",
    content:
      "Наш випускник, прикордонник Олександр Бевзюк повернувся додому під час обміну полонених...",
  },
  {
    link: "/news/zystrich_z_steikholderamu_27_12.html",
    image: "./image/news/zystrich_z_steikholderamu_27_12/1.jpg",
    img_descr:
      "Запорука якісної  підготовки фахівців  – діалог з роботодавцями",
    title: "Запорука якісної  підготовки фахівців  – діалог з роботодавцями",
    content:
      "Одним із векторів забезпечення якості підготовки майбутніх фахівців за ОПП 208...",
  },
  {
    link: "/news/mo_kyratoriv_24_grydnya.html",
    image: "./image/news/mo_kyratoriv_24_grydnya/1.jpg",
    img_descr: "Методичне об’єднання кураторів: підбиваємо підсумки онлайн",
    title: "Методичне об’єднання кураторів: підбиваємо підсумки онлайн",
    content:
      "24 грудня відбулося підсумкове онлайн-засідання методичного об’єднання...",
  },
  {
    link: "/news/oskar.html",
    image: "./image/news/oskar/1.jpg",
    img_descr: "Методична робота",
    title: "Методична робота",
    content:
      "За рішенням конкурсної комісії відбіркового туру та педагогічної ради ВСП...",
  },
  {
    link: "/news/pedrada_23_grydnya.html",
    image: "./image/news/pedrada_23_grydnya/1.jpg",
    img_descr: "Планове засідання педагогічної ради коледжу",
    title: "Планове засідання педагогічної ради коледжу",
    content:
      "23 грудня відбулось планове засідання педагогічної ради коледжу...",
  },
  {
    link: "/news/zmaganya_z_nastilnogo_tenisy.html",
    image: "./image/news/zmaganya_z_nastilnogo_tenisy/1.jpg",
    img_descr: "Змагання з настільного тенісу",
    title: "Змагання з настільного тенісу",
    content:
      "Протягом першої декади грудня відбулися загальноколежанські  змагання...",
  },
  {
    link: "/news/armresling_17_grydnya.html",
    image: "./image/news/armresling_17_grydnya/1.jpg",
    img_descr: "КУБОК УКРАЇНИ З АРМРЕСТЛІНГУ",
    title: "КУБОК УКРАЇНИ З АРМРЕСТЛІНГУ",
    content:
      "12-16 грудня 2024 року в селищі Воловець на Закарпатті, відбувся Кубок України та Всеукраїнський турнір з армрестлінгу...",
  },
  {
    link: "/news/zystrich_stydrada_groholskiy.html",
    image: "./image/news/zystrich_stydrada_groholskiy/1.jpg",
    img_descr: "Акредитація спеціальностей – це спільна мета",
    title: "Акредитація спеціальностей – це спільна мета",
    content:
      "12 грудня студентська рада коледжу радо зібралася за круглим столом. Разом з керівником...",
  },
  {
    link: "/news/stop_vil_mefodovska.html",
    image: "./image/news/stop_vil_mefodovska/1.jpg",
    img_descr: "«Стоп ВІЛ/СНІД»",
    title: "«Стоп ВІЛ/СНІД»",
    content:
      "11 грудня куратором Валентиною МЕФОДОВСЬКОЮ проведено годину спілкування «Стоп ВІЛ/СНІД» для здобувачів освіти  М11 групи...",
  },
  {
    link: "/news/olimpiadu_zahalno.html",
    image: "./image/news/olimpiadu_zahalno/1.jpg",
    img_descr: "Олімпіади: перший етап завершено!",
    title: "Олімпіади: перший етап завершено!",
    content:
      "Навчально-освітній процес у фаховому закладі передвищої освіти завжди справа...",
  },
  {
    link: "/news/zystrich_z_provaideramu.html",
    image: "./image/news/zystrich_z_provaideramu/1.jpg",
    img_descr: "Зустріч майбутніх агрономів з представниками VITAGRO",
    title: "Зустріч майбутніх агрономів з представниками VITAGRO",
    content:
      "11 грудня студенти А-13 та А-14 груп спеціальності «Агрономія» Новоушицького фахового коледжу разом ...",
  },
  {
    link: "/news/kyrsove_proektyvanya_melnik.html",
    image: "./image/news/kyrsove_proektyvanya_melnik/1.jpg",
    img_descr:
      "КУРСОВИЙ ПРОЕКТ - ПЕРША НАУКОВА РОБОТА ТЕХНІКА - МЕХАНІКА  АГРОПРОМИСЛОВОГО ВИРОБНИЦТВА",
    title:
      "КУРСОВИЙ ПРОЕКТ - ПЕРША НАУКОВА РОБОТА ТЕХНІКА - МЕХАНІКА     АГРОПРОМИСЛОВОГО ВИРОБНИЦТВА",
    content:
      "Важливим етапом у формуванні майбутнього фахівця є курсове проектування, що дозволить здобувачам...",
  },
  {
    link: "/news/den_prav_lydunu.html",
    image: "./image/news/den_prav_lydunu/1.jpg",
    img_descr: "Захищаючи права сьогодні – будуємо мирне завтра",
    title: "Захищаючи права сьогодні – будуємо мирне завтра",
    content:
      "11 грудня у коледжі для студентів груп М-11 та ГДХ-11 груп відбулася змістовна лекція, присвячена ...",
  },
  {
    link: "/news/andriivsi_vechornutsi.html",
    image: "./image/news/andriivsi_vechornutsi/1.jpg",
    img_descr: "Веселі Андріївські вечорниці в Новоушицькій бібліотеці",
    title: "Веселі Андріївські вечорниці в Новоушицькій бібліотеці",
    content:
      "Сьогодні студенти групи АЛ-11 Новоушицького коледжу поринули у чарівний світ українських традицій...",
  },
  {
    link: "/news/den_ykrainskoi_hystku.html",
    image: "./image/news/den_ykrainskoi_hystku/1.jpg",
    img_descr: "День української хустки: шануємо традиції разом",
    title: "День української хустки: шануємо традиції разом",
    content:
      "Щороку, 7 грудня, в Україні та світі відзначається День української хустки – свято, що символізує...",
  },
  {
    link: "/news/zystrich_pravove_vuhovanya.html",
    image: "./image/news/zystrich_pravove_vuhovanya/1.jpg",
    img_descr: "Правове  виховання  в дії!",
    title: "Правове  виховання  в дії!",
    content:
      "В рамках Всеукраїнської акції «16 днів проти насильства» 6 грудня здобувачі освіти нашого коледжу...",
  },
  {
    link: "/news/zystrich_z_ekspertamu.html",
    image: "./image/news/zystrich_z_ekspertamu/1.jpg",
    img_descr: "Акредитація: спільна робота на результат",
    title: "Акредитація: спільна робота на результат",
    content:
      "6 грудня відбулася знакова подія для студентів, які обрали для себе інженерні спеціальності...",
  },
  {
    link: "/news/zmaganya_do_dnya_zsy.html",
    image: "./image/news/zmaganya_do_dnya_zsy/1.jpg",
    img_descr: "ЄДНІСТЬ РОБИТЬ НАС СИЛЬНІШИМИ!",
    title: "ЄДНІСТЬ РОБИТЬ НАС СИЛЬНІШИМИ!",
    content:
      "Відзначення Дня Збройних Сил України у коледжі стало не лише днем вшанування захисників, але...",
  },
  {
    link: "/news/vuhovna_goduna_melnik.html",
    image: "./image/news/vuhovna_goduna_melnik/1.jpg",
    img_descr: "Герої живуть поруч із нами",
    title: "Герої живуть поруч із нами",
    content:
      "6 грудня 2024 року коледжі відбулася зворушлива та патріотична виховна година під назвою «Герої живуть...",
  },
  {
    link: "/news/vidkruttya_doshku.html",
    image: "./image/news/vidkruttya_doshku/1.jpg",
    img_descr: "Калина на снігу… ",
    title: "Калина на снігу… ",
    content:
      "5 грудня, напередодні Дня Збройних Сил України, у ВСП НФК ЗВО ПДУ відбувся зворушливий благодійний ...",
  },
  {
    link: "/news/zystrich_z_steikholderamu_04_11.html",
    image: "./image/news/zystrich_z_steikholderamu_04_11/1.jpg",
    img_descr:
      "Нові зустрічі ,нові можливості, з новою освітньо-професійною програмою в навчальний рік.",
    title:
      "Нові зустрічі ,нові можливості, з новою освітньо-професійною програмою   в навчальний рік.",
    content:
      "04 листопада 2024 року  в рамках проєкту Коледж та ТОВ «Компанія ЛАН»...",
  },
  {
    link: "/news/zasidanya_atestaciya_4_grydnya.html",
    image: "./image/news/zasidanya_atestaciya_4_grydnya/1.jpg",
    img_descr: "ПРОФЕСІЙНЕ ЗРОСТАННЯ: ЗАСІДАННЯ АТЕСТАЦІЙНОЇ КОМІСІЇ",
    title: "ПРОФЕСІЙНЕ ЗРОСТАННЯ: ЗАСІДАННЯ АТЕСТАЦІЙНОЇ КОМІСІЇ",
    content:
      "4 грудня відбулося важливе засідання атестаційної комісії, де було розглянуто низку питань...",
  },
  {
    link: "/news/zasidanya_mo_kyratoriv_4_grydnya.html",
    image: "./image/news/zasidanya_mo_kyratoriv_4_grydnya/1.jpg",
    img_descr: "Засідання методичного об’єднання кураторів",
    title: "Засідання методичного об’єднання кураторів",
    content:
      "4 грудня відбулося чергове засідання методичного об’єднання кураторів академічних груп, на якому було обговорено...",
  },
  {
    link: "/news/zasidanya-metodradu_4_grydnya.html",
    image: "./image/news/zasidanya-metodradu_4_grydnya/1.jpg",
    img_descr: "Якість освіти – наш пріоритет",
    title: "Якість освіти – наш пріоритет",
    content:
      "4 грудня відбулося чергове засідання методичної ради коледжу4 грудня відбулося чергове засідання методичної ...",
  },
  {
    link: "/news/zasidanya-CK-3-grydnya.html",
    image: "./image/news/zasidanya-CK-3-grydnya/1.jpg",
    img_descr:
      "Спільне засідання циклових комісій: об’єднуємось для кращих результатів",
    title: "Спільне засідання циклових комісій",
    content:
      "3 грудня відбулося важливе засідання циклових комісій, присвячене одній з найактуальніших задач коледжу ...",
  },
  {
    link: "/news/yrok_myjnosti.html",
    image: "./image/news/yrok_myjnosti/1.jpg",
    img_descr: "УРОК МУЖНОСТІ",
    title: "УРОК МУЖНОСТІ",
    content:
      "Сьогодні, як ніколи раніше, важливо відчувати свою причетність до великої справи захисту України...",
  },
  {
    link: "/news/batkivski_zboru_mefodovska.html",
    image: "./image/news/batkivski_zboru_mefodovska/1.jpg",
    img_descr: "Батьківські збори в М11 групі",
    title: "Батьківські збори в М11 групі",
    content:
      "29 листопада 2024 року в М11 групі куратором Валентиною МЕФОДОВСЬКОЮ...",
  },
  {
    link: "/news/zasidanya_pedradu_26_lustopada.html",
    image: "./image/news/zasidanya_pedradu_26_lustopada/1.jpg",
    img_descr: "Засідання педагогічної ради: підсумки та подальші кроки",
    title: "Засідання педагогічної ради: підсумки та подальші кроки",
    content:
      "26 листопада 2024 року відбулося планове засідання педагогічної ради, де були обговорені актуальні питання функціонування...",
  },
  {
    link: "/news/polojenya_pro_atestaciy.html",
    image: "./image/news/polojenya_pro_atestaciy/1.jpg",
    img_descr:
      "Міністерство освіти і науки України оновило Положення про атестацію педагогічних працівників ",
    title:
      "Міністерство освіти і науки України оновило Положення про атестацію педагогічних працівників ",
    content:
      "Міністерство освіти і науки України оновило Положення про атестацію педагогічних працівників...",
  },
  {
    link: "/news/stydentu_ta_administraciya.html",
    image: "./image/news/stydentu_ta_administraciya/1.jpg",
    img_descr: "«Студенти та адміністрація: діалог заради розвитку»",
    title: "«Студенти та адміністрація: діалог заради розвитку»",
    content:
      "25 листопада відбулася довгоочікувана зустріч студентського активу з в.о. директора Віталієм Хрустінським...",
  },
  {
    link: "/news/den_protu_nasullya_nad_jinkamu.html",
    image: "./image/news/den_protu_nasullya_nad_jinkamu/1.jpg",
    img_descr: "«16 днів проти насильства»",
    title: "«16 днів проти насильства»",
    content:
      "Вже традицією для нашого закладу стала участь у  Всеукраїнській акції 16 днів проти насильства...",
  },
  {
    link: "/news/mo_kyratoriv_29_listopada.html",
    image: "./image/news/mo_kyratoriv_29_listopada/1.jpg",
    img_descr:
      "Звітуємо про результати засідання методичного об’єднання кураторів",
    title: "Звітуємо про результати засідання методичного об’єднання кураторів",
    content:
      "29 листопада відбулося планове засідання методичного об’єднання кураторів нашого коледжу...",
  },
  {
    link: "/news/partnerstvo.html",
    image: "./image/news/partnerstvo/1.jpg",
    img_descr: "ПАРТНЕРСТВО ЗАРАДИ МАЙБУНЬОГО!",
    title: "ПАРТНЕРСТВО ЗАРАДИ МАЙБУНЬОГО!",
    content:
      "22 листопада відбулася знакова подія для нашого навчального закладу – зустріч, присвячена розвитку матеріально-технічної...",
  },
  {
    link: "/news/den_gidnosti_ta_svobodu.html",
    image: "./image/news/den_gidnosti_ta_svobodu/1.jpg",
    img_descr:
      "Народ мій є! Народ мій завжди буде! Ніхто не  перекреслить мій народ!",
    title:
      "Народ мій є! Народ мій завжди буде! Ніхто не  перекреслить мій народ!",
    content:
      "Слова українського письменника Василя Симоненка стали епіграфом виховної години ...",
  },
  {
    link: "/news/sakyru.html",
    image: "./image/news/sakyru/1.jpg",
    img_descr: "Сакури розквітнуть на території навчального закладу!",
    title: "Сакури розквітнуть на території навчального закладу!",
    content:
      "Озеленення міст – це глобальний тренд, який набуває дедалі більшої...",
  },
  {
    link: "/news/vidkrute_zanyattya_melnuchenko_g.html",
    image: "./image/news/vidkrute_zanyattya_melnuchenko_g/1.jpg",
    img_descr: "АТЕСТАЦІЙНА  КАМПАНІЯ -2025 В ДІЇ",
    title: "АТЕСТАЦІЙНА  КАМПАНІЯ -2025 В ДІЇ",
    content:
      "21 листопада у ВСП НФК ЗВО ПДУ відбувся відкритий виховний захід, присвячений Дню Гідності та Свободи. Завідувач бібліотекою...",
  },
  {
    link: "/news/den_protu_nasullya_nad_ditmu.html",
    image: "./image/news/den_protu_nasullya_nad_ditmu/1.jpg",
    img_descr:
      "«Всесвітній день запобігання насильству над дітьми: мій улюблений світ без насильства»",
    title:
      "«Всесвітній день запобігання насильству над дітьми: мій улюблений світ без насильства»",
    content:
      "Щорічно 19 листопада світ відзначає Всесвітній день запобігання насильству над дітьми (World Day for Prevention of Child Abuse)...",
  },
  {
    link: "/news/vidkrute_zanyattya_alonov.html",
    image: "./image/news/vidkrute_zanyattya_alonov/1.jpg",
    img_descr: "АТЕСТАЦІЙНА  КАМПАНІЯ -2025 В ДІЇ",
    title: "АТЕСТАЦІЙНА  КАМПАНІЯ -2025 В ДІЇ",
    content:
      "В рамках АТЕСТАЦІЙНОЇ КАМПАНІЇ-2025 19 листопада 2024 року представили свої надбання педагогічної майстерності й досвіду  ...",
  },
  {
    link: "/news/den_samovryadyvannya.html",
    image: "./image/news/den_samovryadyvannya/1.jpg",
    img_descr: "Свято студентства об’єднало молодь!",
    title: "Свято студентства об’єднало молодь!",
    content:
      "Студентське самоврядування – це не лише свята та розваги. Це також можливість для кожного студента ...",
  },
  {
    link: "/news/den_silskogo_gospodarstva.html",
    image: "./image/news/den_silskogo_gospodarstva/1.jpg",
    img_descr: "З Днем працівників сільського господарства!",
    title: "З Днем працівників сільського господарства!",
    content:
      "Шановні працівники аграрної галузі, викладачі, студенти та випускники нашого...",
  },

  {
    link: "/news/vidkrute_zanyattya_kozak.html",
    image: "./image/news/vidkrute_zanyattya_kozak/1.jpg",
    img_descr: "АТЕСТАЦІЙНА  КАМПАНІЯ -2025 В ДІЇ",
    title: "АТЕСТАЦІЙНА  КАМПАНІЯ -2025 В ДІЇ",
    content:
      "Викладачем Вячеславом Петровичем Козаком 13.11.2024р. проведено відкрите заняття...",
  },
  {
    link: "/news/treningove_zanyattya.html",
    image: "./image/news/treningove_zanyattya/1.jpg",
    img_descr: "Тренінгове заняття «Я знаю, як стати впевненим»",
    title: "Тренінгове заняття «Я знаю, як стати впевненим»",
    content:
      "Впевненість у собі — це наше сприйняття себе, своїх можливостей...",
  },
  {
    link: "/news/yrok_na_vurobnuctvi.html",
    image: "./image/news/yrok_na_vurobnuctvi/1.jpg",
    img_descr: "Урок на виробництві",
    title: "Урок на виробництві",
    content:
      "В рамках підготовки фахівці за освітньо-професійною програмою «Монтаж і обслуговування холодильно-компресорних машин...",
  },
  {
    link: "/news/voleibol_obiednye.html",
    image: "./image/news/voleibol_obiednye/1.jpg",
    img_descr: "Нові зустрічі, нові можливості",
    title: "Нові зустрічі, нові можливості",
    content:
      "04 листопада 2024 року  в рамках проєкту Коледж та ТОВ «Компанія ЛАН» відбулася запланована...",
  },
  {
    link: "/news/vidkrute_zanyattya_melnuchenko.html",
    image: "./image/news/vidkrute_zanyattya_melnuchenko/1.jpg",
    img_descr: "МЕТОДИЧНИЙ КАЛЕЙДОСКОП ВІДКРИТИХ ЗАНЯТЬ ПРОДОВЖУЄТЬСЯ!",
    title: "МЕТОДИЧНИЙ КАЛЕЙДОСКОП ВІДКРИТИХ ЗАНЯТЬ ПРОДОВЖУЄТЬСЯ!",
    content:
      "В рамках АТЕСТАЦІЙНОЇ КАМПАНІЇ-2025 1 та 5 листопада 2024 року представили свої надбання педагогічної...",
  },
  {
    link: "/news/goduna_spilkyvania.html",
    image: "./image/news/goduna_spilkyvania/1.jpg",
    img_descr: "Освіта для мене-це...",
    title: "«Освіта для мене-це...»",
    content:
      "30 жовтня 2024 року зі студентами АЛ11 грпи та спільно з завідувачем відділенням...",
  },
  {
    link: "/news/konkyrs_petra-yacuka.html",
    image: "./image/news/konkyrs_petra-yacuka/1.jpg",
    img_descr: "Конкурс Петра ЯЦИКА",
    title: "«Конкурс Петра ЯЦИКА»",
    content:
      "29 жовтня 2024 року у Відокремленому структурному підрозділі «Новоушицький фаховий коледж Закладу вищої освіти...",
  },
  {
    link: "/news/den_avtomobilista.html",
    image: "./image/news/den_avtomobilista/1.jpg",
    img_descr: "«День автомобіліста і дорожника»",
    title: "«День автомобіліста і дорожника»",
    content:
      "З нагоди Дня автомобіліста і дорожника, який відзначають в цьому році 27 жовтня  зі студентами спеціальностей 275...",
  },
  {
    link: "/news/vidkrute_zanyattya.html",
    image: "./image/news/vidkrute_zanyattya/1.jpg",
    img_descr: "Атестаційна  кампанія - 2025 в дії",
    title: "Атестаційна  кампанія - 2025 в дії",
    content:
      "ВСП Новоушицький фаховий коледж ЗВО ПДУ: підготовка майбутніх спеціалістів поєднується з практичною діяльністю та освоєнням необхідних професійних компентентостей...",
  },
  {
    link: "/news/26_jovtniya.html",
    image: "./image/news/26_jovtniya/1.jpg",
    img_descr:
      "26 жовтня у м. Хмельницький відбувся Кубок Хмельницької області з армрестлінгу",
    title:
      "26 жовтня у м. Хмельницький відбувся Кубок Хмельницької області з армрестлінгу",
    content:
      "Здобувачі освіти учасники спортивної секції СИЛОВІ ВИДИ СПОРТУ взяли активну участь у Чемпіонаті Хмельницької області з армрестлінгу та вибороли 14 медалей!...",
  },
  {
    link: "/news/mo_kyratoriv.html",
    image: "./image/news/mo_kyratoriv/1.jpg",
    img_descr: "Методоб'єднання кураторів навчальних груп.",
    title: "Методоб'єднання кураторів навчальних груп.",
    content:
      "«24 жовтня 2024 року, відбулося засідання методичного об’єднання кураторів груп...",
  },
  {
    link: "/news/zasidanya_atestaciinoi_komisii.html",
    image: "./image/news/zasidanya_atestaciinoi_komisii/1.jpg",
    img_descr:
      "Засідання атестаційної комісії: ключові питання та плани на 2024-2025 н.р.",
    title:
      "Засідання атестаційної комісії: ключові питання та плани на 2024-2025 н.р.",
    content:
      "«22 жовтня відбулося засідання атестаційної комісії  у змішаному форматі...",
  },
  {
    link: "/news/den_borotbu_z_torgivley_lydmu.html",
    image: "./image/news/den_borotbu_z_torgivley_lydmu/1.jpg",
    img_descr:
      "Європейський день боротьби з торгівлею людьми: як не стати жертвою?",
    title:
      "Європейський день боротьби з торгівлею людьми: як не стати жертвою?",
    content:
      "«18 жовтня в Україні відзначається Європейський день боротьби з торгівлею людьми. З цієї...",
  },
  {
    link: "/news/klasufikaciya_medy.html",
    image: "./image/news/klasufikaciya_medy/1.jpg",
    img_descr:
      "Лабораторно-практичне заняття на тему: КЛАСИФІКАЦІЯ РІЗНИХ СОРТІВ МЕДУ",
    title:
      "Лабораторно-практичне заняття на тему: КЛАСИФІКАЦІЯ РІЗНИХ СОРТІВ МЕДУ",
    content:
      "«Просте насадження знань – це не освіта!» - стверджують відомі педагоги...",
  },
  {
    link: "/news/praktuchne_navchannya_djivaldis.html",
    image: "./image/news/praktuchne_navchannya_djivaldis/1.jpg",
    img_descr:
      "Проведення практичних занять на ПП «Дживальдіс» для здобувачі освіти Х14 групи",
    title:
      "Проведення практичних занять на ПП «Дживальдіс» для здобувачі освіти Х14 групи",
    content:
      "ПП «Дживальдіс» стало дієвою  платформою проведення практичних занять для здобувачів освіти за освітньо-професійною програмою...",
  },
  {
    link: "/news/tujden_kosmosy.html",
    image: "./image/news/tujden_kosmosy/1.jpg",
    img_descr: "Досліджуючи безмежний всесвіт",
    title: "Досліджуючи безмежний всесвіт",
    content:
      "У США космонавтів називають астронавтами, у Китаї – тайконавтами...",
  },
  {
    link: "/news/vsesvitniy_den_psuhichnogo_zdorovya.html",
    image: "./image/news/vsesvitniy_den_psuhichnogo_zdorovya/1.jpg",
    img_descr: "Всесвітній день психічного здоров'я",
    title: "Всесвітній день психічного здоров'я",
    content:
      "Світ переживає складні часи. Не встигнувши оговтатися від наслідків пандемії COVID-19...",
  },
  {
    link: "/news/shkola_molodogo_pedagoga.html",
    image: "./image/news/shkola_molodogo_pedagoga_08_10/1.jpg",
    img_descr: "Школа молодого педагога",
    title: "Перше у цьому році засідання школи молодого педагога відбулося  ",
    content: "«Зібратися разом – це початок, триматися разом – це процес...",
  },
  {
    link: "/news/zasidanya_stydraru.html",
    image: "./image/news/zasidanya_stydradu/1.jpg",
    img_descr: "Засідання студради: плани та ініціативи",
    title: "Засідання студради: плани та ініціативи",
    content:
      "7 жовтня відбулося планове засідання студентської ради коледжу. Активісти обговорили низку важливих питань...",
  },
  {
    link: "/news/den_osvityanuna.html",
    image: "./image/news/den_osvityanuna/1.jpg",
    img_descr: "День освітянина",
    title: "День освітянина",
    content:
      "У коледжі  відбулося урочисте відзначення працівників освіти з нагоди їхнього професійного свята...",
  },
  {
    link: "/news/trenyvannya_z_cz.html",
    image: "./image/news/trenyvannya_z_cz/1.jpg",
    img_descr: "Тренування з питань цивільного захисту",
    title: "Тренування з питань цивільного захисту",
    content:
      "26 вересня 2024 року, відповідно до План-графіку проведення на підприємствах, установах, організаціях спеціальних об’єктових навчань...",
  },
  {
    link: "./image/news/world_cleanup_day/1.pdf",
    image: "./image/news/world_cleanup_day/1.jpg",
    img_descr: "День прибирання",
    title: "Всесвітня акція World Cleanup Day",
    content:
      "Щороку в третю суботу вересня проходить акція Всесвітній день прибирання «World Cleanup Day»...",
  },
  {
    link: "./image/news/den_seluscha/1.pdf",
    image: "./image/news/den_seluscha/1.jpg",
    img_descr: "День селища",
    title: "День селища скажемо «ДЯКУЮ» нашим захисникам",
    content:
      "Багата та розмаїта історія Новоушицького краю налічує близько шести століть. Вперше назва селища згадується в середині XV століття. В 1439 році польський шляхтич Сенько...",
  },
  {
    link: "./image/news/pravula_povedinku/1.pdf",
    image: "./image/news/pravula_povedinku/1.jpg",
    img_descr: "Виховна година",
    title: "Культура поведінки здобувачів фахової передвищої освіти",
    content:
      "18.09  кураторами академічних груп проведено виховні години на тему: «Культура поведінки здобувачів фахової передвищої освіти»...",
  },
  {
    link: "./image/news/den_fizuchnoi_kyltyru_i_sporty/1.pdf",
    image: "./image/news/den_fizuchnoi_kyltyru_i_sporty/1.jpg",
    img_descr: "День фізичної культури і спорту України!",
    title: "З днем фізичної культури і спорту України!",
    content:
      "Загальноколежанський патріотичний забіг «Біжу за ГЕРОЇВ України» присвячується пам’яті Героїв, випускників коледжу…",
  },
  {
    link: "./image/news/tyrnir_z_voleiboly/1.pdf",
    image: "./image/news/tyrnir_z_voleiboly/1.jpg",
    img_descr: "Турнір з волейболу",
    title: "Турнір з волейболу",
    content:
      "14 вересня з нагоди Дня фізичної культури і спорту УКРАЇНИ відбувся турнір з волейболу серед команд Новоушицької територіальної громади...",
  },
  {
    link: "./image/news/tujden_pershokyrsnuka/1.pdf",
    image: "./image/news/tujden_pershokyrsnuka/1.jpg",
    img_descr: "Тиждень першокурсника",
    title: "Тиждень першокурсника в бібліотеці",
    content:
      "У вересні місяці в бібліотеці  коледжу розпочався комплексний захід «Тиждень першокурсника». Головна мета цього заходу – ознайомлення здобувачів першого курсу з книжковим фондом...",
  },
  {
    link: "./image/news/perevirka_gyrtojutok/1.pdf",
    image: "./image/news/perevirka_gyrtojutok/1.jpg",
    img_descr: "Гуртожиток коледжу",
    title: "Перевірка гуртожитку",
    content:
      "12 вересня 2024 року проводився рейд перевірки санітарного стану кімнат мешканців третього і четвертого поверхів - студентів коледжу...",
  },
  {
    link: "./image/news/den_gramotnosti/1.pdf",
    image: "./image/news/den_gramotnosti/1.jpg",
    img_descr: "Міжнародний день грамотності",
    title: "До міжнародного дня грамотності",
    content:
      "Щорічно 8 вересня у всьому світі святкується Міжнародний день грамотності. Його започатковано ЮНЕСКО у вересні 1965 року...",
  },
  {
    link: "./image/news/ivan_rozgonyuk/ivan_rozgonyuk.pdf",
    image: "./image/news/ivan_rozgonyuk/1.jpg",
    img_descr: "Вічна шана герою!",
    title: "Вічна шана герою!",
    content:
      "Прийшла сумна, трагічна звістка в нашу колежанську родину. На Донецькому напрямку загинув випускник нашого коледжу 2017 ...",
  },
  {
    link: "./image/news/den_zapobigannya_samogybstvam/den_zapobigannya_samogybstvam.pdf",
    image: "./image/news/den_zapobigannya_samogybstvam/1.jpg",
    img_descr: "Психічне здоров’я молоді",
    title: "Психічне здоров’я молоді",
    content:
      "10 вересня щорічно відзначається Всесвітній день запобігання самогубствам. Починаючи із 2024 по 2026 рік основна тема цього ...",
  },
  {
    link: "./image/news/pedahohichna_rada_09_09/pedahohichna_rada_09_09.pdf",
    image: "./image/news/pedahohichna_rada_09_09/1.jpg",
    img_descr: "Засідання педагогічної ради коледжу  ",
    title: "Засідання педагогічної ради коледжу ",
    content:
      "9 вересня 2024 року під головуванням директора коледжу Мирослави ІВАСИК  відбулося засідання педагогічної ради коледжу...",
  },
  {
    link: "./image/news/onayomlyvalna_praktuka/onayomlyvalna_praktuka.pdf",
    image: "./image/news/onayomlyvalna_praktuka/1.jpg",
    img_descr:
      "Практичне навчання – основа професійного зростання  здобувачів освіти ",
    title:
      "Практичне навчання – основа професійного зростання  здобувачів освіти",
    content:
      "Мета і зміст ОЗНАЙОМЛЮВАЛЬНОЇ практики визначені освітньо-кваліфікаційною характеристикою...",
  },
  {
    link: "./image/news/pravovui_ta_socialnui_zahust.pdf",
    image: "./image/news/pravovui_ta_socialnui_zahust/1.jpg",
    img_descr: "Правовий та соціальний  захист  здобувачів  освіти",
    title: "Правовий та соціальний  захист  здобувачів  освіти»",
    content:
      "У світі, де дитинство повинно бути безтурботним та наповненим мріями, є діти, для яких ця безтурботність – розкіш. Це діти з сімей ...",
  },
  {
    link: "./image/news/04_09.pdf",
    image: "./image/news/myltumediina_platforma/1.jpg",
    img_descr: "UNITED 24 MEDIA",
    title: "Про мультимедійну платформу «UNITED 24 MEDIA»",
    content:
      "Міністерство освіти і науки України рекомендує керівникам закладів загальної середньої, професійної (професійно-технічної)освіти, фахової передвищої освіти й директорам ...",
  },
  {
    link: "./image/news/03_09.pdf",
    image: "./image/news/narada_kyratoriv_03_09/1.jpg",
    img_descr: "Нарада кураторів",
    title: "Нарада кураторів 03 вересня 2024 року",
    content:
      "3 вересня 2024 відбулась робоча нарада кураторів академічних груп під головуванням Валентини ШИНКАРЕНКО, голови Ради соціально-гуманітарної та виховної роботи за участю завідуючої...",
  },
  {
    link: "./image/news/02_09.pdf",
    image: "./image/news/01_veresnia/01_veresnia.jpg",
    img_descr: "1 вересня",
    title: "З новим 2024-2025 навчальним роком!  З Днем Знань!",
    content:
      "Працюємо  заради перемоги! З новим 2024-2025 навчальним роком!  З Днем Знань! Перемагає той, хто пам'ятає, - проголошувала студентсько-викладацька родина сьогодні, 2 вересня , в особливий для нас день. ",
  },
];

function displayNews() {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) {
    console.error("Елемент news-container не знайдено");
    return;
  }
  newsContainer.innerHTML = "";

  const start = (currentPage - 1) * newsPerPage;
  const end = start + newsPerPage;
  const pageNews = newsItems.slice(start, end);

  pageNews.forEach((news) => {
    const newsElement = document.createElement("div");
    newsElement.innerHTML = `
      <a class="group flex flex-col gap-[20px] w-full h-full" href="${news.link}">
        <div class="news-image-wrapper">
          <img class="news-image" src="${news.image}" alt="${news.img_descr}" />
        </div>
        <div class="flex flex-col gap-[8px]">
          <h3 class="text-xl font-normal text-grey-02 group-hover:text-main">
            ${news.title}
          </h3>
          <p class="text-s font-light text-grey-03 overflow-ellipsis line-clamp-2">
            ${news.content}
          </p>
        </div>
      </a>
    `;
    newsContainer.appendChild(newsElement);
  });

  updatePagination();
  scrollToNewsTop();
}

function updatePagination() {
  const currentPageElement = document.getElementById("current-page");
  const totalPagesElement = document.getElementById("total-pages");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  if (!currentPageElement || !totalPagesElement || !prevButton || !nextButton) {
    console.error("Не знайдено необхідні елементи пагінації");
    return;
  }

  const totalPages = Math.ceil(newsItems.length / newsPerPage);

  currentPageElement.textContent = currentPage;
  totalPagesElement.textContent = totalPages;

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function scrollToNewsTop() {
  const newsContainer = document.querySelector("#body");
  if (newsContainer) {
    newsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupPaginationListeners() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayNews();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentPage < Math.ceil(newsItems.length / newsPerPage)) {
        currentPage++;
        displayNews();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayNews();
  setupPaginationListeners();
});
