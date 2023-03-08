$(function() {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {},
    submitSuccess: function($form, event) {
      $("#btnSubmit").attr("disabled", true);
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name;
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $.ajax({
        url: "//././mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          $("#btnSubmit").attr("disabled", false);
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success').append('</div>');
          $('#contactForm').trigger("reset");
        },
        error: function() {
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
          $('#success > .alert-danger').append('</div>');
          $('#contactForm').trigger("reset");
        },
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });
  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
$('#name').focus(function() {
  $('#success').html('');
});

! function(o) {
  "use strict";
  o(".page-scroll a").bind("click", function(t) {
    var l = o(this);
    o("html, body").stop().animate({
      scrollTop: o(l.attr("href")).offset().top - 50
    }, 1250, "easeInOutExpo"), t.preventDefault()
  }), o("body").scrollspy({
    target: ".navbar-fixed-top",
    offset: 51
  }), o(".navbar-collapse ul li a").click(function() {
    o(".navbar-toggle:visible").click()
  }), o("#mainNav").affix({
    offset: {
      top: 100
    }
  }), o(function() {
    o("body").on("input propertychange", ".floating-label-form-group", function(t) {
      o(this).toggleClass("floating-label-form-group-with-value", !!o(t.target).val())
    }).on("focus", ".floating-label-form-group", function() {
      o(this).addClass("floating-label-form-group-with-focus")
    }).on("blur", ".floating-label-form-group", function() {
      o(this).removeClass("floating-label-form-group-with-focus")
    })
  })
}(jQuery);