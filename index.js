var bill;
var tip=0;
var numberOfPeople;
var tipAmout;
var total;

$('.bill-input').on('input', function() {
  bill = Number($(".bill-input").val());
  resultValue();
});

  $(".tip-btn").click(function(){
    tipButtontext = $(this).text();
    tip = Number(tipButtontext.match(/\d+/g));
    $(".tip-custom").val("");
    $(".tip-btn").removeClass("tip-btn-active");
    $(this).addClass("tip-btn-active");
    resultValue();
});

$(".tip-custom").click(function(){
  $(".tip-btn").removeClass("tip-btn-active");
});

$('.tip-custom').on('input', function() {
  tip = Number($(".tip-custom").val());
  resultValue();
});

$('.noOfPeople').on('input', function() {
  numberOfPeople = Number($(".noOfPeople").val());
  resultValue();
});

function resultValue(){
  tipAmout = parseFloat(((bill * tip) / 100) / numberOfPeople).toFixed(2);
  total = parseFloat((bill+tipAmout*numberOfPeople)/numberOfPeople).toFixed(2);
  if (bill !== undefined){
     if (numberOfPeople !== 0 && numberOfPeople !== undefined) {
      $(".tip-amount").text("$" + tipAmout);
      $(".total-tip").text("$" + total);
      $(".reset").addClass("reset-active");
      $(".reset").click(function(){
        $(".tip-amount").text("$0.00");
        $(".total-tip").text("$0.00");
        bill = undefined;
        tip = 0;
        numberOfPeople = undefined;
        tipAmout = undefined;
        total = undefined;
        $("input").val('');
        $(".tip-btn").removeClass("tip-btn-active");
      });
    }
  }
  if (numberOfPeople === 0 ) {
    $(".error-label").css("display", "flex");
    $(".noOfPeople").addClass("noOfPeople-active");
    $(".tip-amount").text("$0.00");
    $(".total-tip").text("$0.00");
    $(".reset").removeClass("reset-active");
  } else {
    $(".error-label").css("display", "");
    $(".noOfPeople").removeClass("noOfPeople-active");


  }
}
