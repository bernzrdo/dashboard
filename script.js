$(function(){
    
    if(document.location.search=='?menu'){
        window.history.pushState({},document.title,document.location.pathname);
        $('#conteudo').hide();
        $('#conteudo').fadeIn(500);
    }
    
    $('#menuBttn').click(function(){
        $('#menu').toggleClass('open');
    });
    
    $('#bttns span').click(function(){
        $('#menu').removeClass('open');
    });
    
    $('#inscricaoBttn').click(function(){
        if(!$(this).hasClass('active')){
            $('.active').removeClass('active');
            $(this).addClass('active');
            $('#conteudo').fadeOut(500);
            setTimeout(function(){
                document.location.href='index.html?menu';
            },500);
        }
    });
    
    $('#quizBttn').click(function(){
        if(!$(this).hasClass('active')){
            $('.active').removeClass('active');
            $(this).addClass('active');
            $('#conteudo').fadeOut(500);
            setTimeout(function(){
                document.location.href='quiz.html?menu';
            },500);
        }
    });
    
    $('#picgameBttn').click(function(){
        if(!$(this).hasClass('active')){
            $('.active').removeClass('active');
            $(this).addClass('active');
            $('#conteudo').fadeOut(500);
            setTimeout(function(){
                document.location.href='picgame.html?menu';
            },500);
        }
    });
    
    $('#calculadoraBttn').click(function(){
        if(!$(this).hasClass('active')){
            $('.active').removeClass('active');
            $(this).addClass('active');
            $('#conteudo').fadeOut(500);
            setTimeout(function(){
                document.location.href='calculadora.html?menu';
            },500);
        }
    });
    
    
});