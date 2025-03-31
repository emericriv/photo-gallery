const images = [
  "img/sample1.jpg",
  "img/sample2.jpg",
  "img/sample3.jpg",
  "img/sample4.jpg",
  "img/sample5.jpg",
  "img/sample6.jpg",
  "img/sample7.jpg",
  "img/sample8.jpg",
  "img/sample9.jpg",
  "img/sample10.jpg",
];

const BentoGallery = () => {
  return (
    <section
      id="gallery"
      className="grid grid-cols-4 gap-4 scroll-mt-[15vh] mb-10"
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-lg shadow-lg ${
            index % 3 !== 0
              ? ""
              : index < 9
              ? "col-span-2 row-span-2"
              : "col-span-2"
          }`}
        >
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default BentoGallery;
