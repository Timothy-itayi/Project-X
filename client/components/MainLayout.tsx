import React from "react";
import MusicPlayer from "./MusicPlayer";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        // Your header implementation goes here
      </header>
      <main>
        {children}
      </main>
      <footer>
        // Your footer implementation goes here
      </footer>
      <MusicPlayer isPlaying={false} setPlaying={function (value: React.SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
          } } />
    </>
  );
};

export default MainLayout;
