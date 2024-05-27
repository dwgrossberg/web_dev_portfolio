import React from "react";
import ImageGallery from "react-image-gallery";

function GalleryPage() {
  const images = [
    {
      original: "images/battleship-project-screenshot.png",
      thumbnail: "images/battleship-project-screenshot.png",
      description: "Playing battleship against an AI bot",
      alt: "Battleship web app project - playing against the AI bot.",
      originalHeight: "450px",
    },
    {
      original: "images/bayon-temple.jpg",
      thumbnail: "images/bayon-temple.jpg",
      description: "Bayon Temple, Angkor Wat",
      alt: "Angkor Wat's Bayon Temple: a Buddhist shrine comprised of smiling, serene faces carved into towering stones.",
      originalHeight: "450px",
    },
    {
      original: "images/brand-identity-example.png",
      thumbnail: "images/brand-identity-example.png",
      description: "Mobile app brand identity example",
      alt: "Sample of a mobile app brand identity for a fictional brand.",
      originalHeight: "450px",
    },
    {
      original: "images/buddhist-yin-yang.jpg",
      thumbnail: "images/buddhist-yin-yang.jpg",
      description: "Temple painting of yin and yang",
      alt: "A Chinese Buddhist painting depicting the classic states of yin and yang.",
      originalHeight: "450px",
    },
    {
      original: "images/debugging-in-x86-masm.png",
      thumbnail: "images/debugging-in-x86-masm.png",
      description:
        "Using Visual Studio to debug a computer assembly language (x86 MASM) program",
      alt: "Debugging a computer assembly language program in Visual Studio.",
      originalHeight: "450px",
    },
    {
      original: "images/forest-road-in-flagstaff.png",
      thumbnail: "images/forest-road-in-flagstaff.png",
      description: "Screenshot of a forest road in Flagstaff, Arizona",
      alt: "Google Maps street view of a forest park road in Flagstaff, Arizona.",
      originalHeight: "450px",
    },
    {
      original: "images/mama-and-fried-chicken.png",
      thumbnail: "images/mama-and-fried-chicken.png",
      description: "A typical lunch for Thai students",
      alt: "A bowl of instant ramen with fried chicken the side.",
      originalHeight: "450px",
    },
    {
      original: "images/odin-project-db-acess.png",
      thumbnail: "images/odin-project-db-acess.png",
      description: "Working on The Odin Project db backend",
      alt: "Grab of database schema for The Odin Project web app.",
      originalHeight: "450px",
    },
    {
      original: "images/parade-on-mardi-grad-day.jpg",
      thumbnail: "images/parade-on-mardi-grad-day.jpg",
      description: "Mardi Gras day in New Orleans",
      alt: "Festivities during a Mardi Gras day parade in New Orleans.",
      originalHeight: "450px",
    },
    {
      original: "images/portfolio-logo-icon.png",
      thumbnail: "images/portfolio-logo-icon.png",
      description: "My personal website logo",
      alt: "Line art logo, based on the letter D, from my personal website.",
      originalHeight: "450px",
    },
    {
      original: "images/roman-street-art.jpg",
      thumbnail: "images/roman-street-art.jpg",
      description: "Roman street art",
      alt: "Artistic poster on a wall next to a Roman sidewalk.",
      originalHeight: "450px",
    },
  ];
  return (
    <>
      <h2>Gallery</h2>
      <p>A collection of images from life and work.</p>
      <article>
        <ImageGallery items={images} />
      </article>
    </>
  );
}
export default GalleryPage;
