import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer style={{ height: "auto", backgroundColor: "#212121" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          textAlign: "left",
          color: "white",
          placeItems: "center",
          paddingTop: "30px",
          fontWeight: "300",
        }}
      >
        <div>
          <h4 style={{ fontWeight: "600", paddingBottom: "10px" }}>
            Our top cities
          </h4>
          <h4>San Fransisco</h4>
          <h4>Miami</h4>
          <h4>San Diego</h4>
          <h4>East Bay</h4>
          <h4>Long Beach</h4>
        </div>
        <div>
          <h4>Los Angeles</h4>
          <h4>Washington DC</h4>
          <h4>Seattle</h4>
          <h4>Portland</h4>
          <h4>Nashville</h4>
        </div>
        <div>
          <h4>NY City</h4>
          <h4>Orange County</h4>
          <h4>Atalanta</h4>
          <h4>Charlotte</h4>
          <h4>Denver</h4>
        </div>
        <div>
          <h4>Chicago</h4>
          <h4>Phoenix</h4>
          <h4>Las Vegas</h4>
          <h4>Sacramento</h4>
          <h4>Okalahoma City</h4>
        </div>
        <div>
          <h4>Columbus</h4>
          <h4>New Mexico</h4>
          <h4>Albuquerque</h4>
          <h4>Sacramento</h4>
          <h4>New Orleans</h4>
        </div>
      </div>
      <hr
        style={{
          marginLeft: "30px",
          marginRight: "30px",
          marginTop: "30px",
          opacity: "50%",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          textAlign: "left",
          color: "white",
          placeItems: "center",
          paddingTop: "30px",
          fontWeight: "300",
        }}
      >
        <div>
          <h4 style={{ fontWeight: "600", paddingBottom: "10px" }}>Company</h4>
          <h4>About us</h4>
          <h4>Team</h4>
          <h4>Careers</h4>
          <h4>Blog</h4>
        </div>
        <div>
          <h4 style={{ fontWeight: "600", paddingBottom: "10px" }}>Conatact</h4>
          <h4>Help & Support</h4>
          <h4>Partner with us </h4>
          <h4>Ride with us</h4>
        </div>
        <div>
          <h4 style={{ fontWeight: "600", paddingBottom: "10px" }}>Legal</h4>
          <h4>Terms & Conditions</h4>
          <h4>Refund & Cancellation</h4>
          <h4>Privacy Policy</h4>
          <h4>Cookie Policy</h4>
        </div>

        <div style={{ gridColumn: "span 2", paddingBottom: "30px" }}>
          <h4 style={{ fontWeight: "400", paddingBottom: "10px" }}>
            Follow US
          </h4>

          <div style={{ display: "flex", gap: "10px" }}>
            <FacebookIcon style={{ color: "#1877f2", fontSize: 20 }} />
            <TwitterIcon style={{ color: "#1da1f2", fontSize: 20 }} />
            <InstagramIcon style={{ color: "#e4405f", fontSize: 20 }} />
          </div>
          <h4>Receive exclusive offers in your mailbox</h4>
          <div class="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Enter Your Address"
              class="p-3 rounded-l-md text-gray-700"
            />
            <button class="bg-red-500 p-3 rounded-r-md">Send</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
