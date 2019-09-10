var firstName;
var correctPoint = 0;
var wrongPoint = 0;
var unasnwered =0;


// Collect Player Name
function collectName() { 
    $(".player-name-form").submit(function(e) {
        var firstName  = $(".first-name-input").val();
        e.preventDefault();
    });
}


// let triva = {
//     category1: {
//         categoryName: "60's",
//         Questions: {
//             Question1: {
//                 W
//             },
//             Question2: "",
//             Question3: "",

//         }

//     }

// };

