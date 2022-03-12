import "./Controls.css"

/**
 * React function component for rendering the Portal item thumbnail
 * @param {object} props Object containing properties necessary for rendering 
 *    Required properties:
 *      - id: id to identify & style the parent div
        - itemTitle: Item Title
        - itemType: Item Type ("Map Image Layer", "Web Map", etc...)
        - showItemType: Boolean indicating whether to display the item type
        - isInternalItem: Boolean indicating whether this item is internal or public
        - handleMapImageSelection: Function for handling when the user selects a map image to use in the thumbnail
        - createThumbnailImage: Function for creating the thumbnail image
        - handleWebMapUrlChange: Function for handling web map URLs
        - webMapUrl: Current web map URL
 * @returns Rendered thumbnail
 */
function Controls(props) {
  return (
    <div id={props.id} className="Controls">
      <input
        type="text"
        key="ItemName"
        name="ItemName"
        onChange={props.handleChangeItemTitleText}
        placeholder={props.itemTitle}
        title="Title of the item being thumbnailed"
      />

      <select 
        name="ItemType" 
        key="ItemType"
        id="ItemType"
        onChange={props.handleChangeItemTypeText}
        title="Type of the item being thumbnailed"
        value={props.itemType}
        placeholder={props.itemType}
        >
        <option disabled hidden value=''>{props.itemType}</option>
        <option value="Map Image Layer">Map Image Layer</option>
        <option value="Feature Layer">Feature Layer</option>
        <option value="Layer">Layer</option>
      </select>

      <label class="toggle-switch modifier-class">
        <input 
          type="checkbox" 
          class="toggle-switch-input"
          onChange={props.toggleIsInternalItem}
          key="IsInternal"
          name="IsInternal"
          checked={props.isInternalItem} />
        <span class="toggle-switch-track margin-right-1"></span>
        <span class="toggle-switch-label font-size--1">Is internal</span>
      </label>

      <label htmlFor="MapImageFileToUpload">
        Main Thumbnail Image:<br />Supply an image or the map service's URI
      <input 
        type="file" 
        id="MapImageFileToUpload" 
        name="MapImageFileToUpload"
        onChange={props.handleMapImageSelection}
        title="Browse to an image file on your computer to be the main image of the thumbnail" />
      <input
        className="url"
        type="text"
        id="WebMapUrl"
        key="WebMapUrl"
        name="WebMapUrl"
        onChange={props.handleWebMapUrlChange}
        placeholder={props.webMapUrl}
        title="URL of the Esri map service being thumbnailed"
      />
      </label> 

      <label htmlFor="LogoToUpload">
        Browse for a logo
        <input 
          type="file" 
          id="LogoToUpload" 
          name="LogoToUpload"
          onChange={props.handleLogoSelection}/>
      </label>

      <button
        class="btn"
        onClick={props.createThumbnailImage}
        title="Open your thumbnail in a new browser tab">
          Create Image!
      </button>
    </div>
  );
}

export default Controls;