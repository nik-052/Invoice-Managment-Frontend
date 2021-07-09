
$.getJSON('test_json.json', function (data){
    html = ''
        $.each(data, function(key, value){
            html += "<tr>";
            html += "<td> <input type=\"checkbox\" class=\"btnDelete\"></td> "
            html += "<td>" + value["name_customer"] + "</td>";
            html += "<td>" + value["cust_number"]  + "</td>";
            html += "<td>" + value["invoice_id"]   + "</td>";
            html += "<td>" + value["total_open_amount"]  + "</td>";
            html += "<td>" + value["due_in_date"]    + "</td>";
            html += "<td>" + value["clear_date"]    + "</td>";
            html += "<td> \"notes\" </td>";
            html+="</tr>"
        });
        html += "</div>";
        $(".tl").append(html);
    });

    function delpop(){
        document.getElementById("del").classList.toggle("active");
      }
      function editpop(){
        document.getElementById("edit").classList.toggle("active");
      }
      function addpop(){
        document.getElementById("add1").classList.toggle("active");
      }