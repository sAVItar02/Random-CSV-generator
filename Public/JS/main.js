let col_input = $("#choose");
let col_button = $("#col_button");
let formWrapper = $(".formWrapper");

function GetNoOfElements(col_val) {
    formWrapper.empty();
    console.log("function called");
    let output = ``;
    let i;
    for(i = 0; i < (col_val); i++)
    {
        console.log("loop ran");
        output = `<div class="custom-col">
        <label for="select_${i+1}">Choose column - ${i+1} function</label>
        <select name="function" id="select_${i+1}">
        <option value="Increasing">Increasing</option>
        <option value="Decreasing">Decreasing</option>
        <option value="Random between two constants">Random between two constants</option>
        </select>
        
        <div class="custom-col-wrapper">
        
        <input type="number" id="increasing_input_${i+1}" placeholder="First number">
        
        </div>  
        </div>`;
        formWrapper.append(output);
    }
    
    
}

col_button.on('click', function(e) {
    e.preventDefault();
    col_val = col_input.val();
    console.log(col_val);
    GetNoOfElements(col_val);
    col_input.val('');
    
    let select_1 = $("#select_1");
    let custom_col_wrapper = $(".custom-col-wrapper");
    
    let increasing = `<input type="number" id="increasing_input_1" placeholder="First number">`;
    let decreasing = `<input type="number" id="decrasing_input_1" placeholder="First 1 number">`;
    let random_bw_2 = `<div class="random_bw_2">
    <input type="number" id="select_1_input_1" placeholder="Constant 1">
    <input type="number" id="select_1_input_2" placeholder="Constant 2">
    </div>`;
    
    select_1.on("change",  function(e) {
        e.preventDefault();
        alert("abc");
        custom_col_wrapper.empty();
        if(select_1.val() == "Increasing")
        {
            custom_col_wrapper.append(increasing);
        }
        else if (select_1.val() == "Decreasing")
        {
            custom_col_wrapper.append(decreasing);
        }
        else if (select_1.val() == "Random between two constants")
        {
            custom_col_wrapper.append(random_bw_2);
        }
    })
})

//----------------------------------------------------------------
// ----------------------SELECT-----------------------------------
//----------------------------------------------------------------