let images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
   images.item(i).addEventListener("mouseover", function(event) {
     images.style.color = "red";
     images.style.innentext = "hello"

     
   });
  
}





// let rectL = 200;
// let rectW = 100;

// let abstand = 0;

// let anfangsX = 0;
// let anfangsY = 0;

// let imgs = [];
// let imgs_13 = [];
// let imgs_14 = [];
// let imgs_15 = [];
// let imgs_16 = [];
// let imgs_17 = [];
// let imgs_18 = [];
// let imgs_19 = [];
// let imgs_20 = [];
// let imgs_21 = [];


// let imgBreite = 300;
// let imgHohe = 400;

// let fontRegular;

 
// raw_json_2012 = [
//   {
//     "BildName": "2012_A_01",
//     "FarbeCode": "#D6D7D4",
//     "Prozent_B": 0.9576
//   },
//   {
//     "BildName": "2012_A_01",
//     "FarbeCode": "#6A6A6A",
//     "Prozent_B": 0.0424
//   },
//   {
//     "BildName": "2012_A_02",
//     "FarbeCode": "#E5E6E3",
//     "Prozent_B": 0.88
//   },
//   {
//     "BildName": "2012_A_02",
//     "FarbeCode": "#322F2D",
//     "Prozent_B": 0.12
//   },
//   {
//     "BildName": "2012_A_03",
//     "FarbeCode": "#E4E5E1",
//     "Prozent_B": 0.8654
//   },
//   {
//     "BildName": "2012_A_03",
//     "FarbeCode": "#363636",
//     "Prozent_B": 0.1346
//   },
//   {
//     "BildName": "2012_A_04",
//     "FarbeCode": "#E7E7E4",
//     "Prozent_B": 0.4645
//   },
//   {
//     "BildName": "2012_A_04",
//     "FarbeCode": "#C9C9C5",
//     "Prozent_B": 0.2434
//   },
//   {
//     "BildName": "2012_A_04",
//     "FarbeCode": "#9C9B97",
//     "Prozent_B": 0.159
//   },
//   {
//     "BildName": "2012_A_04",
//     "FarbeCode": "#6B6964",
//     "Prozent_B": 0.1331
//   },
//   {
//     "BildName": "2012_A_05",
//     "FarbeCode": "#D7D6CC",
//     "Prozent_B": 0.7924
//   },
//   {
//     "BildName": "2012_A_05",
//     "FarbeCode": "#B8B0A2",
//     "Prozent_B": 0.1286
//   },
//   {
//     "BildName": "2012_A_05",
//     "FarbeCode": "#B38B70",
//     "Prozent_B": 0.0419
//   },
//   {
//     "BildName": "2012_A_05",
//     "FarbeCode": "#75736C",
//     "Prozent_B": 0.0371
//   },
//   {
//     "BildName": "2012_B_01",
//     "FarbeCode": "#CACAC8",
//     "Prozent_B": 0.3376
//   },
//   {
//     "BildName": "2012_B_01",
//     "FarbeCode": "#696A5E",
//     "Prozent_B": 0.2751
//   },
//   {
//     "BildName": "2012_B_01",
//     "FarbeCode": "#999B95",
//     "Prozent_B": 0.2435
//   },
//   {
//     "BildName": "2012_B_01",
//     "FarbeCode": "#2F2E2C",
//     "Prozent_B": 0.1046
//   },
//   {
//     "BildName": "2012_B_01",
//     "FarbeCode": "#803E3A",
//     "Prozent_B": 0.0392
//   },
//   {
//     "BildName": "2012_B_02",
//     "FarbeCode": "#E8E9E5",
//     "Prozent_B": 0.3868
//   },
//   {
//     "BildName": "2012_B_02",
//     "FarbeCode": "#9FA370",
//     "Prozent_B": 0.225
//   },
//   {
//     "BildName": "2012_B_02",
//     "FarbeCode": "#B8C9C3",
//     "Prozent_B": 0.1836
//   },
//   {
//     "BildName": "2012_B_02",
//     "FarbeCode": "#938C82",
//     "Prozent_B": 0.1177
//   },
//   {
//     "BildName": "2012_B_02",
//     "FarbeCode": "#494949",
//     "Prozent_B": 0.0868
//   },
//   {
//     "BildName": "2012_B_03",
//     "FarbeCode": "#DCD5CE",
//     "Prozent_B": 0.399
//   },
//   {
//     "BildName": "2012_B_03",
//     "FarbeCode": "#B83033",
//     "Prozent_B": 0.2717
//   },
//   {
//     "BildName": "2012_B_03",
//     "FarbeCode": "#C67773",
//     "Prozent_B": 0.161
//   },
//   {
//     "BildName": "2012_B_03",
//     "FarbeCode": "#7F8479",
//     "Prozent_B": 0.1483
//   },
//   {
//     "BildName": "2012_B_03",
//     "FarbeCode": "#A9A529",
//     "Prozent_B": 0.02
//   },
//   {
//     "BildName": "2012_B_04",
//     "FarbeCode": "#C9CFD2",
//     "Prozent_B": 0.5458
//   },
//   {
//     "BildName": "2012_B_04",
//     "FarbeCode": "#A4342E",
//     "Prozent_B": 0.1216
//   },
//   {
//     "BildName": "2012_B_04",
//     "FarbeCode": "#4F2221",
//     "Prozent_B": 0.1195
//   },
//   {
//     "BildName": "2012_B_04",
//     "FarbeCode": "#BB908E",
//     "Prozent_B": 0.1137
//   },
//   {
//     "BildName": "2012_B_04",
//     "FarbeCode": "#6C9ABF",
//     "Prozent_B": 0.0995
//   },
//   {
//     "BildName": "2012_B_05",
//     "FarbeCode": "#BEB9AD",
//     "Prozent_B": 0.76
//   },
//   {
//     "BildName": "2012_B_05",
//     "FarbeCode": "#2A2928",
//     "Prozent_B": 0.24
//   },
//   {
//     "BildName": "2012_C_01",
//     "FarbeCode": "#BEB9A6",
//     "Prozent_B": 0.7197
//   },
//   {
//     "BildName": "2012_C_01",
//     "FarbeCode": "#D7D7CF",
//     "Prozent_B": 0.1814
//   },
//   {
//     "BildName": "2012_C_01",
//     "FarbeCode": "#B66B4C",
//     "Prozent_B": 0.0578
//   },
//   {
//     "BildName": "2012_C_01",
//     "FarbeCode": "#9BBEC4",
//     "Prozent_B": 0.0411
//   },
//   {
//     "BildName": "2012_C_02",
//     "FarbeCode": "#B8B8AE",
//     "Prozent_B": 0.2979
//   },
//   {
//     "BildName": "2012_C_02",
//     "FarbeCode": "#8B8472",
//     "Prozent_B": 0.2261
//   },
//   {
//     "BildName": "2012_C_02",
//     "FarbeCode": "#9A945F",
//     "Prozent_B": 0.1932
//   },
//   {
//     "BildName": "2012_C_02",
//     "FarbeCode": "#61574C",
//     "Prozent_B": 0.1766
//   },
//   {
//     "BildName": "2012_C_02",
//     "FarbeCode": "#7C8797",
//     "Prozent_B": 0.1063
//   },
//   {
//     "BildName": "2012_C_03",
//     "FarbeCode": "#D7D1A3",
//     "Prozent_B": 0.4706
//   },
//   {
//     "BildName": "2012_C_03",
//     "FarbeCode": "#AFB996",
//     "Prozent_B": 0.2619
//   },
//   {
//     "BildName": "2012_C_03",
//     "FarbeCode": "#B34C59",
//     "Prozent_B": 0.1451
//   },
//   {
//     "BildName": "2012_C_03",
//     "FarbeCode": "#707361",
//     "Prozent_B": 0.0817
//   },
//   {
//     "BildName": "2012_C_03",
//     "FarbeCode": "#532429",
//     "Prozent_B": 0.0407
//   },
//   {
//     "BildName": "2012_C_04",
//     "FarbeCode": "#C2C7C9",
//     "Prozent_B": 0.6311
//   },
//   {
//     "BildName": "2012_C_04",
//     "FarbeCode": "#C7B842",
//     "Prozent_B": 0.2611
//   },
//   {
//     "BildName": "2012_C_04",
//     "FarbeCode": "#413D22",
//     "Prozent_B": 0.1078
//   },
//   {
//     "BildName": "2012_C_05",
//     "FarbeCode": "#BE5C30",
//     "Prozent_B": 0.4833
//   },
//   {
//     "BildName": "2012_C_05",
//     "FarbeCode": "#614836",
//     "Prozent_B": 0.227
//   },
//   {
//     "BildName": "2012_C_05",
//     "FarbeCode": "#6E7A94",
//     "Prozent_B": 0.1291
//   },
//   {
//     "BildName": "2012_C_05",
//     "FarbeCode": "#C4BCB9",
//     "Prozent_B": 0.12
//   },
//   {
//     "BildName": "2012_C_05",
//     "FarbeCode": "#CBB23C",
//     "Prozent_B": 0.0406
//   },
//   {
//     "BildName": "2012_D_01",
//     "FarbeCode": "#CFB13B",
//     "Prozent_B": 0.5223
//   },
//   {
//     "BildName": "2012_D_01",
//     "FarbeCode": "#D1D2D4",
//     "Prozent_B": 0.4063
//   },
//   {
//     "BildName": "2012_D_01",
//     "FarbeCode": "#2E2D2B",
//     "Prozent_B": 0.0714
//   },
//   {
//     "BildName": "2012_D_02",
//     "FarbeCode": "#B09B45",
//     "Prozent_B": 0.9612
//   },
//   {
//     "BildName": "2012_D_02",
//     "FarbeCode": "#CAC4B1",
//     "Prozent_B": 0.0388
//   },
//   {
//     "BildName": "2012_D_03",
//     "FarbeCode": "#9B9DA6",
//     "Prozent_B": 0.339
//   },
//   {
//     "BildName": "2012_D_03",
//     "FarbeCode": "#46403F",
//     "Prozent_B": 0.2241
//   },
//   {
//     "BildName": "2012_D_03",
//     "FarbeCode": "#834F52",
//     "Prozent_B": 0.1841
//   },
//   {
//     "BildName": "2012_D_03",
//     "FarbeCode": "#586A8D",
//     "Prozent_B": 0.1638
//   },
//   {
//     "BildName": "2012_D_03",
//     "FarbeCode": "#B4996C",
//     "Prozent_B": 0.089
//   },
//   {
//     "BildName": "2012_D_04",
//     "FarbeCode": "#9A9687",
//     "Prozent_B": 0.702
//   },
//   {
//     "BildName": "2012_D_04",
//     "FarbeCode": "#666660",
//     "Prozent_B": 0.157
//   },
//   {
//     "BildName": "2012_D_04",
//     "FarbeCode": "#2D2C2A",
//     "Prozent_B": 0.0938
//   },
//   {
//     "BildName": "2012_D_04",
//     "FarbeCode": "#DADBD9",
//     "Prozent_B": 0.0472
//   },
//   {
//     "BildName": "2012_D_05",
//     "FarbeCode": "#432D1E",
//     "Prozent_B": 0.2877
//   },
//   {
//     "BildName": "2012_D_05",
//     "FarbeCode": "#201915",
//     "Prozent_B": 0.2234
//   },
//   {
//     "BildName": "2012_D_05",
//     "FarbeCode": "#674F35",
//     "Prozent_B": 0.2211
//   },
//   {
//     "BildName": "2012_D_05",
//     "FarbeCode": "#D1D1CC",
//     "Prozent_B": 0.1992
//   },
//   {
//     "BildName": "2012_D_05",
//     "FarbeCode": "#978359",
//     "Prozent_B": 0.0686
//   },
//   {
//     "BildName": "2012_E_01",
//     "FarbeCode": "#756249",
//     "Prozent_B": 0.3288
//   },
//   {
//     "BildName": "2012_E_01",
//     "FarbeCode": "#292526",
//     "Prozent_B": 0.2804
//   },
//   {
//     "BildName": "2012_E_01",
//     "FarbeCode": "#4F4542",
//     "Prozent_B": 0.2428
//   },
//   {
//     "BildName": "2012_E_01",
//     "FarbeCode": "#9C9895",
//     "Prozent_B": 0.0884
//   },
//   {
//     "BildName": "2012_E_01",
//     "FarbeCode": "#BAA987",
//     "Prozent_B": 0.0596
//   },
//   {
//     "BildName": "2012_E_02",
//     "FarbeCode": "#707173",
//     "Prozent_B": 0.5762
//   },
//   {
//     "BildName": "2012_E_02",
//     "FarbeCode": "#56575B",
//     "Prozent_B": 0.2508
//   },
//   {
//     "BildName": "2012_E_02",
//     "FarbeCode": "#BDBEBE",
//     "Prozent_B": 0.173
//   },
//   {
//     "BildName": "2012_E_03",
//     "FarbeCode": "#58534D",
//     "Prozent_B": 0.362
//   },
//   {
//     "BildName": "2012_E_03",
//     "FarbeCode": "#393635",
//     "Prozent_B": 0.33
//   },
//   {
//     "BildName": "2012_E_03",
//     "FarbeCode": "#756F65",
//     "Prozent_B": 0.1641
//   },
//   {
//     "BildName": "2012_E_03",
//     "FarbeCode": "#9D988F",
//     "Prozent_B": 0.1439
//   },
//   {
//     "BildName": "2012_E_04",
//     "FarbeCode": "#6C6C66",
//     "Prozent_B": 0.568
//   },
//   {
//     "BildName": "2012_E_04",
//     "FarbeCode": "#42403C",
//     "Prozent_B": 0.3205
//   },
//   {
//     "BildName": "2012_E_04",
//     "FarbeCode": "#C2C2BC",
//     "Prozent_B": 0.1115
//   },
//   {
//     "BildName": "2012_E_05",
//     "FarbeCode": "#6D6A62",
//     "Prozent_B": 0.9137
//   },
//   {
//     "BildName": "2012_E_05",
//     "FarbeCode": "#E0E0E0",
//     "Prozent_B": 0.0863
//   },
//   {
//     "BildName": "2012_F_01",
//     "FarbeCode": "#252525",
//     "Prozent_B": 0.6071
//   },
//   {
//     "BildName": "2012_F_01",
//     "FarbeCode": "#5C605F",
//     "Prozent_B": 0.3624
//   },
//   {
//     "BildName": "2012_F_01",
//     "FarbeCode": "#83384D",
//     "Prozent_B": 0.0306
//   },
//   {
//     "BildName": "2012_F_02",
//     "FarbeCode": "#312A38",
//     "Prozent_B": 0.8551
//   },
//   {
//     "BildName": "2012_F_02",
//     "FarbeCode": "#26222B",
//     "Prozent_B": 0.1449
//   },
//   {
//     "BildName": "2012_F_03",
//     "FarbeCode": "#222121",
//     "Prozent_B": 0.8516
//   },
//   {
//     "BildName": "2012_F_03",
//     "FarbeCode": "#504F49",
//     "Prozent_B": 0.115
//   },
//   {
//     "BildName": "2012_F_03",
//     "FarbeCode": "#F3F3B9",
//     "Prozent_B": 0.0334
//   }
// ]
// raw_json_2013 = [
//   {
//     "BildName": "2013_A_01",
//     "Prozent_O": 0.5128,
//     "FarbeCode": "#DCDCE9"
//   },
//   {
//     "BildName": "2013_A_01",
//     "Prozent_O": 0.4872,
//     "FarbeCode": "#CCCEDA"
//   },
//   {
//     "BildName": "2013_A_02",
//     "Prozent_O": 0.9893,
//     "FarbeCode": "#CDD9DA"
//   },
//   {
//     "BildName": "2013_A_02",
//     "Prozent_O": 0.0107,
//     "FarbeCode": "#3A4747"
//   },
//   {
//     "BildName": "2013_A_03",
//     "Prozent_O": 0.9531,
//     "FarbeCode": "#E0DFDE"
//   },
//   {
//     "BildName": "2013_A_03",
//     "Prozent_O": 0.0469,
//     "FarbeCode": "#746A47"
//   },
//   {
//     "BildName": "2013_A_04",
//     "Prozent_O": 0.9341,
//     "FarbeCode": "#D8D6D7"
//   },
//   {
//     "BildName": "2013_A_04",
//     "Prozent_O": 0.0659,
//     "FarbeCode": "#626160"
//   },
//   {
//     "BildName": "2013_A_05",
//     "Prozent_O": 0.9038,
//     "FarbeCode": "#C5C2C6"
//   },
//   {
//     "BildName": "2013_A_05",
//     "Prozent_O": 0.0962,
//     "FarbeCode": "#6A6A6A"
//   },
//   {
//     "BildName": "2013_B_01",
//     "Prozent_O": 0.844,
//     "FarbeCode": "#C9C9D0"
//   },
//   {
//     "BildName": "2013_B_01",
//     "Prozent_O": 0.156,
//     "FarbeCode": "#1F1F1F"
//   },
//   {
//     "BildName": "2013_B_02",
//     "Prozent_O": 0.7662,
//     "FarbeCode": "#B9B9C1"
//   },
//   {
//     "BildName": "2013_B_02",
//     "Prozent_O": 0.1233,
//     "FarbeCode": "#83868C"
//   },
//   {
//     "BildName": "2013_B_02",
//     "Prozent_O": 0.1105,
//     "FarbeCode": "#1F313C"
//   },
//   {
//     "BildName": "2013_B_03",
//     "Prozent_O": 0.6617,
//     "FarbeCode": "#CCC8CD"
//   },
//   {
//     "BildName": "2013_B_03",
//     "Prozent_O": 0.1728,
//     "FarbeCode": "#372C28"
//   },
//   {
//     "BildName": "2013_B_03",
//     "Prozent_O": 0.1655,
//     "FarbeCode": "#EB2C1A"
//   },
//   {
//     "BildName": "2013_B_04",
//     "Prozent_O": 0.6963,
//     "FarbeCode": "#C4BEC3"
//   },
//   {
//     "BildName": "2013_B_04",
//     "Prozent_O": 0.1583,
//     "FarbeCode": "#63554F"
//   },
//   {
//     "BildName": "2013_B_04",
//     "Prozent_O": 0.1453,
//     "FarbeCode": "#C94A12"
//   },
//   {
//     "BildName": "2013_B_05",
//     "Prozent_O": 0.7348,
//     "FarbeCode": "#DEC9BF"
//   },
//   {
//     "BildName": "2013_B_05",
//     "Prozent_O": 0.1489,
//     "FarbeCode": "#9D8D84"
//   },
//   {
//     "BildName": "2013_B_05",
//     "Prozent_O": 0.1164,
//     "FarbeCode": "#554A43"
//   },
//   {
//     "BildName": "2013_C_01",
//     "Prozent_O": 0.2791,
//     "FarbeCode": "#C0BBC1"
//   },
//   {
//     "BildName": "2013_C_01",
//     "Prozent_O": 0.2397,
//     "FarbeCode": "#302D2B"
//   },
//   {
//     "BildName": "2013_C_01",
//     "Prozent_O": 0.1923,
//     "FarbeCode": "#C47B76"
//   },
//   {
//     "BildName": "2013_C_01",
//     "Prozent_O": 0.1514,
//     "FarbeCode": "#715F60"
//   },
//   {
//     "BildName": "2013_C_01",
//     "Prozent_O": 0.1374,
//     "FarbeCode": "#6A9CB5"
//   },
//   {
//     "BildName": "2013_C_02",
//     "Prozent_O": 0.404,
//     "FarbeCode": "#EBEAEE"
//   },
//   {
//     "BildName": "2013_C_02",
//     "Prozent_O": 0.3172,
//     "FarbeCode": "#A77C5B"
//   },
//   {
//     "BildName": "2013_C_02",
//     "Prozent_O": 0.1545,
//     "FarbeCode": "#5D5D5F"
//   },
//   {
//     "BildName": "2013_C_02",
//     "Prozent_O": 0.1243,
//     "FarbeCode": "#A5A2A3"
//   },
//   {
//     "BildName": "2013_C_03",
//     "Prozent_O": 0.516,
//     "FarbeCode": "#DEDFE5"
//   },
//   {
//     "BildName": "2013_C_03",
//     "Prozent_O": 0.484,
//     "FarbeCode": "#161519"
//   },
//   {
//     "BildName": "2013_C_04",
//     "Prozent_O": 0.546,
//     "FarbeCode": "#DBDBDE"
//   },
//   {
//     "BildName": "2013_C_04",
//     "Prozent_O": 0.1352,
//     "FarbeCode": "#0B74B1"
//   },
//   {
//     "BildName": "2013_C_04",
//     "Prozent_O": 0.1283,
//     "FarbeCode": "#8D7650"
//   },
//   {
//     "BildName": "2013_C_04",
//     "Prozent_O": 0.1222,
//     "FarbeCode": "#778E93"
//   },
//   {
//     "BildName": "2013_C_04",
//     "Prozent_O": 0.0683,
//     "FarbeCode": "#CC9B39"
//   },
//   {
//     "BildName": "2013_C_05",
//     "Prozent_O": 0.513,
//     "FarbeCode": "#CBC9C2"
//   },
//   {
//     "BildName": "2013_C_05",
//     "Prozent_O": 0.3134,
//     "FarbeCode": "#715E4E"
//   },
//   {
//     "BildName": "2013_C_05",
//     "Prozent_O": 0.0948,
//     "FarbeCode": "#D6BE40"
//   },
//   {
//     "BildName": "2013_C_05",
//     "Prozent_O": 0.0464,
//     "FarbeCode": "#5BB458"
//   },
//   {
//     "BildName": "2013_C_05",
//     "Prozent_O": 0.0324,
//     "FarbeCode": "#E967B2"
//   },
//   {
//     "BildName": "2013_D_01",
//     "Prozent_O": 0.5023,
//     "FarbeCode": "#EAAA02"
//   },
//   {
//     "BildName": "2013_D_01",
//     "Prozent_O": 0.2771,
//     "FarbeCode": "#CF4101"
//   },
//   {
//     "BildName": "2013_D_01",
//     "Prozent_O": 0.2206,
//     "FarbeCode": "#D07404"
//   },
//   {
//     "BildName": "2013_D_02",
//     "Prozent_O": 0.4954,
//     "FarbeCode": "#6B6A37"
//   },
//   {
//     "BildName": "2013_D_02",
//     "Prozent_O": 0.1852,
//     "FarbeCode": "#A1805A"
//   },
//   {
//     "BildName": "2013_D_02",
//     "Prozent_O": 0.1233,
//     "FarbeCode": "#6D6A61"
//   },
//   {
//     "BildName": "2013_D_02",
//     "Prozent_O": 0.1105,
//     "FarbeCode": "#D0B499"
//   },
//   {
//     "BildName": "2013_D_02",
//     "Prozent_O": 0.0856,
//     "FarbeCode": "#9C4433"
//   },
//   {
//     "BildName": "2013_D_03",
//     "Prozent_O": 0.4228,
//     "FarbeCode": "#85AEB0"
//   },
//   {
//     "BildName": "2013_D_03",
//     "Prozent_O": 0.2356,
//     "FarbeCode": "#BDC1C7"
//   },
//   {
//     "BildName": "2013_D_03",
//     "Prozent_O": 0.1353,
//     "FarbeCode": "#621511"
//   },
//   {
//     "BildName": "2013_D_03",
//     "Prozent_O": 0.1247,
//     "FarbeCode": "#6D6F6F"
//   },
//   {
//     "BildName": "2013_D_03",
//     "Prozent_O": 0.0816,
//     "FarbeCode": "#2D2422"
//   },
//   {
//     "BildName": "2013_D_04",
//     "Prozent_O": 0.4494,
//     "FarbeCode": "#8B898B"
//   },
//   {
//     "BildName": "2013_D_04",
//     "Prozent_O": 0.309,
//     "FarbeCode": "#C0C0C4"
//   },
//   {
//     "BildName": "2013_D_04",
//     "Prozent_O": 0.2416,
//     "FarbeCode": "#C0C0C4"
//   },
//   {
//     "BildName": "2013_D_05",
//     "Prozent_O": 0.6827,
//     "FarbeCode": "#AD9F92"
//   },
//   {
//     "BildName": "2013_D_05",
//     "Prozent_O": 0.1937,
//     "FarbeCode": "#E0E2E4"
//   },
//   {
//     "BildName": "2013_D_05",
//     "Prozent_O": 0.1236,
//     "FarbeCode": "#3876B2"
//   },
//   {
//     "BildName": "2013_E_01",
//     "Prozent_O": 0.6059,
//     "FarbeCode": "#A3A09C"
//   },
//   {
//     "BildName": "2013_E_01",
//     "Prozent_O": 0.2462,
//     "FarbeCode": "#1C1C19"
//   },
//   {
//     "BildName": "2013_E_01",
//     "Prozent_O": 0.1479,
//     "FarbeCode": "#BC2F2F"
//   },
//   {
//     "BildName": "2013_E_02",
//     "Prozent_O": 0.8589,
//     "FarbeCode": "#826F62"
//   },
//   {
//     "BildName": "2013_E_02",
//     "Prozent_O": 0.1411,
//     "FarbeCode": "#2E2925"
//   },
//   {
//     "BildName": "2013_E_03",
//     "Prozent_O": 0.2809,
//     "FarbeCode": "#3B3C3D"
//   },
//   {
//     "BildName": "2013_E_03",
//     "Prozent_O": 0.2765,
//     "FarbeCode": "#717174"
//   },
//   {
//     "BildName": "2013_E_03",
//     "Prozent_O": 0.2348,
//     "FarbeCode": "#A3A3A7"
//   },
//   {
//     "BildName": "2013_E_03",
//     "Prozent_O": 0.2078,
//     "FarbeCode": "#DEDEE2"
//   },
//   {
//     "BildName": "2013_E_04",
//     "Prozent_O": 0.2882,
//     "FarbeCode": "#5A5E65"
//   },
//   {
//     "BildName": "2013_E_04",
//     "Prozent_O": 0.2739,
//     "FarbeCode": "#34373C"
//   },
//   {
//     "BildName": "2013_E_04",
//     "Prozent_O": 0.2429,
//     "FarbeCode": "#7F868F"
//   },
//   {
//     "BildName": "2013_E_04",
//     "Prozent_O": 0.1376,
//     "FarbeCode": "#B5BBC3"
//   },
//   {
//     "BildName": "2013_E_04",
//     "Prozent_O": 0.0576,
//     "FarbeCode": "#652A27"
//   },
//   {
//     "BildName": "2013_E_05",
//     "Prozent_O": 0.3876,
//     "FarbeCode": "#2F3238"
//   },
//   {
//     "BildName": "2013_E_05",
//     "Prozent_O": 0.2438,
//     "FarbeCode": "#434B55"
//   },
//   {
//     "BildName": "2013_E_05",
//     "Prozent_O": 0.141,
//     "FarbeCode": "#98A1A8"
//   },
//   {
//     "BildName": "2013_E_05",
//     "Prozent_O": 0.1308,
//     "FarbeCode": "#6F7881"
//   },
//   {
//     "BildName": "2013_E_05",
//     "Prozent_O": 0.0968,
//     "FarbeCode": "#47647E"
//   },
//   {
//     "BildName": "2013_F_01",
//     "Prozent_O": 0.433,
//     "FarbeCode": "#2D2D2D"
//   },
//   {
//     "BildName": "2013_F_01",
//     "Prozent_O": 0.272,
//     "FarbeCode": "#51504F"
//   },
//   {
//     "BildName": "2013_F_01",
//     "Prozent_O": 0.1937,
//     "FarbeCode": "#8E8D8B"
//   },
//   {
//     "BildName": "2013_F_01",
//     "Prozent_O": 0.1013,
//     "FarbeCode": "#C5C3C1"
//   },
//   {
//     "BildName": "2013_F_02",
//     "Prozent_O": 0.4519,
//     "FarbeCode": "#252424"
//   },
//   {
//     "BildName": "2013_F_02",
//     "Prozent_O": 0.4379,
//     "FarbeCode": "#575554"
//   },
//   {
//     "BildName": "2013_F_02",
//     "Prozent_O": 0.1102,
//     "FarbeCode": "#C7C6C7"
//   },
//   {
//     "BildName": "2013_F_03",
//     "Prozent_O": 0.905,
//     "FarbeCode": "#5F5C56"
//   },
//   {
//     "BildName": "2013_F_03",
//     "Prozent_O": 0.095,
//     "FarbeCode": "#2C2C2C"
//   }
// ]
// raw_json_2014 = [
//   {
//     "BildName": "2014_A_01",
//     "Prozent_O": 0.9796,
//     "FarbeCode": "#EAE9E8"
//   },
//   {
//     "BildName": "2014_A_01",
//     "Prozent_O": 0.0204,
//     "FarbeCode": "#E76265"
//   },
//   {
//     "BildName": "2014_A_02",
//     "Prozent_O": 0.9706,
//     "FarbeCode": "#EAE9E9"
//   },
//   {
//     "BildName": "2014_A_02",
//     "Prozent_O": 0.0294,
//     "FarbeCode": "#645F5F"
//   },
//   {
//     "BildName": "2014_A_03",
//     "Prozent_O": 0.7521,
//     "FarbeCode": "#EEECE6"
//   },
//   {
//     "BildName": "2014_A_03",
//     "Prozent_O": 0.1781,
//     "FarbeCode": "#E1D9D1"
//   },
//   {
//     "BildName": "2014_A_03",
//     "Prozent_O": 0.0698,
//     "FarbeCode": "#E8C5B4"
//   },
//   {
//     "BildName": "2014_A_04",
//     "Prozent_O": 0.7148,
//     "FarbeCode": "#ECEDEE"
//   },
//   {
//     "BildName": "2014_A_04",
//     "Prozent_O": 0.1457,
//     "FarbeCode": "#A3D0E3"
//   },
//   {
//     "BildName": "2014_A_04",
//     "Prozent_O": 0.1396,
//     "FarbeCode": "#CFE5EE"
//   },
//   {
//     "BildName": "2014_A_05",
//     "Prozent_O": 0.3778,
//     "FarbeCode": "#EDEAE7"
//   },
//   {
//     "BildName": "2014_A_05",
//     "Prozent_O": 0.1902,
//     "FarbeCode": "#E3C7BE"
//   },
//   {
//     "BildName": "2014_A_05",
//     "Prozent_O": 0.1627,
//     "FarbeCode": "#E6E2BF"
//   },
//   {
//     "BildName": "2014_A_05",
//     "Prozent_O": 0.1489,
//     "FarbeCode": "#EDD8A4"
//   },
//   {
//     "BildName": "2014_A_05",
//     "Prozent_O": 0.1204,
//     "FarbeCode": "#CDE4D8"
//   },
//   {
//     "BildName": "2014_B_01",
//     "Prozent_O": 0.4548,
//     "FarbeCode": "#E3DCD3"
//   },
//   {
//     "BildName": "2014_B_01",
//     "Prozent_O": 0.2186,
//     "FarbeCode": "#C0B3A8"
//   },
//   {
//     "BildName": "2014_B_01",
//     "Prozent_O": 0.1323,
//     "FarbeCode": "#86857C"
//   },
//   {
//     "BildName": "2014_B_01",
//     "Prozent_O": 0.1099,
//     "FarbeCode": "#53544E"
//   },
//   {
//     "BildName": "2014_B_01",
//     "Prozent_O": 0.0844,
//     "FarbeCode": "#C4716E"
//   },
//   {
//     "BildName": "2014_B_02",
//     "Prozent_O": 0.5439,
//     "FarbeCode": "#EEEDE9"
//   },
//   {
//     "BildName": "2014_B_02",
//     "Prozent_O": 0.3265,
//     "FarbeCode": "#CC9132"
//   },
//   {
//     "BildName": "2014_B_02",
//     "Prozent_O": 0.1296,
//     "FarbeCode": "#636262"
//   },
//   {
//     "BildName": "2014_B_03",
//     "Prozent_O": 0.4981,
//     "FarbeCode": "#DEDEE3"
//   },
//   {
//     "BildName": "2014_B_03",
//     "Prozent_O": 0.239,
//     "FarbeCode": "#ACABB0"
//   },
//   {
//     "BildName": "2014_B_03",
//     "Prozent_O": 0.1365,
//     "FarbeCode": "#302E2F"
//   },
//   {
//     "BildName": "2014_B_03",
//     "Prozent_O": 0.1263,
//     "FarbeCode": "#7E7C81"
//   },
//   {
//     "BildName": "2014_B_04",
//     "Prozent_O": 0.5491,
//     "FarbeCode": "#DFD1CD"
//   },
//   {
//     "BildName": "2014_B_04",
//     "Prozent_O": 0.3147,
//     "FarbeCode": "#EFE4EA"
//   },
//   {
//     "BildName": "2014_B_04",
//     "Prozent_O": 0.0912,
//     "FarbeCode": "#9A875C"
//   },
//   {
//     "BildName": "2014_B_04",
//     "Prozent_O": 0.0449,
//     "FarbeCode": "#665B4F"
//   },
//   {
//     "BildName": "2014_B_05",
//     "Prozent_O": 0.6943,
//     "FarbeCode": "#EFE9E4"
//   },
//   {
//     "BildName": "2014_B_05",
//     "Prozent_O": 0.2247,
//     "FarbeCode": "#DFC4B9"
//   },
//   {
//     "BildName": "2014_B_05",
//     "Prozent_O": 0.081,
//     "FarbeCode": "#F7918C"
//   },
//   {
//     "BildName": "2014_C_01",
//     "Prozent_O": 0.8684,
//     "FarbeCode": "#CFAE99"
//   },
//   {
//     "BildName": "2014_C_01",
//     "Prozent_O": 0.1316,
//     "FarbeCode": "#C26944"
//   },
//   {
//     "BildName": "2014_C_02",
//     "Prozent_O": 0.5129,
//     "FarbeCode": "#BCB6B6"
//   },
//   {
//     "BildName": "2014_C_02",
//     "Prozent_O": 0.3338,
//     "FarbeCode": "#4E4B4D"
//   },
//   {
//     "BildName": "2014_C_02",
//     "Prozent_O": 0.1532,
//     "FarbeCode": "#EB4444"
//   },
//   {
//     "BildName": "2014_C_03",
//     "Prozent_O": 0.6993,
//     "FarbeCode": "#BFBBB2"
//   },
//   {
//     "BildName": "2014_C_03",
//     "Prozent_O": 0.1544,
//     "FarbeCode": "#42423F"
//   },
//   {
//     "BildName": "2014_C_03",
//     "Prozent_O": 0.1462,
//     "FarbeCode": "#7A786C"
//   },
//   {
//     "BildName": "2014_C_04",
//     "Prozent_O": 0.326,
//     "FarbeCode": "#DFD24B"
//   },
//   {
//     "BildName": "2014_C_04",
//     "Prozent_O": 0.214,
//     "FarbeCode": "#58B5B9"
//   },
//   {
//     "BildName": "2014_C_04",
//     "Prozent_O": 0.1687,
//     "FarbeCode": "#827AAA"
//   },
//   {
//     "BildName": "2014_C_04",
//     "Prozent_O": 0.166,
//     "FarbeCode": "#E5E5E3"
//   },
//   {
//     "BildName": "2014_C_04",
//     "Prozent_O": 0.1253,
//     "FarbeCode": "#CC5852"
//   },
//   {
//     "BildName": "2014_C_05",
//     "Prozent_O": 0.0767,
//     "FarbeCode": "#929463"
//   },
//   {
//     "BildName": "2014_C_05",
//     "Prozent_O": 0.029,
//     "FarbeCode": "#6F8AA9"
//   },
//   {
//     "BildName": "2014_C_05",
//     "Prozent_O": 0.4033,
//     "FarbeCode": "#BEB96F"
//   },
//   {
//     "BildName": "2014_C_05",
//     "Prozent_O": 0.3924,
//     "FarbeCode": "#CCB6A1"
//   },
//   {
//     "BildName": "2014_C_05",
//     "Prozent_O": 0.0986,
//     "FarbeCode": "#6E6156"
//   },
//   {
//     "BildName": "2014_D_01",
//     "Prozent_O": 0.7839,
//     "FarbeCode": "#FCD15C"
//   },
//   {
//     "BildName": "2014_D_01",
//     "Prozent_O": 0.12,
//     "FarbeCode": "#AFAEAD"
//   },
//   {
//     "BildName": "2014_D_01",
//     "Prozent_O": 0.0961,
//     "FarbeCode": "#D6BE85"
//   },
//   {
//     "BildName": "2014_D_02",
//     "Prozent_O": 0.4397,
//     "FarbeCode": "#5A6E55"
//   },
//   {
//     "BildName": "2014_D_02",
//     "Prozent_O": 0.3756,
//     "FarbeCode": "#6B8164"
//   },
//   {
//     "BildName": "2014_D_02",
//     "Prozent_O": 0.1167,
//     "FarbeCode": "#ABB5AE"
//   },
//   {
//     "BildName": "2014_D_02",
//     "Prozent_O": 0.0351,
//     "FarbeCode": "#9A6B5B"
//   },
//   {
//     "BildName": "2014_D_02",
//     "Prozent_O": 0.0329,
//     "FarbeCode": "#99A25F"
//   },
//   {
//     "BildName": "2014_D_03",
//     "Prozent_O": 0.3381,
//     "FarbeCode": "#6A7D56"
//   },
//   {
//     "BildName": "2014_D_03",
//     "Prozent_O": 0.2481,
//     "FarbeCode": "#8F9A79"
//   },
//   {
//     "BildName": "2014_D_03",
//     "Prozent_O": 0.2319,
//     "FarbeCode": "#B3B8A2"
//   },
//   {
//     "BildName": "2014_D_03",
//     "Prozent_O": 0.1819,
//     "FarbeCode": "#DDE0D6"
//   },
//   {
//     "BildName": "2014_D_04",
//     "Prozent_O": 0.9002,
//     "FarbeCode": "#ADCBE1"
//   },
//   {
//     "BildName": "2014_D_04",
//     "Prozent_O": 0.0695,
//     "FarbeCode": "#D5DAE7"
//   },
//   {
//     "BildName": "2014_D_04",
//     "Prozent_O": 0.0303,
//     "FarbeCode": "#494949"
//   },
//   {
//     "BildName": "2014_D_05",
//     "Prozent_O": 0.0606,
//     "FarbeCode": "#58627C"
//   },
//   {
//     "BildName": "2014_D_05",
//     "Prozent_O": 0.0262,
//     "FarbeCode": "#BFC4C9"
//   },
//   {
//     "BildName": "2014_D_05",
//     "Prozent_O": 0.9132,
//     "FarbeCode": "#8BA0B6"
//   },
//   {
//     "BildName": "2014_E_01",
//     "Prozent_O": 0.5644,
//     "FarbeCode": "#484D5D"
//   },
//   {
//     "BildName": "2014_E_01",
//     "Prozent_O": 0.3451,
//     "FarbeCode": "#D3724E"
//   },
//   {
//     "BildName": "2014_E_01",
//     "Prozent_O": 0.0905,
//     "FarbeCode": "#A9A3A9"
//   },
//   {
//     "BildName": "2014_E_02",
//     "Prozent_O": 0.6592,
//     "FarbeCode": "#515250"
//   },
//   {
//     "BildName": "2014_E_02",
//     "Prozent_O": 0.1957,
//     "FarbeCode": "#ED7E44"
//   },
//   {
//     "BildName": "2014_E_02",
//     "Prozent_O": 0.1451,
//     "FarbeCode": "#C1937D"
//   },
//   {
//     "BildName": "2014_E_03",
//     "Prozent_O": 0.8511,
//     "FarbeCode": "#506460"
//   },
//   {
//     "BildName": "2014_E_03",
//     "Prozent_O": 0.1063,
//     "FarbeCode": "#3F4855"
//   },
//   {
//     "BildName": "2014_E_03",
//     "Prozent_O": 0.0425,
//     "FarbeCode": "#CFD4D1"
//   },
//   {
//     "BildName": "2014_E_04",
//     "Prozent_O": 0.3344,
//     "FarbeCode": "#343030"
//   },
//   {
//     "BildName": "2014_E_04",
//     "Prozent_O": 0.1901,
//     "FarbeCode": "#4C4848"
//   },
//   {
//     "BildName": "2014_E_04",
//     "Prozent_O": 0.1733,
//     "FarbeCode": "#B7B6B5"
//   },
//   {
//     "BildName": "2014_E_04",
//     "Prozent_O": 0.152,
//     "FarbeCode": "#6F6C6C"
//   },
//   {
//     "BildName": "2014_E_04",
//     "Prozent_O": 0.1501,
//     "FarbeCode": "#959493"
//   },
//   {
//     "BildName": "2014_E_05",
//     "Prozent_O": 0.459,
//     "FarbeCode": "#3C2D2D"
//   },
//   {
//     "BildName": "2014_E_05",
//     "Prozent_O": 0.1861,
//     "FarbeCode": "#564443"
//   },
//   {
//     "BildName": "2014_E_05",
//     "Prozent_O": 0.1526,
//     "FarbeCode": "#836C65"
//   },
//   {
//     "BildName": "2014_E_05",
//     "Prozent_O": 0.1223,
//     "FarbeCode": "#BB9279"
//   },
//   {
//     "BildName": "2014_E_05",
//     "Prozent_O": 0.08,
//     "FarbeCode": "#C3B1AC"
//   },
//   {
//     "BildName": "2014_F_01",
//     "Prozent_O": 0.2509,
//     "FarbeCode": "#DBDCDE"
//   },
//   {
//     "BildName": "2014_F_01",
//     "Prozent_O": 0.1227,
//     "FarbeCode": "#747174"
//   },
//   {
//     "BildName": "2014_F_01",
//     "Prozent_O": 0.6264,
//     "FarbeCode": "#373435"
//   },
//   {
//     "BildName": "2014_F_02",
//     "Prozent_O": 0.4993,
//     "FarbeCode": "#2B2C2C"
//   },
//   {
//     "BildName": "2014_F_02",
//     "Prozent_O": 0.2607,
//     "FarbeCode": "#656663"
//   },
//   {
//     "BildName": "2014_F_02",
//     "Prozent_O": 0.24,
//     "FarbeCode": "#B6B5B2"
//   },
//   {
//     "BildName": "2014_F_03",
//     "Prozent_O": 0.799,
//     "FarbeCode": "#2E2D2E"
//   },
//   {
//     "BildName": "2014_F_03",
//     "Prozent_O": 0.1164,
//     "FarbeCode": "#CEC7B4"
//   },
//   {
//     "BildName": "2014_F_03",
//     "Prozent_O": 0.0846,
//     "FarbeCode": "#CEC7B4"
//   }
// ]
// raw_json_2015 = [
//   {
//     "BildName": "2015_A_01",
//     "Prozent_O": 0.6353,
//     "FarbeCode": "#DEDDDE"
//   },
//   {
//     "BildName": "2015_A_01",
//     "Prozent_O": 0.3647,
//     "FarbeCode": "#CCCCCE"
//   },
//   {
//     "BildName": "2015_A_02",
//     "Prozent_O": 0.9107,
//     "FarbeCode": "#D1CFD0"
//   },
//   {
//     "BildName": "2015_A_02",
//     "Prozent_O": 0.0525,
//     "FarbeCode": "#A2AFBE"
//   },
//   {
//     "BildName": "2015_A_02",
//     "Prozent_O": 0.0236,
//     "FarbeCode": "#E3B8C7"
//   },
//   {
//     "BildName": "2015_A_02",
//     "Prozent_O": 0.0131,
//     "FarbeCode": "#5AA98D"
//   },
//   {
//     "BildName": "2015_A_03",
//     "Prozent_O": 0.8725,
//     "FarbeCode": "#CFCECE"
//   },
//   {
//     "BildName": "2015_A_03",
//     "Prozent_O": 0.0712,
//     "FarbeCode": "#74706C"
//   },
//   {
//     "BildName": "2015_A_03",
//     "Prozent_O": 0.0562,
//     "FarbeCode": "#B6B2AF"
//   },
//   {
//     "BildName": "2015_A_04",
//     "Prozent_O": 0.66,
//     "FarbeCode": "#CDCBCC"
//   },
//   {
//     "BildName": "2015_A_04",
//     "Prozent_O": 0.1633,
//     "FarbeCode": "#ADA8A5"
//   },
//   {
//     "BildName": "2015_A_04",
//     "Prozent_O": 0.0764,
//     "FarbeCode": "#82886F"
//   },
//   {
//     "BildName": "2015_A_04",
//     "Prozent_O": 0.0597,
//     "FarbeCode": "#696060"
//   },
//   {
//     "BildName": "2015_A_04",
//     "Prozent_O": 0.0406,
//     "FarbeCode": "#C0C494"
//   },
//   {
//     "BildName": "2015_A_05",
//     "Prozent_O": 0.5323,
//     "FarbeCode": "#D5D1D2"
//   },
//   {
//     "BildName": "2015_A_05",
//     "Prozent_O": 0.2248,
//     "FarbeCode": "#CFAFAD"
//   },
//   {
//     "BildName": "2015_A_05",
//     "Prozent_O": 0.1429,
//     "FarbeCode": "#CF887E"
//   },
//   {
//     "BildName": "2015_A_05",
//     "Prozent_O": 0.0611,
//     "FarbeCode": "#D33F24"
//   },
//   {
//     "BildName": "2015_A_05",
//     "Prozent_O": 0.0389,
//     "FarbeCode": "#8AB2C5"
//   },
//   {
//     "BildName": "2015_B_01",
//     "Prozent_O": 0.6027,
//     "FarbeCode": "#BFC9BB"
//   },
//   {
//     "BildName": "2015_B_01",
//     "Prozent_O": 0.3047,
//     "FarbeCode": "#D7D6D4"
//   },
//   {
//     "BildName": "2015_B_01",
//     "Prozent_O": 0.054,
//     "FarbeCode": "#849998"
//   },
//   {
//     "BildName": "2015_B_01",
//     "Prozent_O": 0.027,
//     "FarbeCode": "#CEB756"
//   },
//   {
//     "BildName": "2015_B_01",
//     "Prozent_O": 0.0117,
//     "FarbeCode": "#C2A195"
//   },
//   {
//     "BildName": "2015_B_02",
//     "Prozent_O": 0.7957,
//     "FarbeCode": "#ADB9B6"
//   },
//   {
//     "BildName": "2015_B_02",
//     "Prozent_O": 0.0884,
//     "FarbeCode": "#969382"
//   },
//   {
//     "BildName": "2015_B_02",
//     "Prozent_O": 0.0565,
//     "FarbeCode": "#60655A"
//   },
//   {
//     "BildName": "2015_B_02",
//     "Prozent_O": 0.038,
//     "FarbeCode": "#433529"
//   },
//   {
//     "BildName": "2015_B_02",
//     "Prozent_O": 0.0214,
//     "FarbeCode": "#885831"
//   },
//   {
//     "BildName": "2015_B_03",
//     "Prozent_O": 0.4264,
//     "FarbeCode": "#D2A29A"
//   },
//   {
//     "BildName": "2015_B_03",
//     "Prozent_O": 0.2725,
//     "FarbeCode": "#B7B5B1"
//   },
//   {
//     "BildName": "2015_B_03",
//     "Prozent_O": 0.1546,
//     "FarbeCode": "#7E796C"
//   },
//   {
//     "BildName": "2015_B_03",
//     "Prozent_O": 0.1056,
//     "FarbeCode": "#3E373E"
//   },
//   {
//     "BildName": "2015_B_03",
//     "Prozent_O": 0.0409,
//     "FarbeCode": "#D35645"
//   },
//   {
//     "BildName": "2015_B_04",
//     "Prozent_O": 0.5915,
//     "FarbeCode": "#B76D78"
//   },
//   {
//     "BildName": "2015_B_04",
//     "Prozent_O": 0.1832,
//     "FarbeCode": "#89545C"
//   },
//   {
//     "BildName": "2015_B_04",
//     "Prozent_O": 0.1432,
//     "FarbeCode": "#3C2F32"
//   },
//   {
//     "BildName": "2015_B_04",
//     "Prozent_O": 0.0822,
//     "FarbeCode": "#C1A1A3"
//   },
//   {
//     "BildName": "2015_B_05",
//     "Prozent_O": 0.6337,
//     "FarbeCode": "#A51305"
//   },
//   {
//     "BildName": "2015_B_05",
//     "Prozent_O": 0.1329,
//     "FarbeCode": "#836A44"
//   },
//   {
//     "BildName": "2015_B_05",
//     "Prozent_O": 0.0957,
//     "FarbeCode": "#534933"
//   },
//   {
//     "BildName": "2015_B_05",
//     "Prozent_O": 0.0946,
//     "FarbeCode": "#BA985B"
//   },
//   {
//     "BildName": "2015_B_05",
//     "Prozent_O": 0.0431,
//     "FarbeCode": "#BE8525"
//   },
//   {
//     "BildName": "2015_C_01",
//     "Prozent_O": 0.8299,
//     "FarbeCode": "#9F2B05"
//   },
//   {
//     "BildName": "2015_C_01",
//     "Prozent_O": 0.1701,
//     "FarbeCode": "#BE9D86"
//   },
//   {
//     "BildName": "2015_C_02",
//     "Prozent_O": 0.3132,
//     "FarbeCode": "#8D3B20"
//   },
//   {
//     "BildName": "2015_C_02",
//     "Prozent_O": 0.2353,
//     "FarbeCode": "#B9862E"
//   },
//   {
//     "BildName": "2015_C_02",
//     "Prozent_O": 0.1842,
//     "FarbeCode": "#212428"
//   },
//   {
//     "BildName": "2015_C_02",
//     "Prozent_O": 0.1503,
//     "FarbeCode": "#B4A6A3"
//   },
//   {
//     "BildName": "2015_C_02",
//     "Prozent_O": 0.1171,
//     "FarbeCode": "#BC430F"
//   },
//   {
//     "BildName": "2015_C_03",
//     "Prozent_O": 0.6673,
//     "FarbeCode": "#A68F7A"
//   },
//   {
//     "BildName": "2015_C_03",
//     "Prozent_O": 0.3073,
//     "FarbeCode": "#CFCED1"
//   },
//   {
//     "BildName": "2015_C_03",
//     "Prozent_O": 0.0254,
//     "FarbeCode": "#1E1B17"
//   },
//   {
//     "BildName": "2015_C_04",
//     "Prozent_O": 0.659,
//     "FarbeCode": "#6B5335"
//   },
//   {
//     "BildName": "2015_C_04",
//     "Prozent_O": 0.2354,
//     "FarbeCode": "#443624"
//   },
//   {
//     "BildName": "2015_C_04",
//     "Prozent_O": 0.1056,
//     "FarbeCode": "#938D85"
//   },
//   {
//     "BildName": "2015_C_05",
//     "Prozent_O": 0.5986,
//     "FarbeCode": "#9F6412"
//   },
//   {
//     "BildName": "2015_C_05",
//     "Prozent_O": 0.4014,
//     "FarbeCode": "#4D391D"
//   },
//   {
//     "BildName": "2015_D_01",
//     "Prozent_O": 0.3362,
//     "FarbeCode": "#6D8277"
//   },
//   {
//     "BildName": "2015_D_01",
//     "Prozent_O": 0.2041,
//     "FarbeCode": "#C35F18"
//   },
//   {
//     "BildName": "2015_D_01",
//     "Prozent_O": 0.1669,
//     "FarbeCode": "#41342A"
//   },
//   {
//     "BildName": "2015_D_01",
//     "Prozent_O": 0.1579,
//     "FarbeCode": "#B8AFA3"
//   },
//   {
//     "BildName": "2015_D_01",
//     "Prozent_O": 0.1348,
//     "FarbeCode": "#88522A"
//   },
//   {
//     "BildName": "2015_D_02",
//     "Prozent_O": 0.8,
//     "FarbeCode": "#A4A09C"
//   },
//   {
//     "BildName": "2015_D_02",
//     "Prozent_O": 0.1421,
//     "FarbeCode": "#272725"
//   },
//   {
//     "BildName": "2015_D_02",
//     "Prozent_O": 0.0579,
//     "FarbeCode": "#B55236"
//   },
//   {
//     "BildName": "2015_D_03",
//     "Prozent_O": 0.51,
//     "FarbeCode": "#7DB1B9"
//   },
//   {
//     "BildName": "2015_D_03",
//     "Prozent_O": 0.2332,
//     "FarbeCode": "#BABAC2"
//   },
//   {
//     "BildName": "2015_D_03",
//     "Prozent_O": 0.1468,
//     "FarbeCode": "#C7352B"
//   },
//   {
//     "BildName": "2015_D_03",
//     "Prozent_O": 0.0624,
//     "FarbeCode": "#BC746F"
//   },
//   {
//     "BildName": "2015_D_03",
//     "Prozent_O": 0.0476,
//     "FarbeCode": "#796F96"
//   },
//   {
//     "BildName": "2015_D_04",
//     "Prozent_O": 0.5772,
//     "FarbeCode": "#449BA6"
//   },
//   {
//     "BildName": "2015_D_04",
//     "Prozent_O": 0.2832,
//     "FarbeCode": "#1593B9"
//   },
//   {
//     "BildName": "2015_D_04",
//     "Prozent_O": 0.1396,
//     "FarbeCode": "#C2C1BD"
//   },
//   {
//     "BildName": "2015_D_05",
//     "Prozent_O": 0.6133,
//     "FarbeCode": "#2E5265"
//   },
//   {
//     "BildName": "2015_D_05",
//     "Prozent_O": 0.3357,
//     "FarbeCode": "#AAAFAD"
//   },
//   {
//     "BildName": "2015_D_05",
//     "Prozent_O": 0.0509,
//     "FarbeCode": "#BA5349"
//   },
//   {
//     "BildName": "2015_E_01",
//     "Prozent_O": 0.6683,
//     "FarbeCode": "#353680"
//   },
//   {
//     "BildName": "2015_E_01",
//     "Prozent_O": 0.2946,
//     "FarbeCode": "#BDBCC1"
//   },
//   {
//     "BildName": "2015_E_01",
//     "Prozent_O": 0.0371,
//     "FarbeCode": "#4D5287"
//   },
//   {
//     "BildName": "2015_E_02",
//     "Prozent_O": 0.7225,
//     "FarbeCode": "#21293E"
//   },
//   {
//     "BildName": "2015_E_02",
//     "Prozent_O": 0.2342,
//     "FarbeCode": "#B81803"
//   },
//   {
//     "BildName": "2015_E_02",
//     "Prozent_O": 0.0434,
//     "FarbeCode": "#F6E8AD"
//   },
//   {
//     "BildName": "2015_E_03",
//     "Prozent_O": 0.399,
//     "FarbeCode": "#554C46"
//   },
//   {
//     "BildName": "2015_E_03",
//     "Prozent_O": 0.3068,
//     "FarbeCode": "#332F2B"
//   },
//   {
//     "BildName": "2015_E_03",
//     "Prozent_O": 0.1825,
//     "FarbeCode": "#7A6E6A"
//   },
//   {
//     "BildName": "2015_E_03",
//     "Prozent_O": 0.0858,
//     "FarbeCode": "#BCB5B0"
//   },
//   {
//     "BildName": "2015_E_03",
//     "Prozent_O": 0.0258,
//     "FarbeCode": "#D0A431"
//   },
//   {
//     "BildName": "2015_E_04",
//     "Prozent_O": 0.4845,
//     "FarbeCode": "#24211E"
//   },
//   {
//     "BildName": "2015_E_04",
//     "Prozent_O": 0.2232,
//     "FarbeCode": "#B32F06"
//   },
//   {
//     "BildName": "2015_E_04",
//     "Prozent_O": 0.1366,
//     "FarbeCode": "#892206"
//   },
//   {
//     "BildName": "2015_E_04",
//     "Prozent_O": 0.107,
//     "FarbeCode": "#612111"
//   },
//   {
//     "BildName": "2015_E_04",
//     "Prozent_O": 0.0487,
//     "FarbeCode": "#827976"
//   },
//   {
//     "BildName": "2015_E_05",
//     "Prozent_O": 0.5584,
//     "FarbeCode": "#252423"
//   },
//   {
//     "BildName": "2015_E_05",
//     "Prozent_O": 0.4416,
//     "FarbeCode": "#928C84"
//   },
//   {
//     "BildName": "2015_F_01",
//     "Prozent_O": 0.2791,
//     "FarbeCode": "#383B31"
//   },
//   {
//     "BildName": "2015_F_01",
//     "Prozent_O": 0.2352,
//     "FarbeCode": "#4E5245"
//   },
//   {
//     "BildName": "2015_F_01",
//     "Prozent_O": 0.2258,
//     "FarbeCode": "#23251F"
//   },
//   {
//     "BildName": "2015_F_01",
//     "Prozent_O": 0.1773,
//     "FarbeCode": "#696C5E"
//   },
//   {
//     "BildName": "2015_F_01",
//     "Prozent_O": 0.0827,
//     "FarbeCode": "#93928E"
//   },
//   {
//     "BildName": "2015_F_02",
//     "Prozent_O": 0.8831,
//     "FarbeCode": "#525C58"
//   },
//   {
//     "BildName": "2015_F_02",
//     "Prozent_O": 0.1169,
//     "FarbeCode": "#3B423F"
//   },
//   {
//     "BildName": "2015_F_03",
//     "Prozent_O": 0.7423,
//     "FarbeCode": "#2A3234"
//   },
//   {
//     "BildName": "2015_F_03",
//     "Prozent_O": 0.129,
//     "FarbeCode": "#50A0A0"
//   },
//   {
//     "BildName": "2015_F_03",
//     "Prozent_O": 0.1287,
//     "FarbeCode": "#3A5D5E"
//   }
// ]
// raw_json_2016 = [
//   {
//     "BildName": "2016_A_01",
//     "Prozent_O": 0.9,
//     "FarbeCode": "#DDDBDC"
//   },
//   {
//     "BildName": "2016_A_01",
//     "Prozent_O": 0.1,
//     "FarbeCode": "#D5D2CF"
//   },
//   {
//     "BildName": "2016_A_02",
//     "Prozent_O": 0.9411,
//     "FarbeCode": "#C6C6C7"
//   },
//   {
//     "BildName": "2016_A_02",
//     "Prozent_O": 0.0589,
//     "FarbeCode": "#575555"
//   },
//   {
//     "BildName": "2016_A_03",
//     "Prozent_O": 0.8363,
//     "FarbeCode": "#D2D2D9"
//   },
//   {
//     "BildName": "2016_A_03",
//     "Prozent_O": 0.0994,
//     "FarbeCode": "#255DA7"
//   },
//   {
//     "BildName": "2016_A_03",
//     "Prozent_O": 0.0643,
//     "FarbeCode": "#A0A4AF"
//   },
//   {
//     "BildName": "2016_A_04",
//     "Prozent_O": 0.7392,
//     "FarbeCode": "#D7D4E0"
//   },
//   {
//     "BildName": "2016_A_04",
//     "Prozent_O": 0.1903,
//     "FarbeCode": "#716B73"
//   },
//   {
//     "BildName": "2016_A_04",
//     "Prozent_O": 0.0705,
//     "FarbeCode": "#DFC40B"
//   },
//   {
//     "BildName": "2016_A_05",
//     "Prozent_O": 0.4531,
//     "FarbeCode": "#C7C4C8"
//   },
//   {
//     "BildName": "2016_A_05",
//     "Prozent_O": 0.195,
//     "FarbeCode": "#4A3A3A"
//   },
//   {
//     "BildName": "2016_A_05",
//     "Prozent_O": 0.1469,
//     "FarbeCode": "#714C42"
//   },
//   {
//     "BildName": "2016_A_05",
//     "Prozent_O": 0.1253,
//     "FarbeCode": "#91898B"
//   },
//   {
//     "BildName": "2016_A_05",
//     "Prozent_O": 0.0797,
//     "FarbeCode": "#AD7A62"
//   },
//   {
//     "BildName": "2016_B_01",
//     "Prozent_O": 0.5239,
//     "FarbeCode": "#D1CFDC"
//   },
//   {
//     "BildName": "2016_B_01",
//     "Prozent_O": 0.1984,
//     "FarbeCode": "#57565E"
//   },
//   {
//     "BildName": "2016_B_01",
//     "Prozent_O": 0.1839,
//     "FarbeCode": "#BC9CA6"
//   },
//   {
//     "BildName": "2016_B_01",
//     "Prozent_O": 0.0938,
//     "FarbeCode": "#D35E60"
//   },
//   {
//     "BildName": "2016_B_02",
//     "Prozent_O": 0.5144,
//     "FarbeCode": "#D2D1DA"
//   },
//   {
//     "BildName": "2016_B_02",
//     "Prozent_O": 0.1734,
//     "FarbeCode": "#93868A"
//   },
//   {
//     "BildName": "2016_B_02",
//     "Prozent_O": 0.1675,
//     "FarbeCode": "#4A4348"
//   },
//   {
//     "BildName": "2016_B_02",
//     "Prozent_O": 0.0884,
//     "FarbeCode": "#C56158"
//   },
//   {
//     "BildName": "2016_B_02",
//     "Prozent_O": 0.0562,
//     "FarbeCode": "#598DB5"
//   },
//   {
//     "BildName": "2016_B_03",
//     "Prozent_O": 0.7158,
//     "FarbeCode": "#B6BAB8"
//   },
//   {
//     "BildName": "2016_B_03",
//     "Prozent_O": 0.1681,
//     "FarbeCode": "#659B9C"
//   },
//   {
//     "BildName": "2016_B_03",
//     "Prozent_O": 0.0609,
//     "FarbeCode": "#584539"
//   },
//   {
//     "BildName": "2016_B_03",
//     "Prozent_O": 0.0316,
//     "FarbeCode": "#AD9D2F"
//   },
//   {
//     "BildName": "2016_B_03",
//     "Prozent_O": 0.0236,
//     "FarbeCode": "#B26E53"
//   },
//   {
//     "BildName": "2016_B_04",
//     "Prozent_O": 0.5257,
//     "FarbeCode": "#D2CCC2"
//   },
//   {
//     "BildName": "2016_B_04",
//     "Prozent_O": 0.3686,
//     "FarbeCode": "#39373C"
//   },
//   {
//     "BildName": "2016_B_04",
//     "Prozent_O": 0.1057,
//     "FarbeCode": "#9C9A99"
//   },
//   {
//     "BildName": "2016_B_05",
//     "Prozent_O": 0.3892,
//     "FarbeCode": "#C7C2C2"
//   },
//   {
//     "BildName": "2016_B_05",
//     "Prozent_O": 0.2283,
//     "FarbeCode": "#758285"
//   },
//   {
//     "BildName": "2016_B_05",
//     "Prozent_O": 0.1381,
//     "FarbeCode": "#A3658A"
//   },
//   {
//     "BildName": "2016_B_05",
//     "Prozent_O": 0.1245,
//     "FarbeCode": "#2A2336"
//   },
//   {
//     "BildName": "2016_B_05",
//     "Prozent_O": 0.1198,
//     "FarbeCode": "#BE3127"
//   },
//   {
//     "BildName": "2016_C_01",
//     "Prozent_O": 0.4357,
//     "FarbeCode": "#BDBCC8"
//   },
//   {
//     "BildName": "2016_C_01",
//     "Prozent_O": 0.1994,
//     "FarbeCode": "#7E8187"
//   },
//   {
//     "BildName": "2016_C_01",
//     "Prozent_O": 0.1692,
//     "FarbeCode": "#404046"
//   },
//   {
//     "BildName": "2016_C_01",
//     "Prozent_O": 0.1123,
//     "FarbeCode": "#715650"
//   },
//   {
//     "BildName": "2016_C_01",
//     "Prozent_O": 0.0834,
//     "FarbeCode": "#AC7A62"
//   },
//   {
//     "BildName": "2016_C_02",
//     "Prozent_O": 0.3898,
//     "FarbeCode": "#B63123"
//   },
//   {
//     "BildName": "2016_C_02",
//     "Prozent_O": 0.1723,
//     "FarbeCode": "#413335"
//   },
//   {
//     "BildName": "2016_C_02",
//     "Prozent_O": 0.1502,
//     "FarbeCode": "#745F55"
//   },
//   {
//     "BildName": "2016_C_02",
//     "Prozent_O": 0.1485,
//     "FarbeCode": "#85342C"
//   },
//   {
//     "BildName": "2016_C_02",
//     "Prozent_O": 0.1391,
//     "FarbeCode": "#A78572"
//   },
//   {
//     "BildName": "2016_C_03",
//     "Prozent_O": 0.3562,
//     "FarbeCode": "#CD190E"
//   },
//   {
//     "BildName": "2016_C_03",
//     "Prozent_O": 0.285,
//     "FarbeCode": "#2E404D"
//   },
//   {
//     "BildName": "2016_C_03",
//     "Prozent_O": 0.1305,
//     "FarbeCode": "#86939E"
//   },
//   {
//     "BildName": "2016_C_03",
//     "Prozent_O": 0.126,
//     "FarbeCode": "#9C2826"
//   },
//   {
//     "BildName": "2016_C_03",
//     "Prozent_O": 0.1024,
//     "FarbeCode": "#995A5C"
//   },
//   {
//     "BildName": "2016_C_04",
//     "Prozent_O": 0.5765,
//     "FarbeCode": "#D7271F"
//   },
//   {
//     "BildName": "2016_C_04",
//     "Prozent_O": 0.2794,
//     "FarbeCode": "#BAB4BF"
//   },
//   {
//     "BildName": "2016_C_04",
//     "Prozent_O": 0.1148,
//     "FarbeCode": "#D14542"
//   },
//   {
//     "BildName": "2016_C_04",
//     "Prozent_O": 0.0293,
//     "FarbeCode": "#782B28"
//   },
//   {
//     "BildName": "2016_C_05",
//     "Prozent_O": 0.39,
//     "FarbeCode": "#DF992B"
//   },
//   {
//     "BildName": "2016_C_05",
//     "Prozent_O": 0.3605,
//     "FarbeCode": "#A49C5D"
//   },
//   {
//     "BildName": "2016_C_05",
//     "Prozent_O": 0.2495,
//     "FarbeCode": "#83B3BB"
//   },
//   {
//     "BildName": "2016_D_01",
//     "Prozent_O": 0.552,
//     "FarbeCode": "#DAC32A"
//   },
//   {
//     "BildName": "2016_D_01",
//     "Prozent_O": 0.2915,
//     "FarbeCode": "#908C92"
//   },
//   {
//     "BildName": "2016_D_01",
//     "Prozent_O": 0.1565,
//     "FarbeCode": "#0E1621"
//   },
//   {
//     "BildName": "2016_D_02",
//     "Prozent_O": 0.8539,
//     "FarbeCode": "#D19C0D"
//   },
//   {
//     "BildName": "2016_D_02",
//     "Prozent_O": 0.1461,
//     "FarbeCode": "#C8C2C5"
//   },
//   {
//     "BildName": "2016_D_03",
//     "Prozent_O": 0.5094,
//     "FarbeCode": "#83BCDA"
//   },
//   {
//     "BildName": "2016_D_03",
//     "Prozent_O": 0.4567,
//     "FarbeCode": "#D8D8DD"
//   },
//   {
//     "BildName": "2016_D_03",
//     "Prozent_O": 0.0339,
//     "FarbeCode": "#BABBC1"
//   },
//   {
//     "BildName": "2016_D_04",
//     "Prozent_O": 0.5106,
//     "FarbeCode": "#1993C9"
//   },
//   {
//     "BildName": "2016_D_04",
//     "Prozent_O": 0.2039,
//     "FarbeCode": "#8291A3"
//   },
//   {
//     "BildName": "2016_D_04",
//     "Prozent_O": 0.1967,
//     "FarbeCode": "#B7BAC9"
//   },
//   {
//     "BildName": "2016_D_04",
//     "Prozent_O": 0.0888,
//     "FarbeCode": "#425B70"
//   },
//   {
//     "BildName": "2016_D_05",
//     "Prozent_O": 0.7731,
//     "FarbeCode": "#90ABA8"
//   },
//   {
//     "BildName": "2016_D_05",
//     "Prozent_O": 0.2269,
//     "FarbeCode": "#2D2F33"
//   },
//   {
//     "BildName": "2016_E_01",
//     "Prozent_O": 0.2678,
//     "FarbeCode": "#181420"
//   },
//   {
//     "BildName": "2016_E_01",
//     "Prozent_O": 0.2549,
//     "FarbeCode": "#BDBDC6"
//   },
//   {
//     "BildName": "2016_E_01",
//     "Prozent_O": 0.2424,
//     "FarbeCode": "#527D8E"
//   },
//   {
//     "BildName": "2016_E_01",
//     "Prozent_O": 0.1619,
//     "FarbeCode": "#494958"
//   },
//   {
//     "BildName": "2016_E_01",
//     "Prozent_O": 0.073,
//     "FarbeCode": "#9F2637"
//   },
//   {
//     "BildName": "2016_E_02",
//     "Prozent_O": 0.2336,
//     "FarbeCode": "#26232A"
//   },
//   {
//     "BildName": "2016_E_02",
//     "Prozent_O": 0.2304,
//     "FarbeCode": "#5F5D63"
//   },
//   {
//     "BildName": "2016_E_02",
//     "Prozent_O": 0.214,
//     "FarbeCode": "#8B5C4B"
//   },
//   {
//     "BildName": "2016_E_02",
//     "Prozent_O": 0.1656,
//     "FarbeCode": "#7A8689"
//   },
//   {
//     "BildName": "2016_E_02",
//     "Prozent_O": 0.1564,
//     "FarbeCode": "#DCD6D0"
//   },
//   {
//     "BildName": "2016_E_03",
//     "Prozent_O": 0.4835,
//     "FarbeCode": "#2A2A31"
//   },
//   {
//     "BildName": "2016_E_03",
//     "Prozent_O": 0.4629,
//     "FarbeCode": "#E1E1EA"
//   },
//   {
//     "BildName": "2016_E_03",
//     "Prozent_O": 0.0535,
//     "FarbeCode": "#918F91"
//   },
//   {
//     "BildName": "2016_E_04",
//     "Prozent_O": 0.3908,
//     "FarbeCode": "#3C2936"
//   },
//   {
//     "BildName": "2016_E_04",
//     "Prozent_O": 0.2085,
//     "FarbeCode": "#302620"
//   },
//   {
//     "BildName": "2016_E_04",
//     "Prozent_O": 0.2038,
//     "FarbeCode": "#4D3F40"
//   },
//   {
//     "BildName": "2016_E_04",
//     "Prozent_O": 0.1126,
//     "FarbeCode": "#4B4620"
//   },
//   {
//     "BildName": "2016_E_04",
//     "Prozent_O": 0.0844,
//     "FarbeCode": "#81797E"
//   },
//   {
//     "BildName": "2016_E_05",
//     "Prozent_O": 0.5468,
//     "FarbeCode": "#5A686E"
//   },
//   {
//     "BildName": "2016_E_05",
//     "Prozent_O": 0.3341,
//     "FarbeCode": "#2D2E33"
//   },
//   {
//     "BildName": "2016_E_05",
//     "Prozent_O": 0.119,
//     "FarbeCode": "#484F56"
//   },
//   {
//     "BildName": "2016_F_01",
//     "Prozent_O": 0.5208,
//     "FarbeCode": "#34333C"
//   },
//   {
//     "BildName": "2016_F_01",
//     "Prozent_O": 0.4792,
//     "FarbeCode": "#514643"
//   },
//   {
//     "BildName": "2016_F_02",
//     "Prozent_O": 0.5424,
//     "FarbeCode": "#29221D"
//   },
//   {
//     "BildName": "2016_F_02",
//     "Prozent_O": 0.3515,
//     "FarbeCode": "#947D66"
//   },
//   {
//     "BildName": "2016_F_02",
//     "Prozent_O": 0.1061,
//     "FarbeCode": "#C79A11"
//   },
//   {
//     "BildName": "2016_F_03",
//     "Prozent_O": 0.9093,
//     "FarbeCode": "#2E2B2E"
//   },
//   {
//     "BildName": "2016_F_03",
//     "Prozent_O": 0.0907,
//     "FarbeCode": "#B8A58D"
//   }
// ]
// raw_json_2017 = [
//   {
//     "BildName": "2017_A_01",
//     "Prozent_O": 0.7315,
//     "FarbeCode": "#EEEEEE"
//   },
//   {
//     "BildName": "2017_A_01",
//     "Prozent_O": 0.2685,
//     "FarbeCode": "#A7A6AE"
//   },
//   {
//     "BildName": "2017_A_02",
//     "Prozent_O": 0.7,
//     "FarbeCode": "#C1BFBC"
//   },
//   {
//     "BildName": "2017_A_02",
//     "Prozent_O": 0.3,
//     "FarbeCode": "#CDCBC8"
//   },
//   {
//     "BildName": "2017_A_03",
//     "Prozent_O": 0.9475,
//     "FarbeCode": "#CFCBC5"
//   },
//   {
//     "BildName": "2017_A_03",
//     "Prozent_O": 0.0525,
//     "FarbeCode": "#F3F2F0"
//   },
//   {
//     "BildName": "2017_A_04",
//     "Prozent_O": 0.8797,
//     "FarbeCode": "#C9CED4"
//   },
//   {
//     "BildName": "2017_A_04",
//     "Prozent_O": 0.0789,
//     "FarbeCode": "#8498AA"
//   },
//   {
//     "BildName": "2017_A_04",
//     "Prozent_O": 0.0324,
//     "FarbeCode": "#5B5150"
//   },
//   {
//     "BildName": "2017_A_04",
//     "Prozent_O": 0.0089,
//     "FarbeCode": "#C6836D"
//   },
//   {
//     "BildName": "2017_A_05",
//     "Prozent_O": 0.759,
//     "FarbeCode": "#C4C4C8"
//   },
//   {
//     "BildName": "2017_A_05",
//     "Prozent_O": 0.241,
//     "FarbeCode": "#A3A3A6"
//   },
//   {
//     "BildName": "2017_B_01",
//     "Prozent_O": 0.7017,
//     "FarbeCode": "#C5C3C0"
//   },
//   {
//     "BildName": "2017_B_01",
//     "Prozent_O": 0.1389,
//     "FarbeCode": "#A29C97"
//   },
//   {
//     "BildName": "2017_B_01",
//     "Prozent_O": 0.0989,
//     "FarbeCode": "#BBA97E"
//   },
//   {
//     "BildName": "2017_B_01",
//     "Prozent_O": 0.0606,
//     "FarbeCode": "#AE5A4B"
//   },
//   {
//     "BildName": "2017_B_02",
//     "Prozent_O": 0.7993,
//     "FarbeCode": "#B3B6C2"
//   },
//   {
//     "BildName": "2017_B_02",
//     "Prozent_O": 0.1088,
//     "FarbeCode": "#ABAD85"
//   },
//   {
//     "BildName": "2017_B_02",
//     "Prozent_O": 0.0551,
//     "FarbeCode": "#62646A"
//   },
//   {
//     "BildName": "2017_B_02",
//     "Prozent_O": 0.0368,
//     "FarbeCode": "#B98332"
//   },
//   {
//     "BildName": "2017_B_03",
//     "Prozent_O": 0.6116,
//     "FarbeCode": "#CBC9CD"
//   },
//   {
//     "BildName": "2017_B_03",
//     "Prozent_O": 0.2267,
//     "FarbeCode": "#444C4D"
//   },
//   {
//     "BildName": "2017_B_03",
//     "Prozent_O": 0.0928,
//     "FarbeCode": "#C35D29"
//   },
//   {
//     "BildName": "2017_B_03",
//     "Prozent_O": 0.069,
//     "FarbeCode": "#B9A84C"
//   },
//   {
//     "BildName": "2017_B_04",
//     "Prozent_O": 0.6294,
//     "FarbeCode": "#C0BBB9"
//   },
//   {
//     "BildName": "2017_B_04",
//     "Prozent_O": 0.111,
//     "FarbeCode": "#AC9683"
//   },
//   {
//     "BildName": "2017_B_04",
//     "Prozent_O": 0.1045,
//     "FarbeCode": "#8D949B"
//   },
//   {
//     "BildName": "2017_B_04",
//     "Prozent_O": 0.1013,
//     "FarbeCode": "#69624D"
//   },
//   {
//     "BildName": "2017_B_04",
//     "Prozent_O": 0.0539,
//     "FarbeCode": "#B85F47"
//   },
//   {
//     "BildName": "2017_B_05",
//     "Prozent_O": 0.3953,
//     "FarbeCode": "#BBB2B4"
//   },
//   {
//     "BildName": "2017_B_05",
//     "Prozent_O": 0.2631,
//     "FarbeCode": "#32352E"
//   },
//   {
//     "BildName": "2017_B_05",
//     "Prozent_O": 0.1964,
//     "FarbeCode": "#4B554C"
//   },
//   {
//     "BildName": "2017_B_05",
//     "Prozent_O": 0.135,
//     "FarbeCode": "#727371"
//   },
//   {
//     "BildName": "2017_B_05",
//     "Prozent_O": 0.0103,
//     "FarbeCode": "#8CB58E"
//   },
//   {
//     "BildName": "2017_C_01",
//     "Prozent_O": 0.5615,
//     "FarbeCode": "#B1AAA1"
//   },
//   {
//     "BildName": "2017_C_01",
//     "Prozent_O": 0.1774,
//     "FarbeCode": "#52423A"
//   },
//   {
//     "BildName": "2017_C_01",
//     "Prozent_O": 0.1747,
//     "FarbeCode": "#88776D"
//   },
//   {
//     "BildName": "2017_C_01",
//     "Prozent_O": 0.0865,
//     "FarbeCode": "#BD2C2C"
//   },
//   {
//     "BildName": "2017_C_02",
//     "Prozent_O": 0.5518,
//     "FarbeCode": "#B29880"
//   },
//   {
//     "BildName": "2017_C_02",
//     "Prozent_O": 0.1687,
//     "FarbeCode": "#AA3B19"
//   },
//   {
//     "BildName": "2017_C_02",
//     "Prozent_O": 0.1641,
//     "FarbeCode": "#916D57"
//   },
//   {
//     "BildName": "2017_C_02",
//     "Prozent_O": 0.1154,
//     "FarbeCode": "#463630"
//   },
//   {
//     "BildName": "2017_C_03",
//     "Prozent_O": 0.4305,
//     "FarbeCode": "#CB3D1E"
//   },
//   {
//     "BildName": "2017_C_03",
//     "Prozent_O": 0.3549,
//     "FarbeCode": "#C4C3C9"
//   },
//   {
//     "BildName": "2017_C_03",
//     "Prozent_O": 0.1159,
//     "FarbeCode": "#B85D4A"
//   },
//   {
//     "BildName": "2017_C_03",
//     "Prozent_O": 0.0986,
//     "FarbeCode": "#3F3F3F"
//   },
//   {
//     "BildName": "2017_C_04",
//     "Prozent_O": 0.7397,
//     "FarbeCode": "#AD3410"
//   },
//   {
//     "BildName": "2017_C_04",
//     "Prozent_O": 0.2331,
//     "FarbeCode": "#453027"
//   },
//   {
//     "BildName": "2017_C_04",
//     "Prozent_O": 0.0272,
//     "FarbeCode": "#EBD4CD"
//   },
//   {
//     "BildName": "2017_C_05",
//     "Prozent_O": 0.9297,
//     "FarbeCode": "#BB1D0E"
//   },
//   {
//     "BildName": "2017_C_05",
//     "Prozent_O": 0.0703,
//     "FarbeCode": "#230D0D"
//   },
//   {
//     "BildName": "2017_D_01",
//     "Prozent_O": 0.8577,
//     "FarbeCode": "#86130D"
//   },
//   {
//     "BildName": "2017_D_01",
//     "Prozent_O": 0.1423,
//     "FarbeCode": "#B17E65"
//   },
//   {
//     "BildName": "2017_D_02",
//     "Prozent_O": 0.4277,
//     "FarbeCode": "#42403E"
//   },
//   {
//     "BildName": "2017_D_02",
//     "Prozent_O": 0.1997,
//     "FarbeCode": "#CD4625"
//   },
//   {
//     "BildName": "2017_D_02",
//     "Prozent_O": 0.1547,
//     "FarbeCode": "#5E5E60"
//   },
//   {
//     "BildName": "2017_D_02",
//     "Prozent_O": 0.11,
//     "FarbeCode": "#908F96"
//   },
//   {
//     "BildName": "2017_D_02",
//     "Prozent_O": 0.108,
//     "FarbeCode": "#755538"
//   },
//   {
//     "BildName": "2017_D_03",
//     "Prozent_O": 0.5909,
//     "FarbeCode": "#3D3832"
//   },
//   {
//     "BildName": "2017_D_03",
//     "Prozent_O": 0.3323,
//     "FarbeCode": "#B63717"
//   },
//   {
//     "BildName": "2017_D_03",
//     "Prozent_O": 0.0767,
//     "FarbeCode": "#BFA89A"
//   },
//   {
//     "BildName": "2017_D_04",
//     "Prozent_O": 0.4017,
//     "FarbeCode": "#8E877E"
//   },
//   {
//     "BildName": "2017_D_04",
//     "Prozent_O": 0.2387,
//     "FarbeCode": "#60687B"
//   },
//   {
//     "BildName": "2017_D_04",
//     "Prozent_O": 0.2067,
//     "FarbeCode": "#6F7378"
//   },
//   {
//     "BildName": "2017_D_04",
//     "Prozent_O": 0.153,
//     "FarbeCode": "#495777"
//   },
//   {
//     "BildName": "2017_D_05",
//     "Prozent_O": 0.4403,
//     "FarbeCode": "#9798A4"
//   },
//   {
//     "BildName": "2017_D_05",
//     "Prozent_O": 0.2982,
//     "FarbeCode": "#33394A"
//   },
//   {
//     "BildName": "2017_D_05",
//     "Prozent_O": 0.1591,
//     "FarbeCode": "#626576"
//   },
//   {
//     "BildName": "2017_D_05",
//     "Prozent_O": 0.0641,
//     "FarbeCode": "#BB331E"
//   },
//   {
//     "BildName": "2017_D_05",
//     "Prozent_O": 0.0382,
//     "FarbeCode": "#B85B4D"
//   },
//   {
//     "BildName": "2017_E_01",
//     "Prozent_O": 0.3899,
//     "FarbeCode": "#241E1B"
//   },
//   {
//     "BildName": "2017_E_01",
//     "Prozent_O": 0.3223,
//     "FarbeCode": "#B8B5B3"
//   },
//   {
//     "BildName": "2017_E_01",
//     "Prozent_O": 0.1843,
//     "FarbeCode": "#AA4640"
//   },
//   {
//     "BildName": "2017_E_01",
//     "Prozent_O": 0.1035,
//     "FarbeCode": "#925F22"
//   },
//   {
//     "BildName": "2017_E_02",
//     "Prozent_O": 0.5472,
//     "FarbeCode": "#1A1A18"
//   },
//   {
//     "BildName": "2017_E_02",
//     "Prozent_O": 0.2986,
//     "FarbeCode": "#BCBAC1"
//   },
//   {
//     "BildName": "2017_E_02",
//     "Prozent_O": 0.1541,
//     "FarbeCode": "#51554D"
//   },
//   {
//     "BildName": "2017_E_03",
//     "Prozent_O": 0.4379,
//     "FarbeCode": "#2B2B2A"
//   },
//   {
//     "BildName": "2017_E_03",
//     "Prozent_O": 0.4036,
//     "FarbeCode": "#634C89"
//   },
//   {
//     "BildName": "2017_E_03",
//     "Prozent_O": 0.1585,
//     "FarbeCode": "#5D5C5F"
//   },
//   {
//     "BildName": "2017_E_04",
//     "Prozent_O": 0.6596,
//     "FarbeCode": "#24211E"
//   },
//   {
//     "BildName": "2017_E_04",
//     "Prozent_O": 0.1052,
//     "FarbeCode": "#4A4135"
//   },
//   {
//     "BildName": "2017_E_04",
//     "Prozent_O": 0.1035,
//     "FarbeCode": "#B66C0B"
//   },
//   {
//     "BildName": "2017_E_04",
//     "Prozent_O": 0.0887,
//     "FarbeCode": "#785C13"
//   },
//   {
//     "BildName": "2017_E_04",
//     "Prozent_O": 0.043,
//     "FarbeCode": "#9A9485"
//   },
//   {
//     "BildName": "2017_E_05",
//     "Prozent_O": 0.8379,
//     "FarbeCode": "#2D2E28"
//   },
//   {
//     "BildName": "2017_E_05",
//     "Prozent_O": 0.0771,
//     "FarbeCode": "#505346"
//   },
//   {
//     "BildName": "2017_E_05",
//     "Prozent_O": 0.0358,
//     "FarbeCode": "#858967"
//   },
//   {
//     "BildName": "2017_E_05",
//     "Prozent_O": 0.0254,
//     "FarbeCode": "#634527"
//   },
//   {
//     "BildName": "2017_E_05",
//     "Prozent_O": 0.0238,
//     "FarbeCode": "#A7682D"
//   },
//   {
//     "BildName": "2017_F_01",
//     "Prozent_O": 0.6905,
//     "FarbeCode": "#2E2D29"
//   },
//   {
//     "BildName": "2017_F_01",
//     "Prozent_O": 0.3095,
//     "FarbeCode": "#575555"
//   },
//   {
//     "BildName": "2017_F_02",
//     "Prozent_O": 0.7574,
//     "FarbeCode": "#2C2B29"
//   },
//   {
//     "BildName": "2017_F_02",
//     "Prozent_O": 0.2426,
//     "FarbeCode": "#545352"
//   },
//   {
//     "BildName": "2017_F_03",
//     "Prozent_O": 0.9412,
//     "FarbeCode": "#201F19"
//   },
//   {
//     "BildName": "2017_F_03",
//     "Prozent_O": 0.0588,
//     "FarbeCode": "#84736C"
//   }
// ]
// raw_json_2018 = [
//   {
//     "BildName": "2018_A_01",
//     "Prozent_O": 0.9743,
//     "FarbeCode": "#E2E0E1"
//   },
//   {
//     "BildName": "2018_A_01",
//     "Prozent_O": 0.0257,
//     "FarbeCode": "#ACAAAB"
//   },
//   {
//     "BildName": "2018_A_02",
//     "Prozent_O": 0.856,
//     "FarbeCode": "#E6E5EC"
//   },
//   {
//     "BildName": "2018_A_02",
//     "Prozent_O": 0.144,
//     "FarbeCode": "#A3A0A5"
//   },
//   {
//     "BildName": "2018_A_03",
//     "Prozent_O": 0.8603,
//     "FarbeCode": "#C3C5CD"
//   },
//   {
//     "BildName": "2018_A_03",
//     "Prozent_O": 0.1397,
//     "FarbeCode": "#939399"
//   },
//   {
//     "BildName": "2018_A_04",
//     "Prozent_O": 0.6821,
//     "FarbeCode": "#E9E1D9"
//   },
//   {
//     "BildName": "2018_A_04",
//     "Prozent_O": 0.1211,
//     "FarbeCode": "#E5C188"
//   },
//   {
//     "BildName": "2018_A_04",
//     "Prozent_O": 0.1005,
//     "FarbeCode": "#C3A39C"
//   },
//   {
//     "BildName": "2018_A_04",
//     "Prozent_O": 0.0711,
//     "FarbeCode": "#C2874C"
//   },
//   {
//     "BildName": "2018_A_04",
//     "Prozent_O": 0.0253,
//     "FarbeCode": "#70666F"
//   },
//   {
//     "BildName": "2018_A_05",
//     "Prozent_O": 0.6881,
//     "FarbeCode": "#DAD2D9"
//   },
//   {
//     "BildName": "2018_A_05",
//     "Prozent_O": 0.2565,
//     "FarbeCode": "#655B58"
//   },
//   {
//     "BildName": "2018_A_05",
//     "Prozent_O": 0.0554,
//     "FarbeCode": "#EE651F"
//   },
//   {
//     "BildName": "2018_B_01",
//     "Prozent_O": 0.6264,
//     "FarbeCode": "#DAD4CD"
//   },
//   {
//     "BildName": "2018_B_01",
//     "Prozent_O": 0.2923,
//     "FarbeCode": "#E6E4E9"
//   },
//   {
//     "BildName": "2018_B_01",
//     "Prozent_O": 0.0407,
//     "FarbeCode": "#D49F7D"
//   },
//   {
//     "BildName": "2018_B_01",
//     "Prozent_O": 0.0405,
//     "FarbeCode": "#CE7037"
//   },
//   {
//     "BildName": "2018_B_02",
//     "Prozent_O": 0.4655,
//     "FarbeCode": "#DAD8E2"
//   },
//   {
//     "BildName": "2018_B_02",
//     "Prozent_O": 0.2161,
//     "FarbeCode": "#F24A06"
//   },
//   {
//     "BildName": "2018_B_02",
//     "Prozent_O": 0.1655,
//     "FarbeCode": "#613B2F"
//   },
//   {
//     "BildName": "2018_B_02",
//     "Prozent_O": 0.127,
//     "FarbeCode": "#9A898A"
//   },
//   {
//     "BildName": "2018_B_02",
//     "Prozent_O": 0.0261,
//     "FarbeCode": "#359CC1"
//   },
//   {
//     "BildName": "2018_B_03",
//     "Prozent_O": 0.374,
//     "FarbeCode": "#E0DDDC"
//   },
//   {
//     "BildName": "2018_B_03",
//     "Prozent_O": 0.3131,
//     "FarbeCode": "#322B2B"
//   },
//   {
//     "BildName": "2018_B_03",
//     "Prozent_O": 0.1487,
//     "FarbeCode": "#B6A9A6"
//   },
//   {
//     "BildName": "2018_B_03",
//     "Prozent_O": 0.0994,
//     "FarbeCode": "#726865"
//   },
//   {
//     "BildName": "2018_B_03",
//     "Prozent_O": 0.0648,
//     "FarbeCode": "#B9564F"
//   },
//   {
//     "BildName": "2018_B_04",
//     "Prozent_O": 0.4452,
//     "FarbeCode": "#D7D1D4"
//   },
//   {
//     "BildName": "2018_B_04",
//     "Prozent_O": 0.181,
//     "FarbeCode": "#8B908C"
//   },
//   {
//     "BildName": "2018_B_04",
//     "Prozent_O": 0.1466,
//     "FarbeCode": "#393333"
//   },
//   {
//     "BildName": "2018_B_04",
//     "Prozent_O": 0.1155,
//     "FarbeCode": "#EE435D"
//   },
//   {
//     "BildName": "2018_B_04",
//     "Prozent_O": 0.1117,
//     "FarbeCode": "#CE8175"
//   },
//   {
//     "BildName": "2018_B_05",
//     "Prozent_O": 0.6094,
//     "FarbeCode": "#B7B9CF"
//   },
//   {
//     "BildName": "2018_B_05",
//     "Prozent_O": 0.159,
//     "FarbeCode": "#82685D"
//   },
//   {
//     "BildName": "2018_B_05",
//     "Prozent_O": 0.1561,
//     "FarbeCode": "#A38D85"
//   },
//   {
//     "BildName": "2018_B_05",
//     "Prozent_O": 0.0435,
//     "FarbeCode": "#848498"
//   },
//   {
//     "BildName": "2018_B_05",
//     "Prozent_O": 0.0319,
//     "FarbeCode": "#3B3132"
//   },
//   {
//     "BildName": "2018_C_01",
//     "Prozent_O": 0.825,
//     "FarbeCode": "#A09B97"
//   },
//   {
//     "BildName": "2018_C_01",
//     "Prozent_O": 0.175,
//     "FarbeCode": "#B4B1B3"
//   },
//   {
//     "BildName": "2018_C_02",
//     "Prozent_O": 0.8655,
//     "FarbeCode": "#8A8A91"
//   },
//   {
//     "BildName": "2018_C_02",
//     "Prozent_O": 0.1345,
//     "FarbeCode": "#C7C6CC"
//   },
//   {
//     "BildName": "2018_C_03",
//     "Prozent_O": 0.9243,
//     "FarbeCode": "#726C65"
//   },
//   {
//     "BildName": "2018_C_03",
//     "Prozent_O": 0.0757,
//     "FarbeCode": "#C2C1C3"
//   },
//   {
//     "BildName": "2018_C_04",
//     "Prozent_O": 0.9131,
//     "FarbeCode": "#E53427"
//   },
//   {
//     "BildName": "2018_C_04",
//     "Prozent_O": 0.0869,
//     "FarbeCode": "#DE7167"
//   },
//   {
//     "BildName": "2018_C_05",
//     "Prozent_O": 0.801,
//     "FarbeCode": "#EDC509"
//   },
//   {
//     "BildName": "2018_C_05",
//     "Prozent_O": 0.1429,
//     "FarbeCode": "#7B5029"
//   },
//   {
//     "BildName": "2018_C_05",
//     "Prozent_O": 0.0562,
//     "FarbeCode": "#DFD8CA"
//   },
//   {
//     "BildName": "2018_D_01",
//     "Prozent_O": 0.4422,
//     "FarbeCode": "#5E92C5"
//   },
//   {
//     "BildName": "2018_D_01",
//     "Prozent_O": 0.1772,
//     "FarbeCode": "#EC6E3A"
//   },
//   {
//     "BildName": "2018_D_01",
//     "Prozent_O": 0.1334,
//     "FarbeCode": "#CCB9C0"
//   },
//   {
//     "BildName": "2018_D_01",
//     "Prozent_O": 0.1294,
//     "FarbeCode": "#78B7AE"
//   },
//   {
//     "BildName": "2018_D_01",
//     "Prozent_O": 0.1178,
//     "FarbeCode": "#CFB22F"
//   },
//   {
//     "BildName": "2018_D_02",
//     "Prozent_O": 0.2976,
//     "FarbeCode": "#5B7295"
//   },
//   {
//     "BildName": "2018_D_02",
//     "Prozent_O": 0.291,
//     "FarbeCode": "#7F96B3"
//   },
//   {
//     "BildName": "2018_D_02",
//     "Prozent_O": 0.1751,
//     "FarbeCode": "#434A5F"
//   },
//   {
//     "BildName": "2018_D_02",
//     "Prozent_O": 0.1306,
//     "FarbeCode": "#B0BDCE"
//   },
//   {
//     "BildName": "2018_D_02",
//     "Prozent_O": 0.1057,
//     "FarbeCode": "#3E3034"
//   },
//   {
//     "BildName": "2018_D_03",
//     "Prozent_O": 0.3483,
//     "FarbeCode": "#203036"
//   },
//   {
//     "BildName": "2018_D_03",
//     "Prozent_O": 0.297,
//     "FarbeCode": "#1F80A0"
//   },
//   {
//     "BildName": "2018_D_03",
//     "Prozent_O": 0.1753,
//     "FarbeCode": "#8BADBB"
//   },
//   {
//     "BildName": "2018_D_03",
//     "Prozent_O": 0.0907,
//     "FarbeCode": "#6D3621"
//   },
//   {
//     "BildName": "2018_D_03",
//     "Prozent_O": 0.0887,
//     "FarbeCode": "#BD4116"
//   },
//   {
//     "BildName": "2018_D_04",
//     "Prozent_O": 0.5196,
//     "FarbeCode": "#58876B"
//   },
//   {
//     "BildName": "2018_D_04",
//     "Prozent_O": 0.1896,
//     "FarbeCode": "#C9CACB"
//   },
//   {
//     "BildName": "2018_D_04",
//     "Prozent_O": 0.1875,
//     "FarbeCode": "#C83D13"
//   },
//   {
//     "BildName": "2018_D_04",
//     "Prozent_O": 0.0538,
//     "FarbeCode": "#A36040"
//   },
//   {
//     "BildName": "2018_D_04",
//     "Prozent_O": 0.0496,
//     "FarbeCode": "#D19F38"
//   },
//   {
//     "BildName": "2018_D_05",
//     "Prozent_O": 0.8105,
//     "FarbeCode": "#113336"
//   },
//   {
//     "BildName": "2018_D_05",
//     "Prozent_O": 0.1895,
//     "FarbeCode": "#34959C"
//   },
//   {
//     "BildName": "2018_E_01",
//     "Prozent_O": 0.5476,
//     "FarbeCode": "#555922"
//   },
//   {
//     "BildName": "2018_E_01",
//     "Prozent_O": 0.2644,
//     "FarbeCode": "#E6E1DE"
//   },
//   {
//     "BildName": "2018_E_01",
//     "Prozent_O": 0.1062,
//     "FarbeCode": "#3D3D2E"
//   },
//   {
//     "BildName": "2018_E_01",
//     "Prozent_O": 0.0818,
//     "FarbeCode": "#8D8C76"
//   },
//   {
//     "BildName": "2018_E_02",
//     "Prozent_O": 0.3612,
//     "FarbeCode": "#302118"
//   },
//   {
//     "BildName": "2018_E_02",
//     "Prozent_O": 0.2538,
//     "FarbeCode": "#513325"
//   },
//   {
//     "BildName": "2018_E_02",
//     "Prozent_O": 0.1738,
//     "FarbeCode": "#945536"
//   },
//   {
//     "BildName": "2018_E_02",
//     "Prozent_O": 0.1563,
//     "FarbeCode": "#6F412C"
//   },
//   {
//     "BildName": "2018_E_02",
//     "Prozent_O": 0.0548,
//     "FarbeCode": "#8F776C"
//   },
//   {
//     "BildName": "2018_E_03",
//     "Prozent_O": 0.2867,
//     "FarbeCode": "#353436"
//   },
//   {
//     "BildName": "2018_E_03",
//     "Prozent_O": 0.229,
//     "FarbeCode": "#415342"
//   },
//   {
//     "BildName": "2018_E_03",
//     "Prozent_O": 0.2049,
//     "FarbeCode": "#595460"
//   },
//   {
//     "BildName": "2018_E_03",
//     "Prozent_O": 0.1745,
//     "FarbeCode": "#C6AA9D"
//   },
//   {
//     "BildName": "2018_E_03",
//     "Prozent_O": 0.1049,
//     "FarbeCode": "#7F774E"
//   },
//   {
//     "BildName": "2018_E_04",
//     "Prozent_O": 0.3529,
//     "FarbeCode": "#2C2B27"
//   },
//   {
//     "BildName": "2018_E_04",
//     "Prozent_O": 0.25,
//     "FarbeCode": "#D8CFC9"
//   },
//   {
//     "BildName": "2018_E_04",
//     "Prozent_O": 0.198,
//     "FarbeCode": "#87756B"
//   },
//   {
//     "BildName": "2018_E_04",
//     "Prozent_O": 0.1131,
//     "FarbeCode": "#9A9E5E"
//   },
//   {
//     "BildName": "2018_E_04",
//     "Prozent_O": 0.086,
//     "FarbeCode": "#B74F44"
//   },
//   {
//     "BildName": "2018_E_05",
//     "Prozent_O": 0.5597,
//     "FarbeCode": "#24231D"
//   },
//   {
//     "BildName": "2018_E_05",
//     "Prozent_O": 0.4403,
//     "FarbeCode": "#CAAF7C"
//   },
//   {
//     "BildName": "2018_F_01",
//     "Prozent_O": 0.8197,
//     "FarbeCode": "#1D1B1E"
//   },
//   {
//     "BildName": "2018_F_01",
//     "Prozent_O": 0.1803,
//     "FarbeCode": "#EC4C28"
//   },
//   {
//     "BildName": "2018_F_02",
//     "Prozent_O": 0.8131,
//     "FarbeCode": "#1D1D1A"
//   },
//   {
//     "BildName": "2018_F_02",
//     "Prozent_O": 0.1869,
//     "FarbeCode": "#E7CB47"
//   },
//   {
//     "BildName": "2018_F_03",
//     "Prozent_O": 0.4721,
//     "FarbeCode": "#232422"
//   },
//   {
//     "BildName": "2018_F_03",
//     "Prozent_O": 0.3185,
//     "FarbeCode": "#5D5E60"
//   },
//   {
//     "BildName": "2018_F_03",
//     "Prozent_O": 0.2094,
//     "FarbeCode": "#A7ABB1"
//   }
// ]
// raw_json_2019 = [
//   {
//     "BildName": "2019_A_01",
//     "neue Prozent": 0.9364,
//     "FarbeCode": "#DBDBDB",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_01",
//     "neue Prozent": 0.0636,
//     "FarbeCode": "#232FB2",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_02",
//     "neue Prozent": 0.8823,
//     "FarbeCode": "#D9DADD",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_02",
//     "neue Prozent": 0.1177,
//     "FarbeCode": "#000000",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_03",
//     "neue Prozent": 0.7425,
//     "FarbeCode": "#D8D8E1",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_03",
//     "neue Prozent": 0.2575,
//     "FarbeCode": "#1A1A1A",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_04",
//     "neue Prozent": 0.696,
//     "FarbeCode": "#DDDDE6",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_04",
//     "neue Prozent": 0.1657,
//     "FarbeCode": "#9A9AA1",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_04",
//     "neue Prozent": 0.1384,
//     "FarbeCode": "#4A4B4F",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_05",
//     "neue Prozent": 0.6817,
//     "FarbeCode": "#CACAD4",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_05",
//     "neue Prozent": 0.1207,
//     "FarbeCode": "#625F63",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_05",
//     "neue Prozent": 0.1077,
//     "FarbeCode": "#98969E",
//     "": ""
//   },
//   {
//     "BildName": "2019_A_05",
//     "neue Prozent": 0.0899,
//     "FarbeCode": "#322F32",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_01",
//     "neue Prozent": 0.6198,
//     "FarbeCode": "#C8CCD8",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_01",
//     "neue Prozent": 0.1846,
//     "FarbeCode": "#839183",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_01",
//     "neue Prozent": 0.0963,
//     "FarbeCode": "#9D91AE",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_01",
//     "neue Prozent": 0.0803,
//     "FarbeCode": "#87985E",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_01",
//     "neue Prozent": 0.0192,
//     "FarbeCode": "#C34B3F",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_02",
//     "neue Prozent": 0.4626,
//     "FarbeCode": "#B6B8C2",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_02",
//     "neue Prozent": 0.2058,
//     "FarbeCode": "#938C8E",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_02",
//     "neue Prozent": 0.19,
//     "FarbeCode": "#7A6361",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_02",
//     "neue Prozent": 0.1417,
//     "FarbeCode": "#7C8DA3",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_03",
//     "neue Prozent": 0.3485,
//     "FarbeCode": "#E03A25",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_03",
//     "neue Prozent": 0.3345,
//     "FarbeCode": "#AD9DA3",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_03",
//     "neue Prozent": 0.1479,
//     "FarbeCode": "#3D3236",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_03",
//     "neue Prozent": 0.0866,
//     "FarbeCode": "#9C3E35",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_03",
//     "neue Prozent": 0.0823,
//     "FarbeCode": "#D9B827",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_04",
//     "neue Prozent": 0.6184,
//     "FarbeCode": "#CA481B",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_04",
//     "neue Prozent": 0.2073,
//     "FarbeCode": "#D1C0C0",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_04",
//     "neue Prozent": 0.1742,
//     "FarbeCode": "#CD8166",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_05",
//     "neue Prozent": 0.6666,
//     "FarbeCode": "#CC2820",
//     "": ""
//   },
//   {
//     "BildName": "2019_B_05",
//     "neue Prozent": 0.3336,
//     "FarbeCode": "#CCCCCC",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_01",
//     "neue Prozent": 0.592,
//     "FarbeCode": "#C24620",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_01",
//     "neue Prozent": 0.1888,
//     "FarbeCode": "#8B361F",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_01",
//     "neue Prozent": 0.1159,
//     "FarbeCode": "#C77D63",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_01",
//     "neue Prozent": 0.1031,
//     "FarbeCode": "#C3A8A4",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_02",
//     "neue Prozent": 0.9167,
//     "FarbeCode": "#D9CD6A",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_02",
//     "neue Prozent": 0.0833,
//     "FarbeCode": "#BDA0BD",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_03",
//     "neue Prozent": 0.6022,
//     "FarbeCode": "#DEC64B",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_03",
//     "neue Prozent": 0.2476,
//     "FarbeCode": "#C9BE8E",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_03",
//     "neue Prozent": 0.1158,
//     "FarbeCode": "#B69115",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_03",
//     "neue Prozent": 0.0345,
//     "FarbeCode": "#362E18",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_04",
//     "neue Prozent": 0.5817,
//     "FarbeCode": "#DAB60C",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_04",
//     "neue Prozent": 0.1942,
//     "FarbeCode": "#9FA7B4",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_04",
//     "neue Prozent": 0.1348,
//     "FarbeCode": "#C3B26D",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_04",
//     "neue Prozent": 0.0893,
//     "FarbeCode": "#125D92",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_05",
//     "neue Prozent": 0.7961,
//     "FarbeCode": "#199FAB",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_05",
//     "neue Prozent": 0.0941,
//     "FarbeCode": "#47907B",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_05",
//     "neue Prozent": 0.0865,
//     "FarbeCode": "#605740",
//     "": ""
//   },
//   {
//     "BildName": "2019_C_05",
//     "neue Prozent": 0.0235,
//     "FarbeCode": "#E2C55B",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_01",
//     "neue Prozent": 0.526,
//     "FarbeCode": "#146841",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_01",
//     "neue Prozent": 0.2002,
//     "FarbeCode": "#619180",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_01",
//     "neue Prozent": 0.145,
//     "FarbeCode": "#32883F",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_01",
//     "neue Prozent": 0.0705,
//     "FarbeCode": "#21392F",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_01",
//     "neue Prozent": 0.0585,
//     "FarbeCode": "#C7D9CC",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_02",
//     "neue Prozent": 0.372,
//     "FarbeCode": "#2E3F5B",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_02",
//     "neue Prozent": 0.3334,
//     "FarbeCode": "#2FB255",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_02",
//     "neue Prozent": 0.1809,
//     "FarbeCode": "#768194",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_02",
//     "neue Prozent": 0.1137,
//     "FarbeCode": "#60B67A",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_03",
//     "neue Prozent": 0.459,
//     "FarbeCode": "#9491AE",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_03",
//     "neue Prozent": 0.1691,
//     "FarbeCode": "#B7B895",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_03",
//     "neue Prozent": 0.159,
//     "FarbeCode": "#4A4860",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_03",
//     "neue Prozent": 0.1363,
//     "FarbeCode": "#827E55",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_03",
//     "neue Prozent": 0.0766,
//     "FarbeCode": "#6AA2B7",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_04",
//     "neue Prozent": 0.4351,
//     "FarbeCode": "#5D4867",
//     "": 1.0766
//   },
//   {
//     "BildName": "2019_D_04",
//     "neue Prozent": 0.3561,
//     "FarbeCode": "#915F56",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_04",
//     "neue Prozent": 0.2088,
//     "FarbeCode": "#D37E40",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_05",
//     "neue Prozent": 0.4096,
//     "FarbeCode": "#55376E",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_05",
//     "neue Prozent": 0.2736,
//     "FarbeCode": "#7F3962",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_05",
//     "neue Prozent": 0.1767,
//     "FarbeCode": "#AF3755",
//     "": ""
//   },
//   {
//     "BildName": "2019_D_05",
//     "neue Prozent": 0.1403,
//     "FarbeCode": "#C2A1B2",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_01",
//     "neue Prozent": 0.3297,
//     "FarbeCode": "#AB9181",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_01",
//     "neue Prozent": 0.275,
//     "FarbeCode": "#333134",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_01",
//     "neue Prozent": 0.2103,
//     "FarbeCode": "#726B69",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_01",
//     "neue Prozent": 0.185,
//     "FarbeCode": "#C7C7CC",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_02",
//     "neue Prozent": 0.5695,
//     "FarbeCode": "#464953",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_02",
//     "neue Prozent": 0.2851,
//     "FarbeCode": "#A8391A",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_02",
//     "neue Prozent": 0.0886,
//     "FarbeCode": "#8A8A91",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_02",
//     "neue Prozent": 0.0567,
//     "FarbeCode": "#753726",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_03",
//     "neue Prozent": 0.96,
//     "FarbeCode": "#474652",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_03",
//     "neue Prozent": 0.04,
//     "FarbeCode": "#D84431",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_04",
//     "neue Prozent": 0.9009,
//     "FarbeCode": "#3E3F48",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_04",
//     "neue Prozent": 0.0991,
//     "FarbeCode": "#A4A4A9",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_05",
//     "neue Prozent": 0.6361,
//     "FarbeCode": "#313033",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_05",
//     "neue Prozent": 0.2689,
//     "FarbeCode": "#E4E6F2",
//     "": ""
//   },
//   {
//     "BildName": "2019_E_05",
//     "neue Prozent": 0.095,
//     "FarbeCode": "#75747C",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_01",
//     "neue Prozent": 0.6885,
//     "FarbeCode": "#38363B",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_01",
//     "neue Prozent": 0.1641,
//     "FarbeCode": "#C2C1CB",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_01",
//     "neue Prozent": 0.1476,
//     "FarbeCode": "#6E6D76",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_02",
//     "neue Prozent": 0.5344,
//     "FarbeCode": "#3F3E47",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_02",
//     "neue Prozent": 0.4106,
//     "FarbeCode": "#5B585F",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_02",
//     "neue Prozent": 0.0553,
//     "FarbeCode": "#B8B7BB",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_03",
//     "neue Prozent": 0.512,
//     "FarbeCode": "#2D292D",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_03",
//     "neue Prozent": 0.4247,
//     "FarbeCode": "#4A484D",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_03",
//     "neue Prozent": 0.0469,
//     "FarbeCode": "#979496",
//     "": ""
//   },
//   {
//     "BildName": "2019_F_03",
//     "neue Prozent": 0.0165,
//     "FarbeCode": "#924C36",
//     "": ""
//   }
// ]
// raw_json_2020 = [
//   {
//     "BildName": "2020_A_01",
//     "Prozent_O": 0.8154,
//     "FarbeCode": "#E1DFEC"
//   },
//   {
//     "BildName": "2020_A_01",
//     "Prozent_O": 0.1846,
//     "FarbeCode": "#D6D4E0"
//   },
//   {
//     "BildName": "2020_A_02",
//     "Prozent_O": 0.708,
//     "FarbeCode": "#DBD8EF"
//   },
//   {
//     "BildName": "2020_A_02",
//     "Prozent_O": 0.2194,
//     "FarbeCode": "#A2B9D9"
//   },
//   {
//     "BildName": "2020_A_02",
//     "Prozent_O": 0.0726,
//     "FarbeCode": "#E37265"
//   },
//   {
//     "BildName": "2020_A_03",
//     "Prozent_O": 0.6582,
//     "FarbeCode": "#E2DEDD"
//   },
//   {
//     "BildName": "2020_A_03",
//     "Prozent_O": 0.2232,
//     "FarbeCode": "#F7764F"
//   },
//   {
//     "BildName": "2020_A_03",
//     "Prozent_O": 0.1187,
//     "FarbeCode": "#6B6462"
//   },
//   {
//     "BildName": "2020_A_04",
//     "Prozent_O": 0.5084,
//     "FarbeCode": "#E3DAE5"
//   },
//   {
//     "BildName": "2020_A_04",
//     "Prozent_O": 0.3294,
//     "FarbeCode": "#EBA7A7"
//   },
//   {
//     "BildName": "2020_A_04",
//     "Prozent_O": 0.1622,
//     "FarbeCode": "#F56E5A"
//   },
//   {
//     "BildName": "2020_A_05",
//     "Prozent_O": 0.4441,
//     "FarbeCode": "#DFC4CE"
//   },
//   {
//     "BildName": "2020_A_05",
//     "Prozent_O": 0.338,
//     "FarbeCode": "#E3D7E1"
//   },
//   {
//     "BildName": "2020_A_05",
//     "Prozent_O": 0.1147,
//     "FarbeCode": "#9C8A91"
//   },
//   {
//     "BildName": "2020_A_05",
//     "Prozent_O": 0.082,
//     "FarbeCode": "#57634F"
//   },
//   {
//     "BildName": "2020_A_05",
//     "Prozent_O": 0.0213,
//     "FarbeCode": "#ECC15D"
//   },
//   {
//     "BildName": "2020_B_01",
//     "Prozent_O": 0.508,
//     "FarbeCode": "#DFD6D2"
//   },
//   {
//     "BildName": "2020_B_01",
//     "Prozent_O": 0.3048,
//     "FarbeCode": "#303B52"
//   },
//   {
//     "BildName": "2020_B_01",
//     "Prozent_O": 0.1019,
//     "FarbeCode": "#747782"
//   },
//   {
//     "BildName": "2020_B_01",
//     "Prozent_O": 0.0853,
//     "FarbeCode": "#EAA172"
//   },
//   {
//     "BildName": "2020_B_02",
//     "Prozent_O": 0.7153,
//     "FarbeCode": "#D7CFCC"
//   },
//   {
//     "BildName": "2020_B_02",
//     "Prozent_O": 0.1171,
//     "FarbeCode": "#3A3743"
//   },
//   {
//     "BildName": "2020_B_02",
//     "Prozent_O": 0.0988,
//     "FarbeCode": "#9B9BA4"
//   },
//   {
//     "BildName": "2020_B_02",
//     "Prozent_O": 0.0688,
//     "FarbeCode": "#4B5C82"
//   },
//   {
//     "BildName": "2020_B_03",
//     "Prozent_O": 0.4994,
//     "FarbeCode": "#D9D1D1"
//   },
//   {
//     "BildName": "2020_B_03",
//     "Prozent_O": 0.1659,
//     "FarbeCode": "#484245"
//   },
//   {
//     "BildName": "2020_B_03",
//     "Prozent_O": 0.1521,
//     "FarbeCode": "#C0B7B9"
//   },
//   {
//     "BildName": "2020_B_03",
//     "Prozent_O": 0.0955,
//     "FarbeCode": "#9A9195"
//   },
//   {
//     "BildName": "2020_B_03",
//     "Prozent_O": 0.087,
//     "FarbeCode": "#726B6E"
//   },
//   {
//     "BildName": "2020_B_04",
//     "Prozent_O": 0.506,
//     "FarbeCode": "#CEBBB3"
//   },
//   {
//     "BildName": "2020_B_04",
//     "Prozent_O": 0.4528,
//     "FarbeCode": "#EDEAEA"
//   },
//   {
//     "BildName": "2020_B_04",
//     "Prozent_O": 0.0412,
//     "FarbeCode": "#DD3C36"
//   },
//   {
//     "BildName": "2020_B_05",
//     "Prozent_O": 0.5048,
//     "FarbeCode": "#B1A19D"
//   },
//   {
//     "BildName": "2020_B_05",
//     "Prozent_O": 0.3255,
//     "FarbeCode": "#7E7370"
//   },
//   {
//     "BildName": "2020_B_05",
//     "Prozent_O": 0.1697,
//     "FarbeCode": "#3B3736"
//   },
//   {
//     "BildName": "2020_C_01",
//     "Prozent_O": 0.3358,
//     "FarbeCode": "#95939F"
//   },
//   {
//     "BildName": "2020_C_01",
//     "Prozent_O": 0.2555,
//     "FarbeCode": "#36363D"
//   },
//   {
//     "BildName": "2020_C_01",
//     "Prozent_O": 0.2194,
//     "FarbeCode": "#686671"
//   },
//   {
//     "BildName": "2020_C_01",
//     "Prozent_O": 0.1893,
//     "FarbeCode": "#CCC9D6"
//   },
//   {
//     "BildName": "2020_C_02",
//     "Prozent_O": 0.7588,
//     "FarbeCode": "#928F93"
//   },
//   {
//     "BildName": "2020_C_02",
//     "Prozent_O": 0.1539,
//     "FarbeCode": "#A09EA3"
//   },
//   {
//     "BildName": "2020_C_02",
//     "Prozent_O": 0.0873,
//     "FarbeCode": "#BAB9BF"
//   },
//   {
//     "BildName": "2020_C_03",
//     "Prozent_O": 0.5108,
//     "FarbeCode": "#9FA2AF"
//   },
//   {
//     "BildName": "2020_C_03",
//     "Prozent_O": 0.2585,
//     "FarbeCode": "#1D1D20"
//   },
//   {
//     "BildName": "2020_C_03",
//     "Prozent_O": 0.2307,
//     "FarbeCode": "#5D5F68"
//   },
//   {
//     "BildName": "2020_C_04",
//     "Prozent_O": 0.8751,
//     "FarbeCode": "#E84446"
//   },
//   {
//     "BildName": "2020_C_04",
//     "Prozent_O": 0.1249,
//     "FarbeCode": "#762123"
//   },
//   {
//     "BildName": "2020_C_05",
//     "Prozent_O": 0.9564,
//     "FarbeCode": "#BE3A38"
//   },
//   {
//     "BildName": "2020_C_05",
//     "Prozent_O": 0.0436,
//     "FarbeCode": "#BF524F"
//   },
//   {
//     "BildName": "2020_D_01",
//     "Prozent_O": 0.9144,
//     "FarbeCode": "#A52C2B"
//   },
//   {
//     "BildName": "2020_D_01",
//     "Prozent_O": 0.0856,
//     "FarbeCode": "#B0665D"
//   },
//   {
//     "BildName": "2020_D_02",
//     "Prozent_O": 0.2752,
//     "FarbeCode": "#E8724F"
//   },
//   {
//     "BildName": "2020_D_02",
//     "Prozent_O": 0.2561,
//     "FarbeCode": "#E69845"
//   },
//   {
//     "BildName": "2020_D_02",
//     "Prozent_O": 0.2048,
//     "FarbeCode": "#4C4D79"
//   },
//   {
//     "BildName": "2020_D_02",
//     "Prozent_O": 0.1561,
//     "FarbeCode": "#AE9A8A"
//   },
//   {
//     "BildName": "2020_D_02",
//     "Prozent_O": 0.1078,
//     "FarbeCode": "#B45977"
//   },
//   {
//     "BildName": "2020_D_03",
//     "Prozent_O": 0.3169,
//     "FarbeCode": "#A99928"
//   },
//   {
//     "BildName": "2020_D_03",
//     "Prozent_O": 0.29,
//     "FarbeCode": "#E87755"
//   },
//   {
//     "BildName": "2020_D_03",
//     "Prozent_O": 0.1878,
//     "FarbeCode": "#C19C88"
//   },
//   {
//     "BildName": "2020_D_03",
//     "Prozent_O": 0.1131,
//     "FarbeCode": "#27359D"
//   },
//   {
//     "BildName": "2020_D_03",
//     "Prozent_O": 0.0922,
//     "FarbeCode": "#6A4029"
//   },
//   {
//     "BildName": "2020_D_04",
//     "Prozent_O": 0.8583,
//     "FarbeCode": "#94BCD4"
//   },
//   {
//     "BildName": "2020_D_04",
//     "Prozent_O": 0.1206,
//     "FarbeCode": "#9398A2"
//   },
//   {
//     "BildName": "2020_D_04",
//     "Prozent_O": 0.0211,
//     "FarbeCode": "#D6D7DB"
//   },
//   {
//     "BildName": "2020_D_05",
//     "Prozent_O": 0.6281,
//     "FarbeCode": "#7AA2D6"
//   },
//   {
//     "BildName": "2020_D_05",
//     "Prozent_O": 0.126,
//     "FarbeCode": "#627FAC"
//   },
//   {
//     "BildName": "2020_D_05",
//     "Prozent_O": 0.1033,
//     "FarbeCode": "#A6B0C7"
//   },
//   {
//     "BildName": "2020_D_05",
//     "Prozent_O": 0.0976,
//     "FarbeCode": "#4C5162"
//   },
//   {
//     "BildName": "2020_D_05",
//     "Prozent_O": 0.0451,
//     "FarbeCode": "#9B744D"
//   },
//   {
//     "BildName": "2020_E_01",
//     "Prozent_O": 0.4331,
//     "FarbeCode": "#57A6B8"
//   },
//   {
//     "BildName": "2020_E_01",
//     "Prozent_O": 0.234,
//     "FarbeCode": "#3D5667"
//   },
//   {
//     "BildName": "2020_E_01",
//     "Prozent_O": 0.1411,
//     "FarbeCode": "#C0BEBA"
//   },
//   {
//     "BildName": "2020_E_01",
//     "Prozent_O": 0.1232,
//     "FarbeCode": "#5B7B43"
//   },
//   {
//     "BildName": "2020_E_01",
//     "Prozent_O": 0.0685,
//     "FarbeCode": "#C59C2D"
//   },
//   {
//     "BildName": "2020_E_02",
//     "Prozent_O": 0.4309,
//     "FarbeCode": "#A9BCB5"
//   },
//   {
//     "BildName": "2020_E_02",
//     "Prozent_O": 0.2706,
//     "FarbeCode": "#2E5366"
//   },
//   {
//     "BildName": "2020_E_02",
//     "Prozent_O": 0.1931,
//     "FarbeCode": "#456B78"
//   },
//   {
//     "BildName": "2020_E_02",
//     "Prozent_O": 0.0937,
//     "FarbeCode": "#698B91"
//   },
//   {
//     "BildName": "2020_E_02",
//     "Prozent_O": 0.0117,
//     "FarbeCode": "#698B91"
//   },
//   {
//     "BildName": "2020_E_03",
//     "Prozent_O": 0.5649,
//     "FarbeCode": "#4C4E7E"
//   },
//   {
//     "BildName": "2020_E_03",
//     "Prozent_O": 0.2363,
//     "FarbeCode": "#3E3D5A"
//   },
//   {
//     "BildName": "2020_E_03",
//     "Prozent_O": 0.1077,
//     "FarbeCode": "#C9C7D4"
//   },
//   {
//     "BildName": "2020_E_03",
//     "Prozent_O": 0.0911,
//     "FarbeCode": "#787898"
//   },
//   {
//     "BildName": "2020_E_04",
//     "Prozent_O": 0.3762,
//     "FarbeCode": "#3F4B42"
//   },
//   {
//     "BildName": "2020_E_04",
//     "Prozent_O": 0.2779,
//     "FarbeCode": "#E3AEB0"
//   },
//   {
//     "BildName": "2020_E_04",
//     "Prozent_O": 0.2115,
//     "FarbeCode": "#D97C31"
//   },
//   {
//     "BildName": "2020_E_04",
//     "Prozent_O": 0.0926,
//     "FarbeCode": "#AA7D84"
//   },
//   {
//     "BildName": "2020_E_04",
//     "Prozent_O": 0.0418,
//     "FarbeCode": "#B25C27"
//   },
//   {
//     "BildName": "2020_E_05",
//     "Prozent_O": 0.3052,
//     "FarbeCode": "#3C403C"
//   },
//   {
//     "BildName": "2020_E_05",
//     "Prozent_O": 0.2614,
//     "FarbeCode": "#3C403C"
//   },
//   {
//     "BildName": "2020_E_05",
//     "Prozent_O": 0.2467,
//     "FarbeCode": "#6E986E"
//   },
//   {
//     "BildName": "2020_E_05",
//     "Prozent_O": 0.1214,
//     "FarbeCode": "#A4736C"
//   },
//   {
//     "BildName": "2020_E_05",
//     "Prozent_O": 0.0652,
//     "FarbeCode": "#88918A"
//   },
//   {
//     "BildName": "2020_F_01",
//     "Prozent_O": 0.7289,
//     "FarbeCode": "#18181A"
//   },
//   {
//     "BildName": "2020_F_01",
//     "Prozent_O": 0.2711,
//     "FarbeCode": "#3D3B3D"
//   },
//   {
//     "BildName": "2020_F_02",
//     "Prozent_O": 0.9623,
//     "FarbeCode": "#212021"
//   },
//   {
//     "BildName": "2020_F_02",
//     "Prozent_O": 0.0377,
//     "FarbeCode": "#555150"
//   },
//   {
//     "BildName": "2020_F_03",
//     "Prozent_O": 0.9426,
//     "FarbeCode": "#131415"
//   },
//   {
//     "BildName": "2020_F_03",
//     "Prozent_O": 0.0574,
//     "FarbeCode": "#696766"
//   }
// ]
// raw_json_2021 = [
//   {
//     "BildName": "2021_A_01",
//     "Prozent_O": 0.9466,
//     "FarbeCode": "#E3E3E5"
//   },
//   {
//     "BildName": "2021_A_01",
//     "Prozent_O": 0.0534,
//     "FarbeCode": "#797A7C"
//   },
//   {
//     "BildName": "2021_A_02",
//     "Prozent_O": 0.8565,
//     "FarbeCode": "#E3E1E1"
//   },
//   {
//     "BildName": "2021_A_02",
//     "Prozent_O": 0.1235,
//     "FarbeCode": "#747384"
//   },
//   {
//     "BildName": "2021_A_02",
//     "Prozent_O": 0.02,
//     "FarbeCode": "#F3372C"
//   },
//   {
//     "BildName": "2021_A_03",
//     "Prozent_O": 0.858,
//     "FarbeCode": "#E4E5EA"
//   },
//   {
//     "BildName": "2021_A_03",
//     "Prozent_O": 0.142,
//     "FarbeCode": "#292725"
//   },
//   {
//     "BildName": "2021_A_04",
//     "Prozent_O": 0.6704,
//     "FarbeCode": "#E3DEE0"
//   },
//   {
//     "BildName": "2021_A_04",
//     "Prozent_O": 0.2517,
//     "FarbeCode": "#BBBCC0"
//   },
//   {
//     "BildName": "2021_A_04",
//     "Prozent_O": 0.0779,
//     "FarbeCode": "#736C6B"
//   },
//   {
//     "BildName": "2021_A_05",
//     "Prozent_O": 0.6759,
//     "FarbeCode": "#CCCCD0"
//   },
//   {
//     "BildName": "2021_A_05",
//     "Prozent_O": 0.3241,
//     "FarbeCode": "#363637"
//   },
//   {
//     "BildName": "2021_B_01",
//     "Prozent_O": 0.6665,
//     "FarbeCode": "#D4D4D4"
//   },
//   {
//     "BildName": "2021_B_01",
//     "Prozent_O": 0.3335,
//     "FarbeCode": "#9B9998"
//   },
//   {
//     "BildName": "2021_B_02",
//     "Prozent_O": 0.6394,
//     "FarbeCode": "#CDCDD7"
//   },
//   {
//     "BildName": "2021_B_02",
//     "Prozent_O": 0.237,
//     "FarbeCode": "#AAA7AF"
//   },
//   {
//     "BildName": "2021_B_02",
//     "Prozent_O": 0.0709,
//     "FarbeCode": "#B4907C"
//   },
//   {
//     "BildName": "2021_B_02",
//     "Prozent_O": 0.03,
//     "FarbeCode": "#45695D"
//   },
//   {
//     "BildName": "2021_B_02",
//     "Prozent_O": 0.0227,
//     "FarbeCode": "#BBB968"
//   },
//   {
//     "BildName": "2021_B_03",
//     "Prozent_O": 0.6262,
//     "FarbeCode": "#D6D3D5"
//   },
//   {
//     "BildName": "2021_B_03",
//     "Prozent_O": 0.1588,
//     "FarbeCode": "#999DA1"
//   },
//   {
//     "BildName": "2021_B_03",
//     "Prozent_O": 0.1079,
//     "FarbeCode": "#A69572"
//   },
//   {
//     "BildName": "2021_B_03",
//     "Prozent_O": 0.0626,
//     "FarbeCode": "#514A46"
//   },
//   {
//     "BildName": "2021_B_03",
//     "Prozent_O": 0.0444,
//     "FarbeCode": "#C57F3A"
//   },
//   {
//     "BildName": "2021_B_04",
//     "Prozent_O": 0.5808,
//     "FarbeCode": "#E3DCE4"
//   },
//   {
//     "BildName": "2021_B_04",
//     "Prozent_O": 0.2121,
//     "FarbeCode": "#EE5F7F"
//   },
//   {
//     "BildName": "2021_B_04",
//     "Prozent_O": 0.1074,
//     "FarbeCode": "#6A95B1"
//   },
//   {
//     "BildName": "2021_B_04",
//     "Prozent_O": 0.0997,
//     "FarbeCode": "#2F4465"
//   },
//   {
//     "BildName": "2021_B_05",
//     "Prozent_O": 0.4676,
//     "FarbeCode": "#D3C8D6"
//   },
//   {
//     "BildName": "2021_B_05",
//     "Prozent_O": 0.2397,
//     "FarbeCode": "#C43E42"
//   },
//   {
//     "BildName": "2021_B_05",
//     "Prozent_O": 0.1876,
//     "FarbeCode": "#6C9DC5"
//   },
//   {
//     "BildName": "2021_B_05",
//     "Prozent_O": 0.105,
//     "FarbeCode": "#221A1D"
//   },
//   {
//     "BildName": "2021_C_01",
//     "Prozent_O": 0.3456,
//     "FarbeCode": "#D4CDC9"
//   },
//   {
//     "BildName": "2021_C_01",
//     "Prozent_O": 0.2104,
//     "FarbeCode": "#7C9C68"
//   },
//   {
//     "BildName": "2021_C_01",
//     "Prozent_O": 0.198,
//     "FarbeCode": "#DD7731"
//   },
//   {
//     "BildName": "2021_C_01",
//     "Prozent_O": 0.164,
//     "FarbeCode": "#5B646E"
//   },
//   {
//     "BildName": "2021_C_01",
//     "Prozent_O": 0.082,
//     "FarbeCode": "#CDAF2B"
//   },
//   {
//     "BildName": "2021_C_02",
//     "Prozent_O": 0.5008,
//     "FarbeCode": "#E39DC2"
//   },
//   {
//     "BildName": "2021_C_02",
//     "Prozent_O": 0.3589,
//     "FarbeCode": "#CCC9D1"
//   },
//   {
//     "BildName": "2021_C_02",
//     "Prozent_O": 0.1403,
//     "FarbeCode": "#5E5C60"
//   },
//   {
//     "BildName": "2021_C_03",
//     "Prozent_O": 0.5982,
//     "FarbeCode": "#F86A99"
//   },
//   {
//     "BildName": "2021_C_03",
//     "Prozent_O": 0.2223,
//     "FarbeCode": "#D2CBD2"
//   },
//   {
//     "BildName": "2021_C_03",
//     "Prozent_O": 0.1795,
//     "FarbeCode": "#2A2222"
//   },
//   {
//     "BildName": "2021_C_04",
//     "Prozent_O": 0.7111,
//     "FarbeCode": "#E00D0D"
//   },
//   {
//     "BildName": "2021_C_04",
//     "Prozent_O": 0.2011,
//     "FarbeCode": "#0E2EA4"
//   },
//   {
//     "BildName": "2021_C_04",
//     "Prozent_O": 0.0879,
//     "FarbeCode": "#E5DA45"
//   },
//   {
//     "BildName": "2021_C_05",
//     "Prozent_O": 0.913,
//     "FarbeCode": "#BE5339"
//   },
//   {
//     "BildName": "2021_C_05",
//     "Prozent_O": 0.087,
//     "FarbeCode": "#BE5339"
//   },
//   {
//     "BildName": "2021_D_01",
//     "Prozent_O": 0.4035,
//     "FarbeCode": "#B7A89A"
//   },
//   {
//     "BildName": "2021_D_01",
//     "Prozent_O": 0.2068,
//     "FarbeCode": "#60585D"
//   },
//   {
//     "BildName": "2021_D_01",
//     "Prozent_O": 0.1835,
//     "FarbeCode": "#CFD8DF"
//   },
//   {
//     "BildName": "2021_D_01",
//     "Prozent_O": 0.1738,
//     "FarbeCode": "#4494B5"
//   },
//   {
//     "BildName": "2021_D_01",
//     "Prozent_O": 0.0324,
//     "FarbeCode": "#9E4E82"
//   },
//   {
//     "BildName": "2021_D_02",
//     "Prozent_O": 0.7944,
//     "FarbeCode": "#A68F7F"
//   },
//   {
//     "BildName": "2021_D_02",
//     "Prozent_O": 0.1239,
//     "FarbeCode": "#78685F"
//   },
//   {
//     "BildName": "2021_D_02",
//     "Prozent_O": 0.0817,
//     "FarbeCode": "#433D3D"
//   },
//   {
//     "BildName": "2021_D_03",
//     "Prozent_O": 0.403,
//     "FarbeCode": "#9DBAC0"
//   },
//   {
//     "BildName": "2021_D_03",
//     "Prozent_O": 0.2164,
//     "FarbeCode": "#868B89"
//   },
//   {
//     "BildName": "2021_D_03",
//     "Prozent_O": 0.1606,
//     "FarbeCode": "#A68363"
//   },
//   {
//     "BildName": "2021_D_03",
//     "Prozent_O": 0.1558,
//     "FarbeCode": "#D2402B"
//   },
//   {
//     "BildName": "2021_D_03",
//     "Prozent_O": 0.0642,
//     "FarbeCode": "#B46546"
//   },
//   {
//     "BildName": "2021_D_04",
//     "Prozent_O": 0.8735,
//     "FarbeCode": "#AEA9A7"
//   },
//   {
//     "BildName": "2021_D_04",
//     "Prozent_O": 0.1265,
//     "FarbeCode": "#5A585B"
//   },
//   {
//     "BildName": "2021_D_05",
//     "Prozent_O": 0.6958,
//     "FarbeCode": "#8E8D8D"
//   },
//   {
//     "BildName": "2021_D_05",
//     "Prozent_O": 0.1096,
//     "FarbeCode": "#7A7C20"
//   },
//   {
//     "BildName": "2021_D_05",
//     "Prozent_O": 0.091,
//     "FarbeCode": "#755C96"
//   },
//   {
//     "BildName": "2021_D_05",
//     "Prozent_O": 0.0758,
//     "FarbeCode": "#807292"
//   },
//   {
//     "BildName": "2021_D_05",
//     "Prozent_O": 0.0278,
//     "FarbeCode": "#324F22"
//   },
//   {
//     "BildName": "2021_E_01",
//     "Prozent_O": 0.6615,
//     "FarbeCode": "#9A9999"
//   },
//   {
//     "BildName": "2021_E_01",
//     "Prozent_O": 0.223,
//     "FarbeCode": "#6D6B6B"
//   },
//   {
//     "BildName": "2021_E_01",
//     "Prozent_O": 0.1155,
//     "FarbeCode": "#2B292A"
//   },
//   {
//     "BildName": "2021_E_02",
//     "Prozent_O": 0.4619,
//     "FarbeCode": "#4F4139"
//   },
//   {
//     "BildName": "2021_E_02",
//     "Prozent_O": 0.3824,
//     "FarbeCode": "#6E635E"
//   },
//   {
//     "BildName": "2021_E_02",
//     "Prozent_O": 0.1557,
//     "FarbeCode": "#8D8784"
//   },
//   {
//     "BildName": "2021_E_03",
//     "Prozent_O": 0.3753,
//     "FarbeCode": "#1F1D1D"
//   },
//   {
//     "BildName": "2021_E_03",
//     "Prozent_O": 0.2628,
//     "FarbeCode": "#A5A2A8"
//   },
//   {
//     "BildName": "2021_E_03",
//     "Prozent_O": 0.1941,
//     "FarbeCode": "#7A777A"
//   },
//   {
//     "BildName": "2021_E_03",
//     "Prozent_O": 0.1078,
//     "FarbeCode": "#4D4242"
//   },
//   {
//     "BildName": "2021_E_03",
//     "Prozent_O": 0.06,
//     "FarbeCode": "#EA554F"
//   },
//   {
//     "BildName": "2021_E_04",
//     "Prozent_O": 0.4847,
//     "FarbeCode": "#352E29"
//   },
//   {
//     "BildName": "2021_E_04",
//     "Prozent_O": 0.2472,
//     "FarbeCode": "#ECEBEC"
//   },
//   {
//     "BildName": "2021_E_04",
//     "Prozent_O": 0.1363,
//     "FarbeCode": "#727073"
//   },
//   {
//     "BildName": "2021_E_04",
//     "Prozent_O": 0.1319,
//     "FarbeCode": "#96ACBB"
//   },
//   {
//     "BildName": "2021_E_05",
//     "Prozent_O": 0.5212,
//     "FarbeCode": "#1C1C1C"
//   },
//   {
//     "BildName": "2021_E_05",
//     "Prozent_O": 0.3038,
//     "FarbeCode": "#E1E0E0"
//   },
//   {
//     "BildName": "2021_E_05",
//     "Prozent_O": 0.1135,
//     "FarbeCode": "#4B4544"
//   },
//   {
//     "BildName": "2021_E_05",
//     "Prozent_O": 0.0506,
//     "FarbeCode": "#A38D8F"
//   },
//   {
//     "BildName": "2021_E_05",
//     "Prozent_O": 0.0109,
//     "FarbeCode": "#BB2711"
//   },
//   {
//     "BildName": "2021_F_01",
//     "Prozent_O": 0.5693,
//     "FarbeCode": "#1C1513"
//   },
//   {
//     "BildName": "2021_F_01",
//     "Prozent_O": 0.1439,
//     "FarbeCode": "#CEBFC3"
//   },
//   {
//     "BildName": "2021_F_01",
//     "Prozent_O": 0.1206,
//     "FarbeCode": "#656268"
//   },
//   {
//     "BildName": "2021_F_01",
//     "Prozent_O": 0.0952,
//     "FarbeCode": "#D43A28"
//   },
//   {
//     "BildName": "2021_F_01",
//     "Prozent_O": 0.071,
//     "FarbeCode": "#74271E"
//   },
//   {
//     "BildName": "2021_F_02",
//     "Prozent_O": 0.6112,
//     "FarbeCode": "#121212"
//   },
//   {
//     "BildName": "2021_F_02",
//     "Prozent_O": 0.2972,
//     "FarbeCode": "#B7B4B9"
//   },
//   {
//     "BildName": "2021_F_02",
//     "Prozent_O": 0.0916,
//     "FarbeCode": "#6F6B6D"
//   },
//   {
//     "BildName": "2021_F_03",
//     "Prozent_O": 0.9205,
//     "FarbeCode": "#1D1B1B"
//   },
//   {
//     "BildName": "2021_F_03",
//     "Prozent_O": 0.0795,
//     "FarbeCode": "#97873A"
//   }
// ]
  
  
// const new_json_2012 = {}
// const new_json_2013 = {}
// const new_json_2014 = {}
// const new_json_2015 = {}
// const new_json_2016 = {}
// const new_json_2017 = {}
// const new_json_2018 = {} 
// const new_json_2019 = {} 
// const new_json_2020 = {} 
// const new_json_2021 = {} 


