





    if( 'ontouchstart' in window ){ var click = 'touchstart'; }
    else { var click = 'click'; }


    $('div.burger').on(click, function(){

            if( !$(this).hasClass('open') ){ openMenu(); } 
            else { closeMenu(); }

    });
    

    $('div.menu ul li a').on(click, function(e){
        e.preventDefault();
        closeMenu();
    });     


    function openMenu(){
        
        $('div.circle').addClass('expand');
                    
        $('div.burger').addClass('open');   
        $('div.x, div.y, div.z').addClass('collapse');
        $('.menu li').addClass('animate');
        
        setTimeout(function(){ 
            $('div.y').hide(); 
            $('div.x').addClass('rotate30'); 
            $('div.z').addClass('rotate150'); 
        }, 70);
        setTimeout(function(){
            $('div.x').addClass('rotate45'); 
            $('div.z').addClass('rotate135');  
        }, 120);
        
        

    }
    
    function closeMenu(){

        $('div.burger').removeClass('open');    
        $('div.x').removeClass('rotate45').addClass('rotate30'); 
        $('div.z').removeClass('rotate135').addClass('rotate150');              
        $('div.circle').removeClass('expand');
        $('.menu li').removeClass('animate');
        
        setTimeout(function(){          
            $('div.x').removeClass('rotate30'); 
            $('div.z').removeClass('rotate150');            
        }, 50);
        setTimeout(function(){
            $('div.y').show(); 
            $('div.x, div.y, div.z').removeClass('collapse');
        }, 70);                                                 
        
    }
    
(function ($) {
    "use strict";

$(document).ready(main);

var contador = 1;

function main(){
    $('.menu_bar').click(function(){
        // $('nav').toggle(); 

        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });

};
    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    /*==================================================================
    [ Show / hide Form ]*/
    
    $('.contact100-btn-hide').on('click', function(){
        $('.wrap-contact100').fadeOut(400);
    })

    $('.contact100-btn-show').on('click', function(){
        $('.wrap-contact100').fadeIn(400);
    })

})(jQuery);