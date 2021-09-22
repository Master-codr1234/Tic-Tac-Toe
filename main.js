var name_of_o, name_of_x, x_or_o;
var all_ids = ["px1", "px2", "px3", "px4", "px5", "px6", "px7", "px8", "px9"];
var game_over = 0, played = 0;

function load_content() {
    x_or_o = sessionStorage.getItem("First player");
    name_of_x = localStorage.getItem("Tic Tac Toe Player 1");
    name_of_o = localStorage.getItem("Tic Tac Toe Player 2");
    document.getElementById("first_player").innerHTML = name_of_x;
    document.getElementById("second_player").innerHTML = name_of_o;
    if (x_or_o == "0") {
        document.getElementById("who_will_play_first").innerHTML = name_of_x;
    } else {
        document.getElementById("who_will_play_first").innerHTML = name_of_o;
    }
}

function fill_box(a) {
    if(document.getElementById(all_ids[a]).innerHTML != "X" && document.getElementById(all_ids[a]).innerHTML != "O" && game_over == 0) {
        if (x_or_o == "0") {
            document.getElementById(all_ids[a]).innerHTML = "X";
            x_or_o = "1"
        } else {
            document.getElementById(all_ids[a]).innerHTML = "O";
            x_or_o = "0";
        }
        played++;
        check_winner(0, 1, 2);
        check_winner(3, 4, 5);
        check_winner(6, 7, 8);
        check_winner(0, 3, 6);
        check_winner(1, 4, 7);
        check_winner(2, 5, 8);
        check_winner(0, 4, 8);
        check_winner(2, 4, 6);
    }
}

function reset_game() {
    x_or_o = sessionStorage.getItem("First");
    document.getElementById("winner").innerHTML = " ";
    game_over = 0;
    played = 0;

    for (var i = 0; i <= 9; i++) {
        document.getElementById(all_ids[i]).innerHTML = " ";
        document.getElementById(all_ids[i]).style.color = "black";
    }
}

function check_winner(b, c, d) {
    if (document.getElementById(all_ids[b]).innerHTML == "X" && document.getElementById(all_ids[c]).innerHTML == "X" && document.getElementById(all_ids[d]).innerHTML == "X")
    {
        document.getElementById(all_ids[b]).style.color = "red";
        document.getElementById(all_ids[c]).style.color = "red";
        document.getElementById(all_ids[d]).style.color = "red";
        document.getElementById("winner").style.color = "red";
        document.getElementById("winner").innerHTML = name_of_x + " " + "has won the game";
        game_over = 1;
        document.getElementById("win").play();
    }
    if (document.getElementById(all_ids[b]).innerHTML == "O" && document.getElementById(all_ids[c]).innerHTML == "O" && document.getElementById(all_ids[d]).innerHTML == "O")
    {
        document.getElementById(all_ids[b]).style.color = "blue";
        document.getElementById(all_ids[c]).style.color = "blue";
        document.getElementById(all_ids[d]).style.color = "blue";
        document.getElementById("winner").style.color = "blue";
        document.getElementById("winner").innerHTML = name_of_o + " " + "has won the game";
        game_over = 1;
        document.getElementById("win").play();
    }
    if (played == 9 && game_over == 0) {
        document.getElementById("winner").style.color = "black";
        document.getElementById("winner").innerHTML = "It is a tie";
        game_over = 1;
        document.getElementById("tie").play();
    }
}