// // Jahr 2012
// for (let i = 0; i < raw_json_2012.length; ++i) {  
//     if (new_json_2012[raw_json_2012[i].BildName] === undefined) {
//       new_json_2012[raw_json_2012[i].BildName] = []
//     }
 
//     new_json_2012[raw_json_2012[i].BildName].push({
//         "per": raw_json_2012[i]["Prozent_B"],
//         "col": raw_json_2012[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2012).forEach(function (key) {
//    new_json_2012[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });


// //Jahr 2013
// for (let i = 0; i < raw_json_2013.length; i++) {  
//     if (new_json_2013[raw_json_2013[i].BildName] === undefined) {
//       new_json_2013[raw_json_2013[i].BildName] = []
//     }
 
//     new_json_2013[raw_json_2013[i].BildName].push({
//         "per": raw_json_2013[i]['Prozent_O'],
//         "col": raw_json_2013[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2013).forEach(function (key) {
//    new_json_2013[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });

// //Jahr 2014
// for (let i = 0; i < raw_json_2014.length; i++) {  
//     if (new_json_2014[raw_json_2014[i].BildName] === undefined) {
//       new_json_2014[raw_json_2014[i].BildName] = []
//     }
 
//     new_json_2014[raw_json_2014[i].BildName].push({
//         "per": raw_json_2014[i]['Prozent_O'],
//         "col": raw_json_2014[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2014).forEach(function (key) {
//    new_json_2014[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });



