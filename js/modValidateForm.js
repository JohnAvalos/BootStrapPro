var modValidate = (function(){
    //methods private
        var validateName = function(){
            alert("Hello World");
        var key = true;
        var name = $(".name").val();
        name = $.trim(name);
        var patronName = /^[A-Za-z ]+$/;
        if( name.length > 0 )
        {
            if( patronName.test( name ) )
            {
                key = true;
                $(".name").removeClass("border-red").addClass("border-black");
                $(".error_name").text("");
                return key;
            }else{
                key = false;
                $(".error_name").text(" Revisa el nombre .Este campo solo acepta letras ");
                $(".name").removeClass("border-black").addClass("border-red");
                return key;
            }
        }else{
            
            $(".error_name").text("Este campo es obligatorio");
            $(".name").removeClass("border-black").addClass("border-red");
            key = false;
            return key;
        }
        
    };
    
    var blurName = function(){
        $(".name").blur(function(){
            var name = $(".name").val();
            name = $.trim( name );
            var patronName = /^[A-Za-z ]+$/;
            if( name.length > 0 ){
                if( patronName.test(name) ){
                    $(".error_name").text("");
                    $(".name").removeClass("border-red").addClass("border-black");
                }else{
                    $(".error_name").text("Revisa el nombre .Este campo solo acepta letras");
                    $(".name").removeClass("border-black").addClass("border-red");
                }
            }else{
                 $(".error_name").text("Este campo es obligatorio");
                 $(".name").removeClass("border-black").addClass("border-red");
            }
        });
    };
    
    var initialize = function(){
        //method publics
        validateName();
        blurName();
    }
    
    return{
        init:initialize
    }
})();

modValidate.init();