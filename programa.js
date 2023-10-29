  function mensaje(){
       //capturar la informacion (FATIMA)
        l1=document.getElementById("l1").value
        l2=document.getElementById("l2").value
        l3=document.getElementById("l3").value
        l4=document.getElementById("l4").value

        e1=document.getElementById("e1").value
        e2=document.getElementById("e2").value
        e3=document.getElementById("e3").value
        e4=document.getElementById("e4").value

        d1=document.getElementById("d1").value
        d2=document.getElementById("d2").value
        d3=document.getElementById("d3").value
        d4=document.getElementById("d4").value

        p1=document.getElementById("p1").value
        p2=document.getElementById("p2").value
        p3=document.getElementById("p3").value
        p4=document.getElementById("p4").value
        
        c1=document.getElementById("c1").value
        c2=document.getElementById("c2").value
        c3=document.getElementById("c3").value
        c4=document.getElementById("c4").value

        a1=document.getElementById("a1").value
        a2=document.getElementById("a2").value
        a3=document.getElementById("a3").value
        a4=document.getElementById("a4").value

        //Periodo 1 (MONICA)

        p1=(parseFloat(l1*0.2)+parseFloat(e1*0.2)+parseFloat(d1*0.2)+parseFloat(p1*0.2)+parseFloat(c1*0.1)+parseFloat(a1*0.1))
        
        pro1=document.getElementById("pro1").innerHTML="Promedio:"+p1

       //Periodo 2
        p2=(parseFloat(l2*0.2)+parseFloat(e2*0.2)+parseFloat(d2*0.2)+parseFloat(p2*0.2)+parseFloat(c2*0.1)+parseFloat(a2*0.1))
        
        pro2=document.getElementById("pro2").innerHTML="Promedio:"+p2

       //Periodo 3
        p3=(parseFloat(l3*0.2)+parseFloat(e3*0.2)+parseFloat(d3*0.2)+parseFloat(p3*0.2)+parseFloat(c3*0.1)+parseFloat(a3*0.1))
        
        pro3=document.getElementById("pro3").innerHTML="Promedio:"+p3

       //Periodo 4 (LAURA)
        p4=(parseFloat(l4*0.2)+parseFloat(e4*0.2)+parseFloat(d4*0.2)+parseFloat(p4*0.2)+parseFloat(c4*0.1)+parseFloat(a1*0.1))
        
        pro4=document.getElementById("pro4").innerHTML="Promedio:"+p4

       //Promedio global
        p5=((parseFloat(p1)+parseFloat(p2)+parseFloat(p3)+parseFloat(p4))/4)
        
        pro5=document.getElementById("pro5").innerHTML="Promedio:"+p5

       // FUNCION (KATY)
        if (p1>=7) {
          document.getElementById("pro1").style="color: green;"
        }
        if(p1<7){
          document.getElementById("pro1").style="color: red;"

        }


        if (p2>=7) {
          document.getElementById("pro2").style="color: green;"
        }
        if(p2<7){
          document.getElementById("pro2").style="color: red;"
          
        }

        if (p3>=7) {
          document.getElementById("pro3").style="color: green;"
        }
        if(p3<7){
          document.getElementById("pro3").style="color: red;"
          
        }

        if (p4>=7) {
          document.getElementById("pro4").style="color: green;"
        }
        if(p4<7){
          document.getElementById("pro4").style="color: red;"
        
        }

        if(p5>=7){
          document.getElementById("pro5").style="color: green;"
         
        }
        if(p5<7){
          document.getElementById("pro5").style="color: red;"
         
        }
  }