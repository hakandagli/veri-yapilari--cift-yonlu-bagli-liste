var items = new Array();
var button=document.getElementById("button");
var speedd;
button.onclick=function(){
    var sayi = document.getElementById("myNumber").value;
    var speed = document.getElementById("speed").value;
    speedd=speed;
    var speed2=speed*4;
    var i =0;
    durum=0;
    islemler();
    function islemler(){
       if(i<sayi){
        items[i]=Math.floor(Math.random() * 100); // 0 ve 99 arasında sayı üretir.
        var div = document.createElement('div');
        var t = document.createTextNode(items[i]);
        div.className='kutu';
        div.appendChild(t);
        document.getElementById("kutular").appendChild(div);
            var p5 = setTimeout(p5Ekle, speed);
            i++;
            setTimeout(islemler, speed2);
        }else{
        var button2=document.getElementById("button-2");
        button2.onclick=function(){
            var bul = document.getElementById("bul").value;
            var eklenecek = document.getElementById("eklenecek").value;
            var sonuc =0;
            for(var j=0;j<sayi;j++){
                if(items[j]==bul){
                    sonuc++;
                }
            }
            if(sonuc>0){
                durum++;
                var yeniList = new Array();
                sayi++;
                var calisti=0;
                var g=0;
                var iterbiter;
                while(g<sayi){
                    if(items[g]==bul&&calisti==0){
                        iterbiter=g;
                        yeniList[g]=items[g];
                        yeniList[g+1]=eklenecek;
                        calisti++;
                    }else{
                        if(calisti>0){
                            yeniList[g+1]=items[g];
                        }else{
                            yeniList[g]=items[g];
                        }
                    }
                    g++;
                }
                var w=0;
                iterbiterfc();
                function iterbiterfc(){
                    if(w<iterbiter+1){
                        var p1 = document.createElement('div');
                        p1.className='bosluk';
                        document.getElementById("iterbiterler").appendChild(p1);
                        w++;
                        return setTimeout(iterbiterfc, speed*2);
                    }else{
                        console.log('hakan baba');
                    }
                }
                var c=0;
                islemler2();
                function islemler2(){
                    if(c<sayi){
                        var div = document.createElement('div');
                        var t = document.createTextNode(yeniList[c]);
                        div.className='kutu';
                        div.appendChild(t);
                        document.getElementById("kutular2").appendChild(div);
                        var p10 = setTimeout(p5Ekle, speed);
                        c++;
                        setTimeout(islemler2, speed2);
                    }else{
                        console.log('hakanss');
                    }
                }
            }else{
                alert("sayi bulunamadı");
            }  
        }
       }  
    }
}

function p5Ekle(){
    var p3 = document.createElement('div');
    var k = document.createTextNode("←prev");
    p3.className='prev';
    p3.appendChild(k);
    if(durum==0){
        document.getElementById("geriler").appendChild(p3);
    }else{
        document.getElementById("geriler2").appendChild(p3);
    }
    return setTimeout(p6Ekle,speedd);
}

function p6Ekle(){
    var p2 = document.createElement('div');
    var m = document.createTextNode("next→");
    p2.className='next';
    p2.appendChild(m);
    if(durum==0){
        document.getElementById("ileriler").appendChild(p2);
    }else{
        document.getElementById("ileriler2").appendChild(p2);
    }
    return setTimeout(p7Ekle,speedd);
}

function p7Ekle(){
    var p1 = document.createElement('div');
    p1.className='bosluk';
    if(durum==0){
        document.getElementById("iterler").appendChild(p1);
    }else{
        document.getElementById("iterler2").appendChild(p1);
    }
    return 0;
}



