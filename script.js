let top_bar = document.querySelector(".top_bar");
let IsMenuOpen = false;

top_bar.addEventListener("click", (event) => {
  if (event.target.closest(".hamburger_menu")) {
    if (IsMenuOpen === false) {
      top_bar.style.backgroundColor = "#000000";
      top_bar.style.flexDirection = "column";
      top_bar.innerHTML = `
      
      <div class="upperbar">
            <div class="main_logo">
            <img
            src="assets/SVG/main_logo.svg"

                href="spacex.com"
                alt="SpaceX Logo"
              />
            </div>

            <div class="hamburger_menu">
              <img src="assets/SVG/hamburger 1.svg" alt="Hamburger Menu Icon" />
            </div>
          </div>
          <div class="lowerbar">
            <div class="links-phone">
              <a href="#" target="_blank">VEHICLES</a>
              <a href="#" target="_blank">HUMAN SPACELFIGHTS</a>
              <a href="https://starlink.com/" target="_blank">STARLINK</a>
              <a href="https://www.spacex.com/starshield" target="_blank"
                >STARSHEILD</a
              >
              <a href="#" target="_blank">xAI</a>
              <a href="https://terafab.ai/" target="_blank">TERAFAB</a>
              <a href="" target="_blank">COMPANY</a>
              <a href="#" target="_blank">SHOP</a>
            </div>

            
            <div class="top_card_container_phone">
              UPcoming launches
              <div class="card">
                <div class="card_img">
                  <img src="assets/images/starlink_mission.jpg" alt="" />
                </div>
                <div class="card_content">
                  <div class="upper">Starlink Mission</div>
                  <div class="lower">
                    June 15, 2026 19:30 - 23:30 India Time
                  </div>
                </div>
              </div>
              <div class="divider"></div>

              <div class="card">
                <div class="card_img">
                  <img src="assets/images/bluebird_mission.jpg" alt="" />
                </div>
                <div class="card_content">
                  <div class="upper">Bluebird 8-10 Mission</div>
                  <div class="lower">
                    June 17, 2026 13:09 - 14:45 India Time
                  </div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="card_footer">
                <img src="assets/SVG/9_dot.svg" alt="" />
                <p>ALL UPCOMING LAUNCHES</p>
              </div>
            
            </div>
            `;
      document.querySelector(".hamburger_menu img").src =
        "assets/SVG/close.svg";
      document.querySelector(".hamburger_menu img").style.filter =
        "brightness(0)";
      document.querySelector(".text_page1").style.display = "none";
      IsMenuOpen = true;
      top_bar.style.height = "100vh";
      top_bar.style.overflowY = "auto";
      top_bar.style.justifyContent = "flex-start"
      top_bar.style.gap = "30px"
      document.body.style.overflow = "hidden";
      document.querySelectorAll(".card").forEach((card) => {
        card.style.setProperty("display", "flex", "important");
      });
    } else {
      top_bar.style.background =
        "linear-gradient(180deg, rgba(0, 0, 0, 0.606), rgba(121, 121, 121, 0))";
      top_bar.style.flexDirection = "row";
      top_bar.style.height = "fit-content";
      document.querySelector(".text_page1").style.display = "block";
      document.body.style.overflow = "auto";
      top_bar.style.justifyContent = "space-between"

      top_bar.innerHTML = `
        <div class="main_logo">
            <img
            src="assets/SVG/main_logo.svg"
            href="spacex.com"
            alt="SpaceX Logo"
            />
          </div>
         
          <div class="links">
            <a href="#" target="_blank">VEHICLES</a>
            <a href="#" target="_blank">HUMAN SPACELFIGHTS</a>
            <a href="https://starlink.com/" target="_blank">STARLINK</a>
            <a href="https://www.spacex.com/starshield" target="_blank"
            >STARSHEILD</a
            >
            <a href="#" target="_blank">xAI</a>
            <a href="https://terafab.ai/" target="_blank">TERAFAB</a>
            <a href="" target="_blank">COMPANY</a>
            <a href="#" target="_blank">SHOP</a>
          </div>
          <div class="select">
            UPCOMING LAUNCHES
            <img src="assets/SVG/downArrow.svg" alt="Arrow Down Icon" />
          </div>
          <a href="https://www.spacex.com/launches" class="card" target="_blank">
          <div class="top_card_container">
            <div class="card">
              <div class="card_img">
                <img src="assets/images/starlink_mission.jpg" alt="" />
              </div>
              <div class="card_content">
                <div class="upper">Starlink Mission</div>
                <div class="lower">June 15, 2026 19:30 - 23:30 India Time</div>
              </div>
            </div>
            <div class="divider"></div>

            <div class="card">
              <div class="card_img">
                <img src="assets/images/bluebird_mission.jpg" alt="" />
              </div>
              <div class="card_content">
                <div class="upper">Bluebird 8-10 Mission</div>
                <div class="lower">June 17, 2026 13:09 - 14:45 India Time</div>
              </div>
            </div>
            <div class="divider"></div>

            <div class="card_footer">
              <img src="assets/SVG/9_dot.svg" alt="" />
              <p>ALL UPCOMING LAUNCHES</p>
            </div>
          </div>
        </a>
         <div class="hamburger_menu">
            <img src="assets/SVG/hamburger 1.svg" alt="Hamburger Menu Icon" />
          </div>
        </div>
            `;
      IsMenuOpen = false;
    }

  }
     if (event.target.closest(".top_card_container_phone")) {
    window.open("https://www.spacex.com/launches", "_blank");
  }


});
