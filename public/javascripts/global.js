// Roomlist data array for filling in info box
var roomListData = [];
var captionListData = [];

// DOM Ready =============================================================
 $(document).ready(function() {


    // Populate the room table on initial page load
    populateRoomList();

  });


// Functions =============================================================

// Fill Roomlist table with data
function populateRoomList() {
      var tableContent = '';
     $.getJSON('/roomlist/', function(data){
       roomListData = data;
        $.each(data, function(){
            tableContent += '<tr id= '+ this.roomnumber +'>';
            tableContent += '<td id= '+ this.roomnumber +'>' + this.roomnumber + '</td>';
            tableContent += '<td id= '+ this.roomnumber +'>' + this.roomname + '</td>';
            tableContent += '</tr>';
        });
        $('#roomList table tbody').html(tableContent);

      // add the onclick URL and function
        $(document).ready(function(){
          $('#roomList table tbody tr').click(function(){

          // Create cookie on selecting a room
          document.cookie = "room=" + this.id;
          var roomId = this.id;
          redirectRoom(roomId);
          populateCaptionList();
            });
        });
  });
};


function redirectRoom(roomId){
  location.href = '/room='+ roomId;
}

// Fill Captionlist table with data
function populateCaptionList() {
  var tableContent = '';
  var room = document.cookie.replace(/(?:(?:^|.*;\s*)room\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      $.getJSON('/' + room, function(data){
         captionListData = data;
        $.each(data, function(){
          tableContent += '<tr id= ' + this.reference +'>';
          tableContent += '<td id= ' + this.reference +'>' + this.reference + '</td>';
          tableContent += '<td id= ' + this.reference +'>' + this.title + '</td>';
          tableContent += '</tr>';
        });
        $('#captionList table tbody').html(tableContent);
      });
}
