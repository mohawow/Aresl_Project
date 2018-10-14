var dims,demosticWeight,internationalWeight,totalCost;
function renderResults(totalCost){
    $('.shippingForm').html(`
            <div class='qoute'>
                <p>The result is: ${Math.round(totalCost)}</p>
            </div>
            `);
};

function calculateDims() {
    let h = $('#h').val();
    let w = $('#w').val();
    let l = $('#l').val();
    console.log(h+w+l);
    dims =parseInt(h)*parseInt(w)*parseInt(l);
    console.log(dims);
    valumetricWeight(dims);
};
function valumetricWeight(dims) {
    demosticWeight= dims/166;
    internationalWeight= dims/139;
    console.log(demosticWeight);
    console.log(internationalWeight);
    totalCostCal(demosticWeight);
};
function totalCostCal(demosticWeight){
    let weight = $('#weight').val();
    totalCost = demosticWeight*parseInt(weight);
    console.log(totalCost);
    console.log(weight);
    renderResults(totalCost);
};
function formSubmission() {
    $('.shippingForm').submit(function(e) {
        e.preventDefault();
        calculateDims();
        $('.singupForm').addClass('block');
        // $('.shippingForm').html('<p>qoute</p>')
        return false;
    });
};
$(formSubmission);