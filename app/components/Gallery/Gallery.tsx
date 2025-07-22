// /*
// All of the code in this component are copied and modified from:
// https://github.com/neptunian/react-photo-gallery
// */
//
// import { useLayoutEffect, useRef, useState, Component } from "react";
// import { computeRowLayout } from "./Utils/compute-layout";
// import { findIdealNodeSearch } from "./Utils/findIdealNodeSearch";
//
// export interface IPhoto {
//   src: string;
//   width: number;
//   height: number;
//   alt: string;
// }
//
// interface GalleryProps {
//   photos: IPhoto[];
// }
//
// // Error boundary to catch photo viewer errors
// class PhotoErrorBoundary extends Component<{children: React.ReactNode}, {hasError: boolean}> {
//   constructor(props: {children: React.ReactNode}) {
//     super(props);
//     this.state = { hasError: false };
//   }
//
//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }
//
//   componentDidCatch(error: Error, errorInfo: any) {
//     console.warn('Photo viewer error caught:', error, errorInfo);
//   }
//
//   render() {
//     if (this.state.hasError) {
//       // Fallback to basic images without modal functionality
//       return this.props.children;
//     }
//
//     return this.props.children;
//   }
// }
//
// // Simple modal component without portals
// const PhotoModal = ({ src, alt, isOpen, onClose }: { src: string; alt: string; isOpen: boolean; onClose: () => void }) => {
//   if (!isOpen) return null;
//
//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div className="relative max-w-4xl max-h-full p-4">
//         <img
//           src={src}
//           alt={alt}
//           className="max-w-full max-h-full object-contain"
//           onClick={(e) => e.stopPropagation()}
//         />
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white text-3xl hover:text-[#6621a6]"
//           aria-label="Close"
//         >
//           ×
//         </button>
//       </div>
//     </div>
//   );
// };
//
// const Gallery = ({ photos }: GalleryProps) => {
//   const [containerWidth, setContainerWidth] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState<IPhoto | null>(null);
//   const galleryEl = useRef<HTMLDivElement | null>(null);
//
//   useLayoutEffect(() => {
//     setIsMounted(true);
//     let animationFrameID: number | null = null;
//     let isCleanedUp = false;
//
//     const observer = new ResizeObserver((entries) => {
//       // only do something if width changes and component hasn't been cleaned up
//       if (isCleanedUp || !isMounted) return;
//
//       const newWidth = entries[0].contentRect.width;
//       if (containerWidth !== newWidth) {
//         // Cancel any pending animation frame before setting a new one
//         if (animationFrameID) {
//           window.cancelAnimationFrame(animationFrameID);
//         }
//
//         // put in an animation frame to stop "benign errors" from
//         // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
//         animationFrameID = window.requestAnimationFrame(() => {
//           if (!isCleanedUp && isMounted) {
//             setContainerWidth(Math.floor(newWidth));
//           }
//         });
//       }
//     });
//
//     if (galleryEl.current) {
//       observer.observe(galleryEl.current);
//     }
//
//     return () => {
//       setIsMounted(false);
//       isCleanedUp = true;
//       observer.disconnect();
//       if (animationFrameID) {
//         window.cancelAnimationFrame(animationFrameID);
//       }
//     };
//   }, []); // Only run once on mount
//
//   if (!containerWidth) return <div ref={galleryEl}>&nbsp;</div>;
//
//   const width = containerWidth - 1;
//   const targetRowHeight = 300;
//   let limitNodeSearch = 2;
//   if (containerWidth >= 450) {
//     limitNodeSearch = findIdealNodeSearch({ containerWidth, targetRowHeight });
//   }
//   const thumbs: IPhoto[] = computeRowLayout({
//     containerWidth: width,
//     limitNodeSearch,
//     targetRowHeight,
//     margin: 2,
//     photos,
//   });
//
//   return (
//     <PhotoErrorBoundary>
//       <div ref={galleryEl} className="flex flex-wrap">
//         {thumbs.map((thumb, index) => {
//           return (
//             <img
//               key={index}
//               src={thumb.src}
//               alt={thumb.alt}
//               width={thumb.width}
//               height={thumb.height}
//               className="m-0.5 cursor-pointer hover:opacity-80 transition-opacity"
//               onClick={() => setSelectedPhoto(thumb)}
//             />
//           );
//         })}
//       </div>
//
//       <PhotoModal
//         src={selectedPhoto?.src || ""}
//         alt={selectedPhoto?.alt || ""}
//         isOpen={!!selectedPhoto}
//         onClose={() => setSelectedPhoto(null)}
//       />
//     </PhotoErrorBoundary>
//   );
// };
//
// export default Gallery;
