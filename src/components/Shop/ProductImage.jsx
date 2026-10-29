import { useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";
export default function ProductImage({
  src,
  alt,
  className = "",
  eager = false,
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  return !src || failed ? (
    <div
      className={`ww-image-placeholder ${className}`}
      role="img"
      aria-label={alt}
    >
      <FiImage aria-hidden="true" />
      <span>Image unavailable</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
