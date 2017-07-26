// Roomlist data array for filling in info box
var roomListData = [];
var captionListData = [];

// DOM Ready =============================================================
 $(document).ready(function() {


    // Populate the room table on initial page load
    populateRoomList();

    // Populate the caption table on initial page load
    populateCaptionList();

  });

// Functions =============================================================

// Fill Roomlist table with data
function populateRoomList() {
      var tableContent = '';
     $.getJSON('/roomlist/', function(data){
       roomListData = data;
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="/room=' + this.roomnumber + '" class="linkshowuser" rel="' + this.roomnumber + '">' + this.roomnumber + '</a></td>';
            tableContent += '<td><a href="/room=' + this.roomnumber + '" class="linkshowuser" rel="' + this.roomnumber + '">' + this.roomname + '</a></td>';
            tableContent += '</tr>';
        });
        $('#roomList table tbody').html(tableContent);
        });
};



// Fill Captionlist table with data
function populateCaptionList() {
  var tableContent = '';
      $.getJSON('/1' + result, function(data){
         captionListData = data;
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="/' + this.reference + '" class="linkshowuser" rel="' + this.reference + '">' + this.reference + '</a></td>';
            tableContent += '<td><a href="/' + this.reference + '" class="linkshowuser" rel="' + this.reference + '">' + this.title + '</a></td>';
            tableContent += '</tr>';
        });
        $('#captionList table tbody').html(tableContent);
      });
};