// //Jahr 2015
// for (let i = 0; i < raw_json_2015.length; i++) {  
//     if (new_json_2015[raw_json_2015[i].BildName] === undefined) {
//       new_json_2015[raw_json_2015[i].BildName] = []
//     }
 
//     new_json_2015[raw_json_2015[i].BildName].push({
//         "per": raw_json_2015[i]['Prozent_O'],
//         "col": raw_json_2015[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2015).forEach(function (key) {
//    new_json_2015[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });

//  //Jahr 2016
// for (let i = 0; i < raw_json_2016.length; i++) {  
//     if (new_json_2016[raw_json_2016[i].BildName] === undefined) {
//       new_json_2016[raw_json_2016[i].BildName] = []
//     }
 
//     new_json_2016[raw_json_2016[i].BildName].push({
//         "per": raw_json_2016[i]['Prozent_O'],
//         "col": raw_json_2016[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2016).forEach(function (key) {
//    new_json_2016[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });


//  //Jahr 2017
// for (let i = 0; i < raw_json_2017.length; i++) {  
//     if (new_json_2017[raw_json_2017[i].BildName] === undefined) {
//       new_json_2017[raw_json_2017[i].BildName] = []
//     }
 
//     new_json_2017[raw_json_2017[i].BildName].push({
//         "per": raw_json_2017[i]['Prozent_O'],
//         "col": raw_json_2017[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2017).forEach(function (key) {
//    new_json_2017[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });

