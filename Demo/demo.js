$(window).on("load", function () {
    $("div").menu("init");
    $("#list1").menu("addSection", "sample")
    $("#list1").menu("addSection", "example")
    $("#list1").menu("addSection", "test")
    $("#sample1").menu("addOption", "sample")
    $("#sample1").menu("addOption", "sample")
    $("#sample1").menu("addOption", "sample")
    $("#example1").menu("addOption", "example")
    $("#example1").menu("addOption", "exampla")
    $("#example1").menu("addOption", "exampls")
    $("#example_1_1").menu("deleteOption")
})
