document
        .querySelector("#addbutton")
        .addEventListener("click", function () {
          var container = document.querySelector("#container");
          var addButton = document.querySelector("#addbutton");
          var name = document.querySelector("#namm");
          var number = document.querySelector("#office");
          if (container.classList.contains("hidden")) {
            container.classList.remove("hidden");
            document.getElementById("srh").classList.add("hidden");

            addButton.src =
              "https://th.bing.com/th/id/R.0edfe8f71b8b9948d1659ded3982d51a?rik=MRol9lEsJZ7f1w&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f06%2fsubmit-button_299733.jpg&ehk=uFrOoqIE1FbXC0IH3I6O3s9YzLJoIGA%2fUqWfcywLolQ%3d&risl=&pid=ImgRaw&r=0";

            var newBtn = addButton;

            newBtn.classList.add("imgg");
          } else {
            var N = name.value;
            var P = number.value;
            if (N && P) {
              var profile = document.createElement("img");
              profile.scr =
                "https://th.bing.com/th?id=OIP.ZGCy-6F4IjzcfqtkHnI82QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";

              profile.height = "50";
              profile.width = "50";
              profile.borderRadius = "50%";

              var areaDiv = document.createElement("div");
              areaDiv.classList.add("area");

              var addListDiv = document.createElement("div");
              addListDiv.classList.add("addlist");

              var para = document.createElement("p");
              para.id = "name";
              para.textContent = N;

              var phoneN = document.createElement("p");
              phoneN.id = "phonenum";
              phoneN.textContent = P;

              areaDiv.appendChild(profile);
              addListDiv.appendChild(para);
              addListDiv.appendChild(phoneN);

              areaDiv.appendChild(addListDiv);

              document.getElementById("listcontent").appendChild(areaDiv);

              N.value = "";
              P.value = "";

              container.classList.add("hidden");

              document.getElementById("srh").classList.remove("hidden");
            } else {
              alert("Please enter both fields");
            }
          }
        });

      document.getElementById("srh").addEventListener("input", function () {
        //let search = document.getElementById("srh");

        let searchQuary = this.value.toLowerCase();

        var area = document.querySelectorAll(".area");
        area.forEach(function (area) {
          var name = area
            .querySelector(".addlist p#name")
            .textContent.toLowerCase();
          var workLocation = area
            .querySelector(".addlist p#phonenum")
            .textContent.toLowerCase();

          var displayStyle =
            name.includes(searchQuary) || workLocation.includes(searchQuary)
              ? "flex"
              : "none";

          area.style.display = displayStyle;
        });
      });