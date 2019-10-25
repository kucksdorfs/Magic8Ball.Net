(function () {
    'use strict';

    window.addEventListener("DOMContentLoaded", () => {
        let frmQuestion = document.querySelector("form#frmQuestion");

        frmQuestion.addEventListener("submit", (e) => {
            e.stopPropagation();
            e.preventDefault();
            let text = document.querySelector("input#txtYourQuestion");

            var ajax = new SK.AJAX({
                url: "/answer?q=" + encodeURIComponent(text.value),
                success: function (result, xhr) {
                    let questionResponse = document.querySelector("div#questionResponse"),
                        responseValue = Magic8Ball.Responses[result.JSON];

                    questionResponse.setAttribute("class", "");
                    if (!responseValue) {
                        questionResponse.innerText = "Unknown response from the magic 8 ball.";
                        return;
                    }
                    questionResponse.innerText = responseValue.text;
                    questionResponse.setAttribute("class", responseValue.responseType);
                }
            });

            ajax.Execute();
        });
    });
})();