import { mount as chemSphereMount } from "chemSphere/ChemSphereApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    chemSphereMount(ref.current);
  }, []);

  return <div ref={ref} />;
};