//  //Jahr 2018
// for (let i = 0; i < raw_json_2018.length; i++) {  
//     if (new_json_2018[raw_json_2018[i].BildName] === undefined) {
//       new_json_2018[raw_json_2018[i].BildName] = []
//     }
 
//     new_json_2018[raw_json_2018[i].BildName].push({
//         "per": raw_json_2018[i]['Prozent_O'],
//         "col": raw_json_2018[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2018).forEach(function (key) {
//    new_json_2018[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });

//  //Jahr 2019
// for (let i = 0; i < raw_json_2019.length; i++) {  
//     if (new_json_2019[raw_json_2019[i].BildName] === undefined) {
//       new_json_2019[raw_json_2019[i].BildName] = []
//     }
 
//     new_json_2019[raw_json_2019[i].BildName].push({
//         "per": raw_json_2019[i]['neue Prozent'],
//         "col": raw_json_2019[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2019).forEach(function (key) {
//    new_json_2019[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });


//  //Jahr 2020
// for (let i = 0; i < raw_json_2020.length; i++) {  
//     if (new_json_2020[raw_json_2020[i].BildName] === undefined) {
//       new_json_2020[raw_json_2020[i].BildName] = []
//     }
 
//     new_json_2020[raw_json_2020[i].BildName].push({
//         "per": raw_json_2020[i]['Prozent_O'],
//         "col": raw_json_2020[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2020).forEach(function (key) {
//    new_json_2020[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });

