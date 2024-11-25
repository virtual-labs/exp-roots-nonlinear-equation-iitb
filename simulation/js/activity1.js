let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Roots of Equation: Non-linear equation (Successive Substitution Method)</h4>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    a = Math.floor(Math.random() * 4) + 8;
    b = Math.floor(Math.random() * 5) + 55;
    // a = 10;
    // b = 57;
    console.log("Random number a= ", a);
    console.log("Random number b= ", b);
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <div id="table-div"></div>
        <div><span style='display: inline-block;' >$$ x_1^2 + x_1x_2 = ${a} $$</span> <span style='margin-left: 4%'>..... eq 1</span></div>
        <div><span style='display: inline-block;' >$$ x_2 + 3x_1 x_2^2 = ${b} $$</span> <span style='margin-left: 4%'>..... eq 2</span></div>
        <p style="text-align: left; font-weight: 600">Solve the non-linear set of equations</p>
        <p style="text-align: left;">Take initial guess : x<sub>1</sub>=1.5, x<sub>2</sub>=3.5</p>
        <p style="text-align: left;">From eq 1, we get</p>
        <div><span style='display: inline-block;' >$$ x_1 = \\sqrt{10 - x_1x_2} $$</span> <span style='margin-left: 4%'>..... eq A</span></div>
        
        <p style="text-align: left">From eq 2, we get</p>
        <div><span style='display: inline-block;' >$$ x_2 = \\sqrt \\frac{57 - x_2}{3x_1} $$</span> <span style='margin-left: 4%'>..... eq B</span></div>
        

        <div id="l-ind-div-act1" style="display:block; margin-top: 3%">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    
                </div>
                <div class="col-3">
                    <p style='font-size: 16px; text-align: right; font-weight: 600'>From eq A, we get X<sub>1</sub></p>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'></p>
                </div>
                <div class="col-3">
                <p style='font-size: 16px; text-align: right; font-weight: 600'>From eq B, we get X<sub>2</sub></p>
                </div>
            </div>

            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'></p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>1.</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a21-inp'> <span id='a21-val-sp'></span>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'></p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'></p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a22-inp'> <span id='a22-val-sp'></span>
                </div>
            </div>

            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'></p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>2.</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a23-inp'> <span id='a23-val-sp'></span>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'></p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'></p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a24-inp'> <span id='a24-val-sp'></span>
                </div>
            </div>

            <div id="xvals-div" style="display:none">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'>3.</p>
                    </div>
                    <div class="col-2">
                        <span id='a25-val-sp'></span>
                    </div>

                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'></p>
                    </div>
                    <div class="col-2">
                        <span id='a26-val-sp'></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'>4.</p>
                    </div>
                    <div class="col-2">
                        <span id='a27-val-sp'></span>
                    </div>

                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'></p>
                    </div>
                    <div class="col-2">
                        <span id='a28-val-sp'></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'>5.</p>
                    </div>
                    <div class="col-2">
                        <span id='a29-val-sp'></span>
                    </div>

                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'></p>
                    </div>
                    <div class="col-2">
                        <span id='a30-val-sp'></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'>6.</p>
                    </div>
                    <div class="col-2">
                        <span id='a31-val-sp'></span>
                    </div>

                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'></p>
                    </div>
                    <div class="col-2">
                        <span id='a32-val-sp'></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'>7.</p>
                    </div>
                    <div class="col-2">
                        <span id='a33-val-sp'></span>
                    </div>

                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'></p>
                    </div>
                    <div class="col-2">
                        <span id='a34-val-sp'></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'>8.</p>
                    </div>
                    <div class="col-2">
                        <span id='a35-val-sp'></span>
                    </div>

                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'></p>
                    </div>
                    <div class="col-2">
                        <span id='a36-val-sp'></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'>9.</p>
                    </div>
                    <div class="col-2">
                        <span id='a37-val-sp'></span>
                    </div>

                    <div class="col-1"></div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px; text-align: right'></p>
                    </div>
                    <div class="col-1" style="padding:0">
                        <p style='font-size: 16px;'></p>
                    </div>
                    <div class="col-2">
                        <span id='a38-val-sp'></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div style='text-align: center; margin-top:3%'><button class='btn btn-info std-btn' id='temp-btn-equation2' onclick='verify_x_vals();' >Verify</button></div>
                </div>
            </div>
        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    calculations();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculations() {
    x1 = 1.5;
    x2 = 3.5;
    X1 = [];
    X2 = [];
    X1.push(x1);
    X2.push(x2);
    for (let i = 1; i < 10; i++) {
        x1 = Math.sqrt(a - x1 * x2);
        x2 = Math.sqrt((b - x2) / (3 * x1));
        X1.push(x1);
        X2.push(x2);
    }
    console.log("X1 = ", X1);
    console.log("X2 = ", X2);
}
function verify_x_vals() {
    let btn = document.getElementById('temp-btn-equation2');
    let inp1 = document.getElementById('a21-inp');
    let sp1 = document.getElementById('a21-val-sp');
    let inp2 = document.getElementById('a22-inp');
    let sp2 = document.getElementById('a22-val-sp');
    let inp3 = document.getElementById('a23-inp');
    let sp3 = document.getElementById('a23-val-sp');
    let inp4 = document.getElementById('a24-inp');
    let sp4 = document.getElementById('a24-val-sp');
    // let inp5: HTMLInputElement = <HTMLInputElement> document.getElementById('a25-inp');
    let sp5 = document.getElementById('a25-val-sp');
    // let inp6: HTMLInputElement = <HTMLInputElement> document.getElementById('a26-inp');
    let sp6 = document.getElementById('a26-val-sp');
    // let inp7: HTMLInputElement = <HTMLInputElement> document.getElementById('a27-inp');
    let sp7 = document.getElementById('a27-val-sp');
    // let inp8: HTMLInputElement = <HTMLInputElement> document.getElementById('a28-inp');
    let sp8 = document.getElementById('a28-val-sp');
    // let inp9: HTMLInputElement = <HTMLInputElement> document.getElementById('a29-inp');
    let sp9 = document.getElementById('a29-val-sp');
    // let inp10: HTMLInputElement = <HTMLInputElement> document.getElementById('a30-inp');
    let sp10 = document.getElementById('a30-val-sp');
    // let inp11: HTMLInputElement = <HTMLInputElement> document.getElementById('a31-inp');
    let sp11 = document.getElementById('a31-val-sp');
    // let inp12: HTMLInputElement = <HTMLInputElement> document.getElementById('a32-inp');
    let sp12 = document.getElementById('a32-val-sp');
    // let inp13: HTMLInputElement = <HTMLInputElement> document.getElementById('a33-inp');
    let sp13 = document.getElementById('a33-val-sp');
    // let inp14: HTMLInputElement = <HTMLInputElement> document.getElementById('a34-inp');
    let sp14 = document.getElementById('a34-val-sp');
    // let inp15: HTMLInputElement = <HTMLInputElement> document.getElementById('a35-inp');
    let sp15 = document.getElementById('a35-val-sp');
    // let inp16: HTMLInputElement = <HTMLInputElement> document.getElementById('a36-inp');
    let sp16 = document.getElementById('a36-val-sp');
    // let inp17: HTMLInputElement = <HTMLInputElement> document.getElementById('a37-inp');
    let sp17 = document.getElementById('a37-val-sp');
    // let inp18: HTMLInputElement = <HTMLInputElement> document.getElementById('a38-inp');
    let sp18 = document.getElementById('a38-val-sp');
    // let inp19: HTMLInputElement = <HTMLInputElement> document.getElementById('a39-inp');
    //let sp19: HTMLSpanElement = <HTMLSpanElement> document.getElementById('a39-val-sp');
    // let inp20: HTMLInputElement = <HTMLInputElement> document.getElementById('a40-inp');
    //let sp20: HTMLSpanElement = <HTMLSpanElement> document.getElementById('a40-val-sp');
    console.log(X1[1], X2[1], X1[2], X2[2]);
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(4)), parseFloat(X1[1].toFixed(4)))) {
        alert('X1(1) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(4)), parseFloat(X2[1].toFixed(4)))) {
        alert('X2(1) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(4)), parseFloat(X1[2].toFixed(4)))) {
        alert('X1(2) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(4)), parseFloat(X2[2].toFixed(4)))) {
        alert('X2(2) value is incorrect, calculate again.');
        return;
    }
    // if(!verify_values(parseFloat(parseFloat(inp5.value).toFixed(4)), parseFloat(X1[2].toFixed(4)))) {
    //     alert('X1(3) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp6.value).toFixed(4)), parseFloat(X2[2].toFixed(4)))) {
    //     alert('X2(3) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp7.value).toFixed(4)), parseFloat(X1[3].toFixed(4)))) {
    //     alert('X1(4) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp8.value).toFixed(4)), parseFloat(X2[3].toFixed(4)))) {
    //     alert('X2(4) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp9.value).toFixed(4)), parseFloat(X1[4].toFixed(4)))) {
    //     alert('X1(5) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp10.value).toFixed(4)), parseFloat(X2[4].toFixed(4)))) {
    //     alert('X2(5) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp11.value).toFixed(4)), parseFloat(X1[5].toFixed(4)))) {
    //     alert('X1(6) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp12.value).toFixed(4)), parseFloat(X2[5].toFixed(4)))) {
    //     alert('X2(6) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp13.value).toFixed(4)), parseFloat(X1[6].toFixed(4)))) {
    //     alert('X1(7) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp14.value).toFixed(4)), parseFloat(X2[6].toFixed(4)))) {
    //     alert('X2(7) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp15.value).toFixed(4)), parseFloat(X1[7].toFixed(4)))) {
    //     alert('X1(8) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp16.value).toFixed(4)), parseFloat(X2[7].toFixed(4)))) {
    //     alert('X2(8) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp17.value).toFixed(4)), parseFloat(X1[8].toFixed(4)))) {
    //     alert('X1(9) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp18.value).toFixed(4)), parseFloat(X2[8].toFixed(4)))) {
    //     alert('X2(9) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp19.value).toFixed(4)), parseFloat(X1[9].toFixed(4)))) {
    //     alert('X1(10) value is incorrect, calculate again.');
    //     return;
    // }
    // if(!verify_values(parseFloat(parseFloat(inp20.value).toFixed(4)), parseFloat(X2[9].toFixed(4)))) {
    //     alert('X2(10) value is incorrect, calculate again.');
    //     return;
    // }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${X1[1].toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${X2[1].toFixed(2)}`;
    inp3.remove();
    sp3.innerText = `${X1[2].toFixed(2)}`;
    inp4.remove();
    sp4.innerText = `${X2[2].toFixed(2)}`;
    let div = (document.getElementById('xvals-div'));
    div.style.display = 'block';
    //inp5.remove();
    sp5.innerText = `${X1[3].toFixed(2)}`;
    //inp6.remove();
    sp6.innerText = `${X2[3].toFixed(2)}`;
    //inp7.remove();
    sp7.innerText = `${X1[4].toFixed(2)}`;
    //inp8.remove();
    sp8.innerText = `${X2[4].toFixed(2)}`;
    //inp9.remove();
    sp9.innerText = `${X1[5].toFixed(2)}`;
    //inp10.remove();
    sp10.innerText = `${X2[5].toFixed(2)}`;
    //inp11.remove();
    sp11.innerText = `${X1[6].toFixed(2)}`;
    //inp12.remove();
    sp12.innerText = `${X2[6].toFixed(2)}`;
    //inp13.remove();
    sp13.innerText = `${X1[7].toFixed(2)}`;
    //inp14.remove();
    sp14.innerText = `${X2[7].toFixed(2)}`;
    //inp15.remove();
    sp15.innerText = `${X1[8].toFixed(2)}`;
    //inp16.remove();
    sp16.innerText = `${X2[8].toFixed(2)}`;
    //inp17.remove();
    sp17.innerText = `${X1[9].toFixed(2)}`;
    //inp18.remove();
    sp18.innerText = `${X2[9].toFixed(2)}`;
    //inp19.remove();
    //sp19.innerText = `${X1[9].toFixed(2)}`;
    //inp20.remove();
    //sp20.innerText = `${X2[9].toFixed(2)}`;
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-equation2'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map