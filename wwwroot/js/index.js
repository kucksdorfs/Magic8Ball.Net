(function () {
    'use strict';

    window.addEventListener("DOMContentLoaded", () => {
        let frmQuestion = document.querySelector("form#frmQuestion");

        frmQuestion.addEventListener("submit", (e) => {
            e.stopPropagation();
            e.preventDefault();
            let text = document.querySelector("input#txtYourQuestion");
            if (!text.value) {
                alert("Please provide a question.");
                return;
            }

            var ajax = new SK.AJAX({
                url: "/answer?q=" + encodeURIComponent(text.value),
                success: function (result, xhr) {
                    let questionResponse = document.querySelector("div#questionResponse"),
                        currentResponse = document.createElement("div"),
                        responseValue = Magic8Ball.Responses[result.JSON];

                    if (!responseValue) {
                        currentResponse.innerHTML = text.value + " <br/> - " + "Unknown response from the magic 8 ball.";
                    } else {
                        currentResponse.innerHTML = text.value + " <br/> - " + responseValue.text;
                        currentResponse.setAttribute("class", responseValue.responseType);
                    }

                    questionResponse.prepend(currentResponse);
                },
                finally: function () {
                    text.value = "";
                }
            });

            ajax.Execute();
        });
    });
})();