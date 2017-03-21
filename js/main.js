function init(){
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