//  //Jahr 2021
// for (let i = 0; i < raw_json_2021.length; i++) {  
//     if (new_json_2021[raw_json_2021[i].BildName] === undefined) {
//       new_json_2021[raw_json_2021[i].BildName] = []
//     }
 
//     new_json_2021[raw_json_2021[i].BildName].push({
//         "per": raw_json_2021[i]['Prozent_O'],
//         "col": raw_json_2021[i].FarbeCode
//     });
// }
 
 
// Object.keys(new_json_2021).forEach(function (key) {
//    new_json_2021[key].sort(function(a, b) {
//     return b.per - a.per
//   });
// });





// function preload() {
//   fontRegular = loadFont('GeneralSans-Regular.ttf');
  
//   let charCode = 64
 
//   //loading Images
//   for (let idx = 0; idx < 28; idx++) {
//     if (idx % 5 == 0) {
//       charCode++;
//     }
//     imgs[idx] = loadImage("2012_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     imgs_13[idx] = loadImage("2013_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     imgs_14[idx] = loadImage("2014_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     // imgs_15[idx] = loadImage("2015_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     // imgs_16[idx] = loadImage("2016_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     // imgs_17[idx] = loadImage("2017_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     // imgs_18[idx] = loadImage("2018_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     // imgs_19[idx] = loadImage("2019_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     // imgs_20[idx] = loadImage("2020_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//     // imgs_21[idx] = loadImage("2021_" + String.fromCharCode(charCode) + "_0" + (idx % 5 + 1) + ".jpg");
//    }
  
  

  
  
