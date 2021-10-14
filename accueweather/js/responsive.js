$(function(){
    var gnbFlag = flase;
    var gnbIndex;
    
    $(".nav li").on({
        "mouseenter" : function() {
            /* Inb show */ 
            
            if (gnbIndex ! = undefined) {
                $(".Inb").eq(gnbIndex).css("display", "none");
            }

            gnbIndex = $(this).index();
            gnbFlag = true;

            $(".Inb_container").removeClass("disappear");
            $(".Inb_container").addClass("appear");
            $(".Inb_container").show();

            $(".Inb").eq(gnbIndex).css("display","block"); // 인라인 태그의 우선순위를 이용 



            /* 액티브 바 show */
            
            $(".active_bar").show();

            // 선택된 li의 left와 width를 구해 active_bar 의 위치와 길이를 조절한다
            var listLeft = $(this).offset().left;
            var listwidth = $(this).width();

            $(".active_bar").width(listwidth);
            $(".active_bar").offset({left: listLeft  + 17}); // li에 padding이 있었으로 17을 더해준다

        },
        "mouseleave" : function() {

        }


    });


            $(".Inb_container").on({
            "mouseleave" : function() {
                if(gnbFlag) {
                    $(".Inb_container").removeClass("disappear");
                    $(".Inb_container").addClass("appear");
                    $(".Inb_container").hide();
                    $(".active_bar").hide();
                }else {
                    return;
                }

            }
        });

            /* 모바일 햄버거 메뉴 클릭시 */
            $("tigger").on({
                "click" : function(){
                    // 햄버거 메뉴 버튼이 보일 때 (햄버거 메뉴가 visible 상태인가? 로 판단)
                    if($(".mobile.hamburger").is(":visible")) {
                        
                        /* 모바일 닫기 버튼 show */
                        $(".mobile.hamburger").hide();
                        $(".mobile.close").show();
                        
                        /* 모바일 전체 메뉴 */
                        $(".main_header").hight(60);
                        $(".main_content").hide();
                        $(".main_footer").hide();

                        $(".main_menu").empty(); // mobile_manu 하위 태그 초기화 
                        $("li").eq(3).show(); // mobile에서만 보이는 메뉴 2개 추가
                        $("li").eq(4).show();

                        var nav = $(".nav").clone();
                        $("#mobile_menu").append(nav);
                        $("#mobile_menu").show();
                        
                    } else {
                        // 닫기 메뉴 버튼이 보일 때
                        /* 모바일 햄버거 버튼 show */
                        $(".mobile.hamburger").show();
                        $(".mobile.close").hide();

                        /* 모바일 전체 메뉴 show */
                        $(".main_header").hight(390);
                        $(".main_content").show();
                        $(".main_footer").show();
                        $(".main_menu").hide
                }
                    
        }
    }); 

    $(window).resize(function() {
        var width = $(window).width();

        if(window > 767) {
            $("li").eq(3).hide();
            $("li").eq(4).hide();

            if ($(".mobile.hamburger").is(":visible")) {
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                $(".main_header").hight(390);
                $(".main_content").show();
                $(".main_footer").show();
                        
                $(".main_menu").hide();
            }
        }

    });


});