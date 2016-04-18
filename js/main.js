(function ($, root, undefined) {

    $(function () {

        'use strict';

        $(".func-do").typed({
            strings: ["Web Developer", "Client-side Developer","PHP Developer", "Responsive Web Architect", "Ruby Developer","HTML, CSS, &amp;  JS Developer", "UI Web Developer"],
            typeSpeed: 300,
            cursorChar: "_",
            loop: true,
            backDelay: 500
        });

        $("header").headroom({
            "offset": 250,
            "tolerance": 5,
            "classes": {
                "initial": "animated",
                "pinned": "swingInX",
                "unpinned": "swingOutX"
            }
        });

    });

})(jQuery, this);
