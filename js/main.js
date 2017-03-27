function init(){
    $("header").hide();
    crearProyects();
    crearProyects2();
    crearSkills();
	currentSection = $('#inicio');
	$('.nav-inicio').click(onClickInicio);
    $('.nav-about-me').click(onClickAbautMe);
    $('.nav-skills').click(onClickSkills);
    $('.nav-proyects').click(onClickProyects);
    $('.nav-contact-me').click(onClickContactMe);
}

//-- Funciones para cuando se de click pase a la siguiente pantalla ----
function onClickInicio(){
    $("header").hide();
	nextSection('inicio');
}
function onClickAbautMe(){
    $("header").show()
	nextSection('about-me');
}
function onClickSkills(){
    $("header").show();
	nextSection('skills');
}
function onClickProyects(){
    $("header").show();
	nextSection('proyects');
}
function onClickContactMe(){
    $("header").show();
	nextSection('contact-me');
}

//-- Función que elimina .visible y crea otra para pasar a la siguiente pantalla ----
function nextSection(_id){
	currentSection.removeClass('visible');
	var idNextSection = $('#'+_id);
    idNextSection.addClass('visible');
    currentSection = idNextSection;
}

//------- Función que crea la sección de Skills -------
function crearSkills(){
    var lista = $(".lista-skills");
    for(var i in skills){
        var html= 
                  '<div class="cuadro">' + 
                  '<img src="' + skills[i].srcImg + '" class="img-responsive" width="50px" heigth="60px" alt="">' + 
                  '<p>' + skills[i].nombre + '</p>' + 
                  '<div class="myProgress">' + 
                  '<div id="myBar" data-per="70" class="myBar" style="width:' + skills[i].porcentaje + '"></div><br>' +
                  '<span>' + skills[i].porcentaje + '</span>' + 
                  '</div><!--cierre de myProgress-->' + 
                  '</div><!--cierre de cuadro-->'  
        
        lista.append(html); 
    }
}

//------- Función que crea la sección de Proyectos -------
function crearProyects(){
    var lista = $(".lista-proyects");
    for(var i in proyects){
        var html= '<div class="col-md-4 margenes">' +
                  '<a href="' + proyects[i].name + '">' +
                  '<img src="' +  proyects[i].image + '" width="90%" heigth="60px" alt="">'+
                  '</a>' +
                  '</div><!--cierre de col-md-4-->'  
        
        lista.append(html); 
    }
}

//------- Función que crea la sección de Proyectos -------
function crearProyects2(){
    var lista = $(".lista-proyects2");
    for(var i in proyects2){
        var html= '<div class="col-md-4 margenes">' +
                  '<a href="' + proyects2[i].name + '">' +
                  '<img src="' +  proyects2[i].image + '" width="90%" heigth="60px" alt="">'+
                  '</a>' +
                  '</div><!--cierre de col-md-4-->'   
        
        lista.append(html); 
    }
}
//---'<div class="col-md-2 col-xs-6">' +  +'</div><!--cierre de col-md-2-->'