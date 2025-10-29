let math = "";
document.querySelectorAll(".num-button").forEach(button => {
    button.onclick = function() {
        math = math + button.id
        document.getElementById("output").textContent = math;
    }
});

document.querySelectorAll(".op-button").forEach(button => {
    button.onclick = function() {
        math = math + button.id
        document.getElementById("output").textContent = math;
    }
});

document.getElementById("C").onclick = function() {
    math = "";
    document.getElementById("output").textContent = math;
}

document.getElementById("eval").onclick = function() {
    result = eval(math);
    math = result;
    document.getElementById("output").textContent = math;
}

document.getElementById("back").onclick = function() {
    new_math = "";
    for (let i=0; i<math.length-1; i++) {
        new_math = new_math + math[i];
    }
    math = new_math;
    document.getElementById("output").textContent = math;
}



