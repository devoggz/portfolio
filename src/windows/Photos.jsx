import { Mail, Search } from "lucide-react";
import clsx from "clsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { albums, photosLinks } from "#constants";
import useWindowStore from "#store/window.js";
import usePhotosStore from "#store/photo.js";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const { activeAlbum, setActiveAlbum } = usePhotosStore();

  const currentGallery = albums[activeAlbum] || [];

  const handleAlbumClick = (albumId) => {
    setActiveAlbum(albumId);
  };

  const handleImageClick = (image) => {
    openWindow("imgfile", {
      id: image.id,
      name: "Gallery Image",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: image.img,
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full h-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => handleAlbumClick(id)}
                className={clsx(id === activeAlbum ? "active" : "not-active")}
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {currentGallery.map((image) => (
              <li
                key={`${activeAlbum}-${image.id}`}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.img} alt={`Gallery ${image.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
