// GPL-3.0-or-later
(function ($) {
    var methods = {
        init: function () {
            var j = 1;
            while (!$(`#list${j}`).length == 0) {
                j++
            }
            $(this).append(`<div id="${j}" class="navigator"></div>`);
            $(`div#${j}`).append(`<ul id="list${j}"></ul>`);
            return $(this);
        },
        addSection: function (name, url = name) {
            id = $(this).attr('id');
            num = id.substr(4, id.length);
            var childs = $(this).children();
            for (let i = 0; i < childs.length; i++) {
                if (childs[i].id == `${name}${num}`) {
                    console.error(`Section ${name} in list number ${num} already exists`);
                    return $(this);
                }
            }
            $(this).append(`<li id="${name}${num}" value="_${num}_${childs.length}" class="section"><a href="${url}">${name}</a></li>`);
            $(`#${name}${num}`).append(`<div id="submenu_${num}_${childs.length}" class="submenu"></div>`);
            _display(`#submenu_${num}_${childs.length}`, `#${name}${num}`);
            return $(this);
        },
        addOption: function (name, url = name) {
            if ($(this).attr('class') != "section") {
                console.error(`${$(this).attr("id")} it's not an option`)
                return $(this);
            }
            num = $(this).attr("value");
            $(".submenu", this).append(`<a id="${name}${num}" class="option" href="${url}">${name}</a>`);
            return $(this);
        },
        deleteSection: function () {
            var sections = $(".section")
            for (let i = 0; i < sections.length; i++) {
                console.log(sections[i])
                if ($(this).is(sections[i])) {
                    if (i != sections.length - 1) {
                        sections[sections.length - 1].value = i;
                        aux = $(".submenu", sections[sections.length - 1]).attr("id")
                        $(".submenu", sections[sections.length - 1]).attr("id", aux.substr(0, sections.length - 2) + i);
                        $(this).remove()
                    }
                    else {
                        $(this).remove()
                    }
                }
            }
            return $(this);
        },
        deleteOption: function () {
            if ($(this).attr("class") != "option") {
                console.error(`The element ${$(this).attr("id")} is not an option`);
                return $(this);
            }
            $(this).remove();
            return $(this);
        }
    };
    function _display(son, father) {
        $(son).hide();
        $(father).on({
            mouseenter: function () {
                $(son).show();
            },
            mouseleave: function () {
                $(son).hide();
            }
        });
    }
    $.fn.menu = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call
                (arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            console.error('The function ' + method + ' does not exist in jQuery.menu');
        }
    };
})(jQuery);