// }

 
// function setup() {

//   createCanvas(windowWidth, windowHeight);
  
//   // slider = createSlider( (height - 9*abstand) / 12, height-100, (height - 9*abstand) / 10,10);
//   // slider.addClass("slider");
//   // slider.position(width - 330, 80);
//   // slider.style('width', '300px');

// }


 
// function draw() {
//   background(255);
   
 
//   noStroke();
  

//   let rectW = width / 28;
//   // let rectL = slider.value();
//   let rectL = height / 10.5;

  
// // Jahr 2012  
//   let i = 0;
  
//   Object.keys(new_json_2012).forEach(function (key) {
//     var sum = 0;
//     for (var j = 0; j < new_json_2012[key].length; j++) {

      
//       fill(new_json_2012[key][j].col);
//       rect(anfangsX + i * rectW, anfangsY + sum * rectL, rectW, new_json_2012[key][j].per * rectL);
      
//       sum += new_json_2012[key][j].per
//     }
//     i++;
//   });
  
//   //Jahr 2013
//   let id13 = 0;
 
//   Object.keys(new_json_2013).forEach(function (key) {
//     let sum_13 = 0;
//     for (let j = 0; j < new_json_2013[key].length; j++) {
//       fill(new_json_2013[key][j].col);
      
//       rect(anfangsX + id13 * rectW, anfangsY + sum_13 * rectL+ (rectL+abstand), rectW, new_json_2013[key][j].per * rectL);
      
