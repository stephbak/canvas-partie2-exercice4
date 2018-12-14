var c = document.getElementById( "house" );
var ctx = c.getContext("2d");

// barre verticale duE
ctx.beginPath();
ctx.moveTo(80,90);
ctx.lineTo(80,410);
ctx.lineWidth = 5;
ctx.stroke();
//barre horizontale du haut
ctx.beginPath();
ctx.moveTo(80,90);
ctx.lineTo(200,90);
ctx.lineWidth = 5;
ctx.stroke();
//barre horizontale du bas
ctx.beginPath();
ctx.moveTo(80,410);
ctx.lineTo(200,410);
ctx.lineWidth = 5;
ctx.stroke();
//barre horizontalde du bas
ctx.beginPath();
ctx.moveTo(80,250);
ctx.lineTo(200,250);
ctx.lineWidth = 5;
ctx.stroke();
//2
ctx.beginPath();
ctx.moveTo(200,90);
ctx.quadraticCurveTo(800,-180,160,480);
ctx.lineWidth = 20;
ctx.strokeStyle = "#ea4e1d"
ctx.stroke();
ctx.beginPath();
ctx.moveTo(160,480);
ctx.quadraticCurveTo(370,420,380,440);
ctx.lineWidth = 20;
ctx.strokeStyle = "#ea4e1d"
ctx.stroke();
//trait vertical gauche du N
ctx.beginPath();
ctx.moveTo(490,90);
ctx.lineTo(490,410);
ctx.lineWidth = 5;
ctx.strokeStyle = "black"
ctx.stroke();
//diagonale du N
ctx.beginPath();
ctx.moveTo(490,90);
ctx.lineTo(700,410);
ctx.lineWidth = 5;
ctx.strokeStyle = "black"
ctx.stroke();
//trait verical droit du N
ctx.beginPath();
ctx.moveTo(700,90);
ctx.lineTo(700,410);
ctx.lineWidth = 5;
ctx.strokeStyle = "black"
ctx.stroke();
//hexagone gris
ctx.beginPath();
ctx.moveTo(770,300);
ctx.lineTo(790,320);
ctx.lineTo(790,340);
ctx.lineTo(770,360);
ctx.lineTo(750,340);
ctx.lineTo(750,320);
ctx.lineTo(770,300);
ctx.fillStyle = "#878787"
ctx.fill();
//hexagone orange
ctx.beginPath();
ctx.moveTo(790,250);
ctx.lineTo(810,270);
ctx.lineTo(810,290);
ctx.lineTo(790,310);
ctx.lineTo(770,290);
ctx.lineTo(770,270);
ctx.lineTo(790,250);
ctx.fillStyle = "#ea4e1a"
ctx.fill();
//hexagone blanc en bas à droite
ctx.beginPath();
ctx.moveTo(815,300);
ctx.lineTo(835,320);
ctx.lineTo(835,340);
ctx.lineTo(815,360);
ctx.lineTo(795,340);
ctx.lineTo(795,320);
ctx.lineTo(815,300);
ctx.fillStyle = "#ececec"
ctx.fill();
//hexagone gris clair
ctx.beginPath();
ctx.moveTo(770,200);
ctx.lineTo(790,220);
ctx.lineTo(790,240);
ctx.lineTo(770,260);
ctx.lineTo(750,240);
ctx.lineTo(750,220);
ctx.lineTo(770,200);
ctx.fillStyle = "#dbdadb"
ctx.fill();
//hexagone gris foncé
ctx.beginPath();
ctx.moveTo(815,200);
ctx.lineTo(835,220);
ctx.lineTo(835,240);
ctx.lineTo(815,260);
ctx.lineTo(795,240);
ctx.lineTo(795,220);
ctx.lineTo(815,200);
ctx.fillStyle = "#595656"
ctx.fill();
//hexagone blanc en haut
ctx.beginPath();
ctx.moveTo(790,150);
ctx.lineTo(810,170);
ctx.lineTo(810,190);
ctx.lineTo(790,210);
ctx.lineTo(770,190);
ctx.lineTo(770,170);
ctx.lineTo(790,150);
ctx.fillStyle = "#ebebeb"
ctx.fill();
//mini hexagone blanc
ctx.beginPath();
ctx.moveTo(845,230);
ctx.lineTo(850,235);
ctx.lineTo(850,240);
ctx.lineTo(845,245);
ctx.lineTo(840,240);
ctx.lineTo(840,235);
ctx.lineTo(845,230);
ctx.fillStyle = "#efefef"
ctx.fill();
//mini hexagone gris clair
ctx.beginPath();
ctx.moveTo(855,240);
ctx.lineTo(860,245);
ctx.lineTo(860,250);
ctx.lineTo(855,255);
ctx.lineTo(850,250);
ctx.lineTo(850,245);
ctx.lineTo(855,240);
ctx.fillStyle = "#a4a4a4"
ctx.fill();
//mini hexagone orange
ctx.beginPath();
ctx.moveTo(865,230);
ctx.lineTo(870,235);
ctx.lineTo(870,240);
ctx.lineTo(865,245);
ctx.lineTo(860,240);
ctx.lineTo(860,235);
ctx.lineTo(865,230);
ctx.fillStyle = "#ea4e1a"
ctx.fill();
//texte
ctx.font = "40px serif"
ctx.fillStyle = "#888888"
ctx.fillText("École du Numérique", 480, 450);
ctx.fill();
ctx.font = "40px serif"
ctx.fillStyle = "#888888"
ctx.fillText("du Noyonnais", 470, 490);
ctx.fill();
