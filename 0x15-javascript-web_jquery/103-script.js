// fetches and prints how to say “Hello” depending on language

$(document).ready(function() {
    function fetchHello() {
        const langCode = $("#language_code").val();
        $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`, function(data) {
            $("#hello").text(data.hello);
        });
    }

    $("#btn_translate").click(fetchHello);

    $("#language_code").keypress(function(event) {
        if (event.key === "Enter") {
            fetchHello();
        }
    });
});