//       sum_13 += new_json_2013[key][j].per
//     }
//     id13++;
//   });
  
//   //Jahr 2014
//   let id14 = 0;
 
//   Object.keys(new_json_2014).forEach(function (key) {
//     let sum_14 = 0;
//     for (let j = 0; j < new_json_2014[key].length; j++) {
//       fill(new_json_2014[key][j].col);
      
//       rect(anfangsX + id14 * rectW, anfangsY + sum_14 * rectL+ (rectL+abstand)*2, rectW, new_json_2014[key][j].per * rectL);
      
//       sum_14 += new_json_2014[key][j].per
//     }
//     id14++;
//   });

//     //Jahr 2015
//   let id15 = 0;
 
//   Object.keys(new_json_2015).forEach(function (key) {
//     let sum_15 = 0;
//     for (let j = 0; j < new_json_2015[key].length; j++) {
//       fill(new_json_2015[key][j].col);
      
//       rect(anfangsX + id15 * rectW, anfangsY + sum_15 * rectL+ (rectL+abstand)*3, rectW, new_json_2015[key][j].per * rectL);
      
//       sum_15 += new_json_2015[key][j].per
//     }
//     id15++;
//   });
  
//     //Jahr 2016
//   let id16 = 0;
 
//   Object.keys(new_json_2016).forEach(function (key) {
//     let sum_16 = 0;
//     for (let j = 0; j < new_json_2016[key].length; j++) {
//       fill(new_json_2016[key][j].col);
      
