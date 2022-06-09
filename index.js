let sayilar = ["bir", "iki", "üç", "dört","beş","altı","yedi","sekiz","dokuz","on"];

let a = 0, b = 0, c = 0,ç = 0, d = 0, e = 0, f = 0, g = 0, ğ = 0, h = 0, ı = 0, i = 0, j = 0, k = 0,
l = 0,m=0, n = 0, o = 0, ö = 0, p = 0, r = 0, s = 0, ş = 0, t = 0, u = 0, ü = 0 ,v = 0, y = 0, z = 0;


for(let x = 0; x < sayilar.length; x++) {
    
    // console.log(`${sayilar[i]} elemanının uzunluğu: `+sayilar[i].length);
    
    for(let j = 0; j < sayilar[x].length; j++ ) {
       
        switch(sayilar[x][j]) {
            case "a": a++; break;
            case "b": b++; break;
            case "c": c++; break;
            case "ç": ç++; break;
            case "d": d++; break;
            case "e": e++; break;
            case "f": f++; break;
            case "g": g++; break;
            case "ğ": ğ++; break;
            case "h": h++; break;
            case "ı": ı++; break;
            case "i": i++; break;
            case "k": k++; break;
            case "l": l++; break;
            case "m": m++; break;
            case "n": n++; break;
            case "o": o++; break;
            case "ö": ö++; break;
            case "p": p++; break;
            case "r": r++; break;
            case "s": s++; break;
            case "ş": ş++; break;
            case "t": t++; break;
            case "u": u++; break;
            case "ü": ü++; break;
            case "v": v++; break;
            case "y": y++; break;
            case "z": z++; break;
            default: 


        }
        
     }
    
 }

 let harfler = [`${a} = a |`,`${b} = b |`,`${c} = c |`,`${ç} = ç |`,`${d} = d |`,`${e} = e |`, `${f} = f |`, 
 `${g} = g |`,`${ğ} = ğ |`,`${h} = h |`,`${ı} = ı |`, `${i} = i |`,`${k} = k |`, `${l} = l |`,`${m} = m |`,
 `${o} = o |`,`${ö} = ö |`,`${p} = p |`,`${r} = r |`,`${s} = s |`,`${ş} = ş |`,`${t} = t |`,`${u} = u |`,
 `${ü} = ü |`,`${v} = v |`,`${y} = y |`,`${z} = z |`

 ];

 for(let sayac = 0; sayac < harfler.length-1; sayac++) {
    
    for(let sayac2 = 0; sayac2 < harfler.length-sayac-1 ; sayac2++) {

    if(harfler[sayac2] < harfler[sayac2+1]) {
        
        let kontrol = harfler[sayac2];
        harfler[sayac2] = harfler[sayac2 + 1];
        harfler[sayac2 + 1] = kontrol;

        }

    }

 }

 console.log("En çok tekrar eden harf: "+harfler[0]);
 