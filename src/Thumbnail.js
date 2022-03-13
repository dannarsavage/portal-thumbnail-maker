import './Thumbnail.css';

/**
 * React function component for rendering the Portal item thumbnail
 * @param {object} props Object containing properties necessary for rendering 
 *    Required properties:
 *      - id: id to identify & style the parent div
 *      - itemTitle: Item Title
 *      - itemType: Item Type ("Map Image Layer", "Web Map", etc...)
 *      - showItemType: Boolean indicating whether to display the item type
 *      - isInternalItem: Boolean indicating whether this item is internal or public
 *      - mapImageSource: Source URL of map image
 *      - logoUrl: Source URL of logo image
 * @returns Rendered thumbnail
 */
function Thumbnail(props) {
  const thumbnailClassName = props.isInternalItem ? "Thumbnail Thumbnail-internal" : "Thumbnail Thumbnail-public";
  const mapImageStyle = {};
  const webMapGraphicStyle = {};
  if (props.mapImageSource) {
    webMapGraphicStyle.display = "none";
    mapImageStyle.backgroundImage = 'url(' + props.mapImageSource + ')';
  }/* else if (props.webMapUrl) {
    // TODO: Validate URL as a web map before committing to this route
    webMapGraphicStyle.display = "block";
    props.mapView.container = "WebMapGraphic"
  }*/

  return (
    <div className={thumbnailClassName} id={props.id}>
      <div id="MainGraphic" className="Graphic" style={mapImageStyle}>
        <div id="WebMapGraphic" style={webMapGraphicStyle}></div>
      </div>
      <div className="Internal-text">Internal</div>
      <div className="Item-title-text">{props.itemTitle}</div>
      <div className="Item-type-text">{props.itemType}</div>
      <img src={props.logoUrl} id="Logo" className="Logo" alt="logo" />
    </div>
  );
}

export default Thumbnail;