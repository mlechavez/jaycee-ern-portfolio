type MediaObjectProps = {
  item: any;
};
const MediaObject = ({ item }: MediaObjectProps) => {
  return (
    <div className="media-object">
      <div className="left">
        <span className={item.icon}></span>
      </div>
      <div className="right">
        <p className="media-object__title">{item.title}</p>
        <p className="media-object__content">{item.content}</p>
      </div>
    </div>
  );
};

export default MediaObject;
