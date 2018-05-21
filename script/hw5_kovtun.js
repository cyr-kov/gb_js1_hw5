function drawBoard() {
    var place = document.getElementById("desktop");
    var chessBoard = document.createElement("table");
    chessBoard.style.borderCollapse="collapse";
    chessBoard.style.border="3px solid black";
    tbody = chessBoard.appendChild(document.createElement("tbody"));
    var chessLayout=[["&#x265c","&#x265e","&#x265d","&#x265b","&#x265a","&#x265d","&#x265e","&#x265c"],
                    ["&#x265f","&#x265f","&#x265f","&#x265f","&#x265f","&#x265f","&#x265f","&#x265f"],
                    ["","","","","","","",""],
                    ["","","","","","","",""],
                    ["","","","","","","",""],
                    ["","","","","","","",""],
                    ["&#x2659","&#x2659","&#x2659","&#x2659","&#x2659","&#x2659","&#x2659","&#x2659"],
                    ["&#x2656","&#x2658","&#x2657","&#x2655","&#x2654","&#x2657","&#x2658","&#x2656"]]
      for (var i = 0; i < 10; i++) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (var j = 0; j < 10; j++) {
            var td = document.createElement("td");
            td.style.height = "20px";
            if ((i === 0 || i === 9) && j > 0 && j < 9) {
                var div=document.createElement("div");
                div.innerText = String.fromCharCode(("A".charCodeAt(0) + j - 1));
                div.style.textAlign="center";
                td.appendChild(div);
                td.style.borderTop="1px solid black";
                td.style.width = "50px";
                if (i === 0) {
                    td.style.borderTop="none";
                    td.style.borderBottom="1px solid black";
                    div.style.transform = "rotate(180deg)";
                }
            }
            else {
                if (j > 0 && j < 9) {
                    td.style.width = "50px";
                    td.style.height = "50px";
                    td.style.backgroundColor = (((i + j) % 2) === 0) ? "#ffffff" : "#707070";
                    div=document.createElement("div");
                    div.innerHTML=chessLayout[i-1][j-1];
                    div.style.textAlign="center";
                    div.style.fontSize="40px";
                    var outlineColor=(((i + j) % 2) === 0) ? "#000000" : "#ffffff";
                    var isBlack=chessLayout[i-1][j-1].charCodeAt(6)>57;
                    div.style.color=isBlack ? "#000000":"#ffffff";
                    div.style.textShadow="-1px -1px 0 "+ outlineColor+", 1px -1px 0 "+outlineColor+",-1px 1px 0 " +
                        outlineColor+", 1px 1px 0 "+ outlineColor;
                    if (isBlack) div.style.textShadow=((((i + j) % 2) === 0))?"": div.style.textShadow;
                    if (!isBlack) div.style.textShadow=((((i + j) % 2) === 0))? div.style.textShadow:"";
                    div.style.fontWeight="100";
                    td.appendChild(div);
                }
                else {
                    td.style.width = "20px";
                    if (i > 0 && i < 9 && (j === 0 || j === 9)) {
                        td.style.borderRight="1px solid black";
                        div=document.createElement("div");
                        div.innerText = ""+(9-i);
                        div.style.textAlign="center";
                        td.appendChild(div);
                        if (j === 9) {
                            td.style.borderLeft="1px solid black";
                            td.style.borderRight="none";
                            div.style.transform = "rotate(180deg)";
                        }
                    }
                }
            }
            td.style.alignContent="center";
            tr.appendChild(td);
        }
    }
    place.appendChild(chessBoard);
}