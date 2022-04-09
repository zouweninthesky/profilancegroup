import React, { FC } from "react";

interface IconProps {
  id: string;
  width: number;
  height?: number;
  className?: string;
}

const Icon: FC<IconProps> = ({ id, width, height, className }) => {
  const realHeight = height ? height : width;

  return (
    <svg className={className} width={width} height={realHeight}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

export default Icon;
