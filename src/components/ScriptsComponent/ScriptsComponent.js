import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/src/components/game/game.jsx";
    script.async = true;
    script.type = "module";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
