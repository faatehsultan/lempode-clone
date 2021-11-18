// reset views
(() => {
  $(document).ready(() => {
    $(".view").hide();
    $("#view_dashboard").show();

    // adding click listeners for toggling
    $("#homeBtn").click(() => {
      $(".view").hide();
      $("#view_dashboard").show();
    });
    $("#linkedinBtn").click(() => {
      $(".view").hide();
      $("#view_linkedin").show();
    });
    $("#podsBtn").click(() => {
      $(".view").hide();
      $("#view_pods").show();
    });
    $("#notificationsBtn").click(() => {
      $(".view").hide();
      $("#view_notifications").show();
    });
  });
})();
