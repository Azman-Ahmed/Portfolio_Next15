import React from "react";

const BannerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative backdrop-blur-sm w-full h-96 bg-fixed z-10"
      style={{
        background: "url(/images/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-Black/10 backdrop-blur-sm w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
