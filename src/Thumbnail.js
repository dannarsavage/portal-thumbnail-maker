/**
 * React function component for rendering the Portal item thumbnail
 * @param {object} props Object containing properties necessary for rendering 
 *    Required properties:
        - itemTitle: Item Title
        - itemType: Item Type ("Map Image Layer", "Web Map", etc...)
        - showItemType: Boolean indicating whether to display the item type
        - isInternalItem: Boolean indicating whether this item is internal or public
        - mapImageSource: Source URL of map image
 * @returns Rendered thumbnail
 */
function Thumbnail(props) {
  const thumbnailClassName = props.isInternalItem ? "Thumbnail Thumbnail-internal" : "Thumbnail Thumbnail-public";
  const mapImageSource = props.mapImageSource;
  let mapImageStyle = {};
  if (mapImageSource) {
    console.log(mapImageSource);
    console.log('url(' + mapImageSource + ') no-repeat center center');
    mapImageStyle.background = 'url(' + mapImageSource + ') no-repeat center center';
    mapImageStyle.backgroundSize = "100% 100%";
  }

  return (
    <div className={thumbnailClassName} id={props.id}>
      <div className="Graphic" style={mapImageStyle}></div>
      <div className="Internal-text">Internal</div>
      <div className="Item-title-text">{props.itemTitle}</div>
      <div className="Item-type-text">{props.itemType}</div>
      <img src="./logo512.png" className="Logo" alt="logo" />
    </div>
  );
}

export default Thumbnail;