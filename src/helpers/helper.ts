import { useEffect, useState } from "react";

      

export const QualityImg = (id:number) => {
  const [imgSrc, setImgSrc] = useState<string|null>(null);
  const [imgLoaded, setImgLoaded] = useState<Boolean>(false);
  const [imgError, setImgError] = useState<any>(false);



  return { imgSrc, imgLoaded, imgError };
} 