//       rect(anfangsX + id16 * rectW, anfangsY + sum_16 * rectL+ (rectL+abstand)*4, rectW, new_json_2016[key][j].per * rectL);
      
//       sum_16 += new_json_2016[key][j].per
//     }
//     id16++;
//   });
  
//   //Jahr 2017
//   let id17 = 0;
 
//   Object.keys(new_json_2017).forEach(function (key) {
//     let sum_17 = 0;
//     for (let j = 0; j < new_json_2017[key].length; j++) {
//       fill(new_json_2017[key][j].col);
      
//       rect(anfangsX + id17 * rectW, anfangsY + sum_17 * rectL+ (rectL+abstand)*5, rectW, new_json_2017[key][j].per * rectL);
      
//       sum_17 += new_json_2017[key][j].per
//     }
//     id17++;
//   });
  
//   //Jahr 2018
//   let id18 = 0;
 
//   Object.keys(new_json_2018).forEach(function (key) {
//     let sum_18 = 0;
//     for (let j = 0; j < new_json_2018[key].length; j++) {
//       fill(new_json_2018[key][j].col);
      
//       rect(anfangsX + id18 * rectW, anfangsY + sum_18 * rectL+ (rectL+abstand)*6, rectW, new_json_2018[key][j].per * rectL);
      
//       sum_18 += new_json_2018[key][j].per
//     }
//     id18++;
//   });
  
//     //Jahr 2019
//   let id19 = 0;
 
//   Object.keys(new_json_2019).forEach(function (key) {
//     let sum_19 = 0;
//     for (let j = 0; j < new_json_2019[key].length; j++) {
//       fill(new_json_2019[key][j].col);
      
//       rect(anfangsX + id19 * rectW, anfangsY + sum_19 * rectL+ (rectL+abstand)*7, rectW, new_json_2019[key][j].per * rectL);
      
//       sum_19 += new_json_2019[key][j].per
//     }
//     id19++;
//   });
  
//   //Jahr 2020
//   let id20 = 0;
 
//   Object.keys(new_json_2020).forEach(function (key) {
//     let sum_20 = 0;
//     for (let j = 0; j < new_json_2020[key].length; j++) {
//       fill(new_json_2020[key][j].col);
      
//       rect(anfangsX + id20 * rectW, anfangsY + sum_20 * rectL+ (rectL+abstand)*8, rectW, new_json_2020[key][j].per * rectL);
      
//       sum_20 += new_json_2020[key][j].per
//     }
//     id20++;
//   });

  
  
//   //Jahr 2019
//   let id21 = 0;
 
//   Object.keys(new_json_2021).forEach(function (key) {
//     let sum_21 = 0;
//     for (let j = 0; j < new_json_2021[key].length; j++) {
//       fill(new_json_2021[key][j].col);
      
//       rect(anfangsX + id21 * rectW, anfangsY + sum_21 * rectL+ (rectL+abstand)*9, rectW, new_json_2021[key][j].per * rectL);
      
//       sum_21 += new_json_2021[key][j].per
//     }
//     id21++;
//   });
  
  
// //Kontur
//   push();
//   for(let n=0; n < 28; n++){
//     for(let k=0; k < 10; k++){
//       stroke(255);
//       strokeWeight(0.3); 
//       noFill();
//       rect(anfangsX + n * rectW,anfangsY + k * rectL, rectW,rectL);
//     }
//   }
//   pop();

  
  
  
  
  
  
  
// //   mouseHoverBilder
//   for(let m = 0; m<28; m++){
//     if(mouseX > anfangsX+m*rectW && mouseX < anfangsX+(m+1)*rectW && mouseY > anfangsY && mouseY < anfangsY+rectL){
//       image(imgs[m],mouseX+10,mouseY+10,imgBreite*0.8,imgHohe*0.8);
//     }
//   }
  
//   for(let m = 0; m<28; m++){
//     if(mouseX > anfangsX+m*rectW && mouseX < anfangsX+(m+1)*rectW && mouseY > anfangsY + (rectL+abstand) && mouseY < anfangsY+(rectL*2+abstand)){
//       image(imgs_13[m],mouseX+10,mouseY+10,imgBreite*0.8,imgHohe*0.8);
//     }
//   }
  
//   for(let m = 0; m<28; m++){
//     if(mouseX > anfangsX+m*rectW && mouseX < anfangsX+(m+1)*rectW && mouseY > anfangsY + (rectL+abstand)*2 && mouseY < anfangsY+(rectL*3+abstand*2)){
//       image(imgs_14[m],mouseX+10,mouseY+10,imgBreite*0.8,imgHohe*0.8);
//     }
//   }
  
  

//   // mouseHoverBild();
//  // Titel();
  
// }
 
 
// // function mouseHoverBild(){
// //   for(let m = 0; m<28; m++){
// //     if(mouseX > anfangsX && mouseX < anfangsX+rectL && mouseY > anfangsY+m*rectW && mouseY < anfangsY+(m+1)* rectW){
// //       image(imgs[m],mouseX+10,mouseY+10,200*0.8,266*0.8);
// //     }
// //   }
 
// // }

// function Titel() {
  
//   textFont(fontRegular);
//   fill(0);
  
//   push();
//   textSize(61);
//   textLeading(68);
//   text("Die Farbkombinationen von den \nschönsten deutschen Büchern, 2012-2021", anfangsX,29.7664+61);
//   pop();
// }


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
