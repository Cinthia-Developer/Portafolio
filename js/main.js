function init(){
    crearProyects();
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
	nextSection('inicio');
}
function onClickAbautMe(){
	nextSection('about-me');
}
function onClickSkills(){
	nextSection('skills');
}
function onClickProyects(){
	nextSection('proyects');
}
function onClickContactMe(){
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
        var html= '<div class="col-md-2 col-xs-6">' +
                  '<div class="cuadro">' + 
                  '<img src="' + skills[i].srcImg + '" class="img-responsive" alt="">' + 
                  '<p>' + skills[i].nombre + '</p>' + 
                  '<div class="myProgress">' + 
                  '<div id="myBar" data-per="70" class="myBar" style="width:' + skills[i].porcentaje + '"></div><br>' +
                  '<span>' + skills[i].porcentaje + '</span>' + 
                  '</div><!--cierre de myProgress-->' + 
                  '</div><!--cierre de cuadro-->' +
                  '</div><!--cierre de col-md-2-->'  
        
        lista.append(html); 
    }
}

//------- Función que crea la sección de Proyectos -------
function crearProyects(){
    var lista = $(".lista-proyects");
    for(var i in proyects){
        var html= '<div class="col-md-4">' +
                  '<img src="' +  proyects[i].image + '" width="90%" heigth="60px" alt="">'+
                  '</div><!--cierre de col-md-4-->'   
        
        lista.append(html); 
    }
}