import React, { useEffect } from "react";

const LandingText = () => {
  return (
    <div className="flex h-screen place-content-center bg-transparent">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.backgroundColor = "white"
        this.style.filter = "blur(1px)"
        this.style.color = "rgb(128,128,128)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(0, 0, 0)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(0, 0, 0)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "400";
        this.style.backgroundColor = "white"
        this.style.filter = "blur()"
        this.style.color = "#b794f4";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "400";
          leftNeighbor.style.color = "#b794f4";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "#b794f4";
        }
      });
    });
  }, []);

  return (
    <div className="flex:col">
    <h2 className="hover-text text-center text-8xl font-thin text-purple-400">
      <Text>RNSIT Sports Club</Text>
      
    </h2>
     <h3 className=" mt-[50px] hover-text text-center  text-3xl font-thin text-indigo-300">
     <Text>Join</Text>
     
   </h3>
   </div>
 
  );
};

const Text = ({ children, props }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: " 0.35s font-weight, 0.35s color",
            fontWeight: "400"
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default LandingText;
