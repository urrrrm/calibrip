function password_complexity (password) {
    let complexity = null;
    if (password.length >= 4) {
        if (/[A-Za-z]/.test(password) && /[0-9]/.test(password) && password.length >= 6) {
            complexity = 'good';
        } else {
            complexity = 'moderate';
        }
    } else if (password.length >= 1) {
        complexity = 'bad';
    }
    return complexity;
}

$(function() {
    $('#nav-header .menu-toggle').on('click', function(e) {
        $('body').toggleClass('nav-menu-open');
        e.preventDefault();
    });
    $('#nav-menu .menu-close').on('click', function(e) {
        $('body').toggleClass('nav-menu-open');
        e.preventDefault();
    });
    $('#nav-menu .menu-item a[data-scroll]').on('click', function(e) {
        const id = $(this).attr('href');
        const block = $(id);
        const offset = block.offset().top;
        $('body').toggleClass('nav-menu-open');
        $('html, body').stop().animate({
            scrollTop: offset
        }, 800);
        e.preventDefault();
    });

    $(window).on('scroll', function(e) {
        const scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $('#nav-header').addClass('top');
        } else {
            $('#nav-header').removeClass('top');
        }
    });
    $(window).trigger('scroll');

    $('.clients-items').owlCarousel({
        items: 2,
        dots: true,
        nav: false,
    });

    $('#top-block .signup-form .password-input-wrap').on('input', '[name=password]', function(e) {
        const val = $(this).val();
        const wrap = $(this).closest('.password-input-wrap');
        const bar = wrap.find('.password-complexity');
        const complexity = password_complexity(val);
        bar.attr('data-password-complexity', complexity ? complexity : '');
    });
    
    $('#top-block .signup-form .password-input-wrap').on('click', '.password-show', function (e) {
        const wrap = $(this).closest('.password-input-wrap');
        let input = wrap.find('[name=password]');
        let input_cloned = input.clone();
        if (input_cloned.attr('type') === 'text') {
            input_cloned.attr('type', 'password');
        } else {
            input_cloned.attr('type', 'text');
        }
        input.replaceWith(input_cloned);
    });

    $('.faq-item-header').on('click', function(e) {
        const faq_item = $(this).closest('.faq-item');
        faq_item.toggleClass('expanded');
        faq_item.find('.faq-item-body').slideToggle();
    });

    if ($('.faq-item-header').length > 1) {
        $('.faq-item-header').eq(1).trigger('click');
